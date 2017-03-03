import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: './app.login.html',
  styleUrls: [ '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../app.component.css']
})
export class AppComponentLogin {
  userName;
  password;
  constructor(private router: Router) { }

 authenticateUser() :void{
  	if (this.userName === "Bella") {
  		if(this.password === "Bella") {
  			console.log("user Authenticated");
        this.router.navigate(['/invite']);
  		}
  	}else {
  	  console.log("user NOT Authenticated");
    }
  }

  
}
