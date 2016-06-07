import { Component } from '@angular/core';

@Component({
  selector: 'cv',
  template: require('./cv.html')
})
export class CV {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `CV` component');
  }
}
