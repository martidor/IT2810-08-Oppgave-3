import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './NavigationBar.js';
import Search from './components/Search.js';

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar />
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
