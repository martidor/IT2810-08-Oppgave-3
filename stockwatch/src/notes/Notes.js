import React, { Component } from 'react';

import {Image} from 'react-bootstrap';

import NoteInput from "../components/NoteInput";
import './Notes.css';
import auth from '../auth/auth';

export default class Notes extends Component{

  toggleNoteField = () => {
    this.setState({
      showNoteField: !this.state.showNoteField,
      value: localStorage.notes
    });
  }

  componentWillUnmount(){
    auth.removeListener(this.updateAuth);
  }

  componentWillMount(){
    auth.addListener(this.updateAuth);
    this.updateAuth();
  }

  updateAuth = () => {
    this.setState({isLoggedIn: auth.isLoggedIn()});
  }

  render(){
    let noteField;
    if (this.state.showNoteField)
      noteField = (
        <div id="note_components">
          <h3 id="note_title">Enter a quick note</h3>
          <NoteInput />
        </div>
      );

    if(this.state.isLoggedIn){
      return(
          <div id="wrap_notes">
            <div id="notes_icon">
              <Image onClick={this.toggleNoteField} responsive src="notes.png" alt="Notes icon"/>
            </div>
            {noteField}
          </div>
      );
    }
    return null;
  }
}
