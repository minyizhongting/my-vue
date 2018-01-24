const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: ['webpack-hot-middleware/client','./src/app.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.[hash:8].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			hash: true,
			minify: false
		}),
		new webpack.HotModuleReplacementPlugin(), 
		new webpack.NoEmitOnErrorsPlugin()
	]

};


