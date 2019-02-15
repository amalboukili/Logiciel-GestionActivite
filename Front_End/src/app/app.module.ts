import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { MoneyComponent } from './money/money.component';
import { AbsencesComponent } from './absences/absences.component';
import { ProjetsComponent } from './projets/projets.component';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component : HomeComponent},
  { path: 'Calendar', component : CalendarComponent},
  { path: 'Frais', component : MoneyComponent},
  { path: 'Absences', component: AbsencesComponent},
  { path: 'Projets', component: ProjetsComponent},

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
    AbsencesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
