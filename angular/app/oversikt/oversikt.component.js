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
var oversikt_service_1 = require('./oversikt.service');
var FundRow = (function () {
    function FundRow() {
    }
    return FundRow;
}());
exports.FundRow = FundRow;
var OversiktComponent = (function () {
    function OversiktComponent(oversikt) {
        this.oversikt = oversikt;
        this.onlyOnce = false;
        this.mode = 'Observable';
    }
    OversiktComponent.prototype.ngOnInit = function () {
        this.getFunds();
    };
    OversiktComponent.prototype.getFunds = function () {
        var _this = this;
        this.oversikt.getRows()
            .subscribe(function (suc) { return _this.jSon = suc; }, function (err) { return _this.errorMessage = err; });
    };
    //console.log(this.jSon);
    OversiktComponent.prototype.sortObject = function () {
        if (this.jSon != undefined && !this.onlyOnce) {
            this.funds = this.jSon.funds;
            this.onlyOnce = true;
        }
    };
    OversiktComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [oversikt_service_1.OversiktService],
            selector: 'oversikt',
            //templateUrl: 'oversikt.component.html',
            template: "\n  <Table hover responsive>\n    <thead>\n      <tr>\n        <th>Navn</th>\n        <th>Oppdatert</th>\n        <th>Siste dag</th>\n        <th>Avkastning</th>\n        <th>Ann avk. %</th>\n        <th>Total Verdi</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let no of sortObject()\">\n      <tr *ngFor=\"let row of this.funds\">\n        <td>{{row.name}}</td>\n        <td>{{row.dateUpdated}}</td>\n        <td>{{row.percentChanged}}</td>\n        <td>{{row.return}}</td>\n        <td>{{row.annualPercentReturn}}</td>\n        <td>{{row.totalValue}}</td>\n      </tr>\n    </tbody>\n  </Table>",
            styleUrls: ['oversikt.component.css']
        }), 
        __metadata('design:paramtypes', [oversikt_service_1.OversiktService])
    ], OversiktComponent);
    return OversiktComponent;
}());
exports.OversiktComponent = OversiktComponent;
//# sourceMappingURL=oversikt.component.js.map