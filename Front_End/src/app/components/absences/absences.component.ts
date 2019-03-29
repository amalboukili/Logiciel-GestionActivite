import { Component, OnInit } from '@angular/core';
import { AbsencesService } from '../../services/absences.service';
import { Absence } from '../../models/abs';
import { AppState, selectAuthState } from '../../store/app.states';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  Absences = new Array<Absence>();
  constructor(empAbsences: AbsencesService, 
    private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState); 
    empAbsences.getAbsences().subscribe(response => {
      this.Absences = response.map(item => {
          return new Absence(
            item.id,
            item.name,
            item.status
          );
        });
    });
    
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
  })
}
}

