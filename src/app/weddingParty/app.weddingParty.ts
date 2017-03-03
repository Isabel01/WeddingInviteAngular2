import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'weddingParty',
  templateUrl: './app.weddingParty.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentWeddingParty {
   guests = [];

  constructor () {
    console.log("AppWeddingParty");
    //init guests
   

  }
  
}