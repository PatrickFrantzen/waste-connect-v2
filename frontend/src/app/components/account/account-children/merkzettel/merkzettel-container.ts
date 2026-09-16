import { Component } from '@angular/core';
import { MerkzettelComponent } from './merkzettel.component';

@Component({
    selector: 'app-account-container',
    template: `<app-merkzettel></app-merkzettel>`,
    styles: [''],
    imports: [MerkzettelComponent]
})
export class MerkzettelContainerComponent {}
