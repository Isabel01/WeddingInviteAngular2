import { Component } from '@angular/core';
import { UserService, UserInformation } from "../user.service"
import { Router} from '@angular/router';

@Component({
  selector: 'alpha',
  templateUrl: './app.admin.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentAdmin {
  guest = {
  	accomodationOption : "notYet",
  	arrivalDate: "notYet",
  	departureDate: "notYet",
  	dietryPref: "notYet",
  	name: "",
  	surname: "",
  	rsvp: "notYet"
  };
  guests = [];
  error = false;
  alertMessage = "";
  done = false;
  inviteCode = "";
  guestList;
  guestListGuests = [];

  constructor (public userService : UserService, private router: Router) {
    
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    console.log("AppAdmin");
    this.getAllGuests().then(guestList => {
        this.getAllGuestData(guestList).then();
    });
  }

  addGuest(): void {
  	if(!this.guest.name) {
  		this.done = false;
  		this.error = true;
  		this.alertMessage = "Please enter guest name";
  	} else if(!this.guest.surname) {
  		this.done = false;
  		this.error = true;
  		this.alertMessage = "Please enter guest surname";
  	} else {
  		this.done = true;
  		this.error = false;
  		this.guests.push(this.guest);
  		this.guest = {
		  	accomodationOption : "notYet",
		  	arrivalDate: "notYet",
		  	departureDate: "notYet",
		  	dietryPref: "notYet",
		  	name: "",
		  	surname: "",
		  	rsvp: "notYet"
		 };
  		this.alertMessage = "Guest added";
  	}
  }

  clearAlertMessage() :void{
  	this.alertMessage="";
  	this.done = false;
  	this.error = false;
  }
  
  addInviteCode() :void{
  	if(!this.inviteCode) {
  		this.done = false;
  		this.error = true;
  		this.alertMessage = "Please enter a invite code";
  	} else {
  		this.done = true;
  		this.error = false;
  		this.alertMessage = "Invite code added";
  	}
  }

  saveInvite() :void{
  	this.userService.addInvite(this.inviteCode, this.guests);
  }

  getAllGuests(){
     return new Promise((resolve) => {
      this.userService.getAllGuests().subscribe(invites => {
        if(invites) {
          this.guestList = invites;
          resolve( this.guestList );
        } else {
          console.log("invites failed");
        }
      }); 
    });
  }

  getAllGuestData(guestListData){
    return new Promise((resolve) => {
      for (let invite of guestListData) {
        this.guestListGuests.concat(invite.guests);
      }
      resolve(this.guestListGuests);
      console.log(this.guestListGuests)
      return this.guestListGuests;
    });
  }

  
}
