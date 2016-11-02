import React, { Component } from 'react';

export default class NoteField extends Component{
render(){
    return(
        <p>{this.props.value}</p>
    );
  }
}
