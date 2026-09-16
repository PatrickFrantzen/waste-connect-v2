import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
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
import {
  EntsorgerNEST,
  EntsorgerProfil,
} from 'src/app/components/auth/user.model';
import { ImageUploadComponent } from 'src/app/shared/components/image-upload/image-upload.component';
import { AvvDialogComponent } from 'src/app/shared/dialogs/avv-dialog/avv-dialog.component';
import {
  AvvDialogService,
  AvvEntriesInterface,
} from 'src/app/shared/dialogs/avv-dialog/avv-dialog.service';
import { mimeType } from 'src/app/shared/validators/mime-type-image.validators';
import { mimeTypePDForImage } from 'src/app/shared/validators/mime-type-pdf.validators';
import { ProfilService } from '../profil-service.service';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';
import { BundeslaenderSignalsService } from 'src/app/signals/bundeslaender-signals.service';
import { BundeslaenderService } from 'src/app/shared/services/bundeslaender.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-entsorgerprofil',
    imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    ImageUploadComponent,
    MatInput,
    MatTooltip,
    MatFormFieldModule,
    MatSelectModule,
    JsonPipe,
    NgxMatSelectSearchModule
],
    templateUrl: './entsorgerprofil.component.html',
    styleUrl: './entsorgerprofil.component.scss'
})
export class EntsorgerprofilComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder);
  entsorgerSignal = inject(AccountSignalsService);
  bundeslaenderSignalService = inject(BundeslaenderSignalsService);
  bundeslaenderService = inject(BundeslaenderService);
  accountSignal = inject(AccountSignalsService);
  entsorgerProfil = this.entsorgerSignal.entsorgerForDisplay;
  bundeslaender = this.bundeslaenderSignalService.bundeslaenderSignal;
  filteredGemeindenBySearch = signal<string>('')
  public filterCtrl: FormControl<string | null> = new FormControl<string>('');
  protected _onDestroy = new Subject<void>();

  gemeindenFromLocal = signal<{ name: string; postalCode: string }[]>([]);
  logoPath: string[] = [];

  bildArray: File[] = [];
  bildArrayLogistik: File[] = [];
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

  taetigkeitsliste: string[] = [];

  dienstleistungenliste: string[] = [];

  logistikliste: string[] = [];

  avvListe: AvvEntriesInterface = {};
  chunkAvvListe: AvvEntriesInterface[] = [];
  avvZusammenfassung: string[] = [];

  zertifikatsbestaetigungenliste: string[] = [];

  taetigkeitsbereichAuswahl: string[] = [
    'Sammeln',
    'Befördern',
    'Lagern',
    'Behandeln',
    'Verwerten',
    'Beseitigen',
    'Handeln',
    'Makeln',
    'Erstbehandlungsanlage',
    'Vorbehandlungsanlage',
  ];

  logistikAuswahl: string[] = [
    'Abfälle können vom Abfallerzeuger angeliefert werden',
    'Abfälle können beim Abfallerzeuger abgeholt werden',
  ];

  formFieldsInputEntsorger = this.profilService.formFieldsInputEntsorger;

  // formFieldsSelectEntsorger = this.profilService.formFieldsSelectEntsorger;

  bundeslandEvent: MatSelectChange | string = '';


  constructor(
    private updateUserService: UpdateUserService,
    private dialog: MatDialog,
    private avvDialogService: AvvDialogService,
    private profilService: ProfilService
  ) {
    // effect(() => {
    //   console.log('Daten', this.entsorgerProfil().entsorgerFilepath);
    // });
  }

  changeEntsorgerForm = this.fb.group({
    ansprechpartner: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    telefonnummer: new FormControl<string>('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    postleitzahl: new FormControl<string>(
      { value: '', disabled: true },
      Validators.required
    ),
    stadt: new FormControl<string>({ value: '', disabled: true }, [
      Validators.required,
    ]),
    bundesland: new FormControl<string>('', [Validators.required]),
    logo: new FormControl<string[] | null>(null, {
      asyncValidators: [mimeType],
    }),
    taetigkeitsbereich: new FormControl<string[]>([]),
    dienstleistungen: new FormControl<string>('', [
      Validators.maxLength(25),
      Validators.minLength(3),
    ]),
    besonderheiten: new FormControl<string>(''),
    logistik: new FormControl<string[]>([]),
    zertifikate: new FormControl<string[] | null>(null, {
      asyncValidators: [mimeTypePDForImage],
    }),
    genehmigungen: new FormControl<string[] | null>(null, {
      asyncValidators: [mimeTypePDForImage],
    }),
    zertifikatsbestaetigungen: new FormControl<string>(''),
  });

  mergedListe = computed(() => {
    return this.profilService.mergeObjects(this.entsorgerProfil().avv);
  });

  ngOnInit(): void {
    this.filterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filteredGemeindenBySearch.set(this.filterCtrl.value!);
    });
    this.patchEntsorgerProfile();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  filteredGemeinden = computed(() => {
    let search = this.filteredGemeindenBySearch();
    let gemeinden = this.gemeindenFromLocal();
    if (!search) {
      return gemeinden;
    } else {
      search = search.toLowerCase();
    }

    return gemeinden.filter((gemeinde) => {
      return gemeinde.name.toLowerCase().includes(search) || gemeinde.postalCode.includes(search);
    });

  })

  patchEntsorgerProfile() {
    this.changeEntsorgerForm.patchValue({
      ansprechpartner: this.entsorgerProfil().entsorgerdaten.ansprechpartner,
      email: this.entsorgerProfil().entsorgerdaten.email,
      telefonnummer: this.entsorgerProfil().entsorgerdaten.telefonnummer,
      bundesland: this.entsorgerProfil().firmendaten.bundesland,
      // stadt: this.entsorgerProfil().firmendaten.stadt,
      // postleitzahl: this.entsorgerProfil().firmendaten.postleitzahl,
      besonderheiten:
        this.entsorgerProfil().entsorgerBeschreibung.besonderheiten,
    });

    this.changeEntsorgerForm
      .get('taetigkeitsbereich')
      ?.setValue(
        this.entsorgerProfil().entsorgerBeschreibung.taetigkeitsbereich
      );
    this.changeEntsorgerForm
      .get('logistik')
      ?.setValue(this.entsorgerProfil().entsorgerBeschreibung.logistik);

    const bundeslandForm = this.changeEntsorgerForm.get('bundesland')?.value;
    if (bundeslandForm) {
      this.changeEntsorgerForm.get('stadt')?.enable();
      this.changeEntsorgerForm.get('postleitzahl')?.enable();

      const selectedBundeslandObj = this.bundeslaenderSignalService
        .bundeslaenderSignal()
        .find((bundesland) => bundesland.name === bundeslandForm);
      if (selectedBundeslandObj) {
        this.getGemeinden(
          this.entsorgerProfil().firmendaten.bundesland,
          selectedBundeslandObj.key
        );
      }

      this.changeEntsorgerForm.patchValue({
        stadt: this.entsorgerProfil().firmendaten.stadt,
        postleitzahl: this.entsorgerProfil().firmendaten.postleitzahl,
      });
    }
  }

  async getGemeinden(
    bundeslandEvent: MatSelectChange | string,
    bundeslandKey: string
  ) {
    this.bundeslandEvent = bundeslandEvent;

    if (bundeslandEvent === undefined) {
      this.changeEntsorgerForm.get('bundesland')?.setValue(bundeslandEvent);
      this.changeEntsorgerForm.get('postleitzahl')?.disable();
      this.changeEntsorgerForm.get('bundesland')?.updateValueAndValidity();
      return;
    }

    let bundeslandName = '';
    if (typeof bundeslandEvent === 'string') {
      bundeslandName = bundeslandEvent;
    } else {
      bundeslandName = bundeslandEvent.value;
    }

    this.changeEntsorgerForm.get('postleitzahl')?.enable();
    this.changeEntsorgerForm.get('postleitzahl')?.setValue('');
    this.changeEntsorgerForm.get('postleitzahl')?.markAsDirty();
    this.changeEntsorgerForm.get('postleitzahl')?.markAsTouched();

    const bundeslandKeyFromEvent = this.bundeslaenderSignalService
      .bundeslaenderSignal()
      .find((bundesland) => bundesland.name === bundeslandName)?.key;

    if (bundeslandKey) {
      this.gemeindenFromLocal.set(
        this.bundeslaenderService.getGemeindeByBundeslandID(bundeslandKey));
    } else {
      this.gemeindenFromLocal.set(
        this.bundeslaenderService.getGemeindeByBundeslandID(
          bundeslandKeyFromEvent!
        ));
    }

    //Hamburg = 02, Berlin = 11, Bremen = 04,

    this.gemeindenFromLocal().sort((a, b) => {
      if (a.postalCode > b.postalCode) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  getStadt(postleitzahl: MatSelectChange) {
    const postleitzahlValue = postleitzahl.value;
    const gemeinde = this.gemeindenFromLocal().find(
      (gemeinde) => gemeinde.postalCode === postleitzahlValue
    )?.name;
    this.changeEntsorgerForm.get('stadt')!.setValue(gemeinde!);
    this.changeEntsorgerForm.get('postleitzahl')!.setValue(postleitzahlValue);
  }


  changeEntsorgerProfile() {
    const ansprechpartner = this.changeEntsorgerForm.get('ansprechpartner')
      ?.value
      ? this.changeEntsorgerForm.get('ansprechpartner')?.value
      : this.entsorgerSignal.entsorgerForDisplay().entsorgerdaten
          .ansprechpartner;
    const telefonnummer = this.changeEntsorgerForm.get('telefonnummer')?.value
      ? this.changeEntsorgerForm.get('telefonnummer')?.value
      : this.entsorgerSignal.entsorgerForDisplay().entsorgerdaten.telefonnummer;
    const email = this.changeEntsorgerForm.get('email')?.value
      ? this.changeEntsorgerForm.get('email')?.value
      : this.entsorgerSignal.entsorgerForDisplay().entsorgerdaten.email;
    const besonderheiten = this.changeEntsorgerForm.get('besonderheiten')?.value
      ? this.changeEntsorgerForm.get('besonderheiten')?.value
      : this.entsorgerSignal.entsorgerForDisplay().entsorgerBeschreibung
          .besonderheiten;
    const entsorger: EntsorgerNEST = {
      _id: this.entsorgerSignal.entsorgerForDisplay()._id,
      firmendaten: {
        firmenname:
          this.entsorgerSignal.entsorgerForDisplay().firmendaten.firmenname,
        firmenadresse:
          this.entsorgerSignal.entsorgerForDisplay().firmendaten.firmenadresse,
        firmenwebseite:
          this.entsorgerSignal.entsorgerForDisplay().firmendaten.firmenwebseite,
        standortFavoriten: this.entsorgerSignal.entsorgerForDisplay().firmendaten.standortFavoriten,
        ansprechpartner: ansprechpartner!,
        telefonnummer: telefonnummer!,
        bundesland: this.changeEntsorgerForm.get('bundesland')?.value!,
        stadt: this.changeEntsorgerForm.get('stadt')?.value!,
        postleitzahl: this.changeEntsorgerForm.get('postleitzahl')?.value!,
      },
      entsorgerdaten: {
        ansprechpartner: ansprechpartner!,
        email: email!,
        telefonnummer: telefonnummer!,
      },
      entsorgerFilepath: {
        logoPath:
          this.entsorgerSignal.entsorgerForDisplay().entsorgerFilepath.logoPath,
        zertifikatePath:
          this.entsorgerSignal.entsorgerForDisplay().entsorgerFilepath
            .zertifikatePath,
        genehmigungenPath:
          this.entsorgerSignal.entsorgerForDisplay().entsorgerFilepath
            .genehmigungenPath,
      },
      entsorgerBeschreibung: {
        taetigkeitsbereich:
          this.entsorgerSignal.entsorgerForDisplay().entsorgerBeschreibung
            .taetigkeitsbereich,
        dienstleistungen:
          this.entsorgerSignal.entsorgerForDisplay().entsorgerBeschreibung
            .dienstleistungen,
        logistik:
          this.entsorgerSignal.entsorgerForDisplay().entsorgerBeschreibung
            .logistik,
        zertifikatsbestaetigungen:
          this.entsorgerSignal.entsorgerForDisplay().entsorgerBeschreibung
            .zertifikatsbestaetigungen,
        besonderheiten: besonderheiten!,
      },
      avv: this.entsorgerSignal.entsorgerForDisplay().avv,
      avvZusammenfassung:
        this.entsorgerSignal.entsorgerForDisplay().avvZusammenfassung,
      private: this.entsorgerSignal.entsorgerForDisplay().private,
    };

    this.updateUserService.updateEntsorger(entsorger).subscribe(() => {
      this.logoPath = [];
      this.genehmigungenPath = [];
      this.zertifikatePath = [];

      if (this.bildArray.length > 0) {
        this.updateUserService
          .uploadEntsorgerLogo(this.bildArray)
          .subscribe((res) => {
            if (res.paths) {
              this.logoPath = res.paths;
              console.log('Logo Path', this.logoPath);
            }
          });
      }
      if (this.zertifikateArray.length > 0) {
        this.updateUserService
          .uploadEntsorgerZertifikat(this.zertifikateArray)
          .subscribe((res) => {
            if (res.paths) {
              this.zertifikatePath = res.paths;
              console.log('Zertifikate Path', this.zertifikatePath);
            }
          });
      }

      if (this.genehmigungenArray.length > 0) {
        this.updateUserService
          .uploadEntsorgerGenehmigung(this.genehmigungenArray)
          .subscribe((res) => {
            if (res.paths) {
              this.genehmigungenPath = res.paths;
              console.log('Genehmigungen Path', this.genehmigungenPath);
            }
          });
      }
      this.entsorgerSignal.updateEntsorger(entsorger);
    });
  }

  onFilePicked(file: File, fileType: string) {
    const fileArray = this.getFileArray(fileType) as File[];
    const previewArray = this.getPreviewArray(fileType);
    const formControlName = this.getFormControlName(fileType);

    fileArray.push(file);
    this.changeEntsorgerForm.patchValue({ [formControlName]: fileArray });
    this.changeEntsorgerForm.get(formControlName)?.updateValueAndValidity();

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const preview = reader.result as string;
        previewArray.push(preview);
      };
      reader.readAsDataURL(file);
    }
  }

  deleteFilePreview(i: number, fileType: string) {
    const fileArray = this.getFileArray(fileType);
    const previewArray = this.getPreviewArray(fileType);
    const formControlName = this.getFormControlName(fileType);

    previewArray.splice(i, 1);
    fileArray.splice(i, 1);
    this.changeEntsorgerForm.patchValue({ [formControlName]: fileArray });
    this.changeEntsorgerForm.get(formControlName)?.updateValueAndValidity();
  }

  // deleteUploadPath(i: number, fileType: string) {
  /*
  event.file ist der filename der Datei
  filePath ist der filePath, also 'logopath' | 'zertifikatepath' | 'genehmigungenpath'
  documentID ist die ID des Entsorger-Dokumentes
  dokumentType ist 'entsorger'
  */
  deleteUploadPath(event: { number: number; file: string }, filePath: string) {
    const documentID = this.entsorgerProfil()._id;
    const filename = event.file;
    const dokumentType = 'entsorger';
    this.updateUserService.deleteFile(dokumentType, documentID, filePath, filename).subscribe(() => {
      this.accountSignal.removeFileFromPath(filename, filePath);
    });
    const uploadPathArray = this.getFileArray(filePath);
    uploadPathArray.splice(event.number, 1);

    // this.updateUserService.deleteFile()
  }

  getFileArray(fileType: string): File[] | string[] {
    switch (fileType) {
      case 'logo':
        return this.bildArray;
      case 'logoPath':
        return this.logoPath;
      case 'zertifikate':
        return this.zertifikateArray;
      case 'zertifikatePath':
        return this.zertifikatePath;
      case 'genehmigungen':
        return this.genehmigungenArray;
      case 'genehmigungenPath':
        return this.genehmigungenPath;
      default:
        return [];
    }
  }

  getPreviewArray(fileType: string): string[] {
    switch (fileType) {
      case 'logo':
        return this.imagePreviewArray;
      case 'zertifikate':
        return this.zertifikatePreviewArray;
      case 'genehmigungen':
        return this.genehmigungenPreviewArray;
      default:
        return [];
    }
  }

  getFormControlName(fileType: string): string {
    switch (fileType) {
      case 'logo':
        return 'logo';
      case 'zertifikate':
        return 'zertifikate';
      case 'genehmigungen':
        return 'genehmigungen';
      default:
        return '';
    }
  }

  addToList(bereich: string) {
    const value = this.changeEntsorgerForm.get(bereich)?.value;

    if (value) {
      this.updateSignal(bereich, value);

      const liste = this.getArrayBasedOnBereich(bereich);

      this.changeEntsorgerForm.patchValue({ [bereich]: liste });
      this.changeEntsorgerForm.get(bereich)?.setValue('');
    }
  }

  deleteTaetigkeitsbereich(i: number, bereich: string) {
    this.getArrayBasedOnBereich(bereich).splice(i, 1);
  }

  getArrayBasedOnBereich(bereich: string): any[] {
    switch (bereich) {
      case 'taetigkeitsbereich':
        return this.entsorgerProfil().entsorgerBeschreibung.taetigkeitsbereich;
      case 'dienstleistungen':
        return this.entsorgerProfil().entsorgerBeschreibung.dienstleistungen;
      case 'logistik':
        return this.entsorgerProfil().entsorgerBeschreibung.logistik;
      case 'zertifikatsbestaetigungen':
        return this.entsorgerProfil().entsorgerBeschreibung
          .zertifikatsbestaetigungen;
      default:
        return [];
    }
  }

  updateSignal(bereich: string, value: string | string[]) {
    switch (bereich) {
      case 'dienstleistungen':
        this.accountSignal.updateDienstleistungen(value as string);
        return;
      case 'zertifikatsbestaetigungen':
        this.accountSignal.updateZertifikatsbestaetigungen(value as string);
        return;
      case 'logistik':
        this.accountSignal.updateLogistik(value as string[]);
        return;

      case 'taetigkeitsbereich':
        this.accountSignal.updateTaetigkeitsbereich(value as string[]);
        return;
      default:
        return;
    }
  }

  updateFormFieldSelectOptions(event: MatSelectChange, bereich: string) {
    let value: string = event.value;
    this.updateSignal(bereich, value);
    this.changeEntsorgerForm.patchValue({ [bereich]: value });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AvvDialogComponent, {
      data: this.mergedListe(),
    });

    dialogRef.afterClosed().subscribe(() => {
      this.avvListe = this.avvDialogService.avvChoosenEntries();
      this.accountSignal.updateAvvZusammenfasung(
        this.avvDialogService.avvEntriesText()
      );
      this.accountSignal.updateChunkAvvListe(
        this.profilService.splitObject(this.avvListe, 250)
      );
    });
  }
}
