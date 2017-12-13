import {Component, OnInit} from '@angular/core';
import {SeoService} from '../-shared/services/seo.service';

@Component({
    selector: 't-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('CV of Artem Koziar — Senior Frontend Developer (Angular, Java Script)')
            .setDescription('CV of Software Engineer, Senior Frontend Developer (Angular), Team Leader, Assistant Manager, Mentor');
    }

}
