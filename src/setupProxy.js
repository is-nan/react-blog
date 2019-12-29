const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', {
    target: 'http://127.0.0.1:9000/api/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }));
};
