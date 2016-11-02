import React, { Component } from 'react';

export default class NoteField extends Component{
render(){
    return(
      <div id="note_field">
        <p>{this.props.value}</p>
      </div>
    );
  }
}
