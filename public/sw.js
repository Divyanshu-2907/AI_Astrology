const CACHE_NAME = 'AI Astrology-v1';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                '/',
                '/manifest.json',
                '/favicon.svg',
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    // Only intercept same-origin GET requests
    if (event.request.method !== 'GET' || url.origin !== location.origin) {
        return;
    }
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('push', (event) => {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/favicon.svg',
            badge: '/favicon.svg',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2',
                url: data.url || '/'
            }
        };
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(event.notification.data.url)
    );
});
