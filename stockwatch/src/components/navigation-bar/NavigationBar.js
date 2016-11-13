import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import LoginModal from '../login/LoginModal';
import auth from '../../auth/auth';
import config from '../../config/apiConfig'

export default class NavigationBar extends Component {

  /*
    This component is a navbar that is rendered on all the pages.
    It contains links to the different sites.
  */

  constructor(){
    super();
    if (auth.isLoggedIn())
      this.loadUser(this.userLoaded);

    this.state ={ showModal: false };
  }

  componentWillMount(){
    // Add listener to the auth state
    auth.addListener(this.updateAuth.bind(this));
    this.updateAuth();
  }

  componentWillUnmount(){
    auth.removeListener(this.updateAuth.bind(this));
  }

  loadUser(callback){
    return fetch(config.userUrl,
      { credentials: 'include' })
    .then((response) => response.json())
    .then((json) => {
      callback(json);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  userLoaded = (user) => {
    this.setState({user : user.name});
  }

  open = () => {
    this.setState({ showModal: true});
  }

  close = () => {
    this.setState({ showModal: false});
  }

  updateAuth = () => {
    this.setState({isLoggedIn: auth.isLoggedIn()});
  }

  render() {
    let printedUser;
    if(this.state.isLoggedIn)
      printedUser = " | " + this.state.user;
      return (
        <Navbar id="NavigationBar" collapseOnSelect fixedTop >
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <a className="stockwatch-brand" href="/">
                  <FontAwesome name="dollar" />tockwatch <span id="logged-in-as"> {printedUser}</span>
                </a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {this.state.isLoggedIn ? (
              <Nav pullRight>
                <LinkContainer to="/sok">
                  <NavItem eventKey={1}><FontAwesome name="search" /> Søk</NavItem>
                </LinkContainer>

                <LinkContainer to="/portefolje">
                  <NavItem eventKey={2}><FontAwesome name="list-ul" /> Portefølje</NavItem>
                </LinkContainer>

                <LinkContainer to="/stats">
                  <NavItem eventKey={3}><FontAwesome name="area-chart" /> Statistikk</NavItem>
                </LinkContainer>

                <LinkContainer to="/logg-ut">
                  <NavItem eventKey={4}><FontAwesome name="sign-out" /> Logg ut</NavItem>
                </LinkContainer>
              </Nav>
            ) : (
            <Nav pullRight>
              <NavItem onClick={this.open}><FontAwesome name="sign-in" /> Logg in</NavItem>
              <LoginModal close={this.close} show={this.state.showModal}/>
            </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      );
  }
}
