<?php
/**
 * Cart integration: verified pricing only.
 *
 * On add-to-cart the customer's selections are POSTed (with the product's
 * blueprint inline) to the verify-price API, which recomputes the total with
 * the shared pricing engine. The browser price is never used. If verification
 * fails or the API is unreachable, the add is refused.
 *
 * Line semantics match the Shopify adapter: quantity 1 per configured job,
 * copies live inside the verified total and are shown as item meta.
 */

if (!defined('ABSPATH')) {
    exit;
}

class PAPO_Cart
{
    private const VERIFY_TIMEOUT_SECONDS = 5;

    /** Guard against a hostile payload nesting itself into a stack overflow. */
    private const MAX_JSON_DEPTH = 12;

    /**
     * Clean a json_decode()'d structure, key by key and leaf by leaf.
     *
     * json_decode() converts; it does not sanitize. Everything below arrives
     * from the browser and ends up in cart item data, order item meta and the
     * admin's order screen, so each scalar goes through the same treatment a
     * single posted field would get, and keys are reduced to the identifier
     * shape the blueprint actually uses.
     */
    public static function clean($value, int $depth = 0)
    {
        if ($depth > self::MAX_JSON_DEPTH) {
            return null;
        }
        if (is_array($value)) {
            $clean = [];
            foreach ($value as $key => $item) {
                /* Not sanitize_key(): it lowercases, and these keys are
                   blueprint field ids that must still match the option set
                   afterwards. Restrict the character set, keep the case. */
                $key = is_int($key)
                    ? $key
                    : preg_replace('/[^A-Za-z0-9_\-]/', '', (string) $key);
                $clean[$key] = self::clean($item, $depth + 1);
            }
            return $clean;
        }
        if (is_bool($value) || is_int($value) || is_float($value) || null === $value) {
            return $value;
        }
        return sanitize_text_field((string) $value);
    }

    public static function init(): void
    {
        add_filter('woocommerce_add_cart_item_data', [self::class, 'capture'], 10, 2);
        add_filter('woocommerce_add_to_cart_quantity', [self::class, 'force_single_line'], 10, 2);
        add_filter('woocommerce_get_item_data', [self::class, 'display'], 10, 2);
        add_action('woocommerce_before_calculate_totals', [self::class, 'apply_price'], 20);
        add_action('woocommerce_checkout_create_order_line_item', [self::class, 'persist'], 10, 4);
    }

    /**
     * Validate, verify and attach the configuration when the product form is
     * submitted. Throws to abort the add on any trust failure.
     */
    public static function capture(array $cart_item_data, int $product_id): array
    {
        if (!isset($_POST['papo_options'])) {
            return $cart_item_data;
        }

        if (
            !isset($_POST['papo_nonce']) ||
            !wp_verify_nonce(
                sanitize_text_field(wp_unslash($_POST['papo_nonce'])),
                'papo_add_to_cart'
            )
        ) {
            throw new Exception(esc_html__('Security check failed — please reload the page.', 'print-app-product-options-for-woocommerce'));
        }

        /* Decoded first because sanitize_text_field would destroy the JSON,
           then cleaned recursively — see clean(). The result is what gets
           stored and displayed; the raw string is never used again. */
        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- decoded, then recursively sanitized by self::clean() on the next line.
        $payload = self::clean(json_decode((string) wp_unslash($_POST['papo_options']), true));
        if (!is_array($payload) || !isset($payload['selections']) || !is_array($payload['selections'])) {
            throw new Exception(esc_html__('Invalid product configuration.', 'print-app-product-options-for-woocommerce'));
        }

        $config = PAPO_Product_Config::get_config($product_id);
        if (!$config) {
            throw new Exception(esc_html__('This product has no configurator blueprint.', 'print-app-product-options-for-woocommerce'));
        }

        $verified = self::verify_price($config, $payload);

        $cart_item_data['papo_options'] = [
            'selections' => $payload['selections'],
            'file'       => isset($payload['file']) && is_array($payload['file']) ? $payload['file'] : null,
            'verified'   => $verified,
            'display'    => self::display_pairs(
                $config,
                $payload['selections'],
                isset($payload['file']) && is_array($payload['file']) ? $payload['file'] : null
            ),
            // Unique per configuration so identical products with different
            // options never merge into one cart line.
            'config_key' => md5(wp_json_encode($payload['selections']) . wp_rand()),
        ];

        return $cart_item_data;
    }

