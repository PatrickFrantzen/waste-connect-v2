import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, computed, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { UpdateUserService } from 'src/app/components/auth/services/update-user.service';
import { UpdateBenutzerDto, User } from 'src/app/components/auth/user.model';
import { BundeslaenderService } from 'src/app/shared/services/bundeslaender.service';
import { MyErrorStateMatcher, bundeslandValidator } from 'src/app/shared/validators/error.validators';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';
import { BundeslaenderSignalsService } from 'src/app/signals/bundeslaender-signals.service';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { Subject, takeUntil } from 'rxjs';


@Component({
    selector: 'app-firmenprofil',
    imports: [
    AsyncPipe,
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckbox,
    JsonPipe,
    NgxMatSelectSearchModule
],
    templateUrl: './firmenprofil.component.html',
    styleUrl: './firmenprofil.component.scss'
})
export class FirmenprofilComponent implements OnInit, OnDestroy {
  fb = inject(FormBuilder);
  updateUserService = inject(UpdateUserService);
  accountSignal = inject(AccountSignalsService);
  bundeslaenderSignalService = inject(BundeslaenderSignalsService);
  bundeslaenderService = inject(BundeslaenderService);

  firmenprofil = this.accountSignal.firmendatenForDisplay;
  profile = this.accountSignal.profileForDisplay;
  privateModus = this.accountSignal.privateModusForDisplay;
  bundeslaender = this.bundeslaenderSignalService.bundeslaenderSignal;


  user: User = {} as User;
  gemeindenFromLocal = signal<{ name: string; postalCode: string }[]>([]);
  bundeslandEvent: MatSelectChange | string = '';

  filteredGemeindenBySearch = signal<string>('')
  public filterCtrl: FormControl<string | null> = new FormControl<string>('');
  protected _onDestroy = new Subject<void>();

  changeProfileForm = this.fb.group({
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
    bundesland: new FormControl<string>('', [Validators.required
    ]),
    private: new FormControl<boolean>(false),
    entsorger: new FormControl<boolean>(false),
    produzent: new FormControl<boolean>(false),
    logistik: new FormControl<boolean>(false),
  });

  matcher = new MyErrorStateMatcher();

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

  ngOnInit(): void {
    this.changeProfileForm.patchValue({
      ansprechpartner:
        this.accountSignal.firmendatenForDisplay().ansprechpartner,
      firmenname: this.firmenprofil().firmenname,
      firmenadresse: this.firmenprofil().firmenadresse,
      firmenwebseite: this.firmenprofil().firmenwebseite,
      bundesland: this.firmenprofil().bundesland,
      telefonnummer: this.firmenprofil().telefonnummer,
      private: this.privateModus(),
      entsorger: this.profile().entsorger,
      produzent: this.profile().produzent,
      logistik: this.profile().logistik,
    });

    this.filterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filteredGemeindenBySearch.set(this.filterCtrl.value!);
    });

    const bundeslandForm = this.changeProfileForm.get('bundesland')?.value;
    if (bundeslandForm) {
      this.changeProfileForm.get('stadt')?.enable();
      this.changeProfileForm.get('postleitzahl')?.enable();

      const selectedBundeslandObj = this.bundeslaenderSignalService
        .bundeslaenderSignal()
        .find((bundesland) => bundesland.name === bundeslandForm);
      if (selectedBundeslandObj) {
        this.getGemeinden(
          this.firmenprofil().bundesland,
          selectedBundeslandObj.key
        );
      }

      this.changeProfileForm.patchValue({
        postleitzahl: this.firmenprofil().postleitzahl,
        stadt: this.firmenprofil().stadt,
      });

    }
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  async getGemeinden(
    bundeslandEvent: MatSelectChange | string,
    bundeslandKey: string
  ) {
    this.bundeslandEvent = bundeslandEvent;

    if (bundeslandEvent === undefined) {
      this.changeProfileForm.get('bundesland')?.setValue(bundeslandEvent);
      this.changeProfileForm.get('postleitzahl')?.disable();
      this.changeProfileForm.get('bundesland')?.updateValueAndValidity();
      return;
    }

    let bundeslandName = '';
    if (typeof bundeslandEvent === 'string') {
      bundeslandName = bundeslandEvent;
    } else {
      bundeslandName = bundeslandEvent.value;
    }

    this.changeProfileForm.get('postleitzahl')?.enable();
    this.changeProfileForm.get('postleitzahl')?.setValue('');
    this.changeProfileForm.get('postleitzahl')?.markAsDirty();
    this.changeProfileForm.get('postleitzahl')?.markAsTouched();

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
    this.changeProfileForm.get('stadt')!.setValue(gemeinde!);
    this.changeProfileForm.get('postleitzahl')!.setValue(postleitzahlValue);
  }

  changeProfile() {
    const firmendaten = {
      firmenname: this.changeProfileForm.get('firmenname')?.value!,
      firmenadresse: this.changeProfileForm.get('firmenadresse')?.value!,
      firmenwebseite: this.changeProfileForm.get('firmenwebseite')?.value!,
      ansprechpartner: this.changeProfileForm.get('ansprechpartner')?.value!,
      telefonnummer: this.changeProfileForm.get('telefonnummer')?.value!,
      stadt: this.changeProfileForm.get('stadt')?.value!,
      postleitzahl: this.changeProfileForm.get('postleitzahl')?.value!,
      bundesland: this.changeProfileForm.get('bundesland')?.value!,
      standortFavoriten: this.accountSignal.firmendatenForDisplay().standortFavoriten
    };

    const privateModus = this.changeProfileForm.get('private')?.value!;

    const profile = {
      produzent: this.changeProfileForm.get('produzent')?.value!,
      entsorger: this.changeProfileForm.get('entsorger')?.value!,
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
      this.accountSignal.updateProfile(profile);
      this.accountSignal.updatePrivateModus(privateModus);
      this.accountSignal.updateFirmendaten(firmendaten);
    });
  }
}
