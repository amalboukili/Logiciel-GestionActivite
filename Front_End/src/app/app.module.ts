import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { MoneyComponent } from './components/money/money.component';
import { AbsencesComponent } from './components/absences/absences.component';
import { ProjetsComponent } from './components/projets/projets.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { LogupComponent } from './components/logup/logup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';


const routes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component : HomeComponent},
  { path: 'Calendar', component : CalendarComponent},
  { path: 'Frais', component : MoneyComponent},
  { path: 'Absences', component: AbsencesComponent},
  { path: 'Projets', component: ProjetsComponent},
  { path: 'Login' , component: LoginComponent},
  { path: 'Logup' , component: LogupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    CalendarComponent,
    MoneyComponent,
    ProjetsComponent,
    AbsencesComponent,
    LoginComponent,
    LogupComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
