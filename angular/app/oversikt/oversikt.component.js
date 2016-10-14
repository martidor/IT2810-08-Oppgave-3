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
            template: "\n  <div class=\"container\">\n    <div class=\"header\">\n        <h2>Oversikt</h2>\n    </div>\n    <div class=\"show-grid row\">\n        <div class=\"col-md-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>Navn</th>\n                            <th>Oppdatert</th>\n                            <th>Siste dag</th>\n                            <th>Avkastning</th>\n                            <th>Ann avk. %</th>\n                            <th>Total Verdi</th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"pointer\">\n                        <tr *ngFor=\"let no of sortObject()\">\n                        <tr *ngFor=\"let row of this.funds; let i=index\" onclick=\"$('.modal').modal('show');\">\n                          <td>{{row.name}}</td>\n                          <td>{{row.dateUpdated}}</td>\n                          <td class=\"{{this.getColor(row.percentChanged)}}\">{{row.percentChanged}} %</td>\n                          <td>{{row.return}} kr</td>\n                          <td class=\"{{this.getColor(row.annualPercentReturn)}}\">{{row.annualPercentReturn}} %</td>\n                          <td>{{row.totalValue}} kr</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" role=\"document\">\n        <div class=\"modal-header\">\n            <button aria-label=\"Close\" class=\"close\" type=\n            \"button\" data-dismiss=\"modal\"><span aria-hidden=\"true\">\u00D7</span></button>\n            <h4 class=\"modal-title\" id=\"contained-modal-title-lg\">Skagen\n            Kon-Tiki</h4>\n        </div>\n        <div class=\"modal-body\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover\">\n                <tbody class=\"no-border\">\n                    <tr>\n                        <td>Kostpris</td>\n                        <td>1000 kr</td>\n                    </tr>\n                    <tr>\n                        <td>Dato investert</td>\n                        <td>01.12.2008</td>\n                    </tr>\n                    <tr>\n                        <td>Beholdning</td>\n                        <td>13.6361</td>\n                    </tr>\n                    <tr>\n                        <td>Siste kurs</td>\n                        <td>706.35 kr</td>\n                    </tr>\n                    <tr>\n                        <td>Oppdatert</td>\n                        <td>11.10.2016</td>\n                    </tr>\n                    <tr>\n                        <td>Siste dag</td>\n                        <td class=\"red\">-0.24 %</td>\n                    </tr>\n                    <tr>\n                        <td>Avkastning</td>\n                        <td>6131.88 kr</td>\n                    </tr>\n                    <tr>\n                        <td>Avkastning %</td>\n                        <td class=\"green\">175.2 %</td>\n                    </tr>\n                    <tr>\n                        <td>\u00C5rlig avkastning %</td>\n                        <td class=\"green\">13.74 %</td>\n                    </tr>\n                    <tr>\n                        <td>Total verdi</td>\n                        <td>9631.88 kr</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div><img class=\"img-responsive\" src=\"/graph.png\"></div>\n        <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" data-dismiss=\"modal\" type=\"button\">Close</button>\n        </div>\n    </div>\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->",
            styleUrls: ['oversikt.component.css']
        }), 
        __metadata('design:paramtypes', [oversikt_service_1.OversiktService])
    ], OversiktComponent);
    return OversiktComponent;
}());
exports.OversiktComponent = OversiktComponent;
//# sourceMappingURL=oversikt.component.js.map