import { Type } from "class-transformer";
import { IsInt, Min } from "class-validator";

/**
 * Query-Parameter der Paginierung. `@Type` wandelt die Strings aus der
 * Query-String in Zahlen um (die globale ValidationPipe läuft mit
 * `transform: true`), damit `skip`/`limit` echte Zahlen bekommen.
 */
export class PaginatorDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageSize: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  currentPage: number;
}
