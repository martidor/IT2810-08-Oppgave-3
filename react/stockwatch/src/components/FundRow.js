import React, { Component } from 'react';
import './FundRow.css'

class Overview extends Component {

  getClassName(property) {
    if (property < 0) 
      return "red";
    else if (property > 0)
      return "green";
    else return "";
  }

  render() {
    return (
      <tr onClick={this.props.showModal}>
        <td>{this.props.fund.name}</td>
        <td>{this.props.fund.dateUpdated}</td>
        <td className={this.getClassName(this.props.fund.percentChanged)}>{this.props.fund.percentChanged}%</td>
        <td>{this.props.fund.return} kr</td>
        <td className={this.getClassName(this.props.fund.annualPercentReturn)}>{this.props.fund.annualPercentReturn}%</td>
        <td>{this.props.fund.totalValue} kr</td>
      </tr>
    );
  }
}

export default Overview;
