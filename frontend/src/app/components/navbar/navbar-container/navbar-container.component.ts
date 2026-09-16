import { Component, OnInit } from '@angular/core';

import { AsyncPipe } from '@angular/common';
import { NavbarComponent } from '../navbar.component';

@Component({
    selector: 'app-navbar-container',
    template: `<app-navbar></app-navbar>`,
    styles: [''],
    imports: [NavbarComponent, AsyncPipe]
})
export class NavbarContainerComponent  {

}
