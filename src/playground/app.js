class IndecisionApp extends React.Component {
	  constructor(props) {
	    super(props);
	    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
	    this.handlePick = this.handlePick.bind(this);
	    this.handleAddOption = this.handleAddOption.bind(this);
	    this.handleDeleteOption = this.handleDeleteOption.bind(this);
	    this.state = {
	      options: []
	    };
	  }
	componentDidMount() {
		try {
			const options = JSON.parse(localStorage.getItem('options'));
			if(options) {
				this.setState(() => ({options}));
			}
		}catch(e){
			//DO NOTHING
		}	
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);

		}
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
	    const option = this.state.options[randomNum];
	    alert(option);
		}
	handleDeleteOptions() {
		this.setState(() => ({options:[]}));
	}
	handleDeleteOption(optionToRemove) {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	}
	handleAddOption(option) {
		console.log(option);
		if(!option) {
			return 'Please enter a valid text';
		}
		else if(this.state.options.indexOf(option) > -1 ) {
			return 'this element already exist';

		}
		this.setState((prevState) => ({options: prevState.options.concat(option)}));
	}
	render() {
		const title = "IndecisionApp";
		const subtitle = "Put your life in the hand of a computer";

		return (
			<div>
				<Header title={title} subtitle={subtitle} />
				<Action
				hasOptions = {this.state.options.length > 0}
				handlePick = {this.handlePick}
				/>
				<Options
				options={this.state.options}
				handleDeleteOptions={this.handleDeleteOptions}
				handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
				handleAddOption={this.handleAddOption}
				/>
			</div>
			);
	}
}
const Header = (props) => {
	return (
			<div>
				<h1> {props.title}</h1>
				<h2>{props.subtitle}</h2>
			</div>
			);

}

const Action = (props) => {
		return (
			<button
			onClick={props.handlePick}
			disabled={!props.hasOptions}
			>
			What should i do?
			</button>
			);

}

const Options = (props) => {
		return (
			<div>
			{props.options.length === 0 && <p>Enter options</p>}
			{props.options.map((option) => (<Option
				key={option}
				optionText={option}
				handleDeleteOption={props.handleDeleteOption}
				/>
				))
			}			
			<button onClick={props.handleDeleteOptions}>Remove all</button>
			</div>
			);

}

const Option = (props) => {
		return (
				<div>
					{props.optionText}
					<button onClick={(e) => props.handleDeleteOption(props.optionText) } >
					remove</button>
				</div>
				);

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
		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);
		this.setState((prevState) => ({error}));
		if(!error) {
			e.target.elements.value = '';
		}
	}
	render() {
		return (
			<div>
			{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option" />
					<button>Submit</button>
				</form>
			</div>
			);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));