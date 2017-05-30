import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database/database";
import { Observable, Subscription, Observer } from "rxjs";

@Injectable()
export class UserService {
	loggedInUser;
	subscriptions : Subscription[] = [];
	userInformation : UserInformation;
	observers : Observer<UserInformation>[] = [];

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase
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
  }

  isLoggedIn() : boolean {
  	return this.loggedInUser ? true : false;
  }

  private _getUserInformation(){
  	return new Promise((resolve, reject) => {
	    if(this.loggedInUser) {

	      let userInformationObservable = this.db.object(`/invites/${this.loggedInUser.uid}`);

	      this.subscriptions.push(userInformationObservable.subscribe(userInfromation => {
              this.observers.forEach(observer => {
                  observer.next(userInfromation);
              });
              resolve(userInformationObservable);
	      }));

	    }

   	});

  }

  getUserInformation() : Observable<UserInformation> {
    return new Observable<UserInformation>(observer => {
      this.observers.push(observer);
    });
  }

  getGuests(guests) {

  	let userInformationObservable = this.db.object(`/invites/${guests}`);

  	this.subscriptions.push(userInformationObservable.subscribe(userInfromation => {
          this.userInformation = userInfromation;
    }));

  }

  cancelSubscriptions(){
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}

export interface UserInformation {
  guests : Array<Guest>
}

export interface Guest {
  name : string,
  surname : string
}
