var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var base = require('./webpack.base.conf');

var ROOT = require('../config/paths').ROOT;

var CleanWebpackPlugin = require('clean-webpack-plugin'); // 清理dist文件夹，防止重复增加加戳js
var ManifestPlugin = require('webpack-manifest-plugin'); // 生成manifest.json，输入到输出

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist'], { //config: solve the error "must be inside the project root. Skipping..."
      root: ROOT,
      verbose: true
    }),
    new ManifestPlugin(),
    new webpack.BannerPlugin('Created by Baihe'), // 打包后代码添加头部注释
  ]
});

