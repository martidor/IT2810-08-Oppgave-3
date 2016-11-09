import React, { Component } from 'react';

import {Image} from 'react-bootstrap';

import NoteInput from "../components/NoteInput";
import './Notes.css';
import auth from '../auth/auth';

export default class Notes extends Component{
  constructor(){
    super();
    this.state = {
      value: "",
      showNoteField: false,
    };
  }

  updateNotes(notes){
    this.setState({value: notes});
    localStorage.notes = this.state.value;
  }

  toggleNoteField(){
    this.setState({
      showNoteField: !this.state.showNoteField,
      value: localStorage.notes,
    });
  }


  componentWillUnmount(){
    auth.removeListener(this.updateAuth.bind(this));
  }

  componentWillMount(){
    auth.addListener(this.updateAuth.bind(this));
    this.updateAuth();
  }

  updateAuth(){
    this.setState({isLoggedIn: auth.isLoggedIn()});
  }

  render(){
    if(this.state.isLoggedIn){
      return(
          <div id="wrap_notes">
            <div id="notes_icon">
              <Image onClick={this.toggleNoteField.bind(this)} responsive src="notes.png" alt="Notes icon"/>
            </div>

            {this.state.showNoteField ?
              <div id="note_components">
              <h3 id="note_title">Enter a quick note</h3>
              <NoteInput updateNotes={this.updateNotes.bind(this)} value={this.state.value} />
            </div>
              :""
            }
          </div>
      );
    }
    return null;
  }
}
