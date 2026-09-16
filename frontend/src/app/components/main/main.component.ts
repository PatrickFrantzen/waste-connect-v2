import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LandingpageContainerComponent } from '../landingpage/landingpage-container/landingpage-container.component';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    imports: [LandingpageContainerComponent]
})
export class MainComponent implements OnInit{
//   @ViewChild('drawer') public drawer!: any
//  @Input() showSidebar = false;

 constructor(){}

 ngOnInit(): void {

 }

 
}

