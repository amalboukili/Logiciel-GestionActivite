import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, CanActivate } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { navbarComponent } from './components/navbar/navbar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';
import { TokenInterceptor, ErrorInterceptor } from './services/token.interceptor';
 import { StatusComponent } from './components/status/status.component';
import { AuthGuardService as AuthGuard} from './services/auth-guard.service';
import { AbsencesComponent } from './components/absences/absences.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FraisComponent } from './components/frais/frais.component';
import { ProjetsComponent } from './components/projets/projets.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddProjetComponent } from './components/projets/add-projet/add-projet.component';
import { AddFraisComponent } from './components/frais/add-frais/add-frais.component';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    SignUpComponent,
    LogInComponent,
     StatusComponent,
    AbsencesComponent,
    CalendarComponent,
    FraisComponent,
    ProjetsComponent,
    SidebarComponent,
    AddProjetComponent,
    AddFraisComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    RouterModule.forRoot([
      {path : 'log-in', component: LogInComponent},
      { path : 'sign-up', component: SignUpComponent},
       { path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
      { path: 'absences', component: AbsencesComponent, canActivate: [AuthGuard] },
      { path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard] },
      { path: 'frais', component: FraisComponent, canActivate: [AuthGuard] },
      { path: 'projets', component: ProjetsComponent, canActivate: [AuthGuard] },
      { path: 'addprojet', component: AddProjetComponent, canActivate: [AuthGuard] },
      { path: 'addfrais', component: AddFraisComponent, canActivate: [AuthGuard] },
      { path : '', component: StatusComponent, canActivate: [AuthGuard] },
      {path : '**', redirectTo: '/'},
    

    ])
  ],
  providers: [AuthService,
    AuthGuard,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
