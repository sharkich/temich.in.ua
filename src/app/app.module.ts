import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SeoService} from './-shared/services/seo.service';
import {HeaderComponent} from './-shared/components/header/header.component';
import {FooterComponent} from './-shared/components/footer/footer.component';
import {Http404Component} from './-shared/components/http404/http404.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        Http404Component
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
