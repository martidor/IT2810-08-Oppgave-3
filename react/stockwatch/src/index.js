import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Overview from './Overview';
import Profile from './Profile';
import Home from './Home'
import NotFound from './NotFound'
import './index.css';

render(
	(
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={Home}/>
	    	<Route path="oversikt" component={Overview}/>
				<Route path="profil" component={Profile}/>	
	    	<Route path="*" component={NotFound}/>
	    </Route>
	  </Router>
	), document.getElementById('root')
);

/*
<Router history={browserHistory}>
	<Route path="/" component={App}>
	  <Route path="about" component={About}/> 
	  <Route path="users" component={Users}>
	    <Route path="/user/:userId" component={User}/>
	  </Route>
	  <Route path="*" component={NoMatch}/>
	</Route>
</Router>
*/
