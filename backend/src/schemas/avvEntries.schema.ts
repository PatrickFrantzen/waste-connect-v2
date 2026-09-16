import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class AvvEntryDetails {
  @Prop({ default: false })
  handeln: boolean;

  @Prop({ default: false })
  makeln: boolean;

  @Prop({ default: false })
  sammeln: boolean;

  @Prop({ default: false })
  befoerdern: boolean;

  @Prop({ default: false })
  beseitigen: boolean;

  @Prop({ default: false })
  lagern: boolean;

  @Prop({ default: false })
  behandeln: boolean;

  @Prop({ default: false })
  verwerten: boolean;
}

@Schema()
export class AvvEntry {
  @Prop()
  key: string;

  @Prop(AvvEntryDetails)
  value: AvvEntryDetails;
}

export const AvvEntrySchema = SchemaFactory.createForClass(AvvEntry);