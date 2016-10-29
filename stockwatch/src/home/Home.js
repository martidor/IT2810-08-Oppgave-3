import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import Chart from '../components/highcharts/Chart';
import FontAwesome from 'react-fontawesome';
import './Home.css';


class Home extends Component {
	/*The Home page Component will be the default page of the site. 
    Here we'll show some basic information about equities, and the user can log in.
    Once the user has logged in, the Home page will show some user-relevant information as well.*/

    constructor(props){
        super(props);

        this.state = { 'chartLoaded': false, chart: {} }

        this.loadChart = this.loadChart.bind(this)
        this.chartLoaded = this.chartLoaded.bind(this)

        this.loadChart(this.chartLoaded);
    }

    loadChart(callback){
        return fetch('http://localhost:8008/api/ticker')
          .then((response) => response.json())
          .then((json) => {
            callback(json);
          })
          .catch((error) => {
            console.error(error);
          });
    }

    getClassName(property) {
	    // Get the classname based on a property
	    if (property < 0) 
	      return "red";
	    else if (property > 0)
	      return "green";
	    else return "";
	  }

    chartLoaded(json){
    	let currentValue = json.ticker[json.ticker.length - 1][1]
    	let percentChanged = (currentValue / json.yesterday) - 1;
        this.setState({ 
        	'chartLoaded': true,
        	'chart': json,
        	'currentValue': currentValue,
        	'percentChanged': percentChanged
        });
    }

	render() {
		if (this.state.chartLoaded)
    		return (
    			<div>
    				<div className="ticker-info">
    					<div>
    						<div className="ticker-title">Ticker</div>
    						<div className="ticker-content">OSEBX</div>
						</div>
						<div>
    						<div className="ticker-title">Siste kurs</div>
    						<div className="ticker-content">
    							<FormattedNumber
					              minimumFractionDigits={2}
					              maximumFractionDigits={2}
					              value={this.state.currentValue}
					            /> 
    						</div>
						</div>
						<div>
    						<div className="ticker-title">+/- %</div>
    						<div className={ "ticker-content " + this.getClassName(this.state.percentChanged)}>
    						<FormattedNumber // eslint-disable-next-line
				              style='percent'
				              minimumFractionDigits={2}
				              maximumFractionDigits={2}
				              value={this.state.percentChanged}
				            />
    						</div>
						</div>
    				</div>
    				<Chart container="ticker-chart" chartKey="ticker" data={this.state.chart}/>
    			</div>
			)
    	else
    		return (<div className="loading-home"><FontAwesome spin name="circle-o-notch" /> </div>)
    }
 }

export default Home;
