import React, {Component} from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { FormattedDate, FormattedNumber } from 'react-intl';
import FormattedDateTime from '../format/FormattedDateTime';
import Chart from '../highcharts/Chart';
import DeletePortfolioEquity from './DeletePortfolioEquity';
import config from '../../config/apiConfig'
import color from '../../config/color';

class PortfolioEquityModal extends Component{
  /*
  This component is showing info about a equity in a modal.
  */

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      chartLoaded: false,
      chart: []
    };
  }

  componentWillReceiveProps(newProps){
    if (newProps.show){
      let type = newProps.equity.type === "SHARES" ? "SHARES" : "FUNDS";
      this.loadChart(type, newProps.equity.id, this.chartLoaded);
    }
  }

  loadChart = (type, equityId, callback) => {
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
    
  chartLoaded = (json) => {
    this.setState({ 
      'chartLoaded': true,
      'chart': json
    });
  }

  hideModal = () => {
    this.props.hide();
    this.setState({chartLoaded: false});
  }

  render() {
    let chartIfLoaded;
    if (this.state.chartLoaded)
      chartIfLoaded = (<Chart container="equity-chart" chartKey="equity" data={this.state.chart}/>);

    const equity = this.props.equity;
    if (equity.hasOwnProperty("calculated")){
      return (
        <Modal
            {...this.props}
            show={this.props.show}
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
              {chartIfLoaded}
            </Modal.Body>
            <Modal.Footer>
              <DeletePortfolioEquity equity={equity}/>
              <Button onClick={this.hideModal}>Lukk</Button>
            </Modal.Footer>
          </Modal>
      );
    } return null;
  }
}

export default PortfolioEquityModal;