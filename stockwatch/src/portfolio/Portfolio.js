import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import EquityHelper from '../components/EquityHelper';
import EquityRow from '../components/EquityRow';
import EquityModal from '../components/EquityModal';

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
      equities: []
    };

    // Bind the function to the class instance
    this.showModal = this.showModal.bind(this);
    this.loadEquities = this.loadEquities.bind(this)
    this.equitiesLoaded = this.equitiesLoaded.bind(this)

    this.loadEquities(this.equitiesLoaded);
  }

  loadEquities(callback){
    // User id hard coded for now.
    return fetch('http://localhost:8008/api/user/1/equities')
      .then((response) => response.json())
      .then((json) => {
        callback(json);
      })
      .catch((error) => {
        console.error(error);
    });
  }

  equitiesLoaded(json){
    console.log(json);
    // Add object for getting calculated info about the equity
    for (let equity of json)
      equity.calculated = new EquityHelper(equity);

    this.setState({ 
      'equitiesLoaded': true,
      'equities': json
    });
  }

  showModal(equity) {
    // Show the modal and set the modal to display the equity clicked.
    this.setState({show: true, modalEquity: equity});
  }

  render() {
    return (
      <Row className="show-grid">
        <Col md={12}>
          <Table hover responsive>
            <thead>
              <tr>
                <th>Navn</th>
                <th>Oppdatert</th>
                <th>Siste dag</th>
                <th>Avkastning</th>
                <th>Ann avk. %</th>
                <th>Total Verdi</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.equitiesLoaded ?
                  this.state.equities.map((equity, i) => {
                    return (
                      <EquityRow key={i} showModal={() => this.showModal(equity)} equity={equity} />
                    )
                  })
                : (
                    <tr>
                      <td colSpan="5" className="loading"> Laster inn.. <FontAwesome spin name="circle-o-notch" /> </td>
                    </tr>
                  )
              }
            </tbody>
          </Table>
        </Col>
        <EquityModal show={this.state.show} equity={this.state.modalEquity}/>
      </Row>
    );
  }
}

export default Portfolio;
