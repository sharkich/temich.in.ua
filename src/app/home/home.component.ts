import {Component, OnInit} from '@angular/core';
import {SeoService} from 'app/-shared/services/seo.service';

@Component({
    selector: 't-home',
    templateUrl: './home.template.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Artem Koziar — Private Site temich.in.ua')
            .setDescription('My Page Description');
    }

}