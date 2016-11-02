import React, {Component} from 'react';
import { FacebookLogin } from 'react-facebook-login-component';
import {Button, Modal} from 'react-bootstrap';
import CreateProfile from '../components/CreateProfile.js';
import './Login.css';

class Login extends React.Component{
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

    /*
     This function takes the response from Facebook, which will be
     used whenever the person has logged in and is needed to connect
     to the database.
    */
    responseFacebook (response) {
        console.log(response);
        //anything else you want to do(save to localStorage)...
    }

    /*
     This function renders the button which is used to log in via
     Facebook. When pressed, the user is prompted to log into their
     account. This happens because the information given here is
     sent to Facebooks developer site, which validates this information.
    */
    render () {
        return (
          <div className="loginbody">
            <Button><a href="/auth/facebook">Login with Facebook</a></Button>

            <Button onClick={this.open}>Opprett ny profil</Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Opprett ny profil</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <CreateProfile />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
          </div>
        );
    }

}

export default Login;
