import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel} from 'react-bootstrap';
import Toggle from 'react-toggle';
import './CreateEditProfile.css';
import './togglebutton.css';


class EditProfile extends Component {
	render() {
		return(
			<div id="editprofile">
				<form>
				<FormGroup controlId="formControlsSelect">
					<ControlLabel> Brukernavn: </ControlLabel>
					<input type="text" id="username" placeholder="Brukernavn" />
					<ControlLabel> E-post: </ControlLabel>
					<input type="email" id="email" placeholder="me@me.no" />
					<ControlLabel> Passord: </ControlLabel>
					<input type="password" id="pw" placeholder="*****" />
					<ControlLabel> Gjenta passord: </ControlLabel>
					<input type="passord" id="pw2" placeholder="*****" />
					
					<ControlLabel> Synlighetsinstillinger </ControlLabel>
					<label>
						<Toggle/>
					</label>
					
				</FormGroup>
				<Button type="submit">
					Lagre endringer
				</Button>
				</form>
			</div>	
		)
	}
}

export default EditProfile;
