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
          <div className="header">
            <h2> {this.props.children.props.route.name} </h2>
          </div>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
