import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medecin-update',
  templateUrl: './medecin-update.component.html',
  styleUrls: ['./medecin-update.component.scss']
})
export class MedecinUpdateComponent implements OnInit{

  medecinForm!: FormGroup;

  constructor(private router: ActivatedRoute) {
    this.medecinForm = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl(''),
      horaires: new FormControl(''),
      specialiteId: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.router.snapshot.paramMap.get('id')

  }


}
