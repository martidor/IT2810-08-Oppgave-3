import React, {Component} from 'react';
import { FormattedNumber } from 'react-intl';

export default class PortfolioTotal extends Component {

  render(){
    let totalPrice = 0, totalValue = 0;

    for (var equity of this.props.equities){
      totalPrice += equity.TotalPrice;
      totalValue += equity.price * equity.Stockholding;
    }

    return (
      <tr style={{fontWeight: 600}}>
        <td>Totalt</td>
        <td className="hide-on-580px"></td>
        <td className="hide-on-650px"></td>
        <td></td>
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
