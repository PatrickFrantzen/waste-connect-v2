import { Injectable, inject } from '@angular/core';
import {  InseratNEST } from 'src/app/components/angebot/angebot.model';
import { AvvListeService } from './avv-liste.service';
import { Email, Emailbody } from '../models/formValue.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  EntsorgerNEST,
  Message,
} from 'src/app/components/auth/user.model';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';

const BACKEND_URL_MAIL = environment.nestUrl + '/email/';
@Injectable({
  providedIn: 'root',
})
export class UserInteraktionService {
  accountSignal = inject(AccountSignalsService);
  avvListe = inject(AvvListeService);
  http = inject(HttpClient);


  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  }

  getAVVValue(abfallschluesselnummer: string): string {
    const avvItem = this.avvListe.allAVV3.find(
      (item) => item.value === abfallschluesselnummer
    );
    return avvItem ? avvItem.viewValue : 'N/A';
  }

  getAbfallursprungValue(abfallursprung: string): string {
    const abfallursprungItem = this.avvListe.allAVV1.find(
      (item) => item.value === abfallursprung
    );
    return abfallursprungItem ? abfallursprungItem.viewValue : 'N/A';
  }

  //eingeloggter User sendet Email an Inserat-Ersteller
  sendMailFromLoggedInUser(emailDto: Emailbody) {
    return this.http.post<
      { message: string; updateMessage: Message } | { message: string }
    >(BACKEND_URL_MAIL + 'sendEmail', emailDto);
  }

  sendEntsorgerMailFromLoggedInUser(emailDto: Emailbody) {
    return this.http.post<
      { message: string; updateMessage: Message } | { message: string }
    >(BACKEND_URL_MAIL + 'sendEntsorgerEmail', emailDto);
  }

  sendHelpEmail(emailDto: Emailbody, onSuccess: () => void) {
    return this.http
      .post(BACKEND_URL_MAIL + 'feedback', emailDto)
      .subscribe(() => {
        onSuccess(); // Rückruffunktion aufrufen
      });
  }

  //nicht eingeloggter User sendet Email an Insert-Ersteller
  sendMailFromNotLoggedInUser(inserat: InseratNEST, emailForm: Email) {
    const emailDto = {
      email: emailForm.email,
      telefonnummer: emailForm.telefon,
      betreff: inserat.inseratBeschreibung.abfallbezeichnung,
      nachricht: emailForm.nachricht,
      ID: inserat._id,
    };
    return this.http.post(BACKEND_URL_MAIL + 'sendAnonymEmail', emailDto);
  }

  sendEntsorgerMailFromNotLoggedInUser(
    entsorger: EntsorgerNEST,
    emailForm: Email
  ) {
    const emailDto = {
      email: emailForm.email,
      telefonnummer: emailForm.telefon,
      betreff: entsorger.firmendaten.firmenname,
      nachricht: emailForm.nachricht,
      ID: entsorger._id,
    };
    return this.http.post(
      BACKEND_URL_MAIL + 'sendAnonymEntsorgerEmail',
      emailDto
    );
  }

  sendEmailViaOutlook(inserat: InseratNEST) {
    window.location.href = `mailto:${inserat.inseratErsteller?.email}?subject=Anfrage%20zu%20Inserat%20${inserat.inseratBeschreibung.abfallbezeichnung}`;
    //Auch wenn der User eingeloggt ist, wird diese Nachricht nicht in seine gesendete Nachrichten gepushed
  }

  sendEntsorgerEmailViaOutlook(entsorger: EntsorgerNEST) {
    window.location.href = `mailto:${entsorger.entsorgerdaten.email}?subject=Anfrage%20zu%20Entsorger%20${entsorger.firmendaten.firmenname}`;
  }

  shareInserat(inserat: InseratNEST) {
    const url = window.location.href;
    const inseratUrl = `${url}inserat/${inserat._id}`;
    const body = `Hallo, ich habe ein interessantes Inserat auf der Seite ${inseratUrl} gefunden. Schau es dir doch mal an!`;

    window.location.href = `mailto:?subject=Schau%20dir%20das%20Inserat%20${
      inserat.inseratBeschreibung.abfallbezeichnung
    }%20auf%20waste-connect.de%20an&body=${encodeURIComponent(body)}`;
  }

  shareEntsorger(entsorger: EntsorgerNEST) {
    const url = window.location.href;
    const entsorgerUrl = `${url}entsorger/${entsorger._id}`;
    const body = `Hallo, ich habe einen interessanten Abfallentsorger auf der Seite ${entsorgerUrl} gefunden. Schau ihn dir doch mal an!`;

    window.location.href = `mailto:?subject=Schau%20dir%20den%20Entsorger%20${
      entsorger.firmendaten.firmenname
    }%20auf%20waste-connect.de%20an&body=${encodeURIComponent(body)}`;
  }


}
