import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Chart from '../components/highcharts/Chart';
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
	    return fetch(window.apiUrl + '/user/1/stats')
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
        return (
        	this.state.statsLoaded ?
        		<div className="charts">
	            	<Chart container="return-chart" chartKey="return-on-investment" data={this.state.stats.return}/>
	            	<Chart container="value-chart" chartKey="invested-and-value" data={this.state.stats}/>
            	</div>
            : 
            <div className="loading-home"><FontAwesome spin name="circle-o-notch" /> </div>
    	)
    }
 }

export default Stats;
