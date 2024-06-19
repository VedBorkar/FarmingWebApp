import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmLayoutComponent } from './farm-layout.component';
import { CropsDashboardComponent } from './crops-dashboard/crops-dashboard.component';
import { AddCropsComponent } from './add-crops/add-crops.component';

const routes: Routes = [
  {
    path: '',
    component: FarmLayoutComponent,
    children: [
      {
        path: '',
        component: CropsDashboardComponent
      },
      {
        path: 'add-crops',
        component: AddCropsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmLayoutRoutingModule { }
