const CACHE_NAME = 'temich-ws';
const FILES_TO_CACHE = [
  '/',
  '/cv',
  '/about',
  '/contacts',

  '/-i/favicon.png',

  '/-i/avatars/eyes-beard.jpg',
  '/-i/avatars/inter.jpg',
  '/-i/avatars/ok.jpg',
  '/-i/avatars/roga.jpg',
  '/-i/avatars/shadow.jpg',
  '/-i/avatars/smoking.jpg',
  '/-i/avatars/wc.jpg',
  '/-i/avatars/we-win.jpg',

  '/-i/bnk-studio.png',
  '/-i/ciklum.png',
  '/-i/dev-iq.png',
  '/-i/kantar.png',
  '/-i/luxoft.png',
  '/-i/mobilius.png',
  '/-i/sitetime.png'
];

// const caches = window.caches;

self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          console.log('[ServiceWorker] Cache-Request', event.request.url);
          return response;
        }
        console.log('[ServiceWorker] Fetch-Request', event.request.url);
        return fetch(event.request);
      })
  );
});
