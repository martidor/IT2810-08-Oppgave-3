import React, { Component } from 'react';
import { FormattedNumber } from 'react-intl';
import FormattedDateTime from '../components/FormattedDateTime';
import Chart from '../components/highcharts/Chart';
import FontAwesome from 'react-fontawesome';
import config from '../config/config'
import color from '../config/color';
import './Home.css';


class Home extends Component {
	/*The Home page Component will be the default page of the site. 
    Here we'll show some basic information about equities, and the user can log in.
    Once the user has logged in, the Home page will show some user-relevant information as well.*/

    constructor(props){
        super(props);

        this.state = { 'chartLoaded': false, chart: {} }

        this.loadChart(this.chartLoaded);
    }

    loadChart = (callback) => {
        return fetch(config.tickerUrl,
            { credentials: 'include' })
          .then((response) => response.json())
          .then((json) => {
            callback(json);
          })
          .catch((error) => {
            console.error(error);
          });
    }

    chartLoaded = (json) => {
        let currentTime = json.ticker[json.ticker.length - 1][0];
    	let currentValue = json.ticker[json.ticker.length - 1][1]
    	let percentChanged = (currentValue / json.yesterday) - 1;
        this.setState({ 
        	'chartLoaded': true,
        	'chart': json,
        	'currentValue': currentValue,
            'currentTime': currentTime,
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
                        <div className="hide-on-smartphone">
                            <div className="ticker-title">Oppdatert</div>
                            <div className="ticker-content">
                                <FormattedDateTime
                                  timestamp={new Date(this.state.currentTime)}
                                  type="SHARES"
                                  prefix={false}
                                /> 
                            </div>
                        </div>
						<div>
    						<div className="ticker-title">+/- %</div>
    						<div className={ "ticker-content " + color.getClassName(this.state.percentChanged)}>
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
                    <div className="homepage-content">
                        <p>Hei og velkommen til børsoversikten. På denne siden kan du blant annet: </p>
                        <ul>
                            <li>Legge til en egen portefølje med aksjer og fond.</li>
                            <li>Se statistikk og historikk over din porteføljes verdi og avkastning. </li>
                            <li>Søke i alle fond og aksjer som er registrert hos Oslo Børs. </li>
                            <li>Se detaljert info og grafisk historikk for spesifikke fond og aksjer. </li>
                            <li>Se oversikt over dagens ticker på Oslo Børs.</li>
                            <li>Se sanntidsinformasjon om aksje- og fondskurser.</li>
                        </ul>
                    </div>
    			</div>
			)
    	else
    		return (<div className="loading-home"><FontAwesome spin name="circle-o-notch" /> </div>)
    }
 }

export default Home;
