import {
  ArgumentsHost,
  BadRequestException,
  ForbiddenException,
  HttpStatus,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { AllExceptionsFilter } from "./all-exceptions.filter";

/**
 * Der globale Filter ist der einzige Ort, an dem Fehlerantworten geformt
 * werden. Diese Tests halten das Antwortformat fest und stellen sicher,
 * dass interne Details (Stacktraces, Treibermeldungen) nicht nach außen
 * gelangen.
 */
describe("AllExceptionsFilter", () => {
  let filter: AllExceptionsFilter;
  let json: jest.Mock;
  let status: jest.Mock;
  let response: { status: jest.Mock; headersSent: boolean };
  let host: ArgumentsHost;

  const hostFor = (res: unknown, url = "/inserat") =>
    ({
      switchToHttp: () => ({
        getResponse: () => res,
        getRequest: () => ({ url, method: "POST" }),
      }),
    }) as unknown as ArgumentsHost;

  beforeEach(() => {
    filter = new AllExceptionsFilter();
    json = jest.fn();
    status = jest.fn().mockReturnValue({ json });
    response = { status, headersSent: false };
    host = hostFor(response);
    jest.spyOn(Logger.prototype, "error").mockImplementation(() => undefined);
    jest.spyOn(Logger.prototype, "warn").mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("gibt für eine BadRequestException Status und Meldung unverändert zurück", () => {
    filter.catch(new BadRequestException("Ungültige Eingabe"), host);

    expect(status).toHaveBeenCalledWith(HttpStatus.BAD_REQUEST);
    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 400,
        message: "Ungültige Eingabe",
        error: "Bad Request",
        path: "/inserat",
      })
    );
  });

  it("reicht die Meldungsliste der ValidationPipe unverändert durch", () => {
    const pipeError = new BadRequestException({
      statusCode: 400,
      message: ["email must be an email", "password should not be empty"],
      error: "Bad Request",
    });

    filter.catch(pipeError, host);

    expect(status).toHaveBeenCalledWith(400);
    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 400,
        message: ["email must be an email", "password should not be empty"],
        error: "Bad Request",
      })
    );
  });

  it("behält Status und Meldung anderer Nest-Exceptions bei", () => {
    filter.catch(new NotFoundException("Inserat nicht gefunden"), host);
    expect(status).toHaveBeenCalledWith(HttpStatus.NOT_FOUND);
    expect(json).toHaveBeenCalledWith(
      expect.objectContaining({
        statusCode: 404,
        message: "Inserat nicht gefunden",
        error: "Not Found",
      })
    );
  });

  it("antwortet auf unerwartete Fehler mit 500 ohne interne Details", () => {
    const boom = new Error("MongoServerError: connection string leaked");

    filter.catch(boom, host);

    expect(status).toHaveBeenCalledWith(HttpStatus.INTERNAL_SERVER_ERROR);
    const body = json.mock.calls[0][0];
    expect(body.statusCode).toBe(500);
    expect(body.error).toBe("Internal Server Error");
    expect(JSON.stringify(body)).not.toContain("connection string leaked");
    expect(JSON.stringify(body)).not.toContain("stack");
  });

  it("protokolliert unerwartete Fehler inklusive Stack über den Nest-Logger", () => {
    const logSpy = jest
      .spyOn(Logger.prototype, "error")
      .mockImplementation(() => undefined);
    const boom = new Error("kaputt");

    filter.catch(boom, host);

    expect(logSpy).toHaveBeenCalled();
    expect(String(logSpy.mock.calls[0][0])).toContain("kaputt");
  });

  it("protokolliert erwartete 4xx-Fehler nur als Warnung", () => {
    const warnSpy = jest
      .spyOn(Logger.prototype, "warn")
      .mockImplementation(() => undefined);
    const errorSpy = jest
      .spyOn(Logger.prototype, "error")
      .mockImplementation(() => undefined);

    filter.catch(new ForbiddenException(), host);

    expect(warnSpy).toHaveBeenCalled();
    expect(errorSpy).not.toHaveBeenCalled();
  });

  it("schreibt nicht in eine bereits gesendete Antwort", () => {
    const sent = { status, headersSent: true };

    filter.catch(new Error("zu spät"), hostFor(sent));

    expect(status).not.toHaveBeenCalled();
  });
});
