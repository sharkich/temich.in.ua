import {Component, OnInit} from '@angular/core';
import {SeoService} from '../-shared/services/seo.service';

@Component({
    selector: 't-home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.scss'],
    styles: [`h3 {background: yellowgreen;}`]
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