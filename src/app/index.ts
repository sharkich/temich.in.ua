// App
export * from './app.component';
export * from './_services/state/app-state.service';

import { AppState } from './_services/state/app-state.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState
];
