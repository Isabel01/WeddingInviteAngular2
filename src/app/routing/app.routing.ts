import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppComponentInvite } from '../invite/app.invite';
import { AppComponentPageNotFound } from '../pageNotFound/app.pageNotFound';
import { AppComponentLogin } from '../login/app.login';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: AppComponentLogin },
  { path: 'invite', component: AppComponentInvite },
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
