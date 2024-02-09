const path    = require( 'path' );
const webpack = require( 'webpack' );

const ESLintWebpackPlugin  = require( 'eslint-webpack-plugin' );
const TerserPlugin         = require( 'terser-webpack-plugin' );
const CssMinimizerPlugin   = require( 'css-minimizer-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const glob                 = require( 'glob' );

module.exports = {
	entry: getEntries(
		[ path.resolve( __dirname, 'assets/js' ) ],
		[ '.js' ]
	),
	output: {
		filename: '[name].min.js',
		path: path.resolve( 'dist' ),
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
			use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
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
				terserOptions: {
					sourceMap: true, // Generate source maps for minified JS files
				},
				extractComments: false,
			} ),
			new CssMinimizerPlugin( {
				minimizerOptions: {
					sourceMap: true, // Generate source maps for minified CSS files
				},
			} ),
		],
	},
	mode: 'production',
	devtool: 'source-map', // Use 'source-map' devtool to generate source maps
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
				const name = chunk.name.replace( /js/, 'css' ) + '.min.css';
				return name;
			},
		}),
		new ESLintWebpackPlugin(),
	],
};

function getEntries( directories, extensions ) {
	const entry = {};
	const excludFiles = [ 'node_modules', 'vendor', 'util' ];
	directories.forEach( ( directory ) => {
		extensions.forEach( ( extension ) => {
			const files = glob.sync( path.join( directory, `**/*${ extension }` ) );
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
