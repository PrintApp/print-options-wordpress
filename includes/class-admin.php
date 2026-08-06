<?php
/**
 * The "Print Options" admin page: the builder, embedded.
 *
 * The merchant creates and manages their option sets here; assigning a set to
 * a product happens on the product's own Print Options tab (class-product-tab).
 *
 * The iframe carries only PUBLIC values (?store= and ?origin=). Its writes
 * arrive as postMessage RPCs, relayed by assets/admin-bridge.js to the
 * admin-ajax handlers below, where PHP makes the signed backend call — the
 * store secret never reaches any browser, including this admin's.
 */

if (!defined('ABSPATH')) {
    exit;
}

class Product_Options_Admin
{
    public const PAGE_SLUG = 'product-options-library';

    /** RPC methods the bridge may relay, mapped to handlers below. */
    private const METHODS = [
        'library_save'   => 'handle_library_save',
        'library_delete' => 'handle_library_delete',
        'currency'       => 'handle_currency',
    ];

    public static function init(): void
    {
        add_action('admin_menu', [self::class, 'menu']);
        add_action('admin_enqueue_scripts', [self::class, 'enqueue']);
        add_action('wp_ajax_po_bridge', [self::class, 'handle_bridge']);
    }

    public static function menu(): void
    {
        /* Top-level menu (owner decision): the plugin is its own product,
           not a WooCommerce sub-feature — it only REQUIRES WooCommerce. */
        add_menu_page(
            __('Print Options', 'print-app-product-options-for-woocommerce'),
            __('Print Options', 'print-app-product-options-for-woocommerce'),
            'manage_woocommerce',
            self::PAGE_SLUG,
            [self::class, 'render'],
            'dashicons-printer',
            56
        );
        // Rename the auto-created first submenu entry.
        add_submenu_page(
            self::PAGE_SLUG,
            __('Option Sets', 'print-app-product-options-for-woocommerce'),
            __('Option Sets', 'print-app-product-options-for-woocommerce'),
            'manage_woocommerce',
            self::PAGE_SLUG,
            [self::class, 'render']
        );
    }

    /** The builder's origin — the only origin the bridge will talk to. */
    public static function builder_origin(): string
    {
        $base  = Product_Options_Settings::get('po_builder_base');
        $parts = wp_parse_url($base);
        if (empty($parts['scheme']) || empty($parts['host'])) {
            return 'https://options.print.app';
        }
        $origin = $parts['scheme'] . '://' . $parts['host'];
        if (!empty($parts['port'])) {
            $origin .= ':' . $parts['port'];
        }
        return $origin;
    }

    private static function builder_url(): string
    {
        Product_Options_Backend::ensure_identity();
        /* The parent origin travels as SEPARATE host and scheme params —
           never as a `scheme://` URL. The WAF in front of the CDN blocks
           query strings containing full URLs (RFI rule) with an opaque 403,
           which is exactly how the first embedded page load died. */
        $admin_parts = wp_parse_url(admin_url());

        return add_query_arg(
            [
                'platform' => 'woo',
                'store'    => Product_Options_Backend::store_id(),
                'parent'   => (string) ($admin_parts['host'] ?? '')
                    . (empty($admin_parts['port']) ? '' : ':' . $admin_parts['port']),
                'scheme'   => (string) ($admin_parts['scheme'] ?? 'https'),
            ],
            self::builder_origin() . '/builder/'
        );
    }

    public static function enqueue(string $hook): void
    {
        if (false === strpos($hook, self::PAGE_SLUG)) {
            return;
        }
        wp_enqueue_script(
            'product-options-admin-bridge',
            PRODUCT_OPTIONS_PLUGIN_URL . 'assets/admin-bridge.js',
            [],
            PRODUCT_OPTIONS_VERSION,
            true
        );
        wp_localize_script('product-options-admin-bridge', 'poBridge', [
            'ajaxUrl'       => admin_url('admin-ajax.php'),
            'nonce'         => wp_create_nonce('po_bridge'),
            'builderOrigin' => self::builder_origin(),
        ]);
    }

