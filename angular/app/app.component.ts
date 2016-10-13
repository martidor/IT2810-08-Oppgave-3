import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
            <ul class="nav navbar-nav navbar-right">
              <li [routerLinkActive]="['active']" class="active" role="presentation">
                <a [routerLink]="['/home']" class="navbar-brand" data-unsp-sanitized="clean">Stockwatch</a>
              </li>
            </ul>
                <button class="navbar-toggle collapsed" type=
                "button"><span class="sr-only">
                navigation</span><span class="icon-bar"></span><span class=
                "icon-bar"></span><span class="icon-bar"></span></button>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li [routerLinkActive]="['active']" class="active" role="presentation">
                    <a [routerLink]="['/oversikt']"  data-unsp-sanitized="clean"><span class="fa fa-area-chart"></span>Oversikt
                    </a>
                    </li>
                    <li [routerLinkActive]="['active']" class="" role="presentation">
                      <a [routerLink]="['/sok']"  data-unsp-sanitized="clean"><span class="fa fa-area-chart"></span>Søk
                      </a>
                    </li>
                    <li [routerLinkActive]="['active']" class="" role="presentation">
                        <a [routerLink]="['/profil']"  data-unsp-sanitized="clean"><span class="fa fa-area-chart"></span>Profil
                        </a>
                    </li>
                    <li [routerLinkActive]="['active']" class="" role="presentation">
                        <a [routerLink]="['/logginn']"  data-unsp-sanitized="clean"><span class="fa fa-area-chart"></span>Logg inn
                        </a>
                    </li>
                    <li [routerLinkActive]="['active']" class="" role="presentation">
                        <a [routerLink]="['/loggut']"  data-unsp-sanitized="clean"><span class="fa fa-area-chart"></span>Logg ut
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
