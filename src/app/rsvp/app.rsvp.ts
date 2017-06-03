import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'rsvp',
  templateUrl: './app.rsvp.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentRsvp {
   guests = [];
   userInfo = {};

  constructor (public userService : UserService) {
    console.log("AppRsvp");
    //init guests

    userService.getUserInformation().subscribe(userInformation => {
      this.userInfo = userInformation;
      console.log(this.userService);
    });
   

  }
  
}