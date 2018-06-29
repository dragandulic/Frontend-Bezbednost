import { Component, OnInit } from '@angular/core';
import { SelfSignedCertificateService } from '../../services/selfSignedCertificateService/self-signed-certificate.service';

@Component({
  selector: 'app-revoke-certificate',
  templateUrl: './revoke-certificate.component.html',
  styleUrls: ['./revoke-certificate.component.scss']
})
export class RevokeCertificateComponent implements OnInit {

  serialnumber: any;
  poruka: any;
  poruka1: any;
  keyStoreFile:any;
  constructor(private SelfSignedCer: SelfSignedCertificateService) { }

  ngOnInit() {
  }

  revokeCert(): void{

    this.SelfSignedCer.revokeCerti(this.serialnumber,this.keyStoreFile)
    .subscribe(data => {this.poruka=data;
      this.poruka1=this.poruka.message;
    });

  }


}
