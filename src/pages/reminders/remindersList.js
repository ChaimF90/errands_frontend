import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class RemindersList extends React.Component {
	createRow(r, index) {
		let details;
		if(r.isActive) {
			details = 
			<div key={r.id} className="reminder-details">
				<span onClick={this.props.dismissDetails.bind(null, r.id)} className='glyphicon glyphicon-remove dismiss-reminder-details' aria-hidden="true"></span>
				<p className="reminder-details-description">{r.description}</p>
				<h5 className="reminder-details-header">Reminder Schedule</h5>
				<span className="reminder-frequency">Frequency: {r.frequency}</span>
			</div>
		}
		return (
			<div key={index}>
				<li className="reminder-li">
					<span className="reminder-title">{r.title}</span>
					<span className='glyphicon glyphicon-trash del' aria-hidden="true"></span>
					<span onClick={this.props.enterEditMode.bind(null, r)} className='glyphicon glyphicon-pencil edit' aria-hidden="true"></span>
					<span onClick={this.props.seeDetails.bind(null, r.id)} className="glyphicon glyphicon-info-sign see-more" aria-hidden="true"></span>
				</li>
				<ReactCSSTransitionGroup
		          transitionName="example"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={300}>
		          {details}
		        </ReactCSSTransitionGroup>
			</div>
		)
	}
	render() {
		return (
			<div className='reminders-list-container'>
				<ul className="reminders-list">
					{this.props.reminders.map((r, index) => this.createRow(r, index))}
				</ul>
				<button onClick={this.props.popModal} className="add-reminder">Add Reminder</button>
			</div>
		)
	}
}