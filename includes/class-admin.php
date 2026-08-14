<?php
/**
 * The "Print Options" admin page: the builder, bundled.
 *
 * The merchant creates and manages their option sets here; assigning a set to
 * a product happens on the product's own Print Options tab (class-product-tab).
 *
 * The builder is SHIPPED WITH THE PLUGIN and runs as an ordinary script on
 * this page — WordPress does not allow a plugin screen to embed an external
 * app in an iframe. Its writes POST to the admin-ajax handlers below, where
 * PHP makes the signed backend call, so the store secret never reaches any
 * browser, including this admin's.
 */

if (!defined('ABSPATH')) {
    exit;
}

class PAPO_Admin
{
    public const PAGE_SLUG = 'papo-library';

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
        add_filter('script_loader_tag', [self::class, 'module_tag'], 10, 3);
        add_action('wp_ajax_papo_bridge', [self::class, 'handle_bridge']);
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

    public static function enqueue(string $hook): void
    {
        if (false === strpos($hook, self::PAGE_SLUG)) {
            return;
        }
        PAPO_Backend::ensure_identity();

        wp_enqueue_style(
            'papo-builder',
            PAPO_PLUGIN_URL . 'assets/builder.css',
            [],
            PAPO_VERSION
        );
        wp_enqueue_script(
            'papo-builder',
            PAPO_PLUGIN_URL . 'assets/builder.js',
            [],
            PAPO_VERSION,
            true
        );
        /* The builder reads this to find admin-ajax and to know it is running
           in WooCommerce mode. The store id is a public identifier; the store
           SECRET is never exposed here — PHP signs backend writes itself. */
        wp_localize_script('papo-builder', 'papoBuilder', [
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce'   => wp_create_nonce('papo_bridge'),
            'store'   => PAPO_Backend::store_id(),
        ]);
    }

    /**
     * The builder is an ES module; wp_enqueue_script emits a classic tag.
     *
     * Without this the browser refuses the file outright ("Cannot use
     * import.meta outside a module") and the page renders an empty container.
     * Only this one handle is touched.
     */
    public static function module_tag(string $tag, string $handle, string $src): string
    {
        if ('papo-builder' !== $handle) {
            return $tag;
        }
        /* Add the attribute to WordPress's own tag rather than composing a
           new one: the script stays properly enqueued (and Plugin Check can
           still see that it is). */
        unset($src);
        return str_replace(' src=', ' type="module" src=', $tag);
    }

    public static function render(): void
    {
        if (!current_user_can('manage_woocommerce')) {
            return;
        }
        /* The builder is shipped with the plugin and mounts here. It used to
           be an iframe pointing at options.print.app, which the WordPress
           guidelines do not allow for a plugin's own screens — and serving it
           from this site removes the cross-origin handshake entirely. */
        ?>
        <div class="wrap">
            <div id="papo-builder"></div>
            <noscript>
                <?php esc_html_e(
                    'The Print Options builder needs JavaScript enabled.',
                    'print-app-product-options-for-woocommerce'
                ); ?>
            </noscript>
        </div>
        <?php
    }

    /* ------------------------------------------------------------------ */
    /* The RPC relay target                                                */
    /* ------------------------------------------------------------------ */

    public static function handle_bridge(): void
    {
        check_ajax_referer('papo_bridge', 'nonce');
        if (!current_user_can('manage_woocommerce')) {
            wp_send_json_error(['message' => __('You are not allowed to manage Print Options.', 'print-app-product-options-for-woocommerce')], 403);
        }

        $method = isset($_POST['method']) ? sanitize_key(wp_unslash($_POST['method'])) : '';
        if (!isset(self::METHODS[$method])) {
            wp_send_json_error(['message' => __('Unknown request.', 'print-app-product-options-for-woocommerce')], 400);
        }

        /* Params are structured JSON (an option-set document is deeply
           nested), so they are decoded and then recursively sanitized by
           PAPO_Cart::clean() — scalars through sanitize_text_field, keys
           restricted to the identifier character set — before any handler
           sees them. Backend writes are validated again by the API with the
           same parser the pricing engine uses. */
        $params = [];
        if (isset($_POST['params'])) {
            // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- decoded, then recursively sanitized by PAPO_Cart::clean().
            $decoded = PAPO_Cart::clean(json_decode((string) wp_unslash($_POST['params']), true));
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

        $result = PAPO_Backend::request('POST', '/po/woo/library', [
            'setKey' => $set_key,
            'title'  => $title,
            'config' => $config,
        ]);
        if (!$result['ok']) {
            wp_send_json_error(['message' => $result['error']], 502);
        }

        PAPO_Backend::bust_list_cache();
        // The save propagated to every assigned product server-side; drop
        // their local config caches so this site renders the new version now.
        $updated = isset($result['body']['updatedProducts']) && is_array($result['body']['updatedProducts'])
            ? $result['body']['updatedProducts']
            : [];
        foreach ($updated as $product_id) {
            PAPO_Product_Config::bust_config_cache((int) $product_id);
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

        $result = PAPO_Backend::request('DELETE', '/po/woo/library', null, ['setKey' => $set_key]);
        if (!$result['ok']) {
            wp_send_json_error(['message' => $result['error']], 502);
        }

        PAPO_Backend::bust_list_cache();
        wp_send_json_success(['setKey' => $set_key]);
    }

    private static function handle_currency(array $params): void
    {
        unset($params);
        wp_send_json_success(['currency' => get_woocommerce_currency()]);
    }
}
