import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerLayoutComponent } from '../farmer-layout/farmer-layout.component';

const routes: Routes = [
  {
    path: "/dashboard", component: FarmerLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
