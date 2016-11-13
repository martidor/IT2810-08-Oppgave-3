import React, { Component } from 'react';

import {Image} from 'react-bootstrap';

import NoteInput from "./NoteInput";
import './Notes.css';
import auth from '../../auth/auth';

export default class Notes extends Component{

/*
  This component is a text area where users can enter notes that are stored automatically.
  It is rendered on all pages when the user is logged in.
*/

//Hides and shows the note field based on whether the user is logged in.
  toggleNoteField = () => {
    this.setState({
      showNoteField: !this.state.showNoteField,
      value: localStorage.notes
    });
  }

//Removes the listener to update auth when the component is removed from the DOM.
  componentWillUnmount(){
    auth.removeListener(this.updateAuth);
  }

//Adds listener to update auth right before mounting occurs.
  componentWillMount(){
    auth.addListener(this.updateAuth);
    this.updateAuth();
  }

//Checks if user is logged in and updates the isLoggedIn state based on that result.
  updateAuth = () => {
    this.setState({isLoggedIn: auth.isLoggedIn()});
  }

  render(){
    let noteField;
    if (this.state.showNoteField)
      noteField = (
        <div id="note_components">
          <h3 id="note_title">Lag en liten notat</h3>
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
