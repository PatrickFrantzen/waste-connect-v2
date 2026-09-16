import { Component, Inject, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';

import { UpdateBenutzerDto } from 'src/app/components/auth/user.model';
import { MatInput } from '@angular/material/input';
import { Bundesland } from 'src/app/components/landingpage/landingpage-anbieten/standort.model';
import { BundeslaenderService } from '../../services/bundeslaender.service';
import { UpdateUserService } from 'src/app/components/auth/services/update-user.service';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { Subject, takeUntil } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { BundeslaenderSignalsService } from 'src/app/signals/bundeslaender-signals.service';

@Component({
    selector: 'app-profil-dialog',
    templateUrl: './profil-dialog.component.html',
    styleUrls: ['./profil-dialog.component.scss'],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInput,
        MatDialogClose,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckbox,
        NgxMatSelectSearchModule,
    ]
})
export class ProfilDialogComponent implements OnInit, OnDestroy {
  authSignalService = inject(AuthSignalsService);
  fb = inject(FormBuilder);
  bundeslaenderService = inject(BundeslaenderService);
  bundeslaenderSignalService = inject(BundeslaenderSignalsService);
  updateUserService = inject(UpdateUserService);
  dialogRef = inject(MatDialogRef<ProfilDialogComponent>);
  dialog = inject(MatDialog);

  bundeslandEvent: MatSelectChange | string = '';
  gemeindenFromLocal = signal<{ name: string; postalCode: string }[]>([]);
  bundeslaender = this.bundeslaenderSignalService.bundeslaenderSignal;

  filteredGemeindenBySearch = signal<string>('')
  public filterCtrl: FormControl<string | null> = new FormControl<string>('');
  protected _onDestroy = new Subject<void>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { bundeslaender: Bundesland[] }
  ) {
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

  profilForm = this.fb.group({
    ansprechpartner: new FormControl<string>('', [Validators.required]),
    telefonnummer: new FormControl<string>('', [Validators.required]),
    firmenname: new FormControl<string>('', [Validators.required]),
    firmenadresse: new FormControl<string>('', [Validators.required]),
    firmenwebseite: new FormControl<string>(''),
    postleitzahl: new FormControl<string>(
      { value: '', disabled: true },
      Validators.required
    ),
    stadt: new FormControl<string>({ value: '', disabled: true }, [
      Validators.required,
    ]),
    bundesland: new FormControl<string>('', [Validators.required]),
    private: new FormControl<boolean>(false),
    entsorger: new FormControl<boolean>(false),
    produzent: new FormControl<boolean>(false),
    logistik: new FormControl<boolean>(false),
  });

  ngOnInit(): void {
    this.filterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filteredGemeindenBySearch.set(this.filterCtrl.value!);
    });
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  saveProfil() {
    const firmendaten = {
      firmenname: this.profilForm.get('firmenname')?.value!,
      firmenadresse: this.profilForm.get('firmenadresse')?.value!,
      firmenwebseite: this.profilForm.get('firmenwebseite')?.value!,
      ansprechpartner: this.profilForm.get('ansprechpartner')?.value!,
      telefonnummer: this.profilForm.get('telefonnummer')?.value!,
      stadt: this.profilForm.get('stadt')?.value!,
      postleitzahl: this.profilForm.get('postleitzahl')?.value!,
      bundesland: this.profilForm.get('bundesland')?.value!,
      standortFavoriten: [],
    };

    const privateModus = this.profilForm.get('private')?.value!;

    const profile = {
      produzent: this.profilForm.get('produzent')?.value!,
      entsorger: this.profilForm.get('entsorger')?.value!,
      logistik: false,
    };

    const benutzerdaten = {
      firstLogin: false,
    };

    const updateBenutzerDto: UpdateBenutzerDto = {
      firmendaten: firmendaten,
      privateModus: privateModus,
      profile: profile,
      benutzerdaten: benutzerdaten,
    };

    this.updateUserService.updateUser(updateBenutzerDto).subscribe(() => {
      this.dialog.closeAll();
    });
  }

  async getGemeinden(
    bundeslandEvent: MatSelectChange | '',
    bundeslandKey: string
  ) {
    this.bundeslandEvent = bundeslandEvent;

    if (bundeslandEvent === undefined) {
      this.profilForm.get('bundesland')?.setValue(bundeslandEvent);
      this.profilForm.get('postleitzahl')?.disable();
      this.profilForm.get('bundesland')?.updateValueAndValidity();
      return;
    }

    let bundeslandName = '';
    if (typeof bundeslandEvent === 'string') {
      bundeslandName = bundeslandEvent;
    } else {
      bundeslandName = bundeslandEvent.value;
    }

    this.profilForm.get('postleitzahl')?.enable();
    this.profilForm.get('postleitzahl')?.setValue('');
    this.profilForm.get('postleitzahl')?.markAsDirty();
    this.profilForm.get('postleitzahl')?.markAsTouched();

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
    console.log(this.gemeindenFromLocal())
  }

  getStadt(postleitzahl: MatSelectChange) {
    const postleitzahlValue = postleitzahl.value;
    const gemeinde = this.gemeindenFromLocal().find(
      (gemeinde) => gemeinde.postalCode === postleitzahlValue
    )?.name;
    this.profilForm.get('stadt')!.setValue(gemeinde!);
    this.profilForm.get('postleitzahl')!.setValue(postleitzahlValue);
  }

}
