import React, { Component } from 'react';
import { FormattedDate, FormattedNumber } from 'react-intl';
import FormattedDateTime from '../format/FormattedDateTime';
import color from '../../config/color';

export default class PortfolioEquityRow extends Component {
  
  /*
  This component is a table row showing info about a equity.
  It contains info about the equities in a users portfolio.
  */

  render() {
    let equity = this.props.equity;

    return (
      <tr className="mouse-pointer" onClick={this.props.showModal}>
        <td>
          { equity.name }
        </td>
        <td className="hide-on-580px">
          <FormattedDate value={new Date(equity.TransactionTimestamp)} />
        </td>
        <td className="hide-on-650px">
          <FormattedDateTime timestamp={equity.time} type={equity.type} prefix={true} />
        </td>
        <td className={ color.getClassName(equity.percent) }>
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
        <td className="hide-on-410px">
        {
          equity.calculated.return ?
          <FormattedNumber
            minimumFractionDigits={0}
            maximumFractionDigits={0}
            value={ equity.calculated.return }
          />
          : "-"
         }
        </td>
        <td className={ color.getClassName(equity.calculated.annualPercentReturn) + " hide-on-500px" }>
          {
            equity.calculated.annualPercentReturn ?
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
            equity.calculated.totalValue ?
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
