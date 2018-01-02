var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.base.conf');

var ROOT = require('../config/paths').ROOT;

var CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理dist文件夹，防止重复增加加戳js
var ManifestPlugin = require('webpack-manifest-plugin'); // 生成manifest.json，输入到输出
var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 压缩js

module.exports = merge(base, {
	plugins: [
		new webpack.BannerPlugin('Created by Baihe'), // 打包后代码添加头部注释
		new CleanWebpackPlugin(['dist'], {
			root: ROOT,
			verbose: true
		}),
		new ManifestPlugin(),
		new UglifyJSPlugin({
			sourceMap: true
		})
	]
});

