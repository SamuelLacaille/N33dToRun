import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage,
    children: [
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
        path: 'map',
        children : [         
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapPageModule),
          },
        ]
      },
    ]
  }
];
console.log(routes)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
