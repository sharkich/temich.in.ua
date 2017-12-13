import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';

export const ROUTES = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'contacts', component: ContactsComponent, pathMatch: 'full'},

    {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
    {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
];