import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/components/auth/services/auth.service';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private authSignalService: AuthSignalsService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authSignalService.tokenSignal()
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request).pipe(
            catchError(error => {
                if (error.status === 401) {
                    // Token expired or invalid, log out user
                    this.authService.logout();
                }
                return throwError(error);
            })
        );
    }
}
