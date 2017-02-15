import React, { Component } from 'react';
import './css/mainTemplate.css';
import './css/login.css';
import './css/header.css';
import './css/homepage.css';
import './css/reminders.css';
import './css/reminderModal.css';
import './css/remindersList.css';
import NavBar from './layout/navBar';

class Layout extends Component {
  render() {
  	let nav;
  	if(this.props.location.pathname !== '/login') {
  		nav = <NavBar />
  	}
    return (
      <div>	
      	{nav}
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
