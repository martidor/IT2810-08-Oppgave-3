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
var LoggInnComponent = (function () {
    function LoggInnComponent() {
    }
    LoggInnComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            styleUrls: ['logginn.component.css'],
            template: "\n\t<div class=\"logginn\">\n\n\t\t<h2>Logg inn:</h2>\n\t\t<button ng-href=\"#\">Logg inn med facebook</button>\n\t</div>\n\n\t "
        }), 
        __metadata('design:paramtypes', [])
    ], LoggInnComponent);
    return LoggInnComponent;
}());
exports.LoggInnComponent = LoggInnComponent;
//# sourceMappingURL=logginn.component.js.map