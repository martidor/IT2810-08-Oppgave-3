import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import equities from '../dummy-equities.json';
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
                equities.equities.map((equity, i) => {
                  return (
                    <EquityRow key={i} showModal={() => this.showModal(equity)} equity={equity} />
                  )
                })
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
