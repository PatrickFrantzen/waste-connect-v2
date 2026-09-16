import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BestellungService } from '../../services/bestellung.service';

@Component({
    selector: 'app-confirm-dialog',
    imports: [],
    templateUrl: './confirm-dialog.component.html',
    styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { inseratID: string, dates: string[], text: string, type: string},
    private dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private dialog: MatDialog,
    private bestellungService: BestellungService
  ) { }



  confirm() {
    //Ans Backend senden und bei Erfolg alle Dialoge schließen
    this.bestellungService.wasteOfTheDayReservierung(this.data.inseratID, this.data.dates, this.data.type, () => {
      this.dialog.closeAll()
    });
  }

  abbrechen() {
    this.dialogRef.close()
  }

}
