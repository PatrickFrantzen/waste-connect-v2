import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { InseratService } from 'src/app/components/landingpage/landingpage-anbieten/inserat.service';

@Component({
    selector: 'app-pdf-dialog',
    imports: [NgxExtendedPdfViewerModule],
    templateUrl: './pdf-dialog.component.html',
    styleUrl: './pdf-dialog.component.scss'
})
export class PdfDialogComponent implements OnInit {
  pdfSource!: string | ArrayBuffer | null;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public inseratData: { inseratID: string; pdfPath: string },
    private inserateService: InseratService,
    private dialogRef: MatDialogRef<PdfDialogComponent> // Add MatDialogRef
  ) {}

  ngOnInit(): void {

    this.inserateService
      .getAnalysePDF(this.inseratData.inseratID, this.inseratData.pdfPath)
      .subscribe({
        next: async (res) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            this.pdfSource = reader.result as string; // this is the DataURL
          };
          reader.readAsDataURL(res);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  closeDialog() {
    this.dialogRef.close(); // Close the dialog
  }
}
