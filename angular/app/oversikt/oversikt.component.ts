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
  <div class="container">
    <div class="header">
        <h2>Oversikt</h2>
    </div>
    <div class="show-grid row">
        <div class="col-md-12">
            <div class="table-responsive">
                <table class="table table-hover">
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
                          <td class="{{this.getColor(row.percentChanged)}}">{{row.percentChanged}} %</td>
                          <td>{{row.return}} kr</td>
                          <td class="{{this.getColor(row.annualPercentReturn)}}">{{row.annualPercentReturn}} %</td>
                          <td>{{row.totalValue}} kr</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>`,
  styleUrls: ['oversikt.component.css']
})

export class OversiktComponent implements OnInit {
  errorMessage: string;
  jSon: any;
  funds: any[];
  onlyOnce: boolean = false;
  mode = 'Observable';

  constructor (private oversikt: OversiktService) {}

  getColor(value){
    if (value > 0)
      return "green";
    else if (value < 0)
      return "red";
  }

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
