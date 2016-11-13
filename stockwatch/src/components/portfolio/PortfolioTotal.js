import React, {Component} from 'react';
import { FormattedNumber } from 'react-intl';
import color from '../../config/color';

export default class PortfolioTotal extends Component {

  /*
    This component calculates and shows summarized totals for all equities.
  */

  render(){
    let totalPrice = 0, 
        totalValue = 0, 
        totalChangeSinceYesterday = 0,
        totalValueYesterday = 0;

    for (const equity of this.props.equities){
      let equityTotalValue = equity.price * equity.Stockholding,
          percentChangeSinceYesterday = (equity.percent + 100) / 100,
          valueYesterday = (equityTotalValue / percentChangeSinceYesterday);

      totalPrice += equity.TotalPrice;
      totalValue += equityTotalValue;
      totalValueYesterday += valueYesterday;
      totalChangeSinceYesterday += equityTotalValue - valueYesterday;
    }

    return (
      <tr style={{fontWeight: 600}}>
        <td>Totalt</td>
        <td className="hide-on-580px"></td>
        <td className="hide-on-650px"></td>
        <td className={ color.getClassName(totalChangeSinceYesterday) }>
          <FormattedNumber // eslint-disable-next-line
            style='percent'
            minimumFractionDigits={2}
            maximumFractionDigits={2}
            value={ totalChangeSinceYesterday / totalValueYesterday }
          />
        </td>
        <td className="hide-on-410px">
          <FormattedNumber
            minimumFractionDigits={0}
            maximumFractionDigits={0}
            value={ (totalValue - totalPrice) }
          />
        </td>
        <td className="hide-on-500px"></td>
        <td>
          <FormattedNumber
            minimumFractionDigits={0}
            maximumFractionDigits={0}
            value={ totalValue }
          />
        </td>
      </tr>
    );
  }
}
