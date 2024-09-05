import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MedecinService } from '../medecin.service';
import { MedecinRequest } from 'src/app/core/models/medecin';
import { SpecialiteService } from '../../specialite/specialite.service';
import { Specialite } from '../../../core/models/specialite';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medecin-add',
  templateUrl: './medecin-add.component.html',
  styleUrls: ['./medecin-add.component.scss']
})
export class MedecinAddComponent implements OnInit{

  medecinForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    horaires: new FormControl(''),
    specialiteId: new FormControl('')
  })

  specialites$!: Observable<Specialite[]>;


  service = inject(MedecinService);
  specialiteService = inject(SpecialiteService)

  ngOnInit(): void {
    this.specialites$ = this.specialiteService.getAll();
  }

  onSubmit(): void {
    this.service.create(this.medecinForm.value)
      .subscribe(res => {
        console.log(res)
      })
  }
}
