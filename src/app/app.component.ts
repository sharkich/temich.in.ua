import {Component} from '@angular/core';

@Component({
    selector: 't-app-root',
    template: `
        <t-header></t-header>
        <main role="main" class="main t-main">
            <router-outlet></router-outlet>
        </main>
        <t-footer></t-footer>
    `,
    styles: []
})
export class AppComponent {

}
