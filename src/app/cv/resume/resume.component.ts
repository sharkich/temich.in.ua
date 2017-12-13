import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../-shared/services/seo.service';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Resume of Artem Koziar — Senior Frontend Developer (Angular, JS)')
            .setDescription('Resume of Software Engineer, Senior Frontend Developer (Angular),  Team Leader, Assistant Manager, Mentor');
    }

}
