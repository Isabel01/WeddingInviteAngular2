import { Component } from '@angular/core';
import { UserService } from '../user.service';
import {MusicService, Song} from "../music.service";
import { Router} from '@angular/router';


@Component({
  selector: 'rsvp',
  templateUrl: './app.rsvp.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentRsvp {

   userInfo = {
   	guests: [],
   	kids: []
   };

   rsvpOptions = ["Attending", "Not Attending"];
   accomodationOptions = ["Camping", "Caravaning", "Shared Rooms", "Own Accommodation"];
   dietryPrefOptions = ["None", "Vegeterian"];
   arrivalOptions = ["Friday 30 March 2018", "Satrurday 31 March 2018"];
   departureOptions = ["Saturday 31 March 2018", "Sunday 1 April 2018", "Monday 2 April 2018"];
   genderOptions = ["MALE", "FEMALE"];
   modalGuest = {
   		name: '',
   		surname: '',
   		rsvp: false,
   		accomodationOption: "notYet",
   		dietryPref: "NONE",
   		arrivalDate: "notYet",
   		departureDate: "notYet"

   } ;

   child = {
   	name: "",
   	surname: "",
   	age: "",
   	gender: ""
   };
   error = false;
   alertMessage = "";
   done = false;
   childForModal = {
   	name: "",
   	surname: "",
   	age: "",
   	gender: ""
   };
   song = {
   	name: "",
   	artist: ""
   }

   songs : Song[]= [];


  constructor (public userService : UserService,public musicService : MusicService, private router: Router) {

    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }

    userService.getUserInformation().subscribe(userInformation => {
      if(userInformation) {
        this.userInfo = userInformation;
      }
    });

    musicService.getAllSongs().subscribe(songs => {
      console.log(songs);
      this.songs = songs;
    });

  }

  setGuestForModal(guest) :void {
  	this.modalGuest = guest;
  }

  rsvpOptionChosen(option) :void {
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
  	this.saveDataToDatabase();
  }

   accomodationOptionChosen(option) :void {
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
  		} else if(option === "Shared Rooms") {
  			this.modalGuest.accomodationOption = "BED";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Accomodation option saved successfully";
  		} else if(option === "Own Accommodation") {
  			this.modalGuest.accomodationOption = "OWN";
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Accomodation option saved successfully";
  		}
  	}
  	this.saveDataToDatabase();
  }

   dietryOptionChosen(option) :void {
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
  	this.saveDataToDatabase();
  }

  arrivalDateChosen(option) :void {
  	if (option) {
  			this.modalGuest.arrivalDate = option;
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Arrival date saved successfully";
  	}
    this.saveDataToDatabase();
  }

  departureDateChosen(option) :void {
  	if (option) {
  			this.modalGuest.departureDate = option;
  			this.error = false;
  			this.done = true;
  			this.alertMessage = "Departure date saved successfully";
  	}
  	this.saveDataToDatabase();
  }

  clearAlertMessage() :void {
  	this.error = false;
  	this.done = false;
  	this.alertMessage = "";
  }

  saveDataToDatabase(){
    this.userService.saveUserInformation();
  }

  saveChild() :void {
  	if(!this.child.name) {
  		this.error = true;
  		this.done = false;
  		this.alertMessage = "Please fill out the name of your child";
  	} else if(!this.child.surname) {
  		this.error = true;
  		this.done = false;
  		this.alertMessage = "Please fill out the surname of your child";
  	} else if(!this.child.age) {
  		this.error = true;
  		this.done = false;
  		this.alertMessage = "Please fill out the age of your child";
  	} else if(!this.child.gender) {
  		this.error = true;
  		this.done = false;
  		this.alertMessage = "Please select child's gender";
  	} else {
  		this.error = false;
  		this.done = true;

  		if(!this.userInfo.kids){
  		  this.userInfo.kids = [];
      }

  		this.userInfo.kids.push(this.child);
  		this.saveDataToDatabase();
  		this.alertMessage = "Child sucessfully added";
  		this.clearChild();
  	}
  }

  genderChosen(option) {
  	this.child.gender = option;
  }

  genderChosenForEdit(option) {
  	this.childForModal.gender = option;
  }
  clearChild(): void {
  	this.child.name  = "";
  	this.child.surname = "";
  	this.child.age = "";
  	this.child.gender = "";
  }

  setChildForModal(child) :void {
  	this.childForModal = child;
  }

  removeChild(child) :void{
  	//todo - remove correct child
    var index = this.userInfo.kids.indexOf(child);

    if (index > -1) {
        this.userInfo.kids.splice(index, 1);
    }
    this.saveDataToDatabase();
  	this.error = false;
  	this.done = true;
  	this.alertMessage = "Child list sucessfully updated";
  }

  editChild() :void{
  	this.saveDataToDatabase();
  	this.error = false;
  	this.done = true;
  	this.alertMessage = "Child sucessfully updated";
  }

  addSong() :void{
  	//save this.song
  	if(!this.song.name) {
  		this.error = true;
  		this.done = false;
  		this.alertMessage = "Please add a song name";
  	} else if(!this.song.artist) {
  		this.error = true;
  		this.done = false;
  		this.alertMessage = "Please add a song artist";
  	} else {
  		this.error = false;
  		this.done = true;
      this.musicService.addSong(this.song);
      this.song.name = "";
      this.song.artist = "";
  		this.alertMessage = "Song sucessfully Added";
  	}
  }

  saveGuestDetails() :void {
    if(!this.modalGuest.name) {
      this.error = true;
      this.done = false;
      this.alertMessage = "Please enter a name for your guest";
    } else if(!this.modalGuest.surname) {
       this.error = true;
      this.done = false;
      this.alertMessage = "Please enter a surname for your guest";
    } else {
      this.saveDataToDatabase();
      this.error = false;
      this.done = true;
      this.alertMessage = "Guest saved successfully";
    }

  }

}
