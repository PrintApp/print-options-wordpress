<?php
/**
 * Plugin Name: Print.App Product Options for WooCommerce
 * Plugin URI:  https://options.print.app
 * Description: Print product configurator for WooCommerce — options, live pricing, artwork upload. Prices are always re-verified server-side.
 * Version:     0.4.0
 * Author:      Print.App
 * License:     MIT
 * Text Domain: print-app-product-options-for-woocommerce
 *
 * Requires Plugins: woocommerce
 */

if (!defined('ABSPATH')) {
    exit;
}

define('PAPO_VERSION', '0.4.0');
define('PAPO_PLUGIN_FILE', __FILE__);
define('PAPO_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('PAPO_PLUGIN_URL', plugin_dir_url(__FILE__));

require_once PAPO_PLUGIN_DIR . 'includes/class-settings.php';
require_once PAPO_PLUGIN_DIR . 'includes/class-backend.php';
require_once PAPO_PLUGIN_DIR . 'includes/class-admin.php';
require_once PAPO_PLUGIN_DIR . 'includes/class-product-tab.php';
require_once PAPO_PLUGIN_DIR . 'includes/class-product-config.php';
require_once PAPO_PLUGIN_DIR . 'includes/class-cart.php';
require_once PAPO_PLUGIN_DIR . 'includes/class-frontend.php';

/* The anonymous store identity (id + secret) is created locally at
   activation. The backend hears nothing until the first library save. */
register_activation_hook(__FILE__, ['PAPO_Backend', 'ensure_identity']);

add_action('plugins_loaded', static function () {
    if (!class_exists('WooCommerce')) {
        add_action('admin_notices', static function () {
            printf(
                '<div class="notice notice-error"><p>%s</p></div>',
                esc_html__(
                    'Product Options (Print Configurator) requires WooCommerce to be active.',
                    'print-app-product-options-for-woocommerce'
                )
            );
        });
        return;
    }

    papo_migrate_legacy_keys();

    PAPO_Settings::init();
    PAPO_Admin::init();
    PAPO_Product_Tab::init();
    PAPO_Product_Config::init();
    PAPO_Cart::init();
    PAPO_Frontend::init();
});

/**
 * Carry pre-0.4.0 data over to the prefixed keys, once.
 *
 * The store identity is the important one: it is what the merchant's saved
 * option sets are bound to on the server, so a site that silently generated a
 * fresh id would find its whole library gone. Runs on plugins_loaded rather
 * than activation because updating a plugin in place does not re-activate it.
 */
function papo_migrate_legacy_keys(): void
{
    if ('done' === get_option('papo_key_migration')) {
        return;
    }

    $carry = [
        // Identity: the library on the server is bound to these.
        'store_id',
        'store_secret',
        /* Settings. Every one of these defaults to a harmless value, so a
           missed migration would not error — it would silently switch a
           feature off. A shop that had entered a Filecheck key would simply
           stop preflighting artwork, with nothing on screen to explain it. */
        'bundle_url',
        'verify_endpoint',
        'upload_endpoint',
        'turnstile_url',
        'turnstile_sitekey',
        'filecheck_pk',
        'filecheck_agent_id',
    ];
    foreach ($carry as $name) {
        $legacy = get_option('po_' . $name);
        if ($legacy && !get_option('papo_' . $name)) {
            update_option('papo_' . $name, $legacy, false);
        }
    }

    /* Product assignments. Only products that carry the old meta are touched,
       and the query is capped: a shop with more than this many configured
       products is well past the point where it should have been migrated. */
    $assigned = get_posts([
        'post_type'      => 'product',
        'post_status'    => 'any',
        'meta_key'       => '_po_set_key', // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
        'fields'         => 'ids',
        'posts_per_page' => 500,
    ]);
    foreach ($assigned as $product_id) {
        $set_key = get_post_meta($product_id, '_po_set_key', true);
        if ($set_key && !get_post_meta($product_id, '_papo_set_key', true)) {
            update_post_meta($product_id, '_papo_set_key', $set_key);
        }
        delete_post_meta($product_id, '_po_set_key');
    }

    update_option('papo_key_migration', 'done', true);
}
