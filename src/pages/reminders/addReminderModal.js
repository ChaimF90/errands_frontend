import React from 'react';
import FreqSelect from './freqSelect';
import DaySelect from './daySelect';
import DateSelect from './dateSelect';

export default class AddReminderModal extends React.Component {
	render() {
		return (
			<div className="reminder-modal-container">
				<div className="custom-modal-header">
					<span onClick={this.props.dismissModal} className="glyphicon glyphicon-remove dismiss-modal" aria-hidden="true"></span>
				</div>
				<div className="modal-body-custom">
					<input
					value={this.props.reminder.title}
					onChange={this.props.onChange}
					className="reminder-input" 
					type='text' 
					placeholder="Title" 
					name='title' />
					<br />
					<textArea
					onChange={this.props.onChange}
					value={this.props.reminder.description} 
					name="description"
					placeholder="Description"
					className="reminder-textarea" />
					<br />
					<FreqSelect
					frequency={this.props.reminder.frequency} 
					onChange={this.props.onChange} />
					<div className="date-selection">
						<DaySelect
						frequency={this.props.reminder.frequency} 
						onChange={this.props.onChange}
						dayOfWeek={this.props.reminder.dayOfWeek} />
						<DateSelect
						frequency={this.props.reminder.frequency}
						onChange={this.props.onChange}
						dayOfMonth={this.props.reminder.dayOfMonth} />
					</div>
				</div>
				<button onClick={this.props.saveReminder} className="save-reminder-btn">Save</button>
				<button className="cancel-reminder">Cancel</button>
			</div>
		)
	}
}

