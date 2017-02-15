import React from 'react';
import {Link} from 'react-router';

export default class NavBar extends React.Component {
	render() {
		return (
			<div className="container-fluid custom-header">
				<div className="row">
					<div className="col-md-3">
						<Link
						activeClassName="active-link" 
						className="home-button" 
						to={''}>Errands Tracker</Link>
					</div>
					<div className="col-md-6">
						<div className='links-container'>
							<Link 
							activeClassName="header-link-active"
							className="header-link" 
							to={'/errands'}>Errands</Link>

							<Link
							activeClassName="header-link-active"
							className="header-link" 
							to={'/reminders'}>reminders</Link>

							<Link 
							className="header-link" 
							to={''}>Page 1</Link>

							<Link 
							className='header-link' 
							to={''}>Page 1</Link>
						</div>
					</div>
					<div className="col-md-3">
						<div className="user-greeting-container">
							<span className="greeting">Howdy, Newdev</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}