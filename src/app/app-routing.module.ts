import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { SelfSignedCertificateComponent } from './components/self-signed-certificate/self-signed-certificate.component';
import { SignedCertificateComponent } from './components/signed-certificate/signed-certificate.component';

const routes: Routes = [

  { path: '', redirectTo: '/welcomepage', pathMatch: 'full'},
  { path: 'welcomepage', component: WelcomepageComponent,
      children:[
        {path: 'selfSigned', component: SelfSignedCertificateComponent},
        {path: 'signedCer', component: SignedCertificateComponent}
      ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
