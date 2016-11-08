import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Notes from './notes/Notes';


class App extends Component {
  /*
  This component serves as a wrapper for all the other pages. When the user enters a page,
  the page component will be rendered in the {this.props.children}.
  */

  render() {
    return (
      <div>
        <NavigationBar />
        <Notes />
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
