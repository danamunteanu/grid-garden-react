"use strict";var precacheConfig=[["/index.html","557c3adffcb20f3b89206686a2fd0eb3"],["/static/css/main.d40269b0.css","5d05e4ebc1d62e3486adeb2735b75fd6"],["/static/js/main.6152a4ab.js","6b3fc1b2057b5ef06be27afe6c64b29d"],["/static/media/Human_defender.6283373e.png","6283373ef6c52335d8e4e50a12647593"],["/static/media/Human_fighter_air_noBack.cbfa0ea2.png","cbfa0ea2ede1b38f6fa8b03c0d0f4eed"],["/static/media/Human_fighter_soil_noBack.26fcd8c8.png","26fcd8c8c26c9efcb3461eafb8fac52e"],["/static/media/Plati_defender.63b5153b.png","63b5153bb696a180c0c4be5f9fd58796"],["/static/media/Plati_fighter_air_noBack.5f6be2ad.png","5f6be2ade8625cb99c127d7e17eb2464"],["/static/media/Plati_fighter_soil_noBack.58e67d3f.png","58e67d3fdb5e100e3b69ea6a3481fb34"],["/static/media/carrots-win.e1ccc78b.png","e1ccc78b5d56025dbee5ce6f59605f3b"],["/static/media/demo_area_air_back_1.2bbcbb26.png","2bbcbb26bf13badf4210d59537b73365"],["/static/media/demo_area_air_back_2.6cc4ff20.png","6cc4ff20ef0ec646b09222ae8ac11fd2"],["/static/media/demo_area_air_back_3.da6d2db9.png","da6d2db9b33499db6f1af7f1b0c0cba4"],["/static/media/demo_area_air_back_4.fb8f9e12.png","fb8f9e12734f83a908ed5e9dc62aec4a"],["/static/media/demo_area_air_back_5.651b4bf6.png","651b4bf63c3258c138fceb237ada92fa"],["/static/media/demo_area_air_back_6.2d0f585a.png","2d0f585a848093c81be4fb78f6e591ed"],["/static/media/demo_area_air_back_7.eb7a5ae1.png","eb7a5ae144cbb1f0a7e64f05fd64974a"],["/static/media/demo_area_soil_back_1.c75bac2e.png","c75bac2e044ba855455300547f0ce1d8"],["/static/media/demo_area_soil_back_2.2ac7ad3e.png","2ac7ad3ecfee264cec5db6cd08f6e1a9"],["/static/media/demo_area_soil_back_3.ab9ab9be.png","ab9ab9be3a3735992db3e2e4c62606ab"],["/static/media/demo_area_soil_back_4.42c9c9e2.png","42c9c9e2ac3a36e47e4b993a3411da39"],["/static/media/demo_area_soil_back_5.e178449f.png","e178449f7ca1ef88f04fb6827cd43a3c"],["/static/media/demo_area_soil_back_6.ca46a882.png","ca46a882075da7c0fbc13f76f2211fcb"],["/static/media/demo_area_soil_back_7.fc6cd976.png","fc6cd976fc3a7c2582a52c681302a825"],["/static/media/froggy.72745130.svg","727451300026fd425855166bab35339e"],["/static/media/halo-humans.f0d4b12c.svg","f0d4b12ca4883f42858b69fb9a21dacf"],["/static/media/halo-plati.30be75ea.svg","30be75ea8e3102143e5c80bc3d633f46"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});