import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../../user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) { }

  registerUser (user: User): Observable<any>{

    return this.http.put<any>('http://localhost:8085/user/registration', user, httpOptions);

  }

  loginUser (user: User): Observable<any>{
    
    return this.http.post<any>('http://localhost:8085/user/logIn', user, httpOptions);

  }

  editUser(user: User): Observable<any>{
   
    return this.http.post<any>('http://localhost:8085/user/editUser', user, httpOptions);

  }

  editPassword(user: User): Observable<any>{
   
    return this.http.post<any>('http://localhost:8085/user/editPassword', user, httpOptions);

  }

  getUserOfId(id): Observable<any>{

    return this.http.get<any>('http://localhost:8085/user/getUserOfId/' + id);


  }

}
