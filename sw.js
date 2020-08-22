self.addEventListener('install',  e => {
    console.log("install!");
    e.waitUntill(
        caches.open("static").then(cache => {
            return cache.addAll([
                './', 
                "./index.html",
                "./style.css",
                "./script.js",
                "./index.js",
                "./maifest.webmanifest",
                "./image/to-do.png"
            ]);
        })
    );
} );

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
})

self.addEventListener('activate', e => {
    self.clients.claim();
});