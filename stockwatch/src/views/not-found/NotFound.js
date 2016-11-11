import React, { Component } from 'react';

export default class NotFound extends Component {
	/*
	This component will show if the user enters a path that does not match any of the routes.
	*/

  getRandomNickName(){
    const nicknames = [
      '"The Trump"',
      '"TrumpLover93"',
      '"Trump4Prez"',
      '"TrumpTheWorld"',
      '"Trumpster"',
      '"TrumpPiercer"',
      '"TrumpTrumpsHillary"',
      '"Hillary?!?!MoreLikeHillarious"',
      '"I\'mATrumpstaMotherfucker'
    ];
    return nicknames[Math.floor(Math.random() * nicknames.length)];
  }

  getRandomTeamMember(nickname){
    const teamMembers =[
      ["Eirik", "Fosse"],
      ["Kristian", "Skog"],
      ["Cornelius", "Dahling"],
      ["Christoffer", "Nilsen"],
      ["Martin", "Dørum"],
      ["Joakim", "Lindgren"]
    ]
    const randomTeamMember = teamMembers[Math.floor(Math.random() * teamMembers.length)];
    return `${randomTeamMember[0]} ${nickname} ${randomTeamMember[1]}`;
  }

  render() {
    const nickname = this.getRandomNickName();
    const administrator = this.getRandomTeamMember(nickname);

    return (
      		<p style={{textAlign: 'center', marginTop: '50px'}}> Vennligst prøv en annen URL, eller ta kontakt med administrator {administrator}. </p>
    );
  }
}
