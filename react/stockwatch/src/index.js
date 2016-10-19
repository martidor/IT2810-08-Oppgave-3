import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App';
import Overview from './overview/Overview';
import Profile from './profile/Profile';
import Home from './home/Home'
import Login from './login/Login'
import NotFound from './notfound/NotFound'
import Search from './search/Search';
import './index.css';

// This methods initializes the routing on the page.
render(
	(
	  <Router history={browserHistory}>
	    <Route path="/" component={App}>
	    	<IndexRoute component={Home} name="Børsoversikten"/>
	    	<Route path="oversikt" component={Overview} name="Oversikt"/>
			<Route path="profil" component={Profile} name="Profil"/>	
	    	<Route path="sok" component={Search} name="Søk"/> 
	    	<Route path="logg-inn" component={Login} name="Logg inn"/> 
	    	<Route path="*" component={NotFound} name="Ikke funnet"/>
	    </Route>
	  </Router>
	), document.getElementById('root')
);
