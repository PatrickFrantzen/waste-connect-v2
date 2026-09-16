import { Component, Input, NgZone, inject } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { NgClass } from '@angular/common';
import { ShowData } from '../landingpage/landingpage-container/landingpage-container.component';
import { ShowLandingPageSignalService } from 'src/app/signals/showOnLandingPage-signals.service';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [RouterLink, RouterLinkActive, NgClass]
})
export class NavbarComponent {
  zone = inject(NgZone);
  dialog = inject(MatDialog);
  showLandingPageSignalService = inject(ShowLandingPageSignalService);
  authSignalService = inject(AuthSignalsService);
  authService = inject(AuthService);


  showSignal = this.showLandingPageSignalService.showLandingPage;
  tokenSignal = this.authSignalService.tokenSignal;
  adminSignal = this.authSignalService.adminSignal;

  onLogout() {
    this.authService.logout();
    this.zone.run(() =>
      this.dialog.open(MessageDialogComponent, {
        width: '400px',
        height: '200px',
        hasBackdrop: true,
        data: {
          message: 'Sie haben sich erfolgreich ausgeloggt.',
        },
      })
    );
  }

  resetToggledShowInserateAndEntsorgerOnLandingPage(showArea: string) {
    this.showLandingPageSignalService.showLandingPage.set({
      show: showArea as 'inserate' | 'entsorger' | 'logistik' | 'startseite',
    });
  }
}
