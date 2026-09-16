import {
  Component,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InseratNEST } from 'src/app/components/angebot/angebot.model';
import { Email } from 'src/app/shared/models/formValue.model';
import { UserInteraktionService } from 'src/app/shared/services/user-interaktion.service';
import { MatInput } from '@angular/material/input';
import { DatePipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { CalenderDialogComponent } from 'src/app/shared/dialogs/calender-dialog/calender-dialog.component';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';
import { InseratService } from 'src/app/components/landingpage/landingpage-anbieten/inserat.service';
import { InseratSignalsService } from 'src/app/signals/inserat-signals.service';

@Component({
    selector: 'app-inserate',
    templateUrl: './inserate.component.html',
    styleUrls: ['./inserate.component.scss'],
    imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    DatePipe,
    MatTooltip
]
})
export class InserateComponent {
  inseratService = inject(InseratService);
  inseratSignalService = inject(InseratSignalsService);
  accountSignal = inject(AccountSignalsService);
  userInteraktionService = inject(UserInteraktionService);
  router = inject(Router);
  dialog = inject(MatDialog);
  fb = inject(FormBuilder);

  nachrichtForm = this.fb.group({
    betreff: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    nachricht: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });


  deleteInserat(id: string): void {
    this.inseratService.deleteInserat(id);
  }

  navigateToInseratErstellen() {
    this.router.navigate(['/anbieten']);
  }

  absenden() {
    const formValue = this.nachrichtForm!.value;
    if (formValue.betreff && formValue.nachricht) {
      this.userInteraktionService.sendHelpEmail(formValue as Email, () => {
        this.nachrichtForm.reset();
      });
    } else {
      console.error('Form is not valid');
    }
  }

  registerWasteOfTheDay(inserat: InseratNEST) {
    const wasteOfTheDay = `${`Reserviere hier für dein Inserat ${inserat.inseratBeschreibung.abfallbezeichnung} den Waste of the Day.`}`;
    this.dialog.open(CalenderDialogComponent, {
      data: { inserat: inserat, text: wasteOfTheDay },
      disableClose: true,
    });
  }

  inseratBearbeiten(inserat: InseratNEST) {
    this.router.navigate(['/edit']);
    this.inseratSignalService.inseratBearbeiten.set(inserat);
  }
}
