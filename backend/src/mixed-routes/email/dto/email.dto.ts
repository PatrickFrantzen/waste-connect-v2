import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";

/** Anfrage eines nicht eingeloggten Absenders. */
export class EmailDto {
  @IsEmail({}, { message: "Bitte gib eine gültige E-Mail-Adresse an." })
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(40)
  telefonnummer?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  betreff: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  nachricht: string;

  /** ID des Inserats bzw. Entsorgers, um den es geht. */
  @IsString()
  @IsNotEmpty()
  ID: string;
}

/** Anfrage eines eingeloggten Absenders; Absenderdaten kommen aus dem Token. */
export class UserEmailDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  betreff: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(5000)
  nachricht: string;

  @IsString()
  @IsNotEmpty()
  ID: string;
}
