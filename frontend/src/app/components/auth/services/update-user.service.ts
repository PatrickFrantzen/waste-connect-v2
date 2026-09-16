import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import {
  EntsorgerNEST,
  UpdateBenutzerDto,
} from '../user.model';
import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs';
import { InseratfilterDto } from '../../landingpage/landingpage-finden/inseratfilter.model';
import { EntsorgerfilterDto } from '../../landingpage/landingpage-entsorger-finden/entsorgerfilter.model';

const BACKEND_URL_BENUTZER = environment.nestUrl + '/benutzer/';
const BACKEND_URL_ENTSORGER = environment.nestUrl + '/entsorger/';
const BACKEND_URL_UPLOAD = environment.nestUrl + '/upload/';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  http = inject(HttpClient)


  updateUser(updateBenutzerDto: UpdateBenutzerDto): Observable<{message: string}> {
   return this.http.patch<{message: string}>(BACKEND_URL_BENUTZER + 'updateUser', updateBenutzerDto);
  }

  updateEntsorger(updateEntsorgerDto: EntsorgerNEST): Observable<{message: string}> {
    console.log(updateEntsorgerDto)
    return this.http.patch<{message: string}>(BACKEND_URL_ENTSORGER, updateEntsorgerDto);
  }

  uploadEntsorgerLogo(logoArray: File[]): Observable<{message: string, paths?: string[]}> {
    const createUploadDto = new FormData();
    logoArray.forEach((logo) => {
      createUploadDto.append('logo', logo, `${logo.name}`);
    });
    return this.http.post<{message: string, paths?: string[]}>(BACKEND_URL_UPLOAD + 'entsorgerLogo', createUploadDto);
  }

  uploadEntsorgerZertifikat(zertifikatArray: File[]): Observable<{message: string, paths?: string[]}> {
    const createUploadDto = new FormData();
    zertifikatArray.forEach((zertifikat) => {
      createUploadDto.append('zertifikat', zertifikat, `${zertifikat.name}`);
    });
    return this.http.post<{message: string, paths?: string[]}>(BACKEND_URL_UPLOAD + 'entsorgerZertifikat', createUploadDto);
  }

  uploadEntsorgerGenehmigung(genehmigungArray: File[]): Observable<{message: string, paths?: string[]}> {
    const createUploadDto = new FormData();
    genehmigungArray.forEach((genehmigung) => {
      createUploadDto.append('genehmigung', genehmigung, `${genehmigung.name}`);
    });
    return this.http.post<{message: string, paths?: string[]}>(BACKEND_URL_UPLOAD + 'entsorgerGenehmigung', createUploadDto);
  }

  deleteFile(documentType: string, documentID: string, filePath: string, filename: string): Observable<{message: string}> {
    const id = documentID;
    let params = new HttpParams();
    params = params.set('dokumentType', documentType);
    params = params.set('dokumentID', documentID);
    params = params.set('filePath', filePath);
    params = params.set('filename', filename);
    return this.http.delete<{message: string}>(BACKEND_URL_UPLOAD + 'remove/', {params});
  }

  updateInseratfilter(inseratfilter: InseratfilterDto): Observable<{message: string}> {
    console.warn(inseratfilter);
    return this.http.patch<{message: string}>(BACKEND_URL_BENUTZER + 'updateInseratfilter', {inseratfilter: inseratfilter});
   }

  updateEntsorgerfilter(entsorgerfilter: EntsorgerfilterDto) {
    return this.http.patch<{message: string}>(BACKEND_URL_BENUTZER + 'updateEntsorgerfilter', {entsorgerfilter: entsorgerfilter});
  }

  updateMerkzettel(inseratId: string): Observable<{message: string}> {
    return this.http.patch<{message: string}>(BACKEND_URL_BENUTZER + 'updateMerkzettel', {inseratId: inseratId});
  }

  checkMerkzettel(inseratId: string): Observable<boolean> {
    return this.http.get<boolean>(BACKEND_URL_BENUTZER + 'checkMerkzettel', {params: {inseratId: inseratId}});
  }

}
