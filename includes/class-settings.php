<?php
/**
 * Settings page: WooCommerce > Settings > Products > Print Configurator.
 */

if (!defined('ABSPATH')) {
    exit;
}

class PAPO_Settings
{
    public const OPTION_GROUP = 'papo_settings';

    /** option_name => [label, description, default] */
    private const FIELDS = [
        /* No builder URL: the builder ships with the plugin and is served
           from this site. Published option sets are fetched from the CDN by
           PAPO_Product_Config, which knows its own base. */
        'papo_bundle_url' => [
            'Configurator bundle URL',
            'Leave empty to use the copy bundled with the plugin (recommended). Set only to load print-configurator.js from your own URL.',
            '',
        ],
        // Defaults point at the hosted service so the plugin works on install.
        // Everything for this project lives under the /po/ namespace, which
        // keeps it clear of the other apps sharing api.print.app.
        'papo_verify_endpoint' => [
            'Price verification endpoint',
            'The verify-price API that recomputes prices server-side. Adding to cart is refused if it is unreachable.',
            'https://api.print.app/po/verify-price',
        ],
        'papo_upload_endpoint' => [
            'Upload endpoint',
            'The secure-upload API issuing presigned upload URLs.',
            'https://api.print.app/po/secure-upload',
        ],
        'papo_turnstile_url' => [
            'Turnstile challenge page URL',
            'Hosted challenge.html for invisible bot verification (optional).',
            '',
        ],
        'papo_turnstile_sitekey' => [
            'Turnstile site key',
            'Cloudflare Turnstile site key (optional; appended to the challenge page URL).',
            '',
        ],
        'papo_filecheck_pk' => [
            'Filecheck publishable key',
            'Optional. Activates Filecheck-validated uploads on products whose blueprint has a Filecheck-backed file field (pk_live_… — browser-safe).',
            '',
        ],
        'papo_filecheck_agent_id' => [
            'Filecheck agent ID',
            'Optional Filecheck sub-tenant scope.',
            '',
        ],
    ];

    /** Options that hold plain text rather than URLs. */
    private const TEXT_OPTIONS = [
        'papo_turnstile_sitekey',
        'papo_filecheck_pk',
        'papo_filecheck_agent_id',
    ];

    public static function init(): void
    {
        add_action('admin_init', [self::class, 'register']);
        // Priority 20: the parent "Print Options" menu registers at 10.
        add_action('admin_menu', [self::class, 'menu'], 20);
    }

    public static function register(): void
    {
        foreach (self::FIELDS as $option => [$label, $description, $default]) {
            /* Named outright rather than computed: every field here is either
               a URL or plain text, and a static callback is what both a
               reader and a scanner can verify at a glance. */
            $sanitize_callback = in_array($option, self::TEXT_OPTIONS, true)
                ? 'sanitize_text_field'
                : 'esc_url_raw';

            register_setting(self::OPTION_GROUP, $option, [
                'type'              => 'string',
                'sanitize_callback' => $sanitize_callback,
                'default'           => $default,
            ]);
        }
    }

    public static function menu(): void
    {
        add_submenu_page(
            PAPO_Admin::PAGE_SLUG,
            __('Print Options Settings', 'print-app-product-options-for-woocommerce'),
            __('Settings', 'print-app-product-options-for-woocommerce'),
            'manage_woocommerce',
            'papo-settings',
            [self::class, 'render']
        );
    }

    public static function render(): void
    {
        if (!current_user_can('manage_woocommerce')) {
            return;
        }
        ?>
        <div class="wrap">
            <h1><?php esc_html_e('Print Options Settings', 'print-app-product-options-for-woocommerce'); ?></h1>
            <p>
                <?php esc_html_e(
                    'Create option sets on the Print Options page, assign them on each product\'s Print Options tab, and connect your pricing/upload backend here.',
                    'print-app-product-options-for-woocommerce'
                ); ?>
            </p>
            <form method="post" action="options.php">
                <?php settings_fields(self::OPTION_GROUP); ?>
                <table class="form-table" role="presentation">
                    <?php foreach (self::FIELDS as $option => [$label, $description]) : ?>
                        <tr>
                            <th scope="row">
                                <label for="<?php echo esc_attr($option); ?>">
                                    <?php
                                    // Not passed through __(): gettext needs literals,
                                    // and these advanced-settings labels stay English.
                                    echo esc_html($label);
                                    ?>
                                </label>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    class="regular-text"
                                    id="<?php echo esc_attr($option); ?>"
                                    name="<?php echo esc_attr($option); ?>"
                                    value="<?php echo esc_attr(get_option($option, '')); ?>"
                                />
                                <p class="description"><?php echo esc_html($description); ?></p>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }

    public static function get(string $option): string
    {
        $default = self::FIELDS[$option][2] ?? '';
        return (string) get_option($option, $default);
    }
}
