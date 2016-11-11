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
                    <span>Logg inn med Facebook</span>
                </Button>
                <form method="post" action={config.testUserAuthUrl}>
                    <input hidden name="username" value="test" />
                    <input hidden name="password" value="user" />
                    <Button type="submit">
                        <FontAwesome name="user-secret" />
                        <span>Logg inn med testbruker</span>
                    </Button>
                </form>
            </div>
        );
    }

}

export default Login;