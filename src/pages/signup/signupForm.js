import React from 'react';
import './signup.css';

export default class SignupForm extends React.Component {
	render() {
		return (
			<div className="container">
				<div>
				    <form className="form-signin">
				        <h2 className="form-signin-heading">Create New Account</h2>
				        <input
				        name="email"
				        value={this.props.account.email}
				        onChange={this.props.onChange} 
				        type="email" 
				        className="form-control" 
				        placeholder="Email address" />
				        <input
				        name="username"
				        value={this.props.account.username}
				        onChange={this.props.onChange} 
				        type="text" 
				        className="form-control" 
				        placeholder="Username" />
				        <input 
				        name="password"
				        value={this.props.account.password}
				        onChange={this.props.onChange}
				        type="password"  
				        className="form-control" 
				        placeholder="Password" />
				        <div className="checkbox">
				        </div>
				        <button onClick={this.props.submit} className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
				        <span>Already have an account? Click <a href="#">Here</a></span>
				    </form>
			    </div>
		    </div> 
		)
	}
}