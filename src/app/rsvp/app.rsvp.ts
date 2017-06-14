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
   userInfo = {
   	guests: []
   };
   rsvpOptions = ["Attending", "Not Attending"];
   accomodationOptions = ["Camping", "Caravaning", "Shared rooms", "Own accomodation"];
   dietryPrefOptions = ["None", "Vegeterian"];
   arrivalOptions = ["Friday 30 March 2018", "Satrurday 31 March 2018"];
   departureOptions = ["Saturday 31 March 2018", "Sunday 1 April 2018", "Monday 2 April 2018"];
   modalGuest = {
   		name: '',
   		surname: '',
   		rsvp: false,
   		accomodationOption: "notYet",
   		dietryPref: "NONE",
   		arrivalDate: "notYet",
   		departureDate: "notYet"

   } ;
   error = false;
   alertMessage = "";
   done = false;


  constructor (public userService : UserService) {
    console.log("AppRsvp");
    //init guests

    userService.getUserInformation().subscribe(userInformation => {
      this.userInfo = userInformation;
      console.log(this.userService);
    });
  }

  setGuestForModal(guest) :void {
  	this.modalGuest = guest;
  }

  rsvpOptionChosen(option) :void {
  	//TODO - update to DB
  	if (option) {
  		if(option === "Attending") {
  			this.modalGuest.rsvp = true;
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "RSVP status updated successfully";
  		} else if (option === "Not Attending") {
  			this.modalGuest.rsvp = false;
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "RSVP status updated successfully";
  		}
  	}
  }

   accomodationOptionChosen(option) :void {
  	//TODO - update to DB
  	if (option) {
  		if(option === "Camping") {
  			this.modalGuest.accomodationOption = "CAMP";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Accomodation option saved successfully";
  		} else if(option === "Caravaning") {
  			this.modalGuest.accomodationOption = "CARAVAN";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Accomodation option saved successfully";
  		} else if(option === "Shared rooms") {
  			this.modalGuest.accomodationOption = "BED";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Accomodation option saved successfully";
  		} else if(option === "Own accomodation") {
  			this.modalGuest.accomodationOption = "OWN";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Accomodation option saved successfully";
  		}
  	}
  }

   dietryOptionChosen(option) :void {
  	//TODO - update to DB
  	if (option) {
  		if(option === "None") {
  			this.modalGuest.dietryPref = "NONE";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Dietry option saved successfully";
  		} else if(option === "Vegeterian") {
  			this.modalGuest.dietryPref = "VEG";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Dietry option saved successfully";
  		} 
  	}
  }

  arrivalDateChosen(option) :void {
  	//TODO - update to DB
  	if (option) {
  			this.modalGuest.arrivalDate = option;
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Arrival date saved successfully";
  	}
  }

  departureDateChosen(option) :void {
  	//TODO - update to DB
  	if (option) {
  			this.modalGuest.departureDate = option;
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Departure date saved successfully";
  	}
  }

  clearAlertMessage() :void {
  	this.error = false;
  	this.done = false;
  	this.alertMessage = "";
  }

}