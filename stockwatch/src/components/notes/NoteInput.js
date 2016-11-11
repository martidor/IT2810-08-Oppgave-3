import React, { Component } from 'react';
import Textarea from 'react-textarea-autosize';

export default class NoteInput extends Component{

  // var Textarea = require('react-textarea-autosize');

  componentWillMount(){
    this.setState({
      note: localStorage.note || ""
    })
  }

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
