import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatTooltip } from '@angular/material/tooltip';
import { UpdateUserService } from 'src/app/components/auth/services/update-user.service';
import { LogistikProfil } from 'src/app/components/auth/user.model';
import { ImageUploadComponent } from 'src/app/shared/components/image-upload/image-upload.component';
import { AvvDialogComponent } from 'src/app/shared/dialogs/avv-dialog/avv-dialog.component';
import {
  AvvDialogService,
  AvvEntriesInterface,
} from 'src/app/shared/dialogs/avv-dialog/avv-dialog.service';
import { mimeType } from 'src/app/shared/validators/mime-type-image.validators';
import { mimeTypePDForImage } from 'src/app/shared/validators/mime-type-pdf.validators';
import { ProfilService } from '../profil-service.service';

@Component({
    selector: 'app-logistikprofil',
    imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadComponent,
    MatInput,
    MatTooltip,
    MatFormFieldModule,
    MatSelectModule
],
    templateUrl: './logistikprofil.component.html',
    styleUrl: './logistikprofil.component.scss'
})
export class LogistikprofilComponent implements OnInit {
  @Input() logistikProfil: LogistikProfil = {} as LogistikProfil;

  fb = inject(FormBuilder);
  logistik!: LogistikProfil;
  logoPath: string[] = [];

  bildArray: File[] = [];
  imagePreview: string = '';
  imagePreviewArray: string[] = [];

  zertifikateArray: File[] = [];
  zertifikatePreview: string = '';
  zertifikatePreviewArray: string[] = [];
  zertifikatePath: string[] = [];

  genehmigungenArray: File[] = [];
  genehmigungenPreview: string = '';
  genehmigungenPreviewArray: string[] = [];
  genehmigungenPath: string[] = [];

  dienstleistungenliste: string[] = [];
  fuhrparkliste: string[] = [];
  logistikliste: string[] = [];
  logistikdienstleistungliste: string[] = [];

  avvListe: AvvEntriesInterface = {};
  chunkAvvListe: AvvEntriesInterface[] = [];
  avvZusammenfassung: string[] = [];

  zertifikatsbestaetigungenliste: string[] = [];

  formFieldsInputLogistik = this.profilService.formFieldsInputLogistik;

  formFieldsSelectLogistik = this.profilService.formFieldsSelectLogistik;

  constructor(
    private updateUserService: UpdateUserService,
    private dialog: MatDialog,
    private avvDialogService: AvvDialogService,
    private profilService: ProfilService
  ) {
    this.logistik = this.profilService.logistik;

  }

  // changeLogistikForm = this.fb.group({
  //   ansprechpartner: new FormControl<string>('', [Validators.required]),
  //   email: new FormControl<string>('', [Validators.required, Validators.email]),
  //   telefonnummer: new FormControl<string>('', [
  //     Validators.required,
  //     Validators.pattern('^[0-9]*$'),
  //   ]),
  //   logo: new FormControl<File[] | null>(null, { asyncValidators: [mimeType] }),
  //   befoerderernummer: new FormControl<string>('', [Validators.required]),
  //   fuhrpark: new FormControl<string>(''),
  //   dienstleistungen: new FormControl<string>('', [
  //     Validators.maxLength(25),
  //     Validators.minLength(3),
  //   ]),
  //   besonderheiten: new FormControl<string>(''),
  //   logistik: new FormControl<string[]>([]),
  //   logistikdienstleistungen: new FormControl<string>(''),
  //   zertifikate: new FormControl<File[] | null>(null, {
  //     asyncValidators: [mimeTypePDForImage],
  //   }),
  //   genehmigungen: new FormControl<File[] | null>(null, {
  //     asyncValidators: [mimeTypePDForImage],
  //   }),
  //   zertifikatsbestaetigungen: new FormControl<string[]>([]),
  // });

  ngOnInit(): void {
    // if (this.logistikProfil) {
    //   this.patchLogistikProfile();
    // }
  }

  // patchLogistikProfile() {
  //   let mergedAvvListe = {};
  //   if (this.logistikProfil.avv != undefined) {
  //    mergedAvvListe = this.profilService.mergeObjects(this.logistikProfil.avv);
  //   }

  //   this.changeLogistikForm.patchValue({
  //     ansprechpartner: this.logistikProfil.ansprechpartner,
  //     email: this.logistikProfil.email,
  //     telefonnummer: this.logistikProfil.telefonnummer,
  //     logo: this.logistikProfil.logo,
  //     dienstleistungen: '',
  //     besonderheiten: this.logistikProfil.besonderheiten,
  //     befoerderernummer: this.logistikProfil.befoerderernummer,
  //     logistik: this.logistikProfil.logistik,
  //     zertifikate: this.logistikProfil.zertifikate,
  //     genehmigungen: this.logistikProfil.genehmigungen,
  //     zertifikatsbestaetigungen: [],
  //   });
  //   this.logoPath = this.logistikProfil.logoPath!;
  //   this.zertifikatePath = this.logistikProfil.zertifikatePath!;
  //   this.genehmigungenPath = this.logistikProfil.genehmigungenPath!;
  //   this.dienstleistungenliste = this.logistikProfil.dienstleistungen;
  //   this.fuhrparkliste = this.logistikProfil.fuhrpark;
  //   this.logistikliste = this.logistikProfil.logistik;
  //   this.logistikdienstleistungliste =
  //     this.logistikProfil.logistikdienstleistungen;
  //   this.avvListe = mergedAvvListe;
  //   this.avvZusammenfassung = this.logistikProfil.avvZusammenfassung;
  // }

