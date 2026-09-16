import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Message, MessageObject } from "src/models/benutzer/message.model";
import { Firmendaten } from "src/models/benutzer/firmendaten.model";
import { Benutzerdaten } from "src/models/benutzer/benutzderdaten.model";
import { ProfilBools } from "src/models/benutzer/profilBools.model";
import { Benutzerinteraktionen } from "src/models/benutzer/benutzerinteraktionen.model";

export type BenutzerDocument = HydratedDocument<Benutzer>;

/**
 * Persistenz-Schema. Absichtlich ohne class-validator-Decorators: geprüft
 * wird die Anfrage, nicht das gespeicherte Dokument (siehe Ticket #7). Die
 * Validierung eingehender Daten steht in den Request-DTOs, z. B.
 * `AuthCredentialsDTO` und `UpdateBenutzerDto`.
 */
@Schema()
export class Benutzer {
  //Registrierung
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  privateModus: boolean;

  //Admin-Eigenschaft
  @Prop()
  isAdmin: boolean;

  //Firmendaten
  @Prop({
    type: Firmendaten,
    default: {},
  })
  firmendaten: Firmendaten;

  //Benutzerdaten
  @Prop()
  benutzerdaten: Benutzerdaten;

  _id: Types.ObjectId;

  //Interaktionen
  @Prop({ type: Benutzerinteraktionen, default: {} })
  benutzerinteraktionen: Benutzerinteraktionen;

  //Nachrichten an den User
  @Prop({ type: MessageObject , default: {
    empfangeneNachrichten: [],
    numberOfEmpfangeneNachrichten: 0,
    gesendeteNachrichten: [],
    numberOfGesendeteNachrichten: 0,
  } })
  messages: MessageObject;

  //Parameter für die Profile
  @Prop({ type: ProfilBools, default: {} })
  profile: ProfilBools;
}

export const BenutzerSchema = SchemaFactory.createForClass(Benutzer);
