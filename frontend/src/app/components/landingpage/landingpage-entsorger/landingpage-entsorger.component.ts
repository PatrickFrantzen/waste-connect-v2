import { Component, Input, OnChanges, SimpleChanges, effect, inject } from '@angular/core';
import { EntsorgerNEST, EntsorgerProfil } from '../../auth/user.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';


import { EntsorgerDialogComponent } from 'src/app/shared/dialogs/entsorger-dialog/entsorger-dialog.component';
import { EntsorgerSignalsService } from 'src/app/signals/entsorger-signals.service';

@Component({
    selector: 'app-landingpage-entsorger',
    imports: [MatDialogModule, MatPaginatorModule],
    templateUrl: './landingpage-entsorger.component.html',
    styleUrl: './landingpage-entsorger.component.scss'
})
export class LandingpageEntsorgerComponent {

  totalPosts = 0;
  postsPerPage = 10;
  pageSizeOptions = [1, 2, 5, 10];
  pdfSource: string = '';
  showPdfViewer: boolean = false;

  entsorgerSignalService = inject(EntsorgerSignalsService);
  pageSizeSignal = this.entsorgerSignalService.pageSize;
  currentPageSignal = this.entsorgerSignalService.currentPage;
  filterEntsorgerSignal = this.entsorgerSignalService.filterEntsorger;

  constructor(
    private dialog: MatDialog,
  ) {

  }

  openProfilDialog(entsorger: EntsorgerNEST) {
    this.dialog.open(EntsorgerDialogComponent, {
      data: entsorger,
      disableClose: true,
    });
  }

  onChangePage(pageData: PageEvent) {
    this.pageSizeSignal.set(pageData.pageSize);
    this.currentPageSignal.set(pageData.pageIndex + 1);
  }
}