  // changeLogistikProfile() {
  //   const {
  //     ansprechpartner,
  //     email,
  //     telefonnummer,
  //     logo,
  //     befoerderernummer,
  //     besonderheiten,
  //     logistik,
  //     zertifikate,
  //     genehmigungen,
  //   } = this.changeLogistikForm.value;
  //   this.logistik.ansprechpartner = ansprechpartner!;
  //   this.logistik.email = email!;
  //   this.logistik.telefonnummer = telefonnummer!;
  //   this.logistik.logo = logo!;
  //   this.logistik.logoPath = this.logoPath;
  //   this.logistik.avvZusammenfassung = this.avvZusammenfassung;
  //   this.logistik.avv = this.chunkAvvListe;
  //   this.logistik.befoerderernummer = befoerderernummer!;
  //   this.logistik.fuhrpark = this.fuhrparkliste;
  //   this.logistik.dienstleistungen = this.dienstleistungenliste;
  //   this.logistik.besonderheiten = besonderheiten!;
  //   this.logistik.logistik = logistik!;
  //   this.logistik.logistikdienstleistungen = this.logistikdienstleistungliste;
  //   this.logistik.zertifikate = zertifikate!;
  //   this.logistik.zertifikatePath = this.zertifikatePath;
  //   this.logistik.genehmigungen = genehmigungen!;
  //   this.logistik.genehmigungenPath = this.genehmigungenPath;
  //   this.logistik.zertifikatsbestaetigungen =
  //     this.zertifikatsbestaetigungenliste!;
  //   this.updateUserService.updateLogistikProfil(this.logistik);
  // }

  // onFilePicked(file: File, fileType: string) {
  //   const fileArray = this.getFileArray(fileType) as File[];
  //   const previewArray = this.getPreviewArray(fileType);
  //   const formControlName = this.getFormControlName(fileType);

  //   fileArray.push(file);
  //   this.changeLogistikForm.patchValue({ [formControlName]: fileArray });
  //   this.changeLogistikForm.get(formControlName)?.updateValueAndValidity();

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const preview = reader.result as string;
  //       previewArray.push(preview);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  // deleteFilePreview(i: number, fileType: string) {
  //   const fileArray = this.getFileArray(fileType);
  //   const previewArray = this.getPreviewArray(fileType);
  //   const formControlName = this.getFormControlName(fileType);

  //   previewArray.splice(i, 1);
  //   fileArray.splice(i, 1);
  //   this.changeLogistikForm.patchValue({ [formControlName]: fileArray });
  //   this.changeLogistikForm.get(formControlName)?.updateValueAndValidity();
  // }

  // deleteUploadPath(i: number, fileType: string) {
  //   const uploadPathArray = this.getFileArray(fileType);
  //   uploadPathArray.splice(i, 1);
  // }

  // getFileArray(fileType: string): File[] | string[] {
  //   switch (fileType) {
  //     case 'logo':
  //       return this.bildArray;
  //     case 'logoUpload':
  //       return this.logoPath;
  //     case 'zertifikate':
  //       return this.zertifikateArray;
  //     case 'zertifikateUpload':
  //       return this.zertifikatePath;
  //     case 'genehmigungen':
  //       return this.genehmigungenArray;
  //     case 'genehmigungenUpload':
  //       return this.genehmigungenPath;
  //     default:
  //       return [];
  //   }
  // }

  // getPreviewArray(fileType: string): string[] {
  //   switch (fileType) {
  //     case 'logo':
  //       return this.imagePreviewArray;
  //     case 'zertifikate':
  //       return this.zertifikatePreviewArray;
  //     case 'genehmigungen':
  //       return this.genehmigungenPreviewArray;
  //     default:
  //       return [];
  //   }
  // }

  // getFormControlName(fileType: string): string {
  //   switch (fileType) {
  //     case 'logo':
  //       return 'logo';
  //     case 'zertifikate':
  //       return 'zertifikate';
  //     case 'genehmigungen':
  //       return 'genehmigungen';
  //     default:
  //       return '';
  //   }
  // }

  // updateFormFieldSelectOptions(event: MatSelectChange, bereich: string) {
  //   let value: string = event.value;
  //   this.changeLogistikForm.patchValue({ [bereich]: value });
  // }

  // addToList(bereich: string) {
  //   const value = this.changeLogistikForm.get(bereich)?.value;
  //   if (value) {
  //     const liste = this.getArrayBasedOnBereich(bereich);
  //     liste.push(value);
  //     this.changeLogistikForm.patchValue({ [bereich]: liste });
  //     this.changeLogistikForm.get(bereich)?.setValue('');
  //   }
  // }

  // deleteTaetigkeitsbereich(i: number, bereich: string) {
  //   this.getArrayBasedOnBereich(bereich).splice(i, 1);
  // }

  // getArrayBasedOnBereich(bereich: string): any[] {
  //   switch (bereich) {
  //     case 'dienstleistungen':
  //       return this.dienstleistungenliste;
  //     case 'logistik':
  //       return this.logistikliste;
  //     case 'zertifikatsbestaetigungen':
  //       return this.zertifikatsbestaetigungenliste;
  //     case 'fuhrpark':
  //       return this.fuhrparkliste;
  //     case 'logistikdienstleistungen':
  //       return this.logistikdienstleistungliste;
  //     default:
  //       return [];
  //   }
  // }

  // openDialog() {
  //   const dialogRef = this.dialog.open(AvvDialogComponent, {
  //     data: this.avvListe,
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     this.avvListe = this.avvDialogService.avvChoosenEntries();
  //     this.chunkAvvListe = this.profilService.splitObject(this.avvListe, 250);
  //     this.avvZusammenfassung = this.avvDialogService.avvEntriesText();
  //   });
  // }
}
