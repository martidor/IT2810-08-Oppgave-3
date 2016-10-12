import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import DisplaySearch from './components/DisplaySearch';
import './components/search.css'
class Search extends Component {
  
  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h2>Søk</h2>
          </div>
          <Searchbar />
          <DisplaySearch />
        </div>

    );
  }
}

export default Search;
