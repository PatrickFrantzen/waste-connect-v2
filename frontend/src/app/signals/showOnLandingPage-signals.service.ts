import { Injectable, signal } from '@angular/core';

interface LandingPageOption {
  show: 'inserate' | 'entsorger' | 'logistik' | 'startseite';
}

@Injectable({
  providedIn: 'root',
})
export class ShowLandingPageSignalService {
  showLandingPage = signal<LandingPageOption>({ show: 'inserate' });
}
