<?php
/**
 * Storefront rendering: enqueue the web-component bundle and render
 * <print-configurator> with the product's inline blueprint.
 */

if (!defined('ABSPATH')) {
    exit;
}

class Product_Options_Frontend
{
    public static function init(): void
    {
        add_action('wp_enqueue_scripts', [self::class, 'enqueue']);
        add_action('woocommerce_before_add_to_cart_button', [self::class, 'render']);
        add_filter('script_loader_tag', [self::class, 'as_module'], 10, 2);
        add_filter('woocommerce_get_price_html', [self::class, 'hide_price_html'], 10, 2);
    }

    /**
     * Configured products show no native price anywhere (single page, shop
     * archives, related products): the catalog price is a meaningless "$0.00"
     * placeholder — the configurator's live summary is the price, and the
     * cart line is always the server-verified total.
     */
    public static function hide_price_html(string $price, $product): string
    {
        if (
            $product instanceof WC_Product &&
            Product_Options_Product_Config::has_options($product->get_id())
        ) {
            return '';
        }
        return $price;
    }

    public static function enqueue(): void
    {
        if (!function_exists('is_product') || !is_product()) {
            return;
        }
        $product_id = get_queried_object_id();
        if (!Product_Options_Product_Config::get_config($product_id)) {
            return;
        }

        /* The widget ships INSIDE the plugin and is served same-origin.
           A cross-origin `type="module"` script is a CORS request, and the
           CDN's conditional CORS stamping let cached Origin-less variants
           break it intermittently — a whole bug class that same-origin
           loading cannot have. (Also a wp.org listing requirement: no
           external scripts.) The setting remains as an override for
           self-hosted forks. */
        $bundle = Product_Options_Settings::get('po_bundle_url');
        if ('' === $bundle) {
            $bundle = PRODUCT_OPTIONS_PLUGIN_URL . 'assets/print-configurator.js';
        }
        wp_enqueue_script('product-options-configurator', $bundle, [], PRODUCT_OPTIONS_VERSION, true);
        wp_enqueue_script(
            'product-options-loader',
            PRODUCT_OPTIONS_PLUGIN_URL . 'assets/loader.js',
            [],
            PRODUCT_OPTIONS_VERSION,
            true
        );
    }

    public static function as_module(string $tag, string $handle): string
    {
        if ('product-options-configurator' === $handle) {
            return str_replace('<script ', '<script type="module" ', $tag);
        }
        return $tag;
    }

    public static function render(): void
    {
        global $product;
        if (!$product instanceof WC_Product) {
            return;
        }
        $config = Product_Options_Product_Config::get_config($product->get_id());
        if (!$config) {
            return;
        }

        $turnstile_url = Product_Options_Settings::get('po_turnstile_url');
        $sitekey       = Product_Options_Settings::get('po_turnstile_sitekey');
        if ($turnstile_url && $sitekey) {
            $turnstile_url = add_query_arg('sitekey', rawurlencode($sitekey), $turnstile_url);
        }

        // Built here, not in the template: assignments inside an included
        // file land at file scope, which reads as globals to static analysis.
        $provider_attr = self::provider_attribute();

        include PRODUCT_OPTIONS_PLUGIN_DIR . 'templates/configurator.php';
    }

    /**
     * Filecheck element-mode provider config as a JSON attribute value, or ''
     * when no publishable key is configured. The store-level key lives in
     * settings; the per-field workflow lives inside the option set.
     */
    private static function provider_attribute(): string
    {
        $key = Product_Options_Settings::get('po_filecheck_pk');
        if ('' === $key) {
            return '';
        }
        $provider = [
            'id'             => 'filecheck',
            'name'           => 'Filecheck',
            'mode'           => 'element',
            'publishableKey' => $key,
            'capabilities'   => [
                'pages'           => true,
                'colorDetection'  => true,
                'canvas'          => true,
                'preflightIssues' => true,
            ],
        ];
        $agent = Product_Options_Settings::get('po_filecheck_agent_id');
        if ('' !== $agent) {
            $provider['agentId'] = $agent;
        }
        return (string) wp_json_encode($provider);
    }
}
