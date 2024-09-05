import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import { MedecinAddComponent } from './medecin-add/medecin-add.component';

const routes: Routes = [
  {
    path: '', component: MedecinListComponent
  },
  {
    path: 'add', component: MedecinAddComponent
  },
  {
    path: ':id/update', component: MedecinAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedecinRoutingModule { }
