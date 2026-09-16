import { Logger, NotFoundException } from "@nestjs/common";
import { InseratDateienService } from "./inserat-dateien.service";

jest.mock("node:fs/promises", () => ({
  unlink: jest.fn().mockResolvedValue(undefined),
  access: jest.fn().mockResolvedValue(undefined),
  readFile: jest.fn().mockResolvedValue(Buffer.from("pdf")),
  constants: { F_OK: 0 },
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("node:fs/promises");

/**
 * Charakterisierungstests für das Datei-Handling rund um Inserate
 * (Upload, Löschen, Analyse-Download) vor der Entflechtung aus dem
 * InseratService (Ticket #6).
 */

const query = (value: unknown) => {
  const chain: any = {};
  chain.select = jest.fn(() => chain);
  chain.exec = jest.fn().mockResolvedValue(value);
  return chain;
};

describe("Inserat-Dateien (Charakterisierung)", () => {
  let inseratModel: any;
  let service: InseratDateienService;

  beforeEach(() => {
    jest.clearAllMocks();
    inseratModel = {
      findById: jest.fn(() => query(null)),
      findByIdAndUpdate: jest.fn(() => query(null)),
      updateOne: jest.fn().mockResolvedValue({ modifiedCount: 1 }),
    };
    service = new InseratDateienService(inseratModel);
  });

  describe("createUpload", () => {
    it("ergänzt die URL um /uploads und hängt die Pfade begrenzt auf 5 an", async () => {
      inseratModel.findByIdAndUpdate.mockReturnValue(query({ _id: "i1" }));

      const result = await service.createUpload(
        "https://backend.example.de",
        { documentID: "i1" } as any,
        [{ filename: "bild.png" } as any],
        [],
        "bildpath"
      );

      expect(inseratModel.findByIdAndUpdate).toHaveBeenCalledWith(
        "i1",
        {
          $push: {
            "inseratFilepath.bildpath": {
              $each: ["https://backend.example.de/uploads/bild.png"],
              $slice: -5,
            },
          },
        },
        { new: true, useFindAndModify: false }
      );
      expect(result).toEqual({ message: "Dateien erfolgreich hochgeladen" });
    });

    it("hängt /uploads nicht doppelt an", async () => {
      inseratModel.findByIdAndUpdate.mockReturnValue(query({ _id: "i1" }));

      await service.createUpload(
        "https://backend.example.de/uploads",
        { documentID: "i1" } as any,
        [{ filename: "bild.png" } as any],
        [],
        "bildpath"
      );

      const [, update] = inseratModel.findByIdAndUpdate.mock.calls[0];
      expect(update.$push["inseratFilepath.bildpath"].$each).toEqual([
        "https://backend.example.de/uploads/bild.png",
      ]);
    });

    it("meldet abgelehnte Dateien namentlich", async () => {
      inseratModel.findByIdAndUpdate.mockReturnValue(query({ _id: "i1" }));

      const result = await service.createUpload(
        "https://backend.example.de",
        { documentID: "i1" } as any,
        [],
        ["virus.exe", "böse.bat"],
        "analysepath"
      );

      expect(result).toEqual({
        message:
          "Die folgenden Dateien konnten aufgrund ihres Dateiformates nicht hochgeladen werden: virus.exe, böse.bat",
      });
    });

    it("meldet ein nicht gefundenes Inserat", async () => {
      inseratModel.findByIdAndUpdate.mockReturnValue(query(null));

      expect(
        await service.createUpload(
          "https://backend.example.de",
          { documentID: "i1" } as any,
          [],
          [],
          "bildpath"
        )
      ).toEqual({ message: "Inserat nicht gefunden" });
    });
  });

  describe("deleteFile", () => {
    it("entfernt den Pfad aus dem Dokument", async () => {
      expect(await service.deleteFile("i1", "bild.png", "bildpath")).toBeUndefined();
      expect(inseratModel.updateOne).toHaveBeenCalledWith(
        { _id: "i1" },
        { $pull: { "inseratFilepath.bildpath": "bild.png" } }
      );
    });

    it("meldet, wenn nichts entfernt wurde", async () => {
      inseratModel.updateOne.mockResolvedValue({ modifiedCount: 0 });
      expect(await service.deleteFile("i1", "bild.png", "bildpath")).toBe(
        "Datei nicht gefunden oder Pfad ungültig"
      );
    });
  });

  describe("deleteFilesFromInseratPath", () => {
    it("löscht jede Datei relativ zum uploads-Verzeichnis", async () => {
      await service.deleteFilesFromInseratPath([
        "https://host/uploads/a.png",
        "https://host/uploads/b.pdf",
      ]);

      expect(fs.unlink).toHaveBeenCalledWith("./uploads/a.png");
      expect(fs.unlink).toHaveBeenCalledWith("./uploads/b.pdf");
    });

    it("verschluckt Fehler beim Löschen", async () => {
      jest.spyOn(Logger.prototype, "warn").mockImplementation(() => undefined);
      fs.unlink.mockRejectedValueOnce(new Error("weg"));

      await expect(
        service.deleteFilesFromInseratPath(["https://host/uploads/a.png"])
      ).resolves.toBeUndefined();
    });

    it("tut bei leerer Liste nichts", async () => {
      await service.deleteFilesFromInseratPath([]);
      expect(fs.unlink).not.toHaveBeenCalled();
    });
  });

  describe("getAnalyse", () => {
    const res: any = { setHeader: jest.fn(), send: jest.fn() };

    it("meldet ein nicht gefundenes Dokument", async () => {
      expect(await service.getAnalyse("i1", "uploads\\a.pdf", res)).toEqual({
        message: "Dokument nicht gefunden",
      });
    });

    it("meldet eine nicht hinterlegte Analyse", async () => {
      inseratModel.findById.mockReturnValue(
        query({ inseratFilepath: { analysepath: [] } })
      );

      expect(await service.getAnalyse("i1", "uploads\\a.pdf", res)).toEqual({
        message: "Analyse nicht gefunden",
      });
    });

    // Ticket #7: zuvor wurde der Fehler nur geloggt und ein Objekt aus dem
    // .catch zurückgegeben, das niemand ausliefert - die Anfrage blieb offen.
    it("meldet eine nicht lesbare Datei als 404, statt die Antwort offen zu lassen", async () => {
      jest.spyOn(Logger.prototype, "warn").mockImplementation(() => undefined);
      inseratModel.findById.mockReturnValue(
        query({
          inseratFilepath: { analysepath: ["https://host/uploads/a.pdf"] },
        })
      );
      fs.access.mockRejectedValueOnce(new Error("ENOENT"));

      const fehler = await service
        .getAnalyse("i1", "uploads\\a.pdf", res)
        .catch((e) => e);

      expect(fehler).toBeInstanceOf(NotFoundException);
      expect(fehler.getStatus()).toBe(404);
      expect(res.send).not.toHaveBeenCalled();
    });

    it("liefert die Datei als PDF aus", async () => {
      inseratModel.findById.mockReturnValue(
        query({
          inseratFilepath: { analysepath: ["https://host/uploads/a.pdf"] },
        })
      );

      await service.getAnalyse("i1", "uploads\\a.pdf", res);

      expect(res.setHeader).toHaveBeenCalledWith(
        "Content-Type",
        "application/pdf"
      );
      expect(res.send).toHaveBeenCalledWith(Buffer.from("pdf"));
    });
  });
});
