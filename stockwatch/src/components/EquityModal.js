import React, {Component} from 'react';
import { Modal, Button, Table, Image } from 'react-bootstrap';
import './EquityModal.css';

class EquityModal extends Component{
  /*
  This component is showing info about a equity in a modal.
  */

  constructor(props) {
    super(props);

    // Initial state
    this.state = {show: false};

    // Bind the function to the class instance
    this.hideModal = this.hideModal.bind(this);
  }

  componentWillReceiveProps(newProps){
    // Update the modal when new props arrive.
    var self = this;
    self.setState({show: newProps.show});
  }

  getClassName(property) {
    // Get the classname based on a property
    if (property < 0) 
      return "red";
    else if (property > 0)
      return "green";
    else return "";
  }

  hideModal() {
    this.setState({show: false});
  }

  render() {
    return (
      <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.equity.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table hover responsive>
              <tbody className="no-border">
                <tr>
                  <td>Kostpris</td>
                  <td>{this.props.equity.costPrice} kr</td>
                </tr>
                <tr>
                  <td>Dato investert</td>
                  <td>{this.props.equity.dateInvested}</td>
                </tr>
                <tr>
                  <td>Beholdning</td>
                  <td>{this.props.equity.stockHolding}</td>
                </tr>
                <tr>
                  <td>Siste kurs</td>
                  <td>{this.props.equity.stockValue} kr</td>
                </tr>
                <tr>
                  <td>Oppdatert</td>
                  <td>{this.props.equity.dateUpdated}</td>
                </tr>
                <tr>
                  <td>Siste dag</td>
                  <td className={this.getClassName(this.props.equity.percentChanged)}>
                    {this.props.equity.percentChanged} %
                  </td>
                </tr>
                <tr>
                  <td>Avkastning</td>
                  <td>{this.props.equity.return} kr</td>
                </tr>
                <tr>
                  <td>Avkastning %</td>
                  <td className={this.getClassName(this.props.equity.percentReturn)}>
                    {this.props.equity.percentReturn} %
                  </td>
                </tr>
                <tr>
                  <td>Årlig avkastning %</td>
                  <td className={this.getClassName(this.props.equity.annualPercentReturn)}>
                    {this.props.equity.annualPercentReturn} %
                  </td>
                </tr>
                <tr>
                  <td>Total verdi</td>
                  <td>{this.props.equity.totalValue} kr</td>
                </tr>
              </tbody>
            </Table>
            <Image src="graph.png" responsive />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default EquityModal;