import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import funds from '../dummy-funds.json';
import FundRow from '../components/FundRow';
import FundModal from '../components/FundModal';

class Overview extends Component {
  /*
  This component shows a list of the users portfolio.
  */

  constructor(props) {
    super(props);

    // Initialize the state with no funds and modal not showing.
    this.state = {show: false, fund: {}};

    // Bind the function to the class instance
    this.showModal = this.showModal.bind(this);
  }

  showModal(fund) {
    // Show the modal and set the modal to display the fund clicked.
    this.setState({show: true, fund: fund});
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
                funds.funds.map((fund, i) => {
                  return (
                    <FundRow key={i} showModal={() => this.showModal(fund)} fund={fund} />
                  )
                })
              }
            </tbody>
          </Table>
        </Col>
        <FundModal show={this.state.show} fund={this.state.fund}/>
      </Row>
    );
  }
}

export default Overview;
