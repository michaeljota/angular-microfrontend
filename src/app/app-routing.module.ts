import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isLogged } from '@@auth';
import { isNotLogged } from '@@auth';
import { loadRemoteModule } from '@angular-architects/module-federation';

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
    loadChildren: () => loadRemoteModule({ type: 'manifest', remoteName: 'login', exposedModule: './Module' }).then(
      (m) => m.LoginModule,
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
