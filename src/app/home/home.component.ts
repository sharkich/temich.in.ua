import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SeoService} from '../-shared/services/seo.service';

@Component({
    selector: 't-home',
    template: `
        <h3>{{ message }}</h3>
        <p><img src="/i/avatars/hololens.jpg" width="450" height="450" alt="temich"></p>
    `
})
export class HomeComponent implements OnInit {
    public message: string;

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('My Page Title')
            .setDescription('My Page Description');
        this.message = 'Hello, World!';
    }

}