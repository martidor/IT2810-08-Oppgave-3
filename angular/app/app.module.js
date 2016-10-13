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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var oversikt_component_1 = require('./oversikt/oversikt.component');
var sok_component_1 = require('./sok/sok.component');
var profil_component_1 = require('./profil/profil.component');
var logginn_component_1 = require('./logginn/logginn.component');
var loggut_component_1 = require('./loggut/loggut.component');
var router_1 = require('@angular/router');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    { path: 'oversikt', component: oversikt_component_1.OversiktComponent },
                    { path: 'sok', component: sok_component_1.SokComponent },
                    { path: 'profil', component: profil_component_1.ProfilComponent },
                    { path: 'logginn', component: logginn_component_1.LoggInnComponent },
                    { path: 'loggut', component: loggut_component_1.LoggUtComponent },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                oversikt_component_1.OversiktComponent,
                sok_component_1.SokComponent,
                profil_component_1.ProfilComponent,
                logginn_component_1.LoggInnComponent,
                loggut_component_1.LoggUtComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map