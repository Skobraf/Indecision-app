import React from 'react';
import Option from './Option';

const Options = (props) => (
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


export default Options;