import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../-shared/services/seo.service';

@Component({
    selector: 't-pace',
    templateUrl: 'pace.component.html',
    styleUrls: ['pace.component.scss']
})
export class PaceComponent implements OnInit {

    public distance: number;
    public pace: number = 6 * 60;
    public time: number;
    public maxPace: number = 14 * 60;
    public maxTime: number;

    public distances = [
        {
            distance: 1000,
            title: '1 km'
        },
        {
            distance: 2000,
            title: '2 km'
        },
        {
            distance: 3000,
            title: '3 km'
        },
        {
            distance: 5000,
            title: '5 km'
        },
        {
            distance: 10000,
            title: '10 km'
        },
        {
            distance: 15000,
            title: '15 km'
        },
        {
            distance: 21097,
            title: 'Half (21.097 km)'
        },
        {
            distance: 42195,
            title: 'Marathon (42.195 km)'
        },
        {
            distance: 50000,
            title: '50 km'
        },
        {
            distance: 100000,
            title: '100 km'
        }
    ];

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Marathon and Half-Marathon Pace Running Calculator (Pace, Speed, Time)')
            .setDescription('Calculator of pace, speed, time for any distance');

        this.onSelectDistance(21097);
        this.onChangePace(this.pace);
    }

    onSelectDistance(distance: number) {
        this.distance = distance;
        this.maxTime = distance * this.maxPace / 1000;
        this.onChangePace(this.pace);
    }

    onChangePace(pace: number) {
        this.time = Math.round(this.distance * pace / 1000);
    }

    onChangeTime(time: number) {
        this.pace = Math.round(1000 * time / this.distance);
    }

    private pad(num) {
        return ('0' + num).slice(-2);
    }

    hhmmss(seconds) {
        let minutes = Math.floor(seconds / 60);
        seconds = seconds % 60;
        let hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
        return this.pad(hours) + ':' + this.pad(minutes) + ':' + this.pad(seconds);
    }
}