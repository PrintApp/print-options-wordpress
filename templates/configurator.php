<?php
/**
 * Renders <print-configurator> inside the add-to-cart form.
 *
 * Available from the including scope (PAPO_Frontend::render):
 * $product (WC_Product), $config (array), $turnstile_url (string),
 * $provider_attr (string, may be empty), $locale (string), $price_format
 * (string, JSON), $price_note (string, may be empty), $strings (string, JSON).
 *
 * This template deliberately assigns nothing: variables created here would
 * sit at file scope, which static analysis reads as globals. All values are
 * prepared by the caller.
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
<div
    class="wc-print-configurator-wrapper"
    data-product-id="<?php echo esc_attr((string) $product->get_id()); ?>"
>
    <print-configurator
        id="wc-print-configurator"
        upload-endpoint="<?php echo esc_url(PAPO_Settings::get('papo_upload_endpoint')); ?>"
        turnstile-url="<?php echo esc_url($turnstile_url); ?>"
        locale="<?php echo esc_attr($locale); ?>"
        price-format="<?php echo esc_attr($price_format); ?>"
        <?php if ('' !== $price_note) : ?>
            price-note="<?php echo esc_attr($price_note); ?>"
        <?php endif; ?>
        strings="<?php echo esc_attr($strings); ?>"
        <?php if ('' !== $provider_attr) : ?>
            provider="<?php echo esc_attr($provider_attr); ?>"
        <?php endif; ?>
    ></print-configurator>

    <input type="hidden" name="papo_options" id="papo-payload" value="" />
    <?php wp_nonce_field('papo_add_to_cart', 'papo_nonce'); ?>

    <script type="application/json" id="wc-product-options-config">
        <?php echo wp_json_encode($config); ?>
    </script>
</div>
