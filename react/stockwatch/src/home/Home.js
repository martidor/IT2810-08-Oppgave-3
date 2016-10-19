import React, { Component } from 'react';
import './Home.css'
class Home extends Component {
	/*The Home page Component will be the default page of the site. 
	Here we'll show some basic information about equities, and the user can log in.
	Once the user has logged in, the Home page will show some user-relevant information as well.*/
  render() {
    return (
    	<div className="home">
	      <div className="homebody">
	      	<img id="homechart" alt="osloborschart" src={'http://www.norcap.no/img/filarkiv/Image/graf_Oslo_Bors_november_2014.png'} />
	      </div>
       </div>
    );
  }
}

export default Home;
