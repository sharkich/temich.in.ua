import { Component } from '@angular/core';

import { AppState } from '../../_services/state/app-state.service';

@Component({
  selector: 'top',
  styleUrls: [
    'app/_components/top/top.scss'
  ],
  template: require('./top.html')
})
export class Top {

  localState = {
    value: ''
  };

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('hello `Top` component', this.localState);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('top', value);
    this.localState.value = '';
  }

}
