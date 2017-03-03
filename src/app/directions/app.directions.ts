import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'directions',
  templateUrl: './app.directions.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentDirections {
   guests = [];

  constructor () {
    console.log("AppDirections");
    //init guests
   

  }
  
}