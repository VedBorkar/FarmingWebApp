import { NgModule } from '@angular/core';
import { FarmerLayoutComponent } from './farmer-layout.component';
import { FarmerLayoutRoutingModule } from './farmer-layout-routing.module';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';




@NgModule({
  declarations: [FarmerLayoutComponent, DashboardComponent],
  imports: [
    FarmerLayoutRoutingModule,
    FarmerSharedModule,
    HeaderComponent
  ]
})
export class FarmerLayoutModule { }
