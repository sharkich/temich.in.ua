import { Component } from '@angular/core';

import { AppState } from '../../_services/state/app-state.service';
import { Commands } from '../../_services/commands/commands.service';

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
    command: ''
  };

  constructor(public appState: AppState, public commands: Commands) {
  }

  ngOnInit() {
    console.log('hello `Bottom` component', this.localState);
  }

  runCommand() {
    console.log('runCommand', this.localState.command);
    this.commands.run(this.localState.command);
    this.changeState();
  }

  changeState() {
    console.log('submitState', this.localState.command);
    this.appState.set('command', this.localState.command);
    this.localState.command = '';
  }

}
