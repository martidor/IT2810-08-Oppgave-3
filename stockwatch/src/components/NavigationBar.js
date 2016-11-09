import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button, Modal} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FontAwesome from 'react-fontawesome';
import auth from '../auth/auth';
import Login from '../login/Login.js';
import config from '../config/config'

class NavigationBar extends Component {
	/*
	This component is a navbar that is rendered on all the pages.
	It contains links to the different sites.
	*/
	constructor(){
		super();


		this.state ={showModal: false};
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
		this.loadUser(this.userLoaded.bind(this));
	}

	close(){
		this.setState({ showModal: false});
	}
	open(){
		this.setState({ showModal: true});
	}

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
	userLoaded(user){
		this.setState({user : user.name});
		console.log(user.name);
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

  render() {
    return (
	  <Navbar id="NavigationBar" collapseOnSelect fixedTop >
	    <Navbar.Header>
	      <Navbar.Brand>
	      <LinkContainer to="/">
	      	<a href="/"><FontAwesome name="home" /> Stockwatch</a>
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

			        
			        <NavItem id="loggetinnsom"> {this.state.user}</NavItem>

		        	

		        	
		        	
	        	</Nav>
	        ) : (
	        	<Nav pullRight>

	        			<NavItem onClick={this.open}><FontAwesome name="sign-in" /> Logg in</NavItem>

			        <Modal show={this.state.showModal} onHide={this.close}>
								<Modal.Header closeButton>
									<Modal.Title>Logg inn</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Login />
								</Modal.Body>
								<Modal.Footer>
									<Button onClick={this.close}>Lukk</Button>
								</Modal.Footer>
							</Modal>

	        	</Nav>
	        )}

	    </Navbar.Collapse>
	  </Navbar>
    );
  }
}

export default NavigationBar;
