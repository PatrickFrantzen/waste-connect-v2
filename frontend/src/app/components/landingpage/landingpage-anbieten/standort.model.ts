export interface Bundesland {
    key: string,
    name: string
    seatOfGovernment: string
}

export interface Gemeinde {
    association: {
        key: string, //"07137",
        name: string, //"Bendorf, Stadt",
        type: string, // "None"
      },
      district: {
        key: string, //"07137",
        name: string, //"Mayen-Koblenz",
        type: string, //"None"
      },
      federalState: {
        key: string, //"07",
        name: string, //"Rheinland-Pfalz"
      },
      governmentRegion: {
        key: string, //"071",
        name: string, // "früher: Reg.-Bez. Koblenz"
      },
      key: string, //"07137203",
      multiplePostalCodes: boolean, //true / false
      name: string, //"Bendorf, Stadt",
      postalCode: string, //"string",
      type: string, //"None"
    }

export interface BundeslandByInserate { 
    name: string,
    value: number
}

export interface GemeindeByBundesland {
  name: string,
  value: number
  postleitzahl: string
}