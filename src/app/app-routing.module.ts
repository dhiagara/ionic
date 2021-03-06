import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { 
  AuthGuardService as AuthGuard 
} from './services/auth/auth-guard.service';
const routes: Routes = [
 
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    

  },
  {
    path: 'signUp',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'epi4info',
    loadChildren: () => import('./epi4info/epi4info.module').then( m => m.Epi4infoPageModule)
  },
  {
    path: 'epiadministration',
    loadChildren: () => import('./epiadministration/epiadministration.module').then( m => m.EpiadministrationPageModule)
  },
  {
    path: 'creer-etudiant',
    loadChildren: () => import('./creer-etudiant/creer-etudiant.module').then( m => m.CreerEtudiantPageModule)
  },
  {
    path: 'creer-etudiant/:id',
    loadChildren: () => import('./creer-etudiant/creer-etudiant.module').then( m => m.CreerEtudiantPageModule)
  },
  {
    path: 'modifier-etudiant',
    loadChildren: () => import('./modifier-etudiant/modifier-etudiant.module').then( m => m.ModifierEtudiantPageModule)
  },
  {
    path: 'liste-etudiant',
    loadChildren: () => import('./liste-etudiant/liste-etudiant.module').then( m => m.ListeEtudiantPageModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./trips/trips.module').then( m => m.TripsPageModule),
    canActivate: [AuthGuard] 
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
