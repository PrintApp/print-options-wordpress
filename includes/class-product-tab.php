<?php
/**
 * The "Print Options" tab on the product edit page — WHERE ASSIGNMENT LIVES.
 *
 * Sits alongside General/Inventory/Attributes/Variations. The merchant picks
 * one of their named option sets from a dropdown and saves the product;
 * no JSON ever appears. Creating and editing the sets themselves happens on
 * the plugin's own Print Options page (class-admin.php).
 *
 * Saving the selection makes a signed backend call (assign/unassign), which
 * materialises the set for this product on the CDN — the same file the
 * storefront and the price verifier read. The local `_po_has_options` meta is
 * only the render gate; the CDN copy is the pricing authority.
 */

if (!defined('ABSPATH')) {
    exit;
}

class Product_Options_Product_Tab
{
    public const SET_KEY_META = '_po_set_key';
    public const GATE_META    = '_po_has_options';

    private const NOTICE_TRANSIENT_PREFIX = 'po_tab_notice_';

    public static function init(): void
    {
        add_filter('woocommerce_product_data_tabs', [self::class, 'add_tab']);
        add_action('woocommerce_product_data_panels', [self::class, 'render_panel']);
        add_action('woocommerce_process_product_meta', [self::class, 'save']);
        add_action('admin_notices', [self::class, 'show_notice']);
    }

    public static function add_tab(array $tabs): array
    {
        $tabs['print_options'] = [
            'label'    => __('Print Options', 'product-options'),
            'target'   => 'print_options_product_data',
            'class'    => [],
            'priority' => 65,
        ];
        return $tabs;
    }

    public static function render_panel(): void
    {
        global $post;
        $current = (string) get_post_meta($post->ID, self::SET_KEY_META, true);
        $list    = Product_Options_Backend::fetch_list();
        $library = $list['library'];
        $manage  = admin_url('admin.php?page=' . Product_Options_Admin::PAGE_SLUG);

        wp_nonce_field('po_product_tab', 'po_product_tab_nonce');
        ?>
        <div id="print_options_product_data" class="panel woocommerce_options_panel">
            <div class="options_group">
                <p class="form-field">
                    <label for="po_set_key"><?php esc_html_e('Print Options', 'product-options'); ?></label>
                    <select id="po_set_key" name="po_set_key" style="min-width: 260px;">
                        <option value=""><?php esc_html_e('None — sell at the normal price', 'product-options'); ?></option>
                        <?php foreach ($library as $set) : ?>
                            <?php
                            if (!isset($set['setKey']) || !is_string($set['setKey'])) {
                                continue;
                            }
                            $title = isset($set['title']) && is_string($set['title']) && '' !== $set['title']
                                ? $set['title']
                                : __('Untitled options', 'product-options');
                            ?>
                            <option
                                value="<?php echo esc_attr($set['setKey']); ?>"
                                <?php selected($current, $set['setKey']); ?>
                            ><?php echo esc_html($title); ?></option>
                        <?php endforeach; ?>
                    </select>
                </p>
                <?php if (!$library) : ?>
                    <p>
                        <?php
                        printf(
                            /* translators: %s: link to the Print Options page */
                            esc_html__('You haven\'t created any print options yet — %s to build your first set.', 'product-options'),
                            '<a href="' . esc_url($manage) . '">' . esc_html__('open Print Options', 'product-options') . '</a>'
                        );
                        ?>
                    </p>
                <?php else : ?>
                    <p>
                        <?php
                        printf(
                            /* translators: %s: link to the Print Options page */
                            esc_html__('Customers configure and price their job right on the product page. Manage the sets themselves on the %s page.', 'product-options'),
                            '<a href="' . esc_url($manage) . '">' . esc_html__('Print Options', 'product-options') . '</a>'
                        );
                        ?>
                    </p>
                <?php endif; ?>
            </div>
        </div>
        <?php
    }

    public static function save(int $post_id): void
    {
        if (
            !isset($_POST['po_product_tab_nonce']) ||
            !wp_verify_nonce(
                sanitize_text_field(wp_unslash($_POST['po_product_tab_nonce'])),
                'po_product_tab'
            )
        ) {
            return;
        }
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        $selected = isset($_POST['po_set_key'])
            ? sanitize_text_field(wp_unslash($_POST['po_set_key']))
            : '';
        $current = (string) get_post_meta($post_id, self::SET_KEY_META, true);
        if ($selected === $current) {
            return;
        }

        if ('' === $selected) {
            $result = Product_Options_Backend::request('POST', '/po/woo/unassign', [
                'productId' => (string) $post_id,
            ]);
            if (!$result['ok']) {
                self::notify(sprintf(
                    /* translators: %s: error message */
                    __('Print Options could not be removed from this product: %s', 'product-options'),
                    $result['error']
                ));
                return;
            }
            delete_post_meta($post_id, self::SET_KEY_META);
            delete_post_meta($post_id, self::GATE_META);
        } else {
            $set_title = '';
            foreach (Product_Options_Backend::fetch_list()['library'] as $set) {
                if (isset($set['setKey']) && $set['setKey'] === $selected) {
                    $set_title = isset($set['title']) && is_string($set['title']) ? $set['title'] : '';
                    break;
                }
            }
            $result = Product_Options_Backend::request('POST', '/po/woo/assign', [
                'productId'    => (string) $post_id,
                'setKey'       => $selected,
                'productTitle' => get_the_title($post_id),
                'setTitle'     => $set_title,
            ]);
            if (!$result['ok']) {
                self::notify(sprintf(
                    /* translators: %s: error message */
                    __('Print Options could not be assigned to this product: %s', 'product-options'),
                    $result['error']
                ));
                return;
            }
            update_post_meta($post_id, self::SET_KEY_META, $selected);
            update_post_meta($post_id, self::GATE_META, 'yes');
        }

        // The assignment changed what this product serves — both local caches
        // are now wrong.
        Product_Options_Product_Config::bust_config_cache($post_id);
        Product_Options_Backend::bust_list_cache();
    }

    /**
     * Product saves redirect, so failures surface via a short-lived transient
     * rather than being lost — never silently.
     */
    private static function notify(string $message): void
    {
        set_transient(self::NOTICE_TRANSIENT_PREFIX . get_current_user_id(), $message, 60);
    }

    public static function show_notice(): void
    {
        $key     = self::NOTICE_TRANSIENT_PREFIX . get_current_user_id();
        $message = get_transient($key);
        if (!is_string($message) || '' === $message) {
            return;
        }
        delete_transient($key);
        printf('<div class="notice notice-error is-dismissible"><p>%s</p></div>', esc_html($message));
    }
}
