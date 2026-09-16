import { Component, inject } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { InseratSignalsService } from 'src/app/signals/inserat-signals.service';
import { InseratTemplateComponent } from "../../inserat-template/inserat-template.component";

@Component({
    selector: 'app-landingpage-inserate',
    imports: [MatDialogModule, MatPaginatorModule, InseratTemplateComponent],
    templateUrl: './landingpage-inserate.component.html',
    styleUrl: './landingpage-inserate.component.scss'
})
export class LandingpageInserateComponent  {

  totalPosts = 0;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  pdfSource: string = '';
  showPdfViewer: boolean = false;

  inserateSignalService = inject(InseratSignalsService);
  inserateSignal = this.inserateSignalService.inserate;
  filterInserateSignal = this.inserateSignalService.filterInserate;
  pageSizeSignal = this.inserateSignalService.pageSize;
  currentPageSignal = this.inserateSignalService.currentPage;
  numberOfInserateSignal = this.inserateSignalService.filterInserate().totalInserate;
  wasteOfTheDaySignal = this.inserateSignalService.wasteOfTheDay;

  onChangePage(pageData: PageEvent) {
    this.pageSizeSignal.set(pageData.pageSize);
    this.currentPageSignal.set(pageData.pageIndex + 1);
  }
}
