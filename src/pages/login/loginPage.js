import React from 'react';
import LoginForm from './loginForm';
import axios from 'axios';
import {browserHistory} from 'react-router';

export default class LoginPage extends React.Component {
	constructor() {
		super();
		this.state = {
			account: {
				credentials: '', 
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
		let response = await axios.post('http://localhost:4000/auth/users/login', this.state.account);
		console.log(response.data.token);
		localStorage.setItem('errandToken', response.data.token);
		browserHistory.push('/');
	}

	render() {
		return (
			<LoginForm 
			account={this.state.account}
			onChange={this.onChange}
			submit={this.submit} />
		)
	}
}