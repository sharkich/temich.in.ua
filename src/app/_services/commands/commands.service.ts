import {Injectable} from '@angular/core';
import {HmrState} from 'angular2-hmr';

@Injectable()
export class Commands {
  // @HmrState() is used by HMR to track the state of any object during a hot module replacement
  @HmrState() _logs = [];

  constructor() {
  }

  run(command:string) {
    this._logs.push(command);
    console.log(`@Commands.run('${command}')`, this._logs);
  }

}
