import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
	loggedInUser;

  constructor(public afAuth: AngularFireAuth) { 
	afAuth.auth.onAuthStateChanged(function(user) {
		if(user){
			this.loggedInUser = user;
		}
		else{
			this.loggedInUser = undefined;
		}
	});
  }

  logIn(username : string , password : string) {

  	this.afAuth.auth.signInWithEmailAndPassword(username,password).then(user => {
     	this.loggedInUser = user;
   	}).catch(error=>{
     	console.log(error);
   	})

  }

  logOut() {
  	this.afAuth.auth.signOut();
  	this.loggedInUser = null;
  }

  isLoggedIn() : boolean {
  	return this.loggedInUser ? true : false;
  }

}
