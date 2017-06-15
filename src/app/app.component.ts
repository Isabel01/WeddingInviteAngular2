import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ '../../node_modules/bootstrap/dist/css/bootstrap.min.css', './app.component.css']
})
export class AppComponent {
	validSession;

	constructor(public userService : UserService,private router: Router) {

	}

   logOut() {
     this.userService.logOut();
     this.router.navigate(['/login']);
   }
}
