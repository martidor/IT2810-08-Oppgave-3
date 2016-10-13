import { Component } from  '@angular/core';
import { FundService } from './funds.service';

export class FundRow {
  name: string;
  dateUpdated: string;
  percentChanged: Number;
  return: number;
  annualPercentReturn: Number;
  totalValue: number;
}

@Component({
  moduleId: module.id,
  providers: [FundService],
  selector: 'oversikt',
  //templateUrl: 'oversikt.component.html',
  template: `
    <tr>
      <td>{{row.name}}</td>
      <td>{{row.dateUpdated}}</td>
      <td>{{row.percentChanged}}</td>
      <td>{{row.return}}</td>
      <td>{{row.annualPercentReturn}}</td>
      <td>{{row.totalValue}}</td>
    </tr>`,
  styleUrls: ['oversikt.component.css']
})
export class OversiktComponent {
  title: string = "Dette er oversikt siden";
  body: string = "Oversiktskroppen";
  row: FundRow={
    name: 'Skagen Kon-Tiki',
    dateUpdated: "11.10.2016",
    percentChanged: -0.24,
    annualPercentReturn: 13.74,
    return: 6131.88,
    totalValue: 9631.88
  };
  constructor(private _fundService: FundService)
        {
        //this.funds = _fundService.getFunds();
        console.log(_fundService.getFunds());
      ;}
    }
