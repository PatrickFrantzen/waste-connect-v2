import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotImplementedException,
} from "@nestjs/common";
import { CreateUploadDto } from "./dto/create-upload.dto";
import { UpdateUploadDto } from "./dto/update-upload.dto";
import * as fs from "fs";
import { Benutzer } from "src/schemas/user.schema";
import { InseratService } from "src/protected/inserat/inserat.service";
import { InseratDateienService } from "src/protected/inserat/inserat-dateien.service";
import { DeleteUploadDto } from "./dto/delete-upload.dto";
import { LogistikerService } from "../logistiker/logistiker.service";
import { Logistiker } from "../logistiker/entities/logistiker.entity";
import { EntsorgerService } from "../entsorger/entsorger.service";
import { EntsorgerDateienService } from "../entsorger/entsorger-dateien.service";
import { Request } from 'express';

@Injectable()
export class UploadsService {
  private readonly logger = new Logger(UploadsService.name);

  constructor(
    private readonly inseratService: InseratService,
    private readonly inseratDateienService: InseratDateienService,
    private readonly logistikerService: LogistikerService,
    private readonly entsorgerService: EntsorgerService,
    private readonly entsorgerDateienService: EntsorgerDateienService
  ) {}

  create(createUploadDto: CreateUploadDto) {
    return "This action adds a new upload";
  }

  findAll() {
    return `This action returns all uploads`;
  }

  findOne(id: string) {
    return `This action returns a #${id} upload`;
  }

  update(id: string, updateUploadDto: UpdateUploadDto) {
    return `This action updates a #${id} upload`;
  }

  //Wird aufgerufen, wenn ein User im Frontend ein Bild im Inserat oder im Entsorger/Logistikerprofil löschen möchte
  //Der User muss eingeloggt sein, um diese Aktion ausführen zu können
  //Der User muss der Besitzer des Dokumentes sein, um dieses löschen zu können
  //Der Server löscht das Bild aus dem Filesystem und aus der Datenbank
  async remove(user: Benutzer, deleteUploadDto: DeleteUploadDto) {
    // Je Dokumenttyp: wo das Dokument selbst liegt und wer dessen Dateien pflegt.
    const services = {
      inserat: {
        dokumente: this.inseratService,
        dateien: this.inseratDateienService,
        besitzerFeld: "user" as const,
      },
      entsorger: {
        dokumente: this.entsorgerService,
        dateien: this.entsorgerDateienService,
        besitzerFeld: "userid" as const,
      },
    };

    // Das Logistiker-Modul wird laut "Offene Aufgaben.txt" erst nach dem
    // Release fertiggestellt; der LogistikerService hat keine Methoden zum
    // Löschen einzelner Dateien. Bis dahin lieber ein klar benannter 501
    // als eine TypeError, die als 500 beim Aufrufer landet.
    if (deleteUploadDto.dokumentType === "logistiker") {
      throw new NotImplementedException(
        "Logistiker-Upload-Löschung ist noch nicht implementiert."
      );
    }

    const service = Object.prototype.hasOwnProperty.call(
      services,
      deleteUploadDto.dokumentType
    )
      ? services[deleteUploadDto.dokumentType]
      : undefined;

    if (!service) {
      throw new InternalServerErrorException("Ungültiger Dokumenttyp.");
    }

    const doc = await service.dokumente.findOneForDelete(
      deleteUploadDto.dokumentID
    );

    const besitzer = doc?.[service.besitzerFeld];

    // findOneForDelete liefert je nach Service null, einen String oder ein
    // Objekt mit message-Feld, wenn nichts gefunden wurde.
    if (!doc || typeof doc === "string" || !besitzer) {
      throw new InternalServerErrorException(
        "Der Server konnte die Anfrage nicht verarbeiten."
      );
    }

    if (besitzer.toString() !== user._id.toString()) {
      throw new InternalServerErrorException(
        "Der Server konnte die Anfrage nicht verarbeiten."
      );
    }

    // deleteFile liefert im Fehlerfall einen Hinweistext, sonst nichts.
    const fehler = await service.dateien.deleteFile(
      deleteUploadDto.dokumentID,
      deleteUploadDto.filename,
      // Der DTO erlaubt die Pfade beider Dokumenttypen; welcher davon zum
      // Dokument passt, entscheidet die Datenbank (kein Treffer => Hinweistext).
      deleteUploadDto.filePath as never
    );

    if (fehler) {
      throw new InternalServerErrorException(
        "Der Server konnte die Anfrage nicht verarbeiten."
      );
    }

    const extractedFilename = deleteUploadDto.filename.split("/uploads/")[1];

    const filePath = `./uploads/${extractedFilename}`;

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    } else {
      // Nicht fatal: der Verweis wurde bereits aus dem Dokument entfernt.
      this.logger.warn(`Datei nicht mehr vorhanden: ${filePath}`);
    }

    return { message: `Datei erfolgreich gelöscht.` };
  }

  secureProtokoll(req: Request) {
    const origin = req.get("origin");
    let url: string;

    // Überprüfen des Origin-Headers und Setzen der URL mit festem Protokoll für bekannte Domains
    if (
      origin === "https://waste-connect.de" ||
      origin === "http://localhost:4200"
    ) {
      // Für die Domain waste-connect.de immer HTTPS verwenden
      url = "https://backend.waste-connect.de";
    } else {
      // Für alle anderen Fälle (einschließlich Entwicklungsumgebung) das Protokoll basierend auf req.secure setzen
      url = (req.secure ? "https://" : "http://") + req.get("host");
    }

    return url;
  }
}
