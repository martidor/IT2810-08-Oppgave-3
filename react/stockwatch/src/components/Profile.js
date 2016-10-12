import React, {Component} from 'react';
import './Profile.css'

class Profile extends Component {
	render() {
		return(
			<div id="profile">
				<h1>Profil</h1>
				<div id="userprofile">
					<table id="table">
						<tr>
							<td>Bruker navn:</td>
							<td id="usernmae">john_smith_39</td>
						</tr>
						<tr>
							<td>Fornavn:</td>
							<td id="firstname">John</td>
						</tr>
						<tr>
							<td>Etternavn:</td>
							<td id="lastname">Smith</td>
						</tr>
						<tr>
							<td>Alder:</td>
							<td id="age">39</td>
						</tr>
						<tr>
							<td>Adresse:</td>
							<td id="adress">Whitehouse Street 1</td>
						</tr>
						<tr>
							<td>E-mail:</td>
							<td id="email">johnsmith@email.com</td>
						</tr>
					</table>
				</div>
			</div>
		);
	}
}

export default Profile;
