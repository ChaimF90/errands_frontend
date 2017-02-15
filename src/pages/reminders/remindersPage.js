import React from 'react';
import NoReminders from './noReminders';
import AddReminderModal from './addReminderModal';
import axios from 'axios';
import RemindersList from './remindersList';

export default class RemindersPage extends React.Component {
	constructor() {
		super();
		this.state = {
			reminders: [],
			showModal: false,
			reminder: {
				title: '',
				description: '',
				frequency: '',
				dayOfMonth: '',
				dayOfWeek: ''
			}
		}
		this.popModal = this.popModal.bind(this);
		this.dismissModal = this.dismissModal.bind(this);
		this.onChange = this.onChange.bind(this);
		this.saveReminder = this.saveReminder.bind(this);
		this.seeDetails = this.seeDetails.bind(this);
		this.dismissDetails = this.dismissDetails.bind(this);
		this.enterEditMode = this.enterEditMode.bind(this);
	}

	componentDidMount() {
		this.getAllReminders();
	}

	async getAllReminders() {
		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		let reminders =  await axios.get('http://localhost:4000/api/reminders/getReminders', config);
		this.setState({reminders: reminders.data});
	}

	popModal() {
		this.setState({showModal: true});
	}

	dismissModal() {
		this.setState({showModal: false});
	}

	onChange(e) {
		let reminder = this.state.reminder;
		reminder[e.target.name] = e.target.value;
		this.setState({reminder});
	}

	async saveReminder() {
		let reminder = this.state.reminder;
		if(reminder.dayOfWeek === 'Sunday') {
			reminder.dayOfWeek = 0;
		} else if(reminder.dayOfWeek === 'Monday') {
			reminder.dayOfWeek = 1;
		} else if(reminder.dayOfWeek === 'Tuesday') {
			reminder.dayOfWeek = 2;
		} else if(reminder.dayOfWeek === 'Wednesday') {
			reminder.dayOfWeek = 3;
		} else if(reminder.dayOfWeek === 'Thursday') {
			reminder.dayOfWeek = 4;
		} else if(reminder.dayOfWeek === 'Friday') {
			reminder.dayOfWeek = 5;
		} else if(reminder.dayOfWeek === 'Saturday') {
			reminder.dayOfWeek = 6;
		} else {
			reminder.dayOfWeek = null;
		}

		if(reminder.frequency === 'daily') {
			reminder.frequency = 1;
		} else if(reminder.frequency === 'weekly') {
			reminder.frequency = 2;
		} else if(reminder.frequency === 'monthly') {
			reminder.frequency = 3;
		}

		if(!reminder.dayOfMonth) {
			reminder.dayOfMonth = null;
		} 

		let token = localStorage.getItem('errandToken');
		let config = {
			headers: {'x-access-token': token},
		};
		await axios.post('http://localhost:4000/api/reminders/newReminder', reminder, config);
	}

	seeDetails(id) {
		let reminders = this.state.reminders;
		reminders.forEach(r => {
			if(r.isActive) {
				r.isActive = false
			}
		})
		let reminderIndex = reminders.findIndex(r => r.id === id);
		reminders[reminderIndex].isActive = true;
		this.setState({reminders});
	}

	dismissDetails(id) {
		let reminders = this.state.reminders;
		let reminderIndex = reminders.findIndex(r => r.id === id);
		let reminder = reminders[reminderIndex];
		reminder.isActive = false;
		reminders[reminderIndex] = reminder;
		this.setState({reminders});
	}

	enterEditMode(r) {
		this.setState({reminder: r, showModal: true});
	}

	render() {
		let renderThis;
		if(!this.state.reminders.length) {
			renderThis = <NoReminders popModal={this.popModal} />
		} else {
			renderThis = 
			<RemindersList
			enterEditMode={this.enterEditMode}
			dismissDetails={this.dismissDetails}
			seeDetails={this.seeDetails} 
			popModal={this.popModal} 
			reminders={this.state.reminders} />
		}
		let modal;
		if(this.state.showModal) {
			modal = 
			<AddReminderModal
			saveReminder={this.saveReminder}
			reminder={this.state.reminder}
			onChange={this.onChange} 
			dismissModal={this.dismissModal} />
		}
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="reminder-container">
							{modal}
							{renderThis}
						</div>
					</div>
				</div>
			</div>
		)
	}
}