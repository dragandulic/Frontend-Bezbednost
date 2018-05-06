import { Component, OnInit } from '@angular/core';
import { SelfSignedCertificateService } from '../../services/selfSignedCertificateService/self-signed-certificate.service';

@Component({
  selector: 'app-check-revocation',
  templateUrl: './check-revocation.component.html',
  styleUrls: ['./check-revocation.component.scss']
})
export class CheckRevocationComponent implements OnInit {

  serialnumber: any;
  poruka: any;
  poruka1: any;
  constructor(private SelfSignedCer: SelfSignedCertificateService) { }

  ngOnInit() {
  }

  checkRevoc(): void{

    this.SelfSignedCer.checkStatus(this.serialnumber)
    .subscribe(data => {this.poruka=data;
      console.log(this.poruka.message);
      this.poruka1=this.poruka.message;
    });

  }

}
