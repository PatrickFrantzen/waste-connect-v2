import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntsorgerSummaryComponent } from './entsorger-summary.component';

@Component({
    selector: 'app-inserat-summary-container',
    template: `<app-entsorger-summary
        [entsorgerID]="(entsorgerID) || ''"
    ></app-entsorger-summary>`,
    styles: [''],
    imports: [EntsorgerSummaryComponent]
})

export class EntsorgerSummaryContainerComponent implements OnInit{
    entsorgerID: string = '';
    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.entsorgerID = params.get('id')!;
        });
    }

}