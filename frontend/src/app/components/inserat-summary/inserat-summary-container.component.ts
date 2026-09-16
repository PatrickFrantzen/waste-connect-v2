import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InseratSummaryComponent } from './inserat-summary.component';

@Component({
    selector: 'app-inserat-summary-container',
    template: `<app-inserat-summary
        [inseratID]="(inseratID) || ''"
    ></app-inserat-summary>`,
    styles: [''],
    imports: [InseratSummaryComponent]
})

export class InseratSummaryContainerComponent implements OnInit{
    inseratID: string = '';
    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.inseratID = params.get('id')!;
            console.log(this.inseratID);
        });
    }

}