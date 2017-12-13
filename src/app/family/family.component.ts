import {Component, OnInit} from '@angular/core';
import {SeoService} from '../-shared/services/seo.service';

@Component({
    selector: 't-family',
    templateUrl: './family.component.html',
    styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Artem Koziar\'s Family')
            .setDescription('My Family and I');
    }

}
