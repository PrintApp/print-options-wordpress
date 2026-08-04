<?php
/**
 * Uninstall cleanup: remove plugin options, the store identity, and all
 * per-product assignment metadata.
 *
 * No remote call: backend rows are pruned by inactivity (lastSeenAt stops
 * updating the moment the plugin is gone), which also covers sites that are
 * deleted without ever uninstalling cleanly.
 */

if (!defined('WP_UNINSTALL_PLUGIN')) {
    exit;
}

foreach (
    [
        'po_builder_base',
        'po_bundle_url',
        'po_verify_endpoint',
        'po_upload_endpoint',
        'po_turnstile_url',
        'po_turnstile_sitekey',
        'po_filecheck_pk',
        'po_filecheck_agent_id',
        'po_store_id',
        'po_store_secret',
    ] as $option
) {
    delete_option($option);
}

// Legacy pasted-JSON storage and the current assignment metadata.
delete_post_meta_by_key('_product_options_config');
delete_post_meta_by_key('_po_set_key');
delete_post_meta_by_key('_po_has_options');

delete_transient('po_library_list');
