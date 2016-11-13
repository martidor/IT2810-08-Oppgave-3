import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';

export default class ApiNotWorking extends Component {

  render() {
    return (
      <Row className="show-grid">
        <Col md={12}>
          <div className="header">
            <h2> APIet svarer ikke </h2>
          </div>
          <div className="test row-info" style={{marginTop: '2em'}}>
            <p>APIet svarte dessverre ikke på forespørselen. Vennligst prøv å <a onClick={() => window.location.reload(true)}>oppdater siden.</a></p>
            <p>Hvis ikke det fungerte, vennligst gi beskjed til administrator.</p>
            <p>Er du en <b>utvikler</b>? Har du husket å starte APIet?</p>
          </div>
        </Col>
      </Row>
    );
  }
}
