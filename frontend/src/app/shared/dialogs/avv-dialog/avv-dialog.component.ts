import {
  Component,
  Inject,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {
  MatCheckboxChange,
  MatCheckboxModule,
} from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AvvListeService } from '../../services/avv-liste.service';
import { avv } from 'src/app/components/angebot/avv.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AvvDialogService, AvvEntriesInterface } from './avv-dialog.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { AvvFilterGruppe, AvvFilterKlassifizierung } from './avvFilter.enum';
import { DIALOG_DATA, Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'app-avv-dialog',
    imports: [
        MatTableModule,
        MatCheckboxModule,
        ScrollingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
    ],
    templateUrl: './avv-dialog.component.html',
    styleUrl: './avv-dialog.component.scss'
})
export class AvvDialogComponent implements OnInit {
  constructor(
    private dialogRef: DialogRef<AvvDialogComponent>,
    @Inject(DIALOG_DATA) public data: AvvEntriesInterface
  ) {}

  avvService = inject(AvvListeService);
  avvDialogService = inject(AvvDialogService);

  avv1: avv[] = [];
  avv3: avv[] = [];
  klassifizierungen: string[] = [
    'Gefährliche Abfälle',
    'Nicht gefährliche Abfälle',
  ];

  avv1Filter = new FormControl('');
  klassifizierungsFilter = new FormControl('');

  avvSignal = signal<avv[]>([]);
  avvEntriesSignal = signal<AvvEntriesInterface>({});
  alleHandelnTrue: boolean = false;
  alleMakelnTrue: boolean = false;
  alleSammelnTrue: boolean = false;
  alleBefoerdernTrue: boolean = false;

  visibleAVVs = computed(() => {
    let avvs = this.avvSignal();
    const filterGruppeSig = this.avvDialogService.avvFilterGruppe;
    const filterKlassifizierungSig =
      this.avvDialogService.avvFilterKlassifizierung;

    if (
      filterKlassifizierungSig() ===
      AvvFilterKlassifizierung.GefaehrlicheAbfaelle
    ) {
      avvs = avvs.filter((avv) => avv.value.endsWith('*'));
    } else if (
      filterKlassifizierungSig() ===
      AvvFilterKlassifizierung.NichtGefaehrlicheAbfaelle
    ) {
      avvs = avvs.filter((avv) => !avv.value.endsWith('*'));
    }

    if (filterGruppeSig() !== AvvFilterGruppe.None) {
      avvs = avvs.filter((avv) => avv.value.startsWith(filterGruppeSig()));
    }

    return avvs;
  });

  ngOnInit(): void {
    this.avv1 = this.avvService.allAVV1;
    this.avvSignal.set(this.avvDialogService.avv3DialogSignal());
    let avvEntries: AvvEntriesInterface = this.convertAVVToEntries(
      this.avvSignal(),
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    );
    if (this.data !== undefined || this.data !== '') {
      const parsedData =
        typeof this.data === 'string' ? JSON.parse(this.data) : this.data;
      avvEntries = Object.assign(avvEntries, parsedData);
      this.checkIfAllHandelnMakelnTrue(avvEntries);
    }
    this.avvEntriesSignal.set(avvEntries);
  }

  checkIfAllHandelnMakelnTrue(avvEntries: AvvEntriesInterface): void {
    this.alleHandelnTrue = Object.values(avvEntries).every(
      (avv) => avv.handeln
    );
    this.alleMakelnTrue = Object.values(avvEntries).every((avv) => avv.makeln);
    this.alleSammelnTrue = Object.values(avvEntries).every(
      (avv) => avv.sammeln
    );
    this.alleBefoerdernTrue = Object.values(avvEntries).every(
      (avv) => avv.befoerdern
    );
  }

