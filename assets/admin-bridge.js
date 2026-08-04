/**
 * Relay between the embedded builder iframe and admin-ajax.
 *
 * The builder cannot hold the store secret (it is a browser), so its writes
 * arrive here as postMessage RPCs and are forwarded to admin-ajax, where PHP
 * signs the real backend call.
 *
 * Origin discipline mirrors the builder's own (woo.ts): only messages FROM
 * the builder origin AND from the embedded frame's window are honoured, and
 * every reply targets exactly that origin.
 */
(function () {
    "use strict";

    var settings = window.poBridge;
    var frame = document.getElementById("po-builder-frame");
    if (!settings || !frame) {
        return;
    }

    function reply(id, payload) {
        if (frame.contentWindow) {
            frame.contentWindow.postMessage(
                Object.assign({ type: "po-rpc-result", id: id }, payload),
                settings.builderOrigin
            );
        }
    }

    window.addEventListener("message", function (event) {
        if (
            event.origin !== settings.builderOrigin ||
            event.source !== frame.contentWindow
        ) {
            return;
        }
        var data = event.data;
        if (!data || data.type !== "po-rpc" || typeof data.id !== "string") {
            return;
        }

        var body = new FormData();
        body.append("action", "po_bridge");
        body.append("nonce", settings.nonce);
        body.append("method", String(data.method || ""));
        body.append("params", JSON.stringify(data.params || {}));

        fetch(settings.ajaxUrl, { method: "POST", credentials: "same-origin", body: body })
            .then(function (response) {
                return response.json().catch(function () {
                    return {};
                });
            })
            .then(function (json) {
                if (json && json.success) {
                    reply(data.id, { ok: true, result: json.data || {} });
                } else {
                    var message =
                        json && json.data && json.data.message
                            ? json.data.message
                            : "The request failed — try again.";
                    reply(data.id, { ok: false, error: message });
                }
            })
            .catch(function () {
                reply(data.id, { ok: false, error: "WordPress could not be reached — reload the page." });
            });
    });
})();
