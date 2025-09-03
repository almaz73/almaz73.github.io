const CACHE_NAME = 'my-garage-v2'
const urlsToCache = [
	'/',
	'/myGarazh/index.html',
	'/myGarazh/about.html',
	'/myGarazh/assets/style.css',
	'/myGarazh/assets/icons/icon-192x192.png',
	'/myGarazh/assets/icons/icon-512x512.png',
]

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function (cache) {
			console.log('urlsToCache', urlsToCache)
			return cache.addAll(urlsToCache)
		})
	)
})

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			if (response) {
				return response
			}
			return fetch(event.request)
		})
	)
})
