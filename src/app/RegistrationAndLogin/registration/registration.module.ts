import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';


@NgModule({
  declarations: [RegistrationComponent],
  imports: [    
    RegistrationRoutingModule,
    FarmerSharedModule
  ]
})
export class RegistrationModule {}
