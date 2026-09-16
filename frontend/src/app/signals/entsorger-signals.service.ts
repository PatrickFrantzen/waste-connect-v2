import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, effect, inject, signal } from '@angular/core';
import { EntsorgerfilterDto } from '../components/landingpage/landingpage-entsorger-finden/entsorgerfilter.model';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntsorgerNEST } from '../components/auth/user.model';

const BACKEND_URL = environment.nestUrl + '/angebote';

@Injectable({
  providedIn: 'root',
})
export class EntsorgerSignalsService {

  constructor(){
    // effect(() => {
    //   console.log('EntsorgerSignalsService', this.filterEntsorger().entsorger)
    // });
  }
  
  http = inject(HttpClient);

  pageSize = signal(10); // Setzen Sie hier Ihren Standardwert
  currentPage = signal(1); // Setzen Sie hier Ihren Standardwert
  filterSignal = signal<EntsorgerfilterDto>({
    stadt: '',
    bundesland: '',
    postleitzahl: '',
    taetigkeitsbereich: '',
    dienstleistungen: '',
    logistik: [],
    zertifikatsbestaetigungen: '',
    avv: [],
  });


  entsorgerPaginatorAndFilter$ = toObservable(this.filterSignal).pipe(
    switchMap((filterObjekt) => {
      let params = new HttpParams()
        .set(
          'paginatorDto',
          JSON.stringify({
            pageSize: this.pageSize(),
            currentPage: this.currentPage(),
          })
        )
        .set('filterEntsorgerDto', JSON.stringify({entsorgerBeschreibung :filterObjekt}));
      return this.http.get<{
        entsorger: EntsorgerNEST[];
        totalEntsorger: number;
        numberOfEntsorger: number;
        numberOfEntsorgerByBundesland: { name: string; value: number }[];
      }>(BACKEND_URL + '/filterAndPaginatorEntsorger', { params });
    })
  );

  filterEntsorger = toSignal(this.entsorgerPaginatorAndFilter$, {
    initialValue: {
      entsorger: [],
      totalEntsorger: 0,
      numberOfEntsorger: 0,
      numberOfEntsorgerByBundesland: [],
    },
  });
}
