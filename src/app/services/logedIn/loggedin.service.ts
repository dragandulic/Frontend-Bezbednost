import { Injectable } from '@angular/core';
import { User } from '../../user';
import {LocalStorageService} from 'ngx-webstorage';
@Injectable()
export class LoggedinService {

  user: User;

  constructor(private localStorage: LocalStorageService){}

  setLocalStore(u){
    this.localStorage.store("loggedin",JSON.stringify(u));
  }

  getLocalStore(){
    var user = JSON.parse(this.localStorage.retrieve('loggedin'));
    return user;
    
  }

  delLocalStore(): void{
    this.localStorage.clear('loggedin');
  }

}
