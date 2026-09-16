import {
  InternalServerErrorException,
  NotImplementedException,
} from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as fs from "fs";
import { EntsorgerDateienService } from "../entsorger/entsorger-dateien.service";
import { EntsorgerService } from "../entsorger/entsorger.service";
import { InseratDateienService } from "../inserat/inserat-dateien.service";
import { InseratService } from "../inserat/inserat.service";
import { LogistikerService } from "../logistiker/logistiker.service";
import { DeleteUploadDto } from "./dto/delete-upload.dto";
import { UploadsService } from "./uploads.service";
import { Benutzer } from "src/schemas/user.schema";

jest.mock("fs");

const fsMock = fs as jest.Mocked<typeof fs>;

const BENUTZER_ID = "665f1c2b9d3e4a0012ab34cd";
const DOKUMENT_ID = "665f1c2b9d3e4a0012ab9999";

const user = { _id: BENUTZER_ID } as unknown as Benutzer;

const dto = (overrides: Partial<DeleteUploadDto> = {}): DeleteUploadDto =>
  ({
    filename: "http://localhost:3000/uploads/bild.png",
    dokumentType: "inserat",
    dokumentID: DOKUMENT_ID,
    filePath: "bildpath",
    ...overrides,
  }) as DeleteUploadDto;

