import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerLayoutComponent } from './farmer-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FarmerLayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'master',
        loadChildren: () => import('./master-data/master-data.module').then(p => p.MasterDataModule)
      },
      {
        path: 'add_farm',
        loadChildren: () => import('./farm/farm.module').then(p => p.FarmModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerLayoutRoutingModule { }
