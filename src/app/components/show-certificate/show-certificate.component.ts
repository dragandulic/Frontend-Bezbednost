import { Component, OnInit } from '@angular/core';
import { SelfSignedCertificateService } from '../../services/selfSignedCertificateService/self-signed-certificate.service';
import { Certificate } from 'tls';





@Component({
  selector: 'app-show-certificate',
  templateUrl: './show-certificate.component.html',
  styleUrls: ['./show-certificate.component.scss']
})
export class ShowCertificateComponent implements OnInit {

  serialnumber: any;
  keyStoreFile:any;
  response: any;
  certificate: Certificate;
  
  

  constructor(private selfSignedCer: SelfSignedCertificateService) { }

  ngOnInit() {
  }


  getCer(): void{

    this.selfSignedCer.getCertificateById(this.serialnumber,this.keyStoreFile)
    .subscribe(data =>{ this.certificate = data.certificate;
                      
     
     
     console.log(this.certificate);
    });

  }

}
