import {
  beforeEachProviders,
  inject,
  injectAsync,
  it
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';
import { AppState } from './_services/state/app-state.service';

describe('App', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    AppState,
    App
  ]);

  it('should be define appState', inject([ App ], (app) => {
    expect(app.appState).toBeDefined();
  }));

  it('should be define appState._state', inject([ App ], (app) => {
    expect(app.appState._state).toBeDefined();
  }));

  it('should be appState._state equal {}', inject([ App ], (app) => {
    expect(app.appState._state).toEqual({});
  }));

});
