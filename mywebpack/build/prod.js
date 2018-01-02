var webpack = require('webpack');
var config = require('./webpack.prod.conf');

webpack(config, function(err, stats) {
	console.log(stats.toString({chunks: false, color: true}));
});
