!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.spotifyWrapper=t():e.spotifyWrapper=t()}(this,function(){return function(e){function t(s){if(r[s])return r[s].exports;var u=r[s]={i:s,l:!1,exports:{}};return e[s].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.API_URL="https://api.spotify.com/v1",t.HEADERS={headers:{Authorization:"'Bearer BQDprWtJuAJQljdoPrY_DLPvWUqfMG4Mg5rM71PzgxwmqPYipHeuVhImGqQZZshD_MeZbzFy7GnjygiPv1ynGnekn2vAoww_t-4tj4is05NgRajsscb2FFDcAeg38NJ2P5gZy9Jciw'"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){return e.json()};t.default=s},function(e,t,r){"use strict";var s=r(3),u=r(4);e.exports={search:s.search,searchArtists:s.searchArtists,searchAlbums:s.searchAlbums,searchPlaylists:s.searchPlaylists,getAlbum:u.getAlbum,getAlbums:u.getAlbums,getAlbumTracks:u.getAlbumTracks}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.searchPlaylists=t.searchTracks=t.searchAlbums=t.searchArtists=t.search=void 0;var s=r(0),u=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(u),c=t.search=function(e,t){return fetch(s.API_URL+"/search?q="+e+"&type="+t,s.HEADERS).then(n.default)};t.searchArtists=function(e){return c(e,"artist")},t.searchAlbums=function(e){return c(e,"album")},t.searchTracks=function(e){return c(e,"track")},t.searchPlaylists=function(e){return c(e,"playlist")}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAlbumTracks=t.getAlbums=t.getAlbum=void 0;var s=r(0),u=r(1),n=function(e){return e&&e.__esModule?e:{default:e}}(u);t.getAlbum=function(e){return fetch(s.API_URL+"/albums/"+e,s.HEADERS).then(n.default)},t.getAlbums=function(e){return fetch(s.API_URL+"/albums/?ids="+e,s.HEADERS).then(n.default)},t.getAlbumTracks=function(e){return fetch(s.API_URL+"/albums/"+e+"/tracks",s.HEADERS).then(n.default)}}])});
//# sourceMappingURL=spotify-wrapper.umd.js.map