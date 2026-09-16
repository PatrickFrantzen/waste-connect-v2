import { Component, inject } from '@angular/core';

import { ShowLandingPageSignalService } from 'src/app/signals/showOnLandingPage-signals.service';
import { UserInteraktionService } from 'src/app/shared/services/user-interaktion.service';

@Component({
    selector: 'app-landingpage-start',
    imports: [],
    templateUrl: './landingpage-start.component.html',
    styleUrl: './landingpage-start.component.scss'
})
export class LandingpageStartComponent {
  userInteraktionService = inject(UserInteraktionService);
  showLandingPageSignalService = inject(ShowLandingPageSignalService);

  showSignal = this.showLandingPageSignalService.showLandingPage;

  loadInserateAndToggleShow() {
    this.showSignal.set({ show: 'inserate' });
    this.userInteraktionService.scrollToTop();
  }
}
