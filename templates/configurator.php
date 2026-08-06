<?php
/**
 * Renders <print-configurator> inside the add-to-cart form.
 *
 * Available from the including scope (Product_Options_Frontend::render):
 * $product (WC_Product), $config (array), $turnstile_url (string),
 * $provider_attr (string, may be empty).
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
        upload-endpoint="<?php echo esc_url(Product_Options_Settings::get('po_upload_endpoint')); ?>"
        turnstile-url="<?php echo esc_url($turnstile_url); ?>"
        locale="<?php echo esc_attr(get_locale()); ?>"
        <?php if ('' !== $provider_attr) : ?>
            provider="<?php echo esc_attr($provider_attr); ?>"
        <?php endif; ?>
    ></print-configurator>

    <input type="hidden" name="product_options" id="wc-product-options-payload" value="" />
    <?php wp_nonce_field('product_options_add_to_cart', 'product_options_nonce'); ?>

    <script type="application/json" id="wc-product-options-config">
        <?php echo wp_json_encode($config); ?>
    </script>
</div>
