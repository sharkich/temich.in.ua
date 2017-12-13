import {Component, OnInit} from '@angular/core';
import {SeoService} from '../-shared/services/seo.service';

@Component({
    selector: 't-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Contact Information of Artem Koziar')
            .setDescription('Do you want to find me? How to Get in Touch with Artem Koziar.');
    }

}
