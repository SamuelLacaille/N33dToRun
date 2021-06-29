import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayPage } from './day.page';

const routes: Routes = [
  {
    path: '',
    component: DayPage,
    // children: [
    //   {
    //     path: 'accueil',
    //     children : [         
    //       {
    //         path: '',
    //         loadChildren: () => import('./accueil/accueil.module').then(m => m.AccueilPageModule),          
    //       },
    //     ]
    //   },
    //   {
    //     path: 'speakers',
    //     children : [         
    //       {
    //         path: '',
    //         loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersPageModule),
    //       },
    //     ]
    //   },
    //   {
    //     path: 'map',
    //     children : [         
    //       {
    //         path: '',
    //         loadChildren: () => import('../map/map.module').then(m => m.MapPageModule),
    //       },
    //     ]
    //   },
    //   {
    //     path: '',
    //     redirectTo: 'accueil',
    //     pathMatch: 'full'
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayPageRoutingModule {}
