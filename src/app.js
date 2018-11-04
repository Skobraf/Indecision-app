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
let count = 0;
const addOne = () => {
	count++;
	return renderCounterApp();
};
const minusOne = () => {
	count--;
	return renderCounterApp();
};
const reset = () => {
	count = 0;
};

const appRoot = document.getElementById('app');
const renderCounterApp = () => {
	const templateTwo = (
	<div>
		<h1>Count: {count}</h1>
		<button onClick={addOne}>+1</button>
		<button onClick={minusOne}>+1</button>
		<button onClick={reset}>reset</button>
	</div>
	);
	ReactDOM.render(template, appRoot);
};

renderCounterApp();
