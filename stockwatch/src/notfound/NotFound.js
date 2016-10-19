import React, { Component } from 'react';

class NotFound extends Component {
	/*
	This component will show if the user enters a path that does not match any of the routes.
	*/

  render() {
    return (
      <div className="App">
          <div className="App-header">
            <h2>404</h2>
          </div>
        </div>
    );
  }
}

export default NotFound;
