console.log("the app is running!");

const app = {
	title: 'Indecition',
	subtitle: 'react app'

};
const template =(
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>subtitle: {app.subtitle}</p>}
		<p>{app.options.length > 0 ? "here are some options" : 'no options'}</p>
		<ol>
			<li>Item one</li>
			<li>Item two</li>
		</ol>
	</div>
	);
const templateTwo = (
	<div>
		<h1>Ayoub Abed</h1>
	</div>
	);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);