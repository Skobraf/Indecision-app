class IndecisionApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			options: ["optionOne", "optionTwo", "OptionFoor"]
		}
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
	}
	handlePick() {
		let random = Math.floor(Math.random * this.state.options.length);
		alert('this.options[random]');
	}
	handleDeleteOptions() {
		this.setState(() => {
			return (
				options: []
				);
		});
	}
	handleAddOption(option) {
		if(!option) {
			return 'Please enter a valid text';
		}
		else if(this.state.options.indexOf(option) > -1 ) {
			return 'this element already exist';

		}
		this.setState((prevState) => {
			return(
				options: prevState.options.concat(option)
				);
		})
	}
	render() {
		const title = "IndecisionApp";
		const subtitle = "Put your life in the hand of a computer";

		return (
			<Header title={title} subtitle={subtitle} />
			<Action
			hasOptions = {this.state.options.length > 0}
			handlePick = {this.handlePick}
			/>
			<Options
			options={this.state.options}
			handleDeleteOptions={this.handleDeleteOptions}
			/>
			<AddOption
			handleAddOption={this.handleAddOption}
			/>
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
	render() {
		return (
			<button
			onClick={this.props.handlePick}
			disabled={!this.props.hasOptions}
			>
			What should i do?
			</button>
			);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
			<ol>
				<li>{this.props.options.map((option) => <Option key={option} optionText={options} />)}</li>
			</ol>
			<Option />
			<button onClick={this.handleDeleteOptions}>Remove all</button>
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
	constructor(props) {
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}
	handleAddOption(e) {
		e.preventDefault();
		const option = e.target.elements.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState((prevState) => {
			return {error};
		});
	}
	render() {
		return (
			<div>
			{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<inpu type="text" name="option"></inpu>
					<button>Submit</button>
				</form>
			</div>
			);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));