import React, {Component} from 'react';
import ProfileTable from '../components/ProfileTable.js';
import './Profile.css';

class Profile extends Component {
	render() {
		return(
			<div>
				<div id="upper">
					<ProfileTable />
				</div>
				<div id="bottom">
					<img alt="chart" src={"http://www.itjobswatch.co.uk/charts/daily-rate-trend.aspx?s=highcharts+js&l=uk"} />
				</div>
			</div>
		);
	}
}

export default Profile;
