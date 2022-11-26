module.exports = {
	env: {
		browser: true,
		node: true,
		es2020: true,
		jest: true
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["@typescript-eslint", "react", "prettier", "react-hooks", "simple-import-sort"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"plugin:jsx-a11y/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended" // make sure this one is always the last one in the array
	],
	rules: {
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
		"import/extensions": 0,
		"react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx", ".js", ".jsx"] }],
		"react/prop-types": 0,
		"react/react-in-jsx-scope": 0,
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"]
			}
		],
		"jsx-a11y/alt-text": "error",
		"jsx-a11y/img-redundant-alt": "warn",
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0
	},
	settings: {
		"import/resolver": {
			node: {
				paths: ["~"]
			},
			typescript: {}
		},
		react: {
			version: "detect"
		}
	}
};
