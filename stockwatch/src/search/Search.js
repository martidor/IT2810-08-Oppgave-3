import React, { Component } from 'react';
import { Table, Row, Button, Col, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import SearchedEquity from '../components/SearchedEquity';
import FontAwesome from 'react-fontawesome';
import './Search.css';
import Fuse from 'fuse.js';
import config from '../config/config'
import SearchedEquityModal from '../components/SearchedEquityModal';

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
      'equitiesLoaded': false,
    };

    this.search = this.search.bind(this);
    this.showTenMoreEquities = this.showTenMoreEquities.bind(this);
    this.registerScrollSpy = this.registerScrollSpy.bind(this);
    this.isScrolledToBottom = this.isScrolledToBottom.bind(this);
    this.showModal = this.showModal.bind(this);
    this.loadEquities = this.loadEquities.bind(this)
    this.equitiesLoaded = this.equitiesLoaded.bind(this)

    this.loadEquities(this.equitiesLoaded);
  }

  showModal(equity) {
    // Show the modal and set the modal to display the equity clicked.
    this.setState({show: true, modalEquity: equity});
  }

  registerScrollSpy(){
    window.addEventListener("scroll", this.isScrolledToBottom);
  }

  isScrolledToBottom(){
    var offset = 5;
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var scrolledToBottom = (scrollTop + window.innerHeight + offset) >= scrollHeight;

    if (scrolledToBottom)
      this.showTenMoreEquities();
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.isScrolledToBottom);
  }

  equitiesLoaded(equities){
      this.setState({ 'equities': equities, 'equitiesLoaded': true, show: false });
      this.equities = equities;

      // Initialize the searcher with search options
      this.fuse = new Fuse(equities, {
        keys: ['name'],
        threshold: 0.2,
        shouldSort: true
      });

      this.registerScrollSpy();
  }

  loadEquities(callback){
    return fetch(config.equityUrl,
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
        show: false,
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
      show: false,
      equities: result,
      numResults: defaultNumResults
    });
  }

  render() {

    let numResults = this.state.numResults;
    return (
      <div>
        <Row className="show-grid">
        <p className="row-info"> Klikk på en rad for mer info </p>
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
                  <th className="hide-on-500px">Oppdatert</th>
                  <th>Siste dag</th>
                  <th>Kurs</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.equitiesLoaded ?
                  this.state.equities.map((equity, i) => {
                    if (i < numResults){
                      return (
                        <SearchedEquity key={i} showModal={() => this.showModal(equity)} equity={equity} />
                      )
                    } return null;
                  }) : (
                    <tr>
                      <td colSpan="4" className="loading"> Laster inn.. <FontAwesome spin name="circle-o-notch" /> </td>
                      <td className="hide-on-500px"></td>
                    </tr>
                  )
              }
                <tr className="no-results">
                  <td colSpan="4">Ingen treff på søket..</td>
                  <td className="hide-on-500px"></td>
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
        <SearchedEquityModal show={this.state.show} equity={this.state.modalEquity}/>
      </div>
    );
  }
}

export default Search;
