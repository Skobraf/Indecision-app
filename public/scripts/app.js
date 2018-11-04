"use strict";

console.log("the app is running!");

var template = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Ayoub"
	),
	React.createElement(
		"p",
		null,
		"this is some info"
	),
	React.createElement(
		"ol",
		null,
		React.createElement(
			"li",
			null,
			"Item one"
		),
		React.createElement(
			"li",
			null,
			"Item two"
		)
	)
);
var templateTwo = React.createElement(
	"div",
	null,
	React.createElement(
		"h1",
		null,
		"Ayoub Abed"
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
