
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://imane1banzi.github.io/siteevent/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/siteevent"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 696, hash: 'a5a3902a5f32e30dd44ced1425606dfc491442e20a65fbb53ac72aab69fecbfd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 986, hash: 'f8d0970f51b13e672a55c112d3c74de485cac11c7fe1df7573e91725106da6f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8634, hash: '2322770494ccdc3b8a1126a26872e97ab0cb948c5c93aa2fdce4a46751d30efb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6DAQ7U5B.css': {size: 98, hash: 'htZArVcsN+M', text: () => import('./assets-chunks/styles-6DAQ7U5B_css.mjs').then(m => m.default)}
  },
};
