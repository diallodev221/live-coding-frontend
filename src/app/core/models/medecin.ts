import { Specialite } from './specialite';

export interface Medecin {
  id: number;
  nom: string;
  prenom: string;
  horaires: string[];
  speciality: Specialite;
}

export interface MedecinRequest {
  nom: string;
  prenom: string;
  horaires: string[];
  specialiteId: number;
}
