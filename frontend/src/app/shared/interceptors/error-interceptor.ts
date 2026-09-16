import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private dialog: MatDialog, private zone: NgZone) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('ErrorInterceptor', error.error);
        let errorMessage =
          'Ein unbekannter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
        if (error.error.message) {
          errorMessage = error.error.message;
        }
        this.zone.run(() =>
          this.dialog.open(ErrorDialogComponent, {
            width: '400px',
            height: '200px',
            hasBackdrop: true,
            data: {
              message: errorMessage,
            },
          })
        );
        return throwError(() => new Error(error.error.message));
      })
    );
  }
}
