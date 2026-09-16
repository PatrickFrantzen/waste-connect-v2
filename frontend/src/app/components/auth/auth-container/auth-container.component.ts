import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
    selector: 'app-auth-container',
    template: '<app-login></app-login>',
    styles: [''],
    standalone: true,
    imports: [LoginComponent]
})
export class AuthContainerComponent {

}
