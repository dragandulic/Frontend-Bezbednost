import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinService } from '../../services/logedIn/loggedin.service';
import { UserServiceService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  constructor(private loggedin: LoggedinService,
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserServiceService) { }

  ngOnInit() {
  }

  logoutFun(): void{
    this.router.navigate(['/firstpage']);
    this.loggedin.delLocalStore();
  }

}
