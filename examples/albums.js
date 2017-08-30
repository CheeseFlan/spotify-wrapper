// to run: babel-node album.js

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({
  token: 'BQDr-FbBYGFoN9VqEiOm1Z8m_4JnnUXIB5FNWe8ucJDSnYUKaj4Fl5KQh-BWqjwwbiOM0ZJoXa7cTsor3cm7RUXDL7RwLRfFk-FJmcDXV-Ox-3cv1-UBPgtodutwgSBPFSGLueOm8Q'
})

const albums = spotify.search.albums('Incubus');

albums.then(data => data.albums.items.map(item => console.log(item.name)));
