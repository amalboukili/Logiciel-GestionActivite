import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Frais } from '../models/frais';

@Injectable({
  providedIn: 'root'
})
export class FraisService {

  constructor( private httpFrais : HttpClient) { 
  }
  public getFrais(): Observable<Frais[]> {
    const url = 'http://localhost:8080/frais';
    return this.httpFrais.get<Frais[]>(url);
}

public createFrais(frais) {
  return this.httpFrais.post<Frais>("http://localhost:8080/frais", frais);
}
public deleteFrais(frais) {
  return this.httpFrais.delete<Frais>("http://localhost:8080/frais" + "/"+ frais.periode);
}
}
