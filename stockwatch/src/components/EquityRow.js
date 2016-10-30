import React, { Component } from 'react';
import './EquityRow.css'

class EquityRow extends Component {
  /*
  This component is a table row showing info about a equity.
  It contains info about the equities in a users portfolio.
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
          {this.props.equity.name}
        </td>
        <td>
          {this.props.equity.dateUpdated}
        </td>
        <td className={this.getClassName(this.props.equity.percentChanged)}>
          {this.props.equity.percentChanged}%
        </td>
        <td>
          {this.props.equity.return} kr
        </td>
        <td className={this.getClassName(this.props.equity.annualPercentReturn)}>
          {this.props.equity.annualPercentReturn}%
        </td>
        <td>
          {this.props.equity.totalValue} kr
        </td>
      </tr>
    );
  }
}

export default EquityRow;
