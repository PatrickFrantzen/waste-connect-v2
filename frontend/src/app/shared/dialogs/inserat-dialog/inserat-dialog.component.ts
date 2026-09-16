import { Component, Inject, OnInit, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Inserat, InseratNEST } from 'src/app/components/angebot/angebot.model';
import { UserInteraktionService } from '../../services/user-interaktion.service';

import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Email, Emailbody } from '../../models/formValue.model';
import { NgClass, DatePipe, AsyncPipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';
import { PdfDialogComponent } from '../pdf-dialog/pdf-dialog.component';
import { DateinamenPipe } from '../../pipes/dateinamen.pipe';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';
import { UpdateUserService } from 'src/app/components/auth/services/update-user.service';
import { ConnectableObservable, Observable } from 'rxjs';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';

@Component({
    selector: 'app-inserat-dialog',
    templateUrl: './inserat-dialog.component.html',
    styleUrls: ['./inserat-dialog.component.scss'],
    imports: [
    MatTooltip,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    NgClass,
    DatePipe,
    DateinamenPipe,
    AsyncPipe
]
})
export class InseratDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public inserat: InseratNEST,
    public userInteraktionService: UserInteraktionService,
    private updateUserService: UpdateUserService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<InseratDialogComponent>,
    private dialog: MatDialog
  ) {}

  tokenSignal = inject(AuthSignalsService);
  accountSignal = inject(AccountSignalsService);
  token = this.tokenSignal.tokenSignal();

  AuthenticatedToken: string | null = '';
  userID: string = '';
  images = this.inserat.inseratFilepath.bildpath;
  showEmailForm = false;
  currentImageIndex = 0;
  erstellerWebsite = new FormControl(this.inserat.inseratErsteller?.webseite);
  erstellerTelefon = new FormControl(
    this.inserat.inseratErsteller?.telefonnummer
  );
  erstellerEmail = new FormControl(this.inserat.inseratErsteller?.email);

  merkzettelStatus: Observable<boolean> = new Observable<boolean>();

  nachrichtFromUnknownForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    telefon: new FormControl('', Validators.minLength(10)),
    betreff: new FormControl(
      {
        value: `${this.inserat.inseratBeschreibung.abfallbezeichnung}`,
        disabled: true,
      },
      [Validators.required]
    ),
    nachricht: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  nachrichtFromKnownForm = this.fb.group({
    betreff: new FormControl(
      {
        value: `${this.inserat.inseratBeschreibung.abfallbezeichnung}`,
        disabled: true,
      },
      [Validators.required]
    ),
    nachricht: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  ngOnInit(): void {
    this.checkMerkzettel(this.inserat);
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

  toggleMerkzettel(inserat: InseratNEST) {
    this.checkMerkzettel(inserat).subscribe((status) => {
      if (status) {
        this.removeFromMerkzettel(inserat);
      } else {
        this.setToMerkzettel(inserat);
      }
    });
  }

  setToMerkzettel(inserat: InseratNEST) {
    this.updateUserService.updateMerkzettel(inserat._id!).subscribe(() => {
      this.accountSignal.addToMerkzettel(inserat);
      this.checkMerkzettel(inserat);
    });
  }

  checkMerkzettel(inserat: InseratNEST) {
    this.merkzettelStatus = this.updateUserService.checkMerkzettel(
      inserat._id!
    );
    return this.merkzettelStatus;
  }

  removeFromMerkzettel(inserat: InseratNEST) {
    this.updateUserService.updateMerkzettel(inserat._id!).subscribe(() => {
      this.accountSignal.removeFromMerkzettel(inserat);
      this.checkMerkzettel(inserat);
    });
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

  sendEmailViaOutlook(inserat: InseratNEST) {
    this.userInteraktionService.sendEmailViaOutlook(inserat);
  }

  sendEmailFromKnown(inserat: InseratNEST) {
    const formValue = this.nachrichtFromKnownForm!.value;
    const email: Emailbody = {
      betreff: inserat.inseratBeschreibung.abfallbezeichnung!,
      nachricht: formValue.nachricht!,
      ID: inserat._id!,
    };
    this.userInteraktionService
      .sendMailFromLoggedInUser(email)
      .subscribe((data) => {
        if ('updateMessage' in data) {
          this.accountSignal.addToGesendeteNachrichten(data.updateMessage);
        }
        this.nachrichtFromKnownForm.reset();
        this.toggleEmailForm();
      });
  }

  sendEmailFromUnknown(inserat: InseratNEST) {
    const formValue = this.nachrichtFromUnknownForm!.value;

    this.userInteraktionService
      .sendMailFromNotLoggedInUser(inserat, formValue as Email)!
      .subscribe(() => {
        this.nachrichtFromUnknownForm.reset();
        this.toggleEmailForm();
      });
  }

  printInserat() {
    window.print();
  }

  shareInserat(inserat: InseratNEST) {
    this.userInteraktionService.shareInserat(inserat);
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
