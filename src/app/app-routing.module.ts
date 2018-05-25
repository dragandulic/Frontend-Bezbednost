import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { SelfSignedCertificateComponent } from './components/self-signed-certificate/self-signed-certificate.component';
import { SignedCertificateComponent } from './components/signed-certificate/signed-certificate.component';
import { UserCertificateComponent } from './components/user-certificate/user-certificate.component';
import { ShowCertificateComponent } from './components/show-certificate/show-certificate.component';
import { CheckRevocationComponent } from './components/check-revocation/check-revocation.component';
import { RevokeCertificateComponent } from './components/revoke-certificate/revoke-certificate.component';
import { FirstpageComponent } from './components/firstpage/firstpage.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


const routes: Routes = [

  
  { path: '', redirectTo: '/firstpage', pathMatch: 'full'},
  { path: 'firstpage', component: FirstpageComponent,
      children:[
        {path: 'login', component: LoginComponent},
        {path: 'registration', component: RegistrationComponent}
      ]
  },
  { path: 'welcomepage', component: WelcomepageComponent,
      children:[
        {path: 'selfSigned', component: SelfSignedCertificateComponent},
        {path: 'signedCer', component: SignedCertificateComponent},
        {path: 'userCer', component: UserCertificateComponent},
        {path: 'showCer', component: ShowCertificateComponent},
        {path: 'checkRev', component: CheckRevocationComponent},
        {path: 'revokeCer', component: RevokeCertificateComponent},
        {path: 'edituser', component: EditUserComponent}
      ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
