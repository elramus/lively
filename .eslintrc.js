module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/no-empty-interface': 0,
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'import/prefer-default-export': 0,
		'lines-between-class-members': 0,
		'no-return-assign': 0,
		'no-shadow': 0,
		'prefer-destructuring': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/jsx-props-no-spreading': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/no-did-update-set-state': 0,
		'react/no-unescaped-entities': 0,
		'react/no-unused-state': 1,
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
		'react/sort-comp': 0,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
}
