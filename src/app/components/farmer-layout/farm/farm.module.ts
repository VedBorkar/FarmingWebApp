import { NgModule } from '@angular/core';
import { FarmRoutingModule } from './farm-routing.module';
import { FarmComponent } from './farm.component';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';


@NgModule({
  declarations: [FarmComponent],
  imports: [
    FarmRoutingModule,
    FarmerSharedModule,
  ]
})
export class FarmModule { }
