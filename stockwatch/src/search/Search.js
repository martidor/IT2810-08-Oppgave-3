import React, { Component } from 'react';
import { Table, Row, Button, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import SearchedEquity from '../components/SearchedEquity';
import FontAwesome from 'react-fontawesome';
import './Search.css';
import Fuse from 'fuse.js';
import config from '../config/config'

class Search extends Component {
  /*
  This component is listing equities, and a search bar. When the user adds input to the
  search bar, the equities will automatically update with results matching the query.
  */

  constructor(props) {
    super(props);

    this.state = {
      'equities': [],
      'defaultNumResults': 30,
      'numResults': 30,
      'loading': true,
    };

    this.getEquities = this.getEquities.bind(this);
    this.search = this.search.bind(this);
    this.initialize = this.initialize.bind(this);
    this.showTenMoreEquities = this.showTenMoreEquities.bind(this);
    this.registerScrollSpy = this.registerScrollSpy.bind(this);
    this.isScrolledToBottom = this.isScrolledToBottom.bind(this);

    this.getEquities(this.initialize);
  }

  registerScrollSpy(){
    window.addEventListener("scroll", this.isScrolledToBottom);
  }

  isScrolledToBottom(){
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var scrolledToBottom = (scrollTop + window.innerHeight) >= scrollHeight;

    if (scrolledToBottom)
      this.showTenMoreEquities();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.isScrolledToBottom);
  }

  initialize(equities){
      this.setState({ 'equities': equities, 'loading': false });
      this.equities = equities;

      // Initialize the searcher with search options
      this.fuse = new Fuse(equities, {
        keys: ['name'],
        threshold: 0.4,
        shouldSort: true
      });

      this.registerScrollSpy();
  }

  getEquities(callback){
    return fetch(config.apiUrl + '/equity',
      { credentials: 'include' })
      .then((response) => response.json())
      .then((json) => {
        callback(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  showTenMoreEquities(){
      let numResults = this.state.numResults;
      this.setState({
        numResults: numResults + 10
      });
  }

  search (event) {
    // Extract the query
    let query = event.target.value;
    // Only show the default number of results
    let result, defaultNumResults = this.state.defaultNumResults;

    // Only search if we have at one characters
    if (query.length >= 1)
      // Search in the equities, and update the state with the results.
      result = this.fuse.search(query);
    // Otherwise, return to default state
    else
      result = this.equities;

    this.setState({
      equities: result,
      numResults: defaultNumResults
    });
  }

  render() {
    let numResults = this.state.numResults;
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
                  this.state.loading ?
                    (
                      <tr>
                        <td colSpan="5" className="loading"> Laster inn.. <FontAwesome spin name="circle-o-notch" /> </td>
                      </tr>
                    )
                  : this.state.equities.map(function(equity, i) {
                    if (i < numResults){
                      return (
                        <SearchedEquity key={i} equity={equity} />
                      );
                    } else return null;
                  })
                } 
                <tr className="no-results">
                  <td colSpan="5">Ingen treff på søket..</td>
                </tr>
              </tbody>
            </Table>
            {
              this.state.loading || this.state.equities.length < numResults ? "" :
              <div className="show-more-results">
                <Button onClick={this.showTenMoreEquities}>Vis 10 flere resultater</Button>
              </div>
            }
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
