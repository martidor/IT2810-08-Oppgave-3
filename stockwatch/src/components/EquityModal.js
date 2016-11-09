import React, {Component} from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { FormattedDate, FormattedNumber } from 'react-intl';
import FormattedDateTime from './FormattedDateTime';
import Chart from '../components/highcharts/Chart';
import config from '../config/config'
import color from '../config/color';
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
                    <td className={color.getClassName(equity.calculated.percentReturn)}>
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
                    <td className={color.getClassName(equity.calculated.annualPercentReturn)}>
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
              <form className="float-left" action={config.deleteEquityUrl} method="post">
                <input type="hidden" name="equityid" value={equity.EquityId}/>
                <Button type="submit" onClick={this.hideModal}>Slett fra portefølje</Button>
              </form>
              <Button onClick={this.hideModal}>Lukk</Button>
            </Modal.Footer>
          </Modal>
      );
    } return null;
  }
}

export default EquityModal;