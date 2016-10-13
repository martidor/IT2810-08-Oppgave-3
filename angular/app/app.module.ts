import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HomeComponent } from './home/home.component';
import { OversiktComponent } from './oversikt/oversikt.component';
import { SokComponent } from './sok/sok.component';
import { ProfilComponent } from './profil/profil.component';
import { LoggInnComponent } from './logginn/logginn.component';
import { LoggUtComponent } from './loggut/loggut.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    BrowserModule,
  RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'oversikt', component: OversiktComponent },
      { path: 'sok', component: SokComponent },
      { path: 'profil', component: ProfilComponent },
      { path: 'logginn', component: LoggInnComponent },
      { path: 'loggut', component: LoggUtComponent },
    /*  { path: '', component: AppComponent }*/
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    OversiktComponent,
    SokComponent,
    ProfilComponent,
    LoggInnComponent,
    LoggUtComponent

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
