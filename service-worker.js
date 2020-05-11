/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "aa3d709fdd7cb68a2ca64dd5c48f01c1"
  },
  {
    "url": "assets/css/0.styles.01d25429.css",
    "revision": "439e7e5648e9dcf5d0d30525b8cb03c3"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "assets/img/MaterialIcons-Regular.a1adea65.svg",
    "revision": "a1adea65594c502f9d9428f13ae210e1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.b724d2cc.js",
    "revision": "4749f5325879444d26e00fbbe4bbbbd1"
  },
  {
    "url": "assets/js/10.31089fcd.js",
    "revision": "0701a019dbee60b32c4ec736e3522025"
  },
  {
    "url": "assets/js/11.0bb4f7b3.js",
    "revision": "8a13901acbca640fe62a681e11a41045"
  },
  {
    "url": "assets/js/12.6acc1bd4.js",
    "revision": "eb6972e6d6be625bafb782317d731e11"
  },
  {
    "url": "assets/js/13.43f607a6.js",
    "revision": "b0b87baa24b917b4fc9eb9eab4a01d4e"
  },
  {
    "url": "assets/js/14.effe3f6f.js",
    "revision": "26ba7467391232854a6f040a49804098"
  },
  {
    "url": "assets/js/15.a961932e.js",
    "revision": "3af6150d65e1659273eafaa69da1c88c"
  },
  {
    "url": "assets/js/16.520dfd1a.js",
    "revision": "409e3706fef47f5188ca10f0f8d8b4b1"
  },
  {
    "url": "assets/js/17.a6f240f5.js",
    "revision": "8c342b272e3d86e0bc91a65ed73a006e"
  },
  {
    "url": "assets/js/18.2544e49f.js",
    "revision": "29a3529b18b746e2940d835acead85c5"
  },
  {
    "url": "assets/js/19.12e971e3.js",
    "revision": "fb5844485528daf66b8400c57f69e7d0"
  },
  {
    "url": "assets/js/2.47bdaeb7.js",
    "revision": "4f770877ff2f6b9430b6dce9d8be15f9"
  },
  {
    "url": "assets/js/20.55523739.js",
    "revision": "fb1b2f9efacdcd0756133d87efd15605"
  },
  {
    "url": "assets/js/21.c4f0e272.js",
    "revision": "f2cd66dc4791f01fdb59adefa1b9eaf5"
  },
  {
    "url": "assets/js/22.f42646ec.js",
    "revision": "d657505a75e5540e2e21bdd060b8b3c1"
  },
  {
    "url": "assets/js/23.cae66c09.js",
    "revision": "dc0b957201af8ce5883d3bb5655eeb52"
  },
  {
    "url": "assets/js/24.73bcc8de.js",
    "revision": "1cd06dbf62659d66c404c904e9d07a34"
  },
  {
    "url": "assets/js/25.2b0904eb.js",
    "revision": "3b6c68aa9d162acb4196f169a8ac045b"
  },
  {
    "url": "assets/js/26.59c4df4c.js",
    "revision": "8162419516b40d09d44574637f307061"
  },
  {
    "url": "assets/js/27.ced7d2fb.js",
    "revision": "3f82428e0e6a721443de1616d32110e2"
  },
  {
    "url": "assets/js/28.eff6d544.js",
    "revision": "2872bfa26ca3b3ca1d3546d0665024bd"
  },
  {
    "url": "assets/js/29.66de421a.js",
    "revision": "d2c61631992591550d5803eadf232fd6"
  },
  {
    "url": "assets/js/30.0755c10f.js",
    "revision": "cf4a3758d37af37e6493517d4bd2dbee"
  },
  {
    "url": "assets/js/31.21170c9f.js",
    "revision": "0b3f69d43b2b98675526840be5666c6f"
  },
  {
    "url": "assets/js/32.3103836e.js",
    "revision": "a9095cff125bf3b5bf1349724759464f"
  },
  {
    "url": "assets/js/33.59dc11fa.js",
    "revision": "c0609eeec46cd059c77439593f06d7a2"
  },
  {
    "url": "assets/js/34.7935d936.js",
    "revision": "9d9f28977ef3ea38d84c8e4f705722d1"
  },
  {
    "url": "assets/js/35.e3c64d37.js",
    "revision": "96a21fa6af3c081ef34d20b66e4f3040"
  },
  {
    "url": "assets/js/36.5da775ad.js",
    "revision": "0d088c4a368e2a8771b495adac34ef7e"
  },
  {
    "url": "assets/js/37.ae390cfb.js",
    "revision": "11651981df811351bc903a89b806b3dd"
  },
  {
    "url": "assets/js/38.f48e566d.js",
    "revision": "320933a20280a7de03bbfbb42f5929ec"
  },
  {
    "url": "assets/js/39.4ade8df0.js",
    "revision": "006f6164f2756344ac6f997733d94647"
  },
  {
    "url": "assets/js/40.e31c51fe.js",
    "revision": "9e90f7a20e4c84bd23acb8bbd7bda587"
  },
  {
    "url": "assets/js/41.5e4f967f.js",
    "revision": "4dc06abd9c281156b69da5dbe27c534a"
  },
  {
    "url": "assets/js/42.5513c4c1.js",
    "revision": "8c4a2adccb463d3e92a4cbc93ac27925"
  },
  {
    "url": "assets/js/43.b71c7396.js",
    "revision": "c76c8769688e8e4865473e4dfed3563b"
  },
  {
    "url": "assets/js/5.11840b1d.js",
    "revision": "6f775b87801319b790856da1ec28531d"
  },
  {
    "url": "assets/js/6.abc0fae6.js",
    "revision": "6d172ddb10e0deecd642dcb69eb19bba"
  },
  {
    "url": "assets/js/7.113e5bf6.js",
    "revision": "3eb5ef3ace81ed519c724bd465d69eb5"
  },
  {
    "url": "assets/js/8.159f8cf1.js",
    "revision": "6351370df1de6f75835e657b3c79e669"
  },
  {
    "url": "assets/js/9.4f68c8cc.js",
    "revision": "5c90cc0fb9cee990226dcfba93254b80"
  },
  {
    "url": "assets/js/app.667f7aab.js",
    "revision": "6bb5f803ec84d292403f39d4645e504f"
  },
  {
    "url": "assets/js/vendors~docsearch.3a898135.js",
    "revision": "920cda6d8c97a95762fceeb7dfd8b1b0"
  },
  {
    "url": "assets/media/amoled-theme.png",
    "revision": "30ba3c49ced5ecb20b456396bd8ecbca"
  },
  {
    "url": "assets/media/backgroundcolorblack.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/backgroundcolorwhite.png",
    "revision": "4b425030809b32c951b8045746454d0b"
  },
  {
    "url": "assets/media/browse.png",
    "revision": "44cbfa49d9e001c3da50f808e02e4fa0"
  },
  {
    "url": "assets/media/dark-blue.png",
    "revision": "0ea4bf6d4325cb8379b272e5d0a9509e"
  },
  {
    "url": "assets/media/dark-theme.png",
    "revision": "7f791df794a6f4e0f5f7e3d1d87eab68"
  },
  {
    "url": "assets/media/fitheight.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "assets/media/fitscreen.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/fitwidth.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/installprompt.png",
    "revision": "bfdadee9baf2fb675d5bfdc957a1d6d1"
  },
  {
    "url": "assets/media/logo.svg",
    "revision": "a2dae57c67a9bbb51367c1dbb4b4d1c2"
  },
  {
    "url": "assets/media/main-theme.png",
    "revision": "4b07a2eae22080b43694a6c277fd7e36"
  },
  {
    "url": "assets/media/manga.png",
    "revision": "c58cabeea0a6c069a3e967682e8cc56c"
  },
  {
    "url": "assets/media/my-library.png",
    "revision": "7c45ee4c38e9848be71908787866a130"
  },
  {
    "url": "assets/media/openinwebview.jpg",
    "revision": "c15b7a6c4ef6f5b6d0ebe332de5401e9"
  },
  {
    "url": "assets/media/originalsize.png",
    "revision": "fcbada5ec4c2bed02a66adda4c262257"
  },
  {
    "url": "assets/media/screens.png",
    "revision": "f2bf5afde6b5e0b4892e08702c226c95"
  },
  {
    "url": "assets/media/smartfit.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/stretch.png",
    "revision": "aa60b7aaf019b4a1ac720626cdf246e3"
  },
  {
    "url": "assets/media/tachiyomi.png",
    "revision": "d3b1c6ef8010d4233a683398f1d8f688"
  },
  {
    "url": "assets/media/video-guide-backup-create.png",
    "revision": "e261b9f0b36b540d2e9292d8372c2f74"
  },
  {
    "url": "assets/media/video-guide-backup-restore.png",
    "revision": "6aa61033c54c017194aebef7986223ae"
  },
  {
    "url": "assets/media/video-guide-category-add-to.png",
    "revision": "ffba1a489f161e60d59c83d9b1ccda69"
  },
  {
    "url": "assets/media/video-guide-category-create.png",
    "revision": "e793139d4f53e417afed2dd0dabfae9a"
  },
  {
    "url": "assets/media/video-guide-category-delete.png",
    "revision": "c96dacc5b76b83d3bf6c14bc691ad626"
  },
  {
    "url": "assets/media/video-guide-category-edit.png",
    "revision": "826feca07bc18e89642c1f4e119a7bdb"
  },
  {
    "url": "assets/media/video-guide-category-remove-from.png",
    "revision": "385fff55b7b1b5390c7426cc82b0a30d"
  },
  {
    "url": "assets/media/video-guide-category-reorder.png",
    "revision": "fc0f9acba1da0039c072214933d3750e"
  },
  {
    "url": "assets/media/video-guide-extension-install.png",
    "revision": "ccb88b522e405e5868ba7d5941f3c407"
  },
  {
    "url": "assets/media/video-guide-library-add-to.png",
    "revision": "77ed753f8524f1066797065137fa3492"
  },
  {
    "url": "assets/media/video-guide-mangadex-no-results.png",
    "revision": "50d19b61bf2a1169dfaf00f68eb1f763"
  },
  {
    "url": "assets/media/video-guide-unknownsources-android10.png",
    "revision": "99799a8759fbd492d3c582ea0f5fff97"
  },
  {
    "url": "assets/media/video-guide-unknownsources-android711.png",
    "revision": "0fe1c5865a9d5e10b1b7ab0c04d98aa2"
  },
  {
    "url": "assets/media/withcropborder.png",
    "revision": "ce67a23f3fe437057ffff724ec2b329c"
  },
  {
    "url": "assets/media/withoutcropborder.png",
    "revision": "d77993180d44d8901ca3fedbc2cc9450"
  },
  {
    "url": "assets/media/zoomstartpositioncenter.png",
    "revision": "bd94e1eb71e220f49c79ed6c9c02f87e"
  },
  {
    "url": "assets/media/zoomstartpositionleft.png",
    "revision": "dec5ff9cf376aeca7af59606b5e78f4a"
  },
  {
    "url": "assets/media/zoomstartpositionright.png",
    "revision": "b59c83acde28d8a3903b09cbacf9dfe4"
  },
  {
    "url": "extensions/index.html",
    "revision": "2a643d20563b318600afeeea9a4b32c7"
  },
  {
    "url": "forks/index.html",
    "revision": "1ab22463a5684fce1b8c3ab6be09d655"
  },
  {
    "url": "forks/Neko/img/banner.png",
    "revision": "31fc0fefde4a8cfe84adf24c2b5212ff"
  },
  {
    "url": "forks/Neko/img/logo.png",
    "revision": "9e82e2bb234b4f3e22e0afc7266bf521"
  },
  {
    "url": "forks/Neko/index.html",
    "revision": "481a88c03019ad093b5c31782836461c"
  },
  {
    "url": "forks/TachiyomiAZ/img/gunz.png",
    "revision": "7ba4f33a10b643f437c3fd8dadda110a"
  },
  {
    "url": "forks/TachiyomiAZ/img/logo.png",
    "revision": "8c091950f3de1d0e81e69728db382d0d"
  },
  {
    "url": "forks/TachiyomiAZ/index.html",
    "revision": "84c059204e84b15f4c0bdd062e645469"
  },
  {
    "url": "forks/TachiyomiEH/img/banner.png",
    "revision": "a2852ea02d260d0395d565b133a9de3c"
  },
  {
    "url": "forks/TachiyomiEH/img/logo.png",
    "revision": "2d9809f2099cbed6378ad71b26258aff"
  },
  {
    "url": "forks/TachiyomiEH/index.html",
    "revision": "77700fc317103b4b1e3d22a4fee6168f"
  },
  {
    "url": "forks/TachiyomiJ2K/img/banner.png",
    "revision": "df716f69ba60004b7cc03cf8d317a95d"
  },
  {
    "url": "forks/TachiyomiJ2K/img/logo.png",
    "revision": "c758f9e913e15e23c7a5109784c4f280"
  },
  {
    "url": "forks/TachiyomiJ2K/index.html",
    "revision": "781be9b41ff74cc2e175ef494c76b4c0"
  },
  {
    "url": "help/contribution/index.html",
    "revision": "1e62f93eaf81599528d58d60f337b27f"
  },
  {
    "url": "help/faq/index.html",
    "revision": "2c2c38d1d2f075609b2642f6b4420b1c"
  },
  {
    "url": "help/guides/categories/index.html",
    "revision": "cc431bd6e6ea0a03c5312eaab50c02d5"
  },
  {
    "url": "help/guides/creating-backups/index.html",
    "revision": "208fa94d9f00a32e388366da41673fe7"
  },
  {
    "url": "help/guides/getting-started/index.html",
    "revision": "b54aa179f016db832a8285fcba040f4a"
  },
  {
    "url": "help/guides/reading-local-manga/index.html",
    "revision": "25c441d28547064f7c653b35d3e181ff"
  },
  {
    "url": "help/guides/settings/advanced/index.html",
    "revision": "deeb9d8af9efc77eddda4ac8f7ff954b"
  },
  {
    "url": "help/guides/settings/backup/index.html",
    "revision": "115bf64c326faec6d5cef01a5e4883a5"
  },
  {
    "url": "help/guides/settings/downloads/index.html",
    "revision": "e635cdfca087755b99be69c532f6eeab"
  },
  {
    "url": "help/guides/settings/general/index.html",
    "revision": "27c1b82ecb5eff836def3f4ce5f23d4f"
  },
  {
    "url": "help/guides/settings/index.html",
    "revision": "6275e88d6fcdca540be96ac39ae3167e"
  },
  {
    "url": "help/guides/settings/reader/index.html",
    "revision": "71cb5af6bcd745de01192a765ab4eece"
  },
  {
    "url": "help/guides/settings/tracking/index.html",
    "revision": "22c9d1519272fe3ed13d32933889f15a"
  },
  {
    "url": "help/guides/source-migration/index.html",
    "revision": "b4237f6beef595a0fe9bedc90c4c49f3"
  },
  {
    "url": "help/guides/source-problems/index.html",
    "revision": "007bb28e7f592a0a0741b178f2ad7bdd"
  },
  {
    "url": "help/index.html",
    "revision": "8279d4d9f3bb332de112fac2be3d2b12"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b1b40b3c083d63bb5b1797b27adf1524"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "342d4bacd45c5b7d8b6c20636e160044"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "8f9a714cf6b2e3cac0e1f7e3ca55d994"
  },
  {
    "url": "icons/logo.png",
    "revision": "41e7681ddc5c815bf8490f44d51fa8b2"
  },
  {
    "url": "icons/logo.svg",
    "revision": "a2dae57c67a9bbb51367c1dbb4b4d1c2"
  },
  {
    "url": "icons/mstile-144x144.png",
    "revision": "ee47ab65d26fa83805df182739a4643d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "e0e665fe4583ca6ac69407dc43ece19c"
  },
  {
    "url": "icons/mstile-310x150.png",
    "revision": "e43e9a7c2fed38e9f6c21ef02ce7d348"
  },
  {
    "url": "icons/mstile-310x310.png",
    "revision": "89ab29f5ac6993e4adce1e2e951bcb0e"
  },
  {
    "url": "icons/mstile-70x70.png",
    "revision": "56cde027ca042089023d7b5f197c530f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "bb10e5b732c607440ec1319a1fe6c65d"
  },
  {
    "url": "index.html",
    "revision": "48525b3df7bd1855222981521cd764f3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
