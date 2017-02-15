import React from 'react';

export default class NoReminders extends React.Component {
	render() {
		return (
			<div className="no-reminders-container">
				<span className="no-reminders">Looks like you don't have any reminders yet. 
				Hit the add button to get started. 
				</span>
				<br />
				<button onClick={this.props.popModal} className="no-reminders-add-btn">Add Reminder</button>
			</div>
		)
	}
}