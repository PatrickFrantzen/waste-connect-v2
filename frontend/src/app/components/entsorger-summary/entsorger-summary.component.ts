import { HttpClient } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, filter, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntsorgerNEST } from '../auth/user.model';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';
import { MatDialog } from '@angular/material/dialog';
import { EntsorgerDialogComponent } from 'src/app/shared/dialogs/entsorger-dialog/entsorger-dialog.component';
import { ReplaceBefoerdernPipe } from 'src/app/shared/pipes/transformBefoerdern.pipe';
const BACKEND_URL_ANGEBOTE = environment.nestUrl + '/angebote';
@Component({
    selector: 'app-entsorger-summary',
    imports: [ReplaceBefoerdernPipe],
    templateUrl: './entsorger-summary.component.html',
    styleUrl: './entsorger-summary.component.scss'
})
export class EntsorgerSummaryComponent {
  private readonly http = inject(HttpClient);
  private readonly authSignal = inject(AuthSignalsService);
  dialog = inject(MatDialog);

  token = this.authSignal.tokenSignal();
  showEmailForm = false;
  currentImageIndex = 0;
  entsorgerID = input.required<string>();
  entsorger = toSignal(
    toObservable(this.entsorgerID).pipe(
      filter((id) => !!id),
      switchMap((id) => this.http.get<EntsorgerNEST>(BACKEND_URL_ANGEBOTE + `/entsorger/${id}`)),
      catchError((error) => {
        return [];
      }
      )
    ), { initialValue: {
      _id: '',
      firmendaten: {
        firmenname: '',
        firmenadresse: '',
        firmenwebseite: '',
        telefonnummer: '',
        ansprechpartner: '',
        stadt: '',
        postleitzahl: '',
        bundesland: '',
        standortFavoriten: [],
      },
      entsorgerdaten: {
        ansprechpartner: '',
        email: '',
        telefonnummer: '',
      },
      entsorgerFilepath: {
        logoPath: [],
        zertifikatePath: [],
        genehmigungenPath: [],
      },
      entsorgerBeschreibung: {
        taetigkeitsbereich: [],
        dienstleistungen: [],
        logistik: [],
        zertifikatsbestaetigungen: [],
        besonderheiten: '',
      },
      avv: [],
      avvZusammenfassung: [],
      private: true,
    }}
  )
  images!: string[];

  openProfilDialog(entsorger: EntsorgerNEST) {
    this.dialog.open(EntsorgerDialogComponent, {
      data: entsorger,
      disableClose: true,
    });
  }
}
