import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SeoService} from './-shared/services/seo.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 't-app'}),
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
            {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
        ])
    ],
    providers: [
        SeoService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
