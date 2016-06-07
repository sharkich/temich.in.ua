import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';

@Component({
  selector: 'home',  // <home></home>
  providers: [
    Title
  ],
  directives: [],
  pipes: [ ],
  styleUrls: [
    'app/home/home1.scss'
  ],
  template: require('./home.html')
})
export class Home {

  localState = { value: '' };

  constructor(public appState: AppState, public title: Title) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
