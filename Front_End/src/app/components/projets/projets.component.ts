import { Component, OnInit } from '@angular/core';
import { ProjetsService } from 'src/app/services/projets.service';
import { Projet } from 'src/app/models/proj';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {
  
  projets:Projet[];
  
  constructor(
    private projetsService : ProjetsService
  ) { }

  ngOnInit() {
    this.projetsService.getProjets().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.projets=response;
  }

  deleteProjet(projet: Projet): void {
    this.projetsService.deleteProjet(projet)
      .subscribe( data => {
        this.projets = this.projets.filter(u => u !== projet);
      })
  };

  

  
}
