import Highcharts from 'highcharts/highstock.js';
import ChartOptions from './ChartOptions';
import React, { Component } from 'react';

export default class Chart extends Component {

    /*
      This component is a wrapper for different charts (highcharts).
    */

    constructor(props) {
      super(props);
      this.chart = undefined;
    }

    // When the DOM is ready, create the chart.
    componentDidMount() {
      // Extend Highcharts with modules
      if (this.props.modules) {
        this.props.modules.forEach(function (module) {
        module(Highcharts);
        });
      }

      // Get options for the chart to be rendered
      let options = ChartOptions.getOptions(this);
      this.chart = new Highcharts[this.props.type || "Chart"](this.props.container, options);
    }

    //Destroy chart before unmount.
    componentWillUnmount() {
      this.chart.destroy();
    }

    render() {
      return (
      <div id={this.props.container}></div>
      )
    }
}
