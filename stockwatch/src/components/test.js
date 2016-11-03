import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Modal, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import Login from '../login/Login.js';


class NavigationBar extends Component {
  /*
  This component is a navbar that is rendered on all the pages.
  It contains links to the different sites.
  */

  constructor(){
    super();
    this.state={showModal: false};
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }
  close(){
    this.setState({showModal: false});
  }
  open(){
    this.setState({showModal: true});
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
          <LinkContainer>
            
            <Button onClick={this.open}><FontAwesome name="sign-in" /> Logg inn</Button>
            <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Opprett profil</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Login />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
        
          </LinkContainer>
          <NavItem eventKey={6}><FontAwesome name="sign-out" /> Logg ut</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
  }
}

export default NavigationBar;