import { Component } from '@angular/core';
import { UserService, UserInformation } from "../user.service"
import { Router} from '@angular/router';

@Component({
  selector: 'labri',
  templateUrl: './app.labri.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentLabri {
   guests = [];

  constructor (public userService : UserService, private router: Router) {
    console.log("AppLabri");
      if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
  
}