// /*
//  * @Author: 南岸有归
//  * @Date: 2020-03-23 14:14:22
//  * @LastEditTime: 2020-03-24 10:47:43
//  * @LastEditors: 南岸有归
//  * @Description:
//  * @FilePath: \cloud_frontendd:\react\react-blog\src\setupProxy.js
//  * @
//  */
const proxy = require('http-proxy-middleware');
//
module.exports = function(app) {
  app.use(proxy('/api', {
    target: 'https://www.nanbk.com/api/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    },
    // cookieDomainRewrite: "http://localhost:3000"
  }));
};
