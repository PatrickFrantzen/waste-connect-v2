import { Component, NgZone, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/dialogs/message-dialog/message-dialog.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss'],
    imports: [RouterOutlet]
})
export class AccountComponent{
  zone = inject(NgZone)
  dialog = inject(MatDialog)
  authService = inject(AuthService)


  onLogout(){
    this.authService.logout();
    this.zone.run(() => this.dialog.open(MessageDialogComponent, {
      width: '400px',
      height: '200px',
      hasBackdrop: true,
      data: {
           message: 'Sie haben sich erfolgreich ausgeloggt.' }
   }));
   }
}
