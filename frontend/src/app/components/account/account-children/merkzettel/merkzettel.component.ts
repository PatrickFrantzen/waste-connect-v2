import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InseratNEST } from 'src/app/components/angebot/angebot.model';
import { InseratDialogComponent } from 'src/app/shared/dialogs/inserat-dialog/inserat-dialog.component';
import { DatePipe } from '@angular/common';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';

@Component({
    selector: 'app-merkzettel',
    templateUrl: './merkzettel.component.html',
    styleUrls: ['./merkzettel.component.scss'],
    imports: [DatePipe]
})
export class MerkzettelComponent {
  dialog = inject(MatDialog);
  router = inject(Router);

  accountSignal = inject(AccountSignalsService);

  openInseratDialog(inserat: InseratNEST) {
    this.dialog.open(InseratDialogComponent, {
      data: inserat,
      disableClose: true,
    });
  }

  navigateToInserateSuchen() {
    this.router.navigate(['/']);
  }
}