    public static function render(): void
    {
        if (!current_user_can('manage_woocommerce')) {
            return;
        }
        ?>
        <div class="wrap" style="height: calc(100vh - 65px); display: flex; flex-direction: column;">
            <iframe
                id="po-builder-frame"
                src="<?php echo esc_url(self::builder_url()); ?>"
                title="<?php esc_attr_e('Print Options builder', 'print-app-product-options-for-woocommerce'); ?>"
                style="flex: 1; width: 100%; border: 1px solid #c3c4c7; border-radius: 4px; background: #fff;"
            ></iframe>
        </div>
        <?php
    }

    /* ------------------------------------------------------------------ */
    /* The RPC relay target                                                */
    /* ------------------------------------------------------------------ */

    public static function handle_bridge(): void
    {
        check_ajax_referer('po_bridge', 'nonce');
        if (!current_user_can('manage_woocommerce')) {
            wp_send_json_error(['message' => __('You are not allowed to manage Print Options.', 'print-app-product-options-for-woocommerce')], 403);
        }

        $method = isset($_POST['method']) ? sanitize_key(wp_unslash($_POST['method'])) : '';
        if (!isset(self::METHODS[$method])) {
            wp_send_json_error(['message' => __('Unknown request.', 'print-app-product-options-for-woocommerce')], 400);
        }

        // Params are structured JSON (an option-set document is deeply nested);
        // decoded here, validated by each handler and — for backend writes —
        // by the API itself with the same parser the pricing engine uses.
        $params = [];
        if (isset($_POST['params'])) {
            $decoded = json_decode((string) wp_unslash($_POST['params']), true); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
            if (is_array($decoded)) {
                $params = $decoded;
            }
        }

        $handler = self::METHODS[$method];
        self::$handler($params);
    }

    private static function handle_library_save(array $params): void
    {
        $set_key = isset($params['setKey']) && is_string($params['setKey']) ? $params['setKey'] : '';
        $title   = isset($params['title']) && is_string($params['title']) ? $params['title'] : '';
        $config  = isset($params['config']) && is_array($params['config']) ? $params['config'] : null;
        if ('' === $set_key || null === $config) {
            wp_send_json_error(['message' => __('Invalid option set.', 'print-app-product-options-for-woocommerce')], 400);
        }

        $result = Product_Options_Backend::request('POST', '/po/woo/library', [
            'setKey' => $set_key,
            'title'  => $title,
            'config' => $config,
        ]);
        if (!$result['ok']) {
            wp_send_json_error(['message' => $result['error']], 502);
        }

        Product_Options_Backend::bust_list_cache();
        // The save propagated to every assigned product server-side; drop
        // their local config caches so this site renders the new version now.
        $updated = isset($result['body']['updatedProducts']) && is_array($result['body']['updatedProducts'])
            ? $result['body']['updatedProducts']
            : [];
        foreach ($updated as $product_id) {
            Product_Options_Product_Config::bust_config_cache((int) $product_id);
        }

        wp_send_json_success([
            'setKey'          => $set_key,
            'updatedProducts' => $updated,
        ]);
    }

    private static function handle_library_delete(array $params): void
    {
        $set_key = isset($params['setKey']) && is_string($params['setKey']) ? $params['setKey'] : '';
        if ('' === $set_key) {
            wp_send_json_error(['message' => __('Invalid option set.', 'print-app-product-options-for-woocommerce')], 400);
        }

        $result = Product_Options_Backend::request('DELETE', '/po/woo/library', null, ['setKey' => $set_key]);
        if (!$result['ok']) {
            wp_send_json_error(['message' => $result['error']], 502);
        }

        Product_Options_Backend::bust_list_cache();
        wp_send_json_success(['setKey' => $set_key]);
    }

    private static function handle_currency(array $params): void
    {
        unset($params);
        wp_send_json_success(['currency' => get_woocommerce_currency()]);
    }
}
