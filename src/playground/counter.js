class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.handleReset = this.handleReset.bind(this);
		this.handleAddOne = this.handleAddOne.bind(this);
		this.handleMinusOne = this.handleMinusOne.bind(this);
		this.state = {
			count: 0
		}
	}
	componentDidMount() {
		const stringCount = localStorage.getItem('count');
		const count = parseInt(stringCount, 10);

		if(!isNaN(count)) {

		}
		this.setState(() => { count })
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState !== this.state.count){
			localStorage.setItem('count', this.state.count);
		}
	}
	handleAddOne() {
		this.setState((prevState) => {
			return (
				count: prevState.count +1
				);
		});

	}
	handleMinusOne() {
		this.setState((prevState) => {
			return (
				count: prevState.count -1
				);
		});
	}
	handleReset() {
		this.setState(() => {
			return (
				count:0
				);
		});
	}
	render() {
		return (
			<div>
				<h1>Count: </h1>
				<button onClick={this.handleAddOne}>+1</button>
				<button onClick={this.handleMinusOne}>-1</button>
				<button onClick={this.handleReset}>Reset</button>
			</div>
			)
	}
}

/*
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
//hello world

*/

