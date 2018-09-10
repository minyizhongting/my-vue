var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware'); // 是一个中间件容器，它将通过webpack处理后的文件发布到一个服务器
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();
var config = require('./webpack.dev.conf'); // 引入dev配置文件
var compiler = webpack(config);

var proxy = require('http-proxy-middleware');	// 把请求代理转发到其他服务器的中间件

// proxy中间件的选择项
var options = {
  target: 'http://localhost:9090/city',	// 目标服务器host
  changeOrigin: true	// 默认false，是否需要改变原始主机头为目标URL
};
// 创建代理
var exampleProxy = proxy(options);
// 使用代理
app.use('/city', exampleProxy);

// Tell express to use the webpack-dev-middleware and use the config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}));

app.listen(8090, function () {
  console.log('Server listening on port 8090!\n');
});