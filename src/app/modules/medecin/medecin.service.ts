import { Injectable } from '@angular/core';

import {config} from '../../config/api-config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Medecin, MedecinRequest } from 'src/app/core/models/medecin';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(`${config.apiBaseUrl}/medecins`)
  }

  getMedecinsBySpecialite(libelle: string): Observable<Medecin[]> {
    return this.http.get<Medecin[]>(`${config.apiBaseUrl}/medecins/filter?specialite=${libelle}`)
  }

  create(medecin: any): Observable<Medecin> {
    return this.http.post<Medecin>(`${config.apiBaseUrl}/medecins`, medecin)
  }

  update(medecinId: number, medecin: MedecinRequest): Observable<void> {
    return this.http.put<void>(`${config.apiBaseUrl}/medecins/${medecinId}`, medecin)
  }

  delete(medecinId: number): Observable<void> {
    return this.http.delete<void>(`${config.apiBaseUrl}/medecins/${medecinId}`)
  }

}
