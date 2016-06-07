import { Component } from '@angular/core';

@Component({
  selector: 'logs',
  template: require('./logs.html')
})
export class Logs {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `Logs` component');
  }
}
