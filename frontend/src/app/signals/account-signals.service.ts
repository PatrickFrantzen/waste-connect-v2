import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  EntsorgerNEST,
  Firmendaten,
  Message,
  UpdateBenutzerDto,
  standortFavorit,
} from '../components/auth/user.model';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { InseratNEST } from '../components/angebot/angebot.model';
import { AuthSignalsService } from './auth-signals.service';
import { combineLatest, of, switchMap } from 'rxjs';
import { Inseratfilter } from '../components/landingpage/landingpage-finden/inseratfilter.model';
import { AvvEntriesInterface } from '../shared/dialogs/avv-dialog/avv-dialog.service';

const BACKEND_URL_BENUTZER = environment.nestUrl + '/benutzer';
const BACKEND_URL_INSERATE = environment.nestUrl + '/inserat';
const BACKEND_URL_ENTSORGER = environment.nestUrl + '/entsorger';

@Injectable({
  providedIn: 'root',
})
export class AccountSignalsService {
  constructor() {}

  http = inject(HttpClient);
  authSignalService = inject(AuthSignalsService);

  private firmendatenInitialValue: Firmendaten = {
    firmenname: '',
    firmenadresse: '',
    firmenwebseite: '',
    telefonnummer: '',
    ansprechpartner: '',
    stadt: '',
    postleitzahl: '',
    bundesland: '',
    standortFavoriten: [],
  };

  private userInserateInitialValue: InseratNEST[] = [];

  private userLetzteSucheInserateInitialValue: Inseratfilter[] = [];

  private userEmpfangeneNachtrichtenInitialValue = {
    nachrichten: [] as Message[],
    numberOfNachrichten: 0,
  };

  private userGesendeteNachtrichtenInitialValue = {
    nachrichten: [] as Message[],
    numberOfNachrichten: 0,
  };

  private profileInitialValue = {
    produzent: false,
    entsorger: false,
    logistik: false,
  };

  private privateInitialValue = false;

  private entsorgerInitialValue: EntsorgerNEST = {
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
  };

  // Signal to indicate if the user is logged in
  private isUserLoggedIn = computed(
    () => !!this.authSignalService.tokenSignal()
  );

