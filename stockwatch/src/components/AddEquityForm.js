import React, { Component } from 'react';
import { Form, Col, FormGroup, FormControl, ControlLabel , Button } from 'react-bootstrap';
import config from '../config/config';

export default
class AddEquityForm extends Component{
	render() {
		return(
			<Form horizontal method={'post'} action={config.userEquitiesUrl}>
				<input name="externalid" type="hidden" value={this.props.equityId} />
				<FormGroup>
				  <Col smOffset={2} sm={10}>
			    	<h4>Legg til i portefølje</h4>
			      </Col>
		      </FormGroup>
			  <FormGroup controlId="stockholding">
			    <Col componentClass={ControlLabel} sm={2}>
			      Beholdning
			    </Col>
			    <Col sm={10}>
			      <FormControl type="number" name="stockholding" step="0.001" placeholder="Beholdning" />
			    </Col>
			  </FormGroup>

			  <FormGroup controlId="totalprice">
			    <Col componentClass={ControlLabel} sm={2}>
			      Kostpris
			    </Col>
			    <Col sm={10}>
			      <FormControl type="number" name="totalprice" step="0.01" placeholder="Kostpris" />
			    </Col>
			  </FormGroup>

			  <FormGroup controlId="date">
			    <Col componentClass={ControlLabel} sm={2}>
			      Dato inv.
			    </Col>
			    <Col sm={10}>
			      <FormControl type="date" name="date" placeholder="Dato investert" />
			    </Col>
			  </FormGroup>

			  <FormGroup>
			    <Col smOffset={2} sm={10}>
			      <Button type="submit">
			        Legg til
			      </Button>
			    </Col>
			  </FormGroup>
			</Form>
		)
	}
}