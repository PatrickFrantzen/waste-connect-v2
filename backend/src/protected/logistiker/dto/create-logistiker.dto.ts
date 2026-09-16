/**
 * `POST /logistiker` legt das Profil allein aus dem eingeloggten Benutzer an
 * und nimmt keinen Request-Body entgegen – deshalb gibt es hier bewusst
 * nichts zu validieren (siehe Ticket #7). Die eigentliche Profilpflege
 * läuft über `UpdateLogistikerDto`.
 */
export class CreateLogistikerDto {}
