import { IsNotEmpty, IsString } from "class-validator";

export class CreateUploadDto {
  /** ID des Dokuments (Inserat), zu dem die Datei gehört. */
  @IsString()
  @IsNotEmpty()
  documentID: string;
}
