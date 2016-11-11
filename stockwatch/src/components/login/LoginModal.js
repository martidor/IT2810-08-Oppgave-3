import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Login from '../../views/login/Login';

export default
class LoginModal extends Component{

	render(){
		return(
			<Modal show={this.props.show} onHide={this.props.close}>
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
		)
	}
}