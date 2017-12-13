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
import {CvComponent} from './cv/cv.component';
import {ResumeComponent} from './cv/resume/resume.component';
import {FamilyComponent} from './family/family.component';
import {LogComponent} from './log/log.component';


@NgModule({
    declarations: [
        AppComponent,

        HeaderComponent,
        FooterComponent,

        HomeComponent,
        ContactsComponent,
        CvComponent,
        ResumeComponent,
        FamilyComponent,
        LogComponent,

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
