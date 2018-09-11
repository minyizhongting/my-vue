var path = require('path');
var webpack = require('webpack'); //用于访问内置插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); // 重新生成dist中html文件

var ROOT = require('../config/paths').ROOT;
var SRC = require('../config/paths').SRC;

module.exports = {
  mode: 'development',
  entry: [
    ROOT + '/src/index.js'
  ],
  // filename是对应于entry生成的文件名
  // chunkFilename是未被列在entry中，却又需要被打包的文件命名配置，例如异步加载的模块等等( require.ensure()、import )
  output: {
    path: path.resolve(ROOT, 'dist'), // 也可用占位符
    filename: 'bundle.[hash:8].js',  // 可以使用一些占位符：name(模块名称)、hash(模块编译后的整体hash值)
    chunkFilename: '[name].[hash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
        	'vue-style-loader',  // 通过它，style自行热重载
        	'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            //       			// other preprocessors should work out of the box, no loader config like this necessary.

            // 将组件中的样式也打包到独立文件中

            // 'scss': ExtractTextPlugin.extract({
            // 	fallback: 'vue-style-loader',
            // 	use: 'css-loader!sass-loader'
            // }),
            // 'sass': ExtractTextPlugin.extract({
            // 	fallback: 'vue-style-loader',
            // 	use: 'css-loader!sass-loader?indentedSyntax'
            // }),
            // css: ExtractTextPlugin.extract({
            // 	fallback: 'vue-style-loader',
            // 	use: 'css-loader'
            // })

            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ],
            'sass': [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax'
            ]
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: { // options配合loader使用
          name: '[name].[ext]?[hash:8]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js', // 用webpack2之类的打包工具时，使用此版本
      '@': ROOT,	// 项目根目录
      '#': SRC 	// src目录
    },
    extensions: ['.js', '.vue', '.json'] // 自动解析扩展名，使导入模块时可以不带扩展名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: ROOT + '/src/index.html',
      hash: true,
      minify: false
    })
  ]
};


