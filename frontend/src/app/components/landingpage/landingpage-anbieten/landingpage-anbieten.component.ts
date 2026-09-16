import { Component, OnDestroy, OnInit, ViewChild, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { AvvListeService } from 'src/app/shared/services/avv-liste.service';
import { InseratNEST } from '../../angebot/angebot.model';
import { InseratService } from './inserat.service';
import { avv } from '../../angebot/avv.model';
import { mimeType } from 'src/app/shared/validators/mime-type-image.validators';
import { mimeTypePDForImage } from 'src/app/shared/validators/mime-type-pdf.validators';
import { ActivatedRoute, Router } from '@angular/router';

import { Gemeinde, GemeindeByBundesland } from './standort.model';
import { dateRangeValidator } from 'src/app/shared/validators/dateControl.validators';
import { BundeslaenderService } from 'src/app/shared/services/bundeslaender.service';

import { MatTooltip } from '@angular/material/tooltip';
import { InseratSignalsService } from 'src/app/signals/inserat-signals.service';
import { BundeslaenderSignalsService } from 'src/app/signals/bundeslaender-signals.service';
import { UpdateUserService } from '../../auth/services/update-user.service';
import { Subject, concat, of, switchMap, takeUntil, tap } from 'rxjs';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';
import { MatInput } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { standortFavorit } from '../../auth/user.model';

@Component({
    selector: 'app-landingpage-anbieten',
    templateUrl: './landingpage-anbieten.component.html',
    styleUrls: ['./landingpage-anbieten.component.scss'],
    imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTooltip,
    MatInput,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckbox,
    MatRadioModule,
    NgxMatSelectSearchModule
]
})
export class LandingpageAnbietenComponent implements OnInit, OnDestroy {
  @ViewChild(MatAccordion)
  accordion!: MatAccordion;

  allAVV1 = this.avv.allAVV1;
  allAVV3 = this.avv.allAVV3;
  inserat: InseratNEST | null = null;
  inserate: InseratNEST[] = [];
  imagePreview: string = '';
  analysePreview: ArrayBuffer = new ArrayBuffer(0);
  imagePreviewArray: string[] = [];
  analysePreviewArray: ArrayBuffer[] = [];
  mode: string = 'create';



  gemeindenFromLocal = signal<{ name: string; postalCode: string }[]>([]);
  filteredGemeindenFromLocal: { name: string; postalCode: string }[] = [];
  filteredPLZFromLocal: { name: string; postalCode: string }[] = [];
  bundeslandEvent: MatSelectChange | string = '';
  gemeinden: Gemeinde[] = [];

  bildArray: File[] = [];
  analyseArray: File[] = [];

  showDatepicker: boolean = false;
  showAbmasse: boolean = false;

  inseratSignalService = inject(InseratSignalsService);
  accountSignalService = inject(AccountSignalsService);
  bundeslaenderSignalService = inject(BundeslaenderSignalsService);

  bundeslaender = this.bundeslaenderSignalService.bundeslaenderSignal;
  firmendaten = this.accountSignalService.firmendatenForDisplay;
  filteredGemeindenBySearch = signal<string>('')
  protected _onDestroy = new Subject<void>();
  public filterCtrl: FormControl<string | null> = new FormControl<string>('');
  
  constructor(
    private fb: FormBuilder,
    private avv: AvvListeService,
    private inseratService: InseratService,
    public route: ActivatedRoute,
    public router: Router,
    private bundeslaenderService: BundeslaenderService,
    private updateUserService: UpdateUserService
  ) {
    this.inseratForm
      .get('intervall.intervallOption')
      ?.valueChanges.subscribe((value) => {
        this.showDatepicker = value === 'Zeitraum';
      });

    this.inseratForm.get('verpackung')?.valueChanges.subscribe((value) => {
      this.showAbmasse = value === 'in Ballen gepresst';
    });
  }

