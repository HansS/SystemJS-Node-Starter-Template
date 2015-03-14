var System = require('systemjs');

require("./babel/babel-polyfill");

System.config({
	baseUrl: "./",
	transpiler: 'babel',
	babelOptions: {
		experimental: true
	},
	paths: {
		"@babel": "./babel/babel.js"
	}
});

// loads './app.js' from the current directory
System.import('./app').catch(function (error) {
	console.log(error);
});