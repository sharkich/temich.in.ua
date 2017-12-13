import {Component, OnInit} from '@angular/core';
import {SeoService} from '../-shared/services/seo.service';

@Component({
    selector: 't-home',
    templateUrl: './home.template.html',
    styles: [`
        h3 {color: green;}
    `]
})
export class HomeComponent implements OnInit {
    public message: string;

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Artem Koziar — Private Site temich.in.ua')
            .setDescription('My Page Description');
        this.message = 'Hello, World!';
    }

}