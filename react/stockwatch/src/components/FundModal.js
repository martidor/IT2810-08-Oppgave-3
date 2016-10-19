import React, {Component} from 'react';
import { Modal, Button, Table, Image } from 'react-bootstrap';
import './FundModal.css';

class FundModal extends Component{
  /*
  This component is showing info about a fund in a modal.
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
          animation={false}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="animated fadeIn"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.fund.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table hover responsive>
              <tbody className="no-border">
                <tr>
                  <td>Kostpris</td>
                  <td>{this.props.fund.costPrice} kr</td>
                </tr>
                <tr>
                  <td>Dato investert</td>
                  <td>{this.props.fund.dateInvested}</td>
                </tr>
                <tr>
                  <td>Beholdning</td>
                  <td>{this.props.fund.stockHolding}</td>
                </tr>
                <tr>
                  <td>Siste kurs</td>
                  <td>{this.props.fund.stockValue} kr</td>
                </tr>
                <tr>
                  <td>Oppdatert</td>
                  <td>{this.props.fund.dateUpdated}</td>
                </tr>
                <tr>
                  <td>Siste dag</td>
                  <td className={this.getClassName(this.props.fund.percentChanged)}>{this.props.fund.percentChanged} %</td>
                </tr>
                <tr>
                  <td>Avkastning</td>
                  <td>{this.props.fund.return} kr</td>
                </tr>
                <tr>
                  <td>Avkastning %</td>
                  <td className={this.getClassName(this.props.fund.percentReturn)}>{this.props.fund.percentReturn} %</td>
                </tr>
                <tr>
                  <td>Årlig avkastning %</td>
                  <td className={this.getClassName(this.props.fund.annualPercentReturn)}>{this.props.fund.annualPercentReturn} %</td>
                </tr>
                <tr>
                  <td>Total verdi</td>
                  <td>{this.props.fund.totalValue} kr</td>
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

export default FundModal;