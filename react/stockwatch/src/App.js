import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';

class App extends Component {

  render() {
    return (
      <div>
        <NavigationBar />
        <Grid>
            {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
