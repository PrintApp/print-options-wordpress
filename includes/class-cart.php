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

    /**
     * Guard against a hostile payload nesting itself into a stack overflow.
     *
     * 32, not lower: a real blueprint legitimately reaches depth 13 through
     * the admin bridge — {params} > config > sections > section > fields >
     * field > options > choice > priceModifiers > modifier > tiers > rows >
     * row > upTo — and inline Filecheck workflows and nested visibleWhen
     * groups go deeper still. A cap of 12 silently nulled the tier rows of
     * any option set with per-choice quantity tiers, and the backend then
     * refused the save ("Expected number, received null"). Hostile inputs
     * are still bounded; legitimate documents never come near 32.
     */
    private const MAX_JSON_DEPTH = 32;

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
        add_action('woocommerce_cart_loaded_from_session', [self::class, 'apply_weight'], 20);
        // Real-quantity lines: the quantity is the verified copy count, not an input.
        add_filter('woocommerce_cart_item_quantity', [self::class, 'lock_quantity'], 10, 3);
        add_filter('woocommerce_store_api_product_quantity_editable', [self::class, 'lock_quantity_editable'], 10, 3);
        add_filter('woocommerce_store_api_product_quantity_minimum', [self::class, 'lock_quantity_limit'], 10, 3);
        add_filter('woocommerce_store_api_product_quantity_maximum', [self::class, 'lock_quantity_limit'], 10, 3);
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
            // Null unless the blueprint opted in AND the total splits exactly.
            'units'      => self::unit_split($config, $verified),
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
            // An unlabeled quantity never shows its internal id.
            $fallback = 'quantity' === $type
                ? __('Quantity', 'print-app-product-options-for-woocommerce')
                : (string) $field_id;
            $label    = isset($field['label']) && '' !== (string) $field['label'] ? (string) $field['label'] : $fallback;

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

            // "5 banners": the merchant's unit word, when the quantity has one.
            if ('quantity' === $type && isset($field['unit']) && '' !== trim((string) $field['unit'])) {
                $display .= ' ' . trim((string) $field['unit']);
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
        foreach ($cart->get_cart() as $key => $item) {
            $options = self::line_options($item);
            if (!isset($options['verified']['total'])) {
                continue;
            }
            $units = self::line_units($options);
            if (null === $units) {
                $item['data']->set_price((float) $options['verified']['total']);
                continue;
            }
            /* Real quantity: the line IS the copy count at the per-copy price,
               and copies x price is the verified total exactly. The quantity
               is put back on every calculation, which is also the server-side
               lock — the price was verified for this count and no other, so a
               changed quantity (a tampered form, a third-party cart widget)
               never reaches a total. To buy a different quantity the customer
               reconfigures the product, which re-verifies the price. */
            if ((int) $item['quantity'] !== $units['copies']) {
                $cart->cart_contents[$key]['quantity'] = $units['copies'];
            }
            $item['data']->set_price($units['unit']);
        }
        // Lines added in THIS request were not in the session when it loaded.
        self::apply_weight($cart);
    }

    /**
     * GUARDED real quantities (blueprint `pricing.lineQuantity: "units"`).
     *
     * Returns the copy count and per-copy price only when carrying the job
     * as its real quantity cannot change what the customer pays: the verified
     * total must be exact in the store's price decimals and divide by the
     * copies with no remainder. Otherwise null, and the job stays one line of
     * quantity 1 at the verified total, exactly as without the option.
     *
     * Decided once, at add-to-cart, from the TRUSTED blueprint and the
     * VERIFIED price — never from anything the browser sent.
     *
     * @param array<string, mixed> $config   Blueprint.
     * @param array<string, mixed> $verified verify_price() result.
     * @return array{copies: int, unit: float}|null
     */
    private static function unit_split(array $config, array $verified): ?array
    {
        if ('units' !== ($config['pricing']['lineQuantity'] ?? 'job')) {
            return null;
        }
        $copies = (int) ($verified['quantity'] ?? 1);
        if ($copies < 2) {
            return null;
        }
        $scale  = 10 ** max(0, (int) wc_get_price_decimals());
        $scaled = (float) ($verified['total'] ?? 0) * $scale;
        $minor  = (int) round($scaled);
        if ($minor <= 0 || abs($scaled - $minor) > 1e-6 || 0 !== $minor % $copies) {
            return null;
        }
        return ['copies' => $copies, 'unit' => (float) (intdiv($minor, $copies) / $scale)];
    }

    /**
     * The split stored on a cart line, re-validated on the way out (it has
     * been through the session).
     *
     * @param array<string, mixed> $options
     * @return array{copies: int, unit: float}|null
     */
    private static function line_units(array $options): ?array
    {
        $units = $options['units'] ?? null;
        if (!is_array($units) || !isset($units['copies'], $units['unit'])) {
            return null;
        }
        $copies = (int) $units['copies'];
        $unit   = (float) $units['unit'];
        return ($copies >= 2 && $unit > 0) ? ['copies' => $copies, 'unit' => $unit] : null;
    }

    /** Copies of a real-quantity cart line, or null for any other line. */
    private static function locked_copies($cart_item): ?int
    {
        if (!is_array($cart_item)) {
            return null;
        }
        $options = self::line_options($cart_item);
        $units   = $options ? self::line_units($options) : null;
        return $units ? $units['copies'] : null;
    }

    /** Classic cart: show the count as text instead of an editable input. */
    public static function lock_quantity($product_quantity, $cart_item_key, $cart_item)
    {
        $copies = self::locked_copies($cart_item);
        if (null === $copies) {
            return $product_quantity;
        }
        return '<span class="papo-fixed-quantity">' . esc_html((string) $copies) . '</span>';
    }

    /** Cart and checkout blocks: not editable. */
    public static function lock_quantity_editable($editable, $product, $cart_item)
    {
        return null === self::locked_copies($cart_item) ? $editable : false;
    }

    /** Cart and checkout blocks: minimum and maximum are both the copy count. */
    public static function lock_quantity_limit($limit, $product, $cart_item)
    {
        $copies = self::locked_copies($cart_item);
        return null === $copies ? $limit : $copies;
    }

    /**
     * A configured job is one cart line (quantity 1) with the copies inside
     * the verified total, so WooCommerce's own maths — product weight x line
     * quantity — would ship 500 business cards at the weight of one. Give the
     * line the weight of the whole job instead: the product's weight is the
     * weight of ONE copy, and every weight-based shipping method reads it
     * from this cart item.
     *
     * Idempotent by construction: the unit weight is always re-read from the
     * stored product, never from the already-scaled cart object, because this
     * runs on session load AND before every totals calculation.
     */
    public static function apply_weight(WC_Cart $cart): void
    {
        foreach ($cart->get_cart() as $item) {
            /* A real-quantity line already carries its copies as the line
               quantity, and WooCommerce multiplies the weight by that itself —
               scaling here as well would count the copies twice. */
            if (null !== self::locked_copies($item)) {
                continue;
            }
            $weight = self::line_weight($item);
            if (null !== $weight) {
                $item['data']->set_weight($weight);
            }
        }
    }

    /**
     * Total weight of a configured line (unit weight x copies), or null when
     * the line is not ours or the product has no weight. Filter
     * `papo_cart_item_weight` to adjust it — paper stock that changes the
     * weight, or a product whose weight is entered per job rather than per copy.
     */
    private static function line_weight(array $item): ?float
    {
        $options = self::line_options($item);
        if (!$options || !isset($item['data']) || !$item['data'] instanceof WC_Product) {
            return null;
        }
        $stored = wc_get_product($item['data']->get_id());
        if (!$stored || !$stored->has_weight()) {
            return null;
        }
        $unit   = (float) $stored->get_weight();
        $copies = max(1, (int) ($options['verified']['quantity'] ?? 1));
        $weight = (float) apply_filters('papo_cart_item_weight', $unit * $copies, $unit, $copies, $item);
        return $weight >= 0 ? $weight : null;
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
        /* The order line is quantity 1 as well, so label and fulfilment tools
           that multiply product weight by line quantity undercount. The real
           figure travels with the line, in the store's weight unit. */
        $weight = self::line_weight($values);
        if (null !== $weight) {
            $item->add_meta_data('_papo_weight', wc_format_decimal($weight));
        }
    }
}
