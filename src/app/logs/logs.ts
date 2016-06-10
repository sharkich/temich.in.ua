import { Component } from '@angular/core';

import { Commands } from '../_services/commands/commands.service';

@Component({
  selector: 'logs',
  template: require('./logs.html')
})
export class Logs {
  constructor(public commands: Commands) {
  }

  ngOnInit() {
    console.log('hello `Logs` component');
  }
}
