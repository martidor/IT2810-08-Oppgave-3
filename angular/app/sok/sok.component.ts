import { Component, OnInit } from  '@angular/core';

import { OversiktService } from '../oversikt/oversikt.service';

export class SearchRow {
  name: string;
  dateUpdated: string;
  percentChanged: Number;
  costPrice: Number;
}

@Component({
  moduleId: module.id,
  providers: [OversiktService],
  selector: 'my-app',
  
  styleUrls: ['sok.component.css'],
  template: ` 
 	<div class="container">
	 	<div class="header">
	        <h2>Søk</h2>
	    </div>
	    <div class="show-grid row">
	        <div class="col-md-12">
	            <div class="form-group">
	                <label class="control-label" for="formBasicText">Søk etter
	                fond/aksje</label><input class="form-control" id=
	                "formBasicText" placeholder="Søk etter fond/aksje" type=
	                "text">
	            </div>
	        </div>
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
	                            <th>Pris</th>
	                            <th></th>
	                        </tr>
	                    </thead>
	                    <tbody>
	                        <tr *ngFor="let no of sortObject()">
                        	<tr *ngFor="let row of this.funds; let i=index">
	                            <td>{{row.name}}</td>
		                        <td>{{row.dateUpdated}}</td>
		                        <td class="{{this.getColor(row.percentChanged)}}">{{row.percentChanged}} %</td>
		                        <td>{{row.costPrice}} kr</td>
	                            <td><button class="btn btn-xs btn-default"
	                            type="button">Legg til</button></td>
	                        </tr>
	                    </tbody>
	                </table>
	            </div>
	        </div>
	    </div>
	</div>`,

})

export class SokComponent implements OnInit {
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



