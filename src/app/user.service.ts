import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database/database";
import { Subscription } from "rxjs";
import {subscribeOn} from "rxjs/operator/subscribeOn";

@Injectable()
export class UserService {
	loggedInUser;
	subscriptions : Subscription[] = [];

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {

    afAuth.auth.onAuthStateChanged((user) => {
      if(user){
        this.loggedInUser = user;
        this.getUserInformation();
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

  getUserInformation(){
    if(this.loggedInUser) {

      let userInformationObservable = this.db.object(`/invites/${this.loggedInUser.uid}`);

      this.subscriptions.push(userInformationObservable.subscribe(userInfromation => {
          console.log("User Info",userInfromation);
      }));

    }
  }

  cancelSubscriptions(){
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

}

