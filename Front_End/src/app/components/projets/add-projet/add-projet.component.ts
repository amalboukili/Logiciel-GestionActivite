import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/proj';
import { ProjetsService } from 'src/app/services/projets.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.css']
})
export class AddProjetComponent implements OnInit {

  addproj: Projet = new Projet("","","","","");

  constructor(
    private projetService : ProjetsService
  ) { }

  ngOnInit() {
  }
  createProjet():void{
    this.projetService.createProjet(this.addproj)
    .subscribe(data => {
      alert("Projet créé avec succès.");
    });
  };

}
