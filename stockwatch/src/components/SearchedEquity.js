import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';
import moment from 'moment';
import './SearchedEquity.css';

class SearchedEquity extends Component {
  /*
  This component is a table row showing info about a searched equity.
  It contains info about a equity and is not related to a user.
  */
  
  getClassName(property) {
    // Get the classname based on a property
    if (property < 0) 
      return "red";
    else if (property > 0)
      return "green";
    else return "";
  }

  getDateTime(timestamp, type){
    if (type === "SHARES" && moment(timestamp).isSame(Date.now(), 'day')) {
      return (
        <div>
          <span>kl </span>
          <FormattedTime
            value={new Date(timestamp)}
          />
        </div>
      )
    }
    return (
      <FormattedDate value={new Date(timestamp)} />
    )
  }

  render() {
    const equity = this.props.equity;
    return (
      <tr>
        <td>{equity.name}</td>
        <td>
          {
            this.getDateTime(equity.time, equity.type)
          }
        </td>
        <td className={this.getClassName(equity.percent)}>
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
              minimumFractionDigits={2}
              maximumFractionDigits={2}
              value={equity.price}
            /> 
            : "-"
           }
         </td>
        <td><Button bsSize="xsmall">Legg til</Button></td>
      </tr>
    );
  }
}

export default SearchedEquity;
