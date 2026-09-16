import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-preistabelle-dialog',
    imports: [MatCardModule],
    templateUrl: './preistabelle-dialog.component.html',
    styleUrl: './preistabelle-dialog.component.scss'
})
export class PreistabelleDialogComponent {
    dialogRef = inject(MatDialogRef);
  

    close(){
        this.dialogRef.close();
    }
}
