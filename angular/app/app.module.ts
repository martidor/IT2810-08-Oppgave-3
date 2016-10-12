import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { OversiktComponent } from './oversikt/oversikt.component';
import { SokComponent } from './sok/sok.component';
import { ProfilComponent } from './profil/profil.component';
import { LoggUtComponent } from './loggut/loggut.component';
import { RouterModule }   from '@angular/router';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
