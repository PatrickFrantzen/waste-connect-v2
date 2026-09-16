import { Component } from '@angular/core';
import { InserateComponent } from './inserate.component';

@Component({
    selector: 'app-account-container',
    template: `<app-inserate></app-inserate>`,
    styles: [''],
    imports: [InserateComponent]
})
export class InserateContainerComponent {}
