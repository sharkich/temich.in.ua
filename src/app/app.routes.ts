import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {CvComponent} from './cv/cv.component';
import {ResumeComponent} from './cv/resume/resume.component';

export const ROUTES = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'cv', component: CvComponent, pathMatch: 'full'},
    {path: 'cv/resume', component: ResumeComponent, pathMatch: 'full'},
    {path: 'contacts', component: ContactsComponent, pathMatch: 'full'},

    {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
    {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
];