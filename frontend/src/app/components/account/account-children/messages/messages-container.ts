import { Component, inject } from '@angular/core';

import { MessagesComponent } from './messages.component';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';

@Component({
    selector: 'app-account-container',
    template: `<app-messages></app-messages>`,
    styles: [''],
    imports: [MessagesComponent]
})
export class MessagerContainerComponent {

}
