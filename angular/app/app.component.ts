import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
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
  <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
