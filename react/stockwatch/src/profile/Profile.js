import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import ProfileTable from '../components/ProfileTable.js';
import EditProfile from '../components/EditProfile.js';
import './Profile.css';

class Profile extends Component {
	render() {
		return(
			<div>
				<Row className="show-grid">
					<Col md={12}>
						<div id="upper">
							<ProfileTable />
						</div>
					</Col>
					<Col md={6} mdOffset={3}>
						<div id="editSelector">
							<EditProfile />
						</div>
					</Col>
					<div id="bottom">
						<img alt="chart" src={"http://www.itjobswatch.co.uk/charts/daily-rate-trend.aspx?s=highcharts+js&l=uk"} />
					</div>
					</Row>
			</div>
		);
	}
}

export default Profile;