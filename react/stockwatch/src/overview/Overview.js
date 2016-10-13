import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import funds from '../dummy-funds.json';
import FundRow from '../components/FundRow';
import FundModal from '../components/FundModal';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false, fund: {}};
    this.showModal = this.showModal.bind(this);
  }

  showModal(fund) {
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
