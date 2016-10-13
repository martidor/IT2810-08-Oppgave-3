import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { OversiktComponent } from './oversikt/oversikt.component';
import { SokComponent } from './sok/sok.component';
import { ProfilComponent } from './profil/profil.component';
import { LoggUtComponent } from './loggut/loggut.component';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
@NgModule({
  imports: [
    BrowserModule,
  /*RouterModule.forRoot([
    { path: '/oversikt', component: OversiktComponent },
      { path: '/sok', component: SokComponent },
      { path: 'profil', component: ProfilComponent },
      { path: '/loggut', component: LoggUtComponent },
      { path: '/nav', component: NavComponent }
    ])*/
  ],
  declarations: [
    AppComponent,
    /*NavComponent,
    OversiktComponent,
    SokComponent,
    ProfilComponent,
    LoggUtComponent*/

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
