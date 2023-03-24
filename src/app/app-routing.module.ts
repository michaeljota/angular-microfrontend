import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLogged } from './shared/auth/is-logged.guard';
import { isNotLogged } from './shared/auth/is-not-logged.guard';

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
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
