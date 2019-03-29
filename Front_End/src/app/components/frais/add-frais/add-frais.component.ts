import { Component, OnInit } from '@angular/core';
import { Frais } from 'src/app/models/frais';
import { FraisService } from 'src/app/services/frais.service';

@Component({
  selector: 'app-add-frais',
  templateUrl: './add-frais.component.html',
  styleUrls: ['./add-frais.component.css']
})
export class AddFraisComponent implements OnInit {
  addfrais: Frais = new Frais("","","");

  constructor(
    private fraisService : FraisService
  ) { }

  ngOnInit() {
  }
  createFrais():void{
    this.fraisService.createFrais(this.addfrais)
    .subscribe(data => {
      alert("Frais créé avec succès.");
    });
  };
}
