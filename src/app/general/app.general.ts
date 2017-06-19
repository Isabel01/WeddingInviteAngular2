import { Component } from '@angular/core';
import { UserService, UserInformation } from "../user.service"
import { Router} from '@angular/router';

@Component({
  selector: 'general',
  templateUrl: './app.general.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentGeneral {
guests = [];
  constructor (public userService : UserService, private router: Router) {
    
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    console.log("AppGeneral");
  }
  
}