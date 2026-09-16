import { Component } from '@angular/core';
import { LandingpageComponent } from '../landingpage.component';

export interface PageChangeEvent {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex: number;
}

export interface ShowData {
  showInserate: boolean;
  showEntsorger: boolean;
  showLogistik: boolean;
}

@Component({
    selector: 'app-landingpage-container',
    template: `<app-landingpage></app-landingpage>`,
    styles: [''],
    imports: [LandingpageComponent]
})
export class LandingpageContainerComponent {}
