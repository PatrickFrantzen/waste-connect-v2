import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { Benutzer } from "./user.schema";
import { Firmendaten } from "src/models/benutzer/firmendaten.model";
import { IsArray, IsBoolean, IsDate, IsObject } from "class-validator";
import { Personendaten } from "src/models/entsorger/personendaten.model";
import { EntsorgerFilepath } from "src/models/entsorger/entsorgerFilepath.model";
import { EntsorgerBeschreibung } from "src/models/entsorger/entsorgerBeschreibung.model";
import { AvvEntry, AvvEntrySchema } from "./avvEntries.schema";

export type EntsorgerDocument = HydratedDocument<EntsorgerNEST>;

@Schema()
export class EntsorgerNEST {
  @Prop({ type: Types.ObjectId, ref: "Benutzer" })
  userid: Types.ObjectId;

  _id: Types.ObjectId;

  @Prop({ type: Firmendaten, default: {} })
  @IsObject()
  firmendaten: Firmendaten;

  @Prop({ type: Personendaten, default: {} })
  @IsObject()
  entsorgerdaten: Personendaten;

  @Prop({ type: EntsorgerFilepath, default: {} })
  @IsObject()
  entsorgerFilepath: EntsorgerFilepath;

  @Prop({ type: EntsorgerBeschreibung, default: {} })
  @IsObject()
  entsorgerBeschreibung: EntsorgerBeschreibung;

  // @Prop({ type: Map, of: AvvEntrySchema, default: {} })
  // avv: { [key: string]: AvvEntry }[];
  @Prop({ type: [mongoose.Schema.Types.Mixed] })
  avv: Array<{ [key: string]: { handeln: boolean, makeln: boolean, sammeln: boolean, befoerdern: boolean, beseitigen: boolean, lagern: boolean, behandeln: boolean, verwerten: boolean } }>;

  @Prop()
  @IsArray()
  avvZusammenfassung: string[];

  @Prop({ default: Date.now() })
  @IsDate()
  createdAt: Date;

  @Prop()
  @IsBoolean()
  isActivated: boolean;

  @Prop()
  @IsBoolean()
  private: boolean;
}

export const EntsorgerSchema = SchemaFactory.createForClass(EntsorgerNEST);
