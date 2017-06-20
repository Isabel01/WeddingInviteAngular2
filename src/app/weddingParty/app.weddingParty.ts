import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'weddingParty',
  templateUrl: './app.weddingParty.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class  AppComponentWeddingParty {
   guests = [];

  constructor (public userService : UserService,private router: Router) {
    console.log("AppWeddingParty");
    if (!this.userService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
   

  }
  
}