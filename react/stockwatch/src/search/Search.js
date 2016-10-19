import React, { Component } from 'react';
import { Table, Row, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import SearchedFund from '../components/SearchedFund';
import funds from '../dummy-funds.json';
import './Search.css';
import Fuse from'fuse.js';

class Search extends Component {
  /*
  This component is listing funds, and a search bar. When the user adds input to the
  search bar, the funds will automatically update with results matching the query.
  */

  constructor(props) {
    super(props);
    this.state = {funds: funds.funds};

    // Initialize the searcher with search options
    this.fuse = new Fuse(funds.funds, {
      keys: ['name'],
      threshold: 0.4,
      shouldSort: true
    });
  }

  search (event) {
    // Extract the query
    let query = event.target.value;

    if (query === "")
      // If the query is empty, show all of the funds.
      this.setState(funds: funds.funds);
    else {
      // Otherwise, search in the funds, and update the state with the results.
      let result = this.fuse.search(query);
      this.setState({funds: result});
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
                  <th>Pris</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.funds.map(function(fund) {
                    return (
                      <SearchedFund fund={fund} />
                    )
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
