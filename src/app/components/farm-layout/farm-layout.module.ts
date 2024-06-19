import { NgModule } from '@angular/core';

import { FarmLayoutRoutingModule } from './farm-layout-routing.module';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';
import { FarmLayoutComponent } from './farm-layout.component';
import { CropsDashboardComponent } from './crops-dashboard/crops-dashboard.component';
import { HeaderComponent } from '../header/header.component';
import { AddCropsComponent } from './add-crops/add-crops.component';


@NgModule({
  declarations: [FarmLayoutComponent, CropsDashboardComponent, AddCropsComponent],
  imports: [
    FarmLayoutRoutingModule,
    FarmerSharedModule,
    HeaderComponent
  ]
})
export class FarmLayoutModule { }
