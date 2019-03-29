import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/proj';
import { FraisService } from 'src/app/services/frais.service';
import { Frais } from 'src/app/models/frais';

@Component({
  selector: 'app-frais',
  templateUrl: './frais.component.html',
  styleUrls: ['./frais.component.css']
})
export class FraisComponent implements OnInit {

  frais:Frais[];
  
  constructor(
    private fraisService : FraisService
  ) { }

  ngOnInit() {
    this.fraisService.getFrais().subscribe(
      response =>this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.frais=response;
  }

  deleteFrais(frais: Frais): void {
    this.fraisService.deleteFrais(frais)
      .subscribe( data => {
        this.frais = this.frais.filter(u => u !== frais);
      })
  };

}
