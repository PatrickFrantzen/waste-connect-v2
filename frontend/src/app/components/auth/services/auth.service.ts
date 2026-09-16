import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { MatDialog } from '@angular/material/dialog';
import { ProfilDialogComponent } from 'src/app/shared/dialogs/profil-dialog/profil-dialog.component';
import { BundeslaenderSignalsService } from 'src/app/signals/bundeslaender-signals.service';
import { Observable } from 'rxjs';

const BACKEND_URL_AUTH = environment.nestUrl + '/auth/';

interface AppJwtPayload extends JwtPayload {
  isAdmin?: boolean;
  firstLogin?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)
  router = inject(Router)
  authSignalService = inject(AuthSignalsService)
  dialog = inject(MatDialog)
  bundeslaenderSignalService = inject(BundeslaenderSignalsService)


  private tokenExpirationTimer: any;

  //NEU
  createUser(email: string, password: string) {
    this.http
      .post<string>(BACKEND_URL_AUTH + 'signup', {
        email: email,
        password: password,
      })
      .subscribe({
        next: (response) => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  confirmEmail(token: string) {
    this.http
      .post(BACKEND_URL_AUTH + 'confirmEmail', { token: token })
      .subscribe({
        next: (response) => {
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  login(email: string, password: string) {
    this.http
      .post<{ accessToken: string }>(BACKEND_URL_AUTH + 'signin', {
        email: email,
        password: password,
      })
      .subscribe({
        next: (response) => {
          localStorage.setItem('token', response.accessToken);
          const decodedToken = jwtDecode<AppJwtPayload>(response.accessToken);
          this.authSignalService.tokenSignal.set(response.accessToken);
          this.setFirstLogin(decodedToken);
          this.setAdmin(decodedToken);
          this.checkExpirationDurationAndSetTimer(decodedToken);
          this.checkIfFirstLogin();
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }


  setFirstLogin(decodedToken: AppJwtPayload) {
    this.authSignalService.firstLoginSignal.set(decodedToken.firstLogin!);
  }

  setAdmin(decodedToken: AppJwtPayload) {
    this.authSignalService.adminSignal.set(decodedToken.isAdmin!);
  }

  logout() {
    localStorage.removeItem('token');
    this.authSignalService.tokenSignal.set('');
    this.authSignalService.adminSignal.set(undefined);
    this.router.navigate(['/login']);

    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }

  checkIfTokenIsValid(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const decodedToken = jwtDecode<AppJwtPayload>(token);
    const expirationDate = decodedToken.exp
      ? new Date(decodedToken.exp * 1000)
      : null;
    if (expirationDate && expirationDate <= new Date()) {
      this.logout();
      return false;
    }
    this.authSignalService.tokenSignal.set(token);
    this.setAdmin(decodedToken);
    this.setFirstLogin(decodedToken);
    this.checkExpirationDurationAndSetTimer(decodedToken);
    return true;
  }

  checkExpirationDurationAndSetTimer(decodedToken: AppJwtPayload) {
    const expirationDuration = decodedToken.exp
      ? decodedToken.exp * 1000 - Date.now()
      : null;
    if (expirationDuration) {
      const hours = Math.floor(expirationDuration / (1000 * 60 * 60));
      const minutes = Math.floor(
        (expirationDuration % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((expirationDuration % (1000 * 60)) / 1000);
      // console.log(
      //   'expirationDuration',
      //   hours,
      //   'hours',
      //   minutes,
      //   'minutes',
      //   seconds,
      //   'seconds'
      // );
      this.tokenExpirationTimer = setTimeout(() => {
        this.logout();
      }, expirationDuration);
    }
    if (expirationDuration) {
      this.tokenExpirationTimer = setTimeout(() => {
        this.logout();
      }, expirationDuration);
    }
  }

  checkIfFirstLogin() {
    if (this.authSignalService.firstLoginSignal()) {
      
      const bundeslaender =
        this.bundeslaenderSignalService.bundeslaenderSignal();

      const diaglogRef = this.dialog.open(ProfilDialogComponent, {
        data: { bundeslaender: bundeslaender },
        disableClose: true,
      });

      diaglogRef.afterClosed().subscribe(() => {
        this.authSignalService.firstLoginSignal.set(false);
      });
    }
  }

  changePasswordForUser(newPassword: string, originalPassword?: string) {
    const updatePasswordDTO = {
      newPassword: newPassword,
      oldPassword: originalPassword,
    };
    return this.http
      .post(BACKEND_URL_AUTH + 'changePasswordForUser', updatePasswordDTO)
      .subscribe();
  }

  changePassword(email: string, temporarypassword: string, newpassword: string) {
    const updatePasswordDTO = {
      email: email,
      tempPassword: temporarypassword,
      newPassword: newpassword,
    };
    
    return this.http.post(BACKEND_URL_AUTH + 'changePassword', updatePasswordDTO);
  }

  //Ohne angemeldet zu sein muss changePassword eingeführt werden

  resetPassword(email: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      BACKEND_URL_AUTH + 'resetPassword',
      { email: email }
    );
  }

}
