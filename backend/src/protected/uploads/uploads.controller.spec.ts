import { Test, TestingModule } from "@nestjs/testing";
import { UploadsController } from "./uploads.controller";
import { UploadsService } from "./uploads.service";
import { InseratDateienService } from "src/protected/inserat/inserat-dateien.service";
import { LogistikerService } from "src/protected/logistiker/logistiker.service";
import { EntsorgerDateienService } from "src/protected/entsorger/entsorger-dateien.service";
import { Benutzer } from "src/schemas/user.schema";

const BACKEND_URL = "http://localhost:3000";

const multerFile = (filename: string) =>
  ({ filename, originalname: filename }) as Express.Multer.File;

describe("UploadsController", () => {
  let controller: UploadsController;

  const uploadsService = {
    secureProtokoll: jest.fn().mockReturnValue(BACKEND_URL),
    findOne: jest.fn(),
    update: jest.fn(),
  };
  const inseratDateienService = { createUpload: jest.fn() };
  const logistikerService = {
    createUpload: jest
      .fn()
      .mockResolvedValue({ message: "Die Dateien wurden erfolgreich hochgeladen" }),
  };
  const entsorgerDateienService = { createUpload: jest.fn() };

  const user = { _id: "benutzer-id" } as unknown as Benutzer;
  const req = {} as any;

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadsController],
      providers: [
        { provide: UploadsService, useValue: uploadsService },
        { provide: InseratDateienService, useValue: inseratDateienService },
        { provide: LogistikerService, useValue: logistikerService },
        { provide: EntsorgerDateienService, useValue: entsorgerDateienService },
      ],
    }).compile();

    controller = module.get<UploadsController>(UploadsController);
  });


  describe("Logistiker-Uploads", () => {
    const cases = [
      {
        name: "Logo",
        call: (files: any) => controller.uploadLogistikerLogo(user, req, files),
        path: "logoPath",
      },
      {
        name: "Zertifikat",
        call: (files: any) =>
          controller.uploadLogistikerZertifikat(user, req, files),
        path: "zertifikatePath",
      },
      {
        name: "Genehmigung",
        call: (files: any) =>
          controller.uploadLogistikerGenehmigung(user, req, files),
        path: "genehmigungenPath",
      },
    ];

    describe.each(cases)("$name", ({ call, path }) => {
      it("speichert den Upload und gibt das Ergebnis zurück", async () => {
        const file = multerFile("datei.pdf");

        const result = await call({ acceptedFiles: [file], failedFiles: [] });

        expect(logistikerService.createUpload).toHaveBeenCalledWith(
          user,
          BACKEND_URL,
          [file],
          [],
          path
        );
        expect(result).toEqual({
          message: "Die Dateien wurden erfolgreich hochgeladen",
        });
      });

      it("reicht abgelehnte Dateien an den Service weiter", async () => {
        await call({ acceptedFiles: [], failedFiles: ["boese.exe"] });

        expect(logistikerService.createUpload).toHaveBeenCalledWith(
          user,
          BACKEND_URL,
          [],
          ["boese.exe"],
          path
        );
      });
    });
  });

  describe("ObjectId-Parameter", () => {
    const objectId = "665f1c2b9d3e4a0012ab34cd";

    it("reicht die ObjectId bei findOne unverändert als String weiter", () => {
      controller.findOne(objectId);
      expect(uploadsService.findOne).toHaveBeenCalledWith(objectId);
    });

    it("reicht die ObjectId bei update unverändert als String weiter", () => {
      const dto = {};
      controller.update(objectId, dto);
      expect(uploadsService.update).toHaveBeenCalledWith(objectId, dto);
    });
  });
});
