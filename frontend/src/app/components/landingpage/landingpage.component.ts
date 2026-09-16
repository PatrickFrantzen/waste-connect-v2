import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LandingpageStartComponent } from './landingpage-start/landingpage-start.component';
import { LandingpageInserateComponent } from './landingpage-inserate/landingpage-inserate.component';
import { LandingpageFindenComponent } from './landingpage-finden/landingpage-finden.component';
import { NgClass } from '@angular/common';
import { LandingpageEntsorgerComponent } from './landingpage-entsorger/landingpage-entsorger.component';
import { LandingpageEntsorgerFindenComponent } from './landingpage-entsorger-finden/landingpage-entsorger-finden.component';
import { ShowLandingPageSignalService } from 'src/app/signals/showOnLandingPage-signals.service';
import { AuthService } from '../auth/services/auth.service';

@Component({
    selector: 'app-landingpage',
    templateUrl: './landingpage.component.html',
    styleUrls: ['./landingpage.component.scss'],
    imports: [
        NgClass,
        LandingpageFindenComponent,
        LandingpageEntsorgerFindenComponent,
        LandingpageInserateComponent,
        LandingpageStartComponent,
        LandingpageEntsorgerComponent,
    ]
})
export class LandingpageComponent implements OnInit {


  constructor(
    private route: Router,
    private showLandingPageService: ShowLandingPageSignalService,
    private authService: AuthService
  ) {}

  showSignal = this.showLandingPageService.showLandingPage;

  ngOnInit(): void {
    this.authService.checkIfFirstLogin();
  }

  navigateToAnbieten() {
    this.route.navigate(['anbieten']);
  }
}
