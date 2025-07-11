const CACHE_NAME = 'boldo-cache-v1';
const urlsToCache = [
  '/Pages/Home/index.html',
  '/Pages/Home/style.css',
//   '/Pages/Blog/index.html',
//   '/Pages/Blog/style.css',
  '/bootstrap link/css/bootstrap.min.css',
  '/bootstrap link/js/bootstrap.min.js',
  '/assets/icons/icon-192x192.png',
  '/assets/icons/icon-512x512.png',
  // add any other frequently used assets/images
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
