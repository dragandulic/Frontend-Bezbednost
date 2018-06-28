import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggedinService } from '../../services/logedIn/loggedin.service';
import { UserServiceService } from '../../services/userService/user-service.service';
import { User } from '../../user';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {

  user: User;

  constructor(private loggedin: LoggedinService,private localStorage: LocalStorageService,
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserServiceService) { }

  ngOnInit() {
    this.user=this.getLocalStore();
    
  }

  logoutFun(): void{
    this.router.navigate(['/firstpage']);
    this.loggedin.delLocalStore();
  }

  getLocalStore(){
    var user = JSON.parse(this.localStorage.retrieve('loggedin'));
    return user;
    
  }

}
