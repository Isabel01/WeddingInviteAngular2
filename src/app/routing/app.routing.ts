import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponentInvite } from '../invite/app.invite';
import { AppComponentPageNotFound } from '../pageNotFound/app.pageNotFound';
import { AppComponentLogin } from '../login/app.login';
import { AppComponentGeneral } from '../general/app.general';
import { AppComponentDirections } from '../directions/app.directions';
import { AppComponentLabri } from '../labri/app.labri';
import { AppComponentRsvp } from '../rsvp/app.rsvp';
import { AppComponentWeddingParty } from '../weddingParty/app.weddingParty';
import { AppComponentAdmin } from '../admin/app.admin'

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AppComponentLogin },
  { path: 'invite', component: AppComponentInvite },
  { path: 'general', component: AppComponentGeneral },
  { path: 'directions', component: AppComponentDirections },
  { path: 'labri', component: AppComponentLabri },
  { path: 'rsvp', component: AppComponentRsvp },
  { path: 'weddingParty', component: AppComponentWeddingParty },
  { path: 'alpha', component: AppComponentAdmin},
  { path: '**', component: AppComponentPageNotFound }
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppModuleRoutes { }
