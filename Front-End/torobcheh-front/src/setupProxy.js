// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function(App) {
  // App.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'http://localhost:3000',
  //     changeOrigin: true,
  //   })
  // );
// };

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/api', 
        { target: 'http://localhost:3000/' }
    ));
}