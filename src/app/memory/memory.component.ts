import {Component, OnInit} from '@angular/core';

import {MONTHS} from './months';
import {NUMBERS_10} from './numbers.10';
import {NUMBERS_100} from './numbers.100';
import {NUMBERS_1000} from './numbers.1000';
import {SeoService} from 'app/-shared/services/seo.service';

@Component({
    selector: 't-memory',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

    public months = this.getArray(MONTHS);
    public numbers10 = this.getArray(NUMBERS_10);
    public numbers100 = this.getArray(NUMBERS_100);
    public numbers1000 = this.getArray(NUMBERS_1000);

    private getArray(obj: any) {
        return Object.keys(obj).map((index) => ({
            key: index,
            value: obj[index]
        }));
    }

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Mnemonics Methodics (russian/ukrainian)')
            .setDescription('Methodics for saving everything (in russian/ukrainian)');
    }

}
