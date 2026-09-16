import { EntsorgerService } from "./entsorger.service";
import { EntsorgerStatistikService } from "./entsorger-statistik.service";

/**
 * Charakterisierungstests für die geografische Auswertung der Entsorger
 * vor der Entflechtung aus dem EntsorgerService (Ticket #6).
 */

const query = (value: unknown) => {
  const chain: any = {};
  chain.select = jest.fn(() => chain);
  chain.skip = jest.fn(() => chain);
  chain.limit = jest.fn(() => chain);
  chain.exec = jest.fn().mockResolvedValue(value);
  chain.then = (resolve: any, reject: any) =>
    Promise.resolve(value).then(resolve, reject);
  return chain;
};

const entsorgerIn = (bundesland: string, stadt?: string, plz?: string) => ({
  private: false,
  firmendaten: { bundesland, stadt, postleitzahl: plz },
  entsorgerdaten: {},
});

describe("Entsorger-Statistik (Charakterisierung)", () => {
  let entsorgerModel: any;
  let service: EntsorgerService;
  let statistikService: EntsorgerStatistikService;

  beforeEach(() => {
    jest.clearAllMocks();
    entsorgerModel = {
      find: jest.fn(() => query([])),
      countDocuments: jest.fn(() => query(0)),
    };
    service = new EntsorgerService(entsorgerModel);
    statistikService = new EntsorgerStatistikService(entsorgerModel);
  });

  describe("getGemeindenForBundesland", () => {
    it("fragt nur Entsorger des gesuchten Bundeslandes ab", async () => {
      await statistikService.getGemeindenForBundesland("Bayern");

      expect(entsorgerModel.find).toHaveBeenCalledWith({
        "firmendaten.bundesland": "Bayern",
      });
    });

    it("aggregiert Städte mit Anzahl und Postleitzahl", async () => {
      entsorgerModel.find.mockReturnValue(
        query([
          entsorgerIn("Bayern", "München", "80331"),
          entsorgerIn("Bayern", "München", "80331"),
          entsorgerIn("Bayern", "Nürnberg", "90402"),
        ])
      );

      expect(await statistikService.getGemeindenForBundesland("Bayern")).toEqual([
        { name: "München", value: 2, postleitzahl: "80331" },
        { name: "Nürnberg", value: 1, postleitzahl: "90402" },
      ]);
    });

    it("überspringt Einträge ohne Stadt oder Postleitzahl", async () => {
      entsorgerModel.find.mockReturnValue(
        query([entsorgerIn("Bayern", "München", undefined)])
      );

      expect(await statistikService.getGemeindenForBundesland("Bayern")).toEqual([]);
    });
  });

  describe("Bundesländerzahlen", () => {
    it("liefert über filterAndPaginate alle 16 Bundesländer mit Trefferzahl", async () => {
      entsorgerModel.find.mockReturnValue(
        query([entsorgerIn("Bayern"), entsorgerIn("Bayern"), entsorgerIn("Hessen")])
      );
      entsorgerModel.countDocuments.mockReturnValue(query(3));

      const result: any = await service.filterAndPaginate({} as any, {
        pageSize: 10,
        currentPage: 1,
      } as any);

      const verteilung = result.numberOfEntsorgerByBundesland;
      expect(verteilung).toHaveLength(16);
      expect(verteilung[0].name).toBe("Baden-Württemberg");
      expect(verteilung.find((b: any) => b.name === "Bayern").value).toBe(2);
      expect(verteilung.find((b: any) => b.name === "Hessen").value).toBe(1);
    });
  });
});
