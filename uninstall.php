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

// array_map avoids a file-scope loop variable (static analysis reads
// those as unprefixed globals).
array_map(
    'delete_option',
    [
        'papo_builder_base',
        'papo_bundle_url',
        'papo_verify_endpoint',
        'papo_upload_endpoint',
        'papo_turnstile_url',
        'papo_turnstile_sitekey',
        'papo_filecheck_pk',
        'papo_filecheck_agent_id',
        'papo_store_id',
        'papo_store_secret',
    ]
);

// Legacy pasted-JSON storage and the current assignment metadata.
delete_post_meta_by_key('_product_options_config');
delete_post_meta_by_key('_papo_set_key');
delete_post_meta_by_key('_po_has_options');

delete_transient('papo_library_list');
