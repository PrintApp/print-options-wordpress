=== Print.App Product Options for WooCommerce ===
Contributors: printapp
Tags: woocommerce, product options, printing, web-to-print, price calculator
Requires at least: 6.2
Tested up to: 7.0
Requires PHP: 7.4
Stable tag: 0.4.0
License: MIT
License URI: https://opensource.org/licenses/MIT

Print product options with live pricing and artwork upload for WooCommerce — built for print shops.

== Description ==

Print Options renders a fast, accessible configurator on your product pages:

* Visual builder with print-ready templates (business cards, stickers with
  area pricing, t-shirt size × color matrices, posters, …) — right inside
  your WordPress admin, no JSON anywhere
* Live price preview: per-unit, per-page, per-area, quantity breaks
  (flat or graduated), setup fees, minimum orders
* Conditional options, multi-select finishes, and artwork upload
* Prices are ALWAYS re-verified server-side before an item enters the cart —
  the browser price is never trusted.

Create your option sets on the Print Options page, then open any product and
pick a set from its Print Options tab — next to Attributes and Variations.
Editing a set later updates every product that uses it.

Requires WooCommerce.

== Installation ==

1. Upload and activate the plugin.
2. Open Print Options → Option Sets in your admin sidebar and create an option
   set from a template.
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

**options.print.app** (Print.App CDN)

* Published option sets are served from this domain to your product pages
  via your server (cached locally for 60 seconds). The visual builder itself
  is not loaded from here — it ships with the plugin and runs on your site.

These services are operated by Print.App ApS: https://print.app/
Privacy policy: https://print.app/company/privacy
Terms of service: https://print.app/company/terms

**cdn.filecheck.io** (Filecheck artwork preflight — optional)

Only used if you enter a Filecheck publishable key in the plugin settings.
Leave that field empty and this service is never contacted.

* *When it loads* — with a key configured, the product page loads the
  Filecheck upload element from this domain for any option set that has an
  artwork-check step.
* *What is sent* — the artwork file the customer chooses, and the check
  settings for that option set (such as the required size, bleed and page
  count). The check result — page count, artwork dimensions and any
  warnings — comes back to the page and is stored with the order line so
  you can see what was checked. No customer names, emails or addresses are
  transmitted.

This service is operated by Filecheck (Print.App ApS): https://filecheck.io/
Privacy policy: https://filecheck.io/company/privacy
Terms of service: https://filecheck.io/company/terms

== Source Code ==

Two files in assets/ are compiled from TypeScript and Vue sources:

* assets/print-configurator.js — the storefront configurator
* assets/builder.js and assets/builder.css — the option-set builder used on
  the plugin's own admin page

The full, human-readable source and the build tooling are available at:

https://github.com/PrintApp/print-options-wordpress

Run `npm install`, then `npm run build` in the core-ui package for the
configurator and in the admin package for the builder; the outputs are the
files bundled here unchanged.

== Frequently Asked Questions ==

= Where do I build the options? =
Print Options → Option Sets, inside your own admin. Start from a template and
adjust the choices and prices to match what you sell.

= Can several products share the same options? =
Yes — assign the same set on each product's Print Options tab. Saving the set
once updates all of them.

= Do I need an account or API keys? =
No. The plugin creates its own anonymous identity when you activate it, and
talks to the service on your server's behalf.

= What happens if the verification endpoint is down? =
Adding to cart is refused with a friendly error. The plugin never falls back
to a browser-computed price.

= Is it really free? =
Yes, with no product or option limits.

== Screenshots ==

1. The configurator on a product page: options, live pricing, and the verified total.
2. The visual builder — outline, editor and a live preview of the storefront widget.
3. Ready-made print templates: business cards, flyers, stickers, thesis binding and more.
4. Every price is recomputed and signed on the server before it can reach the cart.

== Changelog ==

= 0.4.0 =
* The visual builder now ships with the plugin and runs on its own admin page
  instead of being embedded from options.print.app
* All classes, constants, options, transients, post meta and hooks carry a
  PAPO_/papo_ prefix; existing store identity and product assignments are
  migrated automatically on update
* Configuration submitted with add-to-cart is sanitized value by value
* Filecheck artwork preflight documented under External Services

= 0.3.0 =
* Print Options tab on the product edit page — assign a named option set from
  a dropdown, no JSON pasting
* Embedded visual builder (Print Options → Option Sets) to create and manage
  option sets
* Option sets are served from the CDN and shared across products; editing a
  set updates every product that uses it
* Anonymous store identity; all management calls are HMAC-signed server-side

= 0.2.0 =
* Full add-to-cart bridge with server-side price verification
* Settings page, per-product options metabox, order line persistence

= 0.1.0 =
* Initial stub
