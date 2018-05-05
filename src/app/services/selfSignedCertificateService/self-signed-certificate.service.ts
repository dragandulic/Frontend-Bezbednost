import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from '../../subject';
import { SubjectIssuer } from '../../subjectIssuer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SelfSignedCertificateService {

  constructor(private http: HttpClient) { }


  addSelfSignedCer(sub: Subject): Observable<any>{

    return this.http.post<any>('http://localhost:8085/certificates/selfsigned', sub, httpOptions);

  }

  getIssuer(): Observable<any>{

    return this.http.get<any>('http://localhost:8085/certificates/getValidCertificates');

  }
  

  getSertificateById(id): Observable<any>{


    return this.http.get<any>('http://localhost:8085/certificates/getCertificateOfId/'+id);

  }

  addSignedSertiicate(sign: SubjectIssuer): Observable<any>{

    return this.http.post<any>('http://localhost:8085/certificates/signed', sign, httpOptions);

  }

  addUserCertificate(sign: SubjectIssuer): Observable<any>{

    return this.http.post<any>('http://localhost:8085/certificates/usersigned', sign, httpOptions);

  }
  
}
