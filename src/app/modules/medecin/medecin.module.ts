import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedecinRoutingModule } from './medecin-routing.module';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import { MedecinAddComponent } from './medecin-add/medecin-add.component';
import { MedecinService } from './medecin.service';
import {  MatTableModule } from '@angular/material/table';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { MedecinUpdateComponent } from './medecin-update/medecin-update.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MedecinListComponent,
    MedecinAddComponent,
    MedecinUpdateComponent
  ],
  imports: [
    CommonModule,
    MedecinRoutingModule,
    MatTableModule,
    SharedModule,
    MatIconModule
  ],
  exports: [
    MedecinRoutingModule
  ],
  providers: [MedecinService]
})
export class MedecinModule { }
