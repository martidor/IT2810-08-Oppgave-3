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
        this.bajs = 'hei';
    }
    SokComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            styleUrls: ['sok.component.css'],
            template: " \n  <div>\n  \t\t\n  \t\t<input type=\"text\" ng-model=\"thetext\" />\n  \t\t<p>{{thetext}}</p>\n  \t\t<p> down here </p>\n  \t\t<p>{{bajs}} , du </p>\n  \t\t\n<div ng-app=\"\">\n  <form>\n    <input type=\"text\" ng-model=\"firstname\">\n  </form>\n  <h1>You entered: {{firstname}}</h1>\n</div>\n\n\n\t</div>",
        }), 
        __metadata('design:paramtypes', [])
    ], SokComponent);
    return SokComponent;
}());
exports.SokComponent = SokComponent;
//# sourceMappingURL=sok.component.js.map