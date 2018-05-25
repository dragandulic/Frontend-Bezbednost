import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinService } from '../../services/logedIn/loggedin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userl: any = {};

  constructor(private userservice: UserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private loggedin: LoggedinService
    ) { }

  ngOnInit() {
  }


  login(): void{
    
    this.userservice.loginUser(this.userl)
    .subscribe(user => { this.userl = user;
             this.router.navigate(['/welcomepage']);
             this.loggedin.setLocalStore(user);

              },
              error => {
                console.log("neispravna lozinka");
              }
          
          );

  }

}
