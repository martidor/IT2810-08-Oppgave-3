import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { OversiktComponent } from './oversikt/oversikt.component';
import { SokComponent } from './sok/sok.component';
import { ProfilComponent } from './profil/profil.component';
import { LoggInnComponent } from './logginn/logginn.component';
import { LoggUtComponent } from './loggut/loggut.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
  RouterModule.forRoot([
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
    OversiktComponent,
    SokComponent,
    ProfilComponent,
    LoggInnComponent,
    LoggUtComponent

  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