describe("UploadsService", () => {
  let service: UploadsService;

  const inseratService = { findOneForDelete: jest.fn() };
  const inseratDateienService = { deleteFile: jest.fn() };
  const entsorgerService = { findOneForDelete: jest.fn() };
  const entsorgerDateienService = { deleteFile: jest.fn() };
  // Bewusst leer: der LogistikerService hat weder findOneForDelete noch
  // deleteFile (nur deleteFileFromLogistiker) – siehe Logistiker-Testfall.
  const logistikerService = {};

  beforeEach(async () => {
    jest.clearAllMocks();
    fsMock.existsSync.mockReturnValue(true);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UploadsService,
        { provide: InseratService, useValue: inseratService },
        { provide: InseratDateienService, useValue: inseratDateienService },
        { provide: LogistikerService, useValue: logistikerService },
        { provide: EntsorgerService, useValue: entsorgerService },
        {
          provide: EntsorgerDateienService,
          useValue: entsorgerDateienService,
        },
      ],
    }).compile();

    service = module.get<UploadsService>(UploadsService);
  });

  describe("remove – Inserat", () => {
    it("entfernt den Verweis aus dem Inserat und die Datei aus dem Dateisystem", async () => {
      inseratService.findOneForDelete.mockResolvedValue({ user: BENUTZER_ID });
      inseratDateienService.deleteFile.mockResolvedValue(undefined);

      const result = await service.remove(user, dto());

      expect(inseratService.findOneForDelete).toHaveBeenCalledWith(DOKUMENT_ID);
      expect(inseratDateienService.deleteFile).toHaveBeenCalledWith(
        DOKUMENT_ID,
        "http://localhost:3000/uploads/bild.png",
        "bildpath"
      );
      expect(fsMock.unlinkSync).toHaveBeenCalledWith("./uploads/bild.png");
      expect(result).toEqual({ message: "Datei erfolgreich gelöscht." });
    });

    it("meldet Erfolg, wenn die Datei im Dateisystem bereits fehlt", async () => {
      inseratService.findOneForDelete.mockResolvedValue({ user: BENUTZER_ID });
      inseratDateienService.deleteFile.mockResolvedValue(undefined);
      fsMock.existsSync.mockReturnValue(false);

      const result = await service.remove(user, dto());

      expect(fsMock.unlinkSync).not.toHaveBeenCalled();
      expect(result).toEqual({ message: "Datei erfolgreich gelöscht." });
    });

    it("verweigert das Löschen an fremden Inseraten und fasst das Dateisystem nicht an", async () => {
      inseratService.findOneForDelete.mockResolvedValue({
        user: "665f1c2b9d3e4a0012abffff",
      });

      await expect(service.remove(user, dto())).rejects.toBeInstanceOf(
        InternalServerErrorException
      );
      expect(inseratDateienService.deleteFile).not.toHaveBeenCalled();
      expect(fsMock.unlinkSync).not.toHaveBeenCalled();
    });

    it("meldet ein nicht gefundenes Inserat als 500 statt mit einer TypeError abzustürzen", async () => {
      // findOneForDelete des InseratService liefert im Fehlerfall ein Objekt
      // mit message-Feld statt eines Dokuments.
      inseratService.findOneForDelete.mockResolvedValue({
        message: "Inserat nicht gefunden",
      });

      await expect(service.remove(user, dto())).rejects.toBeInstanceOf(
        InternalServerErrorException
      );
      expect(inseratDateienService.deleteFile).not.toHaveBeenCalled();
    });

    it("meldet einen fehlgeschlagenen Datenbank-Löschvorgang als 500", async () => {
      inseratService.findOneForDelete.mockResolvedValue({ user: BENUTZER_ID });
      inseratDateienService.deleteFile.mockResolvedValue(
        "Datei nicht gefunden oder Pfad ungültig"
      );

      await expect(service.remove(user, dto())).rejects.toBeInstanceOf(
        InternalServerErrorException
      );
      expect(fsMock.unlinkSync).not.toHaveBeenCalled();
    });
  });

  describe("remove – Entsorger", () => {
    it("prüft den Besitzer über das Feld userid", async () => {
      entsorgerService.findOneForDelete.mockResolvedValue({
        userid: BENUTZER_ID,
      });
      entsorgerDateienService.deleteFile.mockResolvedValue(undefined);

      const result = await service.remove(
        user,
        dto({ dokumentType: "entsorger", filePath: "zertifikatePath" })
      );

      expect(entsorgerDateienService.deleteFile).toHaveBeenCalledWith(
        DOKUMENT_ID,
        "http://localhost:3000/uploads/bild.png",
        "zertifikatePath"
      );
      expect(result).toEqual({ message: "Datei erfolgreich gelöscht." });
    });

    it("verweigert das Löschen an fremden Entsorgerprofilen", async () => {
      entsorgerService.findOneForDelete.mockResolvedValue({
        userid: "665f1c2b9d3e4a0012abffff",
      });

      await expect(
        service.remove(user, dto({ dokumentType: "entsorger" }))
      ).rejects.toBeInstanceOf(InternalServerErrorException);
      expect(entsorgerDateienService.deleteFile).not.toHaveBeenCalled();
    });
  });

  describe("remove – Logistiker", () => {
    it("scheitert sauber mit 501 statt mit einer TypeError", async () => {
      const promise = service.remove(user, dto({ dokumentType: "logistiker" }));

      await expect(promise).rejects.toBeInstanceOf(NotImplementedException);
      await expect(promise).rejects.toMatchObject({
        message: "Logistiker-Upload-Löschung ist noch nicht implementiert.",
        status: 501,
      });
      expect(fsMock.unlinkSync).not.toHaveBeenCalled();
    });

    it("wirft keine TypeError, obwohl der LogistikerService die benötigten Methoden nicht hat", async () => {
      await expect(
        service.remove(user, dto({ dokumentType: "logistiker" }))
      ).rejects.not.toBeInstanceOf(TypeError);
    });
  });

  describe("remove – unbekannter Dokumenttyp", () => {
    it("lehnt einen unbekannten Dokumenttyp ab", async () => {
      await expect(
        service.remove(user, dto({ dokumentType: "unbekannt" }))
      ).rejects.toMatchObject({ message: "Ungültiger Dokumenttyp." });
    });

    it("greift nicht auf geerbte Object-Eigenschaften zu", async () => {
      // 'constructor'/'toString' dürfen nicht als gültiger Dokumenttyp gelten.
      await expect(
        service.remove(user, dto({ dokumentType: "constructor" }))
      ).rejects.toMatchObject({ message: "Ungültiger Dokumenttyp." });
    });
  });

  describe("secureProtokoll", () => {
    const req = (origin: string | undefined, host: string, secure: boolean) =>
      ({
        get: (header: string) => (header === "origin" ? origin : host),
        secure,
      }) as any;

    it("erzwingt für die Produktivdomain HTTPS auf das Backend", () => {
      expect(
        service.secureProtokoll(
          req("https://waste-connect.de", "irgendwas", false)
        )
      ).toBe("https://backend.waste-connect.de");
    });

    it("liefert für die lokale Entwicklung ebenfalls die Backend-Domain", () => {
      expect(
        service.secureProtokoll(req("http://localhost:4200", "irgendwas", false))
      ).toBe("https://backend.waste-connect.de");
    });

    it("baut für unbekannte Origins die URL aus Protokoll und Host", () => {
      expect(service.secureProtokoll(req(undefined, "localhost:3000", false))).toBe(
        "http://localhost:3000"
      );
      expect(
        service.secureProtokoll(req("https://fremde.de", "example.org", true))
      ).toBe("https://example.org");
    });
  });
});
