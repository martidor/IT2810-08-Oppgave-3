import { Component, OnInit } from  '@angular/core';

import { OversiktService } from './oversikt.service';

export class FundRow {
  name: string;
  costPrice: number;
  dateInvested: string;
  stockHolding: number;
  stockValue: number;
  dateUpdated: string;
  percentChanged: Number;
  returns: number;
  annualPercentReturn: Number;
  totalValue: number;
}

@Component({
  moduleId: module.id,
  providers: [OversiktService],
  selector: 'oversikt',
  //templateUrl: 'oversikt.component.html',
  template: `
  <Table hover responsive>
    <thead>
      <tr>
        <th>Navn</th>
        <th>Oppdatert</th>
        <th>Siste dag</th>
        <th>Avkastning</th>
        <th>Ann avk. %</th>
        <th>Total Verdi</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let no of sortObject()">
      <tr *ngFor="let row of this.funds">
        <td>{{row.name}}</td>
        <td>{{row.dateUpdated}}</td>
        <td>{{row.percentChanged}}</td>
        <td>{{row.return}}</td>
        <td>{{row.annualPercentReturn}}</td>
        <td>{{row.totalValue}}</td>
      </tr>
    </tbody>
  </Table>`,
  styleUrls: ['oversikt.component.css']
})

export class OversiktComponent implements OnInit {
  errorMessage: string;
  jSon: any;
  funds: any[];
  onlyOnce: boolean = false;
  mode = 'Observable';

  constructor (private oversikt: OversiktService) {}

  ngOnInit() {
    this.getFunds();
   }
    getFunds() {
      this.oversikt.getRows()
                       .subscribe(
                         suc => this.jSon = suc,
                         err =>  this.errorMessage = <any>err);
    }

    sortObject(){
      if(this.jSon!=null && this.jSon.funds != null && !this.onlyOnce){
        this.funds=this.jSon.funds;
        this.onlyOnce=true;
      }
    }
  }
