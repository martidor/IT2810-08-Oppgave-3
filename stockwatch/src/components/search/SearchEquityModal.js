import React, {Component} from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { FormattedNumber } from 'react-intl';
import FormattedDateTime from '../format/FormattedDateTime';
import AddSearchEquityForm from './AddSearchEquityForm';
import Chart from '../highcharts/Chart';
import config from '../../config/apiConfig';
import color from '../../config/color';

export default class SearchEquityModal extends Component{
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
    const equity = this.props.equity;

    if(this.state.chartLoaded && this.state.chart.length)
      chartIfLoaded = (<Chart container="equity-chart" chartKey="equity" data={this.state.chart}/>);

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
          { chartIfLoaded }
        </Modal.Body>
        <Modal.Body>
          <AddSearchEquityForm equityId={equity.id}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideModal}>Lukk</Button>
        </Modal.Footer>
      </Modal>
    );
  } else return null;
  }
}
