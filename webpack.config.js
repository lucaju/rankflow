const path = require('path');
const webpack = require('webpack');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: 'development', // production
	entry: './src/app.js',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: './dist',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
			},
			{
				test: /\.html$/,
				use: 'mustache-loader',
				// loader: 'mustache-loader?minify'
				// loader: 'mustache-loader?{ minify: { removeComments: false } }'
				// loader: 'mustache-loader?noShortcut'
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin([
			'./dist',
		]),
		new HtmlWebpackPlugin({
			inject: false,
			template: require('html-webpack-template'),
			appMountId: 'app',
			filename: 'index.html',
			meta: [
				{
					name: 'charset',
					content: 'utf-8',
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
				},
				{
					name: 'apple-mobile-web-app-capable',
					content: 'yes',
				},
			],
			title: 'Rankflow - Eleições Brasil 2018:',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
		}),
		new CopyWebpackPlugin([
			'src/visconfig.json'
		]),
		// new BundleAnalyzerPlugin(),
	],
};