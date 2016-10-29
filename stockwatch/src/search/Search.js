import React, { Component } from 'react';
import { Table, Row, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import SearchedFund from '../components/SearchedFund';
import FontAwesome from 'react-fontawesome';
import './Search.css';
import Fuse from'fuse.js';

class Search extends Component {
  /*
  This component is listing funds, and a search bar. When the user adds input to the
  search bar, the funds will automatically update with results matching the query.
  */

  constructor(props) {
    super(props);

    this.state = {
      'equities': [],
      'maxSearchResults': 60,
      'loading': true
    };

    this.getFunds = this.getFunds.bind(this)
    this.search = this.search.bind(this)
    this.initialize = this.initialize.bind(this)
    
    this.getFunds(this.initialize);
  }

  initialize(equities){
      this.setState({ 'equities': equities, 'loading': false });

      // Initialize the searcher with search options
      this.fuse = new Fuse(equities, {
        keys: ['name'],
        threshold: 0.4,
        shouldSort: true
      });
  }

  getFunds(callback){
    return fetch('http://localhost:8008/api/equities')
      .then((response) => response.json())
      .then((json) => {
        callback(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  search (event) {
    // Extract the query
    let query = event.target.value;

    // Only search if we have at least three characters
    if (query.length >= 3) {
      // Search in the funds, and update the state with the results.
      let result = this.fuse.search(query);
      this.setState({equities: result.slice(0, this.state.maxSearchResults)});
    }   
  }
  
  render() {
    return (
      <div>
        <Row className="show-grid">
          <Col md={12}>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Søk etter fond/aksje</ControlLabel>
              <FormControl
                type="text"
                placeholder="Søk etter fond/aksje"
                onChange={this.search.bind(this)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={12}>
            <Table hover responsive>
              <thead>
                <tr>
                  <th>Navn</th>
                  <th>Oppdatert</th>
                  <th>Siste dag</th>
                  <th>Kurs</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.equities.map(function(equity, i) {
                    return (
                      <SearchedFund key={i} fund={equity} />
                    )
                  })
                }
                {
                  this.state.loading ?
                    (
                      <tr>
                        <td colSpan="5" className="loading"> Laster inn.. <FontAwesome spin name="circle-o-notch" /> </td>
                      </tr>
                    ) : ""
                }
                <tr className="no-results">
                  <td colSpan="5">Ingen treff på søket..</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
