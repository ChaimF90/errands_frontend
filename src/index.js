import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import LoginPage from './pages/login/loginPage';
import SignupPage from './pages/signup/signupPage';
import HomePage from './pages/homePage/homePage';
import RemindersPage from './pages/reminders/remindersPage';
import { Router, Route, browserHistory } from 'react-router';


const app = document.getElementById('root');
ReactDOM.render(
  <Router history={browserHistory}>
  	<Route path='/' component={Layout}>
  	<Route path="/errands" component={HomePage}></Route>
  	<Route path="/login" component={LoginPage}></Route>
  	<Route path="/signup" component={SignupPage}></Route>
  	<Route path="/reminders" component={RemindersPage}></Route>
  	</Route>	
  </Router>,
app);
