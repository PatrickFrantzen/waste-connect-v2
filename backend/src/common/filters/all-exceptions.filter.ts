import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";
import { Request, Response } from "express";
import { existsSync } from "fs";
import { join } from "path";

const INDEX_HTML = join(__dirname, "..", "..", "..", "public", "index.html");

/** Einheitliches Fehlerformat für alle Endpunkte. */
export interface FehlerAntwort {
  statusCode: number;
  message: string | string[];
  error: string;
  path: string;
  timestamp: string;
}

/**
 * Globaler Exception-Filter (siehe Issue #7).
 *
 * Erwartete Fehler (`HttpException` und Unterklassen, inkl. der von der
 * globalen `ValidationPipe` geworfenen `BadRequestException`) behalten
 * Status und Meldung. Alles andere wird als 500 mit einer generischen
 * Meldung beantwortet; Stacktrace und Originalmeldung landen ausschließlich
 * im Log, nie in der HTTP-Antwort.
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const path = request?.url ?? "";
    const method = request?.method ?? "";

    const { statusCode, message, error } = this.normalisiere(exception);

    // SPA-Fallback (siehe docs/adr/0002-single-origin-deployment.md): Nest
    // beantwortet jede nicht gematchte Route selbst mit 404, bevor eigene
    // app.use()-Middleware zum Zug käme. Für nicht-API-GET-Anfragen liefern
    // wir deshalb hier index.html statt einer JSON-Fehlermeldung.
    if (
      statusCode === HttpStatus.NOT_FOUND &&
      method === "GET" &&
      !path.startsWith("/api/v1") &&
      existsSync(INDEX_HTML)
    ) {
      response.sendFile(INDEX_HTML);
      return;
    }

    if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `${method} ${path} -> ${statusCode}: ${this.beschreibe(exception)}`,
        exception instanceof Error ? exception.stack : undefined
      );
    } else {
      this.logger.warn(
        `${method} ${path} -> ${statusCode}: ${JSON.stringify(message)}`
      );
    }

    // Bei Streaming-Endpunkten (z. B. Datei-Downloads mit @Res) kann die
    // Antwort bereits unterwegs sein; dann darf hier nichts mehr geschrieben
    // werden, sonst wirft Express "headers already sent".
    if (response?.headersSent) {
      return;
    }

    const body: FehlerAntwort = {
      statusCode,
      message,
      error,
      path,
      timestamp: new Date().toISOString(),
    };

    response.status(statusCode).json(body);
  }

  private normalisiere(exception: unknown): {
    statusCode: number;
    message: string | string[];
    error: string;
  } {
    if (exception instanceof HttpException) {
      const statusCode = exception.getStatus();
      const antwort = exception.getResponse();

      if (typeof antwort === "string") {
        return {
          statusCode,
          message: antwort,
          error: this.statusText(statusCode),
        };
      }

      const inhalt = antwort as Record<string, unknown>;
      const message = (inhalt.message ?? exception.message) as string | string[];
      const error = (inhalt.error as string) ?? this.statusText(statusCode);

      return { statusCode, message, error };
    }

    return {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message:
        "Es ist ein unerwarteter Fehler aufgetreten. Bitte versuche es später erneut.",
      error: this.statusText(HttpStatus.INTERNAL_SERVER_ERROR),
    };
  }

  /** "BAD_REQUEST" -> "Bad Request" (entspricht Nests Standardformat). */
  private statusText(statusCode: number): string {
    const name = HttpStatus[statusCode] as string | undefined;
    if (!name) {
      return "Error";
    }
    return name
      .toLowerCase()
      .split("_")
      .map((teil) => teil.charAt(0).toUpperCase() + teil.slice(1))
      .join(" ");
  }

  private beschreibe(exception: unknown): string {
    if (exception instanceof Error) {
      return `${exception.name}: ${exception.message}`;
    }
    return String(exception);
  }
}
