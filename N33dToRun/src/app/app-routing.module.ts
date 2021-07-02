import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
   path: 'pages/home',
   loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
   pathMatch: 'full'
  },
  {
    path: 'pages/profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule),
  },
  {
    path: 'pages/profil/speakers/update',
    loadChildren: () => import('./pages/profil/speakers/update/update.module').then( m => m.UpdatePageModule),
  },
  {
    path: 'pages/profil/health/update',
    loadChildren: () => import('./pages/profil/health/update/update.module').then( m => m.UpdatePageModule),
  },
  {
    path: 'pages/stats',
    loadChildren: () => import('./pages/stats/stats.module').then( m => m.StatsPageModule),
  },
  {
    path: 'pages/map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'mdp-oublie',
    loadChildren: () => import('./mdp-oublie/mdp-oublie.module').then( m => m.MdpOubliePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
