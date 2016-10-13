import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Overview from './overview/Overview';
import Profile from './profile/Profile';
import Home from './home/Home'
import Login from './login/Login'
import NotFound from './notfound/NotFound'
import Search from './search/Search';
import './index.css';

render(
	(
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={Home}/>
	    	<Route path="oversikt" component={Overview}/>
			<Route path="profil" component={Profile}/>	
	    	<Route path="sok" component={Search}/> 
	    	<Route path="logg-inn" component={Login}/> 
	    	<Route path="*" component={NotFound}/>
	    </Route>
	  </Router>
	), document.getElementById('root')
);
