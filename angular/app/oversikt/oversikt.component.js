"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var funds_service_1 = require('./funds.service');
var FundRow = (function () {
    function FundRow() {
    }
    return FundRow;
}());
exports.FundRow = FundRow;
var OversiktComponent = (function () {
    function OversiktComponent(_fundService) {
        this._fundService = _fundService;
        this.title = "Dette er oversikt siden";
        this.body = "Oversiktskroppen";
        this.row = {
            name: 'Skagen Kon-Tiki',
            dateUpdated: "11.10.2016",
            percentChanged: -0.24,
            annualPercentReturn: 13.74,
            return: 6131.88,
            totalValue: 9631.88
        };
        //this.funds = _fundService.getFunds();
        console.log(_fundService.getFunds());
        ;
    }
    OversiktComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [funds_service_1.FundService],
            selector: 'oversikt',
            //templateUrl: 'oversikt.component.html',
            template: "\n    <tr>\n      <td>{{row.name}}</td>\n      <td>{{row.dateUpdated}}</td>\n      <td>{{row.percentChanged}}</td>\n      <td>{{row.return}}</td>\n      <td>{{row.annualPercentReturn}}</td>\n      <td>{{row.totalValue}}</td>\n    </tr>",
            styleUrls: ['oversikt.component.css']
        }), 
        __metadata('design:paramtypes', [funds_service_1.FundService])
    ], OversiktComponent);
    return OversiktComponent;
}());
exports.OversiktComponent = OversiktComponent;
//# sourceMappingURL=oversikt.component.js.map