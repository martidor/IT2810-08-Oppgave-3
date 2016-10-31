import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';

class App extends Component {
  /*
  This component serves as a wrapper for all the other pages. When the user enters a page,
  the page component will be rendered in the {this.props.children}.
  */

  
  render() {
    // set API globally for now. Find better way later
    window.apiUrl = 'http://' + window.location.hostname + ':8008/api';

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
