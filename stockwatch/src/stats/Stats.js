import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Chart from '../components/highcharts/Chart';
import config from '../config/config'
import './Stats.css';

class Stats extends Component {

	// eslint-disable-next-line
    constructor(props){
        super(props);

	    // Initialize the state with no equities and modal not showing.
	    this.state = {
	      statsLoaded: false,
	      stats: {}
	    };

	    this.loadStats = this.loadStats.bind(this)
	    this.statsLoaded = this.statsLoaded.bind(this)

	    this.loadStats(this.statsLoaded);
    }

    loadStats(callback){
	    // User id hard coded for now.
	    return fetch(config.userStatsUrl,
	      { credentials: 'include' })
	      .then((response) => response.json())
	      .then((json) => {
	        callback(json);
	      })
	      .catch((error) => {
	        console.error(error);
	    });
	  }

	  statsLoaded(json){
	    this.setState({
	      'statsLoaded': true,
	      'stats': json
	    });
	  }

	render() {
		let statsLoaded = this.state.statsLoaded;
		if (statsLoaded && this.state.stats.return.length > 1)
        	return (
        		<div className="charts">
	            	<Chart container="return-chart" chartKey="return-on-investment" data={this.state.stats.return}/>
	            	<Chart container="value-chart" chartKey="invested-and-value" data={this.state.stats}/>
            	</div>
            )
        else if (statsLoaded)
        	return (
        		<div className="missing-stats">Du har ikke hatt en portefølje lenge nok til å se statistikk.
        			Kom tilbake når du har hatt en portfølje i mer enn 2 dager.
    			</div>
			)
        else
            return (<div className="loading-home"><FontAwesome spin name="circle-o-notch" /> </div>)
    }
 }

export default Stats;
