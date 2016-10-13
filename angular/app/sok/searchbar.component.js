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
var SokComponent = (function () {
    function SokComponent() {
    }
    SokComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            styleUrls: ['sok.component.css'],
            template: " \n \t<div class = \"search\">\n \t\t<div class =\"searchbar\">\n \t\t\t<input type=\"text\" ng-model=\"searchtext\" />\n \t\t</div>\n\t</div>",
        }), 
        __metadata('design:paramtypes', [])
    ], SokComponent);
    return SokComponent;
}());
exports.SokComponent = SokComponent;
//# sourceMappingURL=searchbar.component.js.map