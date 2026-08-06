<?php
/**
 * The store's anonymous identity and its signed channel to the backend.
 *
 * IDENTITY: a random namespace (`woo-{uuid}`) plus a 64-hex secret, generated
 * locally at activation and stored in wp_options (autoload off — storefront
 * pageviews never need them). No domain keying: domains change and localhost
 * must work. The backend hears NOTHING until the first library save — lazy
 * registration keeps tinkering installs out of the database.
 *
 * TRUST: the secret NEVER reaches a browser. Every backend write is made from
 * PHP with an HMAC over `timestamp.body`; the builder iframe relays its write
 * requests here via admin-ajax (see class-admin.php). The registration secret
 * rides along in every signed body — the backend only reads it on first
 * contact, and after that the signature alone decides.
 */

if (!defined('ABSPATH')) {
    exit;
}

class Product_Options_Backend
{
    public const STORE_ID_OPTION = 'po_store_id';
    public const SECRET_OPTION   = 'po_store_secret';

    /** Everything for this project lives under the /po/ namespace. */
    private const API_BASE = 'https://api.print.app';
    /** Where published option-set files are served from. */
    private const CDN_BASE = 'https://options.print.app';

    private const TIMEOUT_SECONDS = 10;

    public static function api_base(): string
    {
        return (string) apply_filters('product_options_api_base', self::API_BASE);
    }

    public static function cdn_base(): string
    {
        return (string) apply_filters('product_options_cdn_base', self::CDN_BASE);
    }

    /** Create the identity if it does not exist yet (idempotent). */
    public static function ensure_identity(): void
    {
        if (!get_option(self::STORE_ID_OPTION)) {
            add_option(self::STORE_ID_OPTION, 'woo-' . wp_generate_uuid4(), '', false);
        }
        if (!get_option(self::SECRET_OPTION)) {
            add_option(self::SECRET_OPTION, bin2hex(random_bytes(32)), '', false);
        }
    }

    public static function store_id(): string
    {
        return (string) get_option(self::STORE_ID_OPTION, '');
    }

    private static function secret(): string
    {
        return (string) get_option(self::SECRET_OPTION, '');
    }

    /**
     * Signed request to a /po/woo/* endpoint.
     *
     * @param string     $method  POST or DELETE.
     * @param string     $path    e.g. '/po/woo/library'.
     * @param array|null $payload JSON body (null for DELETE).
     * @param array      $query   Query-string parameters.
     * @return array{ok: bool, status: int, body: array, error: string}
     */
    public static function request(string $method, string $path, ?array $payload = null, array $query = []): array
    {
        self::ensure_identity();
        $store  = self::store_id();
        $secret = self::secret();
        if (!$store || !$secret) {
            return self::failure(__('The plugin identity is missing — deactivate and reactivate the plugin.', 'print-app-product-options-for-woocommerce'));
        }

        if (null !== $payload) {
            // First contact registers with these; afterwards the backend
            // ignores them and the signature alone authenticates.
            $payload['registerSecret'] = $secret;
            /* Host only, no scheme: the field is metadata (never identity),
               and the WAF in front of api.print.app blocks request bodies
               containing full `scheme://` URLs (RFI rule). */
            $parts             = wp_parse_url(home_url());
            $payload['domain'] = (string) ($parts['host'] ?? '')
                . (empty($parts['port']) ? '' : ':' . $parts['port']);
        }
        $body      = null === $payload ? '' : (string) wp_json_encode($payload);
        $timestamp = (string) time();
        $signature = hash_hmac('sha256', $timestamp . '.' . $body, $secret);

        $url = self::api_base() . $path;
        if ($query) {
            $url = add_query_arg($query, $url); // add_query_arg encodes values
        }

        $response = wp_remote_request($url, [
            'method'  => $method,
            'timeout' => self::TIMEOUT_SECONDS,
            'headers' => [
                'Content-Type'    => 'application/json',
                'X-Po-Store'      => $store,
                'X-Po-Timestamp'  => $timestamp,
                'X-Po-Signature'  => $signature,
            ],
            'body'    => '' === $body ? null : $body,
        ]);

        if (is_wp_error($response)) {
            return self::failure(__('The Print Options service is unreachable — try again.', 'print-app-product-options-for-woocommerce'));
        }

        $status  = (int) wp_remote_retrieve_response_code($response);
        $decoded = json_decode(wp_remote_retrieve_body($response), true);
        $decoded = is_array($decoded) ? $decoded : [];

        if ($status < 200 || $status >= 300) {
            $error = isset($decoded['error']) && is_string($decoded['error'])
                ? $decoded['error']
                : sprintf(
                    /* translators: %d: HTTP status code */
                    __('The request failed (HTTP %d) — try again.', 'print-app-product-options-for-woocommerce'),
                    $status
                );
            return ['ok' => false, 'status' => $status, 'body' => $decoded, 'error' => $error];
        }

        return ['ok' => true, 'status' => $status, 'body' => $decoded, 'error' => ''];
    }

    /**
     * The store's public option-set list (library + assignments), cached for
     * 30 seconds. Admin ops that change it delete the transient, so the
     * product tab's dropdown sees the merchant's own writes immediately.
     *
     * @return array{library: array, blueprints: array}
     */
    public static function fetch_list(): array
    {
        $cached = get_transient('po_library_list');
        if (is_array($cached)) {
            return $cached;
        }

        $empty = ['library' => [], 'blueprints' => []];
        $store = self::store_id();
        if (!$store) {
            return $empty;
        }

        $response = wp_remote_get(
            self::api_base() . '/po/blueprints?store=' . rawurlencode($store),
            ['timeout' => self::TIMEOUT_SECONDS]
        );
        if (is_wp_error($response) || 200 !== (int) wp_remote_retrieve_response_code($response)) {
            return $empty;
        }
        $decoded = json_decode(wp_remote_retrieve_body($response), true);
        if (!is_array($decoded)) {
            return $empty;
        }

        $list = [
            'library'    => isset($decoded['library']) && is_array($decoded['library']) ? $decoded['library'] : [],
            'blueprints' => isset($decoded['blueprints']) && is_array($decoded['blueprints']) ? $decoded['blueprints'] : [],
        ];
        set_transient('po_library_list', $list, 30);
        return $list;
    }

    public static function bust_list_cache(): void
    {
        delete_transient('po_library_list');
    }

    /** @return array{ok: bool, status: int, body: array, error: string} */
    private static function failure(string $message): array
    {
        return ['ok' => false, 'status' => 0, 'body' => [], 'error' => $message];
    }
}
