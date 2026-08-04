# Print Options for WooCommerce

Print product configurator for WooCommerce: options, live pricing, and artwork
upload — built for print shops (business cards, flyers, stickers, banners,
booklets, thesis binding and more).

- **Visual builder in your WordPress admin** — create named option sets from
  print-ready templates; no JSON, no code.
- **Print Options tab on every product** — assign a set from a dropdown,
  right next to Attributes and Variations.
- **Live pricing** — quantity breaks, per-page and per-area rates, setup
  fees, minimum orders.
- **Artwork upload** with automatic cleanup.
- **Server-verified prices** — every add to cart is recalculated and the
  browser price is never trusted.

## Install

Download the latest `product-options-x.y.z.zip` from
[Releases](../../releases) and upload it in your WordPress admin under
**Plugins → Add New → Upload Plugin**. Requires WooCommerce.

Then: **WooCommerce → Print Options** to create your first option set, and
the **Print Options** tab on any product to assign it.

## External services

The plugin connects to the Print.App options service (api.print.app for
server-side price verification and upload authorization, options.print.app
for the embedded builder and published option sets). Details in
[readme.txt](readme.txt) under "External Services".

## Development

This repository is the **distribution mirror** — issues and releases live
here; day-to-day development happens in the Print.App monorepo and is synced
out per release.

To run it locally you need Docker and Node:

```bash
npx @wordpress/env start   # uses .wp-env.json: WordPress + WooCommerce + this plugin
```

`phpcs.xml` carries the WordPress security/i18n ruleset used before each
release (`composer require wp-coding-standards/wpcs`, then `phpcs`).

## License

MIT — see [LICENSE](LICENSE).
