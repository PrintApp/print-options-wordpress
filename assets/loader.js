/**
 * WooCommerce storefront bridge.
 *
 * Feeds the product's inline blueprint into <print-configurator>, then on
 * submit serializes {selections, file} into the hidden papo_options input
 * and submits the native add-to-cart form. All pricing trust lives server
 * side (see includes/class-cart.php).
 */

(function () {
    const WIRED_FLAG = "__poConfiguratorWired";
    const LOG = "[product-options]";

    function init() {
        const wrapper = document.querySelector(".wc-print-configurator-wrapper");
        const configurator = document.getElementById("wc-print-configurator");
        const payloadInput = document.getElementById("papo-payload");
        const configScript = document.getElementById("wc-product-options-config");
        if (!wrapper || !configurator || !payloadInput || !configScript) {
            return;
        }
        // Themes may re-run this script; a second submit handler would submit
        // the add-to-cart form twice.
        if (configurator[WIRED_FLAG]) {
            return;
        }
        configurator[WIRED_FLAG] = true;

        // Inline blueprint -> element property (no extra fetch).
        try {
            const config = JSON.parse(configScript.textContent || "null");
            if (config) {
                customElements.whenDefined("print-configurator").then(() => {
                    configurator.config = config;
                });
            }
        } catch (error) {
            console.error("Print configurator blueprint is not valid JSON:", error);
            return;
        }

        const form = configurator.closest("form.cart");
        hideNativeControls(form);

        /* WooCommerce's add-to-cart handler is keyed on the `add-to-cart`
           request param, which classic themes carry as the submit BUTTON's
           name/value. Submitter values are dropped whenever anything other
           than a real click on that button submits the form — including
           requestSubmit() under block themes — and the POST then does
           nothing at all: no item, no error, page just re-renders. A hidden
           input makes the param unconditional. */
        if (form && !form.querySelector('input[name="add-to-cart"]')) {
            const addToCart = document.createElement("input");
            addToCart.type = "hidden";
            addToCart.name = "add-to-cart";
            addToCart.value = wrapper.dataset.productId || "";
            form.appendChild(addToCart);
        }

        /* An incomplete configuration emits `invalid`, never `submit`. The
           widget marks and scrolls to the offending fields itself, but an
           unhandled `invalid` is indistinguishable from a dead button. */
        configurator.addEventListener("invalid", (event) => {
            const detail = Array.isArray(event.detail) ? event.detail[0] : event.detail;
            console.warn(
                `${LOG} add-to-cart blocked — options still need attention:`,
                detail?.issues ?? detail
            );
        });

        configurator.addEventListener("submit", (event) => {
            const detail = Array.isArray(event.detail) ? event.detail[0] : event.detail;
            if (!detail || !form) {
                return;
            }
            payloadInput.value = JSON.stringify({
                selections: detail.selections,
                file: detail.file
                    ? {
                          fileId: detail.file.fileId,
                          source: detail.file.source,
                          fileName: detail.file.fileName,
                          pages: detail.file.pages,
                          colorPages: detail.file.colorPages,
                          monoPages: detail.file.monoPages,
                          canvas: detail.file.canvas
                      }
                    : null
            });

            // Configured jobs are one line each; copies are inside the total.
            const quantityInput = form.querySelector('input[name="quantity"]');
            if (quantityInput) {
                quantityInput.value = "1";
            }

            if (typeof form.requestSubmit === "function") {
                form.requestSubmit();
            } else {
                form.submit();
            }
        });
    }

    /**
     * `defer` normally runs before DOMContentLoaded, but themes that re-render
     * the product summary (variant switching, quick-view modals) execute this
     * script AFTER the event has fired. A bare DOMContentLoaded listener then
     * never runs, no submit handler attaches, and the CTA silently does
     * nothing at all. Check readyState instead.
     */
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

    /** The configurator owns quantity + add-to-cart; hide the native ones. */
    function hideNativeControls(form) {
        if (!form) {
            return;
        }
        const quantity = form.querySelector(".quantity");
        if (quantity) {
            quantity.style.display = "none";
        }
        const button = form.querySelector('button[type="submit"], .single_add_to_cart_button');
        if (button) {
            button.style.display = "none";
        }
    }
})();
