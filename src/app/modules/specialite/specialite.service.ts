import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Specialite } from 'src/app/core/models/specialite';
import { config } from 'src/app/config/api-config';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<Specialite[]> {
    return this.http.get<Specialite[]>(`${config.apiBaseUrl}/specialites`)
  }
}
