import { Component, OnInit } from '@angular/core';
import { Absence } from '../../models/abs';
import { AbsencesService } from './absences.service';

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
  Absences = new Array<Absence>();
  constructor(empAbsences: AbsencesService) {
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
  }
}


