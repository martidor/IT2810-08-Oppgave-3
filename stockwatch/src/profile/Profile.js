import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';
import EditProfile from '../components/EditProfile.js';
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
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}

	close(){
		this.setState({ showModal: false});
	}
	open(){
		this.setState({ showModal: true});
	}
	areyousure(){
		
	}

	render() {
		
		
		return(
			<div id="profilebody">
				<h3>getname</h3>
				<Button	onClick={this.open}>Endre profilinnstillinger</Button>
				<Button onClick="areyousure();">Slett profil</Button>

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
