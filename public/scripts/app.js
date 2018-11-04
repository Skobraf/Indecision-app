'use strict';

console.log("the app is running!");

var app = {
	title: 'Indecition',
	subtitle: 'react app'

};
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title + "" + app.subtitle
	),
	React.createElement(
		'p',
		null,
		'this is some info'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Ayoub Abed'
	)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
