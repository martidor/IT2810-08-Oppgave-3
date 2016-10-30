import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Chart from '../components/highcharts/Chart';

class Stats extends Component {

    constructor(props){
        super(props);
    }

	render() {
        return (<div className="loading-home"><FontAwesome spin name="circle-o-notch" /> </div>)
    }
 }

export default Stats;
