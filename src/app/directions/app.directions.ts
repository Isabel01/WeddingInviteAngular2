import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService, UserInformation } from "../user.service"
import { Router} from '@angular/router';

@Component({
  selector: 'directions',
  templateUrl: './app.directions.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentDirections {
   guests = [];

  constructor (public userService : UserService, private router: Router) {
    console.log("AppDirections");
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
   

  }
  
}