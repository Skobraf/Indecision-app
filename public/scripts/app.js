"use strict";

console.log("the app is running!");

var template = React.createElement(
  "p",
  null,
  "This is JSX"
);
var appRoot = Document.getElementById('app');

ReactDOM.render(template, appRoot);
