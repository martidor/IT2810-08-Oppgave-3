import { Component } from  '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  styleUrls: ['profil.component.css'],

    template: `
	<div id="profile">
		<div id="profileimage">
			<img alt="Avatar" id="avatar" src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png" width="175"/>
		</div>
		<div id="userprofile">
			<table id="table">
				<tr class="s0">
					<td>Brukernavn:</td>
					<td id="username">ola_nordmann_39</td>
				</tr>
				<tr>
					<td>Fornavn:</td>
					<td id="firstname">Ola</td>
				</tr>
				<tr class="s0">
					<td>Etternavn:</td>
					<td id="lastname">Nordmann</td>
				</tr>
				<tr>
					<td>Alder:</td>
					<td id="age">39</td>
				</tr>
				<tr class="s0">
					<td>E-mail:</td>
					<td id="email">olanordmann@email.no</td>
				</tr>
			</table>
		</div>
		<div id="edit">
			E D I T
			// <img alt="Edit" src="https://cdn4.iconfinder.com/data/icons/miu/22/editor_pencil_pen_edit_write_-512.png" width="20" height="20"/>
		</div>
		<div id="bottom">
			<div id="editprofile">
				<form>
					Synlighetsinstillinger:
					<select>
						<option value="select">Vis alt til besøkende</option>
						<option value="other">Begrenset synlighet, ingen e-mail eller alder</option>
						<option value="other">Ingen synlighet til besøkende</option>
					</select>
					<Button type="submit">
						Submit
					</Button>
				</form>
			</div>	
			<img alt="chart" src="http://www.itjobswatch.co.uk/charts/daily-rate-trend.aspx?s=highcharts+js&l=uk" />
		</div>
	</div>
	 `
})
export class ProfilComponent {

}
