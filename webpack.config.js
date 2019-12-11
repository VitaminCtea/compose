const path = require("path");
const resolve = _path => path.resolve(__dirname, _path);
const isDev = process.env.NODE_ENV === "development";
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./index.js"
	},
	output: {
		filename: "[name].[hash].js",
		path: resolve("dist"),
		publicPath: '/'
	},
	devtool: "inline-source-map",
	devServer: {
		hot: true,
		contentBase: resolve('dist'),
		inline: true,
		proxy: {
			'/static': 'http://localhost:8080'
		}
	},
	resolve: {
		extensions: [".js", ".vue"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									useBuiltIns: "usage"
								}
							]
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"]
			},
			{
				test: /\.mp3$/,
				loader: "url-loader",
				options: {
					name: "audios/[name]_[hash].[ext]?[hash]",
					limit: 10
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "音频",
			template: "./Untitled-1.html"
		})
	]
};
console.log("当前目录: " + __dirname);
