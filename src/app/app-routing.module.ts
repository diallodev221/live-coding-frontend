import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// routes
const routes: Routes = [
  {
    path: 'medecins',
    loadChildren: () =>
      import('./modules/medecin/medecin.module').then((m) => m.MedecinModule),
  },
  {
    path: '',
    redirectTo: 'medecins',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
