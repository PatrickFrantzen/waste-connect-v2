import { inject } from '@angular/core';
import {
  CanActivateFn,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthSignalsService } from 'src/app/signals/auth-signals.service';


export const authGuard: CanActivateFn = (
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
    const authSignalService = inject(AuthSignalsService);
    const isAuthenticatedToken = authSignalService.tokenSignal();

    const router = inject(Router)
    if (isAuthenticatedToken === '') {
      router.navigate(["/"])
    }

  return true;
};

export const adminGuard: CanActivateFn = (): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authSignalService = inject(AuthSignalsService);
  const isAdmin = authSignalService.adminSignal();

  const router = inject(Router)
  if (isAdmin === false) {
    router.navigate(["/"])
  }

  return true;
}
