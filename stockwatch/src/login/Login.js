/*
  Login is the component that connects to Facebooks SDK and returns
  the information from the users Facebook profile. This is used to
  store that person into the database in order to remember that person
  untill the next time they log in.
*/
import React from 'react';
//import { FacebookLogin } from 'react-facebook-login-component';

class Login extends React.Component{

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
          <a href="/auth/facebook">Login with Facebook</a>
          /*<div>
            <FacebookLogin socialId="658913754278482"
                         language="en_US"
                         scope="public_profile,email"
                         fields="id,name,first_name,last_name,picture,email"
                         responseHandler={this.responseFacebook}
                         xfbml={true}
                         version="v2.8"
                         class="facebook-login"
                         buttonText="Login With Facebook"/>
          </div>*/
        );
    }

}

export default Login;
