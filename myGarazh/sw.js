const CACHE_NAME = 'my-garage-v1'
const urlsToCache = [
	'/',
	'/index.html',
	'/about.html',
	'/assets/style.css',
	'/assets/icons/icon-192x192.png',
	'/assets/icons/icon-512x512.png',
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
