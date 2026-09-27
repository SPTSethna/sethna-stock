// Minimal service worker: lets phones install "Sethna Stock" as an app.
// It never touches the data requests to Google, and always loads fresh pages (no old data).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return;   // leave Google requests alone
  e.respondWith(fetch(e.request));
});
