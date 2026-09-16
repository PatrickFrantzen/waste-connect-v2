import { IsEmail, IsOptional, IsString, Matches, Max, MaxLength, MinLength } from "class-validator";

export class AuthCredentialsDTO {
  @IsEmail()
  @MinLength(4)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Das Passwort ist zu schwach. Bitte mind. 1 Kleinbuchstaben, mind. 1 Großbuchstaben, mind. eine Zahl oder ein Sonderzeichen.' }) // Password must contain at least one uppercase letter, one lowercase letter, and one number or special character
  password: string;
}

export class UpdatePasswordDTO {
  @IsEmail()
  @MinLength(4)
  @IsOptional()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @IsOptional()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Das Passwort ist zu schwach. Bitte mind. 1 Kleinbuchstaben, mind. 1 Großbuchstaben, mind. eine Zahl oder ein Sonderzeichen.' }) // Password must contain at least one uppercase letter, one lowercase letter, and one number or special character
  oldPassword: string;
  
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'Das Passwort ist zu schwach. Bitte mind. 1 Kleinbuchstaben, mind. 1 Großbuchstaben, mind. eine Zahl oder ein Sonderzeichen.' }) // Password must contain at least one uppercase letter, one lowercase letter, and one number or special character
  newPassword: string;

  @IsString()
  @IsOptional()
  tempPassword: string;

  @IsString()
  @IsOptional()
  originalPassword: string;
}