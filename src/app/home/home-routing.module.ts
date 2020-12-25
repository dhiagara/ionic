import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { SigInComponent } from './sig-in/sig-in.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin'
  },
  {
    path: 'home',
    component: HomePage,
  },
  
  {
    path: 'signin',
    component: SigInComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
