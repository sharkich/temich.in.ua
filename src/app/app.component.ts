/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './_services/state/app-state.service';
import { Commands } from './_services/commands/commands.service';
import { Home } from './home';

import { Top } from './_components/top';
import { Bottom } from './_components/bottom';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ Commands ],
  directives: [Top, Bottom],
  encapsulation: ViewEncapsulation.None,
  styles: [require('./app.css')],
  // styleUrls: ['app/app.scss'],
  template: require('./app.html')
})
@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: Home,
    useAsDefault: true
  },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  {
    path: '/about',
    name: 'About',
    loader: () => require('es6-promise!./about')('About')
  },
  {
    path: '/cv',
    name: 'CV',
    loader: () => require('es6-promise!./cv')('CV')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    loader: () => require('es6-promise!./contacts')('Contacts')
  },
  {
    path: '/logs',
    name: 'Logs',
    loader: () => require('es6-promise!./logs')('Logs')
  },
  {
    path: '/c',
    name: 'Clear',
    loader: () => require('es6-promise!./c')('Clear')
  },
  {
    path: '/help',
    name: 'Help',
    loader: () => require('es6-promise!./help')('Help')
  }
])
export class App {

  constructor(public appState: AppState, public commands: Commands) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
