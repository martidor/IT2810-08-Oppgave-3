import React, {Component} from 'react';
import './ProfileTable.css'

class ProfileTable extends Component {
	render() {
		return(
			<div id="profile">
				<div id="profileimage">
					<img alt="Avatar" id="avatar" src={"http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"}
						width="175"/>
				</div>
				<div id="userprofile">
					<table id="table">
						<tr className="s0">
							<td>Brukernavn:</td>
							<td id="username">ola_nordmann_39</td>
						</tr>
						<tr>
							<td>Fornavn:</td>
							<td id="firstname">Ola</td>
						</tr>
						<tr className="s0">
							<td>Etternavn:</td>
							<td id="lastname">Nordmann</td>
						</tr>
						<tr>
							<td>Alder:</td>
							<td id="age">39</td>
						</tr>
						<tr className="s0">
							<td>E-mail:</td>
							<td id="email">olanordmann@email.no</td>
						</tr>
					</table>
				</div>
				<div id="edit">
					E D I T
					// <img alt="Edit" src={"https://cdn4.iconfinder.com/data/icons/miu/22/editor_pencil_pen_edit_write_-512.png"} width="20" height="20"/>
				</div>
			</div>
		);
	}
}

export default ProfileTable;
