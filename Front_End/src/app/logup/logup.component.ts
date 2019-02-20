import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  Firstname = '';
  Lastname = '';
  Email = '';
  Password = '';
  Password1 = '';



  constructor() { }

  ngOnInit() {
  }

}
