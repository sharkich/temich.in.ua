import { Component, OnInit } from '@angular/core';

const PAGE_NOT_FOUND = 'Page Not Found';

@Component({
  selector: 't-http404',
  templateUrl: './http404.component.html',
  styleUrls: ['./http404.component.scss']
})
export class Http404Component implements OnInit {

  public pageNotFound = '';

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      if (this.pageNotFound === PAGE_NOT_FOUND) {
        this.pageNotFound = '';
        return;
      }
      this.pageNotFound += PAGE_NOT_FOUND[this.pageNotFound.length];
    }, 250);
  }

}
