import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Signal, computed, effect, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Inserat, InseratNEST } from '../components/angebot/angebot.model';
import { Observable, switchMap, tap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { InseratfilterDto } from '../components/landingpage/landingpage-finden/inseratfilter.model';

const BACKEND_URL = environment.nestUrl + '/angebote';
const BACKEND_URL_CALENDAR = environment.nestUrl + '/of-the-day-calendar';

@Injectable({
  providedIn: 'root',
})
export class InseratSignalsService {
  http = inject(HttpClient);

  constructor() {
    effect(() => {
      // console.log('Inserate', this.inserate());
      // console.log('Filter und Paginator', this.filterInserate());
    });
  }
  //Erster Anfang um die Inserate mit Signals zu laden.
  //Wenn die Parameter als queryParams mitgesendet werden, muss auch im backend sie als @Query() angenommen werden.
  //Wenn die pageSize oder currentPage sich ändern, müssen die signals auch aktualisiert werden.

  pageSize = signal(10); // Setzen Sie hier Ihren Standardwert
  currentPage = signal(1); // Setzen Sie hier Ihren Standardwert
  filterSignal = signal<InseratfilterDto>({
    abfallursprung: '',
    abfallschluesselnummer: '',
    abfallbezeichnung: '',
    standort_Bundesland: '',
    standort_Gemeinde: '',
    standort_Postleitzahl: '',
  }); 

  lastSearchFilter = signal<InseratfilterDto>({
    abfallursprung: '',
    abfallschluesselnummer: '',
    abfallbezeichnung: '',
    standort_Bundesland: '',
    standort_Gemeinde: '',
    standort_Postleitzahl: '',
  });

  paginatorSignal = computed(() => {
    return this.getPaginatorString();
  });

  paginatorAndFilterSignal: Signal<[string, {}]> = computed(() => {
    return [this.getPaginatorString(), this.filterSignal()];
  });


  inseratPaginator$ = toObservable(this.paginatorSignal).pipe(
    switchMap((paginatorString) =>
      this.http.get<{ inserate: InseratNEST[]; totalInserate: number }>(
        BACKEND_URL + '/paginator' + paginatorString
      )
    )
  );

  inseratPaginatorAndFilter$ = toObservable(this.paginatorAndFilterSignal).pipe(
    switchMap(([paginatorString, filterObjekt]) => {
      let params = new HttpParams()
        .set(
          'paginatorDto',
          JSON.stringify({
            pageSize: this.pageSize(),
            currentPage: this.currentPage(),
          })
        )
        .set(
          'filterInseratDto',
          JSON.stringify({ inseratBeschreibung: filterObjekt })
        );

      return this.http.get<{
        inserate: InseratNEST[];
        totalInserate: number;
        numberOfInserate: number;
        numberOfInserateByBundesland: {name: string, value: number}[];
      }>(BACKEND_URL + '/filterAndPaginator', { params });
    })
  );

  //Der Filter muss direkt im Paginator mitlaufen. Wenn keine Filter gesetzt sind, kommt ein leeres Objekt mit und es wird nicht gefiltert.

  inserate = toSignal(this.inseratPaginator$, {
    initialValue: { inserate: [], totalInserate: 0 },
  });

 filterInserate = toSignal(this.inseratPaginatorAndFilter$, {
    initialValue: {
      inserate: [],
      totalInserate: 0,
      numberOfInserate: 0,
      numberOfInserateByBundesland: [],
    },
  });


  getPaginatorString() {
    return `?pageSize=${this.pageSize()}&currentPage=${this.currentPage()}`;
  }

  inseratBearbeiten = signal<InseratNEST | null>(null);

  wasteOfTheDay$ = this.http.get<InseratNEST>(BACKEND_URL_CALENDAR + '/getWasteOfTheDay');

  private rawWasteOfTheDay = toSignal(this.wasteOfTheDay$, {initialValue: null});

  wasteOfTheDay = computed(() => {
    return this.rawWasteOfTheDay();
  });

  wasteOfTheDayID = computed(() => {
    return this.rawWasteOfTheDay()?._id;
  });
}
