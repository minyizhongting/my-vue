var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main1: './src/main1.js',
		main2: './src/main2.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.CommonsChunkPlugin({ // 作用就是提取代码块中的公共模块，将公共模块打包到一个独立的文件中去，以便在其他的入口和模块中使用
			name: 'commons', // 指定公共bundle的名称
			filename: 'commons.js',
			chunks: ['main1', 'main2']
		}), // 提取main1，main2中的公共模块
		new HtmlWebpackPlugin({
			title: 'Output Management caching',
			filename: 'index.html',
			hash: true,
			cache: true
		})
	]
};
