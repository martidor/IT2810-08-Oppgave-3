import React, { Component } from 'react';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import funds from '../dummy-funds.json';
import FundRow from '../components/FundRow';

class Overview extends Component {

  render() {
    return (
      <Grid>
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
                  funds.funds.map(function(fund) {
                    return (
                      <FundRow fund={fund} />
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Overview;
