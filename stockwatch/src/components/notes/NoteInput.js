import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

export default class NoteInput extends Component{

  /*
    The text area part of the Notes component.
  */

  //Sets localStorage to empty string before mounting to avoid undefined errors.
  componentWillMount(){
    this.setState({
      note: localStorage.note || ""
    })
  }

  //When text is written in Textarea it is appended to localStorage in real-time.
  handleChange = (e) => {
    const note = e.target.value;
    this.setState({note: note})
    localStorage.note = note;
  }

  render(){
    return(
      <Textarea onChange={this.handleChange} value={this.state.note} />
    );
  }
}
