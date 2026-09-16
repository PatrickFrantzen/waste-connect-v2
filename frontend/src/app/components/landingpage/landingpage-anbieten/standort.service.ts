import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bundesland } from './standort.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StandortService {

  constructor(private http: HttpClient) { }

//Kann weg

}
