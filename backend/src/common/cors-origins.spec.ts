import { STANDARD_CORS_ORIGINS, parseCorsOrigins } from "./cors-origins";

describe("parseCorsOrigins", () => {
  it("zerlegt eine kommagetrennte Liste und trimmt Leerzeichen", () => {
    expect(
      parseCorsOrigins("https://waste-connect.de, https://www.waste-connect.de")
    ).toEqual(["https://waste-connect.de", "https://www.waste-connect.de"]);
  });

  it("faellt ohne gesetzte Variable auf die lokale Entwicklung zurueck", () => {
    expect(parseCorsOrigins(undefined)).toEqual(STANDARD_CORS_ORIGINS);
    expect(parseCorsOrigins("")).toEqual(STANDARD_CORS_ORIGINS);
    expect(parseCorsOrigins("  ,  ")).toEqual(STANDARD_CORS_ORIGINS);
  });
});
