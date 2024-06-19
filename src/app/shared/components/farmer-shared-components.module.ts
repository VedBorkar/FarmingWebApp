import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HeaderComponent } from './header/header.component';

const ComponentsToBind = [
    FileUploadComponent,
    HeaderComponent
]
const ModuleToBind = [
  NgbModule,
  FormsModule, 
  ReactiveFormsModule,
  CommonModule
  
]
@NgModule({
  declarations: [...ComponentsToBind],
  exports: [...ComponentsToBind,
  ...ModuleToBind,

  ],
  imports: [
    CommonModule,
    RouterModule,    
    ...ModuleToBind,
    FormsModule

    // DragulaModule.forRoot(),
    // TranslateModule
  ],
  providers: [
    
  ]
})
export class FarmerSharedModule { }
