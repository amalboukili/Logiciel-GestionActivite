import { Injectable } from '@angular/core';
import { Projet} from '../models/proj'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor( private httpProj : HttpClient) { 
  }
  public getProjets(): Observable<Projet[]> {
    const url = 'http://localhost:8080/projects';
    return this.httpProj.get<Projet[]>(url);
}
public deleteProjet(projet) {
  return this.httpProj.delete<Projet>("http://localhost:8080/projects" + "/"+ projet.clientId);
}

public createProjet(projet) {
  return this.httpProj.post<Projet>("http://localhost:8080/projects", projet);
}


}
