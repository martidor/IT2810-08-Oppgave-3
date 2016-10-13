import React, { Component } from 'react';
import { Table, Grid, Row, Col, FormControl , FormGroup, ControlLabel} from 'react-bootstrap';
import DisplaySearch from '../components/DisplaySearch';
import funds from '../dummy-funds.json';
import './Search.css';
import Fuse from'fuse.js';

const fuseOptions = {
  keys: ['name'],
  threshold: 0.4,
  shouldSort: true
};

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {funds: funds.funds};
  }

  search (event) {
    let fuse = new Fuse(funds.funds, fuseOptions);
    let query = event.target.value;
    let result = fuse.search(query);
    if (query !== "")
      this.setState({funds: result});
    else
      this.setState(funds: funds.funds);
  }
  
  render() {
    return (
      <div>
        <div className="searchhead">
          <h2> Søk </h2>
        </div>
          <Grid>
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
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.funds.map(function(fund) {
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
