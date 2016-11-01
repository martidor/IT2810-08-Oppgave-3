import React, { Component } from 'react';

export default class NoteInput extends Component{
  handleChange(e){
    const notes = e.target.value;
    this.props.updateNotes(notes);
  }

  render(){
    return(
      <textarea onChange={this.handleChange.bind(this)} />
    );
  }
}
