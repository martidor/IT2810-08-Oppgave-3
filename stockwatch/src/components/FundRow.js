import React, { Component } from 'react';
import './FundRow.css'

class FundRow extends Component {
  /*
  This component is a table row showing info about a fund.
  It contains info about the funds in a users portfolio.
  */

  getClassName(property) {
    // Get the classname based on a property
    if (property < 0) 
      return "red";
    else if (property > 0)
      return "green";
    else return "";
  }

  render() {
    return (
      <tr className="mouse-pointer" onClick={this.props.showModal}>
        <td>
          {this.props.fund.name}
        </td>
        <td>
          {this.props.fund.dateUpdated}
        </td>
        <td className={this.getClassName(this.props.fund.percentChanged)}>
          {this.props.fund.percentChanged}%
        </td>
        <td>
          {this.props.fund.return} kr
        </td>
        <td className={this.getClassName(this.props.fund.annualPercentReturn)}>
          {this.props.fund.annualPercentReturn}%
        </td>
        <td>
          {this.props.fund.totalValue} kr
        </td>
      </tr>
    );
  }
}

export default FundRow;
