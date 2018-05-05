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


@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    WelcomepageComponent,
    SelfSignedCertificateComponent,
    SignedCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SelfSignedCertificateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
