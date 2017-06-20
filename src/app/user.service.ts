import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database/database";
import { Observable, Subscription, Observer } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class UserService {
	loggedInUser;
	subscriptions : Subscription[] = [];
	userInformation : UserInformation;
  userInformationAdmin : UserInformation;
	userInformationObservers : Observer<UserInformation>[] = [];
  userInformationObserversAdmin : Observer<UserInformation>[] = [];


  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private router: Router
  ) {

    afAuth.auth.onAuthStateChanged((user) => {
      if(user){
        this.loggedInUser = user;
        this._getUserInformation();
      }
      else{
        this.loggedInUser = undefined;
      }
    });

  }

  logIn(username : string , password : string) {
  	return new Promise((resolve, reject) => {
  		this.afAuth.auth.signInWithEmailAndPassword(username,password).then(user => {
     		this.loggedInUser = user;
     		resolve(this.loggedInUser);
   		}).catch(error=>{
   			reject(error);
     		console.log(error);
   		})
  	});
  }

  logOut() {
    this.cancelSubscriptions();
  	this.afAuth.auth.signOut();
  	this.loggedInUser = null;
    this.router.navigate(['/invite']);
  }

  isLoggedIn() : boolean {
  	return this.loggedInUser ? true : false;
  }

  private _getUserInformation(){
  	return new Promise((resolve, reject) => {
	    if(this.loggedInUser) {
	    try{

	      let userInformationObservable = this.db.object(`/invites/${this.loggedInUser.uid}`);

	      this.subscriptions.push(userInformationObservable.subscribe(userInfromation => {
              this.userInformationObservers.forEach(observer => {
                  observer.next(userInfromation);
              });
              this.userInformation = userInfromation;
              resolve(this.userInformation);
	      }))
	  	} catch(error) {
	  		reject(error);
	  	}

	    }

   	});

  }

  getUserInformation() : Observable<UserInformation> {
    return new Observable<UserInformation>(observer => {
      this.userInformationObservers.push(observer);
      observer.next(this.userInformation);
    });
  }

  cancelSubscriptions(){
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  saveUserInformation(){
    //TO DO add a promise for a callback
    let userInformationObservable = this.db.object(`/invites/${this.loggedInUser.uid}`);
    userInformationObservable.update(this.userInformation).then(()=> {
        console.log('Data Saved');
    }).catch(error => {
      console.log(error);
    })

  }

  addInvite(inviteCode: string, guests: Array<Guest> ) {

    let obj = {
      guests: guests
    };  

     let inviteObservable = this.db.list(`/invites`);
     inviteObservable.push(obj);
   }
     
}

export interface UserInformation {
  guests: Array<Guest>,
  kids: Array<Child>
}

export interface Guest {
  name : string,
  surname : string,
  rsvp : boolean
  accomodationOption : String,
  arrivalDate: String,
  departureDate: String,
  dietryPref: String
 
}

export interface Child {
  name : string,
  surname : string,
  age : string,
  gender: string
}
