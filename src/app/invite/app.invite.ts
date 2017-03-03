import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
   moduleId: module.id,
  selector: 'invite',
  templateUrl: './app.invite.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentInvite {
  userName;
  password;

  constructor () {
    console.log("AppInvite");

  }

 authenticateUser() :void{
  	if (this.userName === "Bella") {
  		if(this.password === "Bella") {
  			console.log("userAuthenticated");
  		}
  	}
  	console.log("userAuthenticated 	NOT");
  }

  
}