import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms';

import {PaceComponent} from './pace.component';

@NgModule({
    declarations: [PaceComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { path: '', component: PaceComponent, pathMatch: 'full'}
        ])
    ]
})
export class PaceModule {
}