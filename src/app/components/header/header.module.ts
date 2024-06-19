import { NgModule } from '@angular/core';
import { HeaderRoutingModule } from './header-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FarmerSharedModule } from 'src/app/shared/components/farmer-shared-components.module';


@NgModule({
  declarations: [],
  imports: [
    HeaderRoutingModule,
    BrowserModule,
    FarmerSharedModule
  ]
})
export class HeaderModule { }
