import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import config from '../../config/config';
import './Login.css';

class Login extends Component{

    loginWithFacebook(){
        window.location.href = config.facebookAuthUrl;
    }

    render () {
        return (
            <div className="login-wrapper">
                <Button onClick={this.loginWithFacebook}>
                    <FontAwesome name="facebook-square" />
                    <span>Login with Facebook</span>
                </Button>
            </div>
        );
    }

}

export default Login;