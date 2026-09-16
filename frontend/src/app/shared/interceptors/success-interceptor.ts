import { Injectable, NgZone } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../dialogs/message-dialog/message-dialog.component';

@Injectable()
export class SuccessInterceptor implements HttpInterceptor {
    constructor(private dialog: MatDialog, private zone: NgZone) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse && event.status >= 200 && event.status < 300 && event.body?.message) {
                    
                    this.zone.run(() => this.dialog.open(MessageDialogComponent, {
                        width: '400px',
                        height: '200px',
                        hasBackdrop: true,
                        data: {
                          message: event.body.message || 'Erfolgreich gespeichert!',
                        },
                    }));
                }
            })
        );
    }
}
