// to run: babel-node album.js

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQAnFMB4ZEw_VpAU0e5tM1lCVDRXHmVKo_pBj5AL-eYS8EFVviG5RlZim5QXNtQlh_aeL1UvVFCestz50nzUyLYOWQ_eRI2B36CoNw6c8EuCzPHbQRZnSJ8NMDlxdyVxZUvBJtuULg'
})

const albums = spotify.search.albums('Incubus');

albums.then(data => console.log(data));
