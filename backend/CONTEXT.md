# waste-connect-backend

Backend des waste-connect-Marktplatzes: Nutzer (Entsorger/Logistiker) verwalten Inserate für Abfall-/Wertstoffmengen.

## Language

**Benutzer**:
Ein registrierter Nutzer-Account mit Auth-Session (JWT).
_Avoid_: User, Account (uneinheitlich im Code, `Benutzer` ist der bestehende Domain-Begriff)

**Inserat**:
Ein Angebot/Gesuch für Abfall-/Wertstoffmengen, das ein Benutzer erstellt.
_Avoid_: Angebot (kollidiert mit dem separaten, aktuell unfertigen `angebote`-Modul)

**Entsorger**:
Ein Nutzer-Profiltyp, der Abfälle/Wertstoffe abnimmt und entsorgt.

**Logistiker**:
Ein Nutzer-Profiltyp, der den Transport übernimmt. Laut `Offene Aufgaben.txt` bewusst zurückgestellt ("wird erst nach Release weiter gearbeitet").

**Admin-Autorisierung**:
Rechteprüfung für administrative Operationen (Inserat-Löschung, Kalender-Verwaltung). Wird zentral über einen Guard geprüft, nicht mehr inline in Services (siehe ADR-0001).
_Avoid_: isAdmin-Check (Implementierungsdetail, kein Domain-Begriff)

**Profilinitialisierer**:
Legt beim Anlegen eines Benutzers das leere Profil für einen Profiltyp (Entsorger, Logistiker) an. Trägt sich selbst an der BenutzerProfilRegistry ein, damit Auth die einzelnen Profiltypen nicht kennen muss (siehe ADR-0002).

## Ausdrücklich außerhalb der Domäne

**Gruppenliste/Einkaufsliste** (`src/gruppenliste/*`) und **Tasks-Tutorial** (`src/tasks/*`) gehören nicht zu diesem Backend (siehe ADR-0001) und werden entfernt.
