import { InseratStatistikService } from "./inserat-statistik.service";

/**
 * Charakterisierungstests für die geografische Auswertung der Inserate
 * (Bundesländer-/Gemeindenzahlen) vor der Entflechtung aus dem
 * InseratService (Ticket #6).
 */

const query = (value: unknown) => {
  const chain: any = {};
  chain.select = jest.fn(() => chain);
  chain.exec = jest.fn().mockResolvedValue(value);
  return chain;
};

const inseratIn = (bundesland: string, gemeinde?: string, plz?: string) => ({
  inseratStandort: {
    standort_Bundesland: bundesland,
    standort_Gemeinde: gemeinde,
    standort_Postleitzahl: plz,
  },
});

describe("Inserat-Statistik (Charakterisierung)", () => {
  let inseratModel: any;
  let service: InseratStatistikService;

  beforeEach(() => {
    jest.clearAllMocks();
    inseratModel = { find: jest.fn(() => query([])) };
    service = new InseratStatistikService(inseratModel);
  });

  describe("getBundeslaenderAnzahl", () => {
    it("liefert alle 16 Bundesländer in fester Reihenfolge", async () => {
      const result = await service.getBundeslaenderAnzahl();

      expect(result).toHaveLength(16);
      expect(result[0].name).toBe("Baden-Württemberg");
      expect(result[15].name).toBe("Thüringen");
      expect(result.every((b) => b.value === 0)).toBe(true);
    });

    it("zählt Inserate je Bundesland und ignoriert unbekannte Bundesländer", async () => {
      inseratModel.find.mockReturnValue(
        query([
          inseratIn("Bayern"),
          inseratIn("Bayern"),
          inseratIn("Hessen"),
          inseratIn("Tirol"),
        ])
      );

      const result = await service.getBundeslaenderAnzahl();

      expect(result.find((b) => b.name === "Bayern").value).toBe(2);
      expect(result.find((b) => b.name === "Hessen").value).toBe(1);
      expect(result.reduce((sum, b) => sum + b.value, 0)).toBe(3);
    });
  });

  describe("getGemeindenForBundesland", () => {
    it("fragt nur Inserate des gesuchten Bundeslandes ab", async () => {
      await service.getGemeindenForBundesland("Bayern");

      expect(inseratModel.find).toHaveBeenCalledWith({
        "inseratStandort.standort_Bundesland": "Bayern",
      });
    });

    it("aggregiert Gemeinden mit Anzahl und Postleitzahl", async () => {
      inseratModel.find.mockReturnValue(
        query([
          inseratIn("Bayern", "München", "80331"),
          inseratIn("Bayern", "München", "80331"),
          inseratIn("Bayern", "Nürnberg", "90402"),
        ])
      );

      const result = await service.getGemeindenForBundesland("Bayern");

      expect(result).toEqual([
        { name: "München", value: 2, postleitzahl: "80331" },
        { name: "Nürnberg", value: 1, postleitzahl: "90402" },
      ]);
    });

    it("überspringt Inserate ohne Gemeinde oder Postleitzahl", async () => {
      inseratModel.find.mockReturnValue(
        query([
          inseratIn("Bayern", "München", undefined),
          inseratIn("Bayern", undefined, "90402"),
        ])
      );

      expect(await service.getGemeindenForBundesland("Bayern")).toEqual([]);
    });
  });
});
