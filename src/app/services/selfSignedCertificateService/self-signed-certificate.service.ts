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

  getIssuers(keyStoreFile:any): Observable<any>{

    return this.http.get<any>('http://localhost:8085/certificates/getValidIssuers/'+keyStoreFile);

  }
  

  getSertificateById(id:any,keyStoreFile:any): Observable<any>{


    return this.http.get<any>('http://localhost:8085/certificates/getCertificateOfId/'+id);

  }

  addSignedSertiicate(sign:any,alias:any): Observable<any>{

    return this.http.post<any>('http://localhost:8085/certificates/signed/'+alias, sign, httpOptions);

  }

  addUserCertificate(sign: any,alias:any): Observable<any>{

    return this.http.post<any>('http://localhost:8085/certificates/usersigned', sign, httpOptions);

  }
  

  getCertificateById(id:any,keyStoreFile:any): Observable<any>{

    return this.http.get<any>('http://localhost:8085/certificates/getCertificate/'+id+'?keyStoreFile='+keyStoreFile);

  }

  checkStatus(id:any,keyStoreFile:any): Observable<any> {

    return this.http.get<any>('http://localhost:8085/certificates/checkStatus/'+id+'?keyStoreFile='+keyStoreFile);

  }

  revokeCerti(id:any,keyStoreFile:any): Observable<any> {

    return this.http.get<any>('http://localhost:8085/certificates/revokeCertificate/'+id+'?keyStoreFile='+keyStoreFile);

  }

}
