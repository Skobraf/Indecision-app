
const appRoot = document.getElementById("app");
const toggle = false;
const showDetails = () => {
	toggle = !toggle;
	render();
}
const render = () => {
	const template = (
	<h1>Visibility toggle</h1>
	<button onClick={showDetails}>#{toggle ? 'Hide details' : 'Show details'}</button>
	{toggle && <p>these are details</p>}
	);

ReactDOM.render(template, appRoot);
}

render();
