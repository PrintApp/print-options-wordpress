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

class Product_Options_Cart
{
    private const VERIFY_TIMEOUT_SECONDS = 5;

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
        if (!isset($_POST['product_options'])) {
            return $cart_item_data;
        }

        if (
            !isset($_POST['product_options_nonce']) ||
            !wp_verify_nonce(
                sanitize_text_field(wp_unslash($_POST['product_options_nonce'])),
                'product_options_add_to_cart'
            )
        ) {
            throw new Exception(esc_html__('Security check failed — please reload the page.', 'print-app-product-options-for-woocommerce'));
        }

        // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- JSON payload: sanitize_text_field would corrupt it; it is json_decoded, structurally validated, price-verified server-side, and never echoed raw.
        $payload = json_decode((string) wp_unslash($_POST['product_options']), true);
        if (!is_array($payload) || !isset($payload['selections']) || !is_array($payload['selections'])) {
            throw new Exception(esc_html__('Invalid product configuration.', 'print-app-product-options-for-woocommerce'));
        }

        $config = Product_Options_Product_Config::get_config($product_id);
        if (!$config) {
            throw new Exception(esc_html__('This product has no configurator blueprint.', 'print-app-product-options-for-woocommerce'));
        }

        $verified = self::verify_price($config, $payload);

        $cart_item_data['product_options'] = [
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
        if (isset($_POST['product_options'])) {
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
        $endpoint = Product_Options_Settings::get('po_verify_endpoint');
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
                'shop'       => Product_Options_Backend::store_id(),
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

    /** Show the configuration under the cart line. */
    public static function display(array $item_data, array $cart_item): array
    {
        if (empty($cart_item['product_options']['display'])) {
            return $item_data;
        }
        foreach ($cart_item['product_options']['display'] as $pair) {
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
            if (isset($item['product_options']['verified']['total'])) {
                $item['data']->set_price((float) $item['product_options']['verified']['total']);
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
        if (empty($values['product_options'])) {
            return;
        }
        $options = $values['product_options'];

        foreach ($options['display'] ?? [] as $pair) {
            $item->add_meta_data(
                wp_strip_all_tags($pair['label']),
                wp_strip_all_tags($pair['value'])
            );
        }
        if (!empty($options['file']['fileId'])) {
            $item->add_meta_data('_po_file_id', sanitize_text_field((string) $options['file']['fileId']));
        }
        if (!empty($options['verified']['sku'])) {
            $item->add_meta_data('_po_sku', sanitize_text_field((string) $options['verified']['sku']));
        }
        $item->add_meta_data('_po_selections', wp_json_encode($options['selections']));
        $item->add_meta_data('_po_copies', (string) ($options['verified']['quantity'] ?? 1));
    }
}
