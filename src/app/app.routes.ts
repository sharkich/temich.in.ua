import {Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {FamilyComponent} from './family/family.component';
import {LogComponent} from './log/log.component';
import {CvComponent} from './cv/cv.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactsComponent} from './contacts/contacts.component';
import {Http404Component} from './components/http404/http404.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'family',
    component: FamilyComponent
  },
  {
    path: 'log',
    component: LogComponent
  },
  {
    path: 'cv',
    component: CvComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: '**',
    component: Http404Component
  }
];
