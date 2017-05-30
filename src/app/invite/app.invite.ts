import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService} from "../user.service"

@Component({
  selector: 'invite',
  templateUrl: './app.invite.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentInvite {
   guests = [];
   userInfo;

  constructor (public userService : UserService) {
    console.log("AppInvite");
    //init guests
    this.guests = ['Hanrich', 'Isabel', 'griet'];
    //this.userInfo = this.userService.getUserInformation().then(guest => {
    //    this.userService.getGuests(guest.guests);
    //});
    


  }

  grammerSymbolAnd(index) :boolean {
    console.log("index " + index)
      if (this.guests.length === 1) {
        return false;
      }
      if (this.guests.length === 2 && index == 1) {
        return true;
      }
      if (this.guests.length > 2 && index == this.guests.length-1) {
        console.log(this.guests.length + " index: " + index);
        return true;
      }
      return false;
   }



  
}