if ('serviceWorker' in navigator) {
  console.log('[ServiceWorker] is supported');
  navigator.serviceWorker.register('/sw.js') // always root of the project!
    .then(() => {
      console.log('[ServiceWorker] Registered');//, navigator.serviceWorker
      return navigator.serviceWorker.ready;
    })
    .then((reg) => {
      console.log('[ServiceWorker] Is Ready');//reg
      serviceWorkerRegistration = reg;
    })
    .catch((error) => {
      console.log('[ServiceWorker] Error', error);
    });
}
