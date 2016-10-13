import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './SearchedFund.css';

class SearchedFund extends Component {
  
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
        <td className={this.getClassName(this.props.fund.percentChanged)}>{this.props.fund.percentChanged} %</td>
        <td>{this.props.fund.stockValue} kr</td>
        <td><Button bsSize="xsmall">Legg til</Button></td>
      </tr>
    );
  }
}

export default SearchedFund;
