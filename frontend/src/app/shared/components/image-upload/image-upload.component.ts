import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DateinamenPipe } from "../../pipes/dateinamen.pipe";

@Component({
    selector: 'app-image-upload',
    templateUrl: './image-upload.component.html',
    styleUrl: './image-upload.component.scss',
    imports: [CommonModule, DateinamenPipe]
})
export class ImageUploadComponent implements OnInit{
  @Input() inputId: string = '';
  @Input() label: string = '';
  @Input() imageArray: any[] = [];
  @Input() uploadPath: string[] = [];
  @Output() imagePicked = new EventEmitter<File>();
  @Output() imageDeleted = new EventEmitter<number>();
  @Output() uploadPathDeleted = new EventEmitter<{number: number, file: string}>();

  imagePreviewArray: any[] = [];

  ngOnInit(): void {

  }

  //Bild upload überarbeiten, gibt noc hfehler in der konsole
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    if (file) {
      this.imagePicked.emit(file);
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreviewArray.push(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  deleteImagePreview(index: number) {
    this.imageDeleted.emit(index);
    this.imagePreviewArray.splice(index, 1);
  }

  deleteUploadImage(index: number, file: string) {
    this.uploadPathDeleted.emit({number: index, file});
    // this.uploadPath.splice(index, 1);
  }

  getAcceptedFormats() {
    return this.inputId === 'logo' ?  'image/png, image/jpeg, image/jpg' : 'application/pdf';
  }

  isPdf(file: File | string): boolean {
    if (typeof file === 'string') {
      return file.includes('pdf');
    }
    return file.type === 'application/pdf';
  }
  
  getPreviewSource(file: File, preview: string): string {
    return this.isPdf(file) ? '../../../../assets/icons/pdf.png' : preview;
  }

  modifiyPDFName(pdfName: string) {
    const parts = pdfName.split('-+-');
    const modifiedName = parts[0].split('/').pop();
    return modifiedName;
  }
}

