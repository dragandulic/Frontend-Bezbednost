import { Component, OnInit } from '@angular/core';
import { SScertificate } from '../../SScertificate';
import { SelfSignedCertificateService } from '../../services/selfSignedCertificateService/self-signed-certificate.service';
import { SubjectIssuer } from '../../subjectIssuer';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signed-certificate',
  templateUrl: './signed-certificate.component.html',
  styleUrls: ['./signed-certificate.component.scss']
})
export class SignedCertificateComponent implements OnInit {

  subjectIssuer: any={};
  sscertificate: SScertificate[];
  issuers:any;
  ssc: SScertificate;
  issuer: any;
  signedSer: SubjectIssuer;
  public form: FormGroup;

  constructor(private selfSignedService: SelfSignedCertificateService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      organization: new FormControl('',[Validators.required]),
      state: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      serialnumber: new FormControl('',[Validators.required]),
      optionalCompanyName: new FormControl('',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('',[Validators.required])
    })

    this.selfSignedService.getIssuers().subscribe(data => this.issuers = data.issuers);
    console.log("ovo je ispisss osle");

  }

  functionAlias(value){
   //if(alias!="no valid issuers"){
    //this.issuer.issueralias = event.target.value;
    console.log(value);
    this.subjectIssuer.issueralias=value;
      
   
  //}
}

  addSignedSer(): void{
    let signedfields = this.form.value;
    

    this.selfSignedService.addSignedSertiicate(signedfields,this.subjectIssuer.issueralias)
    .subscribe(data => this.signedSer = data);
    location.reload();
    
  }

}
