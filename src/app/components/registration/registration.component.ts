import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userr: any = {};

  constructor(private userService: UserServiceService,private router: Router) { }

  ngOnInit() {
  }

  register(): void {
    this.userr.role = "user";
    this.userService.registerUser(this.userr).
    subscribe(user => { this.userr = user;
     
      

       });

  }
}
