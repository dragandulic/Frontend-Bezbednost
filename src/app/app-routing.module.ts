import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { SelfSignedCertificateComponent } from './components/self-signed-certificate/self-signed-certificate.component';
import { SignedCertificateComponent } from './components/signed-certificate/signed-certificate.component';
import { UserCertificateComponent } from './components/user-certificate/user-certificate.component';
import { ShowCertificateComponent } from './components/show-certificate/show-certificate.component';
import { CheckRevocationComponent } from './components/check-revocation/check-revocation.component';
import { RevokeCertificateComponent } from './components/revoke-certificate/revoke-certificate.component';

const routes: Routes = [

  { path: '', redirectTo: '/welcomepage', pathMatch: 'full'},
  { path: 'welcomepage', component: WelcomepageComponent,
      children:[
        {path: 'selfSigned', component: SelfSignedCertificateComponent},
        {path: 'signedCer', component: SignedCertificateComponent},
        {path: 'userCer', component: UserCertificateComponent},
        {path: 'showCer', component: ShowCertificateComponent},
        {path: 'checkRev', component: CheckRevocationComponent},
        {path: 'revokeCer', component: RevokeCertificateComponent}
      ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
