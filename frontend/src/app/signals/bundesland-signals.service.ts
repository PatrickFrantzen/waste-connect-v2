import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  Gemeinde,
  GemeindeByBundesland,
} from '../components/landingpage/landingpage-anbieten/standort.model';
const BACKEND_URL = environment.nestUrl + '/angebote';
@Injectable({
  providedIn: 'root',
})
export class BundeslandSignalService {
  http = inject(HttpClient);

  bundeslandSignal = signal<string>('');

  availableGemeinden$ = toObservable(this.bundeslandSignal).pipe(
    switchMap((bundesland) => {
      let params = new HttpParams().set('bundesland', bundesland);
      return this.http.get<GemeindeByBundesland[]>(
        BACKEND_URL + '/getGemeindenForBundesland',
        { params }
      );
    })
  );

  availableGemeinden = toSignal(this.availableGemeinden$, {
    initialValue:  [] ,
  });

  bundeslandSignalEntsorger = signal<string>('');

  availableGemeindenEntsorger$ = toObservable(this.bundeslandSignalEntsorger).pipe(
    switchMap((bundesland) => {
      let params = new HttpParams().set('bundesland', bundesland);
      return this.http.get<GemeindeByBundesland[]>(
        BACKEND_URL + '/getEntsorgerGemeindenForBundesland',
        { params }
      );
    })
  );

  rawAvailableGemeindenEntsorger = toSignal(this.availableGemeindenEntsorger$, {
    initialValue: [],
  });

 private availableGemeindenEntsorger = computed(() => signal(this.rawAvailableGemeindenEntsorger()))

 availableGemeindenEntsorgerForDisplay = computed(() => this.availableGemeindenEntsorger()())

}
