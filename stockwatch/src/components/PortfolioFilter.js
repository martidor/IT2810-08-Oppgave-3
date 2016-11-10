import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class PortfolioFilter extends Component{
  /*
  This component is showing info filter options
  */

  constructor(props){
    super(props);
    this.classNameIfCurrent = this.classNameIfCurrent.bind(this);
  }

  classNameIfCurrent(filter){
    const currentFilter = this.props.filter;
    return currentFilter === filter ? 'active' : '';
  }

  render() {
    const filterBy = this.props.filterBy;
    return(
      <div className="filter-wrapper">
        <Button className={this.classNameIfCurrent('nothing')} onClick={() => filterBy('nothing')}>
          Vis alle
        </Button>
        <Button className={this.classNameIfCurrent('FUNDS')} onClick={() => filterBy('FUNDS')}>
          Fond
        </Button>
        <Button className={this.classNameIfCurrent('SHARES')} onClick={() => filterBy('SHARES')}>
          Aksjer
        </Button>
      </div>
    )
  }
}

export default PortfolioFilter;