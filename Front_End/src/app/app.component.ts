import { Component } from '@angular/core';
import { AbsencesService } from './absences/absences.service';
import { AbsencesComponent } from './absences/absences.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Logiciel-GestionActivite';

  constructor(  ) {
  }
}
