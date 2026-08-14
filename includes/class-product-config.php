<?php
/**
 * The single choke point for "what options does this product have?".
 *
 * Storefront rendering (class-frontend) and cart pricing (class-cart) both
 * come through get_config(), so this class IS the plugin's data model:
 *
 *   1. `_po_has_options` postmeta is the render gate. Absent means null —
 *      no HTTP request of any kind for unconfigured products.
 *   2. Configured products read the materialised copy the assign call put on
 *      the CDN (configs/{storeId}/{productId}.json) — the exact file the
 *      price verifier reads, so what the customer sees is what gets priced.
 *   3. A 60-second transient absorbs storefront traffic; assign/unassign and
 *      library-save propagation delete it, so the merchant's own site
 *      reflects every change immediately (staleness is a bug we've shipped
 *      before — never again).
 *
 * The old paste-JSON metabox is gone: assignment lives on the product's
 * Print Options tab (class-product-tab), creation on the admin page.
 */

if (!defined('ABSPATH')) {
    exit;
}

class PAPO_Product_Config
{
    /** Pre-0.3 storage — read once as a fallback so upgrades keep rendering. */
    public const LEGACY_META_KEY = '_product_options_config';

    private const TRANSIENT_PREFIX  = 'papo_config_';
    private const CACHE_SECONDS     = 60;
    private const FETCH_TIMEOUT     = 5;
    /** Cached marker for "gate present but CDN copy unreadable". */
    private const MISS              = 'miss';

    public static function init(): void
    {
        // All admin surfaces live in class-admin / class-product-tab now.
    }

    /**
     * Does this product have print options? Postmeta only — no HTTP — so it
     * is safe on archive pages that ask for dozens of products.
     */
    public static function has_options(int $product_id): bool
    {
        if ('yes' === get_post_meta($product_id, PAPO_Product_Tab::GATE_META, true)) {
            return true;
        }
        $legacy = get_post_meta($product_id, self::LEGACY_META_KEY, true);
        return is_string($legacy) && '' !== $legacy;
    }

    /** Decoded option set for a product, or null when none is assigned. */
    public static function get_config(int $product_id): ?array
    {
        if ('yes' !== get_post_meta($product_id, PAPO_Product_Tab::GATE_META, true)) {
            return self::legacy_config($product_id);
        }

        $transient = self::TRANSIENT_PREFIX . $product_id;
        $cached    = get_transient($transient);
        if (self::MISS === $cached) {
            return null;
        }
        if (is_array($cached)) {
            return $cached;
        }

        $store = PAPO_Backend::store_id();
        if (!$store) {
            return null;
        }
        $url      = PAPO_Backend::cdn_base()
            . '/configs/' . rawurlencode($store) . '/' . $product_id . '.json';
        $response = wp_remote_get($url, ['timeout' => self::FETCH_TIMEOUT]);

        if (is_wp_error($response) || 200 !== (int) wp_remote_retrieve_response_code($response)) {
            /* Unreachable or gone: cache the miss briefly so a broken CDN
               cannot amplify into a request per pageview, but keep it SHORT —
               the configurator vanishing from a live product is an outage. */
            set_transient($transient, self::MISS, self::CACHE_SECONDS);
            return null;
        }

        $decoded = json_decode(wp_remote_retrieve_body($response), true);
        if (!is_array($decoded)) {
            set_transient($transient, self::MISS, self::CACHE_SECONDS);
            return null;
        }

        set_transient($transient, $decoded, self::CACHE_SECONDS);
        return $decoded;
    }

    /** Assign/unassign and save-propagation call this — see rule 3 above. */
    public static function bust_config_cache(int $product_id): void
    {
        delete_transient(self::TRANSIENT_PREFIX . $product_id);
    }

    /**
     * Pre-0.3 installs stored pasted JSON in postmeta. Honour it until the
     * merchant assigns a real set (the tab save deletes nothing here, but the
     * gate meta takes precedence the moment it exists).
     */
    private static function legacy_config(int $product_id): ?array
    {
        $raw = get_post_meta($product_id, self::LEGACY_META_KEY, true);
        if (!is_string($raw) || '' === $raw) {
            return null;
        }
        $decoded = json_decode($raw, true);
        return is_array($decoded) ? $decoded : null;
    }
}
