import { Component } from  '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'navigation',
  /*templateUrl: 'nav.component.html',*/
  template: `
  <nav>
    <a>Navigation:</a>
    <ul>
      <li><a [routerLink]="['oversikt']">Oversikt</a></li>
      <li><a [routerLink]="['sok']">Søk</a></li>
      <li><a [routerLink]="['profil']">Profile</a></li>
      <li><a [routerLink]="['loggut']">Logg ut</a></li>
    </ul>
  </nav>
  `,
  styleUrls: ['nav.component.css']
})
export class NavComponent {

}