    /** Configured jobs are always one cart line; copies live in the total. */
    public static function force_single_line($quantity, int $product_id)
    {
        // phpcs:ignore WordPress.Security.NonceVerification.Missing -- presence check only; the value is consumed exclusively by capture(), which verifies the nonce.
        if (isset($_POST['papo_options'])) {
            return 1;
        }
        return $quantity;
    }

    /**
     * Server-to-server price verification with the blueprint inline. The
     * response for inline configs is unsigned by design — TLS + server-side
     * call is the trust boundary here.
     *
     * @return array{total: float, quantity: int, unitPrice: float, sku: ?string}
     */
    private static function verify_price(array $config, array $payload): array
    {
        $endpoint = PAPO_Settings::get('papo_verify_endpoint');
        if (!$endpoint) {
            throw new Exception(
                esc_html__('Price verification is not configured — item cannot be added.', 'print-app-product-options-for-woocommerce')
            );
        }

        $response = wp_remote_post($endpoint, [
            'timeout' => self::VERIFY_TIMEOUT_SECONDS,
            'headers' => ['Content-Type' => 'application/json'],
            'body'    => wp_json_encode([
                'productId'  => isset($config['productId']) ? (string) $config['productId'] : 'product',
                'selections' => $payload['selections'],
                'file'       => isset($payload['file']) && is_array($payload['file']) ? $payload['file'] : null,
                'config'     => $config,
                // set_price() applies the verified total in the store's
                // currency, so the blueprint must be priced in it.
                'currency'   => get_woocommerce_currency(),
                // Store namespace — activity heartbeat for future pruning.
                'shop'       => PAPO_Backend::store_id(),
            ]),
        ]);

        if (is_wp_error($response)) {
            throw new Exception(
                esc_html__('Price verification is unavailable right now — please try again.', 'print-app-product-options-for-woocommerce')
            );
        }

        $code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);
        if (200 !== $code || !is_array($body) || empty($body['success'])) {
            throw new Exception(esc_html__('This configuration could not be priced.', 'print-app-product-options-for-woocommerce'));
        }
        if (!empty($body['unavailable'])) {
            throw new Exception(esc_html__('This combination is currently unavailable.', 'print-app-product-options-for-woocommerce'));
        }

