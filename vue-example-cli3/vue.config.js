const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: '',
  configureWebpack: {

  },
  // cli3中已设置
  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('@', resolve('src'))
  // },
  devServer: {
    proxy: {
      '/server/data': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/server/data': '/comments'
        }
      }
    }
  }
};