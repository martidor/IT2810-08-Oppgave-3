import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import DisplaySearch from './components/DisplaySearch';
import { Table, Grid, Row, Col } from 'react-bootstrap';
import funds from './dummy-funds.json';
import './components/search.css';
import './typeahead.bundle.js';
class Search extends Component {
  
  render() {
    return (
      <div>
        <div className="searchhead">
        <h2> Søk </h2>
        <Searchbar />
        </div>
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
                          <DisplaySearch fund={fund} />
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Grid>
        
      </div>
    );
  }
}

export default Search;
