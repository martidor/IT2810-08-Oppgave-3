import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { FormattedNumber } from 'react-intl';
import EquityHelper from '../components/EquityHelper';
import EquityRow from '../components/EquityRow';
import EquityModal from '../components/EquityModal';
import PortfolioFilter from '../components/PortfolioFilter';
import config from '../config/config';
import '../components/togglebutton.css';

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
      filter: 'nothing'
    };

    // Bind the function to the class instance
    this.showModal = this.showModal.bind(this);
    this.loadEquities = this.loadEquities.bind(this)
    this.equitiesLoaded = this.equitiesLoaded.bind(this)
    this.sortBy = this.sortBy.bind(this)
    this.filterBy = this.filterBy.bind(this)

    this.loadEquities(this.equitiesLoaded);
  }

  loadEquities(callback){
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

  equitiesLoaded(json){
    // Add object for getting calculated info about the equity
    for (let equity of json)
      equity.calculated = new EquityHelper(equity);

    this.setState({ 
      equitiesLoaded: true,
      equities: json,
      show: false
    });
  }

  showModal(equity) {
    // Show the modal and set the modal to display the equity clicked.
    this.setState({show: true, modalEquity: equity});
  }

  sortBy(column, calculated){
    let equities = this.state.equities;
    if (column === this.state.currentSort)
      equities.reverse();
    else if (column === 'name')
      equities.sort(function(a, b){
        return a.name.localeCompare(b.name);
      });
    else if (calculated)
      equities.sort(function(a, b){
        return a.calculated[column] < b.calculated[column];
      })
    else
      equities.sort(function(a, b){
        return a[column] < b[column];
      })

    this.setState({
      equities: equities,
      currentSort: column,
      show: false
    });
  }

  filterBy(filter){
    this.setState({filter: filter});
  }

  getPortfolioTotals(){
    if (this.state.equitiesLoaded && this.state.equities.length && this.state.filter === 'nothing'){
      let totalPrice = 0, totalValue = 0;

      for (var equity of this.state.equities){
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
    return null;
  }

  render() {
    return (
      <Row className="show-grid">
      <p className="row-info"> Klikk på en rad for mer info. Du kan også legge til filter ved å klikke på knappene under, eller sortere ved å klikke på kolonnen. </p>
        <PortfolioFilter filter={this.state.filter} filterBy={this.filterBy} />
        <Col md={12}>
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
                  this.state.equities.map((equity, i) => {
                    if (this.state.filter === equity.type || this.state.filter === 'nothing')
                      return (
                        <EquityRow key={i} showModal={() => this.showModal(equity)} equity={equity} />
                      ); else return null;
                  })
                : (
                    <tr>
                      <td colSpan="7" className="loading"> Laster inn.. <FontAwesome spin name="circle-o-notch" /> </td>
                    </tr>
                  )
              }
              {
                this.getPortfolioTotals()
              }
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
        <EquityModal show={this.state.show} equity={this.state.modalEquity}/>
      </Row>
    );
  }
}

export default Portfolio;
