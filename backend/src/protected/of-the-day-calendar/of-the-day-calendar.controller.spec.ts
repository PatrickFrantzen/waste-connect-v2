import { Test, TestingModule } from "@nestjs/testing";
import { OfTheDayCalendarController } from "./of-the-day-calendar.controller";
import { OfTheDayCalendarService } from "./of-the-day-calendar.service";
import { WasteOfTheDayService } from "./waste-of-the-day.service";

describe("OfTheDayCalendarController", () => {
  let controller: OfTheDayCalendarController;

  const ofTheDayCalendarService = {
    update: jest.fn(),
    remove: jest.fn(),
  };

  const objectId = "665f1c2b9d3e4a0012ab34cd";

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfTheDayCalendarController],
      providers: [
        {
          provide: OfTheDayCalendarService,
          useValue: ofTheDayCalendarService,
        },
        {
          provide: WasteOfTheDayService,
          useValue: { getWasteOfTheDay: jest.fn(), getEntsorgerOfTheDay: jest.fn() },
        },
      ],
    }).compile();

    controller = module.get<OfTheDayCalendarController>(
      OfTheDayCalendarController
    );
  });


  it("reicht die ObjectId bei update unverändert als String weiter", () => {
    const dto = {};
    controller.update(objectId, dto);
    expect(ofTheDayCalendarService.update).toHaveBeenCalledWith(objectId, dto);
  });

  it("reicht die ObjectId bei remove unverändert als String weiter", () => {
    controller.remove(objectId);
    expect(ofTheDayCalendarService.remove).toHaveBeenCalledWith(objectId);
  });
});
