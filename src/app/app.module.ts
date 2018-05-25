import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { SubjectComponent } from './components/subject/subject.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

import { SelfSignedCertificateComponent } from './components/self-signed-certificate/self-signed-certificate.component';
import { SelfSignedCertificateService } from './services/selfSignedCertificateService/self-signed-certificate.service';
import { SignedCertificateComponent } from './components/signed-certificate/signed-certificate.component';
import { UserCertificateComponent } from './components/user-certificate/user-certificate.component';
import { ShowCertificateComponent } from './components/show-certificate/show-certificate.component';
import { CheckRevocationComponent } from './components/check-revocation/check-revocation.component';
import { RevokeCertificateComponent } from './components/revoke-certificate/revoke-certificate.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserServiceService } from './services/userService/user-service.service';
import { LoggedinService } from './services/logedIn/loggedin.service';
import { Ng2Webstorage } from 'ngx-webstorage';
import { EditUserComponent } from './components/edit-user/edit-user.component';



@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    WelcomepageComponent,
    SelfSignedCertificateComponent,
    SignedCertificateComponent,
    UserCertificateComponent,
    ShowCertificateComponent,
    CheckRevocationComponent,
    RevokeCertificateComponent,
    FirstpageComponent,
    LoginComponent,
    RegistrationComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2Webstorage
  ],
  providers: [
    SelfSignedCertificateService,UserServiceService,LoggedinService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
