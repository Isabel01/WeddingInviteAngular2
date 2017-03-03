import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppComponentInvite } from './invite/app.invite';
import { AppComponentPageNotFound } from './pageNotFound/app.pageNotFound';
import { AppComponentLogin } from './login/app.login';
import { AppModuleRoutes } from './routing/app.routing';





@NgModule({
  declarations: [
    AppComponent,
    AppComponentInvite,
    AppComponentPageNotFound,
    AppComponentLogin,
  ],
  imports: [
    AppModuleRoutes,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
