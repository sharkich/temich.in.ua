import { Component } from '@angular/core';

import { AppState } from '../../_services/state/app-state.service';

import { RouterActive } from '../../_directives/router-active';

@Component({
  selector: 'bottom',
  directives: [
    RouterActive
  ],
  styles: [require('./bottom.css')],
  // styleUrls: ['app/_components/top/top.scss'],
  template: require('./bottom.html')
})
export class Bottom {

  localState = {
    value: ''
  };

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('hello `Bottom` component', this.localState);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('top', value);
    this.localState.value = '';
  }

}
