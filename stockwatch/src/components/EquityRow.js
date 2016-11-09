import React, { Component } from 'react';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';
import moment from 'moment';
import './EquityRow.css';

class EquityRow extends Component {
  /*
  This component is a table row showing info about a equity.
  It contains info about the equities in a users portfolio.
  */

  getDateTime(timestamp, type){
    if (type === "SHARES" && moment(timestamp).isSame(Date.now(), 'day')) {
      return (
        <div>
          <span>kl </span>
          <FormattedTime value={new Date(timestamp)} />
        </div>
      )
    }
    return (
      <FormattedDate value={new Date(timestamp)} />
    )
  }

  getClassName(property) {
    // Get the classname based on a property
    if (property < 0) 
      return "red";
    else if (property > 0)
      return "green";
    else return "";
  }

  render() {
    let equity = this.props.equity;

    return (
      <tr className="mouse-pointer" onClick={this.props.showModal}>
        <td>
          { equity.name }
        </td>
        <td>
          <FormattedDate value={new Date(equity.TransactionTimestamp)} />
        </td>
        <td>
          { this.getDateTime(equity.time, equity.type) }
        </td>
        <td className={ this.getClassName(equity.percent) }>
          {
            equity.percent ?
            <FormattedNumber  // eslint-disable-next-line
              style='percent'
              minimumFractionDigits={2}
              maximumFractionDigits={2}
              value={equity.percent / 100}
            />
            : "-"
          }
        </td>
        <td>
        {
          equity.price ?
          <FormattedNumber
            minimumFractionDigits={0}
            maximumFractionDigits={0}
            value={ equity.calculated.return }
          /> 
          : "-"
         }
        </td>
        <td className={this.getClassName(equity.calculated.annualPercentReturn) }>
          {
            equity.percent ?
            <FormattedNumber  // eslint-disable-next-line
              style='percent'
              minimumFractionDigits={2}
              maximumFractionDigits={2}
              value={ equity.calculated.annualPercentReturn }
            />
            : "-"
          }
        </td>
        <td>
          {
            equity.price ?
            <FormattedNumber
              minimumFractionDigits={0}
              maximumFractionDigits={0}
              value={ equity.calculated.totalValue }
            /> 
            : "-"
          }
        </td>
      </tr>
    );
  }
}

export default EquityRow;
