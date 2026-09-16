import { HttpClient } from '@angular/common/http';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { AuthSignalsService } from '../auth-signals.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BestellungService, Day } from 'src/app/shared/services/bestellung.service';
import { InseratNEST } from 'src/app/components/angebot/angebot.model';

const BACKEND_URL_RESERVATION = environment.nestUrl + '/of-the-day-calendar';
const BACKEND_URL_INSERATE = environment.nestUrl + '/inserat';

@Injectable({ providedIn: 'root' })
export class AdminSignalsService {
  http = inject(HttpClient);
  authSignalService = inject(AuthSignalsService);
  bestellungsService = inject(BestellungService);


  private isUserAdmin = computed(
    () => !!this.authSignalService.adminSignal()
  );

  wasteOftheDayFilter = signal(false);

  filterReservations = computed(() => {
    return this.wasteReservationForDisplay().filter((reservation) => {
      return this.wasteOftheDayFilter() ? true : !reservation.freigegeben;
    });
  } );

  private wasteReservationInitialValue: Day[] = [];

  private wasteReservationSignal = toObservable(this.isUserAdmin).pipe(
    switchMap((isUserAdmin) => {
      if (isUserAdmin) {
        return this.http.get<Day[]>(
          BACKEND_URL_RESERVATION + '/getWasteOfTheDayReservations'
        );
      } else {
        return of(this.wasteReservationInitialValue);
      }
    })
  );

  private rawWasteReservationSignal = toSignal(this.wasteReservationSignal, {
    initialValue: this.wasteReservationInitialValue,
  });

  private wasteReservation = computed(() =>
    signal(this.rawWasteReservationSignal())
  );

  wasteReservationForDisplay = computed(() => this.wasteReservation()());

  updateWasteReservation(inseratID: string, reservierterTag: Date) {
    let updatedFreigegeben = false;
    this.wasteReservation().update((days) => {
      return days.map((day) => {
        if (day.inseratID === inseratID && day.day === reservierterTag) {
          updatedFreigegeben = !day.freigegeben;
          return { ...day, freigegeben: !day.freigegeben };
        } else {
          return day;
        }
      });
    });
    this.bestellungsService.updateWasteOfTheDay(inseratID, reservierterTag, updatedFreigegeben).subscribe();
  }

  search = signal('');

  filteredInserate = computed(() => {
    return this.inserateForDisplay().filter((inserat) => {
      return inserat.inseratBeschreibung.abfallbezeichnung.toLowerCase().includes(this.search().toLowerCase()) ||
      inserat.inseratErsteller?.firma.toLowerCase().includes(this.search().toLowerCase()) ||
      inserat.inseratErsteller?.ansprechpartner.toLowerCase().includes(this.search().toLowerCase());
    });
  });

  private inserateInitialValue: InseratNEST[] = [];

  private allInserate = toObservable(this.isUserAdmin).pipe(
    switchMap((isUserAdmin) => {
      if (isUserAdmin) {
        return this.http.get<InseratNEST[] >(BACKEND_URL_INSERATE  + '/adminInserate');
      } else {
        return of(this.inserateInitialValue );
      }
    })
  );

  private rawInserate = toSignal(this.allInserate, {
    initialValue: this.inserateInitialValue,
  });

  private inserate = computed(() => signal(this.rawInserate() ));

  inserateForDisplay = computed(() => this.inserate()());

  deleteInserat(inseratID: string) {
    this.http.delete(BACKEND_URL_INSERATE + '/adminDeleteInserat/' + inseratID).subscribe(() => {
      this.http.delete(BACKEND_URL_RESERVATION + '/deleteWasteOfTheDayReservations/' + inseratID).subscribe();
      this.inserate().update((inserate) => {
        return inserate.filter((inserat) => inserat._id !== inseratID);
      });
    });

  }
}
