
export default {
  basePath: 'https://imane1banzi.github.io/siteevent',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
