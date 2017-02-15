import React from 'react';

export default class DateSelect extends React.Component {
	constructor() {
		super();
		this.state = {
			showOptions: false,
			selectClass: 'specific-date-closed'
		}
		this.displayOptions = this.displayOptions.bind(this);
		this.hideOptions = this.hideOptions.bind(this);
		this.dates = [];
	}

	componentDidMount() {
		for(let i = 1; i <= 31; i++) {
			this.dates.push(i);
		}
	}

	displayOptions() {
		if(this.props.frequency === 'monthly') {
			this.setState({showOptions: true, selectClass: 'specific-date-open'})
		}
	}

	hideOptions() {
		this.setState({showOptions: false, selectClass: 'specific-date-closed'})
	}

	createRow(date, index) {
		return (
			<li onClick={this.selectHandler.bind(this, date)} key={index} className="day-option">{date}</li>
		)
	}

	selectHandler(val) {
		let event = {
			target: {
				name: 'dayOfMonth',
				value: val
			}
		}
		this.hideOptions();
		this.props.onChange(event);
	}

	render() {
		let arrow;
		let dates;
		if(this.state.showOptions) {
			dates = this.dates.map((date, index) => this.createRow(date, index))
			arrow = <span onClick={this.hideOptions} className="glyphicon glyphicon-menu-up date-selection-arrow" aria-hidden="true"></span>
		} else {
			arrow = <span onClick={this.displayOptions} className="glyphicon glyphicon-menu-down date-selection-arrow" aria-hidden="true"></span>
		}
		let selectHeader;
		if(this.props.dayOfMonth) {
			selectHeader = this.props.dayOfMonth;
		} else {
			selectHeader = 'Choose Date';
		}
		let component;
		if(this.props.frequency === 'monthly') {
			component = 
			<ul className={this.state.selectClass}>
				<p className="date-header">{selectHeader}</p>
				{arrow}
				{dates}
			</ul>
		} else {
			component = 
			<ul className='date-selection-disabled'>
				<p className="disabled-header">{selectHeader}</p>
				<span className="glyphicon glyphicon-menu-down disabled-arrow" aria-hidden="true"></span>
				{dates}
			</ul>
		}
		return (
			<div>
				{component}
			</div>
		)
	}
}