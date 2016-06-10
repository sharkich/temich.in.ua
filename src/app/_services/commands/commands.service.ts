import {Injectable} from '@angular/core';
import { Router } from '@angular/router-deprecated';
import {HmrState} from 'angular2-hmr';

const ROUTES = [
  {
    url: '/',
    alias: '/Home'
  },
  {
    url: '/about',
    alias: '/About'
  },
  {
    url: '/cv',
    alias: '/CV'
  },
  {
    url: '/contacts',
    alias: '/Contacts'
  },
  {
    url: '/logs',
    alias: '/Logs'
  },
  {
    url: '/c',
    alias: '/Clear'
  },
  {
    url: '/clear',
    alias: '/Clear'
  },
  {
    url: '/?',
    alias: '/Help'
  },
  {
    url: '/help',
    alias: '/Help'
  }
];

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

  run(commandString: string) {
    let command;

    commandString = commandString.trim().toLocaleLowerCase();

    command = {
      commandString,
      time: new Date()
    };

    command.result = command ? this.runJS(command) : '';

    this._logs.push(command);
    console.log(`@Commands.run('${commandString}')`, command, this._logs);

    if (!commandString || command.result !== undefined) {
      return;
    }

    if (commandString.indexOf('cd ') === 0) {
      let page = commandString.substr(3);
      console.log(page);

      let route = ROUTES.find((route) => {
        return route.url === page;
      });
      console.log(route);

      if (route) {
        return this.router.navigate([route.alias]);
      } else {
        console.log('404');
        return;
        // this.router.navigate(['/Error404']);
      }

    }

    console.log('unknown command');

  }

  logs() {
    return this._logs;
  }

}
