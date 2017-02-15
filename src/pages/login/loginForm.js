import React from 'react';

export default class LoginForm extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="login-container">
							<p className="login-header">Errand tracker</p>
							<input
							name="credentials"
							value={this.props.account.credentials}
							onChange={this.props.onChange}
							className="login-input" 
							type="text" 
							placeholder="Username/Email" />
							<br />
							<input
							name="password"
							value={this.props.account.password}
							onChange={this.props.onChange}
							className="login-input" 
							type="password" 
							placeholder="Password" />
							<br />
							<button onClick={this.props.submit} className="login-btn">Login</button>
						</div>
					</div>
				</div>			    
		    </div> 
		)
	}
}