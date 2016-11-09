import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import auth from '../auth/auth';

class NavigationBar extends Component {
	/*
	This component is a navbar that is rendered on all the pages.
	It contains links to the different sites.
	*/

	componentWillUnmount(){
		auth.removeListener(this.updateAuth.bind(this));
	}

	componentWillMount(){
		auth.addListener(this.updateAuth.bind(this));
		this.updateAuth();
	}

	updateAuth(){
		this.setState({isLoggedIn: auth.isLoggedIn()});
	}

  render() {
    return (
	  <Navbar id="NavigationBar" collapseOnSelect fixedTop >
	    <Navbar.Header>
	      <Navbar.Brand>
	      <LinkContainer to="/">
	      	<a href="/">Stockwatch</a>
	      </LinkContainer>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      	{this.state.isLoggedIn ? (
	      		<Nav pullRight>
			      	<LinkContainer to="/stats">
			      		<NavItem eventKey={1}><FontAwesome name="area-chart" /> Statistikk</NavItem>
			      	</LinkContainer>
			      	<LinkContainer to="/portefolje">
			      		<NavItem eventKey={2}><FontAwesome name="list-ul" /> Portefølje</NavItem>
			      	</LinkContainer>
			      	<LinkContainer to="/sok">
			        	<NavItem eventKey={3}><FontAwesome name="search" /> Søk</NavItem>
			        </LinkContainer>
			        <LinkContainer to="/profil">
			        	<NavItem eventKey={4}><FontAwesome name="user" /> Profil</NavItem>
		        	</LinkContainer>
		        	<LinkContainer to="/logg-ut">
			        	<NavItem eventKey={5}><FontAwesome name="sign-out" /> Logg ut</NavItem>
		        	</LinkContainer>
	        	</Nav>
	        ) : (
	        	<Nav pullRight>
	        		<LinkContainer to="/logg-inn">
			        	<NavItem eventKey={5}><FontAwesome name="sign-in" /> Logg inn</NavItem>
		        	</LinkContainer>
	        	</Nav>
	        )}

	    </Navbar.Collapse>
	  </Navbar>
    );
  }
}

export default NavigationBar;
