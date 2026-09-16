import { Test, TestingModule } from "@nestjs/testing";
import { getModelToken } from "@nestjs/mongoose";
import { LogistikerService } from "./logistiker.service";
import { LogistikerNEST } from "src/schemas/logistiker.schema";
import { Benutzer } from "src/schemas/user.schema";

const multerFile = (filename: string) =>
  ({ filename, originalname: filename }) as Express.Multer.File;

describe("LogistikerService", () => {
  let service: LogistikerService;

  const logistikerModel = {
    findOneAndUpdate: jest.fn(),
  };

  const user = { _id: "665f1c2b9d3e4a0012ab34cd" } as unknown as Benutzer;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogistikerService,
        { provide: getModelToken(LogistikerNEST.name), useValue: logistikerModel },
      ],
    }).compile();

    service = module.get<LogistikerService>(LogistikerService);
  });


  describe("createUpload", () => {
    const mockFound = () =>
      logistikerModel.findOneAndUpdate.mockReturnValue({
        exec: jest.fn().mockResolvedValue({ _id: "logistiker-id" }),
      });

    it("speichert die Pfade am Logistikerprofil des Benutzers", async () => {
      mockFound();

      const result = await service.createUpload(
        user,
        "http://localhost:3000",
        [multerFile("logo.png")],
        [],
        "logoPath"
      );

      expect(logistikerModel.findOneAndUpdate).toHaveBeenCalledWith(
        { userid: user._id },
        {
          $push: {
            "logistikerFilepath.logoPath": {
              $each: ["http://localhost:3000/uploads/logo.png"],
              $slice: -5,
            },
          },
        },
        expect.objectContaining({ new: true })
      );
      expect(result).toEqual({
        message: "Die Dateien wurden erfolgreich hochgeladen",
        paths: ["http://localhost:3000/uploads/logo.png"],
      });
    });

    it("meldet abgelehnte Dateien zurück", async () => {
      mockFound();

      const result = await service.createUpload(
        user,
        "http://localhost:3000",
        [],
        ["boese.exe"],
        "zertifikatePath"
      );

      expect(result.message).toContain("boese.exe");
    });

    it("meldet einen fehlenden Logistiker zurück", async () => {
      logistikerModel.findOneAndUpdate.mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });

      const result = await service.createUpload(
        user,
        "http://localhost:3000",
        [multerFile("logo.png")],
        [],
        "logoPath"
      );

      expect(result).toEqual({ message: "Logistiker nicht gefunden" });
    });
  });
});
