import { Component, inject } from '@angular/core';
import { Inseratfilter } from 'src/app/components/landingpage/landingpage-finden/inseratfilter.model';
import { UserInteraktionService } from 'src/app/shared/services/user-interaktion.service';

import { AccountSignalsService } from 'src/app/signals/account-signals.service';
import { ShowLandingPageSignalService } from 'src/app/signals/showOnLandingPage-signals.service';
import { InseratSignalsService } from 'src/app/signals/inserat-signals.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-letzte-suche',
    templateUrl: './letzte-suche.component.html',
    styleUrls: ['./letzte-suche.component.scss'],
    imports: []
})
export class LetzteSucheComponent{
  userInteraktionService = inject(UserInteraktionService);
  accountSignalService = inject(AccountSignalsService);
  showLandingPage = inject(ShowLandingPageSignalService);
  inseratSignal = inject(InseratSignalsService);
  router = inject(Router);

  
  inseratFilterSuchen(suchfilter: Inseratfilter) {
    this.router.navigate(['/'])
    this.showLandingPage.showLandingPage.set({show: 'inserate'})
    this.inseratSignal.lastSearchFilter.set(suchfilter)
    this.inseratSignal.filterSignal.set(suchfilter)
  }
}
