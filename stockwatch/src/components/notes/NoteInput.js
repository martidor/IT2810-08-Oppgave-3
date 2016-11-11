import React, { Component } from 'react';

export default class NoteInput extends Component{

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

  textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
  }

  render(){
    return(
      <textarea onChange={this.handleChange} value={this.state.note} />
    );
  }
}