        return [
            'total'     => (float) $body['verifiedPrice'],
            'quantity'  => (int) ($body['quantity'] ?? 1),
            'unitPrice' => (float) ($body['unitPrice'] ?? $body['verifiedPrice']),
            'sku'       => isset($body['sku']) ? (string) $body['sku'] : null,
        ];
    }

    /**
     * Human-readable label => value pairs derived from the TRUSTED blueprint
     * (never from client-supplied labels).
     *
     * Mirrors buildDisplayEntries() in packages/core-ui so a job reads the
     * same on a Woo order as on a Shopify one: every answered field in
     * document order under the merchant's own label, `info` fields excluded.
     * There is deliberately no synthetic "Copies" row — the quantity field
     * already carries the merchant's wording ("How many flyers?"), and adding
     * one printed the same number twice. Fulfilment reads _po_copies, which
     * persist() writes from the VERIFIED quantity regardless.
     *
     * @param array<string, mixed>|null $file Uploaded file metadata, if any.
     * @return array<array{label: string, value: string}>
     */
    private static function display_pairs(array $config, array $selections, ?array $file): array
    {
        $pairs  = [];
        $fields = [];
        foreach ($config['sections'] ?? [] as $section) {
            foreach ($section['fields'] ?? [] as $field) {
                if (isset($field['id'])) {
                    $fields[$field['id']] = $field;
                }
            }
        }

        // Iterate the blueprint, not the posted selections: document order is
        // the order the customer answered in, and it does not depend on how a
        // client happened to serialise its JSON.
        foreach ($fields as $field_id => $field) {
            $type  = $field['type'] ?? '';
            $label = isset($field['label']) ? (string) $field['label'] : (string) $field_id;

            if ('info' === $type) {
                continue;
            }

            // File fields hold an opaque upload id in the selections; show the
            // filename the customer recognises instead.
            if ('file' === $type) {
                $name = $file['fileName'] ?? $file['fileId'] ?? null;
                if (is_string($name) && '' !== $name) {
                    $pairs[] = ['label' => $label, 'value' => $name];
                }
                continue;
            }

            $value = $selections[$field_id] ?? null;
            if (null === $value || '' === $value) {
                continue;
            }

            $choice_labels = [];
            foreach ($field['options'] ?? [] as $choice) {
                if (isset($choice['id'], $choice['label'])) {
                    $choice_labels[$choice['id']] = (string) $choice['label'];
                }
            }

            if (is_array($value) && isset($value['w'], $value['h'])) {
                $display = $value['w'] . ' × ' . $value['h'] . ' ' . ($value['unit'] ?? '');
            } elseif (is_array($value)) {
                $display = implode(
                    ', ',
                    array_map(
                        static fn($id) => $choice_labels[$id] ?? (string) $id,
                        $value
                    )
                );
            } else {
                $display = $choice_labels[$value] ?? (string) $value;
            }

            $pairs[] = ['label' => $label, 'value' => trim($display)];
        }

        return $pairs;
    }

    /**
     * A cart line's configuration.
     *
     * Lines added before the keys were prefixed are still sitting in shoppers'
     * carts and sessions after an update. Without this fallback the verified
     * total below is never found for them, the line keeps the product's own
     * price — which for a configured product is 0 — and it can be checked out
     * for nothing. Reading both keys costs nothing and closes that window.
     */
    private static function line_options(array $item): ?array
    {
        foreach (['papo_options', 'product_options'] as $key) {
            if (isset($item[$key]) && is_array($item[$key])) {
                return $item[$key];
            }
        }
        return null;
    }

    /** Show the configuration under the cart line. */
    public static function display(array $item_data, array $cart_item): array
    {
        $options = self::line_options($cart_item);
        if (empty($options['display'])) {
            return $item_data;
        }
        foreach ($options['display'] as $pair) {
            $item_data[] = [
                'key'   => wp_strip_all_tags($pair['label']),
                'value' => wp_strip_all_tags($pair['value']),
            ];
        }
        return $item_data;
    }

    /** Apply the VERIFIED total as the line price. */
    public static function apply_price(WC_Cart $cart): void
    {
        if (is_admin() && !defined('DOING_AJAX')) {
            return;
        }
        foreach ($cart->get_cart() as $item) {
            $options = self::line_options($item);
            if (isset($options['verified']['total'])) {
                $item['data']->set_price((float) $options['verified']['total']);
            }
        }
    }

    /** Persist the configuration onto the order line for fulfillment. */
    public static function persist(
        WC_Order_Item_Product $item,
        string $cart_item_key,
        array $values,
        WC_Order $order
    ): void {
        $options = self::line_options($values);
        if (!$options) {
            return;
        }

        foreach ($options['display'] ?? [] as $pair) {
            $item->add_meta_data(
                wp_strip_all_tags($pair['label']),
                wp_strip_all_tags($pair['value'])
            );
        }
        if (!empty($options['file']['fileId'])) {
            $item->add_meta_data('_papo_file_id', sanitize_text_field((string) $options['file']['fileId']));
        }
        if (!empty($options['verified']['sku'])) {
            $item->add_meta_data('_papo_sku', sanitize_text_field((string) $options['verified']['sku']));
        }
        $item->add_meta_data('_papo_selections', wp_json_encode($options['selections']));
        $item->add_meta_data('_papo_copies', (string) ($options['verified']['quantity'] ?? 1));
    }
}
