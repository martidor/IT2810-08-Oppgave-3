import React, { Component } from 'react';

import {Image} from 'react-bootstrap';

import NoteField from "./../components/NoteField";
import NoteInput from "./../components/NoteInput";
import './Notes.css';

export default class Notes extends Component{
  constructor(){
    super();
    this.state = {
      value: "Enter a quick note",
      showNoteField: false,
    };
  }

  updateNotes(notes){
    this.setState({value: notes});
  }

  toggleNoteField(){
    this.setState({showNoteField: !this.state.showNoteField});
  }

  render(){
    return(
        <div id="wrap_notes">
          <div id="notes_icon">
            <Image onClick={this.toggleNoteField.bind(this)} responsive src="notes.png" alt="Notes icon"/>
          </div>

          {this.state.showNoteField ?
            <div>
            <NoteField value={this.state.value} />
            <NoteInput updateNotes={this.updateNotes.bind(this)} />
          </div>
            :""
          }
        </div>
    );
  }
}
