import {Injectable} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {HmrState} from 'angular2-hmr';

@Injectable()
export class Commands {
  // @HmrState() is used by HMR to track the state of any object during a hot module replacement
  @HmrState() _logs = [];

  constructor(private router:Router) {
  }

  runJS(command: string) {
    let result;
    try {
      result = eval(command);
    } catch(err) {
      console.log(err);
    }
    return result;
  }

  run(command: string) {
    let result;

    command = command.trim().toLocaleLowerCase();

    result = command ? this.runJS(command) : '';

    this._logs.push({
      command,
      result
    });
    console.log(`@Commands.run('${command}')`, this._logs);

    if (result !== undefined || !command) {
      return;
    }

    switch(command) {
      case 'cd /':
        this.router.navigate(['/Home']);
        break;
      case 'cd /about':
        this.router.navigate(['/About']);
        break;
    }

  }

}
