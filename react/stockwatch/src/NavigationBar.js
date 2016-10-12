import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
var FontAwesome = require('react-fontawesome');

class NavigationBar extends Component {

  render() {
    return (
	  <Navbar default>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">Stockwatch</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	      	<NavItem eventKey={1} href="#"><FontAwesome name="area-chart" /> Oversikt</NavItem>
	        <NavItem eventKey={2} href="#"><FontAwesome name="search" /> Søk</NavItem>
	        <NavItem eventKey={3} href="#"><FontAwesome name="user" /> Profil</NavItem>
	        <NavItem eventKey={4} href="#"><FontAwesome name="sign-out" /> Logg ut</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
    );
  }
}

export default NavigationBar;
