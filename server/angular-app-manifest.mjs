
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
    'index.csr.html': {size: 675, hash: '14b8f3c5bd635226f1398b97c61183b9e9a7db3eaf7d987075e6262e01f15067', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 965, hash: '540c1b66c3ae7d481f1883ec7ed71f3a763bb12ccee5796039154c6ef9d4f7a7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8613, hash: '8e91118686a509793d505e1beca1bf88723a2567d598c247264dc7b0cedb4aca', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6DAQ7U5B.css': {size: 98, hash: 'htZArVcsN+M', text: () => import('./assets-chunks/styles-6DAQ7U5B_css.mjs').then(m => m.default)}
  },
};
