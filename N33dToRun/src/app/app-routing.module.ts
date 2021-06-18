import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'pages/connexion',
    loadChildren: () => import('./pages/connexion/connexion.module').then( m => m.ConnectionPageModule)
  },
  {
    path: 'pages/inscription',
    loadChildren: () => import('./pages/inscription/inscription.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'pages/map',
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
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
    path: 'pages/stats',
    loadChildren: () => import('./pages/stats/stats.module').then( m => m.StatsPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
