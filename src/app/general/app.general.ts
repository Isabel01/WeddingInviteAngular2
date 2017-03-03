import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'general',
  templateUrl: './app.general.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentGeneral {
   guests = [];

  constructor () {
    console.log("AppGeneral");
    //init guests
   

  }
  
}