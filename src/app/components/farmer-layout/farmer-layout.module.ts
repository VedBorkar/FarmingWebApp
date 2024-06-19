import { NgModule } from '@angular/core';
import { FarmerLayoutComponent } from './farmer-layout.component';
import { FarmerLayoutRoutingModule } from './farmer-layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';
import { AddCropsComponent } from './add-crops/add-crops.component';
import { CropsDashboardComponent } from './crops-dashboard/crops-dashboard.component';




@NgModule({
  declarations: [FarmerLayoutComponent, DashboardComponent, AddCropsComponent, CropsDashboardComponent],
  imports: [
    FarmerLayoutRoutingModule,
    FarmerSharedModule,
  ]
})
export class FarmerLayoutModule { }