  inseratForm = this.fb.group({
    abfallbezeichnung: new FormControl<string>('', Validators.required),
    abfallursprung: new FormControl<string>('', Validators.required),
    abfallschluesselnummer: new FormControl<string>('', Validators.required),
    abfallmenge: new FormControl<string>('', Validators.required),
    einheit: new FormControl<string>('', Validators.required),
    intervall: new FormGroup(
      {
        intervallOption: new FormControl('', Validators.required),
        dateStart: new FormControl(new Date()),
        dateEnd: new FormControl(new Date()),
      },
      [Validators.required, dateRangeValidator]
    ),
    dateControl: new FormControl(false),
    standort_Bundesland: new FormControl<string>('' , [
      Validators.required,
      Validators.minLength(1),
    ]),
    standort_Gemeinde: new FormControl<string>({ value: '', disabled: true }),
    standort_Postleitzahl: new FormControl<string>(
      {
        value: '',
        disabled: true,
      },
      [Validators.required]
    ),
    standort_Firma: new FormControl<string>(''),
    beschreibung: new FormControl<string>('', Validators.required),
    logistik: new FormControl<string>('', Validators.required),
    verladung: new FormControl<string>('', Validators.required),
    verpackung: new FormControl<string>('', Validators.required),
    gewicht: new FormControl<string>('', Validators.required),
    abmasse: new FormControl<string>(''),
    bild: new FormControl<File[] | null>(null, { asyncValidators: [mimeType] }),
    analyse: new FormControl<File[] | null>(null, {
      asyncValidators: [mimeTypePDForImage],
    }),
    bildPath: new FormControl<string[]>([]),
    analysePath: new FormControl<string[]>([]),
  });



  filteredGemeinden = computed(() => {
    let search = this.filteredGemeindenBySearch();
    let filteredGemeinden =
      this.gemeindenFromLocal();

    if (!search) {
      return filteredGemeinden;
    } else {
      search = search.toLowerCase();
    }
    return filteredGemeinden.filter((gemeinde) => {
      return gemeinde.name.toLowerCase().includes(search!) || gemeinde.postalCode.includes(search!);
    });
  });

