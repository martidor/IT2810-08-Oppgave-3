import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class EditProfile extends Component {
	render() {
		return(
			<div id="editprofile">
				<form>
				<FormGroup controlId="formControlsSelect">
					<ControlLabel> Synlighets instillinger </ControlLabel>
					<FormControl componentClass="select" placeholder="select">
						<option value="select">Vis alt til besøkende</option>
						<option value="other">Begrenset synlighet, ingen e-mail eller alder</option>
						<option value="other">Ingen synlighet til besøkende</option>
					</FormControl>
				</FormGroup>
				<Button type="submit">
					Submit
				</Button>
				</form>
			</div>	
		)
	}
}

export default EditProfile;
