import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../user.service';

@Component({
  selector: 'login',
  templateUrl: './app.login.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class AppComponentLogin {
  userName;
  password;
  error;
  constructor(private router: Router,public afAuth: AngularFireAuth,public userService : UserService) { }

 authenticateUser() :void {

     this.userService.logIn(this.userName, this.password).then(() => {
       this.router.navigate(['/invite']);
     }).catch(error => {
         this.error = error.message;
     });
  }
  
}
