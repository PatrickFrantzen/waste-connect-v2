import { WasteOfTheDayService } from "./waste-of-the-day.service";

/**
 * Charakterisierungstests für die Auswahl des "Waste of the Day" vor der
 * Entflechtung aus dem OfTheDayCalendarService (Ticket #6).
 */

const query = (value: unknown) => {
  const chain: any = {};
  chain.select = jest.fn(() => chain);
  chain.skip = jest.fn(() => chain);
  chain.exec = jest.fn().mockResolvedValue(value);
  chain.then = (resolve: any, reject: any) =>
    Promise.resolve(value).then(resolve, reject);
  return chain;
};

const heuteUTC = () => {
  const heute = new Date();
  return new Date(
    Date.UTC(heute.getFullYear(), heute.getMonth(), heute.getDate())
  );
};

describe("Waste of the Day (Charakterisierung)", () => {
  let calendarModel: any;
  let inseratModel: any;
  let inseratService: any;
  let service: WasteOfTheDayService;

  beforeEach(() => {
    jest.clearAllMocks();
    calendarModel = {
      findOne: jest.fn(() => query(null)),
      find: jest.fn(() => query([])),
      updateOne: jest.fn(),
      aggregate: jest.fn(),
    };
    inseratModel = {
      findById: jest.fn(() => query({ _id: "gebuchtes-inserat" })),
      findOne: jest.fn(() => query({ _id: "zufalls-inserat" })),
      countDocuments: jest.fn(() => query(10)),
    };
    inseratService = {
      modifyPrivateInserate: jest.fn((inserate) => inserate),
    };

    service = new WasteOfTheDayService(
      calendarModel,
      inseratModel,
      inseratService
    );
  });

  it("liefert das für heute freigegebene Inserat", async () => {
    calendarModel.findOne.mockReturnValue(
      query({
        blockedDays: [
          {
            day: heuteUTC(),
            inseratID: "gebuchtes-inserat",
            freigegeben: true,
          },
        ],
      })
    );

    const inserat: any = await service.getWasteOfTheDay();

    expect(inseratModel.findById).toHaveBeenCalledWith("gebuchtes-inserat");
    expect(inserat._id).toBe("gebuchtes-inserat");
    expect(inseratService.modifyPrivateInserate).toHaveBeenCalled();
  });

  it("fällt auf ein zufälliges Inserat zurück, wenn es keine Buchung gibt", async () => {
    const inserat: any = await service.getWasteOfTheDay();

    expect(inserat._id).toBe("zufalls-inserat");
  });

  it("fällt auf ein zufälliges Inserat zurück, wenn der Tag nicht freigegeben ist", async () => {
    calendarModel.findOne.mockReturnValue(
      query({
        blockedDays: [
          {
            day: heuteUTC(),
            inseratID: "gebuchtes-inserat",
            freigegeben: false,
          },
        ],
      })
    );

    const inserat: any = await service.getWasteOfTheDay();

    expect(inserat._id).toBe("zufalls-inserat");
  });

  it("fällt bei einem Datenbankfehler auf ein zufälliges Inserat zurück", async () => {
    jest.spyOn(console, "error").mockImplementation(() => undefined);
    calendarModel.findOne.mockImplementation(() => {
      throw new Error("db kaputt");
    });

    const inserat: any = await service.getWasteOfTheDay();

    expect(inserat._id).toBe("zufalls-inserat");
  });

  it("zieht das Zufallsinserat aus der Gesamtzahl der Inserate", async () => {
    const chain = query({ _id: "zufalls-inserat" });
    inseratModel.findOne.mockReturnValue(chain);
    jest.spyOn(Math, "random").mockReturnValue(0.5);

    await service.getRandomInserat();

    expect(chain.skip).toHaveBeenCalledWith(5);
    expect(inseratService.modifyPrivateInserate).toHaveBeenCalled();
  });
});
