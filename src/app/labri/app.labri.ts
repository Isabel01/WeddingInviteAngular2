import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'labri',
  templateUrl: './app.labri.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentLabri {
   guests = [];

  constructor () {
    console.log("AppLabri");
    //init guests
  }
  
}