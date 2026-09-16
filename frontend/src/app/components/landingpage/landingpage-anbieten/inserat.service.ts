import { Injectable, inject } from '@angular/core';
import {  InseratNEST } from '../../angebot/angebot.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import { AccountSignalsService } from 'src/app/signals/account-signals.service';
const BACKEND_URL_INSERATE = environment.nestUrl + '/inserat';
const BACKEND_URL_UPLOAD = environment.nestUrl + '/upload';
const BACKEND_URL_ANGEBOTE = environment.nestUrl + '/angebote';
@Injectable({
  providedIn: 'root',
})
export class InseratService {
  http = inject(HttpClient)
  accountSignal = inject(AccountSignalsService);



  saveInserat(
    createInseratDto: InseratNEST
  ): Observable<{ message: string; id: string }> {
    console.log(createInseratDto);
    return this.http.post<{ message: string; id: string }>(
      BACKEND_URL_INSERATE,
      createInseratDto
    );
  }

  updateInserat(
    createInseratDto: InseratNEST,
    id: string
  ): Observable<{ message: string; id: string }> {
    return this.http.patch<{ message: string; id: string }>(
      BACKEND_URL_INSERATE + '/' + id,
      createInseratDto
    );
  }

  deleteInserat(id: string): void {
    this.http
      .delete<{ message: string; inserate: InseratNEST[] }>(
        BACKEND_URL_INSERATE + '/' + id
      )
      .subscribe((data) => {
        this.accountSignal.updateInserate(data.inserate);
      });
  }

  uploadBild(bildarray: File[], id: string): Observable<{ message: string }> {
    const createUploadDto = new FormData();
    bildarray.forEach((bild) => {
      createUploadDto.append('bild', bild, `${bild.name}`);
    });
    createUploadDto.append('documentID', id);
    return this.http.post<{ message: string }>(
      BACKEND_URL_UPLOAD + `/bild/`,
      createUploadDto
    );
  }

  uploadAnalyse(
    analysearray: File[],
    id: string
  ): Observable<{ message: string }> {
    const createUploadDto = new FormData();
    analysearray.forEach((analyse) => {
      createUploadDto.append('analyse', analyse, `${analyse.name}`);
    });
    createUploadDto.append('documentID', id);
    return this.http.post<{ message: string }>(
      BACKEND_URL_UPLOAD + `/analyse/`,
      createUploadDto
    );
  }

  getAnalysePDF(id: string, analyse: string): Observable<Blob> {
    console.log('getAnalysePDF', id, analyse);
    return this.http.get<Blob>(
      `${BACKEND_URL_ANGEBOTE}/getAnalyse/${id}?analyse=${analyse}`,
      { responseType: 'blob' as 'json' }
    );
  }

  getInserat(id: string): Observable<InseratNEST> {
    return this.http.get<InseratNEST>(BACKEND_URL_INSERATE + '/' + id);
  }

  
}
