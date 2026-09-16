import { HttpClient } from '@angular/common/http';
import { Component, inject, input } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { catchError, filter, switchMap, tap } from 'rxjs';
import { Inserat, InseratNEST } from '../angebot/angebot.model';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';

// const BACKEND_URL = environment.apiUrl + '/inserate';
const BACKEND_URL_INSERATE = environment.nestUrl + '/angebote';

@Component({
    selector: 'app-inserat-summary',
    templateUrl: './inserat-summary.component.html',
    styleUrl: './inserat-summary.component.scss',
    imports: [MatTooltip, DatePipe]
})

export class InseratSummaryComponent {
  private readonly http = inject(HttpClient);
  showEmailForm = false;
  currentImageIndex = 0;
  inseratID = input.required<string>();
  inserat = toSignal(
    toObservable(this.inseratID).pipe(
      filter((id) => !!id),
      switchMap((id) => this.http.get<InseratNEST>(BACKEND_URL_INSERATE + `/inserat/${id}`)),
      catchError((error) => {
        return [];
      }
      )
    ), { initialValue: null}
  )
  images!: string[];


  constructor() {
  }

  previousImage(bildPath: string[]) {
    this.images = bildPath;
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images!.length - 1;
    }
  }

  nextImage(bildPath: string[]) {
    this.images = bildPath;
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images!.length) {
      this.currentImageIndex = 0;
    }
  }
}
