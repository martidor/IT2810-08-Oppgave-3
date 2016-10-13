import React, { Component } from 'react';
import './Home.css'
class Home extends Component {

	


  render() {
    return (
    	<div className="home">
	      <div className="homehead">
		      <h2>Børsoversikten</h2>
		      <p></p>
	      </div>
	      <div className="homebody">
	      	<img id="homechart" alt="osloborschart" src={'http://www.norcap.no/img/filarkiv/Image/graf_Oslo_Bors_november_2014.png'} />
	      </div>
       </div>
    );
  }
}

export default Home;

/*<script async src="https://d36hc0p18k1aoc.cloudfront.net/pages/a5b5e5.js"></script><div class="tintup" data-id="borsoversikten" data-columns="" data-mobilescroll="true"    data-infinitescroll="true" data-personalization-id="832622" style="height:600px;width:60%;"><a href="http://www.tintup.com/blog/the-best-instagram-wall-display" style="width:118px;height:31px;background-image:url(//d33w9bm0n1egwm.cloudfront.net/assets/logos/poweredbytintsmall.png);position:absolute;bottom:10px;right: 20px;text-indent: -9999px;z-index:9;">instagram wall for events</a></div>*/