import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {SeoService} from './-shared/services/seo.service';
import {HeaderComponent} from './-shared/components/header/header.component';
import {FooterComponent} from './-shared/components/footer/footer.component';
import {Http404Component} from './-shared/components/http404/http404.component';
import {ContactsComponent} from './contacts/contacts.component';


@NgModule({
    declarations: [
        AppComponent,

        HeaderComponent,
        FooterComponent,

        HomeComponent,
        ContactsComponent,

        Http404Component
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 't-app'}),
        RouterModule.forRoot(ROUTES)
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
