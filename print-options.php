<?php
/**
 * Plugin Name: Print Options
 * Plugin URI:  https://options.print.app
 * Description: Print product configurator for WooCommerce — options, live pricing, artwork upload. Prices are always re-verified server-side.
 * Version:     0.3.0
 * Author:      Print.App
 * License:     MIT
 * Text Domain: print-options
 *
 * Requires Plugins: woocommerce
 */

if (!defined('ABSPATH')) {
    exit;
}

define('PRODUCT_OPTIONS_VERSION', '0.3.0');
define('PRODUCT_OPTIONS_PLUGIN_FILE', __FILE__);
define('PRODUCT_OPTIONS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('PRODUCT_OPTIONS_PLUGIN_URL', plugin_dir_url(__FILE__));

require_once PRODUCT_OPTIONS_PLUGIN_DIR . 'includes/class-settings.php';
require_once PRODUCT_OPTIONS_PLUGIN_DIR . 'includes/class-backend.php';
require_once PRODUCT_OPTIONS_PLUGIN_DIR . 'includes/class-admin.php';
require_once PRODUCT_OPTIONS_PLUGIN_DIR . 'includes/class-product-tab.php';
require_once PRODUCT_OPTIONS_PLUGIN_DIR . 'includes/class-product-config.php';
require_once PRODUCT_OPTIONS_PLUGIN_DIR . 'includes/class-cart.php';
require_once PRODUCT_OPTIONS_PLUGIN_DIR . 'includes/class-frontend.php';

/* The anonymous store identity (id + secret) is created locally at
   activation. The backend hears nothing until the first library save. */
register_activation_hook(__FILE__, ['Product_Options_Backend', 'ensure_identity']);

add_action('plugins_loaded', static function () {
    if (!class_exists('WooCommerce')) {
        add_action('admin_notices', static function () {
            printf(
                '<div class="notice notice-error"><p>%s</p></div>',
                esc_html__(
                    'Product Options (Print Configurator) requires WooCommerce to be active.',
                    'print-options'
                )
            );
        });
        return;
    }

    load_plugin_textdomain('print-options', false, dirname(plugin_basename(__FILE__)) . '/languages');

    Product_Options_Settings::init();
    Product_Options_Admin::init();
    Product_Options_Product_Tab::init();
    Product_Options_Product_Config::init();
    Product_Options_Cart::init();
    Product_Options_Frontend::init();
});
