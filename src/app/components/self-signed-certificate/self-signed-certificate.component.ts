import { Component, OnInit } from '@angular/core';
import { SelfSignedCertificateService } from '../../services/selfSignedCertificateService/self-signed-certificate.service';
import { Subject } from '../../subject';

@Component({
  selector: 'app-self-signed-certificate',
  templateUrl: './self-signed-certificate.component.html',
  styleUrls: ['./self-signed-certificate.component.scss']
})
export class SelfSignedCertificateComponent implements OnInit {

  subject: any={};
  sub: Subject;


  constructor(private selfSignedService: SelfSignedCertificateService) { }

  ngOnInit() {
  }


  addSelfSigned(): void{

    this.selfSignedService.addSelfSignedCer(this.subject)
    .subscribe(data => this.sub=data);
    location.reload();
  }


}
