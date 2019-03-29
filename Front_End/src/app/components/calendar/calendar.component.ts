import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState,  selectAuthState } from 'src/app/store/app.states';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;
  constructor(private store: Store<AppState>) {
    this.getState = this.store.select(selectAuthState); }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
  })
  }

}
