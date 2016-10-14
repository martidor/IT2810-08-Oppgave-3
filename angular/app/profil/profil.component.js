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
var ProfilComponent = (function () {
    function ProfilComponent() {
    }
    ProfilComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            styleUrls: ['profil.component.css'],
            template: "\n\t<div id=\"profile\">\n\t\t<div id=\"profileimage\">\n\t\t\t<img alt=\"Avatar\" id=\"avatar\" src=\"http://s3.amazonaws.com/37assets/svn/765-default-avatar.png\" width=\"175\"/>\n\t\t</div>\n\t\t<div id=\"userprofile\">\n\t\t\t<table id=\"table\">\n\t\t\t\t<tr class=\"s0\">\n\t\t\t\t\t<td>Brukernavn:</td>\n\t\t\t\t\t<td id=\"username\">ola_nordmann_39</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Fornavn:</td>\n\t\t\t\t\t<td id=\"firstname\">Ola</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr class=\"s0\">\n\t\t\t\t\t<td>Etternavn:</td>\n\t\t\t\t\t<td id=\"lastname\">Nordmann</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td>Alder:</td>\n\t\t\t\t\t<td id=\"age\">39</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr class=\"s0\">\n\t\t\t\t\t<td>E-mail:</td>\n\t\t\t\t\t<td id=\"email\">olanordmann@email.no</td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t</div>\n\t\t<div id=\"edit\">\n\t\t\tE D I T\n\t\t\t// <img alt=\"Edit\" src=\"https://cdn4.iconfinder.com/data/icons/miu/22/editor_pencil_pen_edit_write_-512.png\" width=\"20\" height=\"20\"/>\n\t\t</div>\n\t\t<div id=\"bottom\">\n\t\t\t<div id=\"editprofile\">\n\t\t\t\t<form>\n\t\t\t\t\tSynlighets instillinger:\n\t\t\t\t\t<select>\n\t\t\t\t\t\t<option value=\"select\">Vis alt til bes\u00F8kende</option>\n\t\t\t\t\t\t<option value=\"other\">Begrenset synlighet, ingen e-mail eller alder</option>\n\t\t\t\t\t\t<option value=\"other\">Ingen synlighet til bes\u00F8kende</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t<Button type=\"submit\">\n\t\t\t\t\t\tSubmit\n\t\t\t\t\t</Button>\n\t\t\t\t</form>\n\t\t\t</div>\t\n\t\t\t<img alt=\"chart\" src=\"http://www.itjobswatch.co.uk/charts/daily-rate-trend.aspx?s=highcharts+js&l=uk\" />\n\t\t</div>\n\t</div>\n\t "
        }), 
        __metadata('design:paramtypes', [])
    ], ProfilComponent);
    return ProfilComponent;
}());
exports.ProfilComponent = ProfilComponent;
//# sourceMappingURL=profil.component.js.map