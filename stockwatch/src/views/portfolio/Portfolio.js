import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import PortfolioEquityHelper from '../../components/portfolio/PortfolioEquityHelper';
import PortfolioEquityRow from '../../components/portfolio/PortfolioEquityRow';
import PortfolioEquityModal from '../../components/portfolio/PortfolioEquityModal';
import PortfolioFilter from '../../components/portfolio/PortfolioFilter';
import PortfolioTotal from '../../components/portfolio/PortfolioTotal';
import config from '../../config/config';
import './Portfolio.css';

class Portfolio extends Component {
  /*
  This component shows a list of the users portfolio.
  */

  constructor(props) {
    super(props);

    // Initialize the state with no equities and modal not showing.
    this.state = {
      show: false,
      modalEquity: {},
      equitiesLoaded: false,
      equities: [],
      currentSort: 'TransactionTimestamp',
      typeFilter: 'none',
      shouldFilterByReturn: false
    };

    this.loadEquities(this.equitiesLoaded);
  }

  loadEquities = (callback) => {
    // User id hard coded for now.
    return fetch(config.userEquitiesUrl,
      { credentials: 'include' })
      .then((response) => response.json())
      .then((json) => {
        callback(json);
      })
      .catch((error) => {
        console.error(error);
    });
  }

  equitiesLoaded = (json) => {
    // Add object for getting calculated info about the equity
    for (let equity of json)
      equity.calculated = new PortfolioEquityHelper(equity);

    let extremeReturns = this.getExtremeReturns(json);

    this.setState({ 
      equitiesLoaded: true,
      equities: json,
      show: false,
      extremes: extremeReturns
    });
  }

  showModal = (equity) => {
    // Show the modal and set the modal to display the equity clicked.
    this.setState({show: true, modalEquity: equity});
  }

  hideModal = () => {
    this.setState({show: false});
  }

  sortBy = (column, calculated) => {
    let equities = this.state.equities;
    if (column === this.state.currentSort)
      equities.reverse();
    else if (column === 'name')
      equities.sort(function(a, b){
        return a.name.localeCompare(b.name);
      });
    else if (calculated)
      equities.sort(function(a, b){
        return a.calculated[column] - b.calculated[column];
      })
    else
      equities.sort(function(a, b){
        return a[column] - b[column];
      })

    this.setState({
      equities: equities,
      currentSort: column,
      show: false
    });
  }

  setTypeFilter = (typeFilter) => {
    this.setState({typeFilter: typeFilter});
  }

  isValidType = (equity) => {
    return this.state.typeFilter === equity.type
        || this.state.typeFilter === 'none';
  }

  setReturnFilterValue = (value) => {
    this.setState({returnFilterValue: value})
  }

  isOverReturnValue = (equity) => {
    return ! this.state.shouldFilterByReturn 
        || equity.calculated.return >= this.state.returnFilterValue;
  }

  toggleFilterByReturn = (bool) => {
    let value = this.state.returnFilterValue
              || (this.state.extremes.max + this.state.extremes.min) / 2;
    this.setState({
      shouldFilterByReturn: bool,
      returnFilterValue: Math.floor(value)
    });
  }

  getExtremeReturns = (equities) => {
    return {
      max: Math.max.apply(Math, equities.map(function(o){return o.calculated.return;})),
      min: Math.min.apply(Math, equities.map(function(o){return o.calculated.return-1;}))
    }
  }

  getPortfolioTotal(){
    if (this.state.equitiesLoaded 
      && this.state.equities.length 
      && this.state.typeFilter === 'none' 
      && ! this.state.shouldFilterByReturn)
        return (<PortfolioTotal equities={this.state.equities} />)
      return null;
  }

  render() {
    return (
      <Row className="show-grid">
        <Col md={12}>
          <p className="row-info"> Klikk på en rad for mer info. Du kan også legge til filter ved å klikke på knappene under, eller sortere ved å klikke på kolonnen. </p>
          <PortfolioFilter 
            toggleFilterByReturn={this.toggleFilterByReturn}
            extremes={this.state.extremes}
            typeFilter={this.state.typeFilter}
            setTypeFilter={this.setTypeFilter}
            setReturnFilterValue={this.setReturnFilterValue}
            shouldFilterByReturn={this.state.shouldFilterByReturn}
            returnFilterValue={this.state.returnFilterValue}
          />
          <Table hover responsive>
            <thead>
              <tr>
                <th className="sortable" onClick={() => this.sortBy('name', false)}>
                  Navn <span className="caret"></span>
                </th>
                <th className="sortable hide-on-580px" onClick={() => this.sortBy('TransactionTimestamp', false)}>
                  Dato inv. <span className="caret"></span>
                </th>
                <th className="sortable hide-on-650px" onClick={() => this.sortBy('time', false)}>
                  Oppdatert <span className="caret"></span>
                </th>
                <th className="sortable" onClick={() => this.sortBy('percent', false)}>
                  Siste dag <span className="caret"></span>
                </th>
                <th className="sortable hide-on-410px" onClick={() => this.sortBy('return', true)}>
                  Avkastning <span className="caret"></span>
                </th>
                <th className="sortable hide-on-500px" onClick={() => this.sortBy('annualPercentReturn', true)}>
                  Ann avk. % <span className="caret"></span>
                </th>
                <th className="sortable" onClick={() => this.sortBy('totalValue', true)}>
                  Total Verdi <span className="caret"></span>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.equitiesLoaded ?
                  this.state.equities
                  .filter(this.isValidType)
                  .filter(this.isOverReturnValue)
                  .map((equity, i) => {
                      return (<PortfolioEquityRow key={i} showModal={() => this.showModal(equity)} equity={equity} />)
                  })
                : (
                    <tr>
                      <td colSpan="7" className="loading"> Laster inn.. <FontAwesome spin name="circle-o-notch" /> </td>
                    </tr>
                  )
              }
              {this.getPortfolioTotal()}
              <tr className="if-no-results">
                <td colSpan={3}>Ingen rader funnet..</td>
                <td className="hide-on-650px"></td>
                <td className="hide-on-580px"></td>
                <td className="hide-on-500px"></td>
                <td className="hide-on-410px"></td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <PortfolioEquityModal show={this.state.show} hide={this.hideModal} equity={this.state.modalEquity}/>
      </Row>
    );
  }
}

export default Portfolio;
