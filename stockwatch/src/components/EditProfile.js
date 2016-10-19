import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

/*
 * EditProfile component for user to change privacy settings.
 * Select form with a submit button.
 * Using react-bootstrap. 
 *
 * Note: Contains much-up text.
 *
 */

class EditProfile extends Component {
	render() {
		return(
			<div id="editprofile">
				<form>
				<FormGroup controlId="formControlsSelect">
					<ControlLabel> Synlighetsinstillinger </ControlLabel>
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