  convertAVVToEntries(
    avv: avv[],
    handeln: boolean,
    makeln: boolean,
    sammeln: boolean,
    befoerdern: boolean,
    beseitigen: boolean,
    lagern: boolean,
    behandeln: boolean,
    verwerten: boolean
  ): AvvEntriesInterface {
    const entries = avv.map((avv) => [
      avv.value,
      {
        handeln,
        makeln,
        sammeln,
        befoerdern,
        beseitigen,
        lagern,
        behandeln,
        verwerten,
      },
    ]);
    return Object.fromEntries(entries);
  }

  trackByItemId(index: number, item: FormGroup): string | number {
    return item.get('avv')?.value;
  }

  selectAVV(
    avvValue: string,
    gruppe:
      | 'handeln'
      | 'makeln'
      | 'sammeln'
      | 'befoerdern'
      | 'beseitigen'
      | 'lagern'
      | 'behandeln'
      | 'verwerten'
  ): void {
    const updatedAvvEntry = {
      ...this.avvEntriesSignal()[avvValue],
      [gruppe]: !this.avvEntriesSignal()[avvValue][gruppe],
    };
    const updatedAVVEntries = {
      ...this.avvEntriesSignal(),
      [avvValue]: updatedAvvEntry,
    };
    this.avvEntriesSignal.set(updatedAVVEntries);
  }

  setHerkunftsfilterFilter(event: MatSelectChange): void {
    let filterName = event.value;
    this.avvDialogService.changeFilterGruppe(filterName);
  }

  setKlassifizierungFilter(event: MatSelectChange): void {
    let filterName = event.value;
    this.avvDialogService.changeFilterKlassifizierung(filterName);
  }

  selectAll(action: 'sammeln' | 'befoerdern' | 'handeln' | 'makeln'): void {
    const updatedAvvEntries = Object.fromEntries(
      Object.entries(this.avvEntriesSignal()).map(([key, value]) => {
        return [key, { ...value, [action]: !value[action] }];
      })
    );
    this.avvEntriesSignal.set(updatedAvvEntries);
    this.checkIfAllHandelnMakelnTrue(updatedAvvEntries);
  }

  filterEntriesObject(avvEntries: AvvEntriesInterface): AvvEntriesInterface {
    return Object.entries(avvEntries).reduce((obj, [key, value]) => {
      if (Object.values(value).some((bool) => bool === true)) {
        return { ...obj, [key]: value };
      }
      return obj;
    }, {});
  }

  getPreliminaryEntries(): string[] {
    const preliminaryEntries: string[] = [];
    if (this.alleHandelnTrue) {
      preliminaryEntries.push('Handeln: Alle');
    }
    if (this.alleMakelnTrue) {
      preliminaryEntries.push('Makeln: Alle');
    }
    if (this.alleSammelnTrue) {
      preliminaryEntries.push('Sammeln: Alle');
    }
    if (this.alleBefoerdernTrue) {
      preliminaryEntries.push('Befördern: Alle');
    }
    return preliminaryEntries;
  }

  getFilteredEntries(filteredEntriesObject: AvvEntriesInterface): string[] {
    return [
      ...(Object.entries(filteredEntriesObject)
        .map(([key, value]) => {
          const trueEntries = Object.entries(value)
            .filter(
              ([subKey, subValue]) =>
                subValue === true &&
                subKey !== 'handeln' &&
                subKey !== 'makeln' &&
                subKey !== 'sammeln' &&
                subKey !== 'befoerdern'
            )
            .map(([subKey]) => subKey);
          return trueEntries.length > 0
            ? `${key}: ${trueEntries.join(', ')}`
            : null;
        })
        .filter((item) => item !== null) as string[]),
    ];
  }

  save(): void {
    const filteredEntriesObject = this.filterEntriesObject(this.avvEntriesSignal());
    const preliminaryEntries = this.getPreliminaryEntries();
    const filteredEntries = [...preliminaryEntries, ...this.getFilteredEntries(filteredEntriesObject)];

    this.avvDialogService.avvEntriesText.set(filteredEntries);
    this.avvDialogService.avvChoosenEntries.set(this.avvEntriesSignal());
    this.avvDialogService.resetFilter();
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
    this.avvDialogService.resetFilter();
  }
}
