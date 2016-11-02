/*
  Login is the component that connects to Facebooks SDK and returns
  the information from the users Facebook profile. This is used to
  store that person into the database in order to remember that person
  untill the next time they log in.
*/

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
              <div>
                <FacebookLogin socialId="658913754278482"
                             language="en_US"
                             scope="public_profile,email"
                             fields="id,name,first_name,last_name,picture,email"
                             responseHandler={this.responseFacebook}
                             xfbml={true}
                             version="v2.8"
                             class="facebook-login"
                             buttonText="Login With Facebook"/>

                </div>
            <form>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel> Brukernavn: </ControlLabel>
                    <input type="text" id="username" placeholder="Brukernavn" />
                    <ControlLabel> E-post: </ControlLabel>
                    <input type="email" id="email" placeholder="me@me.no" />
                    <ControlLabel> Passord: </ControlLabel>
                    <input type="password" id="pw" placeholder="*****" />
                    <ControlLabel> Gjenta passord: </ControlLabel>
                    <input type="passord" id="pw2" placeholder="*****" />
                    <ControlLabel> Synlighet (På/Av): </ControlLabel>
                    <label>
                        <Toggle/>
                    </label>
                    
                </FormGroup>
                <Button type="submit">
                    Lagre endringer
                </Button>
                </form>



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
