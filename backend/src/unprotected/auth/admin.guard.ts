import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Benutzer } from "src/schemas/user.schema";

/**
 * Zentrale Prüfung der Admin-Autorisierung (siehe ADR-0001).
 *
 * Setzt voraus, dass die Authentifizierung bereits gelaufen ist und den
 * Benutzer an den Request gehängt hat. Deshalb immer zusammen mit dem
 * Auth-Guard verwenden und *nach* diesem angeben:
 *
 *   @UseGuards(AuthGuard(), AdminGuard)
 *
 * Auf Controllern, die den Auth-Guard bereits auf Klassenebene setzen,
 * genügt `@UseGuards(AdminGuard)` an der Route.
 */
@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const user: Benutzer | undefined = context
      .switchToHttp()
      .getRequest().user;

    if (!user?.isAdmin) {
      throw new ForbiddenException(
        "Diese Funktion steht nicht zur Verfügung."
      );
    }

    return true;
  }
}
