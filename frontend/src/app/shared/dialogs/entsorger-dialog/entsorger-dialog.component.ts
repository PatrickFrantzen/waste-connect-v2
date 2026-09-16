import { DatePipe, NgClass } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';
import { DateinamenPipe } from '../../pipes/dateinamen.pipe';
import {
  EntsorgerNEST,
  EntsorgerProfil,
} from 'src/app/components/auth/user.model';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { UserInteraktionService } from '../../services/user-interaktion.service';
import { Email, Emailbody } from '../../models/formValue.model';
import { PdfDialogComponent } from '../pdf-dialog/pdf-dialog.component';
import { AvvEntriesInterface } from '../avv-dialog/avv-dialog.service';
import { ReplaceBefoerdernPipe } from '../../pipes/transformBefoerdern.pipe';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';

@Component({
    selector: 'app-entsorger-dialog',
    imports: [
    MatTooltip,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    NgClass,
    DatePipe,
    DateinamenPipe,
    ReplaceBefoerdernPipe
],
    templateUrl: './entsorger-dialog.component.html',
    styleUrl: './entsorger-dialog.component.scss'
})
export class EntsorgerDialogComponent implements OnInit {
  tokenSignal = inject(AuthSignalsService);
  accountSignal = inject(AccountSignalsService);
  token = this.tokenSignal.tokenSignal();

  constructor(
    @Inject(MAT_DIALOG_DATA) public entsorger: EntsorgerNEST,
    public userInteraktionService: UserInteraktionService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EntsorgerDialogComponent>,
    private dialog: MatDialog
  ) {}

  AuthenticatedToken: string | null = '';
  userID: string = '';
  images = this.entsorger.entsorgerFilepath.logoPath;
  showEmailForm = false;
  currentImageIndex = 0;
  erstellerWebsite = new FormControl(this.entsorger.firmendaten.firmenwebseite);

  alleHandelnTrue: boolean = false;
  alleMakelnTrue: boolean = false;
  alleSammelnTrue: boolean = false;
  alleBefoerdernTrue: boolean = false;
  avvEntries: AvvEntriesInterface = {};
  AVVArray: string[] = [];

  nachrichtFromUnknownForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    telefon: new FormControl('', Validators.minLength(10)),
    betreff: new FormControl(
      { value: `${this.entsorger.firmendaten.firmenname}`, disabled: true },
      [Validators.required]
    ),
    nachricht: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  nachrichtFromKnownForm = this.fb.group({
    betreff: new FormControl(
      { value: `${this.entsorger.firmendaten.firmenname}`, disabled: true },
      [Validators.required]
    ),
    nachricht: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit() {
    this.parseAvvData();
  }

  parseAvvData() {
    const parsedData =
      typeof this.entsorger.avv === 'string'
        ? JSON.parse(this.entsorger.avv)
        : this.entsorger.avv;
    this.avvEntries = Object.assign(this.avvEntries, parsedData);
  }

  previousImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images!.length - 1;
    }
  }

  nextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images!.length) {
      this.currentImageIndex = 0;
    }
  }

  openWebsite() {
    let erstellerWebseite = this.erstellerWebsite.value;
    if (!erstellerWebseite!.startsWith('https://')) {
      erstellerWebseite = 'https://' + erstellerWebseite;
    }
    window.open(erstellerWebseite!, '_blank');
  }

  toggleEmailForm() {
    this.showEmailForm = !this.showEmailForm;
  }

  sendEntsorgerEmailViaOutlook(entsorger: EntsorgerNEST) {
    this.userInteraktionService.sendEntsorgerEmailViaOutlook(entsorger);
  }

  sendEntsorgerMailFromLoggedInUser(entsorger: EntsorgerNEST) {
    const formValue = this.nachrichtFromKnownForm!.getRawValue();
    const emailFromKnown: Emailbody = {
      betreff: formValue.betreff!,
      nachricht: formValue.nachricht!,
      ID: entsorger._id!,
    };

    console.log('emailFromKnown', emailFromKnown);

    this.userInteraktionService
      .sendEntsorgerMailFromLoggedInUser(emailFromKnown)!
      .subscribe((data) => {
        if ('updateMessage' in data) {
          this.accountSignal.addToGesendeteNachrichten(data.updateMessage);
        }
        this.nachrichtFromKnownForm.reset();
        this.toggleEmailForm();
      });
  }

  sendMailFromNotLoggedInUser(entsorger: EntsorgerNEST) {
    const formValue = this.nachrichtFromUnknownForm!.getRawValue();
    console.log('Not logged In User', formValue);
    this.userInteraktionService
      .sendEntsorgerMailFromNotLoggedInUser(entsorger, formValue as Email)!
      .subscribe(() => {
        this.nachrichtFromUnknownForm.reset();
        this.toggleEmailForm();
      });
  }

  printEntsorgerprofil() {
    window.print();
  }

  shareEntsorgerprofil(entsorger: EntsorgerNEST) {
    this.userInteraktionService.shareEntsorger(entsorger);
  }

  openPdfViewer(id: string, analyse: string) {
    this.dialog.open(PdfDialogComponent, {
      data: { inseratID: id, pdfPath: analyse },
      disableClose: true,
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
