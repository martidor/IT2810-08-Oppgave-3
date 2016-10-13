import React from 'react';
import { FacebookLogin } from 'react-facebook-login-component';

class Login extends React.Component{

    responseFacebook (response) {
        console.log(response);
        //anything else you want to do(save to localStorage)...
    }

    render () {
        return (
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
        );
    }

}

export default Login;
