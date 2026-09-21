<?php
/**
 * Storefront rendering: enqueue the web-component bundle and render
 * <print-configurator> with the product's inline blueprint.
 */

if (!defined('ABSPATH')) {
    exit;
}

class PAPO_Frontend
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
            PAPO_Product_Config::has_options($product->get_id())
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
        if (!PAPO_Product_Config::get_config($product_id)) {
            return;
        }

        /* The widget ships INSIDE the plugin and is served same-origin.
           A cross-origin `type="module"` script is a CORS request, and the
           CDN's conditional CORS stamping let cached Origin-less variants
           break it intermittently — a whole bug class that same-origin
           loading cannot have. (Also a wp.org listing requirement: no
           external scripts.) The setting remains as an override for
           self-hosted forks. */
        $bundle = PAPO_Settings::get('papo_bundle_url');
        if ('' === $bundle) {
            $bundle = PAPO_PLUGIN_URL . 'assets/print-configurator.js';
        }
        wp_enqueue_script('papo-configurator', $bundle, [], PAPO_VERSION, true);
        wp_enqueue_script(
            'papo-loader',
            PAPO_PLUGIN_URL . 'assets/loader.js',
            [],
            PAPO_VERSION,
            true
        );
    }

    public static function as_module(string $tag, string $handle): string
    {
        if ('papo-configurator' === $handle) {
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
        $config = PAPO_Product_Config::get_config($product->get_id());
        if (!$config) {
            return;
        }

        $turnstile_url = PAPO_Settings::get('papo_turnstile_url');
        $sitekey       = PAPO_Settings::get('papo_turnstile_sitekey');
        if ($turnstile_url && $sitekey) {
            $turnstile_url = add_query_arg('sitekey', rawurlencode($sitekey), $turnstile_url);
        }

        // Built here, not in the template: assignments inside an included
        // file land at file scope, which reads as globals to static analysis.
        $provider_attr = self::provider_attribute();
        $locale        = self::locale();
        $price_format  = self::price_format();
        $price_note    = self::price_note();
        $strings       = self::widget_strings();

        include PAPO_PLUGIN_DIR . 'templates/configurator.php';
    }

    /**
     * WordPress spells locales POSIX-style (ro_RO); the widget's number
     * formatting needs BCP 47 (ro-RO). The widget normalises too, but the
     * attribute should be right at the source.
     */
    private static function locale(): string
    {
        return str_replace('_', '-', get_locale());
    }

    /**
     * The store's own currency format, so the live summary prints prices
     * exactly as the cart will ("10,00 lei", not Intl's "10,00 RON").
     */
    private static function price_format(): string
    {
        $format = [
            'symbol'            => html_entity_decode(get_woocommerce_currency_symbol(), ENT_QUOTES, 'UTF-8'),
            'position'          => (string) get_option('woocommerce_currency_pos', 'left'),
            'decimals'          => wc_get_price_decimals(),
            'thousandSeparator' => wc_get_price_thousand_separator(),
            'decimalSeparator'  => wc_get_price_decimal_separator(),
        ];
        return (string) wp_json_encode($format);
    }

    /**
     * Plain-text note under the total. Defaults to the WooCommerce price
     * display suffix ("incl. VAT" and the like) with its price placeholders
     * removed — they make no sense in a live summary. Filter `papo_price_note`
     * to set any other wording (or '' to hide it).
     */
    private static function price_note(): string
    {
        $suffix = (string) get_option('woocommerce_price_display_suffix', '');
        $suffix = str_replace(['{price_including_tax}', '{price_excluding_tax}'], '', $suffix);
        $suffix = trim((string) preg_replace('/\s+/', ' ', wp_strip_all_tags($suffix)));
        return (string) apply_filters('papo_price_note', $suffix);
    }

    /**
     * Every customer-facing string the widget renders itself, run through
     * WordPress i18n so translations (translate.wordpress.org, Loco
     * Translate, a .po in wp-content/languages/plugins) apply. Filter
     * `papo_widget_strings` to override any of them per site.
     *
     * Keys mirror packages/core-ui/src/i18n.ts; `{name}` placeholders are
     * substituted by the widget and must be kept in translations.
     */
    private static function widget_strings(): string
    {
        $strings = [
            'state.loading'             => __('Loading options…', 'print-app-product-options-for-woocommerce'),
            'summary.title'             => __('Summary', 'print-app-product-options-for-woocommerce'),
            'summary.basePrice'         => __('Base price', 'print-app-product-options-for-woocommerce'),
            'summary.setupFee'          => __('Setup fee', 'print-app-product-options-for-woocommerce'),
            'summary.minimumAdjustment' => __('Minimum order adjustment', 'print-app-product-options-for-woocommerce'),
            'summary.total'             => __('Total', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {quantity} and {unitPrice} placeholders */
            'summary.unitPrice'         => __('{quantity} × {unitPrice}', 'print-app-product-options-for-woocommerce'),
            'summary.unavailable'       => __('This combination is currently unavailable.', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {count} placeholder */
            'summary.issues'            => __('{count} options need attention', 'print-app-product-options-for-woocommerce'),
            'summary.addToCart'         => __('Add to cart', 'print-app-product-options-for-woocommerce'),
            'recap.empty'               => __('Your choices will appear here.', 'print-app-product-options-for-woocommerce'),
            'wizard.back'               => __('Back', 'print-app-product-options-for-woocommerce'),
            'wizard.continue'           => __('Continue', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {label} placeholder (the option name, lower-case) */
            'choice.placeholder'        => __('Choose {label}…', 'print-app-product-options-for-woocommerce'),
            'choice.placeholderBare'    => __('Choose…', 'print-app-product-options-for-woocommerce'),
            'quantity.label'            => __('Quantity', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {label} placeholder */
            'stepper.decrease'          => __('Decrease {label}', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {label} placeholder */
            'stepper.increase'          => __('Increase {label}', 'print-app-product-options-for-woocommerce'),
            'dimensions.width'          => __('Width', 'print-app-product-options-for-woocommerce'),
            'dimensions.height'         => __('Height', 'print-app-product-options-for-woocommerce'),
            'dimensions.unit'           => __('Unit', 'print-app-product-options-for-woocommerce'),
            'upload.drop'               => __('Drop your file here or click to browse', 'print-app-product-options-for-woocommerce'),
            'upload.replace'            => __('Click or drop to replace', 'print-app-product-options-for-woocommerce'),
            'upload.analyzing'          => __('Analyzing…', 'print-app-product-options-for-woocommerce'),
            'upload.secureLoading'      => __('Loading secure upload…', 'print-app-product-options-for-woocommerce'),
            'upload.unavailable'        => __('Upload is unavailable', 'print-app-product-options-for-woocommerce'),
            'upload.retry'              => __('Retry', 'print-app-product-options-for-woocommerce'),
            'artwork.or'                => __('or', 'print-app-product-options-for-woocommerce'),
            'artwork.change'            => __('Change', 'print-app-product-options-for-woocommerce'),
            'artwork.remove'            => __('Remove', 'print-app-product-options-for-woocommerce'),
            'validation.design'         => __('Please create your design.', 'print-app-product-options-for-woocommerce'),
            'validation.file'           => __('Please upload a file.', 'print-app-product-options-for-woocommerce'),
            'validation.text'           => __('Please fill this in.', 'print-app-product-options-for-woocommerce'),
            'validation.size'           => __('Please enter a size.', 'print-app-product-options-for-woocommerce'),
            'validation.number'         => __('Please enter a value.', 'print-app-product-options-for-woocommerce'),
            'validation.choice'         => __('Please make a selection.', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {min} placeholder */
            'validation.minSelect'      => __('Choose at least {min}.', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {max} placeholder */
            'validation.maxSelect'      => __('Choose at most {max}.', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {min}, {max} and {unit} placeholders */
            'validation.width'          => __('Width must be between {min} and {max} {unit}.', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {min}, {max} and {unit} placeholders */
            'validation.height'         => __('Height must be between {min} and {max} {unit}.', 'print-app-product-options-for-woocommerce'),
            /* translators: keep the {min} and {max} placeholders */
            'validation.range'          => __('Enter a value between {min} and {max}.', 'print-app-product-options-for-woocommerce'),
        ];
        $strings = apply_filters('papo_widget_strings', $strings);
        return (string) wp_json_encode(is_array($strings) ? $strings : []);
    }

    /**
     * Filecheck element-mode provider config as a JSON attribute value, or ''
     * when no publishable key is configured. The store-level key lives in
     * settings; the per-field workflow lives inside the option set.
     */
    private static function provider_attribute(): string
    {
        $key = PAPO_Settings::get('papo_filecheck_pk');
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
        $agent = PAPO_Settings::get('papo_filecheck_agent_id');
        if ('' !== $agent) {
            $provider['agentId'] = $agent;
        }
        return (string) wp_json_encode($provider);
    }
}
