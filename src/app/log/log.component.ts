import {Component, OnInit} from '@angular/core';

import {Post} from './post';
import {SeoService} from '../-shared/services/seo.service';

@Component({
    selector: 't-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

    public logs: Post[] = [];

    constructor(private seoService: SeoService) {
    }

    ngOnInit() {
        this.seoService
            .setTitle('Log activities of Artem Koziar / Blog')
            .setDescription('My last updates');

        this.logs.push(new Post({
            title: 'Launching of Running Pace Calculator',
            date: 'April 2018',
            content: `
        <p>I've just created a new section of this site - <strong>apps</strong>. Which will be used for any my, surprise, surprise,  applications). <br>And first of them is <a href="/apps/pace">Running Pace Calculator</a> for planning my (and anyone) marathons.</p>
        <ul>
            <li><a href="/apps/pace/1000">1 km Pace Calculator</a></li>
            <li><a href="/apps/pace/2000">2 km Pace Calculator</a></li>
            <li><a href="/apps/pace/3000">3 km Pace Calculator</a></li>
            <li><a href="/apps/pace/5000">5 km Pace Calculator</a></li>
            <li><a href="/apps/pace/10000">10 km Pace Calculator</a></li>
            <li><a href="/apps/pace/15000">15 km Pace Calculator</a></li>
            <li><a href="/apps/pace/21097">Half Marathon Pace Calculator (21.097 km)</a></li>
            <li><a href="/apps/pace/42195">Marathon Calculator (42.195 km)</a></li>
            <li><a href="/apps/pace/50000">50 km Pace Calculator</a></li>
            <li><a href="/apps/pace/100000">100 km Pace Calculator</a></li>
        </ul>
        `}));

        this.logs.push(new Post({
            title: 'Judging and mentoring at IT Business School',
            date: 'April 2018',
            content: `
        <p><img src="/i/logs/itbs-2018-04.jpg" alt="Judging and mentoring at IT Business School" class="img"></p>
        <p>Thanks, #ITBS for the new role by me &mdash; judge and mentor on IT Business School!</p>
        `}));

        this.logs.push(new Post({
            title: 'VR People Public Party',
            date: 'July 2017',
            content: `
        <p><img src="/i/vr.people/party-v2.0/vr-people-party-2.0-bg-1.jpg" alt="VR People Public Party" class="img"></p>
        <p>We did it!</p>
        <p>We've released <a href="http://www.kantarretail.com/virtual-reality/">VR Infinity 2.0</a>! And more. We've presented it in <a href="https://www.facebook.com/events/1358829717546320/">VR People Public Party</a>.</p>
        <p>This was a great experience. And we want more)</p>
        <p>Viva <a href="https://www.facebook.com/groups/vr.people/">VR.People</a>!</p>
        <p><img src="/i/vr.people/party-v2.0/vr-people-party-2.0-1.jpg" alt="VR People Public Party"></p>
        <p><img src="/i/vr.people/party-v2.0/vr-people-party-2.0-2.jpg" alt="VR People Public Party"></p>
        <p><img src="/i/vr.people/party-v2.0/vr-people-party-2.0-3.jpg" alt="VR People Public Party"></p>
        <!--<p><iframe width="560" height="315" src="https://www.youtube.com/embed/D6ecTSb7z-E" frameborder="0" allowfullscreen></iframe></p>-->
        <p><img src="/i/vr.people/party-v2.0/vr-people-party-2.0-bg-2.jpg" alt="VR People Public Party"></p>
        `}));

        this.logs.push(new Post({
            title: 'Public People',
            date: 'May 2017',
            content: `
        <p>Great intense workout about public speaking. Thanks a lot, Roman Lyakh!</p>
        <p><img src="/i/public-people-2017.jpg" alt="Public People"></p>
        <p><a href="http://www.public-people.com.ua/">PublicPeople</a>, <a href="https://www.facebook.com/Lyakh.Roman">Roman Lyakh</a>, Facebook closed group <a href="https://www.facebook.com/groups/1845162579080300/">Public People May</a></p>
        `}));

        this.logs.push(new Post({
            title: 'VR People Weekend',
            date: 'May 2017',
            content: `
        <p>The value of a product is the sum of Clients' problems it solves. When team wants to bring more value to the Clients it meets on weekend to take extra user feedback into release scope. #vrpeople #vrinfinity #kantarretail</p>
        <p><img src="/i/vr-people-weekend-2017-05-27.jpg" alt="VR People"></p>
        <p>&copy; <a href="https://www.instagram.com/vr.people/">vr.people</a></p>
        `}));

        this.logs.push(new Post({
            title: 'My workplace',
            date: 'April 2017',
            content: `
        <p>Only the people who take learning, growth and skills development into their own hands will be tomorrow's leaders.
          <br>🏆😁 #vrinfinity #vrpeople #kyiv #ukraine #krvr #vr #vrinfinity #kantar #kantarretail #kantarretailvirtualreality #greatpeople #development #selfdevelopment #learning #growth #kyiv #ukraine</p>
        <p><img src="/i/vr-people-workplace-2017-04-14.jpg" alt="workplace"></p>
        <p>&copy; <a href="https://www.instagram.com/vr.people/">vr.people</a></p>
        `}));

        this.logs.push(new Post({
            title: 't-json-viewer',
            date: 'December 2016',
            content: `
        <p>Angular 2 component for objects debug. Collapsible JSON in HTML with syntax highlight like Chrome DevTools.</p>
        <p><a href="/t-json-viewer/"><img src="/i/t-json-viewer.png" alt="Public People"></a></p>
        <p>
          Example: <a href="http://temich.in.ua/t-json-viewer/">temich.in.ua/t-json-viewer</a><br>
          Github: <a href="https://github.com/temich666/t-json-viewer">github.com/temich666/t-json-viewer</a><br>
          NPM Package: <a href="https://www.npmjs.com/package/t-json-viewer">npmjs.com/package/t-json-viewer</a>
        </p>
        `}));

        this.logs.push(new Post({
            title: 'Branching Strategy',
            date: 'October 2016',
            content: `
        <p>Presentation about Git Branching Strategy and Git Rebase for Kantar Retail Virtual Reality</p>
        <p><a href="/i/kantar-git-branching-strategy.pdf">http://temich.in.ua/i/kantar-git-branching-strategy.pdf</a></p>
        `}));

        this.logs.push(new Post({
            title: 'Angular 2 Presentation #2',
            date: 'October 2016',
            content: `
        <p>Presentation about new framework and new opportunity for Kantar Retail Virtual Reality</p>
        <p><a href="/i/angular2-4kantar.pdf">http://temich.in.ua/i/angular2-4kantar.pdf</a></p>
        `}));

        this.logs.push(new Post({
            title: 'Angular 2 Presentation',
            date: 'September 2016',
            content: `
        <p>Technical presentation about Angular2 for JavaScript team in Ciklum</p>
        <p><a href="/i/angular2.pdf">http://temich.in.ua/i/angular2.pdf</a></p>
        `}));

        this.logs.push(new Post({
            title: 'GDG DevFest Ukraine 2016',
            date: 'September 2016',
            content: `
        <p>
          <img src="/i/gdg.jpg" alt="GDC DevFest Ukraine 2016">
        </p>
        `}));
    }

}
