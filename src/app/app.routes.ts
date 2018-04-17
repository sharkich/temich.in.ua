import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {CvComponent} from './cv/cv.component';
import {ResumeComponent} from './cv/resume/resume.component';
import {FamilyComponent} from './family/family.component';
import {LogComponent} from './log/log.component';
import {MemoryComponent} from './memory/memory.component';
import {Save4meComponent} from './memory/save4me/save4me.component';

export const ROUTES = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'family', component: FamilyComponent, pathMatch: 'full'},
    {path: 'log', component: LogComponent, pathMatch: 'full'},
    {path: 'cv', component: CvComponent, pathMatch: 'full'},
    {path: 'cv/resume', component: ResumeComponent, pathMatch: 'full'},
    {path: 'contacts', component: ContactsComponent, pathMatch: 'full'},

    {path: 'memory', component: MemoryComponent, pathMatch: 'full'},
    {path: 'memory/save4me', component: Save4meComponent, pathMatch: 'full'},

    {path: 'pace', loadChildren: './apps/pace/pace.module#PaceModule'},

    {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
    {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
];