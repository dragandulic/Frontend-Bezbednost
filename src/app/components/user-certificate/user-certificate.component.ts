import { Component, OnInit } from '@angular/core';
import { SelfSignedCertificateService } from '../../services/selfSignedCertificateService/self-signed-certificate.service';
import { SScertificate } from '../../SScertificate';
import { SubjectIssuer } from '../../subjectIssuer';

@Component({
  selector: 'app-user-certificate',
  templateUrl: './user-certificate.component.html',
  styleUrls: ['./user-certificate.component.scss']
})
export class UserCertificateComponent implements OnInit {

  subjectIssuer: any={};
  sscertificate: SScertificate[];
  issuer: any;
  ssc: SScertificate;
  signedSer: SubjectIssuer;
  constructor(private selfSignedService: SelfSignedCertificateService) { }

  ngOnInit() {
/*
    this.selfSignedService.getIssuers()
    .subscribe(data => this.sscertificate = data);
*/
  }

  selectChangeHandler (event : any){

    this.issuer = event.target.value;
/*
    this.selfSignedService.getSertificateById(this.issuer)
    .subscribe(data =>{ this.ssc=  data;
      this.subjectIssuer.issueralias = this.ssc.subjectalias;
      this.subjectIssuer.issuerpassword = this.ssc.subjpassword;
      console.log(this.subjectIssuer.issueralias);
      console.log(this.subjectIssuer.issuerpassword);
    });
    */
  }
/*

  addUserCer(): void{

    this.selfSignedService.addUserCertificate(this.subjectIssuer)
    .subscribe(data => this.signedSer = data);
    location.reload();
  }
*/
}
