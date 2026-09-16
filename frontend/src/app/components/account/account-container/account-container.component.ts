import { Component } from '@angular/core';

import { AccountComponent } from '../account.component';

@Component({
    selector: 'app-account-container',
    template: `<app-account></app-account>`,
    styles: [''],
    imports: [AccountComponent]
})
export class AccountContainerComponent {}
