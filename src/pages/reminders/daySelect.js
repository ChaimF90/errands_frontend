import React from 'react';

export default class DaySelect extends React.Component {
	constructor() {
		super();
		this.state = {
			showOption: false,
			selectCalss: 'specific-day-closed'
		}
		this.hideOptions = this.hideOptions.bind(this);
		this.displayOPtions = this.displayOPtions.bind(this);
		this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	}

	createRow(day, index) {
		return (
			<div key={index}>
				<li onClick={this.selecthandler.bind(this, day)} className="day-option">{day}</li>
			</div>
		)
	}

	displayOPtions() {
		if(this.props.frequency === 'weekly') {
			this.setState({showOption: true, selectCalss: 'specific-day-open'})
		}
	}

	hideOptions() {
		this.setState({showOption: false, selectCalss: 'specific-day-closed'})
	}

	selecthandler(val) {
		let event = {
			target: {
				name: 'dayOfWeek',
				value: val
			}
		}
		this.hideOptions();
		this.props.onChange(event);
	}

	render() {
		let days;
		let arrow;
		if(this.state.showOption) {
			days = this.days.map((day, index) => this.createRow(day, index));
			arrow = <span onClick={this.hideOptions} className="glyphicon glyphicon-menu-up date-selection-arrow" aria-hidden="true"></span>
		} else {
			days = null;
			arrow = <span onClick={this.displayOPtions} className="glyphicon glyphicon-menu-down date-selection-arrow" aria-hidden="true"></span>
		}
		let selectHeader;
		if(this.props.dayOfWeek) {
			selectHeader = this.props.dayOfWeek;
		} else {
			selectHeader = 'Choose Day';
		}
		let component;
		if(this.props.frequency === 'weekly') {
			component = 
			<ul className={this.state.selectCalss}>
				<p className="day-header">{selectHeader}</p>
				{arrow}
				{days}
			</ul>

		} else {
			component = 
			<ul className='day-selection-disabled'>
				<p className="disabled-header">{selectHeader}</p>
				<span className="glyphicon glyphicon-menu-down disabled-arrow" aria-hidden="true"></span>
				{days}
			</ul>
		}
		return (
			<div>
				{component}
			</div>
		)
	}
}