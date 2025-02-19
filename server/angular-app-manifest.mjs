
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ContraAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/ContraAngular/reset-password",
    "route": "/ContraAngular"
  },
  {
    "renderMode": 2,
    "route": "/ContraAngular/reset-password"
  },
  {
    "renderMode": 2,
    "route": "/ContraAngular/succesfull"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4904, hash: 'c3f35e0c638d989cab3bfbfa7a57214a3085a3a5d077767b8eb6132b842d3d54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: '16fc0caf69014facb75ddd2908bc1e32aa7e07a644e3f5df85d1c71d9e41031c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'succesfull/index.html': {size: 9524, hash: '6c0779160b6b6c0e7c7a233fc15e358e3b46151ded69d09e701e9b209f8613dd', text: () => import('./assets-chunks/succesfull_index_html.mjs').then(m => m.default)},
    'reset-password/index.html': {size: 15629, hash: '0518d01e43594b0e53ed9ef56eec93db49a6a8e87c926196c541d6024c4228c7', text: () => import('./assets-chunks/reset-password_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
