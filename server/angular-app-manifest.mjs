
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 675, hash: '68ccdffe868834d862a31fe6ad43cf177311444fc794ee21075dbbecc821a9ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 965, hash: 'afa0d5ce46a7f4a779abaf1bd656f9d0500a0c8b4c9c3015813f97baa0dd073c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8598, hash: 'acd85107267c2a41dc86141d13885756ba1694fa7c2651a82264462485dfdc85', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6DAQ7U5B.css': {size: 98, hash: 'htZArVcsN+M', text: () => import('./assets-chunks/styles-6DAQ7U5B_css.mjs').then(m => m.default)}
  },
};
