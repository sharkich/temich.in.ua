import { Component } from '@angular/core';

@Component({
  selector: 'help',
  template: require('./help.html')
})
export class Help {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `Help` component');
  }
}
