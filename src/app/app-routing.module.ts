import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLogged } from '@@auth';
import { isNotLogged } from '@@auth';

const routes: Routes = [
  {
    path: '',
    canMatch: [isLogged],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '',
    canMatch: [isNotLogged],
    loadChildren: () => import('@@login').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
