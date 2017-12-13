import {Component, OnInit} from '@angular/core';
import {SeoService} from 'app/-shared/services/seo.service';

@Component({
    selector: 't-save4me',
    templateUrl: './save4me.component.html',
    styleUrls: ['./save4me.component.css']
})
export class Save4meComponent implements OnInit {

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Save for me')
            .setDescription('only for me');
    }

}
