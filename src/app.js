console.log("the app is running!");

var template =(
	<div>
		<h1>Ayoub</h1>
		<p>this is some info</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
	);
var templateTwo = (
	<div>
		<h1>Ayoub Abed</h1>
	</div>
	);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);