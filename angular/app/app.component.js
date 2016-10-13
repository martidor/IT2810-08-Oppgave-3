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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n  <nav class=\"navbar navbar-default\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <a class=\"navbar-brand\" data-unsp-sanitized=\"clean\" href=\n                \"/home\">Stockwatch</a><button class=\"navbar-toggle collapsed\" type=\n                \"button\"><span class=\"sr-only\">\n                navigation</span><span class=\"icon-bar\"></span><span class=\n                \"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n            </div>\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"active\" role=\"presentation\">\n                        <a data-unsp-sanitized=\"clean\" href=\n                        \"/oversikt\"><span class=\"fa fa-area-chart\"></span>\n                        <!-- react-text: 16 --> Oversikt\n                        <!-- /react-text --></a>\n                    </li>\n                    <li class=\"\" role=\"presentation\">\n                        <a data-unsp-sanitized=\"clean\" href=\"/sok\"><span class=\n                        \"fa fa-search\"></span><!-- react-text: 20 --> S\u00F8k\n                        <!-- /react-text --></a>\n                    </li>\n                    <li class=\"\" role=\"presentation\">\n                        <a data-unsp-sanitized=\"clean\" href=\n                        \"/profil\"><span class=\"fa fa-user\"></span>\n                        <!-- react-text: 24 --> Profil<!-- /react-text --></a>\n                    </li>\n                    <li class=\"\" role=\"presentation\">\n                        <a data-unsp-sanitized=\"clean\" href=\n                        \"/logginn\"><span class=\"fa fa-sign-in\"></span>\n                        <!-- react-text: 28 --> Logg inn\n                        <!-- /react-text --></a>\n                    </li>\n                    <li class=\"\" role=\"presentation\">\n                        <a data-unsp-sanitized=\"clean\" href=\"/loggut\" role=\n                        \"button\"><span class=\"fa fa-sign-out\"></span>\n                        <!-- react-text: 32 --> Logg ut<!-- /react-text --></a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n  <router-outlet></router-outlet>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map