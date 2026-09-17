# Profilinitialisierer-Registry statt zirkulärer Modul-Abhängigkeit zwischen Auth und Profil-Domänen

`AuthService` musste beim Anlegen eines `Benutzer`s bisher `EntsorgerService` und
`LogistikerService` konkret kennen, um die leeren Profile anzulegen. Das
erzwang einen echten Modul-Zyklus (`AuthModule` <-> `EntsorgerModule`/
`LogistikerModule`), nur per `forwardRef()` beherrschbar, und machte
`AuthModule` von zwei fachfremden Domänen abhängig.

Entscheidung: `AuthService` kennt nur noch die schmale Schnittstelle
`ProfilInitialisierer` (`erstelleProfil(benutzerId)`) über eine
abhängigkeitsfreie `BenutzerProfilRegistry`. `EntsorgerModule` und
`LogistikerModule` tragen sich dort selbst ein — über einen Factory-Provider,
den nichts explizit injiziert; er läuft als Seiteneffekt der eager
Provider-Instanziierung, die Nest beim Modul-Bootstrap ohnehin durchführt.

Erwogen und verworfen: `@nestjs/event-emitter` für ein Domain-Event
(`benutzer.erstellt`). Wäre der im Nest-Ökosystem üblichere Weg, kostet aber
eine neue Abhängigkeit und macht Fehlerbehandlung/Reihenfolge unschärfer
(Events sind by design fire-and-forget). Gegen eine neue Abhängigkeit
entschieden, solange nur zwei Abnehmer existieren.

**Für zukünftige Leser:** Ein Provider wie `{ provide:
"ENTSORGER_PROFIL_REGISTRIERUNG", useFactory: ... }`, den nichts injiziert,
sieht wie toter Code aus. Ist er nicht — der Sinn ist der Seiteneffekt
(Selbstregistrierung), nicht der Rückgabewert. Siehe
`profil-initialisierer.module.spec.ts` für den Beweis, dass Nest das Muster
tatsächlich zuverlässig auflöst.
