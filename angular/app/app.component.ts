import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-default">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand" data-unsp-sanitized="clean" href=
                "/">Stockwatch</a><button class="navbar-toggle collapsed" type=
                "button"><span class="sr-only">
                navigation</span><span class="icon-bar"></span><span class=
                "icon-bar"></span><span class="icon-bar"></span></button>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active" role="presentation">
                        <a data-unsp-sanitized="clean" href=
                        "/oversikt"><span class="fa fa-area-chart"></span>
                        <!-- react-text: 16 --> Oversikt
                        <!-- /react-text --></a>
                    </li>
                    <li class="" role="presentation">
                        <a data-unsp-sanitized="clean" href="/sok"><span class=
                        "fa fa-search"></span><!-- react-text: 20 --> Søk
                        <!-- /react-text --></a>
                    </li>
                    <li class="" role="presentation">
                        <a data-unsp-sanitized="clean" href=
                        "/profil"><span class="fa fa-user"></span>
                        <!-- react-text: 24 --> Profil<!-- /react-text --></a>
                    </li>
                    <li class="" role="presentation">
                        <a data-unsp-sanitized="clean" href=
                        "/logginn"><span class="fa fa-sign-in"></span>
                        <!-- react-text: 28 --> Logg inn
                        <!-- /react-text --></a>
                    </li>
                    <li class="" role="presentation">
                        <a data-unsp-sanitized="clean" href="/loggut" role=
                        "button"><span class="fa fa-sign-out"></span>
                        <!-- react-text: 32 --> Logg ut<!-- /react-text --></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent { }
