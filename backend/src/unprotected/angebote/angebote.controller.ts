import { Controller, Get, Body, Param, Query, HttpException, HttpStatus, Res } from "@nestjs/common";
import { AngeboteService } from "./angebote.service";

import { EntsorgerService } from "src/protected/entsorger/entsorger.service";
import { EntsorgerDateienService } from "src/protected/entsorger/entsorger-dateien.service";
import { EntsorgerStatistikService } from "src/protected/entsorger/entsorger-statistik.service";
import { LogistikerService } from "src/protected/logistiker/logistiker.service";
import { InseratService } from "src/protected/inserat/inserat.service";
import { InseratDateienService } from "src/protected/inserat/inserat-dateien.service";
import { InseratStatistikService } from "src/protected/inserat/inserat-statistik.service";
import { InseratfilterDto } from "src/protected/inserat/dto/filter-inserat.dto";
import { PaginatorDto } from "src/protected/inserat/dto/paginator-inserat.dto";
import { EntsorgerFilterDto } from "src/protected/entsorger/dto/filter-entsorger.dto";
import { Response } from 'express';
import { parseQueryJson } from "src/common/query-json";

@Controller("angebote")
export class AngeboteController {
  constructor(
    private readonly angeboteService: AngeboteService,
    private readonly inseratService: InseratService,
    private readonly inseratDateienService: InseratDateienService,
    private readonly inseratStatistikService: InseratStatistikService,
    private readonly entsorgerService: EntsorgerService,
    private readonly entsorgerDateienService: EntsorgerDateienService,
    private readonly entsorgerStatistikService: EntsorgerStatistikService,
    private readonly logistikerService: LogistikerService
  ) {}

  //Filter der Inserate
  @Get("filter")
  filter(@Body() filterInseratDto: InseratfilterDto) {
    return this.inseratService.filter(filterInseratDto);
  }

  @Get("getNumberOfFilterInserate")
  getNumberOfFilterInserate(@Body() filterInseratDto: InseratfilterDto) {
    return this.inseratService.getNumberOfFilterInserate(filterInseratDto);
  }

  @Get("filterEntsorger")
  filterEntsorger(@Body() filterEntsorgerDto: EntsorgerFilterDto) {
    return this.entsorgerService.filter(filterEntsorgerDto);
  }

  @Get("getNumberOfFilterEntsorger")
  getNumberOfFilterEntsorger(@Body() filterEntsorgerDto: EntsorgerFilterDto) {
    return this.entsorgerService.getNumberOfFilterEntsorger(filterEntsorgerDto);
  }

  //Filter der Logistiker kommt erst später

  //Paginator der Inserate
  @Get("paginator")
  paginator(@Query() paginatorDto: PaginatorDto) { 
    return this.inseratService.paginator(paginatorDto);
  }

  @Get("filterAndPaginator")
  async filterAndPaginator(@Query('paginatorDto') paginatorString: string, @Query('filterInseratDto') filterInseratDtoString: string) {
    const paginatorDto = parseQueryJson<PaginatorDto>(
      paginatorString,
      "paginatorDto"
    );
    const filterInseratDtoObj = parseQueryJson<InseratfilterDto>(
      filterInseratDtoString,
      "filterInseratDto"
    );
    return await this.inseratService.filterAndPaginate(filterInseratDtoObj, paginatorDto);
}

  @Get("paginatorEntsorger")
  paginatorEntsorger(@Body() paginatorDto: PaginatorDto) {
    return this.entsorgerService.paginator(paginatorDto);
  }

  @Get("filterAndPaginatorEntsorger")
  async filterAndPaginatorEntsorger(@Query('paginatorDto') paginatorString: string, @Query('filterEntsorgerDto') filterEntsorgerDtoString: string) {
    const paginatorDto = parseQueryJson<PaginatorDto>(
      paginatorString,
      "paginatorDto"
    );
    const filterEntsorgerDtoObj = parseQueryJson<EntsorgerFilterDto>(
      filterEntsorgerDtoString,
      "filterEntsorgerDto"
    );
    return await this.entsorgerService.filterAndPaginate(filterEntsorgerDtoObj, paginatorDto);
  }

  //Paginator der Logistiker kommt erst später

  //Alle Angebote laden
  @Get("allInserate")
  findAllInserate() {
    return this.inseratService.findAll();
  }

  @Get("allEntsorger")
  findAllEntsorger() {
    return this.entsorgerService.findAll();
  }

  @Get("allLogistiker")
  findAllLogistiker() {
    return this.logistikerService.findAll();
  }

  //Einzelnes Angebot ansehen
  @Get("inserat/:id")
  findOneInserat(@Param("id") id: string) {
    return this.inseratService.findOne(id);
  }

  @Get("entsorger/:id")
  findOneEntsorger(@Param("id") id: string) {
    return this.entsorgerService.findOneUnprotected(id);
  }

  @Get("logistiker/:id")
  findOneLogistiker(@Param("id") id: string) {
    return this.logistikerService.findOneUnprotected(id);
  }


  //Bundesländer
  @Get("getBundeslaenderAnzahl")
  getBundeslaenderAnzahl() {
    return this.inseratStatistikService.getBundeslaenderAnzahl();
  }

  @Get("getGemeindenForBundesland")
  getGemeindenForBundesland(@Query("bundesland") bundesland: string) {
    return this.inseratStatistikService.getGemeindenForBundesland(bundesland);
  }

  @Get("getEntsorgerGemeindenForBundesland")
  getEntsorgerGemeindenForBundesland(@Query("bundesland") bundesland: string) {
    return this.entsorgerStatistikService.getGemeindenForBundesland(bundesland);
  }

  //Download von Dateien
  @Get("getAnalyse/:id")
  getBlob(@Param("id") id: string, @Query("analyse") analyse: string, @Res() res: Response) {
    return this.inseratDateienService.getAnalyse(id, analyse, res);
  }

  //Alle Pfade um Dokumente zu holen brauchen das Res um die Datei zu senden siehe getAnalysen
  @Get("entsorgerZertifikat/:id")
  getEntsorgerZertifikatBlob(@Param("id") id: string, @Query("zertifikat") zertifikat: string, @Res() res: Response) {
    return this.entsorgerDateienService.getZertifikat(id, zertifikat, res);
  }

  @Get("entsorgerGenehmigung/:id")
  getEntsorgerGenehmigungBlob(@Param("id") id: string, @Query("genehmigung") genehmigung: string, @Res() res: Response) {
    return this.entsorgerDateienService.getGenehmigung(id, genehmigung, res);
  }

  @Get("logistikerZertifikat/:id")
  getLogistikerZertifikatBlob(@Param("id") id: string, @Query("zertifikat") zertifikat: string, @Res() res: Response) {
    return this.logistikerService.getZertifikat(id, zertifikat);
  }

  @Get("logistikerGenehmigung/:id")
  getLogistikerGenehmigungBlob(@Param("id") id: string, @Query("genehmigung") genehmigung: string, @Res() res: Response) {
    return this.logistikerService.getGenehmigung(id, genehmigung);
  }
}
