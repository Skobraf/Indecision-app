class IndecisionApp extends React.Component {
	render() {
		const title = "IndecisionApp";
		const subtitle = "Put your life in the hand of a computer";
		const options = ["optionOne", "optionTwo", "OptionFoor"];

		return (
			<Header title={title} subtitle={subtitle} />
			<Action />
			<Options options={options} />
			<AddOption />
			);
	}
}
class Header extends React.Component {
	render() {
		return (
			<div>
				<h1> {this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
			);
	}
}

class Action extends React.Component {
	handlePick() {
		alert("hello worlds!")
	}
	render() {
		return (
			<button onClick={this.handlePick}>What should i do?</button>
			);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll() {
		alert("options removed");
	}
	render() {
		return (
			<div>
			<ol>
				<li>{this.props.options.map((option) => <Option key={option} optionText={options} />)}</li>
			</ol>
			<Option />
			<button onClick={this.handleRemoveAll}>Remove all</button>
			</div>
			);
	}
}

class Option extends React.Component {
	render() {
		return (
			<div>
				{this.props.optionText}
			</div>
			);
	}
}

class AddOption extends React.Component {
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.value.trim();
		if(option) {
			alert("how come");
		}
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
					<inpu type="text" name="option"></inpu>
					<button>Submit</button>
				</form>
			</div>
			);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));