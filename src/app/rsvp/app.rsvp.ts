import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'rsvp',
  templateUrl: './app.rsvp.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentRsvp {
   guests = [];

  constructor () {
    console.log("AppRsvp");
    //init guests
   

  }
  
}