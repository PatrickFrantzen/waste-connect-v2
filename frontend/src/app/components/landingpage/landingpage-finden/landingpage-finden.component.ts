import {
  Component,
  OnDestroy,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { avv } from '../../angebot/avv.model';
import { AvvListeService } from 'src/app/shared/services/avv-liste.service';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InseratfilterDto } from './inseratfilter.model';

import { Subject, debounceTime, takeUntil } from 'rxjs';
import { TruncateTextPipe } from '../../../shared/pipes/truncateText.pipe';

import { InseratSignalsService } from 'src/app/signals/inserat-signals.service';
import { BundeslandSignalService } from 'src/app/signals/bundesland-signals.service';
import { ShowLandingPageSignalService } from 'src/app/signals/showOnLandingPage-signals.service';
import { UpdateUserService } from '../../auth/services/update-user.service';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';
import { MatInput } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { GemeindeByBundesland } from '../landingpage-anbieten/standort.model';
@Component({
    selector: 'app-landingpage-finden',
    templateUrl: './landingpage-finden.component.html',
    styleUrls: ['./landingpage-finden.component.scss'],
    imports: [
    FormsModule,
    ReactiveFormsModule,
    TruncateTextPipe,
    MatInput,
    MatFormFieldModule,
    MatSelectModule,
    NgxMatSelectSearchModule
]
})
export class LandingpageFindenComponent implements OnInit, OnDestroy {
  avvService = inject(AvvListeService);
  fb = inject(FormBuilder);
  inseratSignalsService = inject(InseratSignalsService);
  bundeslandSignalService = inject(BundeslandSignalService);
  showOnLandingPageSignalService = inject(ShowLandingPageSignalService);
  updateUserService = inject(UpdateUserService);
  authSignalService = inject(AuthSignalsService);
  accountSignalService = inject(AccountSignalsService);

  allAVV1 = this.avvService.allAVV1;
  allAVV2 = this.avvService.allAVV2;
  allAVV3 = this.avvService.allAVV3;
  selectedValueAVV1: avv = { value: '', viewValue: '' };
  selectedValueAVV2: avv = { value: '', viewValue: '' };
  selectedValueAVV3: avv = { value: '', viewValue: '' };
  inseratfilter: InseratfilterDto = {};
  destroyed$ = new Subject<void>();
  availableWidth!: number;
  filterForInserate = true;
  bundeslandEvent: MatSelectChange | string = '';

  filteredGemeindenBySearch = signal<string>('')
  public filterCtrl: FormControl<string | null> = new FormControl<string>('');
  protected _onDestroy = new Subject<void>();

  //Bei Angebote filtern wird das Bundesland nicht mehr angezeigt, wenn man auf angebote filtern klickt, Gemeinde und PLZ aber schon.
  //Wenn das Suchergebnis 0 ist, dann wird ein Fehler angezeigt.

  //Signals
  filterInserateSignal = this.inseratSignalsService.filterInserate;
  bundeslandSignal = this.bundeslandSignalService.bundeslandSignal;
  availableGemeindenSignal = this.bundeslandSignalService.availableGemeinden;
  showLandingPageSignal = this.showOnLandingPageSignalService.showLandingPage;

