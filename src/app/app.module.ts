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
import { AppComponentGeneral} from './general/app.general';
import { AppComponentDirections} from './directions/app.directions';
import { AppComponentLabri} from './labri/app.labri';
import { AppComponentRsvp} from './rsvp/app.rsvp';
import { AppComponentWeddingParty} from './weddingParty/app.weddingParty';
import { firebaseConfig } from "./../environments/firebase.config"
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserService } from './user.service';
import { MusicService } from './music.service';
import { AppComponentAdmin } from './admin/app.admin'

@NgModule({
  declarations: [
    AppComponent,
    AppComponentInvite,
    AppComponentPageNotFound,
    AppComponentLogin,
    AppComponentGeneral,
    AppComponentDirections,
    AppComponentLabri,
    AppComponentRsvp,
    AppComponentWeddingParty,
    AppComponentAdmin
],
  imports: [
    AppModuleRoutes,
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],

  providers: [UserService, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
