
class VisibilityToggle extends React.Component {
	constructor(props) {
		super(props);
		this.showDetails = this.showDetails.bind(this);
		this.state = {
			toggle: false
		}
		
	}
	showDetails() {
		this.setState((prevState) => {
			toggle:!prevState.toggle
		});
	}

	render() {
		return (
			<div>
				<h1>Visiti Toggle</h1>
				<button onClick={this.VisibilityToggle}>{this.state.toggle ? "Hide details" :}</button>
				{this.state.toggle && <p>these are the details</p>}
			</div>
			);

	};


}
	ReactDOM.render(<VisibilityToggle />, getElementById('app'));

/*
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

render();*/
