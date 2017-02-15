import React from 'react';

export default class FreqSelect extends React.Component {
	constructor() {
		super();
		this.state = {
			selectClass: 'freq-select-closed',
			showOptions: false
		}
		this.displayOption = this.displayOption.bind(this);
		this.hideOptions = this.hideOptions.bind(this);
	}

	displayOption() {
		this.setState({showOptions: true, selectClass: 'freq-select-open'});
	}

	hideOptions() {
		this.setState({showOptions: false, selectClass: 'freq-select-closed'});
	}

	selecthandler(val) {
		let event = {
			target: {
				name: 'frequency',
				value: val
			}
		}
		this.hideOptions();
		this.props.onChange(event);
	}

	render() {
		let options;
		let arrow;
		if(this.state.showOptions) {
			options = 
			<div>
				<li onClick={this.selecthandler.bind(this, 'daily')} className="freq-option">Daily</li>
				<li onClick={this.selecthandler.bind(this, 'weekly')} className="freq-option">Weekly</li>
				<li onClick={this.selecthandler.bind(this, 'monthly')} className="freq-option">Monthly</li>
			</div>
			arrow = <span onClick={this.hideOptions} className="glyphicon glyphicon-menu-up arrow-custom" aria-hidden="true"></span>
		} else {
			arrow = <span onClick={this.displayOption} className="glyphicon glyphicon-menu-down arrow-custom" aria-hidden="true"></span>
		}
		let selectHeader;
		if(this.props.frequency) {
			selectHeader = this.props.frequency;
		} else {
			selectHeader = 'Choose Frequency';
		}
		return (
			<div className="freq-select-container"> 
				<ul className={this.state.selectClass}>
					<p className="select-header">{selectHeader}</p>
					{arrow}
					{options}
				</ul>
			</div>
		)
	}
}