import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(public route: ActivatedRoute) {
  }

  public ngOnInit() {
    console.log('hello `About` component');
  }

}
