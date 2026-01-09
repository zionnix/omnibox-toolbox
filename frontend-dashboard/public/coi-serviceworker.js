/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
let coepCredentialless = false;
if (typeof window === 'undefined') {
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

    self.addEventListener("message", (ev) => {
        if (!ev.data) {
            return;
        } else if (ev.data.type === "deregister") {
            self.registration
                .unregister()
                .then(() => {
                    return self.clients.matchAll();
                })
                .then(clients => {
                    clients.forEach((client) => client.navigate(client.url));
                });
        } else if (ev.data.type === "coepCredentialless") {
            coepCredentialless = ev.data.value;
        }
    });

    self.addEventListener("fetch", function (event) {
        const r = event.request;
        if (r.cache === "only-if-cached" && r.mode !== "same-origin") {
            return;
        }

        const request = (coepCredentialless && r.mode === "no-cors")
            ? new Request(r, {
                credentials: "omit",
            })
            : r;
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response.status === 0) {
                        return response;
                    }

                    const newHeaders = new Headers(response.headers);
                    newHeaders.set("Cross-Origin-Embedder-Policy",
                        coepCredentialless ? "credentialless" : "require-corp"
                    );
                    if (!coepCredentialless) {
                        newHeaders.set("Cross-Origin-Resource-Policy", "cross-origin");
                    }
                    newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");

                    return new Response(response.body, {
                        status: response.status,
                        statusText: response.statusText,
                        headers: newHeaders,
                    });
                })
                .catch((e) => console.error(e))
        );
    });

} else {
    (() => {
        const reloadedBySelf = window.sessionStorage.getItem("coiReloadedBySelf");
        window.sessionStorage.removeItem("coiReloadedBySelf");
        const coepDegrading = (reloadedBySelf == "coepdegrade");

        // You can customize the behavior of this script through a global `coi` variable.
        const coi = {
            shouldRegister: () => !reloadedBySelf,
            shouldDeregister: () => false,
            coepCredentialless: () => true,
            coepDegrade: () => true,
            doReload: () => window.location.reload(),
            quiet: false,
            ...window.coi
        };

        const n = navigator;
        const controlling = n.serviceWorker && n.serviceWorker.controller;

        // Record the failure if the page is served by serviceWorker.
        if (controlling && !window.crossOriginIsolated) {
            window.sessionStorage.setItem("coiCoopOnly", "1");
        }
        const coopOnly = window.sessionStorage.getItem("coiCoopOnly");

        if (controlling) {
            // Reload only on the first failure.
            const reloadToDegrade = coi.coepDegrade() && !(
                coopOnly || coepDegrading
            );
            n.serviceWorker.controller.postMessage({
                type: "coepCredentialless",
                value: (reloadToDegrade || coepDegrading)
            });
            if (reloadToDegrade) {
                !coi.quiet && console.log("Reloading page to degrade COEP.");
                window.sessionStorage.setItem("coiReloadedBySelf", "coepdegrade");
                coi.doReload("coepdegrade");
            }

            if (coopOnly) {
                // Set the windows to reload after unregistration.
                window.sessionStorage.setItem("coiReloadedBySelf", "cooponly");

                !coi.quiet && console.log(`Reloading page to reload cross-origin resources.`);
                coi.doReload("cooponly");
            } else if (coepDegrading) {
                !coi.quiet && console.log("Degraded COEP.");
            }
        } else {
            if (!window.crossOriginIsolated && coi.shouldRegister()) {
                !coi.quiet && console.log("COOP/COEP Service Worker registered");
                n.serviceWorker && n.serviceWorker.register(window.document.currentScript.src).then(
                    (registration) => {
                        !coi.quiet && console.log("COOP/COEP Service Worker registration successful", registration);
                    },
                    (err) => {
                        !coi.quiet && console.log("COOP/COEP Service Worker registration failed", err);
                    }
                );
            } else {
                !coi.quiet && console.log("COOP/COEP Service Worker not registered, current origin is already cross-origin isolated.");
            }
        }
    })();
}
