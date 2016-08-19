module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"plugin:react/recommended"
	],
	"rules": {
		"indent": [
			"error",
			2
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		]
	},
	"parserOptions": {
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		}
	},
	"plugins": [
		"react"
	]
};