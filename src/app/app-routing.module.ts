import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { SelfSignedCertificateComponent } from './components/self-signed-certificate/self-signed-certificate.component';
import { SignedCertificateComponent } from './components/signed-certificate/signed-certificate.component';
import { UserCertificateComponent } from './components/user-certificate/user-certificate.component';

const routes: Routes = [

  { path: '', redirectTo: '/welcomepage', pathMatch: 'full'},
  { path: 'welcomepage', component: WelcomepageComponent,
      children:[
        {path: 'selfSigned', component: SelfSignedCertificateComponent},
        {path: 'signedCer', component: SignedCertificateComponent},
        {path: 'userCer', component: UserCertificateComponent}
      ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
