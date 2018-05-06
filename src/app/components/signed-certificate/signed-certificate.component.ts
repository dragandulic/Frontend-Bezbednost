import { Component, OnInit } from '@angular/core';
import { SScertificate } from '../../SScertificate';
import { SelfSignedCertificateService } from '../../services/selfSignedCertificateService/self-signed-certificate.service';
import { SubjectIssuer } from '../../subjectIssuer';

@Component({
  selector: 'app-signed-certificate',
  templateUrl: './signed-certificate.component.html',
  styleUrls: ['./signed-certificate.component.scss']
})
export class SignedCertificateComponent implements OnInit {

  subjectIssuer: any={};
  sscertificate: SScertificate[];
  ssc: SScertificate;
  issuer: any;
  signedSer: SubjectIssuer;

  constructor(private selfSignedService: SelfSignedCertificateService) { }

  ngOnInit() {

    this.selfSignedService.getIssuer()
    .subscribe(data => this.sscertificate = data);

  }

  selectChangeHandler (event : any){

    this.issuer = event.target.value;

    this.selfSignedService.getSertificateById(this.issuer)
    .subscribe(data =>{ this.ssc=  data;
      this.subjectIssuer.issueralias = this.ssc.subjectalias;
      this.subjectIssuer.issuerpassword = this.ssc.subjpassword;
      console.log(this.subjectIssuer.issueralias);
      console.log(this.subjectIssuer.issuerpassword);
    });
  }


  addSignedSer(): void{

    this.selfSignedService.addSignedSertiicate(this.subjectIssuer)
    .subscribe(data => this.signedSer = data);
    //location.reload();
  }

}
