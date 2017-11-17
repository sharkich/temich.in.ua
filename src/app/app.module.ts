import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {FamilyComponent} from './family/family.component';
import {LogComponent} from './log/log.component';
import {CvComponent} from './cv/cv.component';
import {ContactsComponent} from './contacts/contacts.component';

import {APP_ROUTES} from './app.routes';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import { ResumeComponent } from './resume/resume.component';
import { Http404Component } from './components/http404/http404.component';
import { SaveComponent } from './save/save.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FamilyComponent,
    LogComponent,
    CvComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    Http404Component,
    SaveComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
