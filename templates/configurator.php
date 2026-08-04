<?php
/**
 * Renders <print-configurator> inside the add-to-cart form.
 *
 * Available: $product (WC_Product), $config (array), $turnstile_url (string).
 */

if (!defined('ABSPATH')) {
    exit;
}

// Filecheck element-mode provider (store-level publishable key; the per-field
// workflow lives inside the blueprint).
$po_provider_attr = '';
$po_filecheck_pk  = Product_Options_Settings::get('po_filecheck_pk');
if ('' !== $po_filecheck_pk) {
    $po_provider = [
        'id'             => 'filecheck',
        'name'           => 'Filecheck',
        'mode'           => 'element',
        'publishableKey' => $po_filecheck_pk,
        'capabilities'   => [
            'pages'           => true,
            'colorDetection'  => true,
            'canvas'          => true,
            'preflightIssues' => true,
        ],
    ];
    $po_agent = Product_Options_Settings::get('po_filecheck_agent_id');
    if ('' !== $po_agent) {
        $po_provider['agentId'] = $po_agent;
    }
    $po_provider_attr = (string) wp_json_encode($po_provider);
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
        <?php if ('' !== $po_provider_attr) : ?>
            provider="<?php echo esc_attr($po_provider_attr); ?>"
        <?php endif; ?>
    ></print-configurator>

    <input type="hidden" name="product_options" id="wc-product-options-payload" value="" />
    <?php wp_nonce_field('product_options_add_to_cart', 'product_options_nonce'); ?>

    <script type="application/json" id="wc-product-options-config">
        <?php echo wp_json_encode($config); ?>
    </script>
</div>
