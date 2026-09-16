import { EntsorgerDateienService } from "./entsorger-dateien.service";

jest.mock("node:fs/promises", () => ({
  access: jest.fn().mockResolvedValue(undefined),
  readFile: jest.fn().mockResolvedValue(Buffer.from("pdf")),
  constants: { F_OK: 0 },
}));

/**
 * Charakterisierungstests für das Datei-Handling der Entsorgerprofile
 * (Upload, Löschen, Zertifikat-/Genehmigungs-Download) vor der Entflechtung
 * aus dem EntsorgerService (Ticket #6).
 */

const query = (value: unknown) => {
  const chain: any = {};
  chain.exec = jest.fn().mockResolvedValue(value);
  chain.then = (resolve: any, reject: any) =>
    Promise.resolve(value).then(resolve, reject);
  return chain;
};

const benutzer: any = { _id: "benutzer-1" };

describe("Entsorger-Dateien (Charakterisierung)", () => {
  let entsorgerModel: any;
  let service: EntsorgerDateienService;

  beforeEach(() => {
    jest.clearAllMocks();
    entsorgerModel = {
      findOneAndUpdate: jest.fn(() => query(null)),
      findById: jest.fn(() => query(null)),
      updateOne: jest.fn().mockResolvedValue({ modifiedCount: 1 }),
    };
    service = new EntsorgerDateienService(entsorgerModel);
  });

  describe("createUpload", () => {
    it("ergänzt die URL um /uploads, hängt maximal 5 Pfade an und gibt sie zurück", async () => {
      entsorgerModel.findOneAndUpdate.mockReturnValue(query({ _id: "e1" }));

      const result = await service.createUpload(
        benutzer,
        "https://backend.example.de",
        [{ filename: "logo.png" } as any],
        [],
        "logoPath"
      );

      expect(entsorgerModel.findOneAndUpdate).toHaveBeenCalledWith(
        { userid: "benutzer-1" },
        {
          $push: {
            "entsorgerFilepath.logoPath": {
              $each: ["https://backend.example.de/uploads/logo.png"],
              $slice: -5,
            },
          },
        },
        { new: true, useFindAndModify: false }
      );
      expect(result).toEqual({
        message: "Die Dateien wurden erfolgreich hochgeladen",
        paths: ["https://backend.example.de/uploads/logo.png"],
      });
    });

    it("meldet abgelehnte Dateien namentlich und ohne Pfade", async () => {
      entsorgerModel.findOneAndUpdate.mockReturnValue(query({ _id: "e1" }));

      const result = await service.createUpload(
        benutzer,
        "https://backend.example.de/uploads",
        [],
        ["virus.exe"],
        "zertifikatePath"
      );

      expect(result).toEqual({
        message:
          "Die folgenden Dateien konnten aufgrund ihres Dateiformates nicht hochgeladen werden: virus.exe",
      });
    });

    it("meldet einen nicht gefundenen Entsorger", async () => {
      entsorgerModel.findOneAndUpdate.mockReturnValue(query(null));

      expect(
        await service.createUpload(
          benutzer,
          "https://backend.example.de",
          [],
          [],
          "genehmigungenPath"
        )
      ).toEqual({ message: "Entsorger nicht gefunden" });
    });
  });

  describe("deleteFile", () => {
    it("entfernt den Pfad aus dem Profil", async () => {
      expect(
        await service.deleteFile("e1", "logo.png", "logoPath")
      ).toBeUndefined();
      expect(entsorgerModel.updateOne).toHaveBeenCalledWith(
        { _id: "e1" },
        { $pull: { "entsorgerFilepath.logoPath": "logo.png" } }
      );
    });

    it("meldet, wenn nichts entfernt wurde", async () => {
      entsorgerModel.updateOne.mockResolvedValue({ modifiedCount: 0 });
      expect(await service.deleteFile("e1", "logo.png", "logoPath")).toBe(
        "Datei nicht gefunden oder Pfad ungültig"
      );
    });
  });

  describe("Datei-Download", () => {
    const res: any = { setHeader: jest.fn(), send: jest.fn() };

    it("meldet einen nicht gefundenen Entsorger", async () => {
      expect(
        await service.getZertifikat("e1", "uploads\\z.pdf", res)
      ).toBe("Entsorger nicht gefunden");
    });

    it("meldet eine nicht hinterlegte Datei mit ihrem Namen", async () => {
      entsorgerModel.findById.mockReturnValue(
        query({ entsorgerFilepath: { zertifikatePath: [] } })
      );

      expect(await service.getZertifikat("e1", "uploads\\z.pdf", res)).toBe(
        "uploads\\z.pdf nicht gefunden"
      );
    });

    it("liefert das Zertifikat als PDF aus", async () => {
      entsorgerModel.findById.mockReturnValue(
        query({
          entsorgerFilepath: {
            zertifikatePath: ["https://host/uploads/z.pdf"],
          },
        })
      );

      await service.getZertifikat("e1", "uploads\\z.pdf", res);

      expect(res.setHeader).toHaveBeenCalledWith(
        "Content-Type",
        "application/pdf"
      );
      expect(res.send).toHaveBeenCalledWith(Buffer.from("pdf"));
    });

    it("liefert die Genehmigung aus dem passenden Pfad-Feld", async () => {
      entsorgerModel.findById.mockReturnValue(
        query({
          entsorgerFilepath: {
            genehmigungenPath: ["https://host/uploads/g.pdf"],
          },
        })
      );

      await service.getGenehmigung("e1", "uploads\\g.pdf", res);

      expect(res.send).toHaveBeenCalledWith(Buffer.from("pdf"));
    });
  });
});
