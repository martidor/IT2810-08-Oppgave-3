import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Toggle from 'react-toggle';
import EditProfile from '../../components/profile/EditProfile.js';
import config from '../../config/config'
import './Profile.css';

/*
 * Main profile sub-page.
 * Using react-bootstrap RoW and Col for page layout.
 * Importing Profile components.
 *
 * Note: Using much-up graph.
 */

class Profile extends Component {

	constructor(){
		super();

		this.state ={showModal: false};

		this.loadUser(this.userLoaded);
	}

	close = () => {
		this.setState({ showModal: false});
	}

	open = () => {
		this.setState({ showModal: true});
	}

	userLoaded = (user) =>{
		this.setState({user : user.name});
	}

	
	loadUser = (callback) => {
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
		return(
			<div id="profilebody">
				<h3>{this.state.user}</h3>

				<Button	onClick={this.open}>Endre profilinnstillinger</Button>
				
				<Button onClick="">Slett profil</Button>
				<label><Toggle /></label>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Endre profilinnstillinger</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<EditProfile />
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export default Profile;
