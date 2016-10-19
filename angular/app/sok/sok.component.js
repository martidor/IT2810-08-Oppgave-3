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
var oversikt_service_1 = require('../oversikt/oversikt.service');
var SearchRow = (function () {
    function SearchRow() {
    }
    return SearchRow;
}());
exports.SearchRow = SearchRow;
var SokComponent = (function () {
    function SokComponent(oversikt) {
        this.oversikt = oversikt;
        this.onlyOnce = false;
        this.mode = 'Observable';
    }
    SokComponent.prototype.getColor = function (value) {
        if (value > 0)
            return "green";
        else if (value < 0)
            return "red";
    };
    SokComponent.prototype.ngOnInit = function () {
        this.getFunds();
    };
    SokComponent.prototype.getFunds = function () {
        var _this = this;
        this.oversikt.getRows()
            .subscribe(function (suc) { return _this.jSon = suc; }, function (err) { return _this.errorMessage = err; });
    };
    SokComponent.prototype.sortObject = function () {
        if (this.jSon != null && this.jSon.funds != null && !this.onlyOnce) {
            this.funds = this.jSon.funds;
            this.onlyOnce = true;
        }
    };
    SokComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [oversikt_service_1.OversiktService],
            selector: 'my-app',
            styleUrls: ['sok.component.css'],
            template: " \n \t<div class=\"container\">\n\t \t<div class=\"header\">\n\t        <h2>S\u00F8k</h2>\n\t    </div>\n\t    <div class=\"show-grid row\">\n\t        <div class=\"col-md-12\">\n\t            <div class=\"form-group\">\n\t                <label class=\"control-label\" for=\"formBasicText\">S\u00F8k etter\n\t                fond/aksje</label><input class=\"form-control\" id=\n\t                \"formBasicText\" placeholder=\"S\u00F8k etter fond/aksje\" type=\n\t                \"text\">\n\t            </div>\n\t        </div>\n\t    </div>\n\t    <div class=\"show-grid row\">\n\t        <div class=\"col-md-12\">\n\t            <div class=\"table-responsive\">\n\t                <table class=\"table table-hover\">\n\t                    <thead>\n\t                        <tr>\n\t                            <th>Navn</th>\n\t                            <th>Oppdatert</th>\n\t                            <th>Siste dag</th>\n\t                            <th>Pris</th>\n\t                            <th></th>\n\t                        </tr>\n\t                    </thead>\n\t                    <tbody>\n\t                        <tr *ngFor=\"let no of sortObject()\">\n                        \t<tr *ngFor=\"let row of this.funds; let i=index\">\n\t                            <td>{{row.name}}</td>\n\t\t                        <td>{{row.dateUpdated}}</td>\n\t\t                        <td class=\"{{this.getColor(row.percentChanged)}}\">{{row.percentChanged}} %</td>\n\t\t                        <td>{{row.costPrice}} kr</td>\n\t                            <td><button class=\"btn btn-xs btn-default\"\n\t                            type=\"button\">Legg til</button></td>\n\t                        </tr>\n\t                    </tbody>\n\t                </table>\n\t            </div>\n\t        </div>\n\t    </div>\n\t</div>",
        }), 
        __metadata('design:paramtypes', [oversikt_service_1.OversiktService])
    ], SokComponent);
    return SokComponent;
}());
exports.SokComponent = SokComponent;
//# sourceMappingURL=sok.component.js.map