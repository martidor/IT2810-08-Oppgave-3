import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import { FormattedNumber } from 'react-intl';

export default class PortfolioFilter extends Component{
  
  /*
    This component is showing filter options, and provides the possibility
    to apply filters on equities.
  */

  constructor(props){
    super(props);
    this.state = {};
  }

  classNameIfCurrent = (typeFilter) => {
    return this.props.typeFilter === typeFilter ? 'active' : '';
  }

  toggleFilterByReturn = (e) => {
    this.props.toggleFilterByReturn(e.target.checked);
  }

  rangeChanged = (e) => {
    this.props.setReturnFilterValue(e.target.value);
  }

  render() {
    let filterByReturn;
    const extremes = this.props.extremes;

    if (this.props.shouldFilterByReturn)
      filterByReturn = (
        <div>
          <FormattedNumber
            className="return-filter-value"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
            value={ this.props.returnFilterValue }
          />
          <input min={extremes.min} max={extremes.max} onChange={this.rangeChanged} type="range" />
        </div>
      );

    return(
      <div>
        <div className="range-filter">
          <input onClick={this.toggleFilterByReturn} type="checkbox" id="enable-range" />
          <label htmlFor="enable-range">Filtrer på minimum avkastning: </label>
          {filterByReturn}
        </div>
        <div className="filter-wrapper">
          <Button className={this.classNameIfCurrent('none')} onClick={() => this.props.setTypeFilter('none')}>
            Vis alle
          </Button>
          <Button className={this.classNameIfCurrent('FUNDS')} onClick={() => this.props.setTypeFilter('FUNDS')}>
            Fond
          </Button>
          <Button className={this.classNameIfCurrent('SHARES')} onClick={() => this.props.setTypeFilter('SHARES')}>
            Aksjer
          </Button>
        </div>
      </div>
    )
  }
}
