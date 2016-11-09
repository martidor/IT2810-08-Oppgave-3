import React, { Component } from 'react';

class NotFound extends Component {
	/*
	This component will show if the user enters a path that does not match any of the routes.
	*/

  render() {
    return (
      <p style={{textAlign: 'center', marginTop: '50px'}}> Vennligst prøv en annen URL, eller ta kontakt med administrator Eirik "TrumpLover93" Fosse. </p>
    );
  }
}

export default NotFound;
