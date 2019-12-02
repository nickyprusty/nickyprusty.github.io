self.addEventListener('install', function(event) {
  console.log("Installing the service worker")
  event.waitUntil(
    caches.open('v1').then(function(cache) {
            return cache.addAll([
              '/',
              './aframe-master.min.js',
              './index.css',
              './assets/vrvideoedited.mp4',
              './assets/click.ogg',
              './assets/background3.png'
            ]);
          })
        );
    });

    self.addEventListener('fetch', (event) => {
      console.log("Fetching "+event.request.url)
      event.respondWith(
        caches.match(event.request).then((response) => {
          return response || fetch(event.request);
        })
      );
    });