import { IsIn, IsNotEmpty, IsString } from "class-validator";

/** Die erlaubten Dateipfade eines Dokuments. */
export const FILE_PATHS = [
  "bildpath",
  "analysepath",
  "logoPath",
  "zertifikatePath",
  "genehmigungenPath",
] as const;

export type FilePath = (typeof FILE_PATHS)[number];

export class DeleteUploadDto {
  /** Name der Datei */
  @IsString()
  @IsNotEmpty()
  filename: string;

  /** Inserat, Entsorger, Logistiker */
  @IsString()
  @IsNotEmpty()
  dokumentType: string;

  /** Die ID des Dokumentes (Inserat, Entsorger, Logistiker) */
  @IsString()
  @IsNotEmpty()
  dokumentID: string;

  @IsIn(FILE_PATHS as unknown as string[])
  filePath: FilePath;
}