  ngOnInit(): void {
    this.filterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filteredGemeindenBySearch.set(this.filterCtrl.value!);
    });
    if (this.route.snapshot.url[0].path === 'edit') {
      this.mode = 'edit';
      this.inserat = this.inseratSignalService.inseratBearbeiten();

      this.updateInseratForm();
      this.updateGemeinden();

      this.bildArray = [];
      this.analyseArray = [];
    } else {
      this.mode = 'create';
    }

    if (this.inseratForm.get('standort_Bundesland')?.value?.length! > 0) {
      this.inseratForm.get('standort_Gemeinde')?.enable();
      this.inseratForm.get('standort_Postleitzahl')?.enable();
    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  updateInseratForm() {
    if (this.inserat?.inseratLogistik.gewicht.includes('Abmaße:')) {
      const parts = this.inserat?.inseratLogistik.gewicht.split('+ Abmaße:');
      this.inseratForm.patchValue({
        gewicht: parts[0].trim(),
        abmasse: parts[1]?.trim(),
      });
    } else {
      this.inseratForm.patchValue({
        gewicht: this.inserat?.inseratLogistik.gewicht,
      });
    }

    this.inseratForm.patchValue({
      abfallbezeichnung: this.inserat?.inseratBeschreibung.abfallbezeichnung,
      abfallursprung: this.inserat?.inseratBeschreibung.abfallursprung,
      abfallschluesselnummer:
        this.inserat?.inseratBeschreibung.abfallschluesselnummer,
      abfallmenge: this.inserat?.inseratBeschreibung.abfallmenge,
      einheit: this.inserat?.inseratBeschreibung.einheit,
      intervall: {
        intervallOption:
          this.inserat?.inseratBeschreibung.intervall.intervallOption,
        dateStart: this.inserat?.inseratBeschreibung.intervall.dateStart,
        dateEnd: this.inserat?.inseratBeschreibung.intervall.dateEnd,
      },
      standort_Bundesland: this.inserat?.inseratStandort.standort_Bundesland,

      beschreibung: this.inserat?.inseratBeschreibung.beschreibung,
      logistik: this.inserat?.inseratLogistik.logistik,
      verladung: this.inserat?.inseratLogistik.verladung,
      verpackung: this.inserat?.inseratLogistik.verpackung,
      bildPath: this.inserat?.inseratFilepath.bildpath,
      analysePath: this.inserat?.inseratFilepath.analysepath,
    });
  }

  updateGemeinden() {
    if (this.inserat?.inseratStandort.standort_Bundesland) {
      this.inseratForm.get('standort_Gemeinde')?.enable();
      this.inseratForm.get('standort_Postleitzahl')?.enable();

      const selectedBundeslandObj = this.bundeslaenderSignalService
        .bundeslaenderSignal()
        .find(
          (bundesland) =>
            bundesland.name ===
            this.inserat?.inseratStandort.standort_Bundesland
        );
      if (selectedBundeslandObj) {
        this.getGemeinden(
          this.inserat?.inseratStandort.standort_Bundesland,
          selectedBundeslandObj.key
        );
      }

      this.inseratForm.patchValue({
        standort_Postleitzahl: this.inserat?.inseratStandort.standort_Postleitzahl,
        standort_Gemeinde: this.inserat?.inseratStandort.standort_Gemeinde,
      });
    }
  }

  setFavorit(event: MatSelectChange) {
    if (event.value === undefined) {
      this.inseratForm.get('standort_Bundesland')?.setValue('');
      this.inseratForm.get('standort_Postleitzahl')?.disable();
      this.inseratForm.get('standort_Postleitzahl')?.setValue('');
    } else {

      const bundeslandKeyFromEvent = this.bundeslaenderSignalService
      .bundeslaenderSignal()
      .find((bundesland) => bundesland.name === event.value.bundesland)?.key;

      this.getGemeinden(event.value.bundesland, bundeslandKeyFromEvent!);
      const gemeinde = this.gemeindenFromLocal().find(
        (gemeinde) => gemeinde.postalCode === event.value.postleitzahl
      )?.name;

    
      this.inseratForm.get('standort_Bundesland')?.setValue(event.value.bundesland);
      this.inseratForm.get('standort_Gemeinde')!.setValue(gemeinde!);
      this.inseratForm.get('standort_Postleitzahl')!.setValue(event.value.postleitzahl);
    }
  }


  async getGemeinden(
    bundeslandEvent: MatSelectChange | string,
    bundeslandKey: string
  ) {
    this.bundeslandEvent = bundeslandEvent;

    if (bundeslandEvent === undefined) {
      this.inseratForm.get('standort_Bundesland')?.setValue(bundeslandEvent);
      this.inseratForm.get('standort_Postleitzahl')?.disable();
      this.inseratForm.get('standort_Bundesland')?.updateValueAndValidity();
      return;
    }

    let bundeslandName = '';
    if (typeof bundeslandEvent === 'string') {
      bundeslandName = bundeslandEvent;
    } else {
      bundeslandName = bundeslandEvent.value;
    }
    this.inseratForm.get('standort_Postleitzahl')?.enable();
    this.inseratForm.get('standort_Postleitzahl')?.setValue('');
    this.inseratForm.get('standort_Postleitzahl')?.markAsDirty();
    this.inseratForm.get('standort_Postleitzahl')?.markAsTouched();

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
    this.gemeindenFromLocal().sort((a, b) => {
      if (a.postalCode > b.postalCode) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  getStadt(postleitzahl: MatSelectChange) {
    const postleitzahlValue: string = postleitzahl.value;
    const gemeinde = this.gemeindenFromLocal().find(
      (gemeinde) => gemeinde.postalCode === postleitzahlValue
    )?.name;
    this.inseratForm.get('standort_Gemeinde')!.setValue(gemeinde!);
    this.inseratForm.get('standort_Postleitzahl')!.setValue(postleitzahlValue);
  }

  getFilteredAbfallschluesselnummern(): avv[] {
    const selectedAbfallursprung =
      this.inseratForm.get('abfallursprung')?.value;
    if (!selectedAbfallursprung) {
      return []; // Keine Optionen anzeigen, wenn keine Kategorie 1 ausgewählt ist
    }
    return this.allAVV3.filter((avv) =>
      avv.value.startsWith(selectedAbfallursprung)
    );
  }

  sichern() {
    const inseratToSave = {
      inseratBeschreibung: {
        abfallbezeichnung: this.inseratForm.value.abfallbezeichnung!,
        abfallursprung: this.inseratForm.value.abfallursprung!,
        abfallschluesselnummer: this.inseratForm.value.abfallschluesselnummer!,
        abfallmenge: this.inseratForm.value.abfallmenge!,
        einheit: this.inseratForm.value.einheit!,
        intervall: {
          intervallOption: this.inseratForm.value.intervall!.intervallOption!,
          dateStart: this.inseratForm.value.intervall!.dateStart!,
          dateEnd: this.inseratForm.value.intervall!.dateEnd!,
        },
        beschreibung: this.inseratForm.value.beschreibung!,
      },
      inseratStandort: {
        standort_Bundesland: this.inseratForm.value.standort_Bundesland!,
        standort_Gemeinde: this.inseratForm.value.standort_Gemeinde!,
        standort_Postleitzahl: this.inseratForm.value.standort_Postleitzahl!,
      },
      inseratLogistik: {
        logistik: this.inseratForm.value.logistik!,
        verladung: this.inseratForm.value.verladung!,
        verpackung: this.inseratForm.value.verpackung!,
        gewicht: this.inseratForm.value.abmasse
          ? `${this.inseratForm.value.gewicht} + Abmaße: ${this.inseratForm.value.abmasse}`
          : this.inseratForm.value.gewicht!,
      },
      inseratFilepath: {
        bildpath: this.inseratForm.value.bildPath!,
        analysepath: this.inseratForm.value.analysePath!,
      },
    };


    if (this.mode === 'edit') {
      const updateInserat$ = this.inseratService.updateInserat(
        inseratToSave,
        this.inserat?._id!
      );
      const uploadBild$ =
        this.bildArray.length > 0
          ? this.inseratService.uploadBild(this.bildArray, this.inserat?._id!)
          : of(null);
      const uploadAnalyse$ =
        this.analyseArray.length > 0
          ? this.inseratService.uploadAnalyse(
              this.analyseArray,
              this.inserat?._id!
            )
          : of(null);
      const getInserat$ = this.inseratService
        .getInserat(this.inserat?._id!)
        .pipe(
          tap((inserat) => {
            this.accountSignalService.updateOneInserat(inserat);
            this.updateStandortFavorit(inserat);
          })
        );

      concat(
        updateInserat$,
        uploadBild$,
        uploadAnalyse$,
        getInserat$
      ).subscribe();
      this.inseratSignalService.inseratBearbeiten.set(null);
      this.mode = 'create';
    } else if (this.mode === 'create') {
      const saveInserat$ = this.inseratService.saveInserat(inseratToSave).pipe(
        switchMap((response) => {
          const id = response.id;
          const uploadBild$ =
            this.bildArray.length > 0
              ? this.inseratService.uploadBild(this.bildArray, id)
              : of(null);
          const uploadAnalyse$ =
            this.analyseArray.length > 0
              ? this.inseratService.uploadAnalyse(this.analyseArray, id)
              : of(null);
          const getInserat$ = this.inseratService.getInserat(id).pipe(
            tap((inserat) => {
              this.accountSignalService.addToInserate(inserat);
              this.updateStandortFavorit(inserat);
            })
          );
          return concat(uploadBild$, uploadAnalyse$, getInserat$);
        })
      );

      saveInserat$.subscribe();
    }
    this.router.navigate(['/']);
  }

  updateStandortFavorit(inserat: InseratNEST) {
    const standortFavorit: standortFavorit = {
      bundesland: inserat.inseratStandort.standort_Bundesland,
      stadt: inserat.inseratStandort.standort_Gemeinde,
      postleitzahl: inserat.inseratStandort.standort_Postleitzahl,
    }
    
    this.accountSignalService.updateStandortFavoriten(standortFavorit)
  }

  onBildPicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.bildArray.push(file);
    this.inseratForm.patchValue({ bild: this.bildArray });
    this.inseratForm.get('bild')?.updateValueAndValidity();
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
        this.imagePreviewArray.push(this.imagePreview);
      };
      reader.readAsDataURL(file);
    }
  }

  onAnalysePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.analyseArray.push(file);
    this.inseratForm.patchValue({ analyse: this.analyseArray });
    this.inseratForm.get('analyse')?.updateValueAndValidity();
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.analysePreview = reader.result as ArrayBuffer;
        this.analysePreviewArray.push(this.analysePreview);
      };
      reader.readAsDataURL(file);
    }
  }

  deleteImagePreview(i: number) {
    this.imagePreviewArray.splice(i, 1);
    this.bildArray.splice(i, 1);
    this.inseratForm.patchValue({ bild: this.bildArray });
    this.inseratForm.get('bild')?.updateValueAndValidity();
  }

  deleteAnalysePreview(i: number) {
    this.analysePreviewArray.splice(i, 1);
    this.analyseArray.splice(i, 1);
    this.inseratForm.patchValue({ analyse: this.analyseArray });
    this.inseratForm.get('analyse')?.updateValueAndValidity();
  }

  deleteBildPath(bildPath: string) {
    const documentType = 'inserat';
    const documentID = this.inserat?._id!;
    const filePath = 'bildpath';
    const filename = bildPath;

    this.updateUserService
      .deleteFile(documentType, documentID, filePath, filename)
      .subscribe(() => {
        const index = this.inseratForm.value.bildPath!.indexOf(bildPath);
        this.inseratForm.value.bildPath!.splice(index, 1);
        this.inseratForm.patchValue({
          bildPath: this.inseratForm.value.bildPath,
        });
      });
  }

  deleteAnalysePath(analysePath: string) {
    const index = this.inseratForm.value.analysePath!.indexOf(analysePath);
    this.inseratForm.value.analysePath!.splice(index, 1);
    this.inseratForm.patchValue({
      analysePath: this.inseratForm.value.analysePath,
    });
  }

  modifiyAnalyseName(analyseName: string) {
    const parts = analyseName.split('-+-');
    const modifiedName = parts[0].split('/').pop();
    return modifiedName;
  }
}
