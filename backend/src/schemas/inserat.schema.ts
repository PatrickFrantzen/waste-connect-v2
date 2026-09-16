import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Benutzer } from "./user.schema";
import { IsDate, IsObject, IsString } from "class-validator";
import { InseratErsteller } from "src/models/inserat/inseratErsteller.model";
import { Intervall } from "src/models/inserat/inseratintervall.model";
import { InseratBeschreibung } from "src/models/inserat/inseratBeschreibung.model";
import { InseratStandort } from "src/models/inserat/inseratStandort.model";
import { InseratLogistik } from "src/models/inserat/inseratLogistik.model";
import { InseratFilepath } from "src/models/inserat/inseratFilepath.model";

export type InseratDokument = HydratedDocument<InseratNEST>;

@Schema()
export class InseratNEST {
  @Prop({ type: Types.ObjectId, ref: "Benutzer" })
  user: Benutzer;

  _id: Types.ObjectId;

  @Prop({ type: InseratBeschreibung, default: {} })
  @IsObject()
  inseratBeschreibung: InseratBeschreibung;

  @Prop({ type: InseratStandort, default: {} })
  @IsObject()
  inseratStandort: InseratStandort;

  @Prop({ type: InseratLogistik, default: {} })
  @IsObject()
  inseratLogistik: InseratLogistik;

  @Prop({ type: InseratFilepath, default: {} })
  @IsObject()
  inseratFilepath: InseratFilepath;

  @Prop()
  @IsDate()
  createdAt: Date;

  @Prop({ type: InseratErsteller, default: {} })
  @IsObject()
  inseratErsteller: InseratErsteller;
}

export const InseratSchema = SchemaFactory.createForClass(InseratNEST);
