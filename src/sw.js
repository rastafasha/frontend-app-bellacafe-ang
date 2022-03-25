importScripts('assets/js/sw-utils.js');

const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';


const APP_SHELL = [
    // '/',

    '/assets/assets/ico/apple-touch-icon-114-precomposed.png',
    '/assets/assets/ico/apple-touch-icon-144-precomposed.png',
    '/assets/assets/ico/apple-touch-icon-57-precomposed.png',
    '/assets/assets/ico/apple-touch-icon-72-precomposed.png',
    '/assets/assets/images/favicon.png',
    '/assets/images/**',
    '/assets/images/beer-mug.png',
    '/assets/images/erro-bg.jpg',
    '/assets/images/pexels-lilartsy-3216564.jpeg',
    '/assets/images/zip_package1.png',
    '/assets/images/zip_package2.png',
    '/assets/images/zip_packageC.jpg',
    '/assets/js/**',
    '/assets/css/**',
    '/assets/css/admin.css',
    '/assets/css/anim.css',
    '/assets/css/animate.css',
    '/assets/css/cardsmall.css',
    '/assets/css/cart.css',
    '/assets/css/category.css',
    '/assets/css/favorites.css',
    '/assets/css/grids.css',
    '/assets/css/header.css',
    '/assets/css/home.css',
    '/assets/css/imageGalery.css',
    '/assets/css/inicio.css',
    '/assets/css/main.css',
    '/assets/css/menu-top-header.css',
    '/assets/css/menufooter.css',
    '/assets/css/normalize.css',
    '/assets/css/page.css',
    '/assets/css/pedidos.css',
    '/assets/css/post-favorites.css',
    '/assets/css/pricing.css',
    '/assets/css/product.css',
    '/assets/css/promociones.css',
    '/assets/css/search.css',
    '/assets/css/shared.css',
    '/assets/css/sliderhome.css',
    '/assets/css/store.css',
    '/assets/css/swiffy-slider.min.css',
    '/assets/css/user.css',
    '/assets/css/wallet.css',
    '/assets/icons/*',
    '/assets/splascreen/**',
    '/assets/splascreen/icon-ios/**',
    '/assets/splascreen/icon-ios/apple-launch-640x1136.png',
    '/assets/splascreen/icon-ios/apple-launch-750x1334.png',
    '/assets/splascreen/icon-ios/apple-launch-1125x2436.png',
    '/assets/splascreen/icon-ios/apple-launch-1242x2208.png',
    '/assets/svg/**',
    '/assets/svg/Logo-BellaCafeFinal.svg',
    '/assets/users/**',

    '/assets/icons/icon-1024x1024.png',
    '/assets/icons/icon-114x114.png',
    '/assets/icons/icon-120x120.png',
    '/assets/icons/icon-128x128.png',
    '/assets/icons/icon-144x144.png',
    '/assets/icons/icon-152x152.png',
    '/assets/icons/icon-180x180.png',
    '/assets/icons/icon-192x192.png',
    '/assets/icons/icon-256x256.png',
    '/assets/icons/icon-32x32.png',
    '/assets/icons/icon-384x384.png',
    '/assets/icons/icon-512x512.png',
    '/assets/icons/icon-57x57.png',
    '/assets/icons/icon-60x60.png',
    '/assets/icons/icon-72x72.png',
    '/assets/icons/icon-76x76.png',
    '/assets/icons/icon-96x96.png',


    '/favicon.ico',
    '/index.html',
    '/manifest.webmanifest',
    '/sw.js',
    '/assets/js/app.js'
];

const APP_SHELL_INMUTABLE = [
    'https://cdn.ckeditor.com/4.12.1/standard/ckeditor.js',
    'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
    'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js',
    'https://code.jquery.com/jquery-3.6.0.js',

    '/assets/css/anim.css',
    '/assets/css/animate.css',
    '/assets/css/main.css',
    '/assets/js/swiffy-slider.min.css',

    '/assets/js/app.js',
    '/assets/js/header.js',
    '/assets/js/sw-utils.js',
    '/assets/js/swiffy-slider.min.js',

    '/assets/js/libs/plugins/mdtoast.min.css',
    '/assets/js/libs/plugins/mdtoast.min.js',

    '/740.9579b31c1e0e4996.js',
    '/main.ed407d6ed265a55d.js',
    '/manifest.webmanifest',
    '/polyfills.5a22ed2d6a170c26.js',
    '/runtime.6e8c80d3409a8e33.js',
    '/styles.ef46db3751d8e999.css',
];



self.addEventListener('install', e => {

    console.log('SW: Instalado Sw');

    const cacheStatic = caches.open(STATIC_CACHE).then(cache =>
        cache.addAll(APP_SHELL));

    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache =>
        cache.addAll(APP_SHELL_INMUTABLE));



    e.waitUntil(Promise.all([cacheStatic, cacheInmutable]));

});



self.addEventListener('activate', e => {

    // borrar cache viejo
    console.log('SW1: Activo y listo para controlar la app');

    const respuesta = caches.keys().then(keys => {

        keys.forEach(key => {

            if (key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key);
            }

            if (key !== DYNAMIC_CACHE && key.includes('dynamic')) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil(respuesta);

});




self.addEventListener('fetch', e => {


    const respuesta = caches.match(e.request).then(res => {

        if (res) {
            return res;
        } else {

            return fetch(e.request).then(newRes => {

                return actualizaCacheDinamico(DYNAMIC_CACHE, e.request, newRes);

            });

        }

    });



    e.respondWith(respuesta);

});

// evento Sync: recuperamos la conexion a internet
self.addEventListener('sync', event => {

    console.log('Tenemos Conexión');
    console.log(event);
    console.log(event.tag);

});