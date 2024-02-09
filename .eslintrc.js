module.exports = {
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
		},
	},
	env: {
		browser: true,
		es6: true,
		jquery: true,
		mocha: true,
	},
	globals: {
		"wp": false,
		"ajaxurl": false,
		"adcmNonceAjaxObject": false,
		"feedbackRespnose": false,
		"pagenow": false,
	},
	extends: [
        'eslint:recommended',
        'plugin:@wordpress/eslint-plugin/recommended-with-formatting'
    ],
	rules: {
		// Formatting Rules
		'indent': [ 'error', 'tab' ],     // Use tab for indentation
		'quotes': [ 'error', 'single' ],  // Use single quotes
		'semi': [ 'error', 'always' ],    // Use semicolons at the end of statements
		'no-alert': 1,
		'no-console': 1,
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],  // Add space after commas

		// Yoda Condition
		'yoda': [ 'error', 'always' ],
	},
	ignorePatterns: [
		'node_modules/',
		'dist/',
		'build/',
		'webpack.config.js',
		'.eslintrc.js',
		'vendor/'
	],
};