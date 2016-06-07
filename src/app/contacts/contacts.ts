import { Component } from '@angular/core';

@Component({
  selector: 'contacts',
  template: require('./contacts.html')
})
export class Contacts {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `Contacts` component');
  }
}
