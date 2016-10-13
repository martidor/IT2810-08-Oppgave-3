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
            template: "\n  <nav class=\"navbar navbar-default\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li [routerLinkActive]=\"['active']\" class=\"active\" role=\"presentation\">\n                <a [routerLink]=\"['/home']\" class=\"navbar-brand\" data-unsp-sanitized=\"clean\">Stockwatch</a>\n              </li>\n            </ul>\n                <button class=\"navbar-toggle collapsed\" type=\n                \"button\"><span class=\"sr-only\">\n                navigation</span><span class=\"icon-bar\"></span><span class=\n                \"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n            </div>\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li [routerLinkActive]=\"['active']\" class=\"active\" role=\"presentation\">\n                    <a [routerLink]=\"['/oversikt']\"  data-unsp-sanitized=\"clean\"><span class=\"fa fa-area-chart\"></span>Oversikt\n                    </a>\n                    </li>\n                    <li [routerLinkActive]=\"['active']\" class=\"\" role=\"presentation\">\n                      <a [routerLink]=\"['/sok']\"  data-unsp-sanitized=\"clean\"><span class=\"fa fa-area-chart\"></span>S\u00F8k\n                      </a>\n                    </li>\n                    <li [routerLinkActive]=\"['active']\" class=\"\" role=\"presentation\">\n                        <a [routerLink]=\"['/profil']\"  data-unsp-sanitized=\"clean\"><span class=\"fa fa-area-chart\"></span>Profil\n                        </a>\n                    </li>\n                    <li [routerLinkActive]=\"['active']\" class=\"\" role=\"presentation\">\n                        <a [routerLink]=\"['/logginn']\"  data-unsp-sanitized=\"clean\"><span class=\"fa fa-area-chart\"></span>Logg inn\n                        </a>\n                    </li>\n                    <li [routerLinkActive]=\"['active']\" class=\"\" role=\"presentation\">\n                        <a [routerLink]=\"['/loggut']\"  data-unsp-sanitized=\"clean\"><span class=\"fa fa-area-chart\"></span>Logg ut\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n  <router-outlet></router-outlet>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map