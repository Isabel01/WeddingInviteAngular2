import { Component } from '@angular/core';
import { UserService, UserInformation } from "../user.service"
import { Router} from '@angular/router';

@Component({
  selector: 'invite',
  templateUrl: './app.invite.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentInvite {
   guests = [];
   text: any = { "Weeks": "Weeks", 
    "Days": "Days", "Hours": "Hours",
     Minutes: "Minutes", "Seconds": "Seconds",
    "MilliSeconds":"MilliSeconds" };

  constructor (public userService : UserService, private router: Router) {
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    console.log("AppInvite");
    //init guests
    //this.userInfo = this.userService._getUserInformation().then(guest => {
    //    this.userService.getGuests(guest.guests);
    //});

    userService.getUserInformation().subscribe(userInformation => {
      this.guests = [];
      userInformation.guests.forEach(guest => {
        this.guests.push(guest.name);
      });
    });



  }

  grammerSymbolAnd(index) :boolean {
    //console.log("index " + index)
      if (this.guests.length === 1) {
        return false;
      } else if (this.guests.length == 2 && index == 0) {
         return true;
      } else if (this.guests.length > 2 && index == this.guests.length-1) {
        //console.log(this.guests.length + " index: " + index);
        return true;
      }
      return false;
   }
}
