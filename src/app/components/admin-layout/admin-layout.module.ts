import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';



@NgModule({
  declarations: [AdminLayoutComponent,
    AdminDashboardComponent,
    MasterDataComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule,
    FarmerSharedModule
  ]
})
export class AdminLayoutModule { }
