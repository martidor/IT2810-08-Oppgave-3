import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
var FontAwesome = require('react-fontawesome');

class NavigationBar extends Component {
	/*
	This component is a navbar that is rendered on all the pages.
	It contains links to the different sites.
	*/

  render() {
    return (
	  <Navbar id="NavigationBar" fixedTop>
	    <Navbar.Header>
	      <Navbar.Brand>
	      <LinkContainer to="/">
	        <a href="/">Stockwatch</a>
	      </LinkContainer>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	      	<LinkContainer to="/oversikt">
	      		<NavItem eventKey={1}><FontAwesome name="area-chart" /> Oversikt</NavItem>
	      	</LinkContainer>
	      	<LinkContainer to="/sok">
	        	<NavItem eventKey={2}><FontAwesome name="search" /> Søk</NavItem>
	        </LinkContainer>
	        <LinkContainer to="/profil">
	        	<NavItem eventKey={3}><FontAwesome name="user" /> Profil</NavItem>
        	</LinkContainer>
        	<LinkContainer to="/logg-inn">
	        	<NavItem eventKey={3}><FontAwesome name="sign-in" /> Logg inn</NavItem>
        	</LinkContainer>
	        <NavItem eventKey={4}><FontAwesome name="sign-out" /> Logg ut</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
    );
  }
}

export default NavigationBar;
