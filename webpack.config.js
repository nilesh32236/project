const path    = require( 'path' );
const webpack = require( 'webpack' );

const ESLintWebpackPlugin  = require( 'eslint-webpack-plugin' );
const TerserPlugin         = require( 'terser-webpack-plugin' );
const CssMinimizerPlugin   = require( 'css-minimizer-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const glob                 = require( 'glob' );

module.exports = {
	entry: getEntries(
		[ path.resolve( __dirname, 'assets' )/* , path.resolve( __dirname, 'public' ) */ ],
		[ '.js' ]
	),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve( __dirname, 'dist' ),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|vendor)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
					},
				},
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}
		],
	},
	watchOptions: {
		ignored: /(node_modules|vendor)/,
		poll: true,
	},
	optimization: {
		minimizer: [
			new TerserPlugin( {
				extractComments: false,
			} ),
			new CssMinimizerPlugin(),
		],
	},
	mode: 'production',
	resolve: {
		modules: [
			path.resolve( __dirname, 'admin/js' ),
			path.resolve( __dirname, 'public/js' ),
			'node_modules',
		],
		extensions: [ '.js', '.scss' ],
	},
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new MiniCssExtractPlugin( {
			filename: ({ chunk }) => {
				const name = chunk.name.replace( /js/, 'css' ) + '.bundle.css';
				return name;
			},
		}),
		// new webpack.ProvidePlugin({
		//   $: 'jquery',
		//   jQuery: 'jquery',
		//   'window.jQuery': 'jquery',
		// }),
		new ESLintWebpackPlugin({
			emitError: true,
			emitWarning: true,
			failOnError: true,
			failOnWarning: false,
		}),
	],
};

function getEntries( directories, extensions ) {
	const entry = {};
	const excludFiles = ['node_modules', 'vendor', 'util'];
	directories.forEach( ( directory ) => {
		extensions.forEach( ( extension ) => {
			const files = glob.sync( path.join( directory, `**/*${extension}` ) );
			files.forEach( ( file ) => {
				const relativePath = path.relative( directory, file );
				const entryName    = path.join( path.basename( directory ), relativePath.replace( extension, '' ) );

				if ( excludFiles.some( excludFile => entryName.includes( excludFile ) ) ) {
					return;
				}
				entry[ entryName ] = file;
			} );
		} );
	} );

	return entry;
}