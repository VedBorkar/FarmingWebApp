import { NgModule } from '@angular/core';
import { FarmerLayoutComponent } from './farmer-layout.component';
import { FarmerLayoutRoutingModule } from './farmer-layout-routing.module';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';
import { AddCropsComponent } from './add-crops/add-crops.component';




@NgModule({
  declarations: [FarmerLayoutComponent, DashboardComponent,AddCropsComponent],
  imports: [
    FarmerLayoutRoutingModule,
    FarmerSharedModule,
    HeaderComponent
  ]
})
export class FarmerLayoutModule { }
