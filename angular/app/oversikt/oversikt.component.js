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
    OversiktComponent.prototype.getColor = function (value) {
        if (value > 0)
            return "green";
        else if (value < 0)
            return "red";
    };
    OversiktComponent.prototype.ngOnInit = function () {
        this.getFunds();
    };
    OversiktComponent.prototype.getFunds = function () {
        var _this = this;
        this.oversikt.getRows()
            .subscribe(function (suc) { return _this.jSon = suc; }, function (err) { return _this.errorMessage = err; });
    };
    OversiktComponent.prototype.sortObject = function () {
        if (this.jSon != null && this.jSon.funds != null && !this.onlyOnce) {
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
            template: "\n  <div class=\"container\">\n    <div class=\"header\">\n        <h2>Oversikt</h2>\n    </div>\n    <div class=\"show-grid row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Navn</th>\n                            <th>Oppdatert</th>\n                            <th>Siste dag</th>\n                            <th>Avkastning</th>\n                            <th>Ann avk. %</th>\n                            <th>Total Verdi</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let no of sortObject()\">\n                        <tr *ngFor=\"let row of this.funds\">\n                          <td>{{row.name}}</td>\n                          <td>{{row.dateUpdated}}</td>\n                          <td class=\"{{this.getColor(row.percentChanged)}}\">{{row.percentChanged}} %</td>\n                          <td>{{row.return}} kr</td>\n                          <td class=\"{{this.getColor(row.annualPercentReturn)}}\">{{row.annualPercentReturn}} %</td>\n                          <td>{{row.totalValue}} kr</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>",
            styleUrls: ['oversikt.component.css']
        }), 
        __metadata('design:paramtypes', [oversikt_service_1.OversiktService])
    ], OversiktComponent);
    return OversiktComponent;
}());
exports.OversiktComponent = OversiktComponent;
//# sourceMappingURL=oversikt.component.js.map