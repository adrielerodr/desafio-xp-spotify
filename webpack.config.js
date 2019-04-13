let path = require(`path`);
let HtmlWebpackPlugin = require(`html-webpack-plugin`);
let CopyWebpackPlugin = require('copy-webpack-plugin');
let { DefinePlugin, ProvidePlugin } = require('webpack');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let webpack = require('webpack');

const GLOBALS = {
	'process.env': {
	  'NODE_ENV': JSON.stringify('development'),
	  'PUBLIC_PATH': JSON.stringify('/'),
	  'SPOTIFY_API': JSON.stringify('https://api.spotify.com/v1'),
	  'SPOTIFY_AUTH': JSON.stringify('https://accounts.spotify.com/api'),
	  'CLIENT_ID': JSON.stringify('2320767426ea4829af70d1abb1e6bb7f'),
	  'CLIENT_SECRET': JSON.stringify('734eaebadec34c749ab348215f19029a'),
	  'REDIRECT_URI': JSON.stringify('http://localhost:3000'),
	}
  };

const PATHS = {
	publicPath: '/',
	dist: path.resolve(__dirname, './dist'),
	appSrc: path.resolve(__dirname, './src'),
	appNodeModules: path.resolve(__dirname, './node_modules')
  };


let defaultConfigName = 'dev';
let config = process.env.NODE_ENV || defaultConfigName;
const port = process.env.PORT || 3000;
let distFolder;

// set destination folder
switch (config) {
	case 'production':
		distFolder = 'production_dist';
		break;
	default:
		distFolder = 'dist';
};

console.log(`CURRENT CONFIG: ${config}.`);
console.log(`Application will be available at port: ${port}.`);

module.exports = {
	entry: {
		main: path.join(__dirname, '/src/index.jsx')
	},
	output: {
		path: path.join(__dirname, `${distFolder}`),
		filename: '[name].[chunkhash].bundle.js',
		publicPath: '/'
	},
	devServer: {
		contentBase: path.join(__dirname, `${distFolder}`),
		port: port,
		historyApiFallback: true
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader',
					publicPath: '/'
				})
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					publicPath: '/'
				})
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader'
			}
		]
	},
	devtool: 'source-map',
	plugins: [
		new HtmlWebpackPlugin({
			filename: `index.html`,
			template: path.join(__dirname, './src/tpl/index.template.html')
		}),
		new DefinePlugin({
			'NODE_ENV': config,
			'__CONFIG__': JSON.stringify(require(`./src/js/config/${config}.config.js`))
		}),
		new ExtractTextPlugin(`[name].[chunkhash].css`),
	],
	resolve: {
		alias: {
			'IndexModule': path.resolve(__dirname, './src/js/components/features/index'),
			'CommonModule': path.resolve(__dirname, './src/js/components/common'),
			'SearchModule': path.resolve(__dirname, './src/js/components/features/search'),
		}
	}
};
