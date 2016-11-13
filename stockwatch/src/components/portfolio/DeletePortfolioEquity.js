import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import config from '../../config/apiConfig'

export default class DeletePortfolioEquity extends Component{

  /*
  This component provides possibility to delete an equity.
  */

  confirmDelete(e){
    if(! confirm('Er du sikker på at du vil slette raden fra din portefølje?'))
      e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.confirmDelete} className="float-left" action={config.deleteEquityUrl} method="post">
        <input type="hidden" name="equityid" value={this.props.equity.EquityId}/>
        <Button type="submit">Slett fra portefølje</Button>
      </form>
    )
  }
}
