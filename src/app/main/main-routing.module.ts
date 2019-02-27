import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { FoliosDPComponent } from '../dobleplay/components/folios-dp/folios-dp.component';
import { ActivacionesComponent } from '../activaciones/components/activaciones/activaciones.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dobleplay'
      },
      {
          path: 'dobleplay',
          component: FoliosDPComponent
          // loadChildren: 'src/app/dobleplay/dobleplay.module#DobleplayModule'
      },
      {
        path: 'activaciones',
        component: ActivacionesComponent
        // loadChildren: 'src/app/activaciones/activaciones.module#ActivacionesModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
