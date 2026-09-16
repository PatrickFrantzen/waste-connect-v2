import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Types } from "mongoose";
import { Benutzer } from "./user.schema";
import { Day } from "src/models/calendar/day.model";

export type ofTheDayCalendarDocument = HydratedDocument<ofTheDayCalendar>;

@Schema()
export class ofTheDayCalendar {
  @Prop({ required: true })
  type: string;

  @Prop({type: Day, default: {day: "", inseratID: "", freigegeben: false, bestellnummer: ""}})
  blockedDays: Day[];
  

  _id: Types.ObjectId;

}

export const ofTheDayCalendarSchema = SchemaFactory.createForClass(ofTheDayCalendar);