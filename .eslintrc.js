module.exports = {
	parserOptions: {
		ecmaVersion: "latest",
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
		// Yoda Condition
		'yoda': [ 'error', 'always' ],
	},
};
