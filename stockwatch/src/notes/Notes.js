import React, { Component } from 'react';

import NoteField from "./../components/NoteField";
import NoteInput from "./../components/NoteInput";
import './Notes.css';

export default class Notes extends Component{
  constructor(){
    super();
    this.state = {
      value: "This is where text will appear",
    };
  }

  updateNotes(notes){
    this.setState({value: notes});
  }

  render(){
    return(
      <div pullRight>
        <NoteField value={this.state.value}/>
        <NoteInput updateNotes={this.updateNotes.bind(this)} />
      </div>
    );
  }
}
