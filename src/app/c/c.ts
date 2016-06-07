import { Component } from '@angular/core';

@Component({
  selector: 'clear',
  template: require('./c.html')
})
export class Clear {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `Clear` component');
  }
}
