import {Component, OnInit} from '@angular/core';

@Component({
  selector: 't-home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor() {}

  public ngOnInit() {
    console.log('hello `Home` component');
  }

}
