import { Component, inject, OnInit } from '@angular/core';
import { MedecinService } from '../medecin.service';
import { Observable } from 'rxjs';
import { Medecin } from 'src/app/core/models/medecin';


export interface PeriodicElement {
  position: number;
  nom: string;
  prenom: string;
  horaires: string[];
  specialite: string;
}

@Component({
  selector: 'app-medecin-list',
  templateUrl: './medecin-list.component.html',
  styleUrls: ['./medecin-list.component.scss']
})
export class MedecinListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nom', 'prenom', 'horaires', 'specialite', 'actions'];

  medecins$!: Observable<Medecin[]>;

  service = inject(MedecinService);

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.medecins$ = this.service.getAll();
  }

  onDelete(id: number): void {
    this.service.delete(id).subscribe(() => this.getAll())
  }


}
