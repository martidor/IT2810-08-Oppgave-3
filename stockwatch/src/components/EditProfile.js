import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel} from 'react-bootstrap';
import './CreateEditProfile.css';
/*import ToggleButton from 'react-toggle-button';*/

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
					
					<ControlLabel> Synlighet </ControlLabel>
					<img id="togglebutt" alt="toggle" src={'https://daks2k3a4ib2z.cloudfront.net/56e9b4349a3c3ee83032ddae/57173789a18a4b4832355401_Sk%C3%A6rmbillede%2B2016-04-20%2Bkl.%2B10.00.40.png'} />
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