  private entsorgerSignal = toObservable(this.isUserLoggedIn).pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return this.http.get<EntsorgerNEST>(BACKEND_URL_ENTSORGER);
      } else {
        return of(this.entsorgerInitialValue);
      }
    })
  );

  private rawEntsorger = toSignal(this.entsorgerSignal, {
    initialValue: this.entsorgerInitialValue,
  });

  private entsorger = computed(() => signal(this.rawEntsorger()));

  entsorgerForDisplay = computed(() => this.entsorger()());

  updateEntsorger(entsorger: EntsorgerNEST) {
    this.entsorger().set(entsorger);
  }

  updateDienstleistungen(dienstleistung: string) {
    this.entsorger().update((entsorger) => {
      entsorger.entsorgerBeschreibung.dienstleistungen.push(dienstleistung);
      return entsorger;
    });
  }

  updateZertifikatsbestaetigungen(zertifikatsbestaetigung: string) {
    this.entsorger().update((entsorger) => {
      entsorger.entsorgerBeschreibung.zertifikatsbestaetigungen.push(
        zertifikatsbestaetigung
      );
      return entsorger;
    });
  }

  updateLogistik(logistik: string[]) {
    this.entsorger().update((entsorger) => {
      entsorger.entsorgerBeschreibung.logistik = logistik;
      return entsorger;
    });
  }

  updateTaetigkeitsbereich(taetigkeitsbereich: string[]) {
    this.entsorger().update((entsorger) => {
      entsorger.entsorgerBeschreibung.taetigkeitsbereich = taetigkeitsbereich;
      return entsorger;
    });
  }

  updateAvvZusammenfasung(avvZusammenfassung: string[]) {
    this.entsorger().update((entsorger) => {
      entsorger.avvZusammenfassung = avvZusammenfassung;
      return entsorger;
    });
  }

  updateChunkAvvListe(avv: AvvEntriesInterface[]) {
    this.entsorger().update((entsorger) => {
      entsorger.avv = avv;
      return entsorger;
    });
  }

  removeFileFromPath(filename: string, filePath: string) {
    this.entsorger().update((entsorger) => {
      entsorger.entsorgerFilepath[filePath] = entsorger.entsorgerFilepath[
        filePath
      ].filter((path: string) => path !== filename);
      return entsorger;
    });
  }

  private firmendatenSignal = toObservable(this.isUserLoggedIn).pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return this.http.get<Firmendaten>(
          BACKEND_URL_BENUTZER + '/firmendaten'
        );
      } else {
        return of(this.firmendatenInitialValue);
      }
    })
  );

  private rawFirmendaten = toSignal(this.firmendatenSignal, {
    initialValue: this.firmendatenInitialValue,
  });

  private firmendaten = computed(() => signal(this.rawFirmendaten()));

  firmendatenForDisplay = computed(() => this.firmendaten()());

  updateFirmendaten(firmendaten: Firmendaten) {
    this.firmendaten().set(firmendaten);
  }

  updateStandortFavoriten(standort: standortFavorit) {
    this.firmendaten().update((firmendaten) => {
      const exists = firmendaten.standortFavoriten.some(
        (favorit) => favorit.postleitzahl === standort.postleitzahl
      );
      if (!exists) {
        firmendaten.standortFavoriten.push(standort);
      }
      return firmendaten;
    });
  }

  private profileSignal = toObservable(this.isUserLoggedIn).pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return this.http.get<{
          produzent: boolean;
          entsorger: boolean;
          logistik: boolean;
        }>(BACKEND_URL_BENUTZER + '/profile');
      } else {
        return of(this.profileInitialValue);
      }
    })
  );

  private rawProfile = toSignal(this.profileSignal, {
    initialValue: this.profileInitialValue,
  });

  private profile = computed(() => signal(this.rawProfile()));

  profileForDisplay = computed(() => this.profile()());

  updateProfile(profile: {
    produzent: boolean;
    entsorger: boolean;
    logistik: boolean;
  }) {
    this.profile().set(profile);
  }

  private privateModusSignal = toObservable(this.isUserLoggedIn).pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return this.http.get<boolean>(BACKEND_URL_BENUTZER + '/private');
      } else {
        return of(this.privateInitialValue);
      }
    })
  );

  private rawPrivateModus = toSignal(this.privateModusSignal, {
    initialValue: this.privateInitialValue,
  });

  private privateModus = computed(() => signal(this.rawPrivateModus()));

  privateModusForDisplay = computed(() => this.privateModus()());

  updatePrivateModus(privateModus: boolean) {
    this.privateModus().set(privateModus);
  }

  private userInserateSignal = toObservable(this.isUserLoggedIn).pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return this.http.get<InseratNEST[]>(
          BACKEND_URL_INSERATE + '/userInserate'
        );
      } else {
        return of(this.userInserateInitialValue);
      }
    })
  );

  private rawUserInserate = toSignal(this.userInserateSignal, {
    initialValue: this.userInserateInitialValue,
  });

  //Dient zum verändern der Inserate, aber kann nur durch Methoden in dem Service verändert werden ( siehe updateInserate())
  private userInserate = computed(() => signal(this.rawUserInserate()));

  //Nur für die ANzeige, kann nicht verändertr werden
  userInserateForDisplay = computed(() => this.userInserate()());

  updateInserate(inserate: InseratNEST[]) {
    this.userInserate().set(inserate);
  }

  addToInserate(inserat: InseratNEST) {
    this.userInserate().update((inserate) => [...inserate, inserat]);
  }

  updateOneInserat(inserat: InseratNEST) {
    this.userInserate().update((inserate) => {
      const index = inserate.findIndex((i) => i._id === inserat._id);
      inserate[index] = inserat;
      return inserate;
    });
  }

  private userMerkzettelSignal = toObservable(this.isUserLoggedIn).pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return this.http.get<InseratNEST[]>(
          BACKEND_URL_BENUTZER + '/merkzettel'
        );
      } else {
        return of(this.userInserateInitialValue);
      }
    })
  );

  private rawUserInteraktion = toSignal(this.userMerkzettelSignal, {
    initialValue: this.userInserateInitialValue,
  });

  private userMerkzettel = computed(() => signal(this.rawUserInteraktion()));

  userMerkzettelForDisplay = computed(() => this.userMerkzettel()());

  addToMerkzettel(inserat: InseratNEST) {
    this.userMerkzettel().update((inserate) => [...inserate, inserat]);
  }

  removeFromMerkzettel(inserat: InseratNEST) {
    this.userMerkzettel().update((inserate) =>
      inserate.filter((i) => i._id !== inserat._id)
    );
  }

  private userLetzteSucheInseratSignal = toObservable(this.isUserLoggedIn).pipe(
    switchMap((isLoggedIn) => {
      if (isLoggedIn) {
        return this.http.get<Inseratfilter[]>(
          BACKEND_URL_BENUTZER + '/letzteSucheInserate'
        );
      } else {
        return of(this.userLetzteSucheInserateInitialValue);
      }
    })
  );

  private rawUserLetzteSucheInserate = toSignal(
    this.userLetzteSucheInseratSignal,
    {
      initialValue: this.userLetzteSucheInserateInitialValue,
    }
  );

  private userLetzteSucheInserate = computed(() =>
    signal(this.rawUserLetzteSucheInserate())
  );

  userLetzteSucheInserateForDisplay = computed(() =>
    this.userLetzteSucheInserate()()
  );

  addToLetzteSucheInserate(inseratfilter: Inseratfilter) {
    if (
      inseratfilter === undefined ||
      Object.values(inseratfilter).every(
        (val) => val === '' || val === null || val === undefined
      )
    ) {
      return;
    }
    const alleFilter = this.userLetzteSucheInserate()();
    alleFilter.push(inseratfilter);
    if (alleFilter.length > 5) {
      alleFilter.shift();
    }
    this.userLetzteSucheInserate().set(alleFilter);
  }

  pageSizeEmpfangeneNachrichten = signal(0);
  pageSizeGesendeteNachrichten = signal(0);

  currentPageEmpfangeneNachrichten = signal(1);
  currentPageGesendeteNachrichten = signal(1);

  empfangeneNachrichtenPaginatorAndFilter$ = combineLatest([
    toObservable(this.isUserLoggedIn),
    toObservable(this.pageSizeEmpfangeneNachrichten),
    toObservable(this.currentPageEmpfangeneNachrichten),
  ]).pipe(
    switchMap(([isLoggedIn, pageSize, currentPage]) => {
      if (isLoggedIn) {
        let params = new HttpParams()
          .set(
            'paginatorDto',
            JSON.stringify({
              pageSize: pageSize,
              currentPage: currentPage,
            })
          )
          .set('status', 'empfangene');
        return this.http.get<{
          nachrichten: Message[];
          numberOfNachrichten: number;
        }>(BACKEND_URL_BENUTZER + '/getMessagesByStatusForPaginator', {
          params,
        });
      } else {
        return of(this.userEmpfangeneNachtrichtenInitialValue);
      }
    })
  );

  private rawEmpfangeneNachrichten = toSignal(
    this.empfangeneNachrichtenPaginatorAndFilter$,
    {
      initialValue: this.userEmpfangeneNachtrichtenInitialValue,
    }
  );

  private empfangeneNachrichten = computed(() =>
    signal(this.rawEmpfangeneNachrichten())
  );

  empfangeneNachrichtenForDisplay = computed(() =>
    this.empfangeneNachrichten()()
  );

  gesendeteNachrichtenPaginatorAndFilter$ = combineLatest([
    toObservable(this.isUserLoggedIn),
    toObservable(this.pageSizeGesendeteNachrichten),
    toObservable(this.currentPageGesendeteNachrichten),
  ]).pipe(
    switchMap(([isLoggedIn, pageSize, currentPage]) => {
      if (isLoggedIn) {
        let params = new HttpParams()
          .set(
            'paginatorDto',
            JSON.stringify({
              pageSize: pageSize,
              currentPage: currentPage, // oder currentPage, je nachdem was benötigt wird
            })
          )
          .set('status', 'gesendete');
        return this.http.get<{
          nachrichten: Message[];
          numberOfNachrichten: number;
        }>(BACKEND_URL_BENUTZER + '/getMessagesByStatusForPaginator', {
          params,
        });
      } else {
        return of(this.userGesendeteNachtrichtenInitialValue);
      }
    })
  );

  // gesendeteNachrichtenPaginatorAndFilter$ = toObservable(
  //   this.isUserLoggedIn
  // ).pipe(
  //   switchMap((isLoggedIn) => {
  //     if (isLoggedIn) {
  //       let params = new HttpParams()
  //       .set(
  //         'paginatorDto',
  //         JSON.stringify({
  //           pageSize: this.pageSizeGesendeteNachrichten(),
  //           currentPage: this.currentPageGesendeteNachrichten(),
  //         })
  //       )
  //       .set('status', 'gesendete');
  //       return this.http.get<{
  //         nachrichten: Message[];
  //         numberOfNachrichten: number;
  //       }>(BACKEND_URL_BENUTZER + '/getMessagesByStatusForPaginator', { params });
  //     } else {
  //       return of(this.userGesendeteNachtrichtenInitialValue);
  //     }
  //   })
  // );

  private rawGesendeteNachrichten = toSignal(
    this.gesendeteNachrichtenPaginatorAndFilter$,
    {
      initialValue: this.userGesendeteNachtrichtenInitialValue,
    }
  );

  private gesendeteNachrichten = computed(() =>
    signal(this.rawGesendeteNachrichten())
  );

  gesendeteNachrichtenForDisplay = computed(() =>
    this.gesendeteNachrichten()()
  );

  addToGesendeteNachrichten(message: Message) {
    this.gesendeteNachrichten().update((messages) => {
      return {
        nachrichten: [...messages.nachrichten, message],
        numberOfNachrichten: messages.numberOfNachrichten + 1,
      };
    });
  }
}
