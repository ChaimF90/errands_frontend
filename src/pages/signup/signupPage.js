import React from 'react';
import SignupForm from './signupForm';
import axios from 'axios';
import {browserHistory} from 'react-router';

export default class SignupPage extends React.Component {
	constructor() {
		super();
		this.state = {
			account: {
				email: '',
				username: '',
				password: ''
			}
		}
		this.onChange = this.onChange.bind(this);
		this.submit = this.submit.bind(this);
	}

	onChange(e) {
		let account = this.state.account;
		account[e.target.name] = e.target.value;
		this.setState({account});
	}

	async submit(e) {
		e.preventDefault();
		let response = await axios.post('http://localhost:4000/auth/users/create', this.state.account);
		if(response.status === 200) {
			browserHistory.push('/login');
		}
	}

	render() {
		return (
			<SignupForm 
			account={this.state.account}
			onChange={this.onChange}
			submit={this.submit} />
		)
	}
}