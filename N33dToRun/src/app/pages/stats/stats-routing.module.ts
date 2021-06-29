import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatsPage } from './stats.page';

const routes: Routes = [
  {
    path: '',
    component: StatsPage,
    children: [
      {
        path: 'day',
        children : [         
          {
            path: '',
            loadChildren: () => import('./day/day.module').then(m => m.DayPageModule),          
          },
        ]
      },
      {
        path: 'month',
        children : [         
          {
            path: '',
            loadChildren: () => import('./month/month.module').then(m => m.MonthPageModule),
          },
        ]
      },
      {
        path: 'year',
        children : [         
          {
            path: '',
            loadChildren: () => import('./year/year.module').then(m => m.YearPageModule),
          },
        ]
      },
      {
        path: '',
        redirectTo: 'day',
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
export class StatsPageRoutingModule {}
