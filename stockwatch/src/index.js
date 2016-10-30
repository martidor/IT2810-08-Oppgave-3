import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { IntlProvider, addLocaleData } from 'react-intl';
import noLocaleData from 'react-intl/locale-data/no';
import App from './App';
import Stats from './stats/Stats';
import Portfolio from './portfolio/Portfolio';
import Profile from './profile/Profile';
import Home from './home/Home'
import Login from './login/Login'
import NotFound from './notfound/NotFound'
import Search from './search/Search';
import './index.css';

addLocaleData(noLocaleData);

// This methods initializes the routing on the page.
render(
	(
		<IntlProvider locale="no">
		  <Router history={browserHistory}>
		    <Route path="/" component={App}>
		    	<IndexRoute component={Home} name="Børsoversikten"/>
		    	<Route path="stats" component={Stats} name="Statistikk"/>
		    	<Route path="portefolje" component={Portfolio} name="Portefølje"/>
				<Route path="profil" component={Profile} name="Profil"/>	
		    	<Route path="sok" component={Search} name="Søk"/> 
		    	<Route path="logg-inn" component={Login} name="Logg inn"/> 
		    	<Route path="*" component={NotFound} name="Ikke funnet"/>
		    </Route>
		  </Router>
	  	</IntlProvider>
	), document.getElementById('root')
);
