import React, { Component } from 'react';
import './search.css';
import './FundRow.css';
class DisplaySearch extends Component {
  
  getClassName(property) {
    if (property < 0) 
      return "red";
    else if (property > 0)
      return "green";
    else return "";
  }

  render() {
    return (
      <tr>
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

export default DisplaySearch;
