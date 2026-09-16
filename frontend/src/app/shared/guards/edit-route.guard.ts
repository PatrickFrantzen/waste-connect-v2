import { inject } from "@angular/core";
import { CanActivateFn, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { InseratSignalsService } from "src/app/signals/inserat-signals.service";

export const editRouteGuard: CanActivateFn = (
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
    const inseratSignalService = inject(InseratSignalsService);
    const router = inject(Router)
    const editInserat = inseratSignalService.inseratBearbeiten();
    if (editInserat === null) {
      router.navigate(["/"])
    }

  return true;
};