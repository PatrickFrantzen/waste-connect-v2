import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UseGuards,
  Req,
  Query,
} from "@nestjs/common";
import { UploadsService } from "./uploads.service";
import { CreateUploadDto } from "./dto/create-upload.dto";
import { UpdateUploadDto } from "./dto/update-upload.dto";
import { FilesInterceptor } from "@nestjs/platform-express";
import {
  BildFileTypeValidationPipe,
  PdfFileTypeValidationPipe,
} from "src/utils/Pipes/filetype.pipe";
import { InseratDateienService } from "src/protected/inserat/inserat-dateien.service";
import { AuthGuard } from "@nestjs/passport";
import { Benutzer } from "src/schemas/user.schema";
import { GetUser } from "src/unprotected/auth/get-user.decorator";
import { DeleteUploadDto } from "./dto/delete-upload.dto";
import { LogistikerService } from "src/protected/logistiker/logistiker.service";
import { EntsorgerDateienService } from "src/protected/entsorger/entsorger-dateien.service";
import { Request } from 'express';

@Controller("upload")
@UseGuards(AuthGuard())
export class UploadsController {
  constructor(
    private readonly uploadsService: UploadsService,
    private readonly inseratDateienService: InseratDateienService,
    private readonly logistikerService: LogistikerService,
    private readonly entsorgerDateienService: EntsorgerDateienService
  ) {}
  //Upload für Inserat - Bild

  //User Überprüfung einbauen
  @Post("bild")
  @UseInterceptors(FilesInterceptor("bild", 5))
  uploadBild(
    @GetUser() user: Benutzer,
    @Body() createUploadDto: CreateUploadDto,
    @Req() req: Request,
    @UploadedFiles(new BildFileTypeValidationPipe())
    {
      acceptedFiles,
      failedFiles,
    }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
  ) {
    const url = this.uploadsService.secureProtokoll(req);
    return this.inseratDateienService.createUpload(
      url,
      createUploadDto,
      acceptedFiles,
      failedFiles,
      "bildpath"
    );
  }

  //Upload für Inserat - Analyse
  @Post("analyse")
  @UseInterceptors(FilesInterceptor("analyse", 5))
  uploadAnalyse(
    @GetUser() user: Benutzer,
    @Body() createUploadDto: CreateUploadDto,
    @Req() req: Request,
    @UploadedFiles(new PdfFileTypeValidationPipe())
    {
      acceptedFiles,
      failedFiles,
    }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
  ) {
    const url = this.uploadsService.secureProtokoll(req);
    return this.inseratDateienService.createUpload(
      url,
      createUploadDto,
      acceptedFiles,
      failedFiles,
      "analysepath"
    );
  }


    //Upload für Entsorger - Logo
    @Post("entsorgerLogo")
    @UseInterceptors(FilesInterceptor("logo", 5))
    uploadEntsorgerLogo(
      @GetUser() user: Benutzer,
      // @Body() createUploadDto: CreateUploadDto,
      @Req() req: Request,
      @UploadedFiles(new BildFileTypeValidationPipe())
      {
        acceptedFiles,
        failedFiles,
      }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
    ): Promise<{message: string, paths?: string[]}> {
      const url = this.uploadsService.secureProtokoll(req);
      return this.entsorgerDateienService.createUpload(user, url ,acceptedFiles, failedFiles, 'logoPath');
    }
  
    //Upload für Entsorger - Zertifikat
    @Post("entsorgerZertifikat")
    @UseInterceptors(FilesInterceptor("zertifikat", 5))
    uploadEntsorgerZertifikat(
      @GetUser() user: Benutzer,
      // @Body() createUploadDto: CreateUploadDto,
      @Req() req: Request,
      @UploadedFiles(new PdfFileTypeValidationPipe())
      {
        acceptedFiles,
        failedFiles,
      }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
    ) {
      const url = this.uploadsService.secureProtokoll(req);
      return this.entsorgerDateienService.createUpload(user, url, acceptedFiles, failedFiles, 'zertifikatePath');
    }
  
    //Upload für Entsorger - Genehmigung
    @Post("entsorgerGenehmigung")
    @UseInterceptors(FilesInterceptor("genehmigung", 5))
    uploadEntsorgerGenehmigung(
      @GetUser() user: Benutzer,
      // @Body() createUploadDto: CreateUploadDto,
      @Req() req: Request,
      @UploadedFiles(new PdfFileTypeValidationPipe())
      {
        acceptedFiles,
        failedFiles,
      }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
    ) {
      const url = this.uploadsService.secureProtokoll(req);
      return this.entsorgerDateienService.createUpload(user, url, acceptedFiles, failedFiles, 'genehmigungenPath');
    }


  //Upload für Logistiker - Logo
  @Post("LogistikerLogo")
  @UseInterceptors(FilesInterceptor("logo", 5))
  uploadLogistikerLogo(
    @GetUser() user: Benutzer,
    @Req() req: Request,
    @UploadedFiles(new BildFileTypeValidationPipe())
    {
      acceptedFiles,
      failedFiles,
    }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
  ): Promise<{ message: string; paths?: string[] }> {
    const url = this.uploadsService.secureProtokoll(req);
    return this.logistikerService.createUpload(
      user,
      url,
      acceptedFiles,
      failedFiles,
      "logoPath"
    );
  }

  //Upload für Logistiker - Zertifikat
  @Post("logistikerZertifikat")
  @UseInterceptors(FilesInterceptor("zertifikat", 5))
  uploadLogistikerZertifikat(
    @GetUser() user: Benutzer,
    @Req() req: Request,
    @UploadedFiles(new PdfFileTypeValidationPipe())
    {
      acceptedFiles,
      failedFiles,
    }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
  ): Promise<{ message: string; paths?: string[] }> {
    const url = this.uploadsService.secureProtokoll(req);
    return this.logistikerService.createUpload(
      user,
      url,
      acceptedFiles,
      failedFiles,
      "zertifikatePath"
    );
  }

  //Upload für Logistiker - Genehmigung
  @Post("logistikerGenehmigung")
  @UseInterceptors(FilesInterceptor("genehmigung", 5))
  uploadLogistikerGenehmigung(
    @GetUser() user: Benutzer,
    @Req() req: Request,
    @UploadedFiles(new PdfFileTypeValidationPipe())
    {
      acceptedFiles,
      failedFiles,
    }: { acceptedFiles: Express.Multer.File[]; failedFiles: string[] }
  ): Promise<{ message: string; paths?: string[] }> {
    const url = this.uploadsService.secureProtokoll(req);
    return this.logistikerService.createUpload(
      user,
      url,
      acceptedFiles,
      failedFiles,
      "genehmigungenPath"
    );
  }

  @Post()
  create(@Body() createUploadDto: CreateUploadDto) {
    return this.uploadsService.create(createUploadDto);
  }

  @Get()
  findAll() {
    return this.uploadsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.uploadsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUploadDto: UpdateUploadDto) {
    return this.uploadsService.update(id, updateUploadDto);
  }

  // Die Query-Parameter werden als DTO gebunden, damit die globale
  // ValidationPipe sie tatsächlich prüft (siehe Ticket #7).
  @Delete(":id")
  remove(@GetUser() user: Benutzer, @Query() deleteUploadDto: DeleteUploadDto) {
    return this.uploadsService.remove(user, deleteUploadDto);
  }
}
