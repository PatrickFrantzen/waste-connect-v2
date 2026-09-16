import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsArray, IsBoolean, IsDate, IsObject } from "class-validator";
import { HydratedDocument, Types } from "mongoose";
import { Firmendaten } from "src/models/benutzer/firmendaten.model";
import { Personendaten } from "src/models/entsorger/personendaten.model";
import { LogistikerBeschreibung } from "src/models/logistiker/logistikerBeschreibung.model";
import { LogistikerFilepath } from "src/models/logistiker/logistikerFilepath.model";
import { AvvEntry, AvvEntrySchema } from "./avvEntries.schema";

export type LogistikerDocument = HydratedDocument<LogistikerNEST>

@Schema()
export class LogistikerNEST {
    @Prop({type: Types.ObjectId, ref: "Benutzer"})
        userid: Types.ObjectId

    _id: Types.ObjectId;

    
    @Prop({type: Firmendaten, default: {}})
    @IsObject()
    firmendaten: Firmendaten;

    @Prop({type: Personendaten, default: {}})
    @IsObject()
    logistikerdaten: Personendaten
    
    @Prop({type: LogistikerFilepath, default: {}})
    @IsObject()
    logistikerFilepath: LogistikerFilepath

    @Prop({type: LogistikerBeschreibung, default: {}})
    @IsObject()
    logistikerBeschreibung: LogistikerBeschreibung;

    @Prop({ type: Map, of: AvvEntrySchema, default: {} })
    avv: Map<string, AvvEntry>;

    @Prop()
    @IsArray()
    avvZusammenfassung: string[]

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

export const LogistikerSchema = SchemaFactory.createForClass(LogistikerNEST)
