---
status: accepted
---

# Backend nur auf die waste-connect-Domäne begrenzen, Autorisierung zentralisieren

`AppModule` bindet aktuell zwei fachfremde Alt-Projekte live ein: das NestJS-Tutorial-Modul `src/tasks` und eine eigenständige Einkaufslisten-App `src/gruppenliste` mit eigenem, zweitem JWT-Auth-Stack. Beide werden entfernt (nicht deaktiviert): dieses Repo ist ausschließlich der waste-connect-Marktplatz-Backend, kein Sammelbecken für Nebenprojekte. Zusätzlich wird Autorisierung (aktuell verstreute `if (!user.isAdmin)`-Checks in einzelnen Service-Methoden) durch einen zentralen `AdminGuard`/`RolesGuard` ersetzt, bevor weitere Endpunkte admin-geschützt werden.

## Considered Options

- **Gruppenliste als Feature-Flag/env-gated behalten**: verworfen. Sie hat keinen fachlichen Bezug zur Domäne, verdoppelt den Auth-Stack und würde nur weiter mitgeschleppt.
- **Autorisierung weiter pro Methode prüfen**: verworfen. Bereits jetzt an mehreren Stellen dupliziert; jeder neue admin-geschützte Endpunkt müsste den Check erneut manuell hinzufügen, ohne dass der Compiler oder ein Reviewer das erzwingen könnte.

## Consequences

- Falls die Gruppenliste/Einkaufsliste-App weiterhin gebraucht wird, muss sie vor dem Entfernen in ein eigenes Repo ausgelagert werden (außerhalb dieses Vorhabens).
- Jeder zukünftige admin-geschützte Endpunkt nutzt den neuen Guard statt eines Inline-Checks; bestehende Inline-Checks werden im selben Zug ersetzt (siehe Tickets).
- Historische Secrets aus den gelöschten `.env.stage.*`-Dateien bleiben in der Git-Historie und sollten separat rotiert werden (nicht Teil dieses Vorhabens, aber als bekanntes Risiko dokumentiert).
