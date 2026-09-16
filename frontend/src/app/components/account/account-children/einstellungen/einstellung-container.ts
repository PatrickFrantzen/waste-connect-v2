import { Component } from '@angular/core';
import { EinstellungenComponent } from './einstellungen.component';


@Component({
    selector: 'app-einstellung-container',
    template: `<app-einstellungen></app-einstellungen>`,
    styles: [''],
    imports: [EinstellungenComponent]
})
export class EinstellungContainerComponent {

}
