import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage,
    children: [
      {
        path: 'accueil',
        children : [         
          {
            path: '',
            loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilPageModule),          
          },
        ]
      },
      {
        path: 'speakers',
        children : [         
          {
            path: '',
            loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersPageModule),
          },
        ]
      },
      {
        path: 'health',
        children : [         
          {
            path: '',
            loadChildren: () => import('./health/health.module').then(m => m.HealthPageModule),
          },
        ]
      },
      {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
      }
    ]
  }
];
console.log(routes)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
