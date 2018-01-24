const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const HotMiddleware = require('webpack-hot-middleware');

var app = express();
var config = require('./webpack.config.js');
var compiler = webpack(config);

app.use(devMiddleware(compiler, {
	publicPath: config.output.publicPath
}));

app.use(HotMiddleware(compiler));

app.listen(8090, () => {
	console.log('Server listening on http://localhost:8090.\n');
});