  availableGemeindenOfBundesland = computed(() => {
    if (this.bundeslandSignalService.availableGemeinden().length > 0) {
      this.suchForm.get('gemeinde')?.enable();
      this.suchForm.get('postleitzahl')?.enable();
    } else {
      this.suchForm.get('gemeinde')?.disable();
      this.suchForm.get('postleitzahl')?.disable();
      this.suchForm.get('gemeinde')!.setValue(null);
      this.suchForm.get('postleitzahl')!.setValue(null);
    }
    return this.bundeslandSignalService.availableGemeinden().sort((a, b) => {
      if (a.postleitzahl > b.postleitzahl) {
        return 1;
      } else {
        return -1;
      }
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

  ngOnInit(): void {
    // Prüfen, ob lastSearchFilter Werte enthält
    if (
      this.inseratSignalsService.lastSearchFilter() &&
      Object.keys(this.inseratSignalsService.lastSearchFilter()).length > 0
    ) {
      // Wenn Werte vorhanden sind, setzen Sie das Formular
      this.suchForm.patchValue(this.inseratSignalsService.lastSearchFilter());
    }

    this.suchForm
      .get('abfallbezeichnung')
      ?.valueChanges.pipe(takeUntil(this.destroyed$), debounceTime(500))
      .subscribe(() => {
        this.filterInserate(false);
      });

      this.filterCtrl.valueChanges
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.filteredGemeindenBySearch.set(this.filterCtrl.value!);
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  suchForm = this.fb.group({
    abfallursprung: new FormControl<string | null>(null),
    abfallschluesselnummer: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
    abfallbezeichnung: new FormControl<string | null>(null),
    bundesland: new FormControl<string | null>(null),
    gemeinde: new FormControl<string | null>({ value: null, disabled: true }),
    postleitzahl: new FormControl<string | null>({
      value: null,
      disabled: true,
    }),
  });

  onKategorieChange(formControlName: string) {
    // Initialisiere selectedValue mit einem leeren Objekt
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

    // Filtere Inserate basierend auf der Auswahl
    this.filterInserate(false);
  }

  getFilteredAVV2(): avv[] {
    if (!this.selectedValueAVV1) {
      return []; // Keine Optionen anzeigen, wenn keine Kategorie 1 ausgewählt ist
    }
    return this.allAVV2.filter((avv) =>
      avv.value.startsWith(this.selectedValueAVV1.value)
    );
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

  async getGemeinden(bundeslandEvent: MatSelectChange | string) {

    this.bundeslandEvent = bundeslandEvent;

    if (bundeslandEvent === undefined) {
      this.suchForm.get('bundesland')?.setValue(bundeslandEvent);
      this.suchForm.get('postleitzahl')?.disable();
      this.suchForm.get('bundesland')?.updateValueAndValidity();
      this.filterInserate(false);
      return;
    } else {
      this.suchForm.get('postleitzahl')?.enable();
      this.suchForm.get('postleitzahl')?.setValue('');
      this.suchForm.get('postleitzahl')?.markAsDirty();
      this.suchForm.get('postleitzahl')?.markAsTouched();
      this.bundeslandSignal.set(bundeslandEvent as string);
      this.filterInserate(false);
    }

  }

  getStadt(postleitzahl: MatSelectChange) {
    const postleitzahlValue = postleitzahl.value;
    const gemeinde = this.availableGemeindenSignal().find(
      (gemeinde) => gemeinde.postleitzahl === postleitzahlValue
    )?.name;
    this.suchForm.get('gemeinde')!.setValue(gemeinde!);
    this.suchForm.get('postleitzahl')!.setValue(postleitzahlValue);
  }


  filterReset() {
    this.suchForm.reset();
    this.suchForm.get('abfallschluesselnummer')?.disable();
    this.suchForm.get('gemeinde')?.disable();
    this.suchForm.get('postleitzahl')?.disable();
    this.filterInserate(false);
  }

  //Nur die Filteroptionen, die tatsächlich einen Wert beinhalten, werden an die post-request weitergegeben.
  filterInserate(filterForInserate: boolean) {
    this.inseratfilter = {
      abfallursprung: '',
      abfallschluesselnummer: '',
      abfallbezeichnung: '',
      standort_Bundesland: '',
      standort_Gemeinde: '',
      standort_Postleitzahl: '',
    };

    this.inseratfilter.abfallursprung =
      this.suchForm.value.abfallursprung !== ''
        ? this.suchForm.value.abfallursprung
        : '';

    this.inseratfilter.abfallschluesselnummer =
      this.suchForm.value.abfallschluesselnummer !== ''
        ? this.suchForm.value.abfallschluesselnummer
        : '';

    this.inseratfilter.abfallbezeichnung =
      this.suchForm.value.abfallbezeichnung !== ''
        ? this.suchForm.value.abfallbezeichnung
        : '';

    this.inseratfilter.standort_Bundesland =
      this.suchForm.value.bundesland !== ''
        ? this.suchForm.value.bundesland
        : '';

    this.inseratfilter.standort_Gemeinde =
      this.suchForm.value.gemeinde !== '' ? this.suchForm.value.gemeinde : '';

    this.inseratfilter.standort_Postleitzahl =
      this.suchForm.value.postleitzahl !== ''
        ? this.suchForm.value.postleitzahl
        : '';

    if (filterForInserate) {
      this.inseratSignalsService.filterSignal.set(this.inseratfilter);
      if (this.authSignalService.tokenSignal()) {
        this.updateUserService
          .updateInseratfilter(this.inseratfilter)
          .subscribe();
        this.accountSignalService.addToLetzteSucheInserate(this.inseratfilter);
      }
    } else this.inseratSignalsService.filterSignal.set(this.inseratfilter);
    this.showLandingPageSignal.set({ show: 'inserate' });
  }

  filterByBundesland(bundesland: string) {
    this.inseratfilter = { ...this.inseratfilter };
    this.inseratfilter.standort_Bundesland = bundesland;
    this.inseratSignalsService.filterSignal.set(this.inseratfilter);
    this.showLandingPageSignal.set({ show: 'inserate' });
    if (this.authSignalService.tokenSignal()) {
      this.updateUserService
        .updateInseratfilter(this.inseratfilter)
        .subscribe();
      this.accountSignalService.addToLetzteSucheInserate(this.inseratfilter);
    }
  }
}

