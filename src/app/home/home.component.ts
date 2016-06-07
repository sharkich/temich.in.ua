import { Component } from '@angular/core';

import { AppState } from '../_services/state/app-state.service';

@Component({
  selector: 'home',
  providers: [],
  directives: [],
  pipes: [],
  styleUrls: [
    'app/home/home.scss'
  ],
  template: require('./home.html')
})
export class Home {

  localState = {
    value: ''
  };

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
