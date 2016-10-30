import React, {Component} from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { FormattedDate, FormattedTime, FormattedNumber } from 'react-intl';
import Chart from '../components/highcharts/Chart';
import moment from 'moment';
import './EquityModal.css';

class EquityModal extends Component{
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
      console.log(newProps.equity);
      self.loadChart(newProps.equity.id, this.chartLoaded);
    }
  }

  loadChart(equityId, callback){
    return fetch('http://localhost:8008/api/equity/' + equityId)
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

  getClassName(property) {
    // Get the classname based on a property
    if (property < 0) 
      return "red";
    else if (property > 0)
      return "green";
    else return "";
  }

  getDateTime(timestamp, type){
    if (type === "SHARES" && moment(timestamp).isSame(Date.now(), 'day')) {
      return (
        <div>
          <span>kl </span>
          <FormattedTime
            value={new Date(timestamp)}
          />
        </div>
      )
    }
    return (
      <FormattedDate value={new Date(timestamp)} />
    )
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    const equity = this.props.equity;
    if (equity.hasOwnProperty("calculated")){
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
                    <td>Kostpris</td>
                    <td>
                      <FormattedNumber
                        minimumFractionDigits={0}
                        maximumFractionDigits={0}
                        value={ equity.TotalPrice }
                      /> 
                    </td>
                  </tr>
                  <tr>
                    <td>Dato investert</td>
                    <td>
                      <FormattedDate value={new Date(equity.TransactionTimestamp)} />
                    </td>
                  </tr>
                  <tr>
                    <td>Beholdning</td>
                    <td>
                      <FormattedNumber
                        minimumFractionDigits={0}
                        maximumFractionDigits={4}
                        value={ equity.Stockholding }
                      />
                    </td>
                  </tr>
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
                      {
                        this.getDateTime(equity.time, equity.type)
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Siste dag</td>
                    <td className={this.getClassName(equity.percent)}>
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
                  <tr>
                    <td>Avkastning</td>
                    <td>
                      <FormattedNumber
                        minimumFractionDigits={0}
                        maximumFractionDigits={0}
                        value={ equity.calculated.return }
                      /> 
                    </td>
                  </tr>
                  <tr>
                    <td>Avkastning %</td>
                    <td className={this.getClassName(equity.calculated.percentReturn)}>
                      {
                        equity.calculated.percentReturn ?
                        <FormattedNumber  // eslint-disable-next-line
                          style='percent'
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          value={equity.calculated.percentReturn }
                        />
                        : "-"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Årlig avkastning %</td>
                    <td className={this.getClassName(equity.calculated.annualPercentReturn)}>
                      {
                        equity.percent ?
                        <FormattedNumber  // eslint-disable-next-line
                          style='percent'
                          minimumFractionDigits={2}
                          maximumFractionDigits={2}
                          value={equity.calculated.annualPercentReturn}
                        />
                        : "-"
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Total verdi</td>
                    <td>
                      <FormattedNumber
                        minimumFractionDigits={0}
                        maximumFractionDigits={0}
                        value={ equity.calculated.totalValue }
                      /> 
                    </td>
                  </tr>
                </tbody>
              </Table>
              { this.state.chartLoaded ?
                <Chart container="equity-chart" chartKey="equity" data={this.state.chart}/>
                : ""
              }
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
      );
    } return null;
  }
}

export default EquityModal;