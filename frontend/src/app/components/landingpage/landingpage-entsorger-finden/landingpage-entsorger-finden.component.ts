import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { avv } from '../../angebot/avv.model';
import { AvvListeService } from 'src/app/shared/services/avv-liste.service';
import { TruncateTextPipe } from 'src/app/shared/pipes/truncateText.pipe';
import {
  Gemeinde,
  GemeindeByBundesland,
} from '../landingpage-anbieten/standort.model';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { ProfilService } from '../../account/account-children/einstellungen/profile/profil-service.service';
import { ShowLandingPageSignalService } from 'src/app/signals/showOnLandingPage-signals.service';
import { BundeslandSignalService } from 'src/app/signals/bundesland-signals.service';
import { EntsorgerSignalsService } from 'src/app/signals/entsorger-signals.service';
import { EntsorgerfilterDto } from './entsorgerfilter.model';
import { MatInput } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-landingpage-entsorger-finden',
    imports: [
        FormsModule,
        ReactiveFormsModule,
        TruncateTextPipe,
        MatSelectModule,
        MatInput,
        MatFormFieldModule,
        NgxMatSelectSearchModule,
    ],
    templateUrl: './landingpage-entsorger-finden.component.html',
    styleUrl: './landingpage-entsorger-finden.component.scss'
})
export class LandingpageEntsorgerFindenComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder);
  avvService = inject(AvvListeService);
  profilService = inject(ProfilService);
  entsorgerSignalService = inject(EntsorgerSignalsService);
  bundeslandSignalService = inject(BundeslandSignalService);
  showLandingPageSignalService = inject(ShowLandingPageSignalService);

  filterForEntsorger: boolean = true;

  allAVV1 = this.avvService.allAVV1;
  allAVV2 = this.avvService.allAVV2;
  allAVV3 = this.avvService.allAVV3;
  selectedValueAVV1: avv = { value: '', viewValue: '' };
  selectedValueAVV3: avv = { value: '', viewValue: '' };
  gemeinden: Gemeinde[] = [];
  availableGemeinden: GemeindeByBundesland[] = [];
  entsorgerFilter: EntsorgerfilterDto = {};
  bundeslandEvent: MatSelectChange | string = '';
  formFieldsSelectLogistik = this.profilService.formFieldsSelectLogistik;

  public filterCtrl: FormControl<string | null> = new FormControl<string>('');
  protected _onDestroy = new Subject<void>();

  showSignal = this.showLandingPageSignalService.showLandingPage;
  filterEntsorgerSignal = this.entsorgerSignalService.filterEntsorger;
  bundeslandSignal = this.bundeslandSignalService.bundeslandSignalEntsorger;
  availableGemeindenSignal =
    this.bundeslandSignalService.availableGemeindenEntsorgerForDisplay;

  filteredGemeindenBySearch = signal<string>('')
  availableGemeindenOfBundesland = computed(() => {
    if (this.availableGemeindenSignal().length > 0) {
      this.suchForm.get('stadt')!.enable();
      this.suchForm.get('postleitzahl')!.enable();
    } else {
      this.suchForm.get('stadt')!.disable();
      this.suchForm.get('postleitzahl')!.disable();
      this.suchForm.get('stadt')!.setValue(null);
      this.suchForm.get('postleitzahl')!.setValue(null);
    }
    return this.availableGemeindenSignal().sort((a, b) => {
      if (a.postleitzahl < b.postleitzahl) {
        return -1;
      }
      if (a.postleitzahl > b.postleitzahl) {
        return 1;
      }
      return 0;
    });
  });

  filteredGemeinden = computed(() => {
    let search = this.filteredGemeindenBySearch();
    let filteredGemeinden: GemeindeByBundesland[] =
      this.availableGemeindenOfBundesland();

    if (!search) {
      return filteredGemeinden;
    } else {
      search = search.toLowerCase();
    }
    return filteredGemeinden.filter((gemeinde) => {
      return gemeinde.name.toLowerCase().includes(search!) || gemeinde.postleitzahl.includes(search!);
    });
  });


  suchForm = this.fb.group({
    taetigkeitsbereich: new FormControl<string | null>(null),
    dienstleistungen: new FormControl<string | null>(null),
    logistik: new FormControl<string[] | null>(null),
    abfallursprung: new FormControl<string | null>(null),
    abfallschluesselnummer: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    zertifikate: new FormControl<string | null>(null),
    bundesland: new FormControl<string | null>(null),
    stadt: new FormControl<string | null>({ value: null, disabled: true }),
    postleitzahl: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
  });

  ngOnInit(): void {
    this.filterEntsorger(false);
    this.filterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filteredGemeindenBySearch.set(this.filterCtrl.value!);
      });
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  onKategorieChange(formControlName: string) {
    let selectedValue: avv = { value: '', viewValue: '' };

    if (formControlName === 'abfallursprung') {
      // Zurücksetzen der ausgewählten Option für AVV3 und abfallschluesselnummer
      this.selectedValueAVV3 = selectedValue;
      this.suchForm.patchValue({ abfallschluesselnummer: null });

      // Suche nach dem entsprechenden AVV1 basierend auf abfallursprung
      selectedValue =
        this.allAVV1.find(
          (avv) => avv.value === this.suchForm.value.abfallursprung
        ) || selectedValue;
      this.selectedValueAVV1 = selectedValue;
    } else {
      // Suche nach dem entsprechenden AVV3 basierend auf abfallschluesselnummer
      selectedValue =
        this.allAVV3.find(
          (avv) => avv.value === this.suchForm.value.abfallschluesselnummer
        ) || selectedValue;
      this.selectedValueAVV3 = selectedValue;
    }
    this.filterEntsorger(false);
  }

  getFilteredAVV3(): avv[] {
    if (!this.selectedValueAVV1) {
      return []; // Keine Optionen anzeigen, wenn keine Kategorie 1 ausgewählt ist
    }
    if (this.suchForm.value.abfallursprung != null) {
      this.suchForm.controls.abfallschluesselnummer.enable();
    }
    return this.allAVV3.filter((avv) =>
      avv.value.startsWith(this.selectedValueAVV1.value)
    );
  }

  updateFormFieldSelectOptions(event: MatSelectChange, bereich: string) {
    let value: string = event.value;
    this.suchForm.patchValue({ [bereich]: value });
    this.filterEntsorger(false);
  }

  async getGemeinden(bundeslandEvent: MatSelectChange | string) {
    this.bundeslandEvent = bundeslandEvent;

    if (bundeslandEvent === undefined) {
      this.suchForm.get('bundesland')?.setValue(bundeslandEvent);
      this.suchForm.get('postleitzahl')?.disable();
      this.suchForm.get('bundesland')?.updateValueAndValidity();
      this.filterEntsorger(false);
      return;
    } else {
      this.suchForm.get('postleitzahl')?.enable();
      this.suchForm.get('postleitzahl')?.setValue('');
      this.suchForm.get('postleitzahl')?.markAsDirty();
      this.suchForm.get('postleitzahl')?.markAsTouched();
      this.bundeslandSignal.set(bundeslandEvent as string);
      this.filterEntsorger(false);
    }
  }

  getStadt(postleitzahl: MatSelectChange) {
    const postleitzahlValue = postleitzahl.value;
    const gemeinde = this.availableGemeindenSignal().find(
      (gemeinde) => gemeinde.postleitzahl === postleitzahlValue
    )?.name;
    this.suchForm.get('stadt')!.setValue(gemeinde!);
    this.suchForm.get('postleitzahl')!.setValue(postleitzahlValue);
  }

  filterEntsorger(filterForEntsorger: boolean) {
    this.entsorgerFilter = {
      avv: [],
      taetigkeitsbereich: null,
      dienstleistungen: null,
      logistik: null,
      zertifikatsbestaetigungen: null,
      stadt: null,
      bundesland: null,
      postleitzahl: null,
    };
    if (
      this.suchForm.value.abfallursprung != null &&
      this.suchForm.value.abfallursprung != undefined
    ) {
      this.entsorgerFilter.avv?.push(this.suchForm.value.abfallursprung);
    }

    if (this.suchForm.value.abfallschluesselnummer != null) {
      this.entsorgerFilter.avv?.push(
        this.suchForm.value.abfallschluesselnummer
      );
    }

    this.entsorgerFilter.taetigkeitsbereich = this.suchForm.value
      .taetigkeitsbereich
      ? this.suchForm.value.taetigkeitsbereich
      : null;

    this.entsorgerFilter.dienstleistungen = this.suchForm.value.dienstleistungen
      ? this.suchForm.value.dienstleistungen
      : null;

    this.entsorgerFilter.logistik =
      this.suchForm.value.logistik && this.suchForm.value.logistik.length > 0
        ? this.suchForm.value.logistik
        : null;

    this.entsorgerFilter.zertifikatsbestaetigungen = this.suchForm.value
      .zertifikate
      ? this.suchForm.value.zertifikate
      : null;

    this.entsorgerFilter.stadt = this.suchForm.value.stadt
      ? this.suchForm.value.stadt
      : null;

    this.entsorgerFilter.bundesland = this.suchForm.value.bundesland
      ? this.suchForm.value.bundesland
      : null;

    this.entsorgerFilter.postleitzahl = this.suchForm.value.postleitzahl
      ? this.suchForm.value.postleitzahl
      : null;

    if (filterForEntsorger) {
      this.entsorgerSignalService.filterSignal.set(this.entsorgerFilter);
      this.showSignal.set({ show: 'entsorger' });
    } else {
      this.entsorgerSignalService.filterSignal.set(this.entsorgerFilter);
    }
  }

  filterReset() {
    this.suchForm.reset();
    this.selectedValueAVV1 = { value: '', viewValue: '' };
    this.selectedValueAVV3 = { value: '', viewValue: '' };
    this.suchForm.get('abfallschluesselnummer')?.disable();
    this.suchForm.get('gemeinde')?.disable();
    this.suchForm.get('postleitzahl')?.disable();
    this.filterEntsorger(false);
  }
}
