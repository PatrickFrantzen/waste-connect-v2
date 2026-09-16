import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EntsorgerProfil, LogistikProfil } from 'src/app/components/auth/user.model';
import { Entsorgerfilter } from 'src/app/components/landingpage/landingpage-entsorger-finden/entsorgerfilter.model';
import { mimeType } from 'src/app/shared/validators/mime-type-image.validators';
import { mimeTypePDForImage } from 'src/app/shared/validators/mime-type-pdf.validators';
import { environment } from 'src/environments/environment';

// const BACKEND_URL_LOGISTIKPROFIL = environment.apiUrl + '/logistik';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) { }



  // getAllLogistikProfile(logistikPerPage: number, currentPage: number): Observable<{logistik: LogistikProfil[], numberOfLogistik: number}>{
  //   const queryParams = `?pageSize=${logistikPerPage}&currentPage=${currentPage}`;
  //   return this.http.get<{logistik: LogistikProfil[], numberOfLogistik: number}>(BACKEND_URL_LOGISTIKPROFIL + queryParams);
  // }

  //FilterType: LogistikFilter erstellen
  filterLogistikProfile(filter: any) {
  }

  entsorger = {
    _id: '',
    firmenname: '',
    ansprechpartner: '',
    email: '',
    webseite: '',
    telefonnummer: '',
    logo: [],
    taetigkeitsbereich: [],
    dienstleistungen: [],
    besonderheiten: '',
    logistik: [],
    avv: [],
    avvZusammenfassung: [],
    zertifikate: [],
    genehmigungen: [],
    zertifikatsbestaetigungen: [],
    private: false,
    standort: '',
    bundesland: '',
    postleitzahl: ''
  };

  logistik = {
    _id: '',
    firmenname: '',
    ansprechpartner: '',
    email: '',
    webseite: '',
    telefonnummer: '',
    logo: [],
    logoPath: [],
    befoerderernummer: '',
    fuhrpark: [],
    dienstleistungen: [],
    besonderheiten: '',
    logistik: [],
    logistikdienstleistungen: [],
    avv: [],
    avvZusammenfassung: [],
    zertifikate: [],
    zertifikatePath: [],
    genehmigungen: [],
    genehmigungenPath: [],
    zertifikatsbestaetigungen: [],
    private: false,
    standort: '',
    postleitzahl: '',
    bundesland: ''
  };
 
  formFieldsInputEntsorger = [
    {
      id: 'dienstleistungen',
      placeholder: 'Dienstleistungen, die du anbietest',
      formControlName: 'dienstleistungen',
      tooltip: 'Beschreibung deiner Dienstleistungen: Abriss und Entsorgungen',
    },
    {
      id: 'zertifikatsbestaetigungen',
      placeholder: 'Zertifikatsbestätigungen, die du besitzt, aber nicht hochladen möchtest',
      formControlName: 'zertifikatsbestaetigungen',
      tooltip: 'Gebe alle Zertifikate und Genehmigunen an, die du besitzt, aber nicht hochladen möchtest',
    }
  ];

  formFieldsSelectEntsorger = [
    {
      id: 'taetigkeitsbereich',
      placeholder: 'Tätigkeitsbereich in denen du tätig bist',
      formControlName: 'taetigkeitsbereich',
      tooltip:
        'Beschreibung deiner Tätigkeitesbereiche. Z.B. Abfallentsorgung, Recycling, Sammeln, Befördern, Behandeln, Verwerten, Erstbehandlungsanalge, Vorbehandlungsanlage etc.',
      auswahlfelder: [
        'Sammeln',
        'Befördern',
        'Lagern',
        'Behandeln',
        'Verwerten',
        'Beseitigen',
        'Handeln',
        'Makeln',
        'Erstbehandlungsanlage',
        'Vorbehandlungsanlage',
      ],
    },
    {
      id: 'logistik',
      placeholder: 'Logistikbereiche in denen du tätig bist',
      formControlName: 'logistik',
      tooltip:
        'Beschreibung deiner Logistikbereiche: nur Anlieferung möglich, nur Abholung möglich, Anlieferung und Abholung möglich, wir stellen Container, nur im Bundesland tätig, bundesweit tätig, international tätig',
      auswahlfelder: ['Abfälle werden vom Abfallerzeuger angeliefert', 'Abfälle sollen beim Abfallerzeuger abgeholt werden'],
    },
  ];

  formFieldsInputLogistik = [
    {
      id: 'dienstleistungen',
      placeholder: 'Dienstleistungen, die du anbietest',
      formControlName: 'dienstleistungen',
      tooltip: 'Beschreibung deiner Dienstleistungen: Abriss und Entsorgungen',
    },
    {
      id: 'fuhrpark',
      placeholder: 'Fuhrpark',
      formControlName: 'fuhrpark',
      tooltip: 'Beschreibung deines Fuhrparks: LKW, Transporter, etc.',
    },
    {
      id: 'logistikdienstleistungen',
      placeholder: 'Logistikdienstleistungen',
      formControlName: 'logistikdienstleistungen',
      tooltip: 'Beschreibung deiner Logistikdienstleistungen: Containerdienst, etc.',
    },
    {
      id: 'zertifikatsbestaetigungen',
      placeholder: 'Zertifikatsbestätigungen, die du besitzt, aber nicht hochladen möchtest',
      formControlName: 'zertifikatsbestaetigungen',
      tooltip: 'Gebe alle Zertifikate und Genehmigunen an, die du besitzt, aber nicht hochladen möchtest',
    }
  ];
  
  formFieldsSelectLogistik = [
    {
      id: 'logistik',
      placeholder: 'Logistikbereiche in denen du tätig bist',
      formControlName: 'logistik',
      tooltip:
        'Beschreibung deiner Logistikbereiche: nur Anlieferung möglich, nur Abholung möglich, Anlieferung und Abholung möglich, wir stellen Container, nur im Bundesland tätig, bundesweit tätig, international tätig',
      auswahlfelder: ['kann angeliefert werden', 'kann abgeholt werden'],
    },
  ];

  // Teilt ein Objekt in zwei Teile an der angegebenen Indexposition
  splitObject(obj: any, chunkSize: number) {
    const keys = Object.keys(obj);
    const result = [];
    for (let i = 0; i < keys.length; i += chunkSize) {
      const chunkKeys = keys.slice(i, i + chunkSize);
      const chunk = chunkKeys.reduce((result: any, key: any) => {
        result[key] = obj[key];
        return result;
      }, {});
      result.push(chunk);
    }
    return result;
  }

mergeObjects(objects: any[]) {
  return objects.reduce((result, obj) => {
    return { ...result, ...obj };
  }, {});
}
}
