const APP_CACHE_NAME = 'temich-app-6-1';

const DATA_CACHE_NAME = 'temich-data-v1';

const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/404.html',
    // General App
    '/i/app.js',
    '/i/service-worker.js',
    '/i/app.css',
    '/i/icons/favicon.ico',
    '/i/icons/favicon.png',
    '/i/icons/icon-72x72.png',
    '/i/icons/icon-96x96.png',
    '/i/icons/icon-128x128.png',
    '/i/icons/icon-144x144.png',
    '/i/icons/icon-152x152.png',
    '/i/icons/icon-192x192.png',
    '/i/icons/icon-256x256.png',
    '/i/icons/icon-384x384.png',
    '/i/icons/icon-512x512.png',
    '/i/fonts/Weber Hand ITC Std.otf',
    '/i/fonts/WeberHandITCStd.ttf',
    '/i/fonts/WeberHandITCStd.woff',
    '/i/fonts/WeberHandITCStd.woff2',
    // Home
    '/i/vr-people-workplace-2017-04-14.jpg',
    '/i/n-rosberg_japan-gp_2016_08.jpg',
    // Avatars
    '/i/avatars/eyes-beard.jpg',
    '/i/avatars/family.jpg',
    '/i/avatars/hard-working.jpg',
    '/i/avatars/hololens.jpg',
    '/i/avatars/phone.jpg',
    '/i/avatars/player.jpg',
    '/i/avatars/shadow.jpg',
    '/i/avatars/wc.jpg',
    // About
    '/family/my-family-and-i.jpg',
];

const DATA_URL = 'https://query.yahooapis.com/v1/public/yql';

self.addEventListener('install', (e) => {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(APP_CACHE_NAME)
            .then((cache) => {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

self.addEventListener('activate', (e) => {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys()
            .then((keyList) => {
                return Promise.all(keyList.map((key) => {
                    if (key !== APP_CACHE_NAME && key !== DATA_CACHE_NAME) {
                        console.log('[ServiceWorker] Removing old cache', key);
                        return caches.delete(key);
                    }
                }));
            })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    console.log('[ServiceWorker] Fetch', e.request.url);
    if (e.request.url.indexOf(DATA_URL) > -1) {
        /*
         * When the request URL contains DATA_URL, the app is asking for fresh
         * weather data. In this case, the service worker always goes to the
         * network and then caches the response. This is called the "Cache then
         * network" strategy:
         * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
         */
        e.respondWith(
            caches.open(DATA_CACHE_NAME)
                .then((cache) => {
                    return fetch(e.request)
                        .then((response) => {
                            cache.put(e.request.url, response.clone());
                            return response;
                        });
                })
        );
    } else {
        /*
         * The app is asking for app shell files. In this scenario the app uses the
         * "Cache, falling back to the network" offline strategy:
         * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
         */
        e.respondWith(
            caches.match(e.request)
                .then((response) => {
                    return response || fetch(e.request);
                })
        );
    }
});