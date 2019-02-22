import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbsencesComponent } from '../absences/absences.component';
import { Observable } from 'rxjs';
import { Absence } from '../../models/abs';

@Injectable({
    providedIn: 'root'
})

export class AbsencesService {

    constructor(private http: HttpClient) { }

    public getAbsences(): Observable<Absence[]> {
        const url = 'http://localhost:8080/abs';
        return this.http.get<Absence[]>(url);
    }
}
