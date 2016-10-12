import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
