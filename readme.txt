=== Product Options (Print Configurator) ===
Contributors: printapp
Tags: woocommerce, product options, printing, web-to-print, price calculator
Requires at least: 6.2
Tested up to: 6.7
Requires PHP: 7.4
Stable tag: 0.3.0
License: MIT
License URI: https://opensource.org/licenses/MIT

Print product configurator for WooCommerce: options, live pricing, artwork
upload — built for print shops (business cards, stickers, t-shirts, posters,
booklets, thesis binding and more).

== Description ==

Product Options renders a fast, accessible configurator on your product pages:

* Visual builder with print-ready templates (business cards, stickers with
  area pricing, t-shirt size × color matrices, posters, …) — right inside
  your WordPress admin, no JSON anywhere
* Live price preview: per-unit, per-page, per-area, quantity breaks
  (flat or graduated), setup fees, minimum orders
* Conditional options, multi-select finishes, artwork upload with optional
  bot protection (Cloudflare Turnstile)
* Prices are ALWAYS re-verified server-side before an item enters the cart —
  the browser price is never trusted.

Create your option sets on the Print Options page, then open any product and
pick a set from its Print Options tab — next to Attributes and Variations.
Editing a set later updates every product that uses it.

== Installation ==

1. Upload and activate the plugin.
2. Open WooCommerce → Print Options and create an option set from a template.
3. Edit a product, open its Print Options tab, and pick the set from the
   dropdown. Done — the product page now shows the configurator.

== External Services ==

This plugin connects to the Print.App options service to do its job. No
customer account is required and no personal data is sold or shared.

**api.print.app** (Print.App API)

* *Price verification* — when a customer adds a configured product to the
  cart, the selected options and the product's option set are sent
  server-to-server so the price can be recomputed independently of the
  browser. No customer names, emails or addresses are transmitted.
* *Artwork upload* — when a customer uploads a file, the browser requests a
  one-time upload authorization. The file itself goes directly to storage
  and is automatically deleted after 30 days.
* *Option set management* — when a shop manager saves or assigns option
  sets, the set definition is stored under an anonymous store identifier
  (a random ID generated at activation; your site URL host is recorded as
  metadata only).

**options.print.app** (Print.App CDN and builder)

* The visual builder is embedded on the plugin's admin page from this
  domain, and published option sets are served from it to your product
  pages via your server (cached locally for 60 seconds).

These services are operated by Print.App: https://print.app/
(TODO before wp.org submission: publish privacy-policy and terms pages and
link them here — the review team requires both for service-backed plugins.)

== Frequently Asked Questions ==

= Where do I build the options? =
WooCommerce → Print Options, inside your own admin. Start from a template and
adjust the choices and prices to match what you sell.

= Can several products share the same options? =
Yes — assign the same set on each product's Print Options tab. Saving the set
once updates all of them.

= What happens if the verification endpoint is down? =
Adding to cart is refused with a friendly error. The plugin never falls back
to a browser-computed price.

== Changelog ==

= 0.3.0 =
* Print Options tab on the product edit page — assign a named option set from
  a dropdown, no JSON pasting
* Embedded visual builder (WooCommerce → Print Options) to create and manage
  option sets
* Option sets are served from the CDN and shared across products; editing a
  set updates every product that uses it
* Anonymous store identity; all management calls are HMAC-signed server-side

= 0.2.0 =
* Full add-to-cart bridge with server-side price verification
* Settings page, per-product blueprint metabox, order line persistence

= 0.1.0 =
* Initial stub
