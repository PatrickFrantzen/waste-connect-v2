import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { InseratNEST } from 'src/app/components/angebot/angebot.model';
import { environment } from 'src/environments/environment';

const BACKEND_URL_CALENDAR = environment.nestUrl + '/of-the-day-calendar/';

export interface Day {
  day: Date;
  inseratID: string;
  freigegeben: boolean;
  bestellnummer: string
}

@Injectable({
  providedIn: 'root',
})
export class BestellungService {

  http = inject(HttpClient);

  getBlockedDays(type: string): Observable<Day[]> {
    return this.http
      .get<Day[]>(BACKEND_URL_CALENDAR + 'blockedDays/' + type);
  }

  wasteOfTheDayReservierung(
    inseratID: string,
    dates: string[],
    type: string,
    onSuccess: () => void
  ) {
    const createOfTheDayCalendarDto = {
      inseratID: inseratID,
      dates: dates,
      type: type,
    }
    return this.http
      .post(BACKEND_URL_CALENDAR, createOfTheDayCalendarDto)
      .subscribe(() => {
        onSuccess(); // Rückruffunktion aufrufen
      });
  }

  getWasteOfTheDay(): Observable<InseratNEST> {
    return this.http.get<InseratNEST>(BACKEND_URL_CALENDAR + 'getWasteOfTheDay');
  }

  updateWasteOfTheDay(inseratID: string, reservierterTag: Date ,freigegeben: boolean) {
    return this.http
      .patch(BACKEND_URL_CALENDAR + 'updateWasteReservation/' + inseratID, {
        reservierterTag: reservierterTag,
        freigegeben
      });
  }

}
