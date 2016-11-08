import React, {Component} from 'react';
import {Button, Modal, FormGroup, ControlLabel} from 'react-bootstrap';
import CreateProfile from '../components/CreateProfile.js';
import './Login.css';

class Login extends Component{
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
          <div id="loginbody">

            <form>
            <FormGroup controlId="loginform">
              <ControlLabel> Brukernavn: </ControlLabel>
              <input type="text" id="username" placeholder="corny" />
              <ControlLabel> Passord: </ControlLabel>
              <input type="password" id="pw" placeholder="****" />
            </FormGroup>
            <Button id="logginnButton" type="submit">Logg inn</Button>
          </form>


            <Button><a href="http://localhost:8008/auth/facebook">Login with Facebook</a></Button>


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
