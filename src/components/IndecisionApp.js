import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Option from './Option';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
	state = {
		options: [],
		selectedOption: undefined
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
	handlePick = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
	    const option = this.state.options[randomNum];
	    this.setState(() => ({selectedOption: option}))
		}
	hideSelectedOption = () => {
		console.log(this.state.selectedOption);
		this.setState(() => ({selectedOption: undefined}))
	}
	handleDeleteOptions = () => {
		this.setState(() => ({options:[]}));
	}
	handleDeleteOption = (optionToRemove) => {
		this.setState((prevState) => ({
			options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	}
	handleAddOption = (option) => {
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
				<div className="container">
				<Action
				hasOptions = {this.state.options.length > 0}
				handlePick = {this.handlePick}
				/>
				<div className="widget">
				<Options
				options={this.state.options}
				handleDeleteOptions={this.handleDeleteOptions}
				handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOption
				handleAddOption={this.handleAddOption}
				/>
				</div>
				</div>
				<OptionModal
				selectedOption={this.state.selectedOption}
				hideSelectedOption={this.hideSelectedOption}
				/>
			</div>
			);
	}
}