import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerLayoutComponent } from './farmer-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CropsDashboardComponent } from './crops-dashboard/crops-dashboard.component';
import { AddCropsComponent } from './add-crops/add-crops.component';

const routes: Routes = [
  {
    path: '',
    component: FarmerLayoutComponent,
    children: [     
      {
        path: '',
        component: CropsDashboardComponent
      },
      {
        path: 'add-crops',
        component: AddCropsComponent
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
