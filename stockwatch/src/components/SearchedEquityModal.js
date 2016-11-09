import React, {Component} from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { FormattedNumber } from 'react-intl';
import FormattedDateTime from './FormattedDateTime';
import AddEquityForm from './AddEquityForm';
import Chart from '../components/highcharts/Chart';
import config from '../config/config';
import color from '../config/color';
import './EquityModal.css';

class SearchedEquityModal extends Component{
  /*
  This component is showing info about a equity in a modal.
  */

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      show: false,
      chartLoaded: false,
      chart: []
    };

    // Bind the function to the class instance
    this.hideModal = this.hideModal.bind(this);
    this.loadChart = this.loadChart.bind(this)
    this.chartLoaded = this.chartLoaded.bind(this)
  }

  componentWillReceiveProps(newProps){
    // Update the modal when new props arrive.
    var self = this;
    self.setState({show: newProps.show});
    
    if (newProps.show){
      let type = newProps.equity.type === "SHARES" ? "SHARES" : "FUNDS";
      self.loadChart(type, newProps.equity.id, this.chartLoaded);
    }
  }

  loadChart(type, equityId, callback){
    return fetch(config.equityUrl + type + '/' + equityId,
      { credentials: 'include' })
      .then((response) => response.json())
      .then((json) => {
        callback(json);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
  chartLoaded(json){
    this.setState({ 
      'chartLoaded': true,
      'chart': json
    });
  }

  hideModal() {
    this.setState({show: false, chartLoaded: false});
  }

  render() {
    const equity = this.props.equity;
    if (typeof equity !== 'undefined'){
    return (
      <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{equity.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table hover responsive>
              <tbody className="no-border">
                <tr>
                  <td>Siste kurs</td>
                  <td>
                    <FormattedNumber
                      minimumFractionDigits={2}
                      maximumFractionDigits={2}
                      value={equity.price}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Oppdatert</td>
                  <td>
                  	<FormattedDateTime timestamp={equity.time} type={equity.type} prefix={true} />
                  </td>
                </tr>
                <tr>
                  <td>Siste dag</td>
                  <td className={color.getClassName(equity.percent)}>
                    { 
                      equity.percent ?
                      <FormattedNumber  // eslint-disable-next-line
                        style='percent'
                        minimumFractionDigits={2}
                        maximumFractionDigits={2}
                        value={equity.percent / 100}
                      />
                      : "-"
                    }
                  </td>
                </tr>
              </tbody>
            </Table>
            { this.state.chartLoaded && this.state.chart.length ?
              <Chart container="equity-chart" chartKey="equity" data={this.state.chart}/>
              : ""
            }
            </Modal.Body>
            <Modal.Body>
              <AddEquityForm equityId={equity.id}/>
            </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Lukk</Button>
          </Modal.Footer>
        </Modal>
    );} else return null;
  }
}

export default SearchedEquityModal;