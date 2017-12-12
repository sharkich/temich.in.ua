import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 't-home',
  template: `
      <h3>{{ message }}</h3>
      <p><img src="/i/avatars/hololens.jpg" width="450" height="450" alt="temich"></p>
  `
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello, World!';
  }

}