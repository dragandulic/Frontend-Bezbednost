import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signed-certificate',
  templateUrl: './signed-certificate.component.html',
  styleUrls: ['./signed-certificate.component.scss']
})
export class SignedCertificateComponent implements OnInit {

  subjectIssuer: any={};

  constructor() { }

  ngOnInit() {
  }

}
