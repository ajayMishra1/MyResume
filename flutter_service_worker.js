'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "0fb16dc54dcbebe95b0573a2287d5ab1",
"/": "0fb16dc54dcbebe95b0573a2287d5ab1",
"main.dart.js": "744381ba2fdfa79afe9481b90815b133",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad4c4448edb890d7c824750331fd968b",
"assets/LICENSE": "0aff6baab1d10d4076b64c05a31797e2",
"assets/AssetManifest.json": "736da95c55a6a0e660b82797f54c68f7",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/oneclick.png": "47ef690f6b4b0ff3400f1ad60e3b57f8",
"assets/assets/images/avatar.png": "b6ffebb187a5e472621dff1c1346bb2b",
"assets/assets/images/footer.png": "c6a9a89d51bd920cb2f84e5bb7b5a55a"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
