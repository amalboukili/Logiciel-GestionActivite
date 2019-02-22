import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(): void {
    console.log(this.user);
  }

}
