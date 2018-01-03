var path = require('path');
var webpack = require('webpack'); //用于访问内置插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 重新生成dist中html文件
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // 将入口chunk中引用的*.css移动到独立分离的css文件，样式不再内嵌在js中

var ROOT = require('../config/paths').ROOT;

module.exports = {
	entry: [
		ROOT + '/src/index.js'
	],
	output: {
		path: path.resolve(ROOT, 'dist'), // 也可用占位符
		filename: 'bundle.[hash:8].js'  // 可以使用一些占位符：name(模块名称)、hash(模块编译后的整体hash值)
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				// use: [
				// 	'vue-style-loader',
				// 	'css-loader'
				// ]
				use: ExtractTextPlugin.extract({
					fallback: 'vue-style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': ROOT
		},
		extensions: ['.js', '.vue', '.json'] // 自动解析扩展名，使导入模块时可以不带扩展名
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: ROOT + '/src/index.html',
			hash: true,
			minify: false
		})
	]
};


