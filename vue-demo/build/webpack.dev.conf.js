var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.base.conf');

// This connects to the server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly.
// add hot-reload related code to entry chunk
// 使用webpack-dev-server时不加此行，会报错 Cannot GET /__webpack_hmr
base.entry = base.entry.concat([
	'webpack-hot-middleware/client'
]);

module.exports = merge(base, {
	devtool: '#eval-source-map', // 更容易追踪错误和警告，将编译的代码映射为源代码
	output: {
		publicPath: '/' //服务器脚本用到，确保文件资源能在localhost下正确访问，普通文件访问不加此项  webpack-dev-server也会默认从publicPath为基准，使用它来决定在哪个目录下启用服务，来访问webpack输出的文件
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin() // 热更新插件
	]
});


