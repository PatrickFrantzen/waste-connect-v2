
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-error-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrls: ['./error-dialog.component.scss'],
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatButton, MatDialogClose]
})
export class ErrorDialogComponent{
 message: string = 'Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';

  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string } ) {
   }

}
