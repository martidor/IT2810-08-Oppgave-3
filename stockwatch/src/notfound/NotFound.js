import React, { Component } from 'react';

class NotFound extends Component {
	/*
	This component will show if the user enters a path that does not match any of the routes.
	*/

  render() {
  	var list = ['"The Trump"', '"TrumpLover93"', '"Trump4Prez"', '"TrumpTheWorld"', '"Trumpster"', '"TrumpPiercer"'];
  	var random = list[Math.floor(Math.random() * list.length)];


    return (
      		<p style={{textAlign: 'center', marginTop: '50px'}}> Vennligst prøv en annen URL, eller ta kontakt med administrator Eirik {random} Fosse. </p>
    );
  }
}

export default NotFound;
