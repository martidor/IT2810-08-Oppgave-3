import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { FormattedNumber } from 'react-intl';
import FormattedDateTime from '../format/FormattedDateTime';
import color from '../../config/color';
import './SearchEquity.css';

export default class SearchEquity extends Component {
  
  /*
    This component is a table row showing info about a searched equity.
    It contains info about a equity and is not related to a user.
  */

  render() {
    const equity = this.props.equity;
    return (
      <tr className="mouse-pointer" onClick={this.props.showModal}>
        <td>{equity.name}</td>
        <td className="hide-on-500px">
          <FormattedDateTime timestamp={equity.time} type={equity.type} prefix={true} />
        </td>
        <td className={color.getClassName(equity.percent)}>
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
        <td><Button className="add" bsSize="xsmall"></Button></td>
      </tr>
    );
  }
}