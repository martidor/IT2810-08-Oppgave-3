import React, { Component } from 'react';
import './Home.css'
class Home extends Component {

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
