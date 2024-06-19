import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./RegistrationAndLogin/login/login.module').
      then(x => x.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/farmer-layout/farmer-layout.module').
      then(x => x.FarmerLayoutModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./RegistrationAndLogin/registration/registration.module').
      then(x => x.RegistrationModule)
  },
  {
    path: 'crops',
    loadChildren: () => import('./components/farm-layout/farm-layout.module').
      then(x => x.FarmLayoutModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
