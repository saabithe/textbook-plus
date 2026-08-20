const CACHE_NAME = "textbook++-v2";
const PRECACHE_URLS = [
  "/",
  "/subjects/physics",
  "/subjects/chemistry",
  "/subjects/mathematics",
  "/subjects/biology",
  "/subjects/english",
  "/subjects/arabic",
  "/class-11",
  "/class-11/maths",
  "/class-11/physics",
  "/class-11/sets",
  "/class-11/relations-and-functions",
  "/class-11/trigonometric-functions",
  "/class-11/complex-numbers-and-quadratic-equations",
  "/class-11/linear-inequalities",
  "/class-11/permutations-and-combinations",
  "/class-11/binomial-theorem",
  "/class-11/sequences-and-series",
  "/class-11/straight-lines",
  "/class-11/conic-sections",
  "/class-11/introduction-to-three-dimensional-geometry",
  "/class-11/limits-and-derivatives",
  "/class-11/statistics",
  "/class-11/probability",
  "/class-11/units-and-measurements",
  "/class-11/motion-in-a-straight-line",
  "/class-11/motion-in-a-plane",
  "/class-11/laws-of-motion",
  "/class-11/work-energy-and-power",
  "/class-11/system-of-particles-and-rotational-motion",
  "/class-11/gravitation",
  "/class-11/mechanical-properties-of-solids",
  "/class-11/mechanical-properties-of-fluids",
  "/class-11/thermal-properties-of-matter",
  "/class-11/thermodynamics",
  "/class-11/kinetic-theory",
  "/class-11/oscillations",
  "/class-11/waves",
  "/icon.svg",
  "/icon-192.png",
  "/icon-512.png",
  "/_offline",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Next.js hashed assets — cache-first (immutable)
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Everything else — network only (no HTML caching)
  event.respondWith(fetch(event.request));
});
