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
                    <tbody class="pointer">
                        <tr *ngFor="let no of sortObject()">
                        <tr *ngFor="let row of this.funds; let i=index" onclick="$('.modal').modal('show');">
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
</div>
<div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content" role="document">
        <div class="modal-header">
            <button aria-label="Close" class="close" type=
            "button" data-dismiss="modal"><span aria-hidden="true">×</span></button>
            <h4 class="modal-title" id="contained-modal-title-lg">Skagen
            Kon-Tiki</h4>
        </div>
        <div class="modal-body">
        <div class="table-responsive">
            <table class="table table-hover">
                <tbody class="no-border">
                    <tr>
                        <td>Kostpris</td>
                        <td>1000 kr</td>
                    </tr>
                    <tr>
                        <td>Dato investert</td>
                        <td>01.12.2008</td>
                    </tr>
                    <tr>
                        <td>Beholdning</td>
                        <td>13.6361</td>
                    </tr>
                    <tr>
                        <td>Siste kurs</td>
                        <td>706.35 kr</td>
                    </tr>
                    <tr>
                        <td>Oppdatert</td>
                        <td>11.10.2016</td>
                    </tr>
                    <tr>
                        <td>Siste dag</td>
                        <td class="red">-0.24 %</td>
                    </tr>
                    <tr>
                        <td>Avkastning</td>
                        <td>6131.88 kr</td>
                    </tr>
                    <tr>
                        <td>Avkastning %</td>
                        <td class="green">175.2 %</td>
                    </tr>
                    <tr>
                        <td>Årlig avkastning %</td>
                        <td class="green">13.74 %</td>
                    </tr>
                    <tr>
                        <td>Total verdi</td>
                        <td>9631.88 kr</td>
                    </tr>
                </tbody>
            </table>
        </div><img class="img-responsive" src="/graph.png"></div>
        <div class="modal-footer">
            <button class="btn btn-default" data-dismiss="modal" type="button">Close</button>
        </div>
    </div>
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->`,
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
