import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { SelfSignedCertificateComponent } from './components/self-signed-certificate/self-signed-certificate.component';

const routes: Routes = [

  { path: '', component: WelcomepageComponent,
      children:[
        {path: 'selfSigned', component: SelfSignedCertificateComponent}
      ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
