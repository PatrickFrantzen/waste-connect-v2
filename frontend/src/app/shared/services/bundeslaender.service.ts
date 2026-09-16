import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BundeslaenderService {
  constructor() {
  }

  getGemeindeByBundeslandID(
    key: string
  ): { name: string; postalCode: string }[]
   {
    const objects = this.data[key as keyof typeof this.data] || [];
    return objects.map((obj: { name: string; postalCode: string }) => ({
      name: obj.name,
      postalCode: obj.postalCode,
    }));
  }


  private data = {
    "01": [
      {
        "name": "Appen",
        "postalCode": "25482"
      },
      {
        "name": "Quickborn",
        "postalCode": "25451"
      },
      {
        "name": "Nahe",
        "postalCode": "23866"
      },
      {
        "name": "Lütjensee",
        "postalCode": "22952"
      },
      {
        "name": "Zarpen",
        "postalCode": "23619"
      },
      {
        "name": "Risum-Lindholm, Stedesand",
        "postalCode": "25920"
      },
      {
        "name": "Neuenkirchen",
        "postalCode": "25792"
      },
      {
        "name": "Ladelund",
        "postalCode": "25926"
      },
      {
        "name": "Behrendorf, Bondelum",
        "postalCode": "25850"
      },
      {
        "name": "Eggstedt",
        "postalCode": "25721"
      },
      {
        "name": "Brokdorf",
        "postalCode": "25576"
      },
      {
        "name": "Hanerau-Hademarschen, Seefeld u.a.",
        "postalCode": "25557"
      },
      {
        "name": "Wewelsfleth",
        "postalCode": "25599"
      },
      {
        "name": "Wrohm",
        "postalCode": "25799"
      },
      {
        "name": "Lübeck",
        "postalCode": "23552"
      },
      {
        "name": "Hohenaspe",
        "postalCode": "25582"
      },
      {
        "name": "Mittelangeln",
        "postalCode": "24986"
      },
      {
        "name": "Hetlingen",
        "postalCode": "25491"
      },
      {
        "name": "Fockbek",
        "postalCode": "24787"
      },
      {
        "name": "Brodersby, Goltoft",
        "postalCode": "24864"
      },
      {
        "name": "Steinfeld",
        "postalCode": "24888"
      },
      {
        "name": "Emkendorf",
        "postalCode": "24802"
      },
      {
        "name": "Hemdingen",
        "postalCode": "25485"
      },
      {
        "name": "Halstenbek",
        "postalCode": "25469"
      },
      {
        "name": "Holzdorf",
        "postalCode": "24364"
      },
      {
        "name": "Kaltenkirchen",
        "postalCode": "24568"
      },
      {
        "name": "Flintbek",
        "postalCode": "24220"
      },
      {
        "name": "Rickling",
        "postalCode": "24635"
      },
      {
        "name": "Kirchbarkau",
        "postalCode": "24245"
      },
      {
        "name": "Trappenkamp",
        "postalCode": "24610"
      },
      {
        "name": "Kuddewörde",
        "postalCode": "22958"
      },
      {
        "name": "Grönwohld",
        "postalCode": "22956"
      },
      {
        "name": "Erfde",
        "postalCode": "24803"
      },
      {
        "name": "Silberstedt, Schwittschau",
        "postalCode": "24887"
      },
      {
        "name": "Herzhorn, Kamerlanderdeich",
        "postalCode": "25379"
      },
      {
        "name": "Glücksburg, Munkbrarup",
        "postalCode": "24960"
      },
      {
        "name": "Wees",
        "postalCode": "24999"
      },
      {
        "name": "Hohenwestedt",
        "postalCode": "24594"
      },
      {
        "name": "Tolk, Twedt",
        "postalCode": "24894"
      },
      {
        "name": "Blekendorf",
        "postalCode": "24327"
      },
      {
        "name": "Gudow",
        "postalCode": "23899"
      },
      {
        "name": "Taarstedt",
        "postalCode": "24893"
      },
      {
        "name": "Barmstedt",
        "postalCode": "25355"
      },
      {
        "name": "Holtsee",
        "postalCode": "24363"
      },
      {
        "name": "Ellerbek",
        "postalCode": "25474"
      },
      {
        "name": "Struvenhütten",
        "postalCode": "24643"
      },
      {
        "name": "Siek",
        "postalCode": "22962"
      },
      {
        "name": "Rohlstorf",
        "postalCode": "23821"
      },
      {
        "name": "Geschendorf",
        "postalCode": "23815"
      },
      {
        "name": "Niebüll",
        "postalCode": "25899"
      },
      {
        "name": "Habel, Gröde",
        "postalCode": "25869"
      },
      {
        "name": "Büsum",
        "postalCode": "25761"
      },
      {
        "name": "Sankt Annen, Rehm-Flehde-Bargen",
        "postalCode": "25776"
      },
      {
        "name": "Medelby",
        "postalCode": "24994"
      },
      {
        "name": "Groß Rheide",
        "postalCode": "24872"
      },
      {
        "name": "Beringstedt",
        "postalCode": "25575"
      },
      {
        "name": "Büdelsdorf, Rickert",
        "postalCode": "24782"
      },
      {
        "name": "Klein Offenseth-Sparrieshoop",
        "postalCode": "25365"
      },
      {
        "name": "Felde",
        "postalCode": "24242"
      },
      {
        "name": "Rabenkirchen-Faulück",
        "postalCode": "24407"
      },
      {
        "name": "Norderstedt",
        "postalCode": "22848"
      },
      {
        "name": "Kisdorf",
        "postalCode": "24629"
      },
      {
        "name": "Schillsdorf",
        "postalCode": "24637"
      },
      {
        "name": "Wankendorf",
        "postalCode": "24601"
      },
      {
        "name": "Reinbek",
        "postalCode": "21465"
      },
      {
        "name": "Hoisdorf",
        "postalCode": "22955"
      },
      {
        "name": "Kollow",
        "postalCode": "21527"
      },
      {
        "name": "Linden, Barkenholm",
        "postalCode": "25791"
      },
      {
        "name": "Schafstedt, Weidenhof, Bornholt",
        "postalCode": "25725"
      },
      {
        "name": "Flensburg",
        "postalCode": "24941"
      },
      {
        "name": "Seestermühe",
        "postalCode": "25371"
      },
      {
        "name": "Kiebitzreihe",
        "postalCode": "25368"
      },
      {
        "name": "Ahrenshöft",
        "postalCode": "25853"
      },
      {
        "name": "Horstedt",
        "postalCode": "25860"
      },
      {
        "name": "Rantrum",
        "postalCode": "25873"
      },
      {
        "name": "Treia, Ahrenviölfeld",
        "postalCode": "24896"
      },
      {
        "name": "Bad Bramstedt",
        "postalCode": "24576"
      },
      {
        "name": "Loose",
        "postalCode": "24366"
      },
      {
        "name": "Melsdorf",
        "postalCode": "24109"
      },
      {
        "name": "Norderstedt",
        "postalCode": "22851"
      },
      {
        "name": "Großharrie",
        "postalCode": "24625"
      },
      {
        "name": "Kiel",
        "postalCode": "24146"
      },
      {
        "name": "Nehms",
        "postalCode": "23813"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Lasbek",
        "postalCode": "23847"
      },
      {
        "name": "Lütjenburg",
        "postalCode": "24321"
      },
      {
        "name": "Pronstorf",
        "postalCode": "23820"
      },
      {
        "name": "Ziethen",
        "postalCode": "23911"
      },
      {
        "name": "Hamdorf",
        "postalCode": "24805"
      },
      {
        "name": "Fleckeby u.a.",
        "postalCode": "24357"
      },
      {
        "name": "Lütjenwestedt, Tackesdorf",
        "postalCode": "25585"
      },
      {
        "name": "Jagel, Lottorf",
        "postalCode": "24878"
      },
      {
        "name": "Schenefeld",
        "postalCode": "22869"
      },
      {
        "name": "Flintbek",
        "postalCode": "24220"
      },
      {
        "name": "Kiel",
        "postalCode": "24105"
      },
      {
        "name": "Probsteierhagen",
        "postalCode": "24253"
      },
      {
        "name": "Fargau-Pratjau",
        "postalCode": "24256"
      },
      {
        "name": "Hohenhorn",
        "postalCode": "21526"
      },
      {
        "name": "Reinfeld (Holstein)",
        "postalCode": "23858"
      },
      {
        "name": "Bosau",
        "postalCode": "23715"
      },
      {
        "name": "Neufeld, Schmedeswurth",
        "postalCode": "25724"
      },
      {
        "name": "Brunsbüttel",
        "postalCode": "25541"
      },
      {
        "name": "Sankt Margarethen",
        "postalCode": "25572"
      },
      {
        "name": "Glückstadt",
        "postalCode": "25348"
      },
      {
        "name": "Großenbrode",
        "postalCode": "23775"
      },
      {
        "name": "Bordelum",
        "postalCode": "25852"
      },
      {
        "name": "Dörpstedt",
        "postalCode": "24869"
      },
      {
        "name": "Meggerdorf, Friedrichsholm, Friedrichsgraben u.a.",
        "postalCode": "24799"
      },
      {
        "name": "Flensburg, Tastrup",
        "postalCode": "24943"
      },
      {
        "name": "Krempe, Grevenkop, Süderau, Muchelndorf",
        "postalCode": "25361"
      },
      {
        "name": "Münsterdorf",
        "postalCode": "25587"
      },
      {
        "name": "Lägerdorf",
        "postalCode": "25566"
      },
      {
        "name": "Böel",
        "postalCode": "24401"
      },
      {
        "name": "Waabs",
        "postalCode": "24369"
      },
      {
        "name": "Neumünster",
        "postalCode": "24537"
      },
      {
        "name": "Schmalfeld",
        "postalCode": "24640"
      },
      {
        "name": "Neumünster",
        "postalCode": "24536"
      },
      {
        "name": "Kronshagen",
        "postalCode": "24119"
      },
      {
        "name": "Börnhöved",
        "postalCode": "24619"
      },
      {
        "name": "Kiel",
        "postalCode": "24149"
      },
      {
        "name": "Witzhave",
        "postalCode": "22969"
      },
      {
        "name": "Geesthacht",
        "postalCode": "21502"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Sandesneben u.a.",
        "postalCode": "23898"
      },
      {
        "name": "Grebin",
        "postalCode": "24329"
      },
      {
        "name": "Osterrönfeld",
        "postalCode": "24783"
      },
      {
        "name": "Arnis, Marienhof",
        "postalCode": "24399"
      },
      {
        "name": "Wahlstedt",
        "postalCode": "23812"
      },
      {
        "name": "Kiel",
        "postalCode": "24113"
      },
      {
        "name": "Schmalensee",
        "postalCode": "24638"
      },
      {
        "name": "Selent",
        "postalCode": "24238"
      },
      {
        "name": "Trittau",
        "postalCode": "22946"
      },
      {
        "name": "Lunden",
        "postalCode": "25774"
      },
      {
        "name": "Mildstedt",
        "postalCode": "25866"
      },
      {
        "name": "Nordhastedt",
        "postalCode": "25785"
      },
      {
        "name": "Dannewerk",
        "postalCode": "24867"
      },
      {
        "name": "Todenbüttel",
        "postalCode": "24819"
      },
      {
        "name": "Elmshorn",
        "postalCode": "25336"
      },
      {
        "name": "Kollmar, Pagensand",
        "postalCode": "25377"
      },
      {
        "name": "Nordstrand, Elisabeth-Sophien-Koog, Südfall",
        "postalCode": "25845"
      },
      {
        "name": "Ulsnis",
        "postalCode": "24897"
      },
      {
        "name": "Borstel-Hohenraden",
        "postalCode": "25494"
      },
      {
        "name": "Bordesholm",
        "postalCode": "24582"
      },
      {
        "name": "Kiel",
        "postalCode": "24116"
      },
      {
        "name": "Hamburg",
        "postalCode": "22145"
      },
      {
        "name": "Schönkirchen",
        "postalCode": "24232"
      },
      {
        "name": "Timmendorfer Strand",
        "postalCode": "23669"
      },
      {
        "name": "Grube",
        "postalCode": "23749"
      },
      {
        "name": "Kellenhusen",
        "postalCode": "23746"
      },
      {
        "name": "Dollerup",
        "postalCode": "24989"
      },
      {
        "name": "Groß Wittensee",
        "postalCode": "24361"
      },
      {
        "name": "Sterup",
        "postalCode": "24996"
      },
      {
        "name": "Alveslohe",
        "postalCode": "25486"
      },
      {
        "name": "Gettorf u.a.",
        "postalCode": "24214"
      },
      {
        "name": "Norderstedt",
        "postalCode": "22846"
      },
      {
        "name": "Norderstedt",
        "postalCode": "22844"
      },
      {
        "name": "Maasholm, Schleimünde",
        "postalCode": "24404"
      },
      {
        "name": "Seth",
        "postalCode": "23845"
      },
      {
        "name": "Leezen",
        "postalCode": "23816"
      },
      {
        "name": "Laboe",
        "postalCode": "24235"
      },
      {
        "name": "Hohenfelde",
        "postalCode": "24257"
      },
      {
        "name": "Malente, Kirchnüchel",
        "postalCode": "23714"
      },
      {
        "name": "Habel, Gröde",
        "postalCode": "25869"
      },
      {
        "name": "Meldorf",
        "postalCode": "25704"
      },
      {
        "name": "Pahlen",
        "postalCode": "25794"
      },
      {
        "name": "Klein Wesenberg",
        "postalCode": "23860"
      },
      {
        "name": "Krummesse, Klempau",
        "postalCode": "23628"
      },
      {
        "name": "Breitenfelde, Lankau",
        "postalCode": "23881"
      },
      {
        "name": "Böklund u.a.",
        "postalCode": "24860"
      },
      {
        "name": "Fehmarn",
        "postalCode": "23769"
      },
      {
        "name": "Borgstedt",
        "postalCode": "24794"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Eutin, Süsel",
        "postalCode": "23701"
      },
      {
        "name": "Lübeck",
        "postalCode": "23570"
      },
      {
        "name": "Heiligenhafen",
        "postalCode": "23774"
      },
      {
        "name": "Kollmar, Pagensand",
        "postalCode": "25377"
      },
      {
        "name": "Selk, Geltdorf, Hahnekrug",
        "postalCode": "24884"
      },
      {
        "name": "Seester",
        "postalCode": "25370"
      },
      {
        "name": "Sörup",
        "postalCode": "24966"
      },
      {
        "name": "Tönning",
        "postalCode": "25832"
      },
      {
        "name": "Viöl",
        "postalCode": "25884"
      },
      {
        "name": "Ascheffel",
        "postalCode": "24358"
      },
      {
        "name": "Steinberg, Steinbergkirche",
        "postalCode": "24972"
      },
      {
        "name": "Eckernförde",
        "postalCode": "24340"
      },
      {
        "name": "Esgrus",
        "postalCode": "24402"
      },
      {
        "name": "Langwedel",
        "postalCode": "24631"
      },
      {
        "name": "Osdorf",
        "postalCode": "24251"
      },
      {
        "name": "Altenholz",
        "postalCode": "24161"
      },
      {
        "name": "Kiel",
        "postalCode": "24147"
      },
      {
        "name": "Plön",
        "postalCode": "24306"
      },
      {
        "name": "Hallig Hooge",
        "postalCode": "25859"
      },
      {
        "name": "Tating, Westerhever, Tümlauer Koog",
        "postalCode": "25881"
      },
      {
        "name": "Friedrichskoog",
        "postalCode": "25718"
      },
      {
        "name": "Barlt, Busenwurth",
        "postalCode": "25719"
      },
      {
        "name": "Albersdorf",
        "postalCode": "25767"
      },
      {
        "name": "Wacken",
        "postalCode": "25596"
      },
      {
        "name": "Lübeck",
        "postalCode": "23558"
      },
      {
        "name": "Ziethen",
        "postalCode": "23911"
      },
      {
        "name": "Stolk",
        "postalCode": "24890"
      },
      {
        "name": "Nübbel",
        "postalCode": "24809"
      },
      {
        "name": "Neustadt",
        "postalCode": "23730"
      },
      {
        "name": "Mohrkirch, Rügge",
        "postalCode": "24405"
      },
      {
        "name": "Nortorf",
        "postalCode": "24589"
      },
      {
        "name": "Neumünster",
        "postalCode": "24536"
      },
      {
        "name": "Norderstedt",
        "postalCode": "22850"
      },
      {
        "name": "Bönebüttel",
        "postalCode": "24620"
      },
      {
        "name": "Kiel",
        "postalCode": "24114"
      },
      {
        "name": "Wensin",
        "postalCode": "23827"
      },
      {
        "name": "Glasau",
        "postalCode": "23719"
      },
      {
        "name": "Neukirchen, Aventoft",
        "postalCode": "25927"
      },
      {
        "name": "Garding, Osterhever, Poppenbüll u.a.",
        "postalCode": "25836"
      },
      {
        "name": "Uelvesbüll, Witzwort",
        "postalCode": "25889"
      },
      {
        "name": "Großenwiehe, Lindewitt",
        "postalCode": "24969"
      },
      {
        "name": "Windbergen",
        "postalCode": "25729"
      },
      {
        "name": "Harrislee",
        "postalCode": "24955"
      },
      {
        "name": "Beidenfleth, Klein Kampen",
        "postalCode": "25573"
      },
      {
        "name": "Hohn",
        "postalCode": "24806"
      },
      {
        "name": "Tetenhusen",
        "postalCode": "24817"
      },
      {
        "name": "Itzehoe",
        "postalCode": "25524"
      },
      {
        "name": "Nübel",
        "postalCode": "24881"
      },
      {
        "name": "Busdorf",
        "postalCode": "24866"
      },
      {
        "name": "Kummerfeld",
        "postalCode": "25495"
      },
      {
        "name": "Gnutz",
        "postalCode": "24622"
      },
      {
        "name": "Warder",
        "postalCode": "24646"
      },
      {
        "name": "Kiel",
        "postalCode": "24107"
      },
      {
        "name": "Neumünster",
        "postalCode": "24534"
      },
      {
        "name": "Mielkendorf",
        "postalCode": "24247"
      },
      {
        "name": "Sievershütten",
        "postalCode": "24641"
      },
      {
        "name": "Ammersbek",
        "postalCode": "22949"
      },
      {
        "name": "Tensfeld",
        "postalCode": "23824"
      },
      {
        "name": "Seedorf",
        "postalCode": "23823"
      },
      {
        "name": "Tellingstedt",
        "postalCode": "25782"
      },
      {
        "name": "Bollingstedt, Jübek",
        "postalCode": "24855"
      },
      {
        "name": "Sarkwitz",
        "postalCode": "23629"
      },
      {
        "name": "Amrum",
        "postalCode": "25946"
      },
      {
        "name": "Helgoland",
        "postalCode": "27498"
      },
      {
        "name": "Hattstedt u.a.",
        "postalCode": "25856"
      },
      {
        "name": "Burg (Dithmarschen)",
        "postalCode": "25712"
      },
      {
        "name": "Holstenniendorf",
        "postalCode": "25584"
      },
      {
        "name": "Meggerdorf, Friedrichsholm, Friedrichsgraben u.a.",
        "postalCode": "24799"
      },
      {
        "name": "Oldenburg in Holstein",
        "postalCode": "23758"
      },
      {
        "name": "Neukirchen",
        "postalCode": "23779"
      },
      {
        "name": "Fehmarn",
        "postalCode": "23769"
      },
      {
        "name": "Brokstedt",
        "postalCode": "24616"
      },
      {
        "name": "Damp",
        "postalCode": "24351"
      },
      {
        "name": "Henstedt-Ulzburg",
        "postalCode": "24558"
      },
      {
        "name": "Bark",
        "postalCode": "23826"
      },
      {
        "name": "Kiel",
        "postalCode": "24118"
      },
      {
        "name": "Reinbek",
        "postalCode": "21465"
      },
      {
        "name": "Havetoft",
        "postalCode": "24873"
      },
      {
        "name": "Dägeling, Neuenbrook",
        "postalCode": "25578"
      },
      {
        "name": "Elmshorn",
        "postalCode": "25335"
      },
      {
        "name": "Hetlingen",
        "postalCode": "25491"
      },
      {
        "name": "Süderoog, Pellworm",
        "postalCode": "25849"
      },
      {
        "name": "Husum, Schwesing u.a.",
        "postalCode": "25813"
      },
      {
        "name": "Schwabstedt",
        "postalCode": "25876"
      },
      {
        "name": "Börm",
        "postalCode": "24863"
      },
      {
        "name": "Aukrug, Wiedenborstel",
        "postalCode": "24613"
      },
      {
        "name": "Schacht-Audorf",
        "postalCode": "24790"
      },
      {
        "name": "Bredenbek",
        "postalCode": "24796"
      },
      {
        "name": "Lentföhrden",
        "postalCode": "24632"
      },
      {
        "name": "Tangstedt",
        "postalCode": "22889"
      },
      {
        "name": "Lauenburg/Elbe",
        "postalCode": "21481"
      },
      {
        "name": "Malente, Kirchnüchel",
        "postalCode": "23714"
      },
      {
        "name": "Bad Schwartau",
        "postalCode": "23611"
      },
      {
        "name": "Lübeck",
        "postalCode": "23564"
      },
      {
        "name": "Wenningstedt-Braderup (Sylt)",
        "postalCode": "25996"
      },
      {
        "name": "Kampen (Sylt)",
        "postalCode": "25999"
      },
      {
        "name": "Horst",
        "postalCode": "25358"
      },
      {
        "name": "Struxdorf, Schnarup-Thumby",
        "postalCode": "24891"
      },
      {
        "name": "Jevenstedt",
        "postalCode": "24808"
      },
      {
        "name": "Föhr",
        "postalCode": "25938"
      },
      {
        "name": "Dellstedt",
        "postalCode": "25786"
      },
      {
        "name": "Aukrug, Wiedenborstel",
        "postalCode": "24613"
      },
      {
        "name": "Tangstedt",
        "postalCode": "25499"
      },
      {
        "name": "Barsbüttel",
        "postalCode": "22885"
      },
      {
        "name": "Kiel",
        "postalCode": "24148"
      },
      {
        "name": "Hamburg",
        "postalCode": "21039"
      },
      {
        "name": "Sülfeld",
        "postalCode": "23867"
      },
      {
        "name": "Bad Segeberg",
        "postalCode": "23795"
      },
      {
        "name": "Seth",
        "postalCode": "23845"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Lübeck",
        "postalCode": "23556"
      },
      {
        "name": "Haseldorf",
        "postalCode": "25489"
      },
      {
        "name": "Rumohr",
        "postalCode": "24254"
      },
      {
        "name": "Großharrie",
        "postalCode": "24625"
      },
      {
        "name": "Kiel Russee",
        "postalCode": "24111"
      },
      {
        "name": "Schwentinetal",
        "postalCode": "24223"
      },
      {
        "name": "Brunstorf",
        "postalCode": "21524"
      },
      {
        "name": "Flensburg, Tastrup",
        "postalCode": "24943"
      },
      {
        "name": "Ottenbüttel",
        "postalCode": "25591"
      },
      {
        "name": "Idstedt",
        "postalCode": "24879"
      },
      {
        "name": "Osterstedt",
        "postalCode": "25590"
      },
      {
        "name": "Heist",
        "postalCode": "25492"
      },
      {
        "name": "Oland",
        "postalCode": "25867"
      },
      {
        "name": "Süderlügum, Braderup u.a.",
        "postalCode": "25923"
      },
      {
        "name": "Nordstrand, Elisabeth-Sophien-Koog, Südfall",
        "postalCode": "25845"
      },
      {
        "name": "Wesselburen",
        "postalCode": "25764"
      },
      {
        "name": "Sankt Annen, Rehm-Flehde-Bargen",
        "postalCode": "25776"
      },
      {
        "name": "Hemmingstedt",
        "postalCode": "25770"
      },
      {
        "name": "Süderhastedt",
        "postalCode": "25727"
      },
      {
        "name": "Wilster",
        "postalCode": "25554"
      },
      {
        "name": "Meggerdorf, Friedrichsholm, Friedrichsgraben u.a.",
        "postalCode": "24799"
      },
      {
        "name": "Schuby",
        "postalCode": "24850"
      },
      {
        "name": "Stockelsdorf",
        "postalCode": "23617"
      },
      {
        "name": "Lübeck St. Lorenz Nord",
        "postalCode": "23554"
      },
      {
        "name": "Handewitt",
        "postalCode": "24976"
      },
      {
        "name": "Flensburg",
        "postalCode": "24939"
      },
      {
        "name": "Wrist",
        "postalCode": "25563"
      },
      {
        "name": "Prisdorf",
        "postalCode": "25497"
      },
      {
        "name": "Rellingen",
        "postalCode": "25462"
      },
      {
        "name": "Kappeln",
        "postalCode": "24376"
      },
      {
        "name": "Glinde",
        "postalCode": "21509"
      },
      {
        "name": "Schwentinental",
        "postalCode": "24222"
      },
      {
        "name": "Ascheberg",
        "postalCode": "24326"
      },
      {
        "name": "Ascheberg",
        "postalCode": "24326"
      },
      {
        "name": "Schönberg (Holstein)",
        "postalCode": "24217"
      },
      {
        "name": "Kröppelshagen-Fahrendorf",
        "postalCode": "21529"
      },
      {
        "name": "Seth",
        "postalCode": "23845"
      },
      {
        "name": "Ahrensbök",
        "postalCode": "23623"
      },
      {
        "name": "Pansdorf",
        "postalCode": "23689"
      },
      {
        "name": "Hörnum (Sylt)",
        "postalCode": "25997"
      },
      {
        "name": "Alt Duvenstedt",
        "postalCode": "24791"
      },
      {
        "name": "Fahrdorf",
        "postalCode": "24857"
      },
      {
        "name": "Kellinghusen",
        "postalCode": "25548"
      },
      {
        "name": "Langeneß",
        "postalCode": "25863"
      },
      {
        "name": "Pinneberg",
        "postalCode": "25421"
      },
      {
        "name": "Wasbek",
        "postalCode": "24647"
      },
      {
        "name": "Timmaspe",
        "postalCode": "24644"
      },
      {
        "name": "Wiemersdorf",
        "postalCode": "24649"
      },
      {
        "name": "Hartenholm",
        "postalCode": "24628"
      },
      {
        "name": "Hamburg, Oststeinbek",
        "postalCode": "22113"
      },
      {
        "name": "Seth",
        "postalCode": "23845"
      },
      {
        "name": "Tangstedt",
        "postalCode": "22889"
      },
      {
        "name": "Trittau",
        "postalCode": "22946"
      },
      {
        "name": "Aumühle",
        "postalCode": "21521"
      },
      {
        "name": "Steinburg",
        "postalCode": "22964"
      },
      {
        "name": "Ratzeburg",
        "postalCode": "23909"
      },
      {
        "name": "Lübeck Schlutup/St. Gertrud",
        "postalCode": "23568"
      },
      {
        "name": "Grömitz",
        "postalCode": "23743"
      },
      {
        "name": "Hamweddel",
        "postalCode": "24816"
      },
      {
        "name": "Tetenbüll",
        "postalCode": "25882"
      },
      {
        "name": "Sankt Michaelisdonn,Gudendorf,Volsemenhusen,Trennewurth",
        "postalCode": "25693"
      },
      {
        "name": "Drage, Seeth",
        "postalCode": "25878"
      },
      {
        "name": "Albersdorf",
        "postalCode": "25767"
      },
      {
        "name": "Vaale",
        "postalCode": "25594"
      },
      {
        "name": "Meggerdorf, Friedrichsholm, Friedrichsgraben u.a.",
        "postalCode": "24799"
      },
      {
        "name": "Kropp u.a.",
        "postalCode": "24848"
      },
      {
        "name": "Barkelsby",
        "postalCode": "24360"
      },
      {
        "name": "Norderstedt",
        "postalCode": "22844"
      },
      {
        "name": "Todendorf",
        "postalCode": "22965"
      },
      {
        "name": "Trittau",
        "postalCode": "22946"
      },
      {
        "name": "Gülzow",
        "postalCode": "21483"
      },
      {
        "name": "Lübeck",
        "postalCode": "23562"
      },
      {
        "name": "Scharbeutz",
        "postalCode": "23683"
      },
      {
        "name": "Flensburg",
        "postalCode": "24944"
      },
      {
        "name": "Husby",
        "postalCode": "24975"
      },
      {
        "name": "Elmshorn",
        "postalCode": "25335"
      },
      {
        "name": "Reher",
        "postalCode": "25593"
      },
      {
        "name": "Sterley",
        "postalCode": "23883"
      },
      {
        "name": "Ratekau",
        "postalCode": "23626"
      },
      {
        "name": "Kiel",
        "postalCode": "24107"
      },
      {
        "name": "Kiel",
        "postalCode": "24145"
      },
      {
        "name": "Elmenhorst",
        "postalCode": "23869"
      },
      {
        "name": "Bad Oldesloe",
        "postalCode": "23843"
      },
      {
        "name": "Großhansdorf",
        "postalCode": "22927"
      },
      {
        "name": "Seth",
        "postalCode": "23845"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Geesthacht",
        "postalCode": "21502"
      },
      {
        "name": "Nordstrand, Elisabeth-Sophien-Koog, Südfall",
        "postalCode": "25845"
      },
      {
        "name": "Eddelak, Averlak, Dingen, Ramhusen",
        "postalCode": "25715"
      },
      {
        "name": "Ostenfeld",
        "postalCode": "25872"
      },
      {
        "name": "Winnert",
        "postalCode": "25887"
      },
      {
        "name": "Jörl",
        "postalCode": "24992"
      },
      {
        "name": "Wanderup",
        "postalCode": "24997"
      },
      {
        "name": "Schaalby, Geelbek",
        "postalCode": "24882"
      },
      {
        "name": "Holm",
        "postalCode": "25488"
      },
      {
        "name": "Elmshorn",
        "postalCode": "25337"
      },
      {
        "name": "Kosel, Rieseby u.a.",
        "postalCode": "24354"
      },
      {
        "name": "Osterby",
        "postalCode": "24367"
      },
      {
        "name": "Brokstedt",
        "postalCode": "24616"
      },
      {
        "name": "Gelting",
        "postalCode": "24395"
      },
      {
        "name": "Neumünster",
        "postalCode": "24539"
      },
      {
        "name": "Groß Kummerfeld",
        "postalCode": "24626"
      },
      {
        "name": "Tangstedt",
        "postalCode": "22889"
      },
      {
        "name": "Dänischenhagen",
        "postalCode": "24229"
      },
      {
        "name": "Kiel",
        "postalCode": "24159"
      },
      {
        "name": "Bargfeld-Stegen",
        "postalCode": "23863"
      },
      {
        "name": "Ahrensburg",
        "postalCode": "22926"
      },
      {
        "name": "Wittenborn",
        "postalCode": "23829"
      },
      {
        "name": "Hoisdorf",
        "postalCode": "22961"
      },
      {
        "name": "Lasbek",
        "postalCode": "23847"
      },
      {
        "name": "Linau",
        "postalCode": "22959"
      },
      {
        "name": "Bredstedt, Breklum u.a.",
        "postalCode": "25821"
      },
      {
        "name": "Oldenswort",
        "postalCode": "25870"
      },
      {
        "name": "Leck",
        "postalCode": "25917"
      },
      {
        "name": "Högel",
        "postalCode": "25858"
      },
      {
        "name": "Haselund",
        "postalCode": "25855"
      },
      {
        "name": "Handewitt",
        "postalCode": "24983"
      },
      {
        "name": "Treia, Ahrenviölfeld",
        "postalCode": "24896"
      },
      {
        "name": "Oeversee",
        "postalCode": "24988"
      },
      {
        "name": "Kremperheide",
        "postalCode": "25569"
      },
      {
        "name": "Helgoland",
        "postalCode": "27498"
      },
      {
        "name": "Großsolt",
        "postalCode": "24991"
      },
      {
        "name": "Hohenlockstedt",
        "postalCode": "25551"
      },
      {
        "name": "Klein Wesenberg",
        "postalCode": "23860"
      },
      {
        "name": "Lübeck",
        "postalCode": "23560"
      },
      {
        "name": "Schönwalde am Bungsberg",
        "postalCode": "23744"
      },
      {
        "name": "Lübeck",
        "postalCode": "23569"
      },
      {
        "name": "Hennstedt",
        "postalCode": "25581"
      },
      {
        "name": "Wrist",
        "postalCode": "25563"
      },
      {
        "name": "Fitzbek",
        "postalCode": "25579"
      },
      {
        "name": "Sehestedt",
        "postalCode": "24814"
      },
      {
        "name": "Stoltebüll",
        "postalCode": "24409"
      },
      {
        "name": "Blumenthal",
        "postalCode": "24241"
      },
      {
        "name": "Börnhöved",
        "postalCode": "24619"
      },
      {
        "name": "Seth",
        "postalCode": "23845"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Fuhlenhagen",
        "postalCode": "21493"
      },
      {
        "name": "Hallig Hooge",
        "postalCode": "25859"
      },
      {
        "name": "Süderoog, Pellworm",
        "postalCode": "25849"
      },
      {
        "name": "Kronprinzenkoog, Marne u.a.",
        "postalCode": "25709"
      },
      {
        "name": "Hennstedt",
        "postalCode": "25779"
      },
      {
        "name": "Joldelund",
        "postalCode": "25862"
      },
      {
        "name": "Stapel",
        "postalCode": "25879"
      },
      {
        "name": "Delve",
        "postalCode": "25788"
      },
      {
        "name": "Eggebek, Langstedt, Sollerup, Süderhackstedt",
        "postalCode": "24852"
      },
      {
        "name": "Borsfleth",
        "postalCode": "25376"
      },
      {
        "name": "Oldendorf",
        "postalCode": "25588"
      },
      {
        "name": "Woltersdorf, Müssen u.a.",
        "postalCode": "21516"
      },
      {
        "name": "Berkenthin",
        "postalCode": "23919"
      },
      {
        "name": "Lübeck",
        "postalCode": "23566"
      },
      {
        "name": "Breiholz, Tackesdorf-Nord",
        "postalCode": "24797"
      },
      {
        "name": "Schleswig",
        "postalCode": "24837"
      },
      {
        "name": "Langenhorn, Ockholm u.a.",
        "postalCode": "25842"
      },
      {
        "name": "Wöhrden",
        "postalCode": "25797"
      },
      {
        "name": "Weddingstedt",
        "postalCode": "25795"
      },
      {
        "name": "Schenefeld",
        "postalCode": "25560"
      },
      {
        "name": "Dahme",
        "postalCode": "23747"
      },
      {
        "name": "Bargteheide, Delingsdorf u.a.",
        "postalCode": "22941"
      },
      {
        "name": "Heikendorf",
        "postalCode": "24226"
      },
      {
        "name": "Woltersdorf, Müssen u.a.",
        "postalCode": "21516"
      },
      {
        "name": "Scharbeutz, Süsel",
        "postalCode": "23684"
      },
      {
        "name": "Groß Grönau",
        "postalCode": "23627"
      },
      {
        "name": "Heringsdorf",
        "postalCode": "23777"
      },
      {
        "name": "Sylt",
        "postalCode": "25980"
      },
      {
        "name": "Brande-Hörnerkirchen",
        "postalCode": "25364"
      },
      {
        "name": "Westensee",
        "postalCode": "24259"
      },
      {
        "name": "Achterwehr",
        "postalCode": "24239"
      },
      {
        "name": "Boostedt",
        "postalCode": "24598"
      },
      {
        "name": "Melsdorf",
        "postalCode": "24109"
      },
      {
        "name": "Felm",
        "postalCode": "24244"
      },
      {
        "name": "Kiel",
        "postalCode": "24106"
      },
      {
        "name": "Kiel",
        "postalCode": "24103"
      },
      {
        "name": "Preetz",
        "postalCode": "24211"
      },
      {
        "name": "Hamburg, Oststeinbek",
        "postalCode": "22113"
      },
      {
        "name": "Trittau",
        "postalCode": "22946"
      },
      {
        "name": "Neuengörs",
        "postalCode": "23818"
      },
      {
        "name": "Sankt Peter-Ording",
        "postalCode": "25826"
      },
      {
        "name": "Bredstedt, Breklum u.a.",
        "postalCode": "25821"
      },
      {
        "name": "Schafflund, Meyn u.a.",
        "postalCode": "24980"
      },
      {
        "name": "Wester-Ohrstedt",
        "postalCode": "25885"
      },
      {
        "name": "Schafstedt, Weidenhof, Bornholt",
        "postalCode": "25725"
      },
      {
        "name": "Breitenfelde, Lankau",
        "postalCode": "23881"
      },
      {
        "name": "Bröthen",
        "postalCode": "21514"
      },
      {
        "name": "Rendsburg",
        "postalCode": "24768"
      },
      {
        "name": "Nusse",
        "postalCode": "23896"
      },
      {
        "name": "Mölln",
        "postalCode": "23879"
      },
      {
        "name": "Kasseedorf",
        "postalCode": "23717"
      },
      {
        "name": "Lensahn",
        "postalCode": "23738"
      },
      {
        "name": "Rodenäs",
        "postalCode": "25924"
      },
      {
        "name": "Friedrichskoog",
        "postalCode": "25718"
      },
      {
        "name": "Heide u.a.",
        "postalCode": "25746"
      },
      {
        "name": "Löwenstedt",
        "postalCode": "25864"
      },
      {
        "name": "Wohlde",
        "postalCode": "24899"
      },
      {
        "name": "Tarp",
        "postalCode": "24963"
      },
      {
        "name": "Ellingstedt",
        "postalCode": "24870"
      },
      {
        "name": "Sieverstedt",
        "postalCode": "24885"
      },
      {
        "name": "Wedel",
        "postalCode": "22880"
      },
      {
        "name": "Bargstedt, Brammer, Oldenbüttel",
        "postalCode": "24793"
      },
      {
        "name": "Rabenkirchen-Faulück",
        "postalCode": "24407"
      },
      {
        "name": "Großenaspe",
        "postalCode": "24623"
      },
      {
        "name": "Kiel",
        "postalCode": "24113"
      },
      {
        "name": "Bargfeld-Stegen",
        "postalCode": "23863"
      },
      {
        "name": "Aumühle",
        "postalCode": "21521"
      },
      {
        "name": "Tremsbüttel",
        "postalCode": "22967"
      },
      {
        "name": "List",
        "postalCode": "25992"
      },
      {
        "name": "Süderbrarup",
        "postalCode": "24392"
      },
      {
        "name": "Ellerhoop",
        "postalCode": "25373"
      },
      {
        "name": "Padenstedt",
        "postalCode": "24634"
      },
      {
        "name": "Ellerau",
        "postalCode": "25479"
      },
      {
        "name": "Dörphof",
        "postalCode": "24398"
      },
      {
        "name": "Nettelsee",
        "postalCode": "24250"
      },
      {
        "name": "Kiel",
        "postalCode": "24143"
      },
      {
        "name": "Mönkeberg",
        "postalCode": "24248"
      },
      {
        "name": "Hamfelde, Kasseburg, Köthel, Rausdorf, Schönberg",
        "postalCode": "22929"
      },
      {
        "name": "Friedrichstadt, Koldenbüttel u.a.",
        "postalCode": "25840"
      },
      {
        "name": "Bergenhusen",
        "postalCode": "24861"
      },
      {
        "name": "Hollingstedt",
        "postalCode": "24876"
      },
      {
        "name": "Kropp u.a.",
        "postalCode": "24848"
      },
      {
        "name": "Flensburg",
        "postalCode": "24937"
      },
      {
        "name": "Elsdorf-Westermühlen",
        "postalCode": "24800"
      },
      {
        "name": "Owschlag u.a.",
        "postalCode": "24811"
      },
      {
        "name": "Langballig",
        "postalCode": "24977"
      },
      {
        "name": "Uetersen",
        "postalCode": "25436"
      },
      {
        "name": "Westermoor",
        "postalCode": "25597"
      },
      {
        "name": "Schülp bei Rendsburg",
        "postalCode": "24813"
      },
      {
        "name": "Westerrönfeld",
        "postalCode": "24784"
      }
    ],
    "02":
    [
      {
        "name": "Hamburg",
        "postalCode": "22609"
      },
      {
        "name": "Hamburg",
        "postalCode": "20354"
      },
      {
        "name": "Hamburg",
        "postalCode": "22089"
      },
      {
        "name": "Hamburg",
        "postalCode": "22043"
      },
      {
        "name": "Hamburg",
        "postalCode": "22119"
      },
      {
        "name": "Hamburg",
        "postalCode": "22765"
      },
      {
        "name": "Hamburg",
        "postalCode": "21109"
      },
      {
        "name": "Hamburg",
        "postalCode": "22179"
      },
      {
        "name": "Hamburg",
        "postalCode": "22397"
      },
      {
        "name": "Hamburg",
        "postalCode": "22457"
      },
      {
        "name": "Hamburg",
        "postalCode": "20255"
      },
      {
        "name": "Hamburg",
        "postalCode": "20357"
      },
      {
        "name": "Hamburg",
        "postalCode": "20149"
      },
      {
        "name": "Hamburg",
        "postalCode": "21037"
      },
      {
        "name": "Hamburg",
        "postalCode": "21029"
      },
      {
        "name": "Neuwerk",
        "postalCode": "27499"
      },
      {
        "name": "Hamburg",
        "postalCode": "22609"
      },
      {
        "name": "Hamburg",
        "postalCode": "22769"
      },
      {
        "name": "Hamburg",
        "postalCode": "22117"
      },
      {
        "name": "Hamburg",
        "postalCode": "20457"
      },
      {
        "name": "Hamburg",
        "postalCode": "21107"
      },
      {
        "name": "Hamburg",
        "postalCode": "20251"
      },
      {
        "name": "Hamburg",
        "postalCode": "20537"
      },
      {
        "name": "Hamburg",
        "postalCode": "22393"
      },
      {
        "name": "Hamburg",
        "postalCode": "21147"
      },
      {
        "name": "Hamburg",
        "postalCode": "22547"
      },
      {
        "name": "Hamburg",
        "postalCode": "21073"
      },
      {
        "name": "Hamburg",
        "postalCode": "22453"
      },
      {
        "name": "Hamburg",
        "postalCode": "22085"
      },
      {
        "name": "Hamburg",
        "postalCode": "22399"
      },
      {
        "name": "Hamburg",
        "postalCode": "21033"
      },
      {
        "name": "Hamburg",
        "postalCode": "20359"
      },
      {
        "name": "Hamburg",
        "postalCode": "22159"
      },
      {
        "name": "Hamburg",
        "postalCode": "20095"
      },
      {
        "name": "Hamburg",
        "postalCode": "22305"
      },
      {
        "name": "Hamburg",
        "postalCode": "22175"
      },
      {
        "name": "Hamburg",
        "postalCode": "22115"
      },
      {
        "name": "Hamburg",
        "postalCode": "22143"
      },
      {
        "name": "Hamburg",
        "postalCode": "22145"
      },
      {
        "name": "Hamburg",
        "postalCode": "22605"
      },
      {
        "name": "Hamburg",
        "postalCode": "22523"
      },
      {
        "name": "Hamburg",
        "postalCode": "22337"
      },
      {
        "name": "Hamburg",
        "postalCode": "22359"
      },
      {
        "name": "Hamburg",
        "postalCode": "22559"
      },
      {
        "name": "Hamburg",
        "postalCode": "22767"
      },
      {
        "name": "Hamburg",
        "postalCode": "22041"
      },
      {
        "name": "Hamburg",
        "postalCode": "21129"
      },
      {
        "name": "Hamburg",
        "postalCode": "22607"
      },
      {
        "name": "Hamburg",
        "postalCode": "22767"
      },
      {
        "name": "Hamburg",
        "postalCode": "20144"
      },
      {
        "name": "Hamburg",
        "postalCode": "22391"
      },
      {
        "name": "Hamburg",
        "postalCode": "21039"
      },
      {
        "name": "Hamburg",
        "postalCode": "20253"
      },
      {
        "name": "Hamburg",
        "postalCode": "20097"
      },
      {
        "name": "Hamburg, Oststeinbek",
        "postalCode": "22113"
      },
      {
        "name": "Hamburg",
        "postalCode": "21035"
      },
      {
        "name": "Hamburg",
        "postalCode": "21075"
      },
      {
        "name": "Neuwerk",
        "postalCode": "27499"
      },
      {
        "name": "Hamburg",
        "postalCode": "22457"
      },
      {
        "name": "Hamburg",
        "postalCode": "20257"
      },
      {
        "name": "Hamburg",
        "postalCode": "20539"
      },
      {
        "name": "Hamburg",
        "postalCode": "22303"
      },
      {
        "name": "Hamburg",
        "postalCode": "22081"
      },
      {
        "name": "Hamburg",
        "postalCode": "22147"
      },
      {
        "name": "Hamburg",
        "postalCode": "22459"
      },
      {
        "name": "Hamburg",
        "postalCode": "20355"
      },
      {
        "name": "Hamburg",
        "postalCode": "20146"
      },
      {
        "name": "Hamburg",
        "postalCode": "22083"
      },
      {
        "name": "Hamburg",
        "postalCode": "22415"
      },
      {
        "name": "Hamburg",
        "postalCode": "22049"
      },
      {
        "name": "Hamburg",
        "postalCode": "22395"
      },
      {
        "name": "Hamburg",
        "postalCode": "22763"
      },
      {
        "name": "Hamburg",
        "postalCode": "22335"
      },
      {
        "name": "Hamburg",
        "postalCode": "22297"
      },
      {
        "name": "Hamburg",
        "postalCode": "22299"
      },
      {
        "name": "Hamburg",
        "postalCode": "22047"
      },
      {
        "name": "Hamburg",
        "postalCode": "22761"
      },
      {
        "name": "Hamburg",
        "postalCode": "22455"
      },
      {
        "name": "Hamburg",
        "postalCode": "20259"
      },
      {
        "name": "Hamburg",
        "postalCode": "20099"
      },
      {
        "name": "Hamburg",
        "postalCode": "22149"
      },
      {
        "name": "Hamburg",
        "postalCode": "22525"
      },
      {
        "name": "Hamburg",
        "postalCode": "22589"
      },
      {
        "name": "Hamburg",
        "postalCode": "21149"
      },
      {
        "name": "Hamburg",
        "postalCode": "22527"
      },
      {
        "name": "Hamburg",
        "postalCode": "21077"
      },
      {
        "name": "Hamburg",
        "postalCode": "22453"
      },
      {
        "name": "Hamburg",
        "postalCode": "20249"
      },
      {
        "name": "Hamburg",
        "postalCode": "22177"
      },
      {
        "name": "Hamburg",
        "postalCode": "22111"
      },
      {
        "name": "Hamburg",
        "postalCode": "22045"
      },
      {
        "name": "Hamburg",
        "postalCode": "22549"
      },
      {
        "name": "Hamburg",
        "postalCode": "21079"
      },
      {
        "name": "Hamburg",
        "postalCode": "20459"
      },
      {
        "name": "Hamburg",
        "postalCode": "20148"
      },
      {
        "name": "Hamburg",
        "postalCode": "22309"
      },
      {
        "name": "Hamburg",
        "postalCode": "22339"
      },
      {
        "name": "Hamburg",
        "postalCode": "22415"
      },
      {
        "name": "Hamburg",
        "postalCode": "22417"
      },
      {
        "name": "Hamburg",
        "postalCode": "22453"
      },
      {
        "name": "Hamburg",
        "postalCode": "22301"
      },
      {
        "name": "Hamburg",
        "postalCode": "22307"
      },
      {
        "name": "Hamburg",
        "postalCode": "22587"
      },
      {
        "name": "Hamburg",
        "postalCode": "22529"
      },
      {
        "name": "Hamburg",
        "postalCode": "22419"
      },
      {
        "name": "Hamburg",
        "postalCode": "22087"
      },
      {
        "name": "Hamburg",
        "postalCode": "20535"
      },
      {
        "name": "Hamburg, Oststeinbek",
        "postalCode": "22113"
      },
      {
        "name": "Hamburg",
        "postalCode": "21031"
      }
    ],
    "03":
    [
      {
        "name": "Ochtersum",
        "postalCode": "26489"
      },
      {
        "name": "Essen (Oldenburg)",
        "postalCode": "49632"
      },
      {
        "name": "Südbrookmerland",
        "postalCode": "26624"
      },
      {
        "name": "Voltlage",
        "postalCode": "49599"
      },
      {
        "name": "Salzbergen",
        "postalCode": "48499"
      },
      {
        "name": "Westoverledingen",
        "postalCode": "26810"
      },
      {
        "name": "Hannover",
        "postalCode": "30175"
      },
      {
        "name": "Hannover",
        "postalCode": "30625"
      },
      {
        "name": "Hambühren",
        "postalCode": "29313"
      },
      {
        "name": "Lamspringe",
        "postalCode": "31195"
      },
      {
        "name": "Katlenburg-Lindau",
        "postalCode": "37191"
      },
      {
        "name": "Heere",
        "postalCode": "38277"
      },
      {
        "name": "Herzberg, Elbingerode, Hörden",
        "postalCode": "37412"
      },
      {
        "name": "Lüneburg",
        "postalCode": "21335"
      },
      {
        "name": "Gerdau",
        "postalCode": "29581"
      },
      {
        "name": "Adendorf",
        "postalCode": "21365"
      },
      {
        "name": "Goslar",
        "postalCode": "38642"
      },
      {
        "name": "Goslar",
        "postalCode": "38642"
      },
      {
        "name": "Wesendorf",
        "postalCode": "29392"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38124"
      },
      {
        "name": "Dörverden",
        "postalCode": "27313"
      },
      {
        "name": "Schönewörde",
        "postalCode": "29396"
      },
      {
        "name": "Weste",
        "postalCode": "29599"
      },
      {
        "name": "Wolfsburg",
        "postalCode": "38440"
      },
      {
        "name": "Göhrde",
        "postalCode": "29473"
      },
      {
        "name": "Helmstedt",
        "postalCode": "38350"
      },
      {
        "name": "Uelsen, Halle, Gölenkamp, Getelo",
        "postalCode": "49843"
      },
      {
        "name": "Dörpen, Lehe, u.a.",
        "postalCode": "26892"
      },
      {
        "name": "Winsen (Aller)",
        "postalCode": "29308"
      },
      {
        "name": "Bad Salzdetfurth",
        "postalCode": "31162"
      },
      {
        "name": "Seevetal",
        "postalCode": "21220"
      },
      {
        "name": "Salzhausen",
        "postalCode": "21376"
      },
      {
        "name": "Uetze",
        "postalCode": "31311"
      },
      {
        "name": "Celle",
        "postalCode": "29221"
      },
      {
        "name": "Eldingen",
        "postalCode": "29351"
      },
      {
        "name": "Liebenburg",
        "postalCode": "38704"
      },
      {
        "name": "Bienenbüttel",
        "postalCode": "29553"
      },
      {
        "name": "Ribbesbüttel",
        "postalCode": "38551"
      },
      {
        "name": "Weyhe",
        "postalCode": "28844"
      },
      {
        "name": "Landesbergen",
        "postalCode": "31628"
      },
      {
        "name": "Rotenburg",
        "postalCode": "27356"
      },
      {
        "name": "Boffzen, Derental",
        "postalCode": "37691"
      },
      {
        "name": "Rastede",
        "postalCode": "26180"
      },
      {
        "name": "Butjadingen",
        "postalCode": "26969"
      },
      {
        "name": "Lemförde u.a.",
        "postalCode": "49448"
      },
      {
        "name": "Visselhövede",
        "postalCode": "27374"
      },
      {
        "name": "Hollern-Twielenfleth",
        "postalCode": "21723"
      },
      {
        "name": "Hannover",
        "postalCode": "30455"
      },
      {
        "name": "Hannover",
        "postalCode": "30453"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49076"
      },
      {
        "name": "Georgsmarienhütte",
        "postalCode": "49124"
      },
      {
        "name": "Friesoythe",
        "postalCode": "26169"
      },
      {
        "name": "Lünne, Schapen, Spelle",
        "postalCode": "48480"
      },
      {
        "name": "Hedeper",
        "postalCode": "38322"
      },
      {
        "name": "Hannover",
        "postalCode": "30171"
      },
      {
        "name": "Hannover",
        "postalCode": "30659"
      },
      {
        "name": "Bergen, Lohheide u.a.",
        "postalCode": "29303"
      },
      {
        "name": "Bispingen",
        "postalCode": "29646"
      },
      {
        "name": "Schellerten",
        "postalCode": "31174"
      },
      {
        "name": "Nienhagen",
        "postalCode": "29336"
      },
      {
        "name": "Stelle",
        "postalCode": "21435"
      },
      {
        "name": "Peine",
        "postalCode": "31228"
      },
      {
        "name": "Embsen",
        "postalCode": "21409"
      },
      {
        "name": "Salzgitter",
        "postalCode": "38259"
      },
      {
        "name": "Melbeck, Barnstedt",
        "postalCode": "21406"
      },
      {
        "name": "Barum",
        "postalCode": "29576"
      },
      {
        "name": "Wolfsburg",
        "postalCode": "38444"
      },
      {
        "name": "Cuxhaven",
        "postalCode": "27472"
      },
      {
        "name": "Oldendorf",
        "postalCode": "21726"
      },
      {
        "name": "Kutenholz",
        "postalCode": "27449"
      },
      {
        "name": "Heinsen",
        "postalCode": "37649"
      },
      {
        "name": "Juist, Memmert",
        "postalCode": "26571"
      },
      {
        "name": "Twist",
        "postalCode": "49767"
      },
      {
        "name": "Ostrhauderfehn",
        "postalCode": "26842"
      },
      {
        "name": "Spiekeroog",
        "postalCode": "26474"
      },
      {
        "name": "Melle",
        "postalCode": "49328"
      },
      {
        "name": "Jever",
        "postalCode": "26441"
      },
      {
        "name": "Schortens",
        "postalCode": "26419"
      },
      {
        "name": "Bakum",
        "postalCode": "49456"
      },
      {
        "name": "Hannover",
        "postalCode": "30419"
      },
      {
        "name": "Lingen",
        "postalCode": "49808"
      },
      {
        "name": "Dornum",
        "postalCode": "26553"
      },
      {
        "name": "Langenhagen",
        "postalCode": "30853"
      },
      {
        "name": "Freden (Leine)",
        "postalCode": "31084"
      },
      {
        "name": "Hanstedt, Asendorf",
        "postalCode": "21271"
      },
      {
        "name": "Algermissen",
        "postalCode": "31191"
      },
      {
        "name": "Celle",
        "postalCode": "29223"
      },
      {
        "name": "Hohenhameln",
        "postalCode": "31249"
      },
      {
        "name": "Bad Grund",
        "postalCode": "37539"
      },
      {
        "name": "Hahausen, Lutter, Wallmoden",
        "postalCode": "38729"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38112"
      },
      {
        "name": "Wrestedt",
        "postalCode": "29559"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38110"
      },
      {
        "name": "Wagenhoff, Ringelah",
        "postalCode": "38559"
      },
      {
        "name": "Jelmstorf",
        "postalCode": "29585"
      },
      {
        "name": "Bassum",
        "postalCode": "27211"
      },
      {
        "name": "Gnarrenburg",
        "postalCode": "27442"
      },
      {
        "name": "Achim",
        "postalCode": "28832"
      },
      {
        "name": "Himmelpforten",
        "postalCode": "21709"
      },
      {
        "name": "Hameln",
        "postalCode": "31789"
      },
      {
        "name": "Bodenfelde, Wahlsburg",
        "postalCode": "37194"
      },
      {
        "name": "Dahlenburg",
        "postalCode": "21368"
      },
      {
        "name": "Osloß",
        "postalCode": "38557"
      },
      {
        "name": "Brome",
        "postalCode": "38465"
      },
      {
        "name": "Neu Darchau",
        "postalCode": "29490"
      },
      {
        "name": "Süpplingenburg",
        "postalCode": "38376"
      },
      {
        "name": "Karwitz",
        "postalCode": "29481"
      },
      {
        "name": "Bahrdorf",
        "postalCode": "38459"
      },
      {
        "name": "Ronnenberg",
        "postalCode": "30952"
      },
      {
        "name": "Alfhausen",
        "postalCode": "49594"
      },
      {
        "name": "Bad Zwischenahn",
        "postalCode": "26160"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26133"
      },
      {
        "name": "Bad Essen",
        "postalCode": "49152"
      },
      {
        "name": "Großefehn",
        "postalCode": "26629"
      },
      {
        "name": "Itterbeck/Wielen",
        "postalCode": "49847"
      },
      {
        "name": "Papenburg",
        "postalCode": "26871"
      },
      {
        "name": "Emden",
        "postalCode": "26721"
      },
      {
        "name": "Cuxhaven",
        "postalCode": "27476"
      },
      {
        "name": "Delmenhorst",
        "postalCode": "27755"
      },
      {
        "name": "Wanna",
        "postalCode": "21776"
      },
      {
        "name": "Hechthausen",
        "postalCode": "21755"
      },
      {
        "name": "Wischhafen",
        "postalCode": "21737"
      },
      {
        "name": "Hagenburg",
        "postalCode": "31558"
      },
      {
        "name": "Kirchlinteln",
        "postalCode": "27308"
      },
      {
        "name": "Rethem (Aller), Häuslingen, Frankenfeld",
        "postalCode": "27336"
      },
      {
        "name": "Ahlerstedt",
        "postalCode": "21702"
      },
      {
        "name": "Rodewald",
        "postalCode": "31637"
      },
      {
        "name": "Hannover",
        "postalCode": "30169"
      },
      {
        "name": "Isernhagen",
        "postalCode": "30916"
      },
      {
        "name": "Hildesheim",
        "postalCode": "31141"
      },
      {
        "name": "Toppenstedt",
        "postalCode": "21442"
      },
      {
        "name": "Lahstedt",
        "postalCode": "31246"
      },
      {
        "name": "Hattorf",
        "postalCode": "37197"
      },
      {
        "name": "Langlingen",
        "postalCode": "29364"
      },
      {
        "name": "Scharnebeck, Echem, Lüdersburg, Rullstorf",
        "postalCode": "21379"
      },
      {
        "name": "Dinklage",
        "postalCode": "49413"
      },
      {
        "name": "Hatten",
        "postalCode": "26209"
      },
      {
        "name": "Grünendeich",
        "postalCode": "21720"
      },
      {
        "name": "Langenhagen",
        "postalCode": "30855"
      },
      {
        "name": "Gartow",
        "postalCode": "29471"
      },
      {
        "name": "Trebel",
        "postalCode": "29494"
      },
      {
        "name": "Hollern-Twielenfleth",
        "postalCode": "21723"
      },
      {
        "name": "Sauensiek",
        "postalCode": "21644"
      },
      {
        "name": "Gehrden",
        "postalCode": "30989"
      },
      {
        "name": "Apensen",
        "postalCode": "21641"
      },
      {
        "name": "Schnackenburg",
        "postalCode": "29493"
      },
      {
        "name": "Langenhagen",
        "postalCode": "30851"
      },
      {
        "name": "Alfeld (Leine)",
        "postalCode": "31061"
      },
      {
        "name": "Eggestorf",
        "postalCode": "21272"
      },
      {
        "name": "Vierhöfen",
        "postalCode": "21444"
      },
      {
        "name": "Ahnsbeck",
        "postalCode": "29353"
      },
      {
        "name": "Eimke",
        "postalCode": "29578"
      },
      {
        "name": "Betzendorf",
        "postalCode": "21386"
      },
      {
        "name": "Bardowick, Wittorf, Barum",
        "postalCode": "21357"
      },
      {
        "name": "Sprakensehl",
        "postalCode": "29365"
      },
      {
        "name": "Goslar",
        "postalCode": "38640"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38118"
      },
      {
        "name": "Nordenham",
        "postalCode": "26954"
      },
      {
        "name": "Neuenkirchen, Scholen",
        "postalCode": "27251"
      },
      {
        "name": "Niederwöhren",
        "postalCode": "31712"
      },
      {
        "name": "Oederquart",
        "postalCode": "21734"
      },
      {
        "name": "Bothel, Kirchwalsede u.a.",
        "postalCode": "27386"
      },
      {
        "name": "Rotenburg",
        "postalCode": "27356"
      },
      {
        "name": "Stade",
        "postalCode": "21682"
      },
      {
        "name": "Reinstorf",
        "postalCode": "21400"
      },
      {
        "name": "Calberlah",
        "postalCode": "38547"
      },
      {
        "name": "Schönewörde",
        "postalCode": "29396"
      },
      {
        "name": "Jembke",
        "postalCode": "38477"
      },
      {
        "name": "Süpplingen, Frellstedt",
        "postalCode": "38373"
      },
      {
        "name": "Warberg",
        "postalCode": "38378"
      },
      {
        "name": "Velpke",
        "postalCode": "38458"
      },
      {
        "name": "Glandorf",
        "postalCode": "49219"
      },
      {
        "name": "Holdorf",
        "postalCode": "49451"
      },
      {
        "name": "Barnstorf, Eydelstedt, Drentwede",
        "postalCode": "49406"
      },
      {
        "name": "Worpswede",
        "postalCode": "27726"
      },
      {
        "name": "Pennigsehl",
        "postalCode": "31621"
      },
      {
        "name": "Luhden",
        "postalCode": "31711"
      },
      {
        "name": "Marklohe",
        "postalCode": "31608"
      },
      {
        "name": "Husum",
        "postalCode": "31632"
      },
      {
        "name": "Freiburg (Elbe)",
        "postalCode": "21729"
      },
      {
        "name": "Hameln",
        "postalCode": "31785"
      },
      {
        "name": "Bad Sachsa",
        "postalCode": "37441"
      },
      {
        "name": "Meine",
        "postalCode": "38527"
      },
      {
        "name": "Wittmar",
        "postalCode": "38329"
      },
      {
        "name": "Roklum",
        "postalCode": "38325"
      },
      {
        "name": "Bergfeld",
        "postalCode": "38467"
      },
      {
        "name": "Bergen",
        "postalCode": "29468"
      },
      {
        "name": "Buxtehude",
        "postalCode": "21614"
      },
      {
        "name": "Uslar",
        "postalCode": "37170"
      },
      {
        "name": "Schneverdingen, Heimbuch",
        "postalCode": "29640"
      },
      {
        "name": "Steinfeld",
        "postalCode": "49439"
      },
      {
        "name": "Adelebsen",
        "postalCode": "37139"
      },
      {
        "name": "Göttingen",
        "postalCode": "37081"
      },
      {
        "name": "Göttingen",
        "postalCode": "37083"
      },
      {
        "name": "Seevetal",
        "postalCode": "21218"
      },
      {
        "name": "Seulingen, Waake u.a.",
        "postalCode": "37136"
      },
      {
        "name": "Celle",
        "postalCode": "29227"
      },
      {
        "name": "Eschede",
        "postalCode": "29348"
      },
      {
        "name": "Lachendorf",
        "postalCode": "29331"
      },
      {
        "name": "Sehlde",
        "postalCode": "38279"
      },
      {
        "name": "Vechelde",
        "postalCode": "38159"
      },
      {
        "name": "Handorf",
        "postalCode": "21447"
      },
      {
        "name": "Schwienau",
        "postalCode": "29593"
      },
      {
        "name": "Langlingen",
        "postalCode": "29364"
      },
      {
        "name": "Didderse",
        "postalCode": "38530"
      },
      {
        "name": "Dorstadt, Flöthe, Börßum u.a.",
        "postalCode": "38312"
      },
      {
        "name": "Braunlage",
        "postalCode": "37444"
      },
      {
        "name": "Haren",
        "postalCode": "49733"
      },
      {
        "name": "Dersum",
        "postalCode": "26906"
      },
      {
        "name": "Jemgum",
        "postalCode": "26844"
      },
      {
        "name": "Bissendorf",
        "postalCode": "49143"
      },
      {
        "name": "Oldenburg",
        "postalCode": "26122"
      },
      {
        "name": "Stadland",
        "postalCode": "26936"
      },
      {
        "name": "Dötlingen",
        "postalCode": "27801"
      },
      {
        "name": "Surwold",
        "postalCode": "26903"
      },
      {
        "name": "Langeoog",
        "postalCode": "26465"
      },
      {
        "name": "Bovenden",
        "postalCode": "37120"
      },
      {
        "name": "Hannover",
        "postalCode": "30629"
      },
      {
        "name": "Wietzendorf",
        "postalCode": "29649"
      },
      {
        "name": "Hildesheim",
        "postalCode": "31137"
      },
      {
        "name": "Göttingen",
        "postalCode": "37075"
      },
      {
        "name": "Hattorf",
        "postalCode": "37197"
      },
      {
        "name": "Goslar",
        "postalCode": "38644"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38114"
      },
      {
        "name": "Beverstedt",
        "postalCode": "27616"
      },
      {
        "name": "Bahrenborstel, Barenburg, Kirchdorf",
        "postalCode": "27245"
      },
      {
        "name": "Steyerberg",
        "postalCode": "31595"
      },
      {
        "name": "Neuhaus (Oste)",
        "postalCode": "21785"
      },
      {
        "name": "Tarmstedt, Breddorf u.a.",
        "postalCode": "27412"
      },
      {
        "name": "Wiedensahl",
        "postalCode": "31719"
      },
      {
        "name": "Pohle, Lauenau, Messenkamp, Hülsede etc",
        "postalCode": "31867"
      },
      {
        "name": "Cremlingen",
        "postalCode": "38162"
      },
      {
        "name": "Remlingen",
        "postalCode": "38319"
      },
      {
        "name": "Lehre",
        "postalCode": "38165"
      },
      {
        "name": "Bad Bodenteich",
        "postalCode": "29389"
      },
      {
        "name": "Halvesbostel",
        "postalCode": "21646"
      },
      {
        "name": "Prezelle",
        "postalCode": "29491"
      },
      {
        "name": "Bawinkel",
        "postalCode": "49844"
      },
      {
        "name": "Andervenne, Beesten, Freren, Messingen, Thuine",
        "postalCode": "49832"
      },
      {
        "name": "Nordhorn",
        "postalCode": "48529"
      },
      {
        "name": "Wennigsen (Deister)",
        "postalCode": "30974"
      },
      {
        "name": "Schwarmstedt u.a.",
        "postalCode": "29690"
      },
      {
        "name": "Dollern",
        "postalCode": "21739"
      },
      {
        "name": "Boffzen, Derental",
        "postalCode": "37691"
      },
      {
        "name": "Holenberg",
        "postalCode": "37642"
      },
      {
        "name": "Eime",
        "postalCode": "31036"
      },
      {
        "name": "Fürstenau",
        "postalCode": "49584"
      },
      {
        "name": "Kettenkamp, Eggermühlen, Ankum",
        "postalCode": "49577"
      },
      {
        "name": "Goldenstedt",
        "postalCode": "49424"
      },
      {
        "name": "Wiefelstede",
        "postalCode": "26215"
      },
      {
        "name": "Nortmoor",
        "postalCode": "26845"
      },
      {
        "name": "Großheide",
        "postalCode": "26532"
      },
      {
        "name": "Rhede (Ems)",
        "postalCode": "26899"
      },
      {
        "name": "Schwanewede",
        "postalCode": "28790"
      },
      {
        "name": "Wagenfeld",
        "postalCode": "49419"
      },
      {
        "name": "Raddestorf",
        "postalCode": "31604"
      },
      {
        "name": "Bückeburg",
        "postalCode": "31675"
      },
      {
        "name": "Langwedel",
        "postalCode": "27299"
      },
      {
        "name": "Hammah",
        "postalCode": "21714"
      },
      {
        "name": "Harsefeld",
        "postalCode": "21698"
      },
      {
        "name": "Hemmingen",
        "postalCode": "30966"
      },
      {
        "name": "Nordstemmen",
        "postalCode": "31171"
      },
      {
        "name": "Sarstedt",
        "postalCode": "31157"
      },
      {
        "name": "Buchholz in der Nordheide",
        "postalCode": "21244"
      },
      {
        "name": "Bockenem",
        "postalCode": "31167"
      },
      {
        "name": "Bröckel",
        "postalCode": "29356"
      },
      {
        "name": "Vögelsen",
        "postalCode": "21360"
      },
      {
        "name": "Deutsch Evern",
        "postalCode": "21407"
      },
      {
        "name": "Gifhorn",
        "postalCode": "38518"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38120"
      },
      {
        "name": "Wolfenbüttel",
        "postalCode": "38300"
      },
      {
        "name": "Lüder",
        "postalCode": "29394"
      },
      {
        "name": "Weyhausen",
        "postalCode": "38554"
      },
      {
        "name": "Jerxheim",
        "postalCode": "38381"
      },
      {
        "name": "Friedeburg",
        "postalCode": "26446"
      },
      {
        "name": "Wilhelmshaven",
        "postalCode": "26384"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26121"
      },
      {
        "name": "Melle",
        "postalCode": "49326"
      },
      {
        "name": "Visbek",
        "postalCode": "49429"
      },
      {
        "name": "Lembruch, Burlage",
        "postalCode": "49459"
      },
      {
        "name": "Hinte",
        "postalCode": "26759"
      },
      {
        "name": "Sögel u.a.",
        "postalCode": "49751"
      },
      {
        "name": "Aurich",
        "postalCode": "26603"
      },
      {
        "name": "Esens, Neuharlingersiel u.a.",
        "postalCode": "26427"
      },
      {
        "name": "Esterwegen u.a.",
        "postalCode": "26897"
      },
      {
        "name": "Rieste",
        "postalCode": "49597"
      },
      {
        "name": "Bad Iburg",
        "postalCode": "49186"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49088"
      },
      {
        "name": "Haselünne",
        "postalCode": "49740"
      },
      {
        "name": "Bad Fallingbostel, Osterheide",
        "postalCode": "29683"
      },
      {
        "name": "Hannover",
        "postalCode": "30559"
      },
      {
        "name": "Hannover",
        "postalCode": "30521"
      },
      {
        "name": "Friedland",
        "postalCode": "37133"
      },
      {
        "name": "Meinersen",
        "postalCode": "38536"
      },
      {
        "name": "Stadland",
        "postalCode": "26935"
      },
      {
        "name": "Lemwerder",
        "postalCode": "27809"
      },
      {
        "name": "Delmenhorst",
        "postalCode": "27755"
      },
      {
        "name": "Delmenhorst",
        "postalCode": "27749"
      },
      {
        "name": "Affinghausen und Sudwalde",
        "postalCode": "27257"
      },
      {
        "name": "Buchholz",
        "postalCode": "31710"
      },
      {
        "name": "Pollhagen",
        "postalCode": "31718"
      },
      {
        "name": "Wölpinghausen",
        "postalCode": "31556"
      },
      {
        "name": "Haste, Hohnhorst",
        "postalCode": "31559"
      },
      {
        "name": "Stade",
        "postalCode": "21684"
      },
      {
        "name": "Gevensleben",
        "postalCode": "38384"
      },
      {
        "name": "Coppenbrügge",
        "postalCode": "31863"
      },
      {
        "name": "Duingen",
        "postalCode": "31089"
      },
      {
        "name": "Gorleben",
        "postalCode": "29475"
      },
      {
        "name": "Bockhorn",
        "postalCode": "26345"
      },
      {
        "name": "Soltau",
        "postalCode": "29614"
      },
      {
        "name": "Hardegsen",
        "postalCode": "37181"
      },
      {
        "name": "Hannover",
        "postalCode": "30161"
      },
      {
        "name": "Hannover",
        "postalCode": "30161"
      },
      {
        "name": "Undeloh",
        "postalCode": "21274"
      },
      {
        "name": "Diekholzen",
        "postalCode": "31199"
      },
      {
        "name": "Göttingen",
        "postalCode": "37085"
      },
      {
        "name": "Bendestorf",
        "postalCode": "21227"
      },
      {
        "name": "Wathlingen",
        "postalCode": "29339"
      },
      {
        "name": "Kirchgellersen, Westergellersen, Südergellersen",
        "postalCode": "21394"
      },
      {
        "name": "Beedenbostel",
        "postalCode": "29355"
      },
      {
        "name": "Salzgitter",
        "postalCode": "38229"
      },
      {
        "name": "Leiferde",
        "postalCode": "38542"
      },
      {
        "name": "Uslar",
        "postalCode": "37170"
      },
      {
        "name": "Vechta",
        "postalCode": "49377"
      },
      {
        "name": "Drebber",
        "postalCode": "49457"
      },
      {
        "name": "Baltrum",
        "postalCode": "26579"
      },
      {
        "name": "Meppen",
        "postalCode": "49716"
      },
      {
        "name": "Cuxhaven",
        "postalCode": "27478"
      },
      {
        "name": "Delmenhorst",
        "postalCode": "27753"
      },
      {
        "name": "Schwaförden",
        "postalCode": "27252"
      },
      {
        "name": "Grasberg",
        "postalCode": "28879"
      },
      {
        "name": "Rinteln",
        "postalCode": "31737"
      },
      {
        "name": "Zeven, Elsdorf",
        "postalCode": "27404"
      },
      {
        "name": "Nordsehl",
        "postalCode": "31717"
      },
      {
        "name": "Neuenkirchen-Vörden",
        "postalCode": "49434"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49074"
      },
      {
        "name": "Wardenburg",
        "postalCode": "26203"
      },
      {
        "name": "Bad Bentheim",
        "postalCode": "48455"
      },
      {
        "name": "Norden",
        "postalCode": "26506"
      },
      {
        "name": "Upgant-Schott, Osteel u.a.",
        "postalCode": "26529"
      },
      {
        "name": "Weener",
        "postalCode": "26826"
      },
      {
        "name": "Höhbeck",
        "postalCode": "29478"
      },
      {
        "name": "Göttingen",
        "postalCode": "37079"
      },
      {
        "name": "Celle, Wittbeck",
        "postalCode": "29229"
      },
      {
        "name": "Habighorst",
        "postalCode": "29359"
      },
      {
        "name": "Lüneburg",
        "postalCode": "21339"
      },
      {
        "name": "Hillerse",
        "postalCode": "38543"
      },
      {
        "name": "Steinhorst",
        "postalCode": "29367"
      },
      {
        "name": "Salzgitter",
        "postalCode": "38239"
      },
      {
        "name": "Wendisch Evern",
        "postalCode": "21403"
      },
      {
        "name": "Bad Bevensen",
        "postalCode": "29549"
      },
      {
        "name": "Hambergen, Holste u.a.",
        "postalCode": "27729"
      },
      {
        "name": "Bruchhausen-Vilsen, Süstedt",
        "postalCode": "27305"
      },
      {
        "name": "Meerbeck",
        "postalCode": "31715"
      },
      {
        "name": "Nienstädt",
        "postalCode": "31688"
      },
      {
        "name": "Hessisch Oldendorf",
        "postalCode": "31840"
      },
      {
        "name": "Haßbergen",
        "postalCode": "31626"
      },
      {
        "name": "Emmerthal",
        "postalCode": "31860"
      },
      {
        "name": "Bad Nenndorf",
        "postalCode": "31542"
      },
      {
        "name": "Stade",
        "postalCode": "21683"
      },
      {
        "name": "Hodenhagen u.a.",
        "postalCode": "29693"
      },
      {
        "name": "Barsinghausen",
        "postalCode": "30890"
      },
      {
        "name": "Sittensen u.a.",
        "postalCode": "27419"
      },
      {
        "name": "Altenmedingen",
        "postalCode": "29575"
      },
      {
        "name": "Bleckede",
        "postalCode": "21354"
      },
      {
        "name": "Himbergen",
        "postalCode": "29584"
      },
      {
        "name": "Tülau",
        "postalCode": "38474"
      },
      {
        "name": "Wilhelmshaven",
        "postalCode": "26382"
      },
      {
        "name": "Hilter",
        "postalCode": "49176"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26135"
      },
      {
        "name": "Hude (Oldenburg)",
        "postalCode": "27798"
      },
      {
        "name": "Beckdorf",
        "postalCode": "21643"
      },
      {
        "name": "Rennau, Querenhorst, Mariental, Grasleben",
        "postalCode": "38368"
      },
      {
        "name": "Hannover",
        "postalCode": "30457"
      },
      {
        "name": "Buchholz in der Nordheide",
        "postalCode": "21244"
      },
      {
        "name": "Hannover",
        "postalCode": "30627"
      },
      {
        "name": "Rosengarten",
        "postalCode": "21224"
      },
      {
        "name": "Celle",
        "postalCode": "29225"
      },
      {
        "name": "Seesen",
        "postalCode": "38723"
      },
      {
        "name": "Langlingen",
        "postalCode": "29364"
      },
      {
        "name": "Hohne",
        "postalCode": "29362"
      },
      {
        "name": "Ebstorf",
        "postalCode": "29574"
      },
      {
        "name": "Artlenburg",
        "postalCode": "21380"
      },
      {
        "name": "Goslar",
        "postalCode": "38644"
      },
      {
        "name": "Sulingen",
        "postalCode": "27232"
      },
      {
        "name": "Ihlienworth",
        "postalCode": "21775"
      },
      {
        "name": "Asendorf",
        "postalCode": "27330"
      },
      {
        "name": "Leese",
        "postalCode": "31633"
      },
      {
        "name": "Nienburg/Weser",
        "postalCode": "31582"
      },
      {
        "name": "Lauenhagen",
        "postalCode": "31714"
      },
      {
        "name": "Drochtersen",
        "postalCode": "21706"
      },
      {
        "name": "Steimbke",
        "postalCode": "31634"
      },
      {
        "name": "Rhauderfehn",
        "postalCode": "26817"
      },
      {
        "name": "Werlte, Vrees, Lahn",
        "postalCode": "49757"
      },
      {
        "name": "Wiesmoor",
        "postalCode": "26639"
      },
      {
        "name": "Barßel",
        "postalCode": "26676"
      },
      {
        "name": "Fintel, Lauenbrück u.a.",
        "postalCode": "27389"
      },
      {
        "name": "Wilhelmshaven",
        "postalCode": "26388"
      },
      {
        "name": "Lengerich u.a.",
        "postalCode": "49838"
      },
      {
        "name": "Neubörger, Neulehe",
        "postalCode": "26909"
      },
      {
        "name": "Hannover",
        "postalCode": "30159"
      },
      {
        "name": "Hannover",
        "postalCode": "30655"
      },
      {
        "name": "Lehrte",
        "postalCode": "31275"
      },
      {
        "name": "Harsum",
        "postalCode": "31177"
      },
      {
        "name": "Bad Gandersheim",
        "postalCode": "37581"
      },
      {
        "name": "Harmstorf",
        "postalCode": "21228"
      },
      {
        "name": "Edemissen",
        "postalCode": "31234"
      },
      {
        "name": "Eicklingen",
        "postalCode": "29358"
      },
      {
        "name": "Hankensbüttel, Obernholz, Dedelstorf",
        "postalCode": "29386"
      },
      {
        "name": "Juist, Memmert",
        "postalCode": "26571"
      },
      {
        "name": "Emden",
        "postalCode": "26723"
      },
      {
        "name": "Borstel",
        "postalCode": "27246"
      },
      {
        "name": "Liebenau",
        "postalCode": "31618"
      },
      {
        "name": "Hemmoor",
        "postalCode": "21745"
      },
      {
        "name": "Blender",
        "postalCode": "27337"
      },
      {
        "name": "Heuerßen",
        "postalCode": "31700"
      },
      {
        "name": "Fredenbeck",
        "postalCode": "21717"
      },
      {
        "name": "Barendorf, Vastorf",
        "postalCode": "21397"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38106"
      },
      {
        "name": "Semmenstedt",
        "postalCode": "38327"
      },
      {
        "name": "Tappenbeck",
        "postalCode": "38479"
      },
      {
        "name": "Wolfsburg",
        "postalCode": "38448"
      },
      {
        "name": "Hitzacker (Elbe)",
        "postalCode": "29456"
      },
      {
        "name": "Grafhorst",
        "postalCode": "38462"
      },
      {
        "name": "Saterland",
        "postalCode": "26683"
      },
      {
        "name": "Zetel",
        "postalCode": "26340"
      },
      {
        "name": "Wallenhorst",
        "postalCode": "49134"
      },
      {
        "name": "Seelze",
        "postalCode": "30926"
      },
      {
        "name": "Wedemark",
        "postalCode": "30900"
      },
      {
        "name": "Dransfeld u.a.",
        "postalCode": "37127"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26125"
      },
      {
        "name": "Wietmarschen",
        "postalCode": "49835"
      },
      {
        "name": "Wustrow",
        "postalCode": "29462"
      },
      {
        "name": "Brake",
        "postalCode": "26919"
      },
      {
        "name": "Syke",
        "postalCode": "28857"
      },
      {
        "name": "Stolzenau",
        "postalCode": "31592"
      },
      {
        "name": "Auhagen, Sachsenhagen",
        "postalCode": "31553"
      },
      {
        "name": "Hohnstorf (Elbe), Hittbergen",
        "postalCode": "21522"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38100"
      },
      {
        "name": "Wolfsburg",
        "postalCode": "38442"
      },
      {
        "name": "Rosche",
        "postalCode": "29571"
      },
      {
        "name": "Luckau (Wendland)",
        "postalCode": "29487"
      },
      {
        "name": "Filsum",
        "postalCode": "26849"
      },
      {
        "name": "Laatzen",
        "postalCode": "30880"
      },
      {
        "name": "Nörten-Hardenberg",
        "postalCode": "37176"
      },
      {
        "name": "Langelsheim",
        "postalCode": "38685"
      },
      {
        "name": "Wilsum",
        "postalCode": "49849"
      },
      {
        "name": "Golmbach",
        "postalCode": "37640"
      },
      {
        "name": "Halle",
        "postalCode": "37620"
      },
      {
        "name": "Aurich",
        "postalCode": "26607"
      },
      {
        "name": "Herzlake, Dohren",
        "postalCode": "49770"
      },
      {
        "name": "Delmenhorst",
        "postalCode": "27751"
      },
      {
        "name": "Nordleda",
        "postalCode": "21765"
      },
      {
        "name": "Bremervörde",
        "postalCode": "27432"
      },
      {
        "name": "Selsingen",
        "postalCode": "27446"
      },
      {
        "name": "Heeßen, Bad Eilsen",
        "postalCode": "31707"
      },
      {
        "name": "Lüdersfeld",
        "postalCode": "31702"
      },
      {
        "name": "Hameln",
        "postalCode": "31789"
      },
      {
        "name": "Moisburg",
        "postalCode": "21647"
      },
      {
        "name": "Handeloh",
        "postalCode": "21256"
      },
      {
        "name": "Adelheidsdorf",
        "postalCode": "29352"
      },
      {
        "name": "Mechtersen",
        "postalCode": "21358"
      },
      {
        "name": "Uelzen",
        "postalCode": "29525"
      },
      {
        "name": "Wahrenholz",
        "postalCode": "29399"
      },
      {
        "name": "Römstedt",
        "postalCode": "29591"
      },
      {
        "name": "Königslutter am Elm",
        "postalCode": "38154"
      },
      {
        "name": "Bad Rothenfelde",
        "postalCode": "49214"
      },
      {
        "name": "Sande",
        "postalCode": "26452"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49086"
      },
      {
        "name": "Horneburg",
        "postalCode": "21640"
      },
      {
        "name": "Dielmissen",
        "postalCode": "37633"
      },
      {
        "name": "Bomlitz",
        "postalCode": "29699"
      },
      {
        "name": "Tostedt, Kakenstorf u.a.",
        "postalCode": "21255"
      },
      {
        "name": "Barver, Dickel, Hemsloh, Rehden, Wetschen, Wehrblecker Heide",
        "postalCode": "49453"
      },
      {
        "name": "Schiffdorf",
        "postalCode": "27619"
      },
      {
        "name": "Ritterhude",
        "postalCode": "27721"
      },
      {
        "name": "Helpsen, Seggebruch",
        "postalCode": "31691"
      },
      {
        "name": "Auetal",
        "postalCode": "31749"
      },
      {
        "name": "Eystrup, Hassel u.a.",
        "postalCode": "27324"
      },
      {
        "name": "Neu Wulmstorf",
        "postalCode": "21629"
      },
      {
        "name": "Wendeburg",
        "postalCode": "38176"
      },
      {
        "name": "Müden (Aller)",
        "postalCode": "38539"
      },
      {
        "name": "Ummern",
        "postalCode": "29369"
      },
      {
        "name": "Isenbüttel",
        "postalCode": "38550"
      },
      {
        "name": "Stoetze",
        "postalCode": "29597"
      },
      {
        "name": "Zernien",
        "postalCode": "29499"
      },
      {
        "name": "Hann. Münden, Gutsbezirk Reinhardswald",
        "postalCode": "34346"
      },
      {
        "name": "Lüerdissen",
        "postalCode": "37635"
      },
      {
        "name": "Neuenkirchen",
        "postalCode": "29643"
      },
      {
        "name": "Wangerland",
        "postalCode": "26434"
      },
      {
        "name": "Quakenbrück",
        "postalCode": "49610"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49078"
      },
      {
        "name": "Gehrde",
        "postalCode": "49596"
      },
      {
        "name": "Uplengen",
        "postalCode": "26670"
      },
      {
        "name": "Merzen, Neuenkirchen",
        "postalCode": "49586"
      },
      {
        "name": "Emsbüren",
        "postalCode": "48488"
      },
      {
        "name": "Ovelgönne",
        "postalCode": "26939"
      },
      {
        "name": "Pattensen",
        "postalCode": "30982"
      },
      {
        "name": "Hannover",
        "postalCode": "30179"
      },
      {
        "name": "Sibbesse",
        "postalCode": "31079"
      },
      {
        "name": "Faßberg",
        "postalCode": "29328"
      },
      {
        "name": "Holle",
        "postalCode": "31188"
      },
      {
        "name": "Elbe",
        "postalCode": "38274"
      },
      {
        "name": "Bad Lauterberg",
        "postalCode": "37431"
      },
      {
        "name": "Lüneburg",
        "postalCode": "21337"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38116"
      },
      {
        "name": "Goslar",
        "postalCode": "38644"
      },
      {
        "name": "Dissen",
        "postalCode": "49201"
      },
      {
        "name": "Jade",
        "postalCode": "26349"
      },
      {
        "name": "Wildeshausen",
        "postalCode": "27793"
      },
      {
        "name": "Garbsen",
        "postalCode": "30826"
      },
      {
        "name": "Negenborn",
        "postalCode": "37643"
      },
      {
        "name": "Lorup, Rastdorf",
        "postalCode": "26901"
      },
      {
        "name": "Hesel, Neukamperfehn u.a.",
        "postalCode": "26835"
      },
      {
        "name": "Wurster Nordseeküste",
        "postalCode": "27639"
      },
      {
        "name": "Hagen",
        "postalCode": "27628"
      },
      {
        "name": "Otterndorf",
        "postalCode": "21762"
      },
      {
        "name": "Ottersberg",
        "postalCode": "28870"
      },
      {
        "name": "Wietzen",
        "postalCode": "31613"
      },
      {
        "name": "Balge",
        "postalCode": "31609"
      },
      {
        "name": "Lindhorst",
        "postalCode": "31698"
      },
      {
        "name": "Bodenwerder, Pegestorf, Kirchbrak, Hehlen",
        "postalCode": "37619"
      },
      {
        "name": "Ringe, Laar, Emlichheim",
        "postalCode": "49824"
      },
      {
        "name": "Wittingen",
        "postalCode": "29378"
      },
      {
        "name": "Soltendiek",
        "postalCode": "29594"
      },
      {
        "name": "Wolfsburg",
        "postalCode": "38446"
      },
      {
        "name": "Groß Twülpstedt",
        "postalCode": "38464"
      },
      {
        "name": "Büddenstedt",
        "postalCode": "38372"
      },
      {
        "name": "Woltersdorf",
        "postalCode": "29497"
      },
      {
        "name": "Hoogstede",
        "postalCode": "49846"
      },
      {
        "name": "Detern",
        "postalCode": "26847"
      },
      {
        "name": "Leer",
        "postalCode": "26789"
      },
      {
        "name": "Norderney",
        "postalCode": "26548"
      },
      {
        "name": "Oberlangen, Niederlangen",
        "postalCode": "49779"
      },
      {
        "name": "Bunde",
        "postalCode": "26831"
      },
      {
        "name": "Ganderkesee",
        "postalCode": "27777"
      },
      {
        "name": "Twistringen",
        "postalCode": "27239"
      },
      {
        "name": "Harpstedt, Groß Ippener, Colnrade u.a.",
        "postalCode": "27243"
      },
      {
        "name": "Delmenhorst",
        "postalCode": "27755"
      },
      {
        "name": "Diepenau",
        "postalCode": "31603"
      },
      {
        "name": "Worpswede",
        "postalCode": "27726"
      },
      {
        "name": "Neuenkirchen",
        "postalCode": "21763"
      },
      {
        "name": "Lamstedt",
        "postalCode": "21769"
      },
      {
        "name": "Stadthagen",
        "postalCode": "31655"
      },
      {
        "name": "Bad Pyrmont",
        "postalCode": "31812"
      },
      {
        "name": "Drakenburg",
        "postalCode": "31623"
      },
      {
        "name": "Stöckse",
        "postalCode": "31638"
      },
      {
        "name": "Wunstorf",
        "postalCode": "31515"
      },
      {
        "name": "Hannover",
        "postalCode": "30167"
      },
      {
        "name": "Burgdorf",
        "postalCode": "31303"
      },
      {
        "name": "Hildesheim",
        "postalCode": "31134"
      },
      {
        "name": "Oldendorf (Luhe), Amelinghausen, Rehlingen",
        "postalCode": "21385"
      },
      {
        "name": "Osterode am Harz",
        "postalCode": "37520"
      },
      {
        "name": "Duderstadt",
        "postalCode": "37115"
      },
      {
        "name": "Höfer",
        "postalCode": "29361"
      },
      {
        "name": "Radbruch",
        "postalCode": "21449"
      },
      {
        "name": "Vierhöfen",
        "postalCode": "21444"
      },
      {
        "name": "Hanstedt",
        "postalCode": "29582"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38122"
      },
      {
        "name": "Vordorf",
        "postalCode": "38533"
      },
      {
        "name": "Rötgesbüttel",
        "postalCode": "38531"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38108"
      },
      {
        "name": "Kissenbrück",
        "postalCode": "38324"
      },
      {
        "name": "Wasbüttel",
        "postalCode": "38553"
      },
      {
        "name": "Schöningen",
        "postalCode": "38364"
      },
      {
        "name": "Dannenberg",
        "postalCode": "29451"
      },
      {
        "name": "Edewecht",
        "postalCode": "26188"
      },
      {
        "name": "Garrel",
        "postalCode": "49681"
      },
      {
        "name": "Cloppenburg",
        "postalCode": "49661"
      },
      {
        "name": "Bad Laer",
        "postalCode": "49196"
      },
      {
        "name": "Stadland",
        "postalCode": "26937"
      },
      {
        "name": "Dassel",
        "postalCode": "37586"
      },
      {
        "name": "Westerstede",
        "postalCode": "26655"
      },
      {
        "name": "Bösel",
        "postalCode": "26219"
      },
      {
        "name": "Hagen am Teutoburger Wald",
        "postalCode": "49170"
      },
      {
        "name": "Hasbergen",
        "postalCode": "49205"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49084"
      },
      {
        "name": "Börger",
        "postalCode": "26904"
      },
      {
        "name": "Neubörger, Neulehe",
        "postalCode": "26909"
      },
      {
        "name": "Lilienthal",
        "postalCode": "28865"
      },
      {
        "name": "Maasen, Mellinghausen",
        "postalCode": "27249"
      },
      {
        "name": "Riede",
        "postalCode": "27339"
      },
      {
        "name": "Mittelstenahe",
        "postalCode": "21770"
      },
      {
        "name": "Schweringen, Warpe, Bücken",
        "postalCode": "27333"
      },
      {
        "name": "Obernkirchen",
        "postalCode": "31683"
      },
      {
        "name": "Rehburg-Loccum",
        "postalCode": "31547"
      },
      {
        "name": "Krummendeich",
        "postalCode": "21732"
      },
      {
        "name": "Apelern, Rodenberg",
        "postalCode": "31552"
      },
      {
        "name": "Linsburg",
        "postalCode": "31636"
      },
      {
        "name": "Walsrode, Ostenholz",
        "postalCode": "29664"
      },
      {
        "name": "Hameln",
        "postalCode": "31789"
      },
      {
        "name": "Holzminden",
        "postalCode": "37603"
      },
      {
        "name": "Hannover",
        "postalCode": "30449"
      },
      {
        "name": "Hildesheim",
        "postalCode": "31139"
      },
      {
        "name": "Göttingen",
        "postalCode": "37085"
      },
      {
        "name": "Marxen",
        "postalCode": "21439"
      },
      {
        "name": "Wriedel",
        "postalCode": "29565"
      },
      {
        "name": "Winsen",
        "postalCode": "21423"
      },
      {
        "name": "Wolfenbüttel",
        "postalCode": "38302"
      },
      {
        "name": "Emmendorf",
        "postalCode": "29579"
      },
      {
        "name": "Neetze",
        "postalCode": "21398"
      },
      {
        "name": "Bokensdorf",
        "postalCode": "38556"
      },
      {
        "name": "Nahrendorf",
        "postalCode": "21369"
      },
      {
        "name": "Tiddische",
        "postalCode": "38473"
      },
      {
        "name": "Danndorf",
        "postalCode": "38461"
      },
      {
        "name": "Bohmte",
        "postalCode": "49163"
      },
      {
        "name": "Diepholz",
        "postalCode": "49356"
      },
      {
        "name": "Holzen, Eschershausen, Eimen",
        "postalCode": "37632"
      },
      {
        "name": "Garbsen",
        "postalCode": "30827"
      },
      {
        "name": "Stuhr",
        "postalCode": "28816"
      },
      {
        "name": "Balje",
        "postalCode": "21730"
      },
      {
        "name": "Binnen",
        "postalCode": "31619"
      },
      {
        "name": "Ahnsen",
        "postalCode": "31708"
      },
      {
        "name": "Hespe",
        "postalCode": "31693"
      },
      {
        "name": "Großenwörden",
        "postalCode": "21712"
      },
      {
        "name": "Lauenförde",
        "postalCode": "37697"
      },
      {
        "name": "Grünenplan, Delligsen",
        "postalCode": "31073"
      },
      {
        "name": "Hannover",
        "postalCode": "30451"
      },
      {
        "name": "Hannover",
        "postalCode": "30177"
      },
      {
        "name": "Soderstorf",
        "postalCode": "21388"
      },
      {
        "name": "Clausthal-Zellerfeld, Oberschulenberg",
        "postalCode": "38678"
      },
      {
        "name": "Groß Oesingen",
        "postalCode": "29393"
      },
      {
        "name": "Königslutter am Elm",
        "postalCode": "38154"
      },
      {
        "name": "Wolsdorf",
        "postalCode": "38379"
      },
      {
        "name": "Nordhorn",
        "postalCode": "48527"
      },
      {
        "name": "Krummhörn",
        "postalCode": "26736"
      },
      {
        "name": "Staufenberg",
        "postalCode": "34355"
      },
      {
        "name": "Lähden",
        "postalCode": "49774"
      },
      {
        "name": "Wangerooge",
        "postalCode": "26486"
      },
      {
        "name": "Wilhelmshaven",
        "postalCode": "26386"
      },
      {
        "name": "Engden, Isterberg, Schüttorf u.a.",
        "postalCode": "48465"
      },
      {
        "name": "Walchum",
        "postalCode": "26907"
      },
      {
        "name": "Sickte, Dettum u.a.",
        "postalCode": "38173"
      },
      {
        "name": "Schnega",
        "postalCode": "29465"
      },
      {
        "name": "Rühen",
        "postalCode": "38471"
      },
      {
        "name": "Jameln",
        "postalCode": "29479"
      },
      {
        "name": "Emden",
        "postalCode": "26725"
      },
      {
        "name": "Jesteburg",
        "postalCode": "21266"
      },
      {
        "name": "Northeim",
        "postalCode": "37154"
      },
      {
        "name": "Göttingen",
        "postalCode": "37077"
      },
      {
        "name": "Brackel",
        "postalCode": "21438"
      },
      {
        "name": "Peine",
        "postalCode": "31226"
      },
      {
        "name": "Baddeckenstedt",
        "postalCode": "38271"
      },
      {
        "name": "Reppenstedt, Lüneburg",
        "postalCode": "21391"
      },
      {
        "name": "Haverlah",
        "postalCode": "38275"
      },
      {
        "name": "Altenau, Schulenberg",
        "postalCode": "38707"
      },
      {
        "name": "Schwülper",
        "postalCode": "38179"
      },
      {
        "name": "Warmsen",
        "postalCode": "31606"
      },
      {
        "name": "Aerzen",
        "postalCode": "31855"
      },
      {
        "name": "Bad Münder am Deister",
        "postalCode": "31848"
      },
      {
        "name": "Ottenstein",
        "postalCode": "31868"
      },
      {
        "name": "Scheeßel",
        "postalCode": "27383"
      },
      {
        "name": "Cappeln (Oldenburg)",
        "postalCode": "49692"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49082"
      },
      {
        "name": "Stadtoldendorf u.a.",
        "postalCode": "37627"
      },
      {
        "name": "Salzhemmendorf",
        "postalCode": "31020"
      },
      {
        "name": "Jork",
        "postalCode": "21635"
      },
      {
        "name": "Belm",
        "postalCode": "49191"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26127"
      },
      {
        "name": "Rosdorf",
        "postalCode": "37124"
      },
      {
        "name": "Freden (Leine)",
        "postalCode": "31084"
      },
      {
        "name": "Wulfsen",
        "postalCode": "21445"
      },
      {
        "name": "Garstedt",
        "postalCode": "21441"
      },
      {
        "name": "Wienhausen",
        "postalCode": "29342"
      },
      {
        "name": "Burgdorf",
        "postalCode": "38272"
      },
      {
        "name": "Winsen",
        "postalCode": "21423"
      },
      {
        "name": "Reppenstedt, Lüneburg",
        "postalCode": "21391"
      },
      {
        "name": "Osterholz-Scharmbeck",
        "postalCode": "27711"
      },
      {
        "name": "Stinstedt",
        "postalCode": "21772"
      },
      {
        "name": "Suthfeld",
        "postalCode": "31555"
      },
      {
        "name": "Nortrup",
        "postalCode": "49638"
      },
      {
        "name": "Ostercappeln",
        "postalCode": "49179"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26123"
      },
      {
        "name": "Melle",
        "postalCode": "49324"
      },
      {
        "name": "Elsfleth",
        "postalCode": "26931"
      },
      {
        "name": "Lindern (Oldenburg)",
        "postalCode": "49699"
      },
      {
        "name": "Aurich",
        "postalCode": "26605"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38102"
      },
      {
        "name": "Sassenburg",
        "postalCode": "38524"
      },
      {
        "name": "Braunlage",
        "postalCode": "38700"
      },
      {
        "name": "Schöppenstedt",
        "postalCode": "38170"
      },
      {
        "name": "Tosterglope",
        "postalCode": "21371"
      },
      {
        "name": "Königslutter am Elm",
        "postalCode": "38154"
      },
      {
        "name": "Beierstedt",
        "postalCode": "38382"
      },
      {
        "name": "Lemgow",
        "postalCode": "29485"
      },
      {
        "name": "Otter",
        "postalCode": "21259"
      },
      {
        "name": "Moringen",
        "postalCode": "37186"
      },
      {
        "name": "Hannover",
        "postalCode": "30459"
      },
      {
        "name": "Hannover",
        "postalCode": "30165"
      },
      {
        "name": "Hannover",
        "postalCode": "30163"
      },
      {
        "name": "Burgwedel",
        "postalCode": "30938"
      },
      {
        "name": "Giesen",
        "postalCode": "31180"
      },
      {
        "name": "Munster",
        "postalCode": "29633"
      },
      {
        "name": "Peine",
        "postalCode": "31224"
      },
      {
        "name": "Goslar",
        "postalCode": "38690"
      },
      {
        "name": "Walkenried",
        "postalCode": "37445"
      },
      {
        "name": "Nordenham",
        "postalCode": "26954"
      },
      {
        "name": "Cadenberge",
        "postalCode": "21781"
      },
      {
        "name": "Osten",
        "postalCode": "21756"
      },
      {
        "name": "Estorf",
        "postalCode": "21727"
      },
      {
        "name": "Rohrsen",
        "postalCode": "31627"
      },
      {
        "name": "Heemsen",
        "postalCode": "31622"
      },
      {
        "name": "Beckedorf",
        "postalCode": "31699"
      },
      {
        "name": "Brevörde, Polle, Vahlbruch",
        "postalCode": "37647"
      },
      {
        "name": "Thomasburg",
        "postalCode": "21401"
      },
      {
        "name": "Amt Neuhaus, Stapel",
        "postalCode": "19273"
      },
      {
        "name": "Räbke",
        "postalCode": "38375"
      },
      {
        "name": "Söllingen",
        "postalCode": "38387"
      },
      {
        "name": "Parsau",
        "postalCode": "38470"
      },
      {
        "name": "Waddeweitz",
        "postalCode": "29496"
      },
      {
        "name": "Stade",
        "postalCode": "21680"
      },
      {
        "name": "Lohne",
        "postalCode": "49393"
      },
      {
        "name": "Loxstedt",
        "postalCode": "27612"
      },
      {
        "name": "Freistatt, Varrel, Wehrbleck",
        "postalCode": "27259"
      },
      {
        "name": "Geestland",
        "postalCode": "27624"
      },
      {
        "name": "Asendorf",
        "postalCode": "27330"
      },
      {
        "name": "Oyten",
        "postalCode": "28876"
      },
      {
        "name": "Wingst",
        "postalCode": "21789"
      },
      {
        "name": "Hoya, Hoyerhagen, Hilgermissen",
        "postalCode": "27318"
      },
      {
        "name": "Estorf",
        "postalCode": "31629"
      },
      {
        "name": "Verden",
        "postalCode": "27283"
      },
      {
        "name": "Hage, Halbemond u.a.",
        "postalCode": "26524"
      },
      {
        "name": "Westerholt, Schweindorf u.a.",
        "postalCode": "26556"
      },
      {
        "name": "Langenhagen (Flughafen)",
        "postalCode": "30669"
      },
      {
        "name": "Hannover",
        "postalCode": "30173"
      },
      {
        "name": "Welle",
        "postalCode": "21261"
      },
      {
        "name": "Hannover",
        "postalCode": "30539"
      },
      {
        "name": "Hermannsburg",
        "postalCode": "29320"
      },
      {
        "name": "Winsen",
        "postalCode": "21423"
      },
      {
        "name": "Wulften",
        "postalCode": "37199"
      },
      {
        "name": "Lengede",
        "postalCode": "38268"
      },
      {
        "name": "Salzgitter",
        "postalCode": "38226"
      },
      {
        "name": "Marschacht",
        "postalCode": "21436"
      },
      {
        "name": "Wolfenbüttel",
        "postalCode": "38304"
      },
      {
        "name": "Herzberg, Elbingerode, Hörden",
        "postalCode": "37412"
      },
      {
        "name": "Rätzlingen",
        "postalCode": "29590"
      },
      {
        "name": "Bevern",
        "postalCode": "37639"
      },
      {
        "name": "Garbsen",
        "postalCode": "30823"
      },
      {
        "name": "Löningen",
        "postalCode": "49624"
      },
      {
        "name": "Wittmund",
        "postalCode": "26409"
      },
      {
        "name": "Apen",
        "postalCode": "26689"
      },
      {
        "name": "Nordenham",
        "postalCode": "26954"
      },
      {
        "name": "Bersenbrück",
        "postalCode": "49593"
      },
      {
        "name": "Wietze",
        "postalCode": "29323"
      },
      {
        "name": "Hannover",
        "postalCode": "30519"
      },
      {
        "name": "Hannover",
        "postalCode": "30657"
      },
      {
        "name": "Sibbesse",
        "postalCode": "31079"
      },
      {
        "name": "Sehnde",
        "postalCode": "31319"
      },
      {
        "name": "Gleichen",
        "postalCode": "37130"
      },
      {
        "name": "Hildesheim",
        "postalCode": "31135"
      },
      {
        "name": "Seevetal",
        "postalCode": "21217"
      },
      {
        "name": "Kalefeld",
        "postalCode": "37589"
      },
      {
        "name": "Söhlde",
        "postalCode": "31185"
      },
      {
        "name": "Tespe",
        "postalCode": "21395"
      },
      {
        "name": "Brietlingen",
        "postalCode": "21382"
      },
      {
        "name": "Natendorf",
        "postalCode": "29587"
      },
      {
        "name": "Lüchow",
        "postalCode": "29439"
      },
      {
        "name": "Lübbow",
        "postalCode": "29488"
      },
      {
        "name": "Langendorf",
        "postalCode": "29484"
      },
      {
        "name": "Uchte",
        "postalCode": "31600"
      },
      {
        "name": "Oberndorf",
        "postalCode": "21787"
      },
      {
        "name": "Sottrum, Reeßum, Bötersen u.a.",
        "postalCode": "27367"
      },
      {
        "name": "Engelschoff",
        "postalCode": "21710"
      },
      {
        "name": "Moormerland",
        "postalCode": "26802"
      },
      {
        "name": "Lingen",
        "postalCode": "49809"
      },
      {
        "name": "Nordhorn",
        "postalCode": "48531"
      },
      {
        "name": "Goslar",
        "postalCode": "38644"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38126"
      },
      {
        "name": "Oetzen",
        "postalCode": "29588"
      },
      {
        "name": "Clenze",
        "postalCode": "29459"
      },
      {
        "name": "Küsten",
        "postalCode": "29482"
      },
      {
        "name": "Borkum",
        "postalCode": "26757"
      },
      {
        "name": "Damme",
        "postalCode": "49401"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26129"
      },
      {
        "name": "Damnatz",
        "postalCode": "29472"
      },
      {
        "name": "Gusborn",
        "postalCode": "29476"
      },
      {
        "name": "Braunschweig",
        "postalCode": "38104"
      },
      {
        "name": "Wittingen",
        "postalCode": "29379"
      },
      {
        "name": "Geestland",
        "postalCode": "27607"
      },
      {
        "name": "Cuxhaven",
        "postalCode": "27474"
      },
      {
        "name": "Siedenburg, Staffhorst",
        "postalCode": "27254"
      },
      {
        "name": "Neustadt am Rübenberge",
        "postalCode": "31535"
      },
      {
        "name": "Hameln",
        "postalCode": "31787"
      },
      {
        "name": "Hameln",
        "postalCode": "31789"
      },
      {
        "name": "Esche, Georgsdorf, Lage, Neuenhaus, Osterwald",
        "postalCode": "49828"
      },
      {
        "name": "Hollenstedt, Drestedt u.a.",
        "postalCode": "21279"
      },
      {
        "name": "Gronau (Leine)",
        "postalCode": "31028"
      },
      {
        "name": "Göttingen",
        "postalCode": "37073"
      },
      {
        "name": "Gieboldehausen, Rhumequelle",
        "postalCode": "37434"
      },
      {
        "name": "Ilsede",
        "postalCode": "31241"
      },
      {
        "name": "Wildemann",
        "postalCode": "38709"
      },
      {
        "name": "Suderburg",
        "postalCode": "29556"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49080"
      },
      {
        "name": "Varel",
        "postalCode": "26316"
      },
      {
        "name": "Emstek",
        "postalCode": "49685"
      },
      {
        "name": "Oldenburg (Oldenburg)",
        "postalCode": "26131"
      },
      {
        "name": "Berne",
        "postalCode": "27804"
      },
      {
        "name": "Regesbostel",
        "postalCode": "21649"
      },
      {
        "name": "Schneverdingen, Heimbuch",
        "postalCode": "29640"
      },
      {
        "name": "Elze",
        "postalCode": "31008"
      },
      {
        "name": "Menslage",
        "postalCode": "49637"
      },
      {
        "name": "Ihlow",
        "postalCode": "26632"
      },
      {
        "name": "Lingen",
        "postalCode": "49811"
      },
      {
        "name": "Blomberg, Neuschoo",
        "postalCode": "26487"
      },
      {
        "name": "Hannover",
        "postalCode": "30159"
      },
      {
        "name": "Einbeck, Kreiensen",
        "postalCode": "37574"
      },
      {
        "name": "Unterlüß",
        "postalCode": "29345"
      },
      {
        "name": "Salzgitter",
        "postalCode": "38228"
      },
      {
        "name": "Adenbüttel",
        "postalCode": "38528"
      },
      {
        "name": "Goslar",
        "postalCode": "38642"
      },
      {
        "name": "Schladen-Werla",
        "postalCode": "38315"
      },
      {
        "name": "Bad Harzburg, Torfhaus",
        "postalCode": "38667"
      },
      {
        "name": "Ehrenburg",
        "postalCode": "27248"
      },
      {
        "name": "Thedinghausen, Emtinghausen",
        "postalCode": "27321"
      },
      {
        "name": "Bülkau",
        "postalCode": "21782"
      },
      {
        "name": "Martfeld, Schwarme",
        "postalCode": "27327"
      },
      {
        "name": "Fürstenberg",
        "postalCode": "37699"
      },
      {
        "name": "Denkte",
        "postalCode": "38321"
      },
      {
        "name": "Suhlendorf",
        "postalCode": "29562"
      },
      {
        "name": "Ehra-Lessien",
        "postalCode": "38468"
      },
      {
        "name": "Barwedel",
        "postalCode": "38476"
      },
      {
        "name": "Geeste",
        "postalCode": "49744"
      },
      {
        "name": "Sustrum, Lathen u.a.",
        "postalCode": "49762"
      },
      {
        "name": "Großenkneten",
        "postalCode": "26197"
      },
      {
        "name": "Lembruch, Burlage",
        "postalCode": "49459"
      },
      {
        "name": "Springe",
        "postalCode": "31832"
      },
      {
        "name": "Heidenau",
        "postalCode": "21258"
      },
      {
        "name": "Berge, Bippen",
        "postalCode": "49626"
      },
      {
        "name": "Molbergen",
        "postalCode": "49696"
      },
      {
        "name": "Lastrup",
        "postalCode": "49688"
      },
      {
        "name": "Bramsche",
        "postalCode": "49565"
      },
      {
        "name": "Badbergen",
        "postalCode": "49635"
      },
      {
        "name": "Osnabrück",
        "postalCode": "49090"
      },
      {
        "name": "Wilhelmshaven",
        "postalCode": "26389"
      },
      {
        "name": "Stavern",
        "postalCode": "49777"
      }
    ],
    "04": 
    [
      {
        "name": "Bremerhaven",
        "postalCode": "27580"
      },
      {
        "name": "Bremen",
        "postalCode": "28199"
      },
      {
        "name": "Bremen",
        "postalCode": "28759"
      },
      {
        "name": "Bremen",
        "postalCode": "28327"
      },
      {
        "name": "Bremerhaven, Bremen",
        "postalCode": "27568"
      },
      {
        "name": "Bremerhaven, Bremen",
        "postalCode": "27568"
      },
      {
        "name": "Bremen",
        "postalCode": "28755"
      },
      {
        "name": "Bremen",
        "postalCode": "28211"
      },
      {
        "name": "Bremen",
        "postalCode": "28719"
      },
      {
        "name": "Bremen",
        "postalCode": "28325"
      },
      {
        "name": "Bremerhaven",
        "postalCode": "27576"
      },
      {
        "name": "Bremen",
        "postalCode": "28217"
      },
      {
        "name": "Bremen",
        "postalCode": "28207"
      },
      {
        "name": "Bremen",
        "postalCode": "28777"
      },
      {
        "name": "Bremen",
        "postalCode": "28237"
      },
      {
        "name": "Bremen",
        "postalCode": "28309"
      },
      {
        "name": "Bremen",
        "postalCode": "28213"
      },
      {
        "name": "Bremen",
        "postalCode": "28201"
      },
      {
        "name": "Bremen",
        "postalCode": "28307"
      },
      {
        "name": "Bremen",
        "postalCode": "28757"
      },
      {
        "name": "Bremen",
        "postalCode": "28203"
      },
      {
        "name": "Bremen",
        "postalCode": "28717"
      },
      {
        "name": "Bremen",
        "postalCode": "28329"
      },
      {
        "name": "Bremen",
        "postalCode": "28197"
      },
      {
        "name": "Bremen",
        "postalCode": "28259"
      },
      {
        "name": "Bremerhaven",
        "postalCode": "27572"
      },
      {
        "name": "Bremen",
        "postalCode": "28209"
      },
      {
        "name": "Bremerhaven",
        "postalCode": "27574"
      },
      {
        "name": "Bremen",
        "postalCode": "28279"
      },
      {
        "name": "Bremen",
        "postalCode": "28359"
      },
      {
        "name": "Bremen",
        "postalCode": "28277"
      },
      {
        "name": "Bremerhaven",
        "postalCode": "27570"
      },
      {
        "name": "Bremen",
        "postalCode": "28329"
      },
      {
        "name": "Bremen",
        "postalCode": "28239"
      },
      {
        "name": "Bremen",
        "postalCode": "28205"
      },
      {
        "name": "Bremen",
        "postalCode": "28355"
      },
      {
        "name": "Bremen",
        "postalCode": "28755"
      },
      {
        "name": "Bremen",
        "postalCode": "28357"
      },
      {
        "name": "Bremen",
        "postalCode": "28779"
      },
      {
        "name": "Bremerhaven",
        "postalCode": "27578"
      },
      {
        "name": "Bremerhaven",
        "postalCode": "27578"
      },
      {
        "name": "Bremen",
        "postalCode": "28219"
      },
      {
        "name": "Bremen",
        "postalCode": "28195"
      },
      {
        "name": "Bremen",
        "postalCode": "28215"
      }
    ],
    "05":
    [
      {
        "name": "Hagen",
        "postalCode": "58099"
      },
      {
        "name": "Lünen",
        "postalCode": "44534"
      },
      {
        "name": "Gummersbach",
        "postalCode": "51645"
      },
      {
        "name": "Dortmund",
        "postalCode": "44267"
      },
      {
        "name": "Hagen",
        "postalCode": "58099"
      },
      {
        "name": "Übach-Palenberg",
        "postalCode": "52531"
      },
      {
        "name": "Kevelaer-Winnekendonk",
        "postalCode": "47626"
      },
      {
        "name": "Viersen",
        "postalCode": "41748"
      },
      {
        "name": "Krefeld",
        "postalCode": "47804"
      },
      {
        "name": "Krefeld",
        "postalCode": "47829"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46045"
      },
      {
        "name": "Köln",
        "postalCode": "50767"
      },
      {
        "name": "Köln",
        "postalCode": "50677"
      },
      {
        "name": "Essen",
        "postalCode": "45147"
      },
      {
        "name": "Wülfrath",
        "postalCode": "42489"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45897"
      },
      {
        "name": "Leverkusen",
        "postalCode": "51375"
      },
      {
        "name": "Oelde",
        "postalCode": "59302"
      },
      {
        "name": "Solingen",
        "postalCode": "42653"
      },
      {
        "name": "Bonn",
        "postalCode": "53115"
      },
      {
        "name": "Hattingen",
        "postalCode": "45529"
      },
      {
        "name": "Wermelskirchen",
        "postalCode": "42929"
      },
      {
        "name": "Bochum",
        "postalCode": "44791"
      },
      {
        "name": "Remscheid",
        "postalCode": "42899"
      },
      {
        "name": "Unna",
        "postalCode": "59425"
      },
      {
        "name": "Tecklenburg",
        "postalCode": "49545"
      },
      {
        "name": "Havixbeck",
        "postalCode": "48329"
      },
      {
        "name": "Dortmund",
        "postalCode": "44227"
      },
      {
        "name": "Büren",
        "postalCode": "33142"
      },
      {
        "name": "Herford",
        "postalCode": "32051"
      },
      {
        "name": "Herford",
        "postalCode": "32052"
      },
      {
        "name": "Hille",
        "postalCode": "32479"
      },
      {
        "name": "Petershagen",
        "postalCode": "32469"
      },
      {
        "name": "Meschede",
        "postalCode": "59872"
      },
      {
        "name": "Gütersloh",
        "postalCode": "33330"
      },
      {
        "name": "Werther (Westf.)",
        "postalCode": "33824"
      },
      {
        "name": "Goch",
        "postalCode": "47574"
      },
      {
        "name": "Baesweiler",
        "postalCode": "52499"
      },
      {
        "name": "Wachtendonk",
        "postalCode": "47669"
      },
      {
        "name": "Viersen",
        "postalCode": "41747"
      },
      {
        "name": "Kall",
        "postalCode": "53925"
      },
      {
        "name": "Duisburg",
        "postalCode": "47179"
      },
      {
        "name": "Neuss",
        "postalCode": "41470"
      },
      {
        "name": "Euskirchen",
        "postalCode": "53881"
      },
      {
        "name": "Duisburg",
        "postalCode": "47166"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40547"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40237"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40593"
      },
      {
        "name": "Bornheim",
        "postalCode": "53332"
      },
      {
        "name": "Essen",
        "postalCode": "45356"
      },
      {
        "name": "Leverkusen",
        "postalCode": "51379"
      },
      {
        "name": "Leichlingen",
        "postalCode": "42799"
      },
      {
        "name": "Essen",
        "postalCode": "45130"
      },
      {
        "name": "Essen",
        "postalCode": "45128"
      },
      {
        "name": "Köln",
        "postalCode": "51069"
      },
      {
        "name": "Bochum",
        "postalCode": "44866"
      },
      {
        "name": "Bergisch Gladbach",
        "postalCode": "51429"
      },
      {
        "name": "Herne",
        "postalCode": "44625"
      },
      {
        "name": "Bochum",
        "postalCode": "44789"
      },
      {
        "name": "Castrop-Rauxel",
        "postalCode": "44579"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33647"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33739"
      },
      {
        "name": "Warburg",
        "postalCode": "34414"
      },
      {
        "name": "Borgentreich",
        "postalCode": "34434"
      },
      {
        "name": "Anröchte",
        "postalCode": "59609"
      },
      {
        "name": "Lippstadt",
        "postalCode": "59555"
      },
      {
        "name": "Siegen",
        "postalCode": "57072"
      },
      {
        "name": "Altena",
        "postalCode": "58762"
      },
      {
        "name": "Unna",
        "postalCode": "59425"
      },
      {
        "name": "Münster",
        "postalCode": "48167"
      },
      {
        "name": "Sendenhorst",
        "postalCode": "48324"
      },
      {
        "name": "Hamm",
        "postalCode": "59075"
      },
      {
        "name": "Nordwalde",
        "postalCode": "48356"
      },
      {
        "name": "Dortmund",
        "postalCode": "44137"
      },
      {
        "name": "Rödinghausen",
        "postalCode": "32289"
      },
      {
        "name": "Medebach",
        "postalCode": "59964"
      },
      {
        "name": "Gangelt, Selfkant",
        "postalCode": "52538"
      },
      {
        "name": "Kevelaer-Mitte",
        "postalCode": "47623"
      },
      {
        "name": "Kevelaer-Wetten",
        "postalCode": "47625"
      },
      {
        "name": "Hellenthal",
        "postalCode": "53940"
      },
      {
        "name": "Titz",
        "postalCode": "52445"
      },
      {
        "name": "Nideggen",
        "postalCode": "52385"
      },
      {
        "name": "Moers",
        "postalCode": "47445"
      },
      {
        "name": "Meerbusch",
        "postalCode": "40670"
      },
      {
        "name": "Duisburg",
        "postalCode": "47059"
      },
      {
        "name": "Duisburg",
        "postalCode": "47119"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40225"
      },
      {
        "name": "Dormagen",
        "postalCode": "41541"
      },
      {
        "name": "Essen",
        "postalCode": "45133"
      },
      {
        "name": "Essen",
        "postalCode": "45144"
      },
      {
        "name": "Köln",
        "postalCode": "50678"
      },
      {
        "name": "Menden",
        "postalCode": "58706"
      },
      {
        "name": "Lippstadt",
        "postalCode": "59556"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33649"
      },
      {
        "name": "Köln",
        "postalCode": "51147"
      },
      {
        "name": "Essen",
        "postalCode": "45307"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42115"
      },
      {
        "name": "Bochum",
        "postalCode": "44807"
      },
      {
        "name": "Bochum",
        "postalCode": "44799"
      },
      {
        "name": "Wettringen",
        "postalCode": "48493"
      },
      {
        "name": "Bochum",
        "postalCode": "44799"
      },
      {
        "name": "Wetter (Ruhr)",
        "postalCode": "58300"
      },
      {
        "name": "Eitorf",
        "postalCode": "53783"
      },
      {
        "name": "Rheine",
        "postalCode": "48432"
      },
      {
        "name": "Delbrück",
        "postalCode": "33129"
      },
      {
        "name": "Hüllhorst",
        "postalCode": "32609"
      },
      {
        "name": "Steinheim",
        "postalCode": "32839"
      },
      {
        "name": "Nieheim",
        "postalCode": "33039"
      },
      {
        "name": "Lüdenscheid",
        "postalCode": "58513"
      },
      {
        "name": "Menden",
        "postalCode": "58708"
      },
      {
        "name": "Everswinkel",
        "postalCode": "48351"
      },
      {
        "name": "Olpe",
        "postalCode": "57462"
      },
      {
        "name": "Lippetal",
        "postalCode": "59510"
      },
      {
        "name": "Neunkirchen",
        "postalCode": "57290"
      },
      {
        "name": "Netphen",
        "postalCode": "57250"
      },
      {
        "name": "Rietberg",
        "postalCode": "33397"
      },
      {
        "name": "Münster",
        "postalCode": "48163"
      },
      {
        "name": "Dortmund",
        "postalCode": "44309"
      },
      {
        "name": "Ascheberg",
        "postalCode": "59387"
      },
      {
        "name": "Stolberg (Rhld.)",
        "postalCode": "52222"
      },
      {
        "name": "Zülpich",
        "postalCode": "53909"
      },
      {
        "name": "Blankenheim",
        "postalCode": "53945"
      },
      {
        "name": "Duisburg",
        "postalCode": "47229"
      },
      {
        "name": "Neuss",
        "postalCode": "41469"
      },
      {
        "name": "Dinslaken",
        "postalCode": "46537"
      },
      {
        "name": "Dormagen",
        "postalCode": "41540"
      },
      {
        "name": "Ratingen",
        "postalCode": "40880"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46149"
      },
      {
        "name": "Monheim am Rhein",
        "postalCode": "40789"
      },
      {
        "name": "Köln",
        "postalCode": "50937"
      },
      {
        "name": "Köln",
        "postalCode": "50997"
      },
      {
        "name": "Hilden",
        "postalCode": "40724"
      },
      {
        "name": "Köln",
        "postalCode": "50668"
      },
      {
        "name": "Essen",
        "postalCode": "45141"
      },
      {
        "name": "Essen",
        "postalCode": "45327"
      },
      {
        "name": "Altenberge",
        "postalCode": "48341"
      },
      {
        "name": "Essen",
        "postalCode": "45277"
      },
      {
        "name": "Bonn",
        "postalCode": "53127"
      },
      {
        "name": "Marl",
        "postalCode": "45770"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45888"
      },
      {
        "name": "Sankt Augustin",
        "postalCode": "53757"
      },
      {
        "name": "Recklinghausen",
        "postalCode": "45659"
      },
      {
        "name": "Bochum",
        "postalCode": "44795"
      },
      {
        "name": "Düren",
        "postalCode": "52353"
      },
      {
        "name": "Alpen",
        "postalCode": "46519"
      },
      {
        "name": "Grevenbroich",
        "postalCode": "41516"
      },
      {
        "name": "Krefeld",
        "postalCode": "47800"
      },
      {
        "name": "Meerbusch",
        "postalCode": "40668"
      },
      {
        "name": "Frechen",
        "postalCode": "50226"
      },
      {
        "name": "Raesfeld",
        "postalCode": "46348"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40479"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40477"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40235"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40597"
      },
      {
        "name": "Köln",
        "postalCode": "50939"
      },
      {
        "name": "Bottrop",
        "postalCode": "46238"
      },
      {
        "name": "Köln",
        "postalCode": "50667"
      },
      {
        "name": "Velbert",
        "postalCode": "42549"
      },
      {
        "name": "Marl",
        "postalCode": "45768"
      },
      {
        "name": "Lüdenscheid",
        "postalCode": "58511"
      },
      {
        "name": "Halver",
        "postalCode": "58553"
      },
      {
        "name": "Hagen",
        "postalCode": "58095"
      },
      {
        "name": "Dortmund",
        "postalCode": "44328"
      },
      {
        "name": "Hagen",
        "postalCode": "58119"
      },
      {
        "name": "Werne",
        "postalCode": "59368"
      },
      {
        "name": "Saerbeck",
        "postalCode": "48369"
      },
      {
        "name": "Essen",
        "postalCode": "45289"
      },
      {
        "name": "Bonn",
        "postalCode": "53227"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42109"
      },
      {
        "name": "Herne",
        "postalCode": "44652"
      },
      {
        "name": "Recklinghausen",
        "postalCode": "45663"
      },
      {
        "name": "Bochum",
        "postalCode": "44805"
      },
      {
        "name": "Winterberg",
        "postalCode": "59955"
      },
      {
        "name": "Enger",
        "postalCode": "32130"
      },
      {
        "name": "Schloß Holte-Stukenbrock",
        "postalCode": "33758"
      },
      {
        "name": "Löhne",
        "postalCode": "32584"
      },
      {
        "name": "Augustdorf",
        "postalCode": "32832"
      },
      {
        "name": "Schlangen",
        "postalCode": "33189"
      },
      {
        "name": "Lotte",
        "postalCode": "49504"
      },
      {
        "name": "Bad Laasphe",
        "postalCode": "57334"
      },
      {
        "name": "Lippstadt",
        "postalCode": "59558"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41069"
      },
      {
        "name": "Rheurdt",
        "postalCode": "47509"
      },
      {
        "name": "Moers",
        "postalCode": "47447"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46117"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46119"
      },
      {
        "name": "Erkrath",
        "postalCode": "40699"
      },
      {
        "name": "Dorsten",
        "postalCode": "46282"
      },
      {
        "name": "Essen",
        "postalCode": "45359"
      },
      {
        "name": "Leverkusen",
        "postalCode": "51371"
      },
      {
        "name": "Köln",
        "postalCode": "50931"
      },
      {
        "name": "Köln",
        "postalCode": "51103"
      },
      {
        "name": "Essen",
        "postalCode": "45136"
      },
      {
        "name": "Essen",
        "postalCode": "45309"
      },
      {
        "name": "Hagen",
        "postalCode": "58097"
      },
      {
        "name": "Nümbrecht",
        "postalCode": "51588"
      },
      {
        "name": "Nordkirchen",
        "postalCode": "59394"
      },
      {
        "name": "Hagen",
        "postalCode": "58095"
      },
      {
        "name": "Dortmund",
        "postalCode": "44319"
      },
      {
        "name": "Iserlohn",
        "postalCode": "58642"
      },
      {
        "name": "Münster",
        "postalCode": "48157"
      },
      {
        "name": "Dortmund",
        "postalCode": "44359"
      },
      {
        "name": "Dortmund",
        "postalCode": "44357"
      },
      {
        "name": "Spenge",
        "postalCode": "32139"
      },
      {
        "name": "Paderborn",
        "postalCode": "33106"
      },
      {
        "name": "Hamm",
        "postalCode": "59063"
      },
      {
        "name": "Sundern",
        "postalCode": "59846"
      },
      {
        "name": "Arnsberg",
        "postalCode": "59821"
      },
      {
        "name": "Bünde",
        "postalCode": "32257"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33689"
      },
      {
        "name": "Hiddenhausen",
        "postalCode": "32120"
      },
      {
        "name": "Horn-Bad Meinberg",
        "postalCode": "32805"
      },
      {
        "name": "Versmold",
        "postalCode": "33775"
      },
      {
        "name": "Halle (Westfalen)",
        "postalCode": "33790"
      },
      {
        "name": "Lüdenscheid",
        "postalCode": "58507"
      },
      {
        "name": "Münster",
        "postalCode": "48147"
      },
      {
        "name": "Fröndenberg/Ruhr",
        "postalCode": "58730"
      },
      {
        "name": "Telgte",
        "postalCode": "48291"
      },
      {
        "name": "Lengerich",
        "postalCode": "49525"
      },
      {
        "name": "Aachen",
        "postalCode": "52066"
      },
      {
        "name": "Wassenberg",
        "postalCode": "41849"
      },
      {
        "name": "Kalkar",
        "postalCode": "47546"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41063"
      },
      {
        "name": "Nörvenich",
        "postalCode": "52388"
      },
      {
        "name": "Kerpen",
        "postalCode": "50169"
      },
      {
        "name": "Duisburg",
        "postalCode": "47055"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46147"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40472"
      },
      {
        "name": "Stadtlohn",
        "postalCode": "48703"
      },
      {
        "name": "Köln",
        "postalCode": "51107"
      },
      {
        "name": "Hagen",
        "postalCode": "58091"
      },
      {
        "name": "Dortmund",
        "postalCode": "44145"
      },
      {
        "name": "Dortmund",
        "postalCode": "44269"
      },
      {
        "name": "Hopsten",
        "postalCode": "48496"
      },
      {
        "name": "Bochum",
        "postalCode": "44869"
      },
      {
        "name": "Bonn",
        "postalCode": "53179"
      },
      {
        "name": "Bedburg-Hau",
        "postalCode": "47551"
      },
      {
        "name": "Alsdorf",
        "postalCode": "52477"
      },
      {
        "name": "Roetgen",
        "postalCode": "52159"
      },
      {
        "name": "Monschau",
        "postalCode": "52156"
      },
      {
        "name": "Simmerath",
        "postalCode": "52152"
      },
      {
        "name": "Niederzier",
        "postalCode": "52382"
      },
      {
        "name": "Neukirchen-Vluyn",
        "postalCode": "47506"
      },
      {
        "name": "Duisburg",
        "postalCode": "47139"
      },
      {
        "name": "Pulheim",
        "postalCode": "50259"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40468"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40470"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40599"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45475"
      },
      {
        "name": "Köln",
        "postalCode": "50739"
      },
      {
        "name": "Köln",
        "postalCode": "50968"
      },
      {
        "name": "Bonn",
        "postalCode": "53125"
      },
      {
        "name": "Rosendahl",
        "postalCode": "48720"
      },
      {
        "name": "Lippstadt",
        "postalCode": "59557"
      },
      {
        "name": "Rüthen",
        "postalCode": "59602"
      },
      {
        "name": "Mettingen",
        "postalCode": "49497"
      },
      {
        "name": "Lienen",
        "postalCode": "49536"
      },
      {
        "name": "Ense",
        "postalCode": "59469"
      },
      {
        "name": "Möhnesee",
        "postalCode": "59519"
      },
      {
        "name": "Arnsberg",
        "postalCode": "59823"
      },
      {
        "name": "Wilnsdorf",
        "postalCode": "57234"
      },
      {
        "name": "Lüdenscheid",
        "postalCode": "58515"
      },
      {
        "name": "Münster",
        "postalCode": "48159"
      },
      {
        "name": "Preußisch Oldendorf",
        "postalCode": "32361"
      },
      {
        "name": "Salzkotten",
        "postalCode": "33154"
      },
      {
        "name": "Hövelhof",
        "postalCode": "33161"
      },
      {
        "name": "Bad Lippspringe",
        "postalCode": "33175"
      },
      {
        "name": "Minden",
        "postalCode": "32429"
      },
      {
        "name": "Bad Oeynhausen",
        "postalCode": "32547"
      },
      {
        "name": "Herzogenrath",
        "postalCode": "52134"
      },
      {
        "name": "Niederkrüchten",
        "postalCode": "41372"
      },
      {
        "name": "Langerwehe",
        "postalCode": "52379"
      },
      {
        "name": "Dahlem",
        "postalCode": "53949"
      },
      {
        "name": "Neuss",
        "postalCode": "41462"
      },
      {
        "name": "Neuss",
        "postalCode": "41468"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40489"
      },
      {
        "name": "Dinslaken",
        "postalCode": "46539"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40472"
      },
      {
        "name": "Velen",
        "postalCode": "46342"
      },
      {
        "name": "Köln",
        "postalCode": "50676"
      },
      {
        "name": "Köln",
        "postalCode": "50733"
      },
      {
        "name": "Essen",
        "postalCode": "45127"
      },
      {
        "name": "Bonn",
        "postalCode": "53119"
      },
      {
        "name": "Essen",
        "postalCode": "45259"
      },
      {
        "name": "Nachrodt-Wiblingwerde",
        "postalCode": "58769"
      },
      {
        "name": "Iserlohn",
        "postalCode": "58640"
      },
      {
        "name": "Unna",
        "postalCode": "59423"
      },
      {
        "name": "Hamm",
        "postalCode": "59073"
      },
      {
        "name": "Steinhagen",
        "postalCode": "33803"
      },
      {
        "name": "Lünen",
        "postalCode": "44536"
      },
      {
        "name": "Dortmund",
        "postalCode": "44339"
      },
      {
        "name": "Steinfurt",
        "postalCode": "48565"
      },
      {
        "name": "Gütersloh",
        "postalCode": "33335"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33619"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33615"
      },
      {
        "name": "Paderborn",
        "postalCode": "33102"
      },
      {
        "name": "Blomberg",
        "postalCode": "32825"
      },
      {
        "name": "Willebadessen",
        "postalCode": "34439"
      },
      {
        "name": "Höxter",
        "postalCode": "37671"
      },
      {
        "name": "Holzwickede",
        "postalCode": "59439"
      },
      {
        "name": "Ibbenbüren",
        "postalCode": "49479"
      },
      {
        "name": "Drensteinfurt",
        "postalCode": "48317"
      },
      {
        "name": "Münster",
        "postalCode": "48145"
      },
      {
        "name": "Hemer",
        "postalCode": "58675"
      },
      {
        "name": "Rheda-Wiedenbrück",
        "postalCode": "33378"
      },
      {
        "name": "Bestwig",
        "postalCode": "59909"
      },
      {
        "name": "Herten",
        "postalCode": "45701"
      },
      {
        "name": "Bonn",
        "postalCode": "53229"
      },
      {
        "name": "Remscheid",
        "postalCode": "42857"
      },
      {
        "name": "Bochum",
        "postalCode": "44797"
      },
      {
        "name": "Herne",
        "postalCode": "44623"
      },
      {
        "name": "Horstmar",
        "postalCode": "48612"
      },
      {
        "name": "Grefrath",
        "postalCode": "47929"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41189"
      },
      {
        "name": "Viersen",
        "postalCode": "41748"
      },
      {
        "name": "Düren",
        "postalCode": "52355"
      },
      {
        "name": "Kaarst",
        "postalCode": "41564"
      },
      {
        "name": "Duisburg",
        "postalCode": "47137"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45479"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46145"
      },
      {
        "name": "Alfter",
        "postalCode": "53347"
      },
      {
        "name": "Haltern am See",
        "postalCode": "45721"
      },
      {
        "name": "Dortmund",
        "postalCode": "44287"
      },
      {
        "name": "Dortmund",
        "postalCode": "44388"
      },
      {
        "name": "Soest",
        "postalCode": "59494"
      },
      {
        "name": "Kevelaer-Twisteden",
        "postalCode": "47624"
      },
      {
        "name": "Elsdorf",
        "postalCode": "50189"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40474"
      },
      {
        "name": "Duisburg",
        "postalCode": "47058"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45478"
      },
      {
        "name": "Ahaus",
        "postalCode": "48683"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45468"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45896"
      },
      {
        "name": "Solingen",
        "postalCode": "42719"
      },
      {
        "name": "Dortmund",
        "postalCode": "44289"
      },
      {
        "name": "Lüdenscheid",
        "postalCode": "58509"
      },
      {
        "name": "Reichshof",
        "postalCode": "51580"
      },
      {
        "name": "Ladbergen",
        "postalCode": "49549"
      },
      {
        "name": "Dortmund",
        "postalCode": "44229"
      },
      {
        "name": "Windeck",
        "postalCode": "51570"
      },
      {
        "name": "Gütersloh",
        "postalCode": "33332"
      },
      {
        "name": "Gevelsberg",
        "postalCode": "58285"
      },
      {
        "name": "Witten",
        "postalCode": "58453"
      },
      {
        "name": "Burscheid",
        "postalCode": "51399"
      },
      {
        "name": "Bochum",
        "postalCode": "44879"
      },
      {
        "name": "Bochum",
        "postalCode": "44867"
      },
      {
        "name": "Siegburg",
        "postalCode": "53721"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33605"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33609"
      },
      {
        "name": "Oerlinghausen",
        "postalCode": "33813"
      },
      {
        "name": "Herford",
        "postalCode": "32049"
      },
      {
        "name": "Dörentrup",
        "postalCode": "32694"
      },
      {
        "name": "Marienmünster",
        "postalCode": "37696"
      },
      {
        "name": "Arnsberg",
        "postalCode": "59757"
      },
      {
        "name": "Ennigerloh",
        "postalCode": "59320"
      },
      {
        "name": "Arnsberg",
        "postalCode": "59759"
      },
      {
        "name": "Kleve",
        "postalCode": "47533"
      },
      {
        "name": "Wegberg",
        "postalCode": "41844"
      },
      {
        "name": "Linnich",
        "postalCode": "52441"
      },
      {
        "name": "Kempen",
        "postalCode": "47906"
      },
      {
        "name": "Tönisvorst",
        "postalCode": "47918"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41236"
      },
      {
        "name": "Krefeld",
        "postalCode": "47803"
      },
      {
        "name": "Krefeld",
        "postalCode": "47799"
      },
      {
        "name": "Neuss",
        "postalCode": "41464"
      },
      {
        "name": "Duisburg",
        "postalCode": "47178"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40219"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40215"
      },
      {
        "name": "Euskirchen",
        "postalCode": "53879"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40229"
      },
      {
        "name": "Ratingen",
        "postalCode": "40882"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40625"
      },
      {
        "name": "Köln",
        "postalCode": "51063"
      },
      {
        "name": "Essen",
        "postalCode": "45138"
      },
      {
        "name": "Bonn",
        "postalCode": "53177"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45889"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42349"
      },
      {
        "name": "Herten",
        "postalCode": "45699"
      },
      {
        "name": "Troisdorf",
        "postalCode": "53840"
      },
      {
        "name": "Billerbeck",
        "postalCode": "48727"
      },
      {
        "name": "Olfen",
        "postalCode": "59399"
      },
      {
        "name": "Plettenberg",
        "postalCode": "58840"
      },
      {
        "name": "Bertelsmann",
        "postalCode": "33333"
      },
      {
        "name": "Bad Driburg",
        "postalCode": "33014"
      },
      {
        "name": "Schmallenberg",
        "postalCode": "57392"
      },
      {
        "name": "Aachen",
        "postalCode": "52074"
      },
      {
        "name": "Geilenkirchen",
        "postalCode": "52511"
      },
      {
        "name": "Kerken",
        "postalCode": "47647"
      },
      {
        "name": "Schleiden",
        "postalCode": "53937"
      },
      {
        "name": "Hamminkeln",
        "postalCode": "46499"
      },
      {
        "name": "Voerde (Niederrhein)",
        "postalCode": "46562"
      },
      {
        "name": "Moers",
        "postalCode": "47443"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40239"
      },
      {
        "name": "Bottrop",
        "postalCode": "46244"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46047"
      },
      {
        "name": "Hilden, Düsseldorf",
        "postalCode": "40721"
      },
      {
        "name": "Hilden, Düsseldorf",
        "postalCode": "40721"
      },
      {
        "name": "Langenfeld",
        "postalCode": "40764"
      },
      {
        "name": "Essen",
        "postalCode": "45329"
      },
      {
        "name": "Köln",
        "postalCode": "51067"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45883"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42113"
      },
      {
        "name": "Kürten",
        "postalCode": "51515"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42275"
      },
      {
        "name": "Geseke",
        "postalCode": "59590"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33659"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33602"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33604"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33607"
      },
      {
        "name": "Bad Salzuflen",
        "postalCode": "32107"
      },
      {
        "name": "Kalletal",
        "postalCode": "32689"
      },
      {
        "name": "Lügde",
        "postalCode": "32676"
      },
      {
        "name": "Wiehl",
        "postalCode": "51674"
      },
      {
        "name": "Hörstel",
        "postalCode": "48477"
      },
      {
        "name": "Ostbevern",
        "postalCode": "48346"
      },
      {
        "name": "Warstein",
        "postalCode": "59581"
      },
      {
        "name": "Castrop-Rauxel",
        "postalCode": "44581"
      },
      {
        "name": "Castrop-Rauxel",
        "postalCode": "44577"
      },
      {
        "name": "Waldfeucht, Heinsberg",
        "postalCode": "52525"
      },
      {
        "name": "Aachen",
        "postalCode": "52076"
      },
      {
        "name": "Aachen",
        "postalCode": "52064"
      },
      {
        "name": "Rees",
        "postalCode": "46459"
      },
      {
        "name": "Viersen",
        "postalCode": "41747"
      },
      {
        "name": "Kreuzau",
        "postalCode": "52372"
      },
      {
        "name": "Bergheim",
        "postalCode": "50126"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40591"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40629"
      },
      {
        "name": "Essen",
        "postalCode": "45219"
      },
      {
        "name": "Köln",
        "postalCode": "50737"
      },
      {
        "name": "Meckenheim",
        "postalCode": "53340"
      },
      {
        "name": "Köln",
        "postalCode": "50996"
      },
      {
        "name": "Bonn",
        "postalCode": "53225"
      },
      {
        "name": "Velbert",
        "postalCode": "42555"
      },
      {
        "name": "Hattingen",
        "postalCode": "45527"
      },
      {
        "name": "Bad Salzuflen",
        "postalCode": "32108"
      },
      {
        "name": "Detmold",
        "postalCode": "32758"
      },
      {
        "name": "Schieder-Schwalenberg",
        "postalCode": "32816"
      },
      {
        "name": "Herscheid",
        "postalCode": "58849"
      },
      {
        "name": "Westerkappeln",
        "postalCode": "49492"
      },
      {
        "name": "Kirchhundem",
        "postalCode": "57399"
      },
      {
        "name": "Beckum",
        "postalCode": "59269"
      },
      {
        "name": "Harsewinkel",
        "postalCode": "33428"
      },
      {
        "name": "Beelen",
        "postalCode": "48361"
      },
      {
        "name": "Lüdinghausen",
        "postalCode": "59348"
      },
      {
        "name": "Laer",
        "postalCode": "48366"
      },
      {
        "name": "Neuenkirchen",
        "postalCode": "48485"
      },
      {
        "name": "Witten",
        "postalCode": "58454"
      },
      {
        "name": "Essen",
        "postalCode": "45279"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45886"
      },
      {
        "name": "Remscheid",
        "postalCode": "42853"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42283"
      },
      {
        "name": "Bad Honnef",
        "postalCode": "53604"
      },
      {
        "name": "Senden",
        "postalCode": "48308"
      },
      {
        "name": "Dortmund",
        "postalCode": "44135"
      },
      {
        "name": "Espelkamp",
        "postalCode": "32339"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33609"
      },
      {
        "name": "Kirchlengern",
        "postalCode": "32278"
      },
      {
        "name": "Minden",
        "postalCode": "32425"
      },
      {
        "name": "Münster",
        "postalCode": "48165"
      },
      {
        "name": "Unna",
        "postalCode": "59427"
      },
      {
        "name": "Balve",
        "postalCode": "58802"
      },
      {
        "name": "Aachen",
        "postalCode": "52068"
      },
      {
        "name": "Aachen",
        "postalCode": "52080"
      },
      {
        "name": "Krefeld",
        "postalCode": "47807"
      },
      {
        "name": "Krefeld",
        "postalCode": "47798"
      },
      {
        "name": "Meerbusch",
        "postalCode": "40667"
      },
      {
        "name": "Neuss",
        "postalCode": "41460"
      },
      {
        "name": "Bad Münstereifel",
        "postalCode": "53902"
      },
      {
        "name": "Südlohn",
        "postalCode": "46354"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40217"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40212"
      },
      {
        "name": "Köln",
        "postalCode": "50935"
      },
      {
        "name": "Rheinbach",
        "postalCode": "53359"
      },
      {
        "name": "Bottrop",
        "postalCode": "46240"
      },
      {
        "name": "Gladbeck",
        "postalCode": "45964"
      },
      {
        "name": "Leverkusen",
        "postalCode": "51381"
      },
      {
        "name": "Hamm",
        "postalCode": "59067"
      },
      {
        "name": "Roetgen",
        "postalCode": "52159"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41179"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41069"
      },
      {
        "name": "Viersen",
        "postalCode": "41747"
      },
      {
        "name": "Issum",
        "postalCode": "47661"
      },
      {
        "name": "Bedburg",
        "postalCode": "50181"
      },
      {
        "name": "Wesel",
        "postalCode": "46487"
      },
      {
        "name": "Vettweiß",
        "postalCode": "52391"
      },
      {
        "name": "Kerpen",
        "postalCode": "50170"
      },
      {
        "name": "Rommerskirchen",
        "postalCode": "41569"
      },
      {
        "name": "Vreden",
        "postalCode": "48691"
      },
      {
        "name": "Duisburg",
        "postalCode": "47053"
      },
      {
        "name": "Köln",
        "postalCode": "50859"
      },
      {
        "name": "Köln",
        "postalCode": "50858"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40595"
      },
      {
        "name": "Dorsten",
        "postalCode": "46284"
      },
      {
        "name": "Köln",
        "postalCode": "50969"
      },
      {
        "name": "Köln",
        "postalCode": "50674"
      },
      {
        "name": "Solingen",
        "postalCode": "42699"
      },
      {
        "name": "Wachtberg",
        "postalCode": "53343"
      },
      {
        "name": "Wipperfürth",
        "postalCode": "51688"
      },
      {
        "name": "Ruppichteroth",
        "postalCode": "53809"
      },
      {
        "name": "Hagen",
        "postalCode": "58089"
      },
      {
        "name": "Troisdorf",
        "postalCode": "53842"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42117"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42369"
      },
      {
        "name": "Recklinghausen",
        "postalCode": "45657"
      },
      {
        "name": "Oer-Erkenschwick",
        "postalCode": "45739"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42289"
      },
      {
        "name": "Bochum",
        "postalCode": "44787"
      },
      {
        "name": "Herne",
        "postalCode": "44623"
      },
      {
        "name": "Hagen",
        "postalCode": "58089"
      },
      {
        "name": "Bad Salzuflen",
        "postalCode": "32105"
      },
      {
        "name": "Erndtebrück",
        "postalCode": "57339"
      },
      {
        "name": "Langenberg",
        "postalCode": "33449"
      },
      {
        "name": "Stemwede",
        "postalCode": "32351"
      },
      {
        "name": "Siegen",
        "postalCode": "57076"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33719"
      },
      {
        "name": "Minden",
        "postalCode": "32423"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41169"
      },
      {
        "name": "Willich",
        "postalCode": "47877"
      },
      {
        "name": "Bocholt",
        "postalCode": "46399"
      },
      {
        "name": "Krefeld",
        "postalCode": "47805"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40545"
      },
      {
        "name": "Euskirchen",
        "postalCode": "53879"
      },
      {
        "name": "Köln",
        "postalCode": "50769"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45481"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40627"
      },
      {
        "name": "Köln",
        "postalCode": "50825"
      },
      {
        "name": "Dorsten",
        "postalCode": "46286"
      },
      {
        "name": "Gladbeck",
        "postalCode": "45966"
      },
      {
        "name": "Köln",
        "postalCode": "50735"
      },
      {
        "name": "Essen",
        "postalCode": "45149"
      },
      {
        "name": "Leverkusen",
        "postalCode": "51377"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45899"
      },
      {
        "name": "Dortmund",
        "postalCode": "44225"
      },
      {
        "name": "Münster",
        "postalCode": "48161"
      },
      {
        "name": "Schalksmühle",
        "postalCode": "58579"
      },
      {
        "name": "Siegen",
        "postalCode": "57078"
      },
      {
        "name": "Sassenberg",
        "postalCode": "48336"
      },
      {
        "name": "Hilchenbach",
        "postalCode": "57271"
      },
      {
        "name": "Hamm",
        "postalCode": "59077"
      },
      {
        "name": "Bochum",
        "postalCode": "44894"
      },
      {
        "name": "Much",
        "postalCode": "53804"
      },
      {
        "name": "Herdecke",
        "postalCode": "58313"
      },
      {
        "name": "Essen",
        "postalCode": "45276"
      },
      {
        "name": "Köln",
        "postalCode": "51145"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42279"
      },
      {
        "name": "Remscheid",
        "postalCode": "42897"
      },
      {
        "name": "Bad Sassendorf",
        "postalCode": "59505"
      },
      {
        "name": "Bad Berleburg",
        "postalCode": "57319"
      },
      {
        "name": "Münster",
        "postalCode": "48149"
      },
      {
        "name": "Münster",
        "postalCode": "48153"
      },
      {
        "name": "Recke",
        "postalCode": "49509"
      },
      {
        "name": "Ibbenbüren",
        "postalCode": "49477"
      },
      {
        "name": "Drolshagen",
        "postalCode": "57489"
      },
      {
        "name": "Gummersbach",
        "postalCode": "51643"
      },
      {
        "name": "Waldbröl",
        "postalCode": "51545"
      },
      {
        "name": "Paderborn",
        "postalCode": "33104"
      },
      {
        "name": "Brüggen",
        "postalCode": "41379"
      },
      {
        "name": "Aachen",
        "postalCode": "52062"
      },
      {
        "name": "Nettetal",
        "postalCode": "41334"
      },
      {
        "name": "Sonsbeck",
        "postalCode": "47665"
      },
      {
        "name": "Mechernich",
        "postalCode": "53894"
      },
      {
        "name": "Moers",
        "postalCode": "47441"
      },
      {
        "name": "Wesel",
        "postalCode": "46485"
      },
      {
        "name": "Erftstadt",
        "postalCode": "50374"
      },
      {
        "name": "Duisburg",
        "postalCode": "47169"
      },
      {
        "name": "Duisburg",
        "postalCode": "47051"
      },
      {
        "name": "Köln",
        "postalCode": "50827"
      },
      {
        "name": "Heiden",
        "postalCode": "46359"
      },
      {
        "name": "Köln",
        "postalCode": "51105"
      },
      {
        "name": "Essen",
        "postalCode": "45134"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42327"
      },
      {
        "name": "Waltrop",
        "postalCode": "45731"
      },
      {
        "name": "Dülmen",
        "postalCode": "48249"
      },
      {
        "name": "Bochum",
        "postalCode": "44867"
      },
      {
        "name": "Herne",
        "postalCode": "44653"
      },
      {
        "name": "Metelen",
        "postalCode": "48629"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42285"
      },
      {
        "name": "Aachen",
        "postalCode": "52072"
      },
      {
        "name": "Viersen",
        "postalCode": "41751"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41061"
      },
      {
        "name": "Kamp-Lintfort",
        "postalCode": "47475"
      },
      {
        "name": "Düren",
        "postalCode": "52351"
      },
      {
        "name": "Dinslaken",
        "postalCode": "46535"
      },
      {
        "name": "Schermbeck",
        "postalCode": "46514"
      },
      {
        "name": "Borken",
        "postalCode": "46325"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40223"
      },
      {
        "name": "Köln",
        "postalCode": "50765"
      },
      {
        "name": "Swisttal",
        "postalCode": "53913"
      },
      {
        "name": "Köln",
        "postalCode": "50670"
      },
      {
        "name": "Essen",
        "postalCode": "45143"
      },
      {
        "name": "Gladbeck",
        "postalCode": "45968"
      },
      {
        "name": "Bonn",
        "postalCode": "53121"
      },
      {
        "name": "Gummersbach",
        "postalCode": "51647"
      },
      {
        "name": "Hückeswagen",
        "postalCode": "42499"
      },
      {
        "name": "Radevormwald",
        "postalCode": "42477"
      },
      {
        "name": "Witten",
        "postalCode": "58452"
      },
      {
        "name": "Gelsenkirchen Rotthausen",
        "postalCode": "45884"
      },
      {
        "name": "Schöppingen",
        "postalCode": "48624"
      },
      {
        "name": "Herne",
        "postalCode": "44649"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42281"
      },
      {
        "name": "Herne",
        "postalCode": "44629"
      },
      {
        "name": "Borchen",
        "postalCode": "33178"
      },
      {
        "name": "Vlotho",
        "postalCode": "32602"
      },
      {
        "name": "Lichtenau",
        "postalCode": "33165"
      },
      {
        "name": "Herzebrock-Clarholz",
        "postalCode": "33442"
      },
      {
        "name": "Gütersloh",
        "postalCode": "33330"
      },
      {
        "name": "Kamen",
        "postalCode": "59174"
      },
      {
        "name": "Morsbach",
        "postalCode": "51597"
      },
      {
        "name": "Iserlohn",
        "postalCode": "58638"
      },
      {
        "name": "Bönen",
        "postalCode": "59199"
      },
      {
        "name": "Neuenrade",
        "postalCode": "58809"
      },
      {
        "name": "Emmerich am Rhein",
        "postalCode": "46446"
      },
      {
        "name": "Schwalmtal",
        "postalCode": "41366"
      },
      {
        "name": "Heimbach",
        "postalCode": "52396"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41063"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41199"
      },
      {
        "name": "Düren",
        "postalCode": "52349"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41061"
      },
      {
        "name": "Grevenbroich",
        "postalCode": "41517"
      },
      {
        "name": "Grevenbroich",
        "postalCode": "41515"
      },
      {
        "name": "Rhede",
        "postalCode": "46414"
      },
      {
        "name": "Duisburg",
        "postalCode": "47226"
      },
      {
        "name": "Ratingen",
        "postalCode": "40883"
      },
      {
        "name": "Köln",
        "postalCode": "50939"
      },
      {
        "name": "Gronau",
        "postalCode": "48599"
      },
      {
        "name": "Essen",
        "postalCode": "45326"
      },
      {
        "name": "Essen",
        "postalCode": "45257"
      },
      {
        "name": "Menden",
        "postalCode": "58710"
      },
      {
        "name": "Ahlen",
        "postalCode": "59229"
      },
      {
        "name": "Rheine",
        "postalCode": "48429"
      },
      {
        "name": "Emsdetten",
        "postalCode": "48282"
      },
      {
        "name": "Hagen",
        "postalCode": "58093"
      },
      {
        "name": "Dortmund",
        "postalCode": "44329"
      },
      {
        "name": "Kierspe",
        "postalCode": "58566"
      },
      {
        "name": "Bergisch Gladbach",
        "postalCode": "51467"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42103"
      },
      {
        "name": "Herne",
        "postalCode": "44651"
      },
      {
        "name": "Bochum",
        "postalCode": "44793"
      },
      {
        "name": "Bochum",
        "postalCode": "44809"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42277"
      },
      {
        "name": "Bochum",
        "postalCode": "44801"
      },
      {
        "name": "Lindlar",
        "postalCode": "51789"
      },
      {
        "name": "Schwelm",
        "postalCode": "58332"
      },
      {
        "name": "Dortmund",
        "postalCode": "44149"
      },
      {
        "name": "Olsberg",
        "postalCode": "59939"
      },
      {
        "name": "Verl",
        "postalCode": "33415"
      },
      {
        "name": "Brilon",
        "postalCode": "59929"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33611"
      },
      {
        "name": "Borgholzhausen",
        "postalCode": "33829"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33613"
      },
      {
        "name": "Viersen",
        "postalCode": "41749"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41065"
      },
      {
        "name": "Jüchen",
        "postalCode": "41363"
      },
      {
        "name": "Krefeld",
        "postalCode": "47802"
      },
      {
        "name": "Krefeld",
        "postalCode": "47809"
      },
      {
        "name": "Duisburg",
        "postalCode": "47057"
      },
      {
        "name": "Oberhausen",
        "postalCode": "46049"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45473"
      },
      {
        "name": "Köln",
        "postalCode": "50735"
      },
      {
        "name": "Essen",
        "postalCode": "45355"
      },
      {
        "name": "Solingen",
        "postalCode": "42697"
      },
      {
        "name": "Köln",
        "postalCode": "51061"
      },
      {
        "name": "Köln",
        "postalCode": "51109"
      },
      {
        "name": "Dortmund",
        "postalCode": "44263"
      },
      {
        "name": "Freudenberg",
        "postalCode": "57258"
      },
      {
        "name": "Burbach",
        "postalCode": "57299"
      },
      {
        "name": "Meinerzhagen",
        "postalCode": "58540"
      },
      {
        "name": "Hamm",
        "postalCode": "59065"
      },
      {
        "name": "Wenden",
        "postalCode": "57482"
      },
      {
        "name": "Bergisch Gladbach",
        "postalCode": "51469"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42111"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42119"
      },
      {
        "name": "Königswinter",
        "postalCode": "53639"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42287"
      },
      {
        "name": "Ennepetal",
        "postalCode": "58256"
      },
      {
        "name": "Aachen",
        "postalCode": "52070"
      },
      {
        "name": "Stolberg",
        "postalCode": "52224"
      },
      {
        "name": "Uedem",
        "postalCode": "47589"
      },
      {
        "name": "Kevelaer-Kervenheim",
        "postalCode": "47627"
      },
      {
        "name": "Jülich",
        "postalCode": "52428"
      },
      {
        "name": "Isselburg",
        "postalCode": "46419"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41238"
      },
      {
        "name": "Kerpen",
        "postalCode": "50170"
      },
      {
        "name": "Duisburg",
        "postalCode": "47228"
      },
      {
        "name": "Weilerswist",
        "postalCode": "53919"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40210"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40211"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45472"
      },
      {
        "name": "Gescher",
        "postalCode": "48712"
      },
      {
        "name": "Essen",
        "postalCode": "45131"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42329"
      },
      {
        "name": "Legden",
        "postalCode": "48739"
      },
      {
        "name": "Solingen",
        "postalCode": "42651"
      },
      {
        "name": "Recklinghausen",
        "postalCode": "45661"
      },
      {
        "name": "Altenbeken",
        "postalCode": "33184"
      },
      {
        "name": "Hamm",
        "postalCode": "59069"
      },
      {
        "name": "Arnsberg",
        "postalCode": "59755"
      },
      {
        "name": "Siegen",
        "postalCode": "57074"
      },
      {
        "name": "Eslohe",
        "postalCode": "59889"
      },
      {
        "name": "Lünen",
        "postalCode": "44532"
      },
      {
        "name": "Bergkamen",
        "postalCode": "59192"
      },
      {
        "name": "Münster",
        "postalCode": "48151"
      },
      {
        "name": "Bergneustadt",
        "postalCode": "51702"
      },
      {
        "name": "Werdohl",
        "postalCode": "58791"
      },
      {
        "name": "Attendorn",
        "postalCode": "57439"
      },
      {
        "name": "Erwitte",
        "postalCode": "59597"
      },
      {
        "name": "Bochum",
        "postalCode": "44892"
      },
      {
        "name": "Dortmund",
        "postalCode": "44379"
      },
      {
        "name": "Selm",
        "postalCode": "59379"
      },
      {
        "name": "Rahden",
        "postalCode": "32369"
      },
      {
        "name": "Lage",
        "postalCode": "32791"
      },
      {
        "name": "Paderborn",
        "postalCode": "33098"
      },
      {
        "name": "Warendorf",
        "postalCode": "48231"
      },
      {
        "name": "Marienheide",
        "postalCode": "51709"
      },
      {
        "name": "Dortmund",
        "postalCode": "44141"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45892"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45879"
      },
      {
        "name": "Bonn",
        "postalCode": "53175"
      },
      {
        "name": "Bonn",
        "postalCode": "53113"
      },
      {
        "name": "Ochtrup",
        "postalCode": "48607"
      },
      {
        "name": "Bonn",
        "postalCode": "53173"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42107"
      },
      {
        "name": "Remscheid",
        "postalCode": "42855"
      },
      {
        "name": "Lohmar",
        "postalCode": "53797"
      },
      {
        "name": "Herne",
        "postalCode": "44628"
      },
      {
        "name": "Bochum",
        "postalCode": "44803"
      },
      {
        "name": "Weeze",
        "postalCode": "47652"
      },
      {
        "name": "Roetgen",
        "postalCode": "52159"
      },
      {
        "name": "Monschau",
        "postalCode": "52156"
      },
      {
        "name": "Aldenhoven",
        "postalCode": "52457"
      },
      {
        "name": "Rheinberg",
        "postalCode": "47495"
      },
      {
        "name": "Neuss",
        "postalCode": "41472"
      },
      {
        "name": "Duisburg",
        "postalCode": "47167"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40233"
      },
      {
        "name": "Dormagen",
        "postalCode": "41539"
      },
      {
        "name": "Köln",
        "postalCode": "50667"
      },
      {
        "name": "Essen",
        "postalCode": "45145"
      },
      {
        "name": "Lübbecke",
        "postalCode": "32312"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33729"
      },
      {
        "name": "Leopoldshöhe",
        "postalCode": "33818"
      },
      {
        "name": "Porta Westfalica",
        "postalCode": "32457"
      },
      {
        "name": "Extertal",
        "postalCode": "32699"
      },
      {
        "name": "Stolberg (Rhld.)",
        "postalCode": "52223"
      },
      {
        "name": "Eschweiler",
        "postalCode": "52249"
      },
      {
        "name": "Geldern",
        "postalCode": "47608"
      },
      {
        "name": "Monschau",
        "postalCode": "52156"
      },
      {
        "name": "Bocholt",
        "postalCode": "46395"
      },
      {
        "name": "Wesel",
        "postalCode": "46483"
      },
      {
        "name": "Bergheim",
        "postalCode": "50127"
      },
      {
        "name": "Bergheim",
        "postalCode": "50129"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40221"
      },
      {
        "name": "Duisburg",
        "postalCode": "47269"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40213"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40227"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45476"
      },
      {
        "name": "Köln",
        "postalCode": "50823"
      },
      {
        "name": "Köln",
        "postalCode": "50672"
      },
      {
        "name": "Reken",
        "postalCode": "48734"
      },
      {
        "name": "Köln",
        "postalCode": "50999"
      },
      {
        "name": "Köln",
        "postalCode": "51065"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45894"
      },
      {
        "name": "Velbert",
        "postalCode": "42551"
      },
      {
        "name": "Bonn",
        "postalCode": "53123"
      },
      {
        "name": "Solingen",
        "postalCode": "42655"
      },
      {
        "name": "Dortmund",
        "postalCode": "44139"
      },
      {
        "name": "Hagen",
        "postalCode": "58093"
      },
      {
        "name": "Greven",
        "postalCode": "48268"
      },
      {
        "name": "Finnentrop",
        "postalCode": "57413"
      },
      {
        "name": "Kreuztal",
        "postalCode": "57223"
      },
      {
        "name": "Wadersloh",
        "postalCode": "59329"
      },
      {
        "name": "Solingen",
        "postalCode": "42659"
      },
      {
        "name": "Odenthal",
        "postalCode": "51519"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42105"
      },
      {
        "name": "Bochum",
        "postalCode": "44801"
      },
      {
        "name": "Witten",
        "postalCode": "58455"
      },
      {
        "name": "Neunkirchen-Seelscheid",
        "postalCode": "53819"
      },
      {
        "name": "Breckerfeld",
        "postalCode": "58339"
      },
      {
        "name": "Bad Oeynhausen",
        "postalCode": "32549"
      },
      {
        "name": "Bad Oeynhausen",
        "postalCode": "32545"
      },
      {
        "name": "Lemgo",
        "postalCode": "32657"
      },
      {
        "name": "Brakel",
        "postalCode": "33034"
      },
      {
        "name": "Dortmund",
        "postalCode": "44265"
      },
      {
        "name": "Coesfeld",
        "postalCode": "48653"
      },
      {
        "name": "Marl",
        "postalCode": "45772"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45897"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42389"
      },
      {
        "name": "Witten",
        "postalCode": "58456"
      },
      {
        "name": "Castrop-Rauxel",
        "postalCode": "44575"
      },
      {
        "name": "Aachen",
        "postalCode": "52078"
      },
      {
        "name": "Straelen",
        "postalCode": "47638"
      },
      {
        "name": "Hürtgenwald",
        "postalCode": "52393"
      },
      {
        "name": "Xanten",
        "postalCode": "46509"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41066"
      },
      {
        "name": "Krefeld",
        "postalCode": "47839"
      },
      {
        "name": "Korschenbroich",
        "postalCode": "41352"
      },
      {
        "name": "Nettersheim",
        "postalCode": "53947"
      },
      {
        "name": "Hünxe",
        "postalCode": "46569"
      },
      {
        "name": "Hürth",
        "postalCode": "50354"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40211"
      },
      {
        "name": "Ratingen",
        "postalCode": "40885"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40231"
      },
      {
        "name": "Mülheim an der Ruhr",
        "postalCode": "45470"
      },
      {
        "name": "Essen",
        "postalCode": "45357"
      },
      {
        "name": "Bottrop",
        "postalCode": "46236"
      },
      {
        "name": "Hilden",
        "postalCode": "40723"
      },
      {
        "name": "Essen",
        "postalCode": "45239"
      },
      {
        "name": "Köln",
        "postalCode": "50679"
      },
      {
        "name": "Niederkassel",
        "postalCode": "53859"
      },
      {
        "name": "Köln",
        "postalCode": "51149"
      },
      {
        "name": "Solingen",
        "postalCode": "42657"
      },
      {
        "name": "Münster",
        "postalCode": "48155"
      },
      {
        "name": "Ahlen",
        "postalCode": "59227"
      },
      {
        "name": "Werl",
        "postalCode": "59457"
      },
      {
        "name": "Siegen",
        "postalCode": "57080"
      },
      {
        "name": "Lennestadt",
        "postalCode": "57368"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33617"
      },
      {
        "name": "Bromskirchen, Hallenberg",
        "postalCode": "59969"
      },
      {
        "name": "Minden",
        "postalCode": "32427"
      },
      {
        "name": "Barntrup",
        "postalCode": "32683"
      },
      {
        "name": "Castrop-Rauxel",
        "postalCode": "44577"
      },
      {
        "name": "Engelskirchen",
        "postalCode": "51766"
      },
      {
        "name": "Rheine",
        "postalCode": "48432"
      },
      {
        "name": "Dortmund",
        "postalCode": "44369"
      },
      {
        "name": "Rheine",
        "postalCode": "48431"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45891"
      },
      {
        "name": "Troisdorf",
        "postalCode": "53844"
      },
      {
        "name": "Bonn",
        "postalCode": "53111"
      },
      {
        "name": "Sprockhövel",
        "postalCode": "45549"
      },
      {
        "name": "Recklinghausen",
        "postalCode": "45665"
      },
      {
        "name": "Datteln",
        "postalCode": "45711"
      },
      {
        "name": "Dortmund",
        "postalCode": "44147"
      },
      {
        "name": "Kranenburg",
        "postalCode": "47559"
      },
      {
        "name": "Würselen",
        "postalCode": "52146"
      },
      {
        "name": "Hückelhoven",
        "postalCode": "41836"
      },
      {
        "name": "Simmerath",
        "postalCode": "52152"
      },
      {
        "name": "Inden",
        "postalCode": "52459"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41239"
      },
      {
        "name": "Merzenich",
        "postalCode": "52399"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40549"
      },
      {
        "name": "Duisburg",
        "postalCode": "47249"
      },
      {
        "name": "Duisburg",
        "postalCode": "47138"
      },
      {
        "name": "Duisburg",
        "postalCode": "47279"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40589"
      },
      {
        "name": "Köln",
        "postalCode": "50829"
      },
      {
        "name": "Brühl",
        "postalCode": "50321"
      },
      {
        "name": "Heiligenhaus",
        "postalCode": "42579"
      },
      {
        "name": "Wesseling",
        "postalCode": "50389"
      },
      {
        "name": "Köln",
        "postalCode": "51143"
      },
      {
        "name": "Heek",
        "postalCode": "48619"
      },
      {
        "name": "Essen",
        "postalCode": "45139"
      },
      {
        "name": "Münster",
        "postalCode": "48143"
      },
      {
        "name": "Iserlohn",
        "postalCode": "58636"
      },
      {
        "name": "Bielefeld",
        "postalCode": "33699"
      },
      {
        "name": "Wünnenberg",
        "postalCode": "33181"
      },
      {
        "name": "Detmold",
        "postalCode": "32760"
      },
      {
        "name": "Monschau",
        "postalCode": "52156"
      },
      {
        "name": "Stolberg (Rhld.)",
        "postalCode": "52222"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41068"
      },
      {
        "name": "Duisburg",
        "postalCode": "47239"
      },
      {
        "name": "Duisburg",
        "postalCode": "47259"
      },
      {
        "name": "Neuss",
        "postalCode": "41466"
      },
      {
        "name": "Köln",
        "postalCode": "50933"
      },
      {
        "name": "Bottrop",
        "postalCode": "46242"
      },
      {
        "name": "Leverkusen",
        "postalCode": "51373"
      },
      {
        "name": "Velbert",
        "postalCode": "42553"
      },
      {
        "name": "Gelsenkirchen",
        "postalCode": "45881"
      },
      {
        "name": "Wickede (Ruhr)",
        "postalCode": "58739"
      },
      {
        "name": "Hamm",
        "postalCode": "59071"
      },
      {
        "name": "Welver",
        "postalCode": "59514"
      },
      {
        "name": "Gütersloh",
        "postalCode": "33334"
      },
      {
        "name": "Bergisch Gladbach",
        "postalCode": "51467"
      },
      {
        "name": "Bergisch Gladbach",
        "postalCode": "51427"
      },
      {
        "name": "Bonn",
        "postalCode": "53129"
      },
      {
        "name": "Rösrath",
        "postalCode": "51503"
      },
      {
        "name": "Hattingen",
        "postalCode": "45525"
      },
      {
        "name": "Hennef (Sieg)",
        "postalCode": "53773"
      },
      {
        "name": "Iserlohn",
        "postalCode": "58644"
      },
      {
        "name": "Hagen",
        "postalCode": "58135"
      },
      {
        "name": "Marsberg",
        "postalCode": "34431"
      },
      {
        "name": "Paderborn",
        "postalCode": "33100"
      },
      {
        "name": "Detmold",
        "postalCode": "32756"
      },
      {
        "name": "Beverungen",
        "postalCode": "37688"
      },
      {
        "name": "Erkelenz",
        "postalCode": "41812"
      },
      {
        "name": "Viersen",
        "postalCode": "41748"
      },
      {
        "name": "Mönchengladbach",
        "postalCode": "41061"
      },
      {
        "name": "Kerpen",
        "postalCode": "50171"
      },
      {
        "name": "Bocholt",
        "postalCode": "46397"
      },
      {
        "name": "Duisburg",
        "postalCode": "47199"
      },
      {
        "name": "Duisburg",
        "postalCode": "47198"
      },
      {
        "name": "Dormagen",
        "postalCode": "41542"
      },
      {
        "name": "Düsseldorf",
        "postalCode": "40476"
      },
      {
        "name": "Ratingen",
        "postalCode": "40878"
      },
      {
        "name": "Mettmann",
        "postalCode": "40822"
      },
      {
        "name": "Haan",
        "postalCode": "42781"
      },
      {
        "name": "Bonn",
        "postalCode": "53117"
      },
      {
        "name": "Bergisch Gladbach",
        "postalCode": "51465"
      },
      {
        "name": "Remscheid",
        "postalCode": "42859"
      },
      {
        "name": "Overath",
        "postalCode": "51491"
      },
      {
        "name": "Herne",
        "postalCode": "44623"
      },
      {
        "name": "Herne",
        "postalCode": "44627"
      },
      {
        "name": "Wuppertal",
        "postalCode": "42399"
      },
      {
        "name": "Nottuln",
        "postalCode": "48301"
      },
      {
        "name": "Castrop-Rauxel",
        "postalCode": "44577"
      },
      {
        "name": "Dortmund",
        "postalCode": "44143"
      },
      {
        "name": "Schwerte",
        "postalCode": "58239"
      }
    ],
    "06":
    [
      {
        "name": "Eiterfeld",
        "postalCode": "36132"
      },
      {
        "name": "Wildeck",
        "postalCode": "36208"
      },
      {
        "name": "Groß-Gerau",
        "postalCode": "64521"
      },
      {
        "name": "Nauheim",
        "postalCode": "64569"
      },
      {
        "name": "Battenberg",
        "postalCode": "35088"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "65929"
      },
      {
        "name": "Heuchelheim",
        "postalCode": "35452"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60528"
      },
      {
        "name": "Ober-Mörlen",
        "postalCode": "61239"
      },
      {
        "name": "Langen",
        "postalCode": "63225"
      },
      {
        "name": "Linden",
        "postalCode": "35440"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64291"
      },
      {
        "name": "Lautertal (Odenwald)",
        "postalCode": "64686"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60385"
      },
      {
        "name": "Staufenberg",
        "postalCode": "35460"
      },
      {
        "name": "Lich",
        "postalCode": "35423"
      },
      {
        "name": "Rödermark",
        "postalCode": "63322"
      },
      {
        "name": "Cölbe",
        "postalCode": "35091"
      },
      {
        "name": "Ebsdorfergrund",
        "postalCode": "35085"
      },
      {
        "name": "Münster",
        "postalCode": "64839"
      },
      {
        "name": "Maintal",
        "postalCode": "63477"
      },
      {
        "name": "Mossautal",
        "postalCode": "64756"
      },
      {
        "name": "Diemelstadt",
        "postalCode": "34474"
      },
      {
        "name": "Edertal",
        "postalCode": "34549"
      },
      {
        "name": "Neukirchen (Knüll)",
        "postalCode": "34626"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65197"
      },
      {
        "name": "Herborn",
        "postalCode": "35745"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65193"
      },
      {
        "name": "Biblis",
        "postalCode": "68647"
      },
      {
        "name": "Breidenbach",
        "postalCode": "35236"
      },
      {
        "name": "Solms",
        "postalCode": "35606"
      },
      {
        "name": "Kassel",
        "postalCode": "34127"
      },
      {
        "name": "Kassel, Fuldatal",
        "postalCode": "34233"
      },
      {
        "name": "Dipperz",
        "postalCode": "36160"
      },
      {
        "name": "Hohenroda",
        "postalCode": "36284"
      },
      {
        "name": "Hohenahr",
        "postalCode": "35644"
      },
      {
        "name": "Gladenbach",
        "postalCode": "35075"
      },
      {
        "name": "Langgöns",
        "postalCode": "35428"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64295"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60439"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60314"
      },
      {
        "name": "Rimbach",
        "postalCode": "64668"
      },
      {
        "name": "Eppertshausen",
        "postalCode": "64859"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63073"
      },
      {
        "name": "Unter-Hainbrunn",
        "postalCode": "64757"
      },
      {
        "name": "Mainhausen",
        "postalCode": "63533"
      },
      {
        "name": "Ulrichstein",
        "postalCode": "35327"
      },
      {
        "name": "Kassel",
        "postalCode": "34128"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65183"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65185"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35688"
      },
      {
        "name": "Lampertheim",
        "postalCode": "68623"
      },
      {
        "name": "Stockstadt am Rhein",
        "postalCode": "64589"
      },
      {
        "name": "Malsfeld",
        "postalCode": "34323"
      },
      {
        "name": "Guxhagen",
        "postalCode": "34302"
      },
      {
        "name": "Lohfelden",
        "postalCode": "34253"
      },
      {
        "name": "Ronshausen",
        "postalCode": "36217"
      },
      {
        "name": "Nentershausen",
        "postalCode": "36214"
      },
      {
        "name": "Hilders, Ehrenberg",
        "postalCode": "36115"
      },
      {
        "name": "Heringen",
        "postalCode": "36266"
      },
      {
        "name": "Groß-Rohrheim",
        "postalCode": "68649"
      },
      {
        "name": "Kronberg im Taunus",
        "postalCode": "61476"
      },
      {
        "name": "Büttelborn",
        "postalCode": "64572"
      },
      {
        "name": "Schwalbach am Taunus",
        "postalCode": "65824"
      },
      {
        "name": "Biebertal",
        "postalCode": "35444"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60327"
      },
      {
        "name": "Reichelsheim (Odenwald)",
        "postalCode": "64385"
      },
      {
        "name": "Höchst i. Odw.",
        "postalCode": "64739"
      },
      {
        "name": "Großkrotzenburg",
        "postalCode": "63538"
      },
      {
        "name": "Freiensteinau",
        "postalCode": "36399"
      },
      {
        "name": "Steinau an der Straße",
        "postalCode": "36396"
      },
      {
        "name": "Bad Karlshafen",
        "postalCode": "34385"
      },
      {
        "name": "Löhnberg",
        "postalCode": "35792"
      },
      {
        "name": "Weinbach",
        "postalCode": "35796"
      },
      {
        "name": "Dietzhölztal",
        "postalCode": "35716"
      },
      {
        "name": "Ginsheim-Gustavsburg",
        "postalCode": "65462"
      },
      {
        "name": "Ehringshausen",
        "postalCode": "35630"
      },
      {
        "name": "Waldbrunn",
        "postalCode": "65620"
      },
      {
        "name": "Niestetal",
        "postalCode": "34266"
      },
      {
        "name": "Petersberg",
        "postalCode": "36100"
      },
      {
        "name": "Neu-Eichenberg",
        "postalCode": "37249"
      },
      {
        "name": "Kriftel",
        "postalCode": "65830"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35580"
      },
      {
        "name": "Roßdorf",
        "postalCode": "64380"
      },
      {
        "name": "Rodgau",
        "postalCode": "63110"
      },
      {
        "name": "Grünberg",
        "postalCode": "35305"
      },
      {
        "name": "Stadtallendorf",
        "postalCode": "35260"
      },
      {
        "name": "Schwalmtal",
        "postalCode": "36318"
      },
      {
        "name": "Herbstein",
        "postalCode": "36358"
      },
      {
        "name": "Kassel",
        "postalCode": "34130"
      },
      {
        "name": "Knüllwald",
        "postalCode": "34593"
      },
      {
        "name": "Hessisch Lichtenau",
        "postalCode": "37235"
      },
      {
        "name": "Angelburg",
        "postalCode": "35719"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "65931"
      },
      {
        "name": "Hüttenberg",
        "postalCode": "35625"
      },
      {
        "name": "Steinbach (Taunus)",
        "postalCode": "61449"
      },
      {
        "name": "Bickenbach",
        "postalCode": "64404"
      },
      {
        "name": "Gießen",
        "postalCode": "35396"
      },
      {
        "name": "Grasellenbach",
        "postalCode": "64689"
      },
      {
        "name": "Amöneburg",
        "postalCode": "35287"
      },
      {
        "name": "Jesberg",
        "postalCode": "34632"
      },
      {
        "name": "Gründau",
        "postalCode": "63584"
      },
      {
        "name": "Gedern",
        "postalCode": "63688"
      },
      {
        "name": "Willingshausen",
        "postalCode": "34628"
      },
      {
        "name": "Linsengericht",
        "postalCode": "63589"
      },
      {
        "name": "Bad Emstal",
        "postalCode": "34308"
      },
      {
        "name": "Habichtswald",
        "postalCode": "34317"
      },
      {
        "name": "Wartenberg",
        "postalCode": "36367"
      },
      {
        "name": "Witzenhausen",
        "postalCode": "37217"
      },
      {
        "name": "Bad Schwalbach",
        "postalCode": "65307"
      },
      {
        "name": "Eschenburg",
        "postalCode": "35713"
      },
      {
        "name": "Hochheim am Main",
        "postalCode": "65239"
      },
      {
        "name": "Breitenbach am Herzberg",
        "postalCode": "36287"
      },
      {
        "name": "Kirchheim (Hessen)",
        "postalCode": "36275"
      },
      {
        "name": "Kalbach",
        "postalCode": "36148"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65195"
      },
      {
        "name": "Selters",
        "postalCode": "65618"
      },
      {
        "name": "Hofheim am Taunus",
        "postalCode": "65719"
      },
      {
        "name": "Ebersburg",
        "postalCode": "36157"
      },
      {
        "name": "Münchhausen",
        "postalCode": "35117"
      },
      {
        "name": "Gießen",
        "postalCode": "35392"
      },
      {
        "name": "Pohlheim",
        "postalCode": "35415"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60599"
      },
      {
        "name": "Korbach",
        "postalCode": "34497"
      },
      {
        "name": "Kirchhain",
        "postalCode": "35274"
      },
      {
        "name": "Groß-Umstadt",
        "postalCode": "64823"
      },
      {
        "name": "Hanau",
        "postalCode": "63452"
      },
      {
        "name": "Ranstadt",
        "postalCode": "63691"
      },
      {
        "name": "Hammersbach",
        "postalCode": "63546"
      },
      {
        "name": "Erlensee",
        "postalCode": "63526"
      },
      {
        "name": "Schaafheim",
        "postalCode": "64850"
      },
      {
        "name": "Rodenbach",
        "postalCode": "63517"
      },
      {
        "name": "Kassel",
        "postalCode": "34131"
      },
      {
        "name": "Ahnatal",
        "postalCode": "34292"
      },
      {
        "name": "Grebenau",
        "postalCode": "36323"
      },
      {
        "name": "Rüdesheim am Rhein",
        "postalCode": "65385"
      },
      {
        "name": "Oestrich-Winkel",
        "postalCode": "65375"
      },
      {
        "name": "Biedenkopf",
        "postalCode": "35216"
      },
      {
        "name": "Lahnau",
        "postalCode": "35633"
      },
      {
        "name": "Bensheim",
        "postalCode": "64625"
      },
      {
        "name": "Friedberg (Hessen)",
        "postalCode": "61169"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60323"
      },
      {
        "name": "Bad Nauheim",
        "postalCode": "61231"
      },
      {
        "name": "Fernwald",
        "postalCode": "35463"
      },
      {
        "name": "Brombachtal",
        "postalCode": "64753"
      },
      {
        "name": "Gemünden (Felda)",
        "postalCode": "35329"
      },
      {
        "name": "Hasselroth",
        "postalCode": "63594"
      },
      {
        "name": "Grebenhain",
        "postalCode": "36355"
      },
      {
        "name": "Neuhof",
        "postalCode": "36119"
      },
      {
        "name": "Kassel",
        "postalCode": "34123"
      },
      {
        "name": "Hünfelden",
        "postalCode": "65597"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65201"
      },
      {
        "name": "Breitscheid",
        "postalCode": "35767"
      },
      {
        "name": "Cornberg",
        "postalCode": "36219"
      },
      {
        "name": "Philippsthal",
        "postalCode": "36269"
      },
      {
        "name": "Driedorf",
        "postalCode": "35759"
      },
      {
        "name": "Mainz-Kastel",
        "postalCode": "55252"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35684"
      },
      {
        "name": "Schenklengsfeld",
        "postalCode": "36277"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35585"
      },
      {
        "name": "Einhausen",
        "postalCode": "64683"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60594"
      },
      {
        "name": "Bad Vilbel",
        "postalCode": "61118"
      },
      {
        "name": "Wöllstadt",
        "postalCode": "61206"
      },
      {
        "name": "Heusenstamm",
        "postalCode": "63150"
      },
      {
        "name": "Brensbach",
        "postalCode": "64395"
      },
      {
        "name": "Otzberg",
        "postalCode": "64853"
      },
      {
        "name": "Neustadt",
        "postalCode": "35279"
      },
      {
        "name": "Schotten",
        "postalCode": "63679"
      },
      {
        "name": "Bad Salzschlirf",
        "postalCode": "36364"
      },
      {
        "name": "Körle",
        "postalCode": "34327"
      },
      {
        "name": "Spangenberg",
        "postalCode": "34286"
      },
      {
        "name": "Helsa",
        "postalCode": "34298"
      },
      {
        "name": "Limburg",
        "postalCode": "65551"
      },
      {
        "name": "Sinn",
        "postalCode": "35764"
      },
      {
        "name": "Griesheim",
        "postalCode": "64347"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35582"
      },
      {
        "name": "Heppenheim (Bergstraße)",
        "postalCode": "64646"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60325"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64289"
      },
      {
        "name": "Diemelsee",
        "postalCode": "34519"
      },
      {
        "name": "Lichtenfels",
        "postalCode": "35104"
      },
      {
        "name": "Rockenberg",
        "postalCode": "35519"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60388"
      },
      {
        "name": "Hirschhorn, Brombach, Heddesbach",
        "postalCode": "69434"
      },
      {
        "name": "Rabenau",
        "postalCode": "35466"
      },
      {
        "name": "Eberbach",
        "postalCode": "69412"
      },
      {
        "name": "Erbach",
        "postalCode": "64711"
      },
      {
        "name": "Limeshain",
        "postalCode": "63694"
      },
      {
        "name": "Ronneburg",
        "postalCode": "63549"
      },
      {
        "name": "Schrecksbach",
        "postalCode": "34637"
      },
      {
        "name": "Lautertal",
        "postalCode": "36369"
      },
      {
        "name": "Eichenzell",
        "postalCode": "36124"
      },
      {
        "name": "Meißner",
        "postalCode": "37290"
      },
      {
        "name": "Weilburg",
        "postalCode": "35781"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65189"
      },
      {
        "name": "Weilmünster",
        "postalCode": "35789"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35689"
      },
      {
        "name": "Mittenaar",
        "postalCode": "35756"
      },
      {
        "name": "Aarbergen",
        "postalCode": "65326"
      },
      {
        "name": "Waldolms",
        "postalCode": "35647"
      },
      {
        "name": "Lohra",
        "postalCode": "35102"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60488"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60438"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60433"
      },
      {
        "name": "Lindenfels",
        "postalCode": "64678"
      },
      {
        "name": "Florstadt",
        "postalCode": "61197"
      },
      {
        "name": "Babenhausen",
        "postalCode": "64832"
      },
      {
        "name": "Breuna",
        "postalCode": "34479"
      },
      {
        "name": "Romrod",
        "postalCode": "36329"
      },
      {
        "name": "Kassel",
        "postalCode": "34121"
      },
      {
        "name": "Großenlüder",
        "postalCode": "36137"
      },
      {
        "name": "Nüsttal",
        "postalCode": "36167"
      },
      {
        "name": "Kassel",
        "postalCode": "34134"
      },
      {
        "name": "Haunetal",
        "postalCode": "36166"
      },
      {
        "name": "Hünstetten, Idstein",
        "postalCode": "65510"
      },
      {
        "name": "Greifenstein",
        "postalCode": "35753"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65187"
      },
      {
        "name": "Königstein im Taunus",
        "postalCode": "61462"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60487"
      },
      {
        "name": "Birkenau",
        "postalCode": "69488"
      },
      {
        "name": "Marburg",
        "postalCode": "35037"
      },
      {
        "name": "Marburg",
        "postalCode": "35039"
      },
      {
        "name": "Niddatal",
        "postalCode": "61194"
      },
      {
        "name": "Reichelsheim (Wetterau)",
        "postalCode": "61203"
      },
      {
        "name": "Schöneck",
        "postalCode": "61137"
      },
      {
        "name": "Büdingen",
        "postalCode": "63654"
      },
      {
        "name": "Antrifttal",
        "postalCode": "36326"
      },
      {
        "name": "Fritzlar",
        "postalCode": "34560"
      },
      {
        "name": "Wabern",
        "postalCode": "34590"
      },
      {
        "name": "Lauterbach",
        "postalCode": "36341"
      },
      {
        "name": "Kassel",
        "postalCode": "34132"
      },
      {
        "name": "Poppenhausen",
        "postalCode": "36163"
      },
      {
        "name": "Bad Soden am Taunus",
        "postalCode": "65812"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35586"
      },
      {
        "name": "Alsbach-Hähnlein",
        "postalCode": "64665"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60431"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60320"
      },
      {
        "name": "Karben",
        "postalCode": "61184"
      },
      {
        "name": "Modautal",
        "postalCode": "64397"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60386"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63065"
      },
      {
        "name": "Fischbachtal",
        "postalCode": "64405"
      },
      {
        "name": "Frankenau",
        "postalCode": "35110"
      },
      {
        "name": "Hanau",
        "postalCode": "63456"
      },
      {
        "name": "Bruchköbel",
        "postalCode": "63486"
      },
      {
        "name": "Ortenberg",
        "postalCode": "63683"
      },
      {
        "name": "Lützelbach",
        "postalCode": "64750"
      },
      {
        "name": "Liebenau (Hessen)",
        "postalCode": "34396"
      },
      {
        "name": "Birstein",
        "postalCode": "63633"
      },
      {
        "name": "Ottrau",
        "postalCode": "34633"
      },
      {
        "name": "Runkel",
        "postalCode": "65594"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35690"
      },
      {
        "name": "Glashütten",
        "postalCode": "61479"
      },
      {
        "name": "Söhrewald",
        "postalCode": "34320"
      },
      {
        "name": "Staufenberg",
        "postalCode": "34355"
      },
      {
        "name": "Alheim",
        "postalCode": "36211"
      },
      {
        "name": "Friedewald",
        "postalCode": "36289"
      },
      {
        "name": "Eschwege",
        "postalCode": "37269"
      },
      {
        "name": "Weißenborn",
        "postalCode": "37299"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35578"
      },
      {
        "name": "Hatzfeld",
        "postalCode": "35116"
      },
      {
        "name": "Wetzlar Garbeinheim",
        "postalCode": "35583"
      },
      {
        "name": "Gießen",
        "postalCode": "35398"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60486"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60326"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60598"
      },
      {
        "name": "Ober-Ramstadt",
        "postalCode": "64372"
      },
      {
        "name": "Hanau",
        "postalCode": "63454"
      },
      {
        "name": "Gemünden",
        "postalCode": "35285"
      },
      {
        "name": "Glauburg",
        "postalCode": "63695"
      },
      {
        "name": "Kirtorf",
        "postalCode": "36320"
      },
      {
        "name": "Hofgeismar",
        "postalCode": "34369"
      },
      {
        "name": "Taunusstein",
        "postalCode": "65232"
      },
      {
        "name": "Haiger",
        "postalCode": "35708"
      },
      {
        "name": "Bad Camberg",
        "postalCode": "65520"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65205"
      },
      {
        "name": "Limburg",
        "postalCode": "65556"
      },
      {
        "name": "Fulda",
        "postalCode": "36037"
      },
      {
        "name": "Großalmerode",
        "postalCode": "37247"
      },
      {
        "name": "Witzenhausen",
        "postalCode": "37214"
      },
      {
        "name": "Bromskirchen, Hallenberg",
        "postalCode": "59969"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35584"
      },
      {
        "name": "Erzhausen",
        "postalCode": "64390"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64283"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60596"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60313"
      },
      {
        "name": "Buseck",
        "postalCode": "35418"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63067"
      },
      {
        "name": "Allendorf",
        "postalCode": "35469"
      },
      {
        "name": "Reinheim",
        "postalCode": "64354"
      },
      {
        "name": "Gilserberg",
        "postalCode": "34630"
      },
      {
        "name": "Freigericht",
        "postalCode": "63579"
      },
      {
        "name": "Brachttal",
        "postalCode": "63636"
      },
      {
        "name": "Edermünde",
        "postalCode": "34295"
      },
      {
        "name": "Grebenstein",
        "postalCode": "34393"
      },
      {
        "name": "Limburg",
        "postalCode": "65549"
      },
      {
        "name": "Eltville am Rhein",
        "postalCode": "65343"
      },
      {
        "name": "Neuenstein (Hessen)",
        "postalCode": "36286"
      },
      {
        "name": "Oberweser",
        "postalCode": "34399"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35687"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "55246"
      },
      {
        "name": "Aßlar",
        "postalCode": "35614"
      },
      {
        "name": "Liederbach am Taunus",
        "postalCode": "65835"
      },
      {
        "name": "Butzbach",
        "postalCode": "35510"
      },
      {
        "name": "Zwingenberg",
        "postalCode": "64673"
      },
      {
        "name": "Gießen",
        "postalCode": "35390"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60322"
      },
      {
        "name": "Heppenheim (Bergstraße)",
        "postalCode": "64646"
      },
      {
        "name": "Fränkisch-Crumbach",
        "postalCode": "64407"
      },
      {
        "name": "Wohratal",
        "postalCode": "35288"
      },
      {
        "name": "Nidda",
        "postalCode": "63667"
      },
      {
        "name": "Neuberg",
        "postalCode": "63543"
      },
      {
        "name": "Volkmarsen",
        "postalCode": "34471"
      },
      {
        "name": "Waldkappel",
        "postalCode": "37284"
      },
      {
        "name": "Hünfeld",
        "postalCode": "36088"
      },
      {
        "name": "Gernsheim",
        "postalCode": "64579"
      },
      {
        "name": "Willingen (Upland)",
        "postalCode": "34508"
      },
      {
        "name": "Egelsbach",
        "postalCode": "63329"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64287"
      },
      {
        "name": "Frankfurt am Main, Opernturm",
        "postalCode": "60306"
      },
      {
        "name": "Abtsteinach",
        "postalCode": "69518"
      },
      {
        "name": "Naumburg",
        "postalCode": "34311"
      },
      {
        "name": "Gudensberg",
        "postalCode": "34281"
      },
      {
        "name": "Hauneck",
        "postalCode": "36282"
      },
      {
        "name": "Rasdorf",
        "postalCode": "36169"
      },
      {
        "name": "Flörsheim am Main",
        "postalCode": "65439"
      },
      {
        "name": "Riedstadt",
        "postalCode": "64560"
      },
      {
        "name": "Kiedrich",
        "postalCode": "65399"
      },
      {
        "name": "Schlüchtern",
        "postalCode": "36381"
      },
      {
        "name": "Bürstadt",
        "postalCode": "68642"
      },
      {
        "name": "Wehrheim",
        "postalCode": "61273"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "65934"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60489"
      },
      {
        "name": "Lahntal",
        "postalCode": "35094"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60437"
      },
      {
        "name": "Haina",
        "postalCode": "35114"
      },
      {
        "name": "Oberzent",
        "postalCode": "64760"
      },
      {
        "name": "Hanau",
        "postalCode": "63450"
      },
      {
        "name": "Kefenrod",
        "postalCode": "63699"
      },
      {
        "name": "Zierenberg",
        "postalCode": "34289"
      },
      {
        "name": "Calden",
        "postalCode": "34379"
      },
      {
        "name": "Trendelburg",
        "postalCode": "34388"
      },
      {
        "name": "Jossgrund",
        "postalCode": "63637"
      },
      {
        "name": "Künzell",
        "postalCode": "36093"
      },
      {
        "name": "Fuldabrück",
        "postalCode": "34277"
      },
      {
        "name": "Oberweser",
        "postalCode": "34399"
      },
      {
        "name": "Eltville am Rhein",
        "postalCode": "65347"
      },
      {
        "name": "Beselich",
        "postalCode": "65614"
      },
      {
        "name": "Berkatal",
        "postalCode": "37297"
      },
      {
        "name": "Geisenheim",
        "postalCode": "65366"
      },
      {
        "name": "Hohenstein",
        "postalCode": "65329"
      },
      {
        "name": "Limburg",
        "postalCode": "65555"
      },
      {
        "name": "Schmitten",
        "postalCode": "61389"
      },
      {
        "name": "Bischoffen",
        "postalCode": "35649"
      },
      {
        "name": "Pfungstadt",
        "postalCode": "64319"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60329"
      },
      {
        "name": "Gorxheimertal",
        "postalCode": "69517"
      },
      {
        "name": "Dieburg",
        "postalCode": "64807"
      },
      {
        "name": "Groß-Bieberau",
        "postalCode": "64401"
      },
      {
        "name": "Echzell",
        "postalCode": "61209"
      },
      {
        "name": "Hanau",
        "postalCode": "63457"
      },
      {
        "name": "Michelstadt",
        "postalCode": "64720"
      },
      {
        "name": "Wolfhagen",
        "postalCode": "34466"
      },
      {
        "name": "Weiterstadt",
        "postalCode": "64331"
      },
      {
        "name": "Bad Homburg v.d. Höhe",
        "postalCode": "61348"
      },
      {
        "name": "Wetter",
        "postalCode": "35083"
      },
      {
        "name": "Wettenberg",
        "postalCode": "35435"
      },
      {
        "name": "Weimar (Lahn)",
        "postalCode": "35096"
      },
      {
        "name": "Mühltal",
        "postalCode": "64367"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60311"
      },
      {
        "name": "Gießen",
        "postalCode": "35394"
      },
      {
        "name": "Mörlenbach",
        "postalCode": "69509"
      },
      {
        "name": "Burgwald",
        "postalCode": "35099"
      },
      {
        "name": "Marburg",
        "postalCode": "35043"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63075"
      },
      {
        "name": "Neckarsteinach",
        "postalCode": "69239"
      },
      {
        "name": "Rauschenberg",
        "postalCode": "35282"
      },
      {
        "name": "Hirzenhain",
        "postalCode": "63697"
      },
      {
        "name": "Bad Soden-Salmünster",
        "postalCode": "63628"
      },
      {
        "name": "Rüsselsheim",
        "postalCode": "65428"
      },
      {
        "name": "Schlitz",
        "postalCode": "36110"
      },
      {
        "name": "Niederaula",
        "postalCode": "36272"
      },
      {
        "name": "Nieste",
        "postalCode": "34329"
      },
      {
        "name": "Fulda",
        "postalCode": "36039"
      },
      {
        "name": "Eltville am Rhein",
        "postalCode": "65346"
      },
      {
        "name": "Bad Endbach",
        "postalCode": "35080"
      },
      {
        "name": "Rosbach v.d. Höhe",
        "postalCode": "61191"
      },
      {
        "name": "Frankfurt",
        "postalCode": "60308"
      },
      {
        "name": "Fürth",
        "postalCode": "64658"
      },
      {
        "name": "Groß-Zimmern",
        "postalCode": "64846"
      },
      {
        "name": "Twistetal",
        "postalCode": "34477"
      },
      {
        "name": "Hainburg",
        "postalCode": "63512"
      },
      {
        "name": "Seligenstadt",
        "postalCode": "63500"
      },
      {
        "name": "Bad Arolsen",
        "postalCode": "34454"
      },
      {
        "name": "Zierenberg",
        "postalCode": "34289"
      },
      {
        "name": "Wehretal",
        "postalCode": "37287"
      },
      {
        "name": "Eltville am Rhein",
        "postalCode": "65344"
      },
      {
        "name": "Braunfels",
        "postalCode": "35619"
      },
      {
        "name": "Bischofsheim",
        "postalCode": "65474"
      },
      {
        "name": "Immenhausen",
        "postalCode": "34376"
      },
      {
        "name": "Flieden",
        "postalCode": "36103"
      },
      {
        "name": "Morschen",
        "postalCode": "34326"
      },
      {
        "name": "Usingen",
        "postalCode": "61250"
      },
      {
        "name": "Lorsch",
        "postalCode": "64653"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60549"
      },
      {
        "name": "Fronhausen",
        "postalCode": "35112"
      },
      {
        "name": "Frankenberg",
        "postalCode": "35066"
      },
      {
        "name": "Wald-Michelbach",
        "postalCode": "69483"
      },
      {
        "name": "Mücke",
        "postalCode": "35325"
      },
      {
        "name": "Neuental",
        "postalCode": "34599"
      },
      {
        "name": "Biebergemünd",
        "postalCode": "63599"
      },
      {
        "name": "Vellmar",
        "postalCode": "34246"
      },
      {
        "name": "Witzenhausen, Gutsbezirk",
        "postalCode": "37216"
      },
      {
        "name": "Eltville am Rhein",
        "postalCode": "65345"
      },
      {
        "name": "Limburg",
        "postalCode": "65552"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35686"
      },
      {
        "name": "Waldems",
        "postalCode": "65529"
      },
      {
        "name": "Witzenhausen",
        "postalCode": "37215"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64297"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60389"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63071"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63071"
      },
      {
        "name": "Reiskirchen",
        "postalCode": "35447"
      },
      {
        "name": "Breuberg",
        "postalCode": "64747"
      },
      {
        "name": "Baunatal",
        "postalCode": "34225"
      },
      {
        "name": "Homberg",
        "postalCode": "34576"
      },
      {
        "name": "Kassel",
        "postalCode": "34119"
      },
      {
        "name": "Kaufungen",
        "postalCode": "34260"
      },
      {
        "name": "Reinhardshagen",
        "postalCode": "34359"
      },
      {
        "name": "Mengerskirchen",
        "postalCode": "35794"
      },
      {
        "name": "Villmar",
        "postalCode": "65606"
      },
      {
        "name": "Biebesheim am Rhein",
        "postalCode": "64584"
      },
      {
        "name": "Hattersheim",
        "postalCode": "65795"
      },
      {
        "name": "Bad Homburg v.d. Höhe",
        "postalCode": "61350"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60529"
      },
      {
        "name": "Seeheim-Jugenheim",
        "postalCode": "64342"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63071"
      },
      {
        "name": "Niederdorfelden",
        "postalCode": "61138"
      },
      {
        "name": "Vöhl",
        "postalCode": "34516"
      },
      {
        "name": "Obertshausen",
        "postalCode": "63179"
      },
      {
        "name": "Feldatal",
        "postalCode": "36325"
      },
      {
        "name": "Oberaula",
        "postalCode": "36280"
      },
      {
        "name": "Hadamar",
        "postalCode": "65589"
      },
      {
        "name": "Limburg",
        "postalCode": "65554"
      },
      {
        "name": "Limburg",
        "postalCode": "65550"
      },
      {
        "name": "Walluf",
        "postalCode": "65396"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35685"
      },
      {
        "name": "Dillenburg",
        "postalCode": "35683"
      },
      {
        "name": "Weilrod",
        "postalCode": "61276"
      },
      {
        "name": "Hosenfeld",
        "postalCode": "36154"
      },
      {
        "name": "Sinntal",
        "postalCode": "36391"
      },
      {
        "name": "Bebra",
        "postalCode": "36179"
      },
      {
        "name": "Hofbieber",
        "postalCode": "36145"
      },
      {
        "name": "Herleshausen",
        "postalCode": "37293"
      },
      {
        "name": "Schöffengrund",
        "postalCode": "35641"
      },
      {
        "name": "Oberursel (Taunus)",
        "postalCode": "61440"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "65936"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64285"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60435"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60318"
      },
      {
        "name": "Rosenthal",
        "postalCode": "35119"
      },
      {
        "name": "Bad Wildungen",
        "postalCode": "34537"
      },
      {
        "name": "Felsberg",
        "postalCode": "34587"
      },
      {
        "name": "Schlangenbad",
        "postalCode": "65388"
      },
      {
        "name": "Kassel, Fuldatal",
        "postalCode": "34233"
      },
      {
        "name": "Melsungen",
        "postalCode": "34212"
      },
      {
        "name": "Bad Hersfeld, Ludwigsau",
        "postalCode": "36251"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65199"
      },
      {
        "name": "Trebur",
        "postalCode": "65468"
      },
      {
        "name": "Sulzbach (Taunus)",
        "postalCode": "65843"
      },
      {
        "name": "Eschborn",
        "postalCode": "65760"
      },
      {
        "name": "Friedrichsdorf",
        "postalCode": "61381"
      },
      {
        "name": "Lollar",
        "postalCode": "35457"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "60316"
      },
      {
        "name": "Mühlheim am Main",
        "postalCode": "63165"
      },
      {
        "name": "Nidderau",
        "postalCode": "61130"
      },
      {
        "name": "Homberg (Ohm)",
        "postalCode": "35315"
      },
      {
        "name": "Schwalmstadt",
        "postalCode": "34613"
      },
      {
        "name": "Gelnhausen",
        "postalCode": "63571"
      },
      {
        "name": "Wächtersbach",
        "postalCode": "63607"
      },
      {
        "name": "Borken",
        "postalCode": "34582"
      },
      {
        "name": "Bad Orb",
        "postalCode": "63619"
      },
      {
        "name": "Flörsbachtal",
        "postalCode": "63639"
      },
      {
        "name": "Schwarzenborn",
        "postalCode": "34639"
      },
      {
        "name": "Bodenfelde, Wahlsburg",
        "postalCode": "37194"
      },
      {
        "name": "Espenau",
        "postalCode": "34314"
      },
      {
        "name": "Kassel",
        "postalCode": "34125"
      },
      {
        "name": "Oberweser",
        "postalCode": "34399"
      },
      {
        "name": "Niedernhausen",
        "postalCode": "65527"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65207"
      },
      {
        "name": "Elz",
        "postalCode": "65604"
      },
      {
        "name": "Limburg",
        "postalCode": "65553"
      },
      {
        "name": "Fulda",
        "postalCode": "36043"
      },
      {
        "name": "Rotenburg an der Fulda",
        "postalCode": "36199"
      },
      {
        "name": "Gersfeld",
        "postalCode": "36129"
      },
      {
        "name": "Sontra",
        "postalCode": "36205"
      },
      {
        "name": "Steffenberg",
        "postalCode": "35239"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35579"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35576"
      },
      {
        "name": "Dautphetal",
        "postalCode": "35232"
      },
      {
        "name": "Wetzlar",
        "postalCode": "35581"
      },
      {
        "name": "Allendorf",
        "postalCode": "35108"
      },
      {
        "name": "Neu-Isenburg",
        "postalCode": "63263"
      },
      {
        "name": "Bad Homburg v.d. Höhe",
        "postalCode": "61352"
      },
      {
        "name": "Münzenberg",
        "postalCode": "35516"
      },
      {
        "name": "Langenselbold",
        "postalCode": "63505"
      },
      {
        "name": "Schauenburg",
        "postalCode": "34270"
      },
      {
        "name": "Niedenstein",
        "postalCode": "34305"
      },
      {
        "name": "Kassel",
        "postalCode": "34117"
      },
      {
        "name": "Lorch",
        "postalCode": "65391"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65203"
      },
      {
        "name": "Kelsterbach",
        "postalCode": "65451"
      },
      {
        "name": "Neu-Anspach",
        "postalCode": "61267"
      },
      {
        "name": "Mörfelden-Walldorf",
        "postalCode": "64546"
      },
      {
        "name": "Frankfurt am Main",
        "postalCode": "65933"
      },
      {
        "name": "Darmstadt",
        "postalCode": "64293"
      },
      {
        "name": "Wölfersheim",
        "postalCode": "61200"
      },
      {
        "name": "Hungen",
        "postalCode": "35410"
      },
      {
        "name": "Brensbach",
        "postalCode": "64395"
      },
      {
        "name": "Waldeck",
        "postalCode": "34513"
      },
      {
        "name": "Frielendorf",
        "postalCode": "34621"
      },
      {
        "name": "Großalmerode",
        "postalCode": "37247"
      },
      {
        "name": "Witzenhausen",
        "postalCode": "37213"
      },
      {
        "name": "Wanfried",
        "postalCode": "37281"
      },
      {
        "name": "Elbtal",
        "postalCode": "65627"
      },
      {
        "name": "Leun",
        "postalCode": "35638"
      },
      {
        "name": "Eppstein",
        "postalCode": "65817"
      },
      {
        "name": "Kelkheim",
        "postalCode": "65779"
      },
      {
        "name": "Witzenhausen",
        "postalCode": "37218"
      },
      {
        "name": "Bad Sooden-Allendorf",
        "postalCode": "37242"
      },
      {
        "name": "Tann",
        "postalCode": "36142"
      },
      {
        "name": "Ringgau",
        "postalCode": "37296"
      },
      {
        "name": "Meinhard",
        "postalCode": "37276"
      },
      {
        "name": "Raunheim",
        "postalCode": "65479"
      },
      {
        "name": "Viernheim",
        "postalCode": "68519"
      },
      {
        "name": "Marburg",
        "postalCode": "35041"
      },
      {
        "name": "Dreieich",
        "postalCode": "63303"
      },
      {
        "name": "Frankfurt am Main (Taunusturm)",
        "postalCode": "60310"
      },
      {
        "name": "Offenbach am Main",
        "postalCode": "63069"
      },
      {
        "name": "Messel",
        "postalCode": "64409"
      },
      {
        "name": "Dietzenbach",
        "postalCode": "63128"
      },
      {
        "name": "Altenstadt",
        "postalCode": "63674"
      },
      {
        "name": "Laubach",
        "postalCode": "35321"
      },
      {
        "name": "Bad König",
        "postalCode": "64732"
      },
      {
        "name": "Bad Zwesten",
        "postalCode": "34596"
      },
      {
        "name": "Alsfeld",
        "postalCode": "36304"
      },
      {
        "name": "Brechen",
        "postalCode": "65611"
      },
      {
        "name": "Merenberg",
        "postalCode": "35799"
      },
      {
        "name": "Wiesbaden",
        "postalCode": "65191"
      },
      {
        "name": "Siegbach",
        "postalCode": "35768"
      },
      {
        "name": "Grävenwiesbach",
        "postalCode": "61279"
      },
      {
        "name": "Kassel",
        "postalCode": "34127"
      },
      {
        "name": "Fulda",
        "postalCode": "36041"
      },
      {
        "name": "Burghaun",
        "postalCode": "36151"
      },
      {
        "name": "Heidenrod",
        "postalCode": "65321"
      },
      {
        "name": "Dornburg",
        "postalCode": "65599"
      }
    ],
    "07":
    [
      {
        "name": "Mittelbrunn, Queidersbach u.a.",
        "postalCode": "66851"
      },
      {
        "name": "Sobernheim",
        "postalCode": "55566"
      },
      {
        "name": "Bettenfeld, Niederöfflingen u.a.",
        "postalCode": "54533"
      },
      {
        "name": "Malborn",
        "postalCode": "54426"
      },
      {
        "name": "Adenau, Kottenborn u.a.",
        "postalCode": "53518"
      },
      {
        "name": "Deuselbach, Hermeskeil, Rorodt",
        "postalCode": "54411"
      },
      {
        "name": "Mehlingen",
        "postalCode": "67678"
      },
      {
        "name": "Mogendorf, Ebernhahn, Staudt u.a.",
        "postalCode": "56424"
      },
      {
        "name": "Lohnsfeld",
        "postalCode": "67727"
      },
      {
        "name": "Katzenelnbogen",
        "postalCode": "56368"
      },
      {
        "name": "Steinbach, Weitersweiler, Bennhausen, Mörsfeld, Würzweiler, Ruppertsecken u.a.",
        "postalCode": "67808"
      },
      {
        "name": "Carlsberg",
        "postalCode": "67316"
      },
      {
        "name": "Flonheim",
        "postalCode": "55237"
      },
      {
        "name": "Burgschwalbach",
        "postalCode": "65558"
      },
      {
        "name": "Burgschwalbach",
        "postalCode": "65558"
      },
      {
        "name": "Steinweiler",
        "postalCode": "76872"
      },
      {
        "name": "Büchel",
        "postalCode": "56823"
      },
      {
        "name": "Bad Neuenahr-Ahrweiler",
        "postalCode": "53474"
      },
      {
        "name": "Peterswald-Löffelscheid u.a.",
        "postalCode": "56858"
      },
      {
        "name": "Bell",
        "postalCode": "56745"
      },
      {
        "name": "Peterswald-Löffelscheid u.a.",
        "postalCode": "56858"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Fürthen",
        "postalCode": "57539"
      },
      {
        "name": "Kleinmaischeid",
        "postalCode": "56271"
      },
      {
        "name": "Freilingen, Freirachdorf u.a.",
        "postalCode": "56244"
      },
      {
        "name": "Hattert",
        "postalCode": "57644"
      },
      {
        "name": "Kaiserslautern",
        "postalCode": "67655"
      },
      {
        "name": "Steinbach, Weitersweiler, Bennhausen, Mörsfeld, Würzweiler, Ruppertsecken u.a.",
        "postalCode": "67808"
      },
      {
        "name": "Feilbingert",
        "postalCode": "67824"
      },
      {
        "name": "Bechhofen",
        "postalCode": "66894"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Edesheim",
        "postalCode": "67483"
      },
      {
        "name": "Herxheim",
        "postalCode": "76863"
      },
      {
        "name": "Dittelsheim-Heßloch",
        "postalCode": "67596"
      },
      {
        "name": "Dirmstein",
        "postalCode": "67246"
      },
      {
        "name": "Gommersheim",
        "postalCode": "67377"
      },
      {
        "name": "Bodenheim",
        "postalCode": "55294"
      },
      {
        "name": "Westheim (Pfalz)",
        "postalCode": "67368"
      },
      {
        "name": "Lingenfeld",
        "postalCode": "67360"
      },
      {
        "name": "Bleialf",
        "postalCode": "54608"
      },
      {
        "name": "Ralingen",
        "postalCode": "54310"
      },
      {
        "name": "Walsdorf, Nohn u.a.",
        "postalCode": "54578"
      },
      {
        "name": "Ettringen",
        "postalCode": "56729"
      },
      {
        "name": "Wehr",
        "postalCode": "56653"
      },
      {
        "name": "Kallstadt",
        "postalCode": "67169"
      },
      {
        "name": "Wintersheim",
        "postalCode": "67587"
      },
      {
        "name": "Dudenhofen",
        "postalCode": "67373"
      },
      {
        "name": "Fischbach, Erfweiler u.a.",
        "postalCode": "66996"
      },
      {
        "name": "Bad Bergzabern u.a.",
        "postalCode": "76887"
      },
      {
        "name": "Münster-Sarmsheim",
        "postalCode": "55424"
      },
      {
        "name": "Rhodt u.a.",
        "postalCode": "76835"
      },
      {
        "name": "Nisterau u.a.",
        "postalCode": "56472"
      },
      {
        "name": "Ramsen",
        "postalCode": "67305"
      },
      {
        "name": "Gommersheim",
        "postalCode": "67377"
      },
      {
        "name": "Raubach",
        "postalCode": "56316"
      },
      {
        "name": "Bad Ems Umland",
        "postalCode": "56132"
      },
      {
        "name": "Sankt Goarshausen u.a.",
        "postalCode": "56346"
      },
      {
        "name": "Rockenhausen, Bisterschied u.a.",
        "postalCode": "67806"
      },
      {
        "name": "Montabaur",
        "postalCode": "56410"
      },
      {
        "name": "Gundersweiler, Gonbach u.a.",
        "postalCode": "67724"
      },
      {
        "name": "Winterborn, Waldgrehweiler, Niedermoschel, u.a.",
        "postalCode": "67822"
      },
      {
        "name": "Nittel",
        "postalCode": "54453"
      },
      {
        "name": "Landscheid",
        "postalCode": "54526"
      },
      {
        "name": "Wittlich",
        "postalCode": "54516"
      },
      {
        "name": "Uersfeld",
        "postalCode": "56767"
      },
      {
        "name": "Kaisersesch",
        "postalCode": "56759"
      },
      {
        "name": "Clausen",
        "postalCode": "66978"
      },
      {
        "name": "Kreimbach-Kaulbach",
        "postalCode": "67757"
      },
      {
        "name": "Becherbach",
        "postalCode": "67827"
      },
      {
        "name": "Geiselberg",
        "postalCode": "67715"
      },
      {
        "name": "Freilingen, Freirachdorf u.a.",
        "postalCode": "56244"
      },
      {
        "name": "Birken-Honigsessen",
        "postalCode": "57587"
      },
      {
        "name": "Wilgartswiesen",
        "postalCode": "76848"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Dielkirchen",
        "postalCode": "67811"
      },
      {
        "name": "Mainz",
        "postalCode": "55124"
      },
      {
        "name": "Mainz",
        "postalCode": "55130"
      },
      {
        "name": "Worms",
        "postalCode": "67549"
      },
      {
        "name": "Eich",
        "postalCode": "67575"
      },
      {
        "name": "Nastätten u.a.",
        "postalCode": "56355"
      },
      {
        "name": "Wilgartswiesen",
        "postalCode": "76848"
      },
      {
        "name": "Annweiler am Trifels",
        "postalCode": "76855"
      },
      {
        "name": "Elkenroth",
        "postalCode": "57578"
      },
      {
        "name": "Bolanden",
        "postalCode": "67295"
      },
      {
        "name": "Bischheim u.a.",
        "postalCode": "67294"
      },
      {
        "name": "Dreisen, Standenbühl",
        "postalCode": "67816"
      },
      {
        "name": "Venningen",
        "postalCode": "67482"
      },
      {
        "name": "Frankenstein, Neidenfels, Frankeneck",
        "postalCode": "67468"
      },
      {
        "name": "Reil",
        "postalCode": "56861"
      },
      {
        "name": "Enkirch u.a.",
        "postalCode": "56850"
      },
      {
        "name": "Breitenbach",
        "postalCode": "66916"
      },
      {
        "name": "Linz am Rhein, Ockenfels",
        "postalCode": "53545"
      },
      {
        "name": "Sankt Katharinen (Landkreis Neuwied)",
        "postalCode": "53562"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Wildenbungert, Gondershausen, Nörtershausen u.a.",
        "postalCode": "56283"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Singhofen",
        "postalCode": "56379"
      },
      {
        "name": "Börrstadt",
        "postalCode": "67725"
      },
      {
        "name": "Armsheim",
        "postalCode": "55288"
      },
      {
        "name": "Rennerod, Zehnhausen, Nister-Möhrendorf, Waigandshain",
        "postalCode": "56477"
      },
      {
        "name": "Weisenheim am Berg",
        "postalCode": "67273"
      },
      {
        "name": "Freinsheim",
        "postalCode": "67251"
      },
      {
        "name": "Fußgönheim",
        "postalCode": "67136"
      },
      {
        "name": "Mommenheim",
        "postalCode": "55278"
      },
      {
        "name": "Simmern/Hunsrück u.a.",
        "postalCode": "55469"
      },
      {
        "name": "Rengsdorf",
        "postalCode": "56579"
      },
      {
        "name": "Rothselberg u.a.",
        "postalCode": "67753"
      },
      {
        "name": "Neuerburg u.a.",
        "postalCode": "54673"
      },
      {
        "name": "Bollendorf",
        "postalCode": "54669"
      },
      {
        "name": "Freudenburg",
        "postalCode": "54450"
      },
      {
        "name": "Bettenfeld, Niederöfflingen u.a.",
        "postalCode": "54533"
      },
      {
        "name": "Beltheim",
        "postalCode": "56290"
      },
      {
        "name": "Neuwied",
        "postalCode": "56567"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Contwig",
        "postalCode": "66497"
      },
      {
        "name": "Kleinbundenbach",
        "postalCode": "66501"
      },
      {
        "name": "Ediger-Eller",
        "postalCode": "56814"
      },
      {
        "name": "Briedel",
        "postalCode": "56867"
      },
      {
        "name": "Pronsfeld",
        "postalCode": "54597"
      },
      {
        "name": "Bettingen",
        "postalCode": "54646"
      },
      {
        "name": "Trier",
        "postalCode": "54295"
      },
      {
        "name": "Bausendorf",
        "postalCode": "54538"
      },
      {
        "name": "Thalfang",
        "postalCode": "54424"
      },
      {
        "name": "Lutzerath",
        "postalCode": "56826"
      },
      {
        "name": "Gusenburg",
        "postalCode": "54413"
      },
      {
        "name": "Grafschaft",
        "postalCode": "53501"
      },
      {
        "name": "Bad Bertrich",
        "postalCode": "56864"
      },
      {
        "name": "Wolfstein",
        "postalCode": "67752"
      },
      {
        "name": "Bacharach, Breitscheid",
        "postalCode": "55422"
      },
      {
        "name": "Stromberg",
        "postalCode": "55442"
      },
      {
        "name": "Nußbach",
        "postalCode": "67759"
      },
      {
        "name": "Neuwied",
        "postalCode": "56564"
      },
      {
        "name": "Simmertal",
        "postalCode": "55618"
      },
      {
        "name": "Riesweiler",
        "postalCode": "55499"
      },
      {
        "name": "Neitersen",
        "postalCode": "57638"
      },
      {
        "name": "Blankenrath u.a.",
        "postalCode": "56865"
      },
      {
        "name": "Beltheim",
        "postalCode": "56290"
      },
      {
        "name": "Herschweiler-Pettersheim",
        "postalCode": "66909"
      },
      {
        "name": "Nastätten u.a.",
        "postalCode": "56355"
      },
      {
        "name": "Schwarzengraben, St. Alban, Gerbach",
        "postalCode": "67813"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Oberrod u.a.",
        "postalCode": "56479"
      },
      {
        "name": "Frankweiler",
        "postalCode": "76833"
      },
      {
        "name": "Rhodt u.a.",
        "postalCode": "76835"
      },
      {
        "name": "Neustadt an der Weinstraße",
        "postalCode": "67433"
      },
      {
        "name": "Insheim",
        "postalCode": "76865"
      },
      {
        "name": "Berg",
        "postalCode": "76768"
      },
      {
        "name": "Hatzenbühl",
        "postalCode": "76770"
      },
      {
        "name": "Weisenheim am Sand",
        "postalCode": "67256"
      },
      {
        "name": "Hillesheim",
        "postalCode": "67586"
      },
      {
        "name": "Rülzheim",
        "postalCode": "76761"
      },
      {
        "name": "Nackenheim",
        "postalCode": "55299"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67069"
      },
      {
        "name": "Tawern",
        "postalCode": "54456"
      },
      {
        "name": "Stadtkyll",
        "postalCode": "54589"
      },
      {
        "name": "Kyllburg",
        "postalCode": "54655"
      },
      {
        "name": "Reifferscheid, Kaltenborn, Wershofen u.a.",
        "postalCode": "53520"
      },
      {
        "name": "Morbach",
        "postalCode": "54497"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Melsbach",
        "postalCode": "56581"
      },
      {
        "name": "Wildenbungert, Gondershausen, Nörtershausen u.a.",
        "postalCode": "56283"
      },
      {
        "name": "Reifenberg",
        "postalCode": "66507"
      },
      {
        "name": "Höheinöd, Petersberg u.a.",
        "postalCode": "66989"
      },
      {
        "name": "Winningen",
        "postalCode": "56333"
      },
      {
        "name": "Birnbach",
        "postalCode": "57612"
      },
      {
        "name": "Neustadt an der Weinstraße",
        "postalCode": "67435"
      },
      {
        "name": "Mainz",
        "postalCode": "55116"
      },
      {
        "name": "Nierstein",
        "postalCode": "55283"
      },
      {
        "name": "Schifferstadt",
        "postalCode": "67105"
      },
      {
        "name": "Kirn",
        "postalCode": "55606"
      },
      {
        "name": "Altenkirchen (Westerwald)",
        "postalCode": "57610"
      },
      {
        "name": "Niederkirchen",
        "postalCode": "67700"
      },
      {
        "name": "Hamm (Sieg)",
        "postalCode": "57577"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Selters (Westerwald)",
        "postalCode": "56242"
      },
      {
        "name": "Sohren",
        "postalCode": "55487"
      },
      {
        "name": "Bad Hönningen",
        "postalCode": "53557"
      },
      {
        "name": "Kirn",
        "postalCode": "55606"
      },
      {
        "name": "Briedel",
        "postalCode": "56867"
      },
      {
        "name": "Sinzig",
        "postalCode": "53489"
      },
      {
        "name": "Senheim",
        "postalCode": "56820"
      },
      {
        "name": "Höhn",
        "postalCode": "56462"
      },
      {
        "name": "Esthal",
        "postalCode": "67472"
      },
      {
        "name": "Landau in der Pfalz",
        "postalCode": "76829"
      },
      {
        "name": "Scheibenhardt",
        "postalCode": "76779"
      },
      {
        "name": "Guldental",
        "postalCode": "55452"
      },
      {
        "name": "Hackenheim",
        "postalCode": "55546"
      },
      {
        "name": "Nistertal, Enspel",
        "postalCode": "57647"
      },
      {
        "name": "Bad Dürkheim",
        "postalCode": "67098"
      },
      {
        "name": "Ockenheim",
        "postalCode": "55437"
      },
      {
        "name": "Maikammer",
        "postalCode": "67487"
      },
      {
        "name": "Gommersheim",
        "postalCode": "67377"
      },
      {
        "name": "Kindenheim",
        "postalCode": "67271"
      },
      {
        "name": "Erpolzheim",
        "postalCode": "67167"
      },
      {
        "name": "Niederkirchen bei Deidesheim",
        "postalCode": "67150"
      },
      {
        "name": "Oppenheim",
        "postalCode": "55276"
      },
      {
        "name": "Vinningen, Trulben, Ruppertsweiler u.a.",
        "postalCode": "66957"
      },
      {
        "name": "Hinterweidenthal",
        "postalCode": "66999"
      },
      {
        "name": "Norheim u.a.",
        "postalCode": "55585"
      },
      {
        "name": "Singhofen",
        "postalCode": "56379"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Mehren u.a.",
        "postalCode": "54552"
      },
      {
        "name": "Tiefenbach u.a.",
        "postalCode": "55471"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Neuwied",
        "postalCode": "56566"
      },
      {
        "name": "Mittelbrunn, Queidersbach u.a.",
        "postalCode": "66851"
      },
      {
        "name": "Schalkenbach, Königsfeld, Dedenbach",
        "postalCode": "53426"
      },
      {
        "name": "Remagen",
        "postalCode": "53424"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Dudeldorf",
        "postalCode": "54647"
      },
      {
        "name": "Pluwig",
        "postalCode": "54316"
      },
      {
        "name": "Mehren u.a.",
        "postalCode": "54552"
      },
      {
        "name": "Gusenburg",
        "postalCode": "54413"
      },
      {
        "name": "Gevenich",
        "postalCode": "56825"
      },
      {
        "name": "Brücken, Oberbrombach u.a.",
        "postalCode": "55767"
      },
      {
        "name": "Rheinzabern",
        "postalCode": "76764"
      },
      {
        "name": "Alsheim",
        "postalCode": "67577"
      },
      {
        "name": "Schwegenheim",
        "postalCode": "67365"
      },
      {
        "name": "Limburgerhof",
        "postalCode": "67117"
      },
      {
        "name": "Steimel",
        "postalCode": "57614"
      },
      {
        "name": "Dürrholz",
        "postalCode": "56307"
      },
      {
        "name": "Kindsbach",
        "postalCode": "66862"
      },
      {
        "name": "Waldböckelheim",
        "postalCode": "55596"
      },
      {
        "name": "Eitelborn",
        "postalCode": "56337"
      },
      {
        "name": "Hirschhorn",
        "postalCode": "67732"
      },
      {
        "name": "Bornich, Patersberg",
        "postalCode": "56348"
      },
      {
        "name": "Nußbach",
        "postalCode": "67759"
      },
      {
        "name": "Kaub",
        "postalCode": "56349"
      },
      {
        "name": "Otterberg",
        "postalCode": "67697"
      },
      {
        "name": "Bad Ems Umland",
        "postalCode": "56132"
      },
      {
        "name": "Lorch",
        "postalCode": "65391"
      },
      {
        "name": "Hachenburg",
        "postalCode": "57627"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Steinbach, Weitersweiler, Bennhausen, Mörsfeld, Würzweiler, Ruppertsecken u.a.",
        "postalCode": "67808"
      },
      {
        "name": "Waldleiningen, Fischbach",
        "postalCode": "67693"
      },
      {
        "name": "Münchweiler an der Alsenz",
        "postalCode": "67728"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Diez, Hambach, Aull",
        "postalCode": "65582"
      },
      {
        "name": "Birlenbach",
        "postalCode": "65626"
      },
      {
        "name": "Frankenstein, Neidenfels, Frankeneck",
        "postalCode": "67468"
      },
      {
        "name": "Wallertheim",
        "postalCode": "55578"
      },
      {
        "name": "Albisheim (Pfrimm)",
        "postalCode": "67308"
      },
      {
        "name": "Wachenheim an der Weinstraße",
        "postalCode": "67157"
      },
      {
        "name": "Bottenbach",
        "postalCode": "66504"
      },
      {
        "name": "Waldesch, Hünenfeld",
        "postalCode": "56323"
      },
      {
        "name": "Mendig",
        "postalCode": "56743"
      },
      {
        "name": "Berglangenbach, Ruschberg u.a.",
        "postalCode": "55776"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Polch",
        "postalCode": "56751"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67061"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Schönecken",
        "postalCode": "54614"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Lissendorf",
        "postalCode": "54587"
      },
      {
        "name": "Irsch",
        "postalCode": "54451"
      },
      {
        "name": "Trier",
        "postalCode": "54295"
      },
      {
        "name": "Antweiler, Aremberg, Dorsel, Eichenbach, Aremberg, Fuchshofen und Müsch",
        "postalCode": "53533"
      },
      {
        "name": "Reifferscheid, Kaltenborn, Wershofen u.a.",
        "postalCode": "53520"
      },
      {
        "name": "Reinsfeld",
        "postalCode": "54421"
      },
      {
        "name": "Gillenfeld",
        "postalCode": "54558"
      },
      {
        "name": "Ettringen",
        "postalCode": "56729"
      },
      {
        "name": "Bernkastel-Kues u.a.",
        "postalCode": "54470"
      },
      {
        "name": "Alflen",
        "postalCode": "56828"
      },
      {
        "name": "Seibersbach",
        "postalCode": "55444"
      },
      {
        "name": "Guldental",
        "postalCode": "55452"
      },
      {
        "name": "Sankt Goarshausen u.a.",
        "postalCode": "56346"
      },
      {
        "name": "Grünstadt",
        "postalCode": "67269"
      },
      {
        "name": "Obrigheim (Pfalz)",
        "postalCode": "67283"
      },
      {
        "name": "Rödersheim-Gronau",
        "postalCode": "67127"
      },
      {
        "name": "Heßheim",
        "postalCode": "67258"
      },
      {
        "name": "Nastätten u.a.",
        "postalCode": "56355"
      },
      {
        "name": "Sembach",
        "postalCode": "67681"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Neuhemsbach",
        "postalCode": "67680"
      },
      {
        "name": "Kirchheimbolanden",
        "postalCode": "67292"
      },
      {
        "name": "Bischheim u.a.",
        "postalCode": "67294"
      },
      {
        "name": "Edenkoben",
        "postalCode": "67480"
      },
      {
        "name": "Dellfeld",
        "postalCode": "66503"
      },
      {
        "name": "Horhausen (Westerwald)",
        "postalCode": "56593"
      },
      {
        "name": "Lauterecken u.a.",
        "postalCode": "67742"
      },
      {
        "name": "Emmelshausen",
        "postalCode": "56281"
      },
      {
        "name": "Hornbach",
        "postalCode": "66500"
      },
      {
        "name": "Leutesdorf",
        "postalCode": "56599"
      },
      {
        "name": "Saffig",
        "postalCode": "56648"
      },
      {
        "name": "Irmenach",
        "postalCode": "56843"
      },
      {
        "name": "Ediger-Eller",
        "postalCode": "56814"
      },
      {
        "name": "Staudernheim",
        "postalCode": "55568"
      },
      {
        "name": "Fischbach, Erfweiler u.a.",
        "postalCode": "66996"
      },
      {
        "name": "Bad Ems Umland",
        "postalCode": "56132"
      },
      {
        "name": "Miehlen u.a.",
        "postalCode": "56357"
      },
      {
        "name": "Winterborn, Waldgrehweiler, Niedermoschel, u.a.",
        "postalCode": "67822"
      },
      {
        "name": "Nußbach",
        "postalCode": "67759"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Bad Kreuznach",
        "postalCode": "55583"
      },
      {
        "name": "Bockenheim an der Weinstraße",
        "postalCode": "67278"
      },
      {
        "name": "Kirchheim an der Weinstraße",
        "postalCode": "67281"
      },
      {
        "name": "Mainz",
        "postalCode": "55127"
      },
      {
        "name": "Bellheim",
        "postalCode": "76756"
      },
      {
        "name": "Düngenheim",
        "postalCode": "56761"
      },
      {
        "name": "Niederwörresbach",
        "postalCode": "55758"
      },
      {
        "name": "Klotten",
        "postalCode": "56818"
      },
      {
        "name": "Irmenach",
        "postalCode": "56843"
      },
      {
        "name": "Binningen",
        "postalCode": "56754"
      },
      {
        "name": "Daleiden, Preischeid u.a.",
        "postalCode": "54689"
      },
      {
        "name": "Prüm",
        "postalCode": "54595"
      },
      {
        "name": "Pronsfeld",
        "postalCode": "54597"
      },
      {
        "name": "Ayl, Trassem u.a.",
        "postalCode": "54441"
      },
      {
        "name": "Irrel",
        "postalCode": "54666"
      },
      {
        "name": "Schüller",
        "postalCode": "54586"
      },
      {
        "name": "Badem, Gindorf, Neidenbach",
        "postalCode": "54657"
      },
      {
        "name": "Daun",
        "postalCode": "54550"
      },
      {
        "name": "Zeltingen-Rachtig, Erden, Lösnich u.a.",
        "postalCode": "54492"
      },
      {
        "name": "Malborn",
        "postalCode": "54426"
      },
      {
        "name": "Pirmasens",
        "postalCode": "66954"
      },
      {
        "name": "Koblenz",
        "postalCode": "56075"
      },
      {
        "name": "Koblenz",
        "postalCode": "56073"
      },
      {
        "name": "Puderbach",
        "postalCode": "56305"
      },
      {
        "name": "Dürrholz",
        "postalCode": "56307"
      },
      {
        "name": "Imsbach",
        "postalCode": "67817"
      },
      {
        "name": "Gundersweiler, Gonbach u.a.",
        "postalCode": "67724"
      },
      {
        "name": "Schönborn",
        "postalCode": "56370"
      },
      {
        "name": "Göllheim",
        "postalCode": "67307"
      },
      {
        "name": "Kruft",
        "postalCode": "56642"
      },
      {
        "name": "Zweibrücken",
        "postalCode": "66482"
      },
      {
        "name": "Kretz",
        "postalCode": "56630"
      },
      {
        "name": "Gemünden",
        "postalCode": "55490"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Urmitz",
        "postalCode": "56220"
      },
      {
        "name": "Neuhofen",
        "postalCode": "67141"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67059"
      },
      {
        "name": "Klingenmünster u.a.",
        "postalCode": "76889"
      },
      {
        "name": "Westerburg",
        "postalCode": "56457"
      },
      {
        "name": "Sprendlingen",
        "postalCode": "55576"
      },
      {
        "name": "Wörrstadt",
        "postalCode": "55286"
      },
      {
        "name": "Heidesheim am Rhein",
        "postalCode": "55262"
      },
      {
        "name": "Waxweiler",
        "postalCode": "54649"
      },
      {
        "name": "Newel",
        "postalCode": "54309"
      },
      {
        "name": "Niersbach, Sehlem, Plein u.a.",
        "postalCode": "54518"
      },
      {
        "name": "Osburg, Gusterath, Farschweiler, Kasel u.a.",
        "postalCode": "54317"
      },
      {
        "name": "Salmtal",
        "postalCode": "54528"
      },
      {
        "name": "Piesport",
        "postalCode": "54498"
      },
      {
        "name": "Malborn",
        "postalCode": "54426"
      },
      {
        "name": "Ellern (Hunsrück), Schnorbach",
        "postalCode": "55497"
      },
      {
        "name": "Sankt Goar",
        "postalCode": "56329"
      },
      {
        "name": "Otterbach",
        "postalCode": "67731"
      },
      {
        "name": "Bruchweiler-Bärenbach u.a.",
        "postalCode": "76891"
      },
      {
        "name": "Kaiserslautern",
        "postalCode": "67657"
      },
      {
        "name": "Siershahn",
        "postalCode": "56427"
      },
      {
        "name": "Lehmen, Niederfell, Oberfell, Wolken u.a.",
        "postalCode": "56332"
      },
      {
        "name": "Hundsbach",
        "postalCode": "55621"
      },
      {
        "name": "Mainz",
        "postalCode": "55126"
      },
      {
        "name": "Offstein",
        "postalCode": "67591"
      },
      {
        "name": "Mainz",
        "postalCode": "55118"
      },
      {
        "name": "Pfeffelbach",
        "postalCode": "66871"
      },
      {
        "name": "Breitscheid, Dattenberg, Hausen, Hümmerich, Kasbach-Ohlenberg, Roßbach u.a.",
        "postalCode": "53547"
      },
      {
        "name": "Kirchberg u.a.",
        "postalCode": "55481"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Pünderich",
        "postalCode": "56862"
      },
      {
        "name": "Kleinich",
        "postalCode": "54483"
      },
      {
        "name": "Kirchen (Sieg)",
        "postalCode": "57548"
      },
      {
        "name": "Kriegsfeld",
        "postalCode": "67819"
      },
      {
        "name": "Steinbach, Weitersweiler, Bennhausen, Mörsfeld, Würzweiler, Ruppertsecken u.a.",
        "postalCode": "67808"
      },
      {
        "name": "Weidenthal",
        "postalCode": "67475"
      },
      {
        "name": "Ober-Olm",
        "postalCode": "55270"
      },
      {
        "name": "Venningen",
        "postalCode": "67482"
      },
      {
        "name": "Leiwen u.a.",
        "postalCode": "54340"
      },
      {
        "name": "Hetzerath, Dierscheid, Heckenmünster",
        "postalCode": "54523"
      },
      {
        "name": "Walsdorf, Nohn u.a.",
        "postalCode": "54578"
      },
      {
        "name": "Reifferscheid, Kaltenborn, Wershofen u.a.",
        "postalCode": "53520"
      },
      {
        "name": "Büchenbeuren",
        "postalCode": "55491"
      },
      {
        "name": "Nickenich",
        "postalCode": "56645"
      },
      {
        "name": "Andernach",
        "postalCode": "56626"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Kastellaun",
        "postalCode": "56288"
      },
      {
        "name": "Niederbreitbach",
        "postalCode": "56589"
      },
      {
        "name": "Glan-Münchweiler",
        "postalCode": "66907"
      },
      {
        "name": "Schallodenbach",
        "postalCode": "67701"
      },
      {
        "name": "Hargesheim",
        "postalCode": "55595"
      },
      {
        "name": "Herschbach",
        "postalCode": "56249"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Wirges, Stadt",
        "postalCode": "56422"
      },
      {
        "name": "Freilingen, Freirachdorf u.a.",
        "postalCode": "56244"
      },
      {
        "name": "Willroth",
        "postalCode": "56594"
      },
      {
        "name": "Hochstadt",
        "postalCode": "76879"
      },
      {
        "name": "Gau-Odernheim",
        "postalCode": "55239"
      },
      {
        "name": "Offenbach an der Queich",
        "postalCode": "76877"
      },
      {
        "name": "Monsheim",
        "postalCode": "67590"
      },
      {
        "name": "Mainz",
        "postalCode": "55120"
      },
      {
        "name": "Gerolsheim",
        "postalCode": "67229"
      },
      {
        "name": "Lustadt",
        "postalCode": "67363"
      },
      {
        "name": "Hochdorf-Assenheim",
        "postalCode": "67126"
      },
      {
        "name": "Neupotz",
        "postalCode": "76777"
      },
      {
        "name": "Frankenthal (Pfalz)",
        "postalCode": "67227"
      },
      {
        "name": "Hanhofen",
        "postalCode": "67374"
      },
      {
        "name": "Römerberg",
        "postalCode": "67354"
      },
      {
        "name": "Jünkerath",
        "postalCode": "54584"
      },
      {
        "name": "Wiltingen",
        "postalCode": "54459"
      },
      {
        "name": "Leiwen u.a.",
        "postalCode": "54340"
      },
      {
        "name": "Dernau",
        "postalCode": "53507"
      },
      {
        "name": "Enkirch u.a.",
        "postalCode": "56850"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Straßenhaus",
        "postalCode": "56587"
      },
      {
        "name": "Vinningen, Trulben, Ruppertsweiler u.a.",
        "postalCode": "66957"
      },
      {
        "name": "Eßweiler",
        "postalCode": "67754"
      },
      {
        "name": "Sobernheim",
        "postalCode": "55566"
      },
      {
        "name": "Thaleischweiler-Fröschen",
        "postalCode": "66987"
      },
      {
        "name": "Vallendar",
        "postalCode": "56179"
      },
      {
        "name": "Rehborn",
        "postalCode": "55592"
      },
      {
        "name": "Rothselberg u.a.",
        "postalCode": "67753"
      },
      {
        "name": "Münchweiler an der Rodalb",
        "postalCode": "66981"
      },
      {
        "name": "Heltersberg",
        "postalCode": "67716"
      },
      {
        "name": "Trippstadt u.a.",
        "postalCode": "67705"
      },
      {
        "name": "Nastätten u.a.",
        "postalCode": "56355"
      },
      {
        "name": "Gebhardshain",
        "postalCode": "57580"
      },
      {
        "name": "Alzey",
        "postalCode": "55232"
      },
      {
        "name": "Wackernheim",
        "postalCode": "55263"
      },
      {
        "name": "Armsheim",
        "postalCode": "55288"
      },
      {
        "name": "Hochstadt",
        "postalCode": "76879"
      },
      {
        "name": "Weingarten (Pfalz)",
        "postalCode": "67366"
      },
      {
        "name": "Kuhardt",
        "postalCode": "76773"
      },
      {
        "name": "Alpenrod",
        "postalCode": "57642"
      },
      {
        "name": "Unnau",
        "postalCode": "57648"
      },
      {
        "name": "Bretzenheim",
        "postalCode": "55559"
      },
      {
        "name": "Mudersbach",
        "postalCode": "57555"
      },
      {
        "name": "Neustadt an der Weinstraße",
        "postalCode": "67434"
      },
      {
        "name": "Burgschwalbach",
        "postalCode": "65558"
      },
      {
        "name": "Alzey",
        "postalCode": "55232"
      },
      {
        "name": "Hettenleidelheim",
        "postalCode": "67310"
      },
      {
        "name": "Waldmohr",
        "postalCode": "66914"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Niederwörresbach",
        "postalCode": "55758"
      },
      {
        "name": "Pronsfeld",
        "postalCode": "54597"
      },
      {
        "name": "Pronsfeld",
        "postalCode": "54597"
      },
      {
        "name": "Rittersdorf u.a.",
        "postalCode": "54636"
      },
      {
        "name": "Pellingen",
        "postalCode": "54331"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Serrig",
        "postalCode": "54455"
      },
      {
        "name": "Hillesheim",
        "postalCode": "54576"
      },
      {
        "name": "Schweich",
        "postalCode": "54338"
      },
      {
        "name": "Schillingen",
        "postalCode": "54429"
      },
      {
        "name": "Maring-Noviand",
        "postalCode": "54484"
      },
      {
        "name": "Niederwörresbach",
        "postalCode": "55758"
      },
      {
        "name": "Bruchhausen, Unkel",
        "postalCode": "53572"
      },
      {
        "name": "Bullay, Alf, Zell",
        "postalCode": "56859"
      },
      {
        "name": "Ramstein-Miesenbach",
        "postalCode": "66877"
      },
      {
        "name": "Thaleischweiler-Fröschen",
        "postalCode": "66987"
      },
      {
        "name": "Koblenz",
        "postalCode": "56070"
      },
      {
        "name": "Weilerbach u.a.",
        "postalCode": "67685"
      },
      {
        "name": "Pirmasens",
        "postalCode": "66955"
      },
      {
        "name": "Altrip",
        "postalCode": "67122"
      },
      {
        "name": "Olsbrücken",
        "postalCode": "67737"
      },
      {
        "name": "Sankt Goarshausen u.a.",
        "postalCode": "56346"
      },
      {
        "name": "Bad Kreuznach",
        "postalCode": "55545"
      },
      {
        "name": "Burgschwalbach",
        "postalCode": "65558"
      },
      {
        "name": "Bad Bergzabern u.a.",
        "postalCode": "76887"
      },
      {
        "name": "Sippersfeld",
        "postalCode": "67729"
      },
      {
        "name": "Gensingen",
        "postalCode": "55457"
      },
      {
        "name": "Landau in der Pfalz",
        "postalCode": "76829"
      },
      {
        "name": "Kirrweiler (Pfalz)",
        "postalCode": "67489"
      },
      {
        "name": "Offstein",
        "postalCode": "67591"
      },
      {
        "name": "Gundersheim",
        "postalCode": "67598"
      },
      {
        "name": "Friedelsheim",
        "postalCode": "67159"
      },
      {
        "name": "Neuburg am Rhein",
        "postalCode": "76776"
      },
      {
        "name": "Gundheim",
        "postalCode": "67599"
      },
      {
        "name": "Bechtheim",
        "postalCode": "67595"
      },
      {
        "name": "Dorn-Dürkheim",
        "postalCode": "67585"
      },
      {
        "name": "Lambsheim",
        "postalCode": "67245"
      },
      {
        "name": "Maxdorf",
        "postalCode": "67133"
      },
      {
        "name": "Gimbsheim",
        "postalCode": "67578"
      },
      {
        "name": "Budenheim",
        "postalCode": "55257"
      },
      {
        "name": "Speyer",
        "postalCode": "67346"
      },
      {
        "name": "Hochspeyer",
        "postalCode": "67691"
      },
      {
        "name": "Frankenstein, Neidenfels, Frankeneck",
        "postalCode": "67468"
      },
      {
        "name": "Ingelheim am Rhein",
        "postalCode": "55218"
      },
      {
        "name": "Weisenheim am Berg",
        "postalCode": "67273"
      },
      {
        "name": "Peterswald-Löffelscheid u.a.",
        "postalCode": "56858"
      },
      {
        "name": "Beltheim",
        "postalCode": "56290"
      },
      {
        "name": "Schönenberg-Kübelberg",
        "postalCode": "66901"
      },
      {
        "name": "Ochtendung",
        "postalCode": "56299"
      },
      {
        "name": "Altenkirchen",
        "postalCode": "66903"
      },
      {
        "name": "Kirn",
        "postalCode": "55606"
      },
      {
        "name": "Zell (Mosel)",
        "postalCode": "56856"
      },
      {
        "name": "Altenglan",
        "postalCode": "66885"
      },
      {
        "name": "Monzingen",
        "postalCode": "55569"
      },
      {
        "name": "Lemberg",
        "postalCode": "66969"
      },
      {
        "name": "Lahnstein",
        "postalCode": "56112"
      },
      {
        "name": "Koblenz",
        "postalCode": "56077"
      },
      {
        "name": "Meisenheim",
        "postalCode": "55590"
      },
      {
        "name": "Hillscheid",
        "postalCode": "56204"
      },
      {
        "name": "Selters (Westerwald)",
        "postalCode": "56242"
      },
      {
        "name": "Hallschlag",
        "postalCode": "54611"
      },
      {
        "name": "Traben-Trarbach",
        "postalCode": "56841"
      },
      {
        "name": "Rheinböllen",
        "postalCode": "55494"
      },
      {
        "name": "Odenbach",
        "postalCode": "67748"
      },
      {
        "name": "Braubach",
        "postalCode": "56338"
      },
      {
        "name": "Schneckenhausen",
        "postalCode": "67699"
      },
      {
        "name": "Ayl, Trassem u.a.",
        "postalCode": "54441"
      },
      {
        "name": "Tawern",
        "postalCode": "54456"
      },
      {
        "name": "Trier",
        "postalCode": "54290"
      },
      {
        "name": "Großlittgen",
        "postalCode": "54534"
      },
      {
        "name": "Neuhütten",
        "postalCode": "54422"
      },
      {
        "name": "Kempenich",
        "postalCode": "56746"
      },
      {
        "name": "Waldbreitbach, Hasuen",
        "postalCode": "56588"
      },
      {
        "name": "Bruchmühlbach-Miesau",
        "postalCode": "66892"
      },
      {
        "name": "Enkirch u.a.",
        "postalCode": "56850"
      },
      {
        "name": "Hoppstädten-Weiersbach",
        "postalCode": "55768"
      },
      {
        "name": "Brücken, Oberbrombach u.a.",
        "postalCode": "55767"
      },
      {
        "name": "Rheinbreitbach",
        "postalCode": "53619"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67067"
      },
      {
        "name": "Ebertsheim",
        "postalCode": "67280"
      },
      {
        "name": "Hagenbach",
        "postalCode": "76767"
      },
      {
        "name": "Freisbach",
        "postalCode": "67361"
      },
      {
        "name": "Dannstadt-Schauernheim",
        "postalCode": "67125"
      },
      {
        "name": "Harthausen",
        "postalCode": "67376"
      },
      {
        "name": "Worms",
        "postalCode": "67547"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67063"
      },
      {
        "name": "Meudt, Molsberg, Hundsangen, Niederahr u.a.",
        "postalCode": "56414"
      },
      {
        "name": "Wöllstein",
        "postalCode": "55597"
      },
      {
        "name": "Kirrweiler (Pfalz)",
        "postalCode": "67489"
      },
      {
        "name": "Landau in der Pfalz",
        "postalCode": "76829"
      },
      {
        "name": "Saarburg",
        "postalCode": "54439"
      },
      {
        "name": "Pronsfeld",
        "postalCode": "54597"
      },
      {
        "name": "Langsur",
        "postalCode": "54308"
      },
      {
        "name": "Pelm, Neroth u.a.",
        "postalCode": "54570"
      },
      {
        "name": "Walsdorf, Nohn u.a.",
        "postalCode": "54578"
      },
      {
        "name": "Kell am See",
        "postalCode": "54427"
      },
      {
        "name": "Trittenheim",
        "postalCode": "54349"
      },
      {
        "name": "Urmitz",
        "postalCode": "56220"
      },
      {
        "name": "Kleinmaischeid",
        "postalCode": "56271"
      },
      {
        "name": "Nentershausen, Hübingen, Niederelbert u.a.",
        "postalCode": "56412"
      },
      {
        "name": "Nauroth",
        "postalCode": "57583"
      },
      {
        "name": "Albig",
        "postalCode": "55234"
      },
      {
        "name": "Nisterau u.a.",
        "postalCode": "56472"
      },
      {
        "name": "Ockenheim",
        "postalCode": "55437"
      },
      {
        "name": "Gau-Algesheim",
        "postalCode": "55435"
      },
      {
        "name": "Billigheim-Ingenheim, Birkweiler",
        "postalCode": "76831"
      },
      {
        "name": "Lindenberg",
        "postalCode": "67473"
      },
      {
        "name": "Dierdorf",
        "postalCode": "56269"
      },
      {
        "name": "Urbar (bei Koblenz)",
        "postalCode": "56182"
      },
      {
        "name": "Spay",
        "postalCode": "56322"
      },
      {
        "name": "Obermoschel, Schiersfeld",
        "postalCode": "67823"
      },
      {
        "name": "Bornich, Patersberg",
        "postalCode": "56348"
      },
      {
        "name": "Nassau",
        "postalCode": "56377"
      },
      {
        "name": "Hinterweidenthal",
        "postalCode": "66999"
      },
      {
        "name": "Rhaunen",
        "postalCode": "55624"
      },
      {
        "name": "Lonnig",
        "postalCode": "56295"
      },
      {
        "name": "Neustadt (Wied)",
        "postalCode": "53577"
      },
      {
        "name": "Hennweiler",
        "postalCode": "55619"
      },
      {
        "name": "Ediger-Eller",
        "postalCode": "56814"
      },
      {
        "name": "Cochem",
        "postalCode": "56812"
      },
      {
        "name": "Irmenach",
        "postalCode": "56843"
      },
      {
        "name": "Neustadt an der Weinstraße",
        "postalCode": "67435"
      },
      {
        "name": "Kindenheim",
        "postalCode": "67271"
      },
      {
        "name": "Mainz",
        "postalCode": "55122"
      },
      {
        "name": "Westhofen, Bermersheim",
        "postalCode": "67593"
      },
      {
        "name": "Haßloch",
        "postalCode": "67454"
      },
      {
        "name": "Mainz Ebersheim, Hechtsheim",
        "postalCode": "55129"
      },
      {
        "name": "Hördt",
        "postalCode": "76771"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Burgschwalbach",
        "postalCode": "65558"
      },
      {
        "name": "Gau-Bickelheim",
        "postalCode": "55599"
      },
      {
        "name": "Altleiningen",
        "postalCode": "67317"
      },
      {
        "name": "Kindenheim",
        "postalCode": "67271"
      },
      {
        "name": "Mehlbach",
        "postalCode": "67735"
      },
      {
        "name": "Kaiserslautern",
        "postalCode": "67659"
      },
      {
        "name": "Ransbach-Baumbach",
        "postalCode": "56235"
      },
      {
        "name": "Kaiserslautern",
        "postalCode": "67663"
      },
      {
        "name": "Mogendorf, Ebernhahn, Staudt u.a.",
        "postalCode": "56424"
      },
      {
        "name": "Rammelsbach u.a.",
        "postalCode": "66887"
      },
      {
        "name": "Merxheim",
        "postalCode": "55627"
      },
      {
        "name": "Hinzweiler",
        "postalCode": "67756"
      },
      {
        "name": "Grumbach",
        "postalCode": "67745"
      },
      {
        "name": "Winterspelt",
        "postalCode": "54616"
      },
      {
        "name": "Körperich u.a.",
        "postalCode": "54675"
      },
      {
        "name": "Wasserliesch",
        "postalCode": "54332"
      },
      {
        "name": "Trier",
        "postalCode": "54293"
      },
      {
        "name": "Altenahr, Berg, Kalenborn, Kirchsahr",
        "postalCode": "53505"
      },
      {
        "name": "Deuselbach, Hermeskeil, Rorodt",
        "postalCode": "54411"
      },
      {
        "name": "Berschweiler bei Baumholder",
        "postalCode": "55777"
      },
      {
        "name": "Lehmen, Niederfell, Oberfell, Wolken u.a.",
        "postalCode": "56332"
      },
      {
        "name": "Wildenbungert, Gondershausen, Nörtershausen u.a.",
        "postalCode": "56283"
      },
      {
        "name": "Birkenfeld u.a.",
        "postalCode": "55765"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Preist",
        "postalCode": "54664"
      },
      {
        "name": "Reifferscheid, Kaltenborn, Wershofen u.a.",
        "postalCode": "53520"
      },
      {
        "name": "Ahrbrück, Heckenbach, Hönningen, Kesseling, Rech",
        "postalCode": "53506"
      },
      {
        "name": "Ürzig",
        "postalCode": "54539"
      },
      {
        "name": "Rammelsbach u.a.",
        "postalCode": "66887"
      },
      {
        "name": "Mittelbrunn, Queidersbach u.a.",
        "postalCode": "66851"
      },
      {
        "name": "Mackenbach",
        "postalCode": "67686"
      },
      {
        "name": "Peterswald-Löffelscheid u.a.",
        "postalCode": "56858"
      },
      {
        "name": "Asbach, Buchholz",
        "postalCode": "53567"
      },
      {
        "name": "Tiefenbach u.a.",
        "postalCode": "55471"
      },
      {
        "name": "Bad Breisig, Waldorf, Gönnersdorf",
        "postalCode": "53498"
      },
      {
        "name": "Waldsee",
        "postalCode": "67165"
      },
      {
        "name": "Betzdorf",
        "postalCode": "57518"
      },
      {
        "name": "Herdorf",
        "postalCode": "57562"
      },
      {
        "name": "Landau in der Pfalz",
        "postalCode": "76829"
      },
      {
        "name": "Wörth",
        "postalCode": "76744"
      },
      {
        "name": "Ruppertsberg",
        "postalCode": "67152"
      },
      {
        "name": "Germersheim",
        "postalCode": "76726"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67067"
      },
      {
        "name": "Steimel",
        "postalCode": "57614"
      },
      {
        "name": "Lauterecken u.a.",
        "postalCode": "67742"
      },
      {
        "name": "Fürthen",
        "postalCode": "57539"
      },
      {
        "name": "Eitelborn",
        "postalCode": "56337"
      },
      {
        "name": "Bad Ems",
        "postalCode": "56130"
      },
      {
        "name": "Weiler bei Bingen",
        "postalCode": "55413"
      },
      {
        "name": "Singhofen",
        "postalCode": "56379"
      },
      {
        "name": "Mogendorf, Ebernhahn, Staudt u.a.",
        "postalCode": "56424"
      },
      {
        "name": "Waldalgesheim",
        "postalCode": "55425"
      },
      {
        "name": "Höheinöd, Petersberg u.a.",
        "postalCode": "66989"
      },
      {
        "name": "Hargesheim",
        "postalCode": "55595"
      },
      {
        "name": "Osterspai",
        "postalCode": "56340"
      },
      {
        "name": "Pracht",
        "postalCode": "57589"
      },
      {
        "name": "Weitersburg",
        "postalCode": "56191"
      },
      {
        "name": "Nauort",
        "postalCode": "56237"
      },
      {
        "name": "Oberwesel",
        "postalCode": "55430"
      },
      {
        "name": "Wissen, Hövels u.a.",
        "postalCode": "57537"
      },
      {
        "name": "Dierdorf",
        "postalCode": "56269"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Hallgarten",
        "postalCode": "67826"
      },
      {
        "name": "Singhofen",
        "postalCode": "56379"
      },
      {
        "name": "Trierweiler",
        "postalCode": "54311"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Bettenfeld, Niederöfflingen u.a.",
        "postalCode": "54533"
      },
      {
        "name": "Deuselbach, Hermeskeil, Rorodt",
        "postalCode": "54411"
      },
      {
        "name": "Neuhütten",
        "postalCode": "54422"
      },
      {
        "name": "Hauenstein",
        "postalCode": "76846"
      },
      {
        "name": "Waldleiningen, Fischbach",
        "postalCode": "67693"
      },
      {
        "name": "Bellingen, Kölbingen, Gemünden u.a.",
        "postalCode": "56459"
      },
      {
        "name": "Gau-Bickelheim",
        "postalCode": "55599"
      },
      {
        "name": "Bad Bergzabern u.a.",
        "postalCode": "76887"
      },
      {
        "name": "Weißenthurm",
        "postalCode": "56575"
      },
      {
        "name": "Boppard",
        "postalCode": "56154"
      },
      {
        "name": "Mittelbrunn, Queidersbach u.a.",
        "postalCode": "66851"
      },
      {
        "name": "Koblenz",
        "postalCode": "56072"
      },
      {
        "name": "Altenkirchen",
        "postalCode": "66903"
      },
      {
        "name": "Niederwörresbach",
        "postalCode": "55758"
      },
      {
        "name": "Kastellaun",
        "postalCode": "56288"
      },
      {
        "name": "Pfeffelbach",
        "postalCode": "66871"
      },
      {
        "name": "Otterstadt",
        "postalCode": "67166"
      },
      {
        "name": "Forst an der Weinstraße",
        "postalCode": "67147"
      },
      {
        "name": "Meckenheim",
        "postalCode": "67149"
      },
      {
        "name": "Birkenheide",
        "postalCode": "67134"
      },
      {
        "name": "Mainz",
        "postalCode": "55131"
      },
      {
        "name": "Beindersheim",
        "postalCode": "67259"
      },
      {
        "name": "Guntersblum",
        "postalCode": "67583"
      },
      {
        "name": "Pronsfeld",
        "postalCode": "54597"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Esch",
        "postalCode": "54585"
      },
      {
        "name": "Föhren",
        "postalCode": "54343"
      },
      {
        "name": "Fell",
        "postalCode": "54341"
      },
      {
        "name": "Klausen",
        "postalCode": "54524"
      },
      {
        "name": "Monzelfeld, Hochscheid u.a.",
        "postalCode": "54472"
      },
      {
        "name": "Mayschoß",
        "postalCode": "53508"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Weyerbusch",
        "postalCode": "57635"
      },
      {
        "name": "Obernheim-Kirchenarnbach u.a.",
        "postalCode": "66919"
      },
      {
        "name": "Bingen am Rhein",
        "postalCode": "55411"
      },
      {
        "name": "Bingen am Rhein",
        "postalCode": "55411"
      },
      {
        "name": "Dannenfels",
        "postalCode": "67814"
      },
      {
        "name": "Aspisheim, Grolsheim",
        "postalCode": "55459"
      },
      {
        "name": "Annweiler am Trifels",
        "postalCode": "76855"
      },
      {
        "name": "Marnheim",
        "postalCode": "67297"
      },
      {
        "name": "Hahnstätten u.a.",
        "postalCode": "65623"
      },
      {
        "name": "Bornich, Patersberg",
        "postalCode": "56348"
      },
      {
        "name": "Schmalenberg",
        "postalCode": "67718"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Saulheim",
        "postalCode": "55291"
      },
      {
        "name": "Osthofen",
        "postalCode": "67574"
      },
      {
        "name": "Bobenheim-Roxheim",
        "postalCode": "67240"
      },
      {
        "name": "Ellenz-Poltersdorf",
        "postalCode": "56821"
      },
      {
        "name": "Erpel",
        "postalCode": "53579"
      },
      {
        "name": "Herrstein",
        "postalCode": "55756"
      },
      {
        "name": "Üttfeld",
        "postalCode": "54619"
      },
      {
        "name": "Ferschweiler",
        "postalCode": "54668"
      },
      {
        "name": "Bitburg",
        "postalCode": "54634"
      },
      {
        "name": "Badem, Gindorf, Neidenbach",
        "postalCode": "54657"
      },
      {
        "name": "Trier",
        "postalCode": "54294"
      },
      {
        "name": "Pelm, Neroth u.a.",
        "postalCode": "54570"
      },
      {
        "name": "Trier",
        "postalCode": "54296"
      },
      {
        "name": "Pellingen",
        "postalCode": "54331"
      },
      {
        "name": "Osburg, Gusterath, Farschweiler, Kasel u.a.",
        "postalCode": "54317"
      },
      {
        "name": "Waldrach",
        "postalCode": "54320"
      },
      {
        "name": "Reifferscheid, Kaltenborn, Wershofen u.a.",
        "postalCode": "53520"
      },
      {
        "name": "Mülheim (Mosel)",
        "postalCode": "54486"
      },
      {
        "name": "Ediger-Eller",
        "postalCode": "56814"
      },
      {
        "name": "Peterswald-Löffelscheid u.a.",
        "postalCode": "56858"
      },
      {
        "name": "Peterswald-Löffelscheid u.a.",
        "postalCode": "56858"
      },
      {
        "name": "Pommern",
        "postalCode": "56829"
      },
      {
        "name": "Niederfischbach",
        "postalCode": "57572"
      },
      {
        "name": "Bad Kreuznach",
        "postalCode": "55543"
      },
      {
        "name": "Enkenbach-Alsenborn",
        "postalCode": "67677"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Daaden",
        "postalCode": "57567"
      },
      {
        "name": "Sprendlingen",
        "postalCode": "55576"
      },
      {
        "name": "Steinwenden u.a.",
        "postalCode": "66879"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Kamp-Bornhofen-Filsen",
        "postalCode": "56341"
      },
      {
        "name": "Großmaischeid",
        "postalCode": "56276"
      },
      {
        "name": "Krickenbach",
        "postalCode": "67706"
      },
      {
        "name": "Mammelzen",
        "postalCode": "57636"
      },
      {
        "name": "Fachbach, Exklave Lahnstein",
        "postalCode": "56133"
      },
      {
        "name": "Schopp",
        "postalCode": "67707"
      },
      {
        "name": "Nußbach",
        "postalCode": "67759"
      },
      {
        "name": "Kaiserslautern",
        "postalCode": "67661"
      },
      {
        "name": "Hachenburg",
        "postalCode": "57627"
      },
      {
        "name": "Alsenz",
        "postalCode": "67821"
      },
      {
        "name": "Flörsheim-Dalsheim",
        "postalCode": "67592"
      },
      {
        "name": "Mainz",
        "postalCode": "55128"
      },
      {
        "name": "Offstein",
        "postalCode": "67591"
      },
      {
        "name": "Worms",
        "postalCode": "67550"
      },
      {
        "name": "Vettelschloß, Kretzhaus (Linz am Rhein)",
        "postalCode": "53560"
      },
      {
        "name": "Münstermaifeld",
        "postalCode": "56294"
      },
      {
        "name": "Kobern-Gondorf",
        "postalCode": "56330"
      },
      {
        "name": "Langenlonsheim",
        "postalCode": "55450"
      },
      {
        "name": "Albersweiler, Silz u.a.",
        "postalCode": "76857"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Nisterau u.a.",
        "postalCode": "56472"
      },
      {
        "name": "Altendiez",
        "postalCode": "65624"
      },
      {
        "name": "Billigheim-Ingenheim, Birkweiler",
        "postalCode": "76831"
      },
      {
        "name": "Niederneisen",
        "postalCode": "65629"
      },
      {
        "name": "Steinweiler",
        "postalCode": "76872"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67065"
      },
      {
        "name": "Rieschweiler-Mühlbach",
        "postalCode": "66509"
      },
      {
        "name": "Leiningen",
        "postalCode": "56291"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Koblenz",
        "postalCode": "56076"
      },
      {
        "name": "Pirmasens",
        "postalCode": "66953"
      },
      {
        "name": "Braubach",
        "postalCode": "56338"
      },
      {
        "name": "Mertloch, Welling u.a.",
        "postalCode": "56753"
      },
      {
        "name": "Rheinbrohl",
        "postalCode": "56598"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Kröv",
        "postalCode": "54536"
      },
      {
        "name": "Ediger-Eller",
        "postalCode": "56814"
      },
      {
        "name": "Birkenfeld u.a.",
        "postalCode": "55765"
      },
      {
        "name": "Burgbrohl",
        "postalCode": "56659"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Zerf",
        "postalCode": "54314"
      },
      {
        "name": "Malborn",
        "postalCode": "54426"
      },
      {
        "name": "Malborn",
        "postalCode": "54426"
      },
      {
        "name": "Lützkampen",
        "postalCode": "54617"
      },
      {
        "name": "Arzfeld",
        "postalCode": "54687"
      },
      {
        "name": "Wincheringen",
        "postalCode": "54457"
      },
      {
        "name": "Konz",
        "postalCode": "54329"
      },
      {
        "name": "Trier",
        "postalCode": "54292"
      },
      {
        "name": "Üxheim",
        "postalCode": "54579"
      },
      {
        "name": "Kenn",
        "postalCode": "54344"
      },
      {
        "name": "Neumagen-Dhron",
        "postalCode": "54347"
      },
      {
        "name": "Ulmen",
        "postalCode": "56766"
      },
      {
        "name": "Koblenz",
        "postalCode": "56068"
      },
      {
        "name": "Niederburg",
        "postalCode": "55432"
      },
      {
        "name": "Waldfischbach-Burgalben",
        "postalCode": "67714"
      },
      {
        "name": "Höhr-Grenzhausen",
        "postalCode": "56203"
      },
      {
        "name": "Rodenbach",
        "postalCode": "67688"
      },
      {
        "name": "Kleinmaischeid",
        "postalCode": "56271"
      },
      {
        "name": "Dahn",
        "postalCode": "66994"
      },
      {
        "name": "Obermoschel, Schiersfeld",
        "postalCode": "67823"
      },
      {
        "name": "Katzwinkel (Sieg)",
        "postalCode": "57581"
      },
      {
        "name": "Battweiler u.a.",
        "postalCode": "66484"
      },
      {
        "name": "Mülheim-Kärlich",
        "postalCode": "56218"
      },
      {
        "name": "Oberlahr",
        "postalCode": "57641"
      },
      {
        "name": "Pirmasens",
        "postalCode": "66955"
      },
      {
        "name": "Weitefeld",
        "postalCode": "57586"
      },
      {
        "name": "Bad Marienberg (Westerwald)",
        "postalCode": "56470"
      },
      {
        "name": "Schönborn",
        "postalCode": "56370"
      },
      {
        "name": "Albig",
        "postalCode": "55234"
      },
      {
        "name": "Venningen",
        "postalCode": "67482"
      },
      {
        "name": "Ellerstadt",
        "postalCode": "67158"
      },
      {
        "name": "Worms",
        "postalCode": "67551"
      },
      {
        "name": "Bell",
        "postalCode": "56745"
      },
      {
        "name": "Breitscheid, Dattenberg, Hausen, Hümmerich, Kasbach-Ohlenberg, Roßbach u.a.",
        "postalCode": "53547"
      },
      {
        "name": "Kastellaun",
        "postalCode": "56288"
      },
      {
        "name": "Plaidt",
        "postalCode": "56637"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Flammersfeld",
        "postalCode": "57632"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Seesbach",
        "postalCode": "55629"
      },
      {
        "name": "Anhausen",
        "postalCode": "56584"
      },
      {
        "name": "Landstuhl",
        "postalCode": "66849"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Urbach",
        "postalCode": "56317"
      },
      {
        "name": "Bendorf",
        "postalCode": "56170"
      },
      {
        "name": "Argenthal",
        "postalCode": "55496"
      },
      {
        "name": "Heimbach",
        "postalCode": "55779"
      },
      {
        "name": "Treis-Karden",
        "postalCode": "56253"
      },
      {
        "name": "Mastershausen",
        "postalCode": "56869"
      },
      {
        "name": "Kusel",
        "postalCode": "66869"
      },
      {
        "name": "Hütschenhausen",
        "postalCode": "66882"
      },
      {
        "name": "Lasel",
        "postalCode": "54612"
      },
      {
        "name": "Birresborn",
        "postalCode": "54574"
      },
      {
        "name": "Welschbillig, Igel, Aach",
        "postalCode": "54298"
      },
      {
        "name": "Spangdahlem",
        "postalCode": "54529"
      },
      {
        "name": "Gusenburg",
        "postalCode": "54413"
      },
      {
        "name": "Reifferscheid, Kaltenborn, Wershofen u.a.",
        "postalCode": "53520"
      },
      {
        "name": "Ulmen",
        "postalCode": "56766"
      },
      {
        "name": "Wintrich",
        "postalCode": "54487"
      },
      {
        "name": "Katzweiler",
        "postalCode": "67734"
      },
      {
        "name": "Hilgert",
        "postalCode": "56206"
      },
      {
        "name": "Neuhäusel",
        "postalCode": "56335"
      },
      {
        "name": "Rüdesheim",
        "postalCode": "55593"
      },
      {
        "name": "Deidesheim",
        "postalCode": "67146"
      },
      {
        "name": "Kandel",
        "postalCode": "76870"
      },
      {
        "name": "Nieder-Olm",
        "postalCode": "55268"
      },
      {
        "name": "Mettenheim",
        "postalCode": "67582"
      },
      {
        "name": "Leimersheim",
        "postalCode": "76774"
      },
      {
        "name": "Emmerzhausen, Niederdreisbach, Steinebach",
        "postalCode": "57520"
      },
      {
        "name": "Elmstein",
        "postalCode": "67471"
      },
      {
        "name": "Nastätten u.a.",
        "postalCode": "56355"
      },
      {
        "name": "Wattenheim",
        "postalCode": "67319"
      },
      {
        "name": "Eisenberg (Pfalz)",
        "postalCode": "67304"
      },
      {
        "name": "Lambrecht (Pfalz)",
        "postalCode": "67466"
      },
      {
        "name": "Nauroth",
        "postalCode": "57583"
      },
      {
        "name": "Bad Bergzabern u.a.",
        "postalCode": "76887"
      },
      {
        "name": "Aspisheim, Grolsheim",
        "postalCode": "55459"
      },
      {
        "name": "Edesheim",
        "postalCode": "67483"
      },
      {
        "name": "Mertloch, Welling u.a.",
        "postalCode": "56753"
      },
      {
        "name": "Windhagen",
        "postalCode": "53578"
      },
      {
        "name": "Battweiler u.a.",
        "postalCode": "66484"
      },
      {
        "name": "Herschweiler-Pettersheim",
        "postalCode": "66909"
      },
      {
        "name": "Monzelfeld, Hochscheid u.a.",
        "postalCode": "54472"
      },
      {
        "name": "Kottenheim",
        "postalCode": "56736"
      },
      {
        "name": "Vinningen, Trulben, Ruppertsweiler u.a.",
        "postalCode": "66957"
      },
      {
        "name": "Kordel",
        "postalCode": "54306"
      },
      {
        "name": "Zemmer",
        "postalCode": "54313"
      },
      {
        "name": "Bettenfeld, Niederöfflingen u.a.",
        "postalCode": "54533"
      },
      {
        "name": "Mertesdorf",
        "postalCode": "54318"
      },
      {
        "name": "Deuselbach, Hermeskeil, Rorodt",
        "postalCode": "54411"
      },
      {
        "name": "Steimel",
        "postalCode": "57614"
      },
      {
        "name": "Oberdreis",
        "postalCode": "57639"
      },
      {
        "name": "Medard, Rathskirchen u.a.",
        "postalCode": "67744"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Sankt Goarshausen u.a.",
        "postalCode": "56346"
      },
      {
        "name": "Winterborn, Waldgrehweiler, Niedermoschel, u.a.",
        "postalCode": "67822"
      },
      {
        "name": "Tiefenthal",
        "postalCode": "67311"
      },
      {
        "name": "Weisenheim am Sand",
        "postalCode": "67256"
      },
      {
        "name": "Gönnheim",
        "postalCode": "67161"
      },
      {
        "name": "Harxheim",
        "postalCode": "55296"
      },
      {
        "name": "Ludwigshafen am Rhein",
        "postalCode": "67071"
      },
      {
        "name": "Mutterstadt",
        "postalCode": "67112"
      },
      {
        "name": "Hamm",
        "postalCode": "67580"
      },
      {
        "name": "Ayl, Trassem u.a.",
        "postalCode": "54441"
      },
      {
        "name": "Büdesheim",
        "postalCode": "54610"
      },
      {
        "name": "Leiwen u.a.",
        "postalCode": "54340"
      },
      {
        "name": "Barweiler, Bauler, Hoffeld, Pomster, Wiesemscheid, Wirft",
        "postalCode": "53534"
      },
      {
        "name": "Bodenbach, Kelberg, Kirsbach u.a.",
        "postalCode": "53539"
      },
      {
        "name": "Malborn",
        "postalCode": "54426"
      },
      {
        "name": "Winnweiler",
        "postalCode": "67722"
      },
      {
        "name": "Alpenrod",
        "postalCode": "57642"
      },
      {
        "name": "Schönborn",
        "postalCode": "56370"
      },
      {
        "name": "Nisterau u.a.",
        "postalCode": "56472"
      },
      {
        "name": "Frankenstein, Neidenfels, Frankeneck",
        "postalCode": "67468"
      },
      {
        "name": "Edenkoben",
        "postalCode": "67480"
      },
      {
        "name": "Mommenheim",
        "postalCode": "55278"
      },
      {
        "name": "Ober-Olm",
        "postalCode": "55270"
      },
      {
        "name": "Zeiskam",
        "postalCode": "67378"
      },
      {
        "name": "Böhl-Iggelheim",
        "postalCode": "67459"
      },
      {
        "name": "Düngenheim",
        "postalCode": "56761"
      },
      {
        "name": "Mayen",
        "postalCode": "56727"
      },
      {
        "name": "Niederzissen",
        "postalCode": "56651"
      },
      {
        "name": "Idar-Oberstein",
        "postalCode": "55743"
      },
      {
        "name": "Lauterecken u.a.",
        "postalCode": "67742"
      },
      {
        "name": "Odernheim am Glan",
        "postalCode": "55571"
      },
      {
        "name": "Norheim u.a.",
        "postalCode": "55585"
      },
      {
        "name": "Dernbach (Westerwald)",
        "postalCode": "56428"
      },
      {
        "name": "Müden",
        "postalCode": "56254"
      },
      {
        "name": "Brücken (Pfalz)",
        "postalCode": "66904"
      },
      {
        "name": "Herschweiler-Pettersheim",
        "postalCode": "66909"
      },
      {
        "name": "Langweiler",
        "postalCode": "67746"
      },
      {
        "name": "Steinwenden u.a.",
        "postalCode": "66879"
      },
      {
        "name": "Wildenbungert, Gondershausen, Nörtershausen u.a.",
        "postalCode": "56283"
      },
      {
        "name": "Offenbach-Hundheim",
        "postalCode": "67749"
      },
      {
        "name": "Birnbach",
        "postalCode": "57612"
      },
      {
        "name": "Ralingen",
        "postalCode": "54310"
      },
      {
        "name": "Gerolstein",
        "postalCode": "54568"
      },
      {
        "name": "Speicher",
        "postalCode": "54662"
      },
      {
        "name": "Manderscheid",
        "postalCode": "54531"
      },
      {
        "name": "Mehring",
        "postalCode": "54346"
      },
      {
        "name": "Retterath",
        "postalCode": "56769"
      },
      {
        "name": "Bullay, Alf, Zell",
        "postalCode": "56859"
      },
      {
        "name": "Dickenschied u.a.",
        "postalCode": "55483"
      },
      {
        "name": "Stadecken-Elsheim",
        "postalCode": "55271"
      },
      {
        "name": "Kindenheim",
        "postalCode": "67271"
      },
      {
        "name": "Jockgrim",
        "postalCode": "76751"
      },
      {
        "name": "Rothselberg u.a.",
        "postalCode": "67753"
      },
      {
        "name": "Grumbach",
        "postalCode": "67745"
      },
      {
        "name": "Rodalben",
        "postalCode": "66976"
      },
      {
        "name": "Kaiserslautern",
        "postalCode": "67661"
      },
      {
        "name": "Callbach",
        "postalCode": "67829"
      },
      {
        "name": "Friesenhagen",
        "postalCode": "51598"
      },
      {
        "name": "Nastätten u.a.",
        "postalCode": "56355"
      },
      {
        "name": "Nentershausen, Hübingen, Niederelbert u.a.",
        "postalCode": "56412"
      },
      {
        "name": "Singhofen",
        "postalCode": "56379"
      },
      {
        "name": "Steinbach, Weitersweiler, Bennhausen, Mörsfeld, Würzweiler, Ruppertsecken u.a.",
        "postalCode": "67808"
      },
      {
        "name": "Nister",
        "postalCode": "57645"
      },
      {
        "name": "Scheuerfeld",
        "postalCode": "57584"
      },
      {
        "name": "Sembach",
        "postalCode": "67681"
      },
      {
        "name": "Malberg, Norken, Höchstenbach u.a.",
        "postalCode": "57629"
      },
      {
        "name": "Wallertheim",
        "postalCode": "55578"
      },
      {
        "name": "Armsheim",
        "postalCode": "55288"
      },
      {
        "name": "Weisenheim am Sand",
        "postalCode": "67256"
      },
      {
        "name": "Brohl-Lützing",
        "postalCode": "56656"
      },
      {
        "name": "Baumholder",
        "postalCode": "55774"
      },
      {
        "name": "Bergen",
        "postalCode": "55608"
      },
      {
        "name": "Bundenbach",
        "postalCode": "55626"
      },
      {
        "name": "Bechhofen",
        "postalCode": "66894"
      },
      {
        "name": "Wallhalben u.a.",
        "postalCode": "66917"
      },
      {
        "name": "Maßweiler",
        "postalCode": "66506"
      },
      {
        "name": "Koblenz",
        "postalCode": "56070"
      },
      {
        "name": "Rhens",
        "postalCode": "56321"
      },
      {
        "name": "Kleinmaischeid",
        "postalCode": "56271"
      }
    ],
    "08":
    [
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79110"
      },
      {
        "name": "Bad Säckingen",
        "postalCode": "79713"
      },
      {
        "name": "Feldberg",
        "postalCode": "79868"
      },
      {
        "name": "Simonswald",
        "postalCode": "79263"
      },
      {
        "name": "Breitnau",
        "postalCode": "79874"
      },
      {
        "name": "Lörrach",
        "postalCode": "79540"
      },
      {
        "name": "Achberg",
        "postalCode": "88147"
      },
      {
        "name": "Deggingen",
        "postalCode": "73326"
      },
      {
        "name": "Bad Mergentheim",
        "postalCode": "97980"
      },
      {
        "name": "Gingen an der Fils",
        "postalCode": "73333"
      },
      {
        "name": "Hochdorf",
        "postalCode": "88454"
      },
      {
        "name": "Staig",
        "postalCode": "89195"
      },
      {
        "name": "Essingen",
        "postalCode": "73457"
      },
      {
        "name": "Dietenheim",
        "postalCode": "89165"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76227"
      },
      {
        "name": "Graben-Neudorf",
        "postalCode": "76676"
      },
      {
        "name": "Tuttlingen",
        "postalCode": "78532"
      },
      {
        "name": "Pforzheim",
        "postalCode": "75175"
      },
      {
        "name": "Zimmern unter der Burg",
        "postalCode": "72369"
      },
      {
        "name": "Tiefenbronn",
        "postalCode": "75233"
      },
      {
        "name": "Mönsheim",
        "postalCode": "71297"
      },
      {
        "name": "Eschelbronn",
        "postalCode": "74927"
      },
      {
        "name": "Öhningen",
        "postalCode": "78337"
      },
      {
        "name": "Nusplingen",
        "postalCode": "72362"
      },
      {
        "name": "Orsingen-Nenzingen",
        "postalCode": "78359"
      },
      {
        "name": "Aglasterhausen",
        "postalCode": "74858"
      },
      {
        "name": "Albstadt",
        "postalCode": "72458"
      },
      {
        "name": "Neckargerach",
        "postalCode": "69437"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70565"
      },
      {
        "name": "Heilbronn",
        "postalCode": "74081"
      },
      {
        "name": "Ludwigsburg",
        "postalCode": "71638"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72766"
      },
      {
        "name": "Altdorf",
        "postalCode": "72655"
      },
      {
        "name": "Kernen im Remstal",
        "postalCode": "71394"
      },
      {
        "name": "Aspach",
        "postalCode": "71546"
      },
      {
        "name": "Wertheim",
        "postalCode": "97877"
      },
      {
        "name": "Dettingen unter Teck",
        "postalCode": "73265"
      },
      {
        "name": "Öhringen",
        "postalCode": "74613"
      },
      {
        "name": "Lauterbach",
        "postalCode": "78730"
      },
      {
        "name": "Fronreute",
        "postalCode": "88273"
      },
      {
        "name": "Weißbach",
        "postalCode": "74679"
      },
      {
        "name": "Lorch",
        "postalCode": "73547"
      },
      {
        "name": "Heiningen",
        "postalCode": "73092"
      },
      {
        "name": "Schlier",
        "postalCode": "88281"
      },
      {
        "name": "Eschenbach",
        "postalCode": "73107"
      },
      {
        "name": "Geislingen an der Steige",
        "postalCode": "73312"
      },
      {
        "name": "Bühlertann",
        "postalCode": "74424"
      },
      {
        "name": "Weidenstetten",
        "postalCode": "89197"
      },
      {
        "name": "Rosenberg",
        "postalCode": "73494"
      },
      {
        "name": "Dettingen an der Iller",
        "postalCode": "88451"
      },
      {
        "name": "Herbrechtingen",
        "postalCode": "89542"
      },
      {
        "name": "Rainau",
        "postalCode": "73492"
      },
      {
        "name": "Dornhan",
        "postalCode": "72175"
      },
      {
        "name": "Dauchingen",
        "postalCode": "78083"
      },
      {
        "name": "Schopfloch",
        "postalCode": "72296"
      },
      {
        "name": "Reilingen",
        "postalCode": "68799"
      },
      {
        "name": "Rottweil",
        "postalCode": "78628"
      },
      {
        "name": "Haiterbach",
        "postalCode": "72221"
      },
      {
        "name": "Eppelheim",
        "postalCode": "69214"
      },
      {
        "name": "Durchhausen",
        "postalCode": "78591"
      },
      {
        "name": "Rohrdorf",
        "postalCode": "72229"
      },
      {
        "name": "Balgheim",
        "postalCode": "78582"
      },
      {
        "name": "Dürbheim",
        "postalCode": "78589"
      },
      {
        "name": "Singen",
        "postalCode": "78224"
      },
      {
        "name": "Waibstadt",
        "postalCode": "74915"
      },
      {
        "name": "Kolbingen",
        "postalCode": "78600"
      },
      {
        "name": "Moos",
        "postalCode": "78345"
      },
      {
        "name": "Bad Rappenau",
        "postalCode": "74906"
      },
      {
        "name": "Bodman-Ludwigshafen",
        "postalCode": "78351"
      },
      {
        "name": "Sersheim",
        "postalCode": "74372"
      },
      {
        "name": "Zwingenberg",
        "postalCode": "69439"
      },
      {
        "name": "Freudental",
        "postalCode": "74392"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70569"
      },
      {
        "name": "Erligheim",
        "postalCode": "74391"
      },
      {
        "name": "Sipplingen",
        "postalCode": "78354"
      },
      {
        "name": "Ludwigsburg",
        "postalCode": "71634"
      },
      {
        "name": "Aichtal",
        "postalCode": "72631"
      },
      {
        "name": "Ingersheim",
        "postalCode": "74379"
      },
      {
        "name": "Freiberg am Neckar",
        "postalCode": "71691"
      },
      {
        "name": "Ludwigsburg",
        "postalCode": "71642"
      },
      {
        "name": "Bempflingen",
        "postalCode": "72658"
      },
      {
        "name": "Waiblingen",
        "postalCode": "71334"
      },
      {
        "name": "Ostrach",
        "postalCode": "88356"
      },
      {
        "name": "Aichwald",
        "postalCode": "73773"
      },
      {
        "name": "Külsheim",
        "postalCode": "97900"
      },
      {
        "name": "Schonach im Schwarzwald",
        "postalCode": "78136"
      },
      {
        "name": "Durmersheim",
        "postalCode": "76448"
      },
      {
        "name": "Bräunlingen",
        "postalCode": "78199"
      },
      {
        "name": "Freudenstadt",
        "postalCode": "72250"
      },
      {
        "name": "Donaueschingen",
        "postalCode": "78166"
      },
      {
        "name": "Pfedelbach",
        "postalCode": "74629"
      },
      {
        "name": "Uhingen",
        "postalCode": "73066"
      },
      {
        "name": "Berg",
        "postalCode": "88276"
      },
      {
        "name": "Ravensburg",
        "postalCode": "88214"
      },
      {
        "name": "Westerheim",
        "postalCode": "72589"
      },
      {
        "name": "Untermarchtal",
        "postalCode": "89617"
      },
      {
        "name": "Dürnau",
        "postalCode": "73105"
      },
      {
        "name": "Malterdingen",
        "postalCode": "79364"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79106"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79117"
      },
      {
        "name": "Offenburg",
        "postalCode": "77656"
      },
      {
        "name": "Todtnau",
        "postalCode": "79674"
      },
      {
        "name": "Offenburg",
        "postalCode": "77654"
      },
      {
        "name": "Ohlsbach",
        "postalCode": "77797"
      },
      {
        "name": "Murg",
        "postalCode": "79730"
      },
      {
        "name": "Schluchsee",
        "postalCode": "79859"
      },
      {
        "name": "Lörrach",
        "postalCode": "79541"
      },
      {
        "name": "Eichstetten",
        "postalCode": "79356"
      },
      {
        "name": "Pfaffenweiler",
        "postalCode": "79292"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79114"
      },
      {
        "name": "Dornstadt",
        "postalCode": "89160"
      },
      {
        "name": "Lauterstein",
        "postalCode": "73111"
      },
      {
        "name": "Böbingen an der Rems",
        "postalCode": "73560"
      },
      {
        "name": "Schechingen",
        "postalCode": "73579"
      },
      {
        "name": "Kirchberg an der Jagst",
        "postalCode": "74592"
      },
      {
        "name": "Schwendi",
        "postalCode": "88477"
      },
      {
        "name": "Aichstetten",
        "postalCode": "88317"
      },
      {
        "name": "Berkheim",
        "postalCode": "88450"
      },
      {
        "name": "Aalen",
        "postalCode": "73431"
      },
      {
        "name": "Herbrechtingen",
        "postalCode": "89542"
      },
      {
        "name": "Kreßberg",
        "postalCode": "74594"
      },
      {
        "name": "Mannheim",
        "postalCode": "68219"
      },
      {
        "name": "Birkenfeld",
        "postalCode": "75217"
      },
      {
        "name": "Oberreichenbach",
        "postalCode": "75394"
      },
      {
        "name": "Ubstadt-Weiher",
        "postalCode": "76698"
      },
      {
        "name": "Pforzheim",
        "postalCode": "75177"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69117"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69118"
      },
      {
        "name": "Jettingen",
        "postalCode": "71131"
      },
      {
        "name": "Starzach",
        "postalCode": "72181"
      },
      {
        "name": "Balingen",
        "postalCode": "72336"
      },
      {
        "name": "Mühlacker",
        "postalCode": "75417"
      },
      {
        "name": "Rangendingen",
        "postalCode": "72414"
      },
      {
        "name": "Nufringen",
        "postalCode": "71154"
      },
      {
        "name": "Ehningen",
        "postalCode": "71139"
      },
      {
        "name": "Radolfzell am Bodensee",
        "postalCode": "78315"
      },
      {
        "name": "Eberdingen",
        "postalCode": "71735"
      },
      {
        "name": "Brackenheim",
        "postalCode": "74336"
      },
      {
        "name": "Markgröningen",
        "postalCode": "71706"
      },
      {
        "name": "Bönnigheim",
        "postalCode": "74357"
      },
      {
        "name": "Korntal-Münchingen",
        "postalCode": "70825"
      },
      {
        "name": "Konstanz",
        "postalCode": "78467"
      },
      {
        "name": "Esslingen am Neckar",
        "postalCode": "73730"
      },
      {
        "name": "Riedlingen",
        "postalCode": "88499"
      },
      {
        "name": "Burgstetten",
        "postalCode": "71576"
      },
      {
        "name": "Herbertingen",
        "postalCode": "88518"
      },
      {
        "name": "Kippenheim",
        "postalCode": "77971"
      },
      {
        "name": "Forbach",
        "postalCode": "76596"
      },
      {
        "name": "Seewald",
        "postalCode": "72297"
      },
      {
        "name": "Hardt",
        "postalCode": "78739"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79115"
      },
      {
        "name": "Rheinau",
        "postalCode": "77866"
      },
      {
        "name": "Renchen",
        "postalCode": "77871"
      },
      {
        "name": "Friedrichshafen",
        "postalCode": "88045"
      },
      {
        "name": "Ebersbach-Musbach",
        "postalCode": "88371"
      },
      {
        "name": "Krautheim",
        "postalCode": "74238"
      },
      {
        "name": "Baienfurt",
        "postalCode": "88255"
      },
      {
        "name": "Auggen",
        "postalCode": "79424"
      },
      {
        "name": "Unterstadion",
        "postalCode": "89619"
      },
      {
        "name": "Mittelbiberach",
        "postalCode": "88441"
      },
      {
        "name": "Stadt Schwäbisch Gmünd",
        "postalCode": "73525"
      },
      {
        "name": "Igersheim",
        "postalCode": "97999"
      },
      {
        "name": "Lonsee",
        "postalCode": "89173"
      },
      {
        "name": "Mietingen",
        "postalCode": "88487"
      },
      {
        "name": "Nattheim",
        "postalCode": "89564"
      },
      {
        "name": "Tannhausen",
        "postalCode": "73497"
      },
      {
        "name": "Bad Dürrheim",
        "postalCode": "78073"
      },
      {
        "name": "Malsch",
        "postalCode": "69254"
      },
      {
        "name": "Calw",
        "postalCode": "75365"
      },
      {
        "name": "Rottenburg am Neckar",
        "postalCode": "72108"
      },
      {
        "name": "Weilen unter den Rinnen",
        "postalCode": "72367"
      },
      {
        "name": "Dormettingen",
        "postalCode": "72358"
      },
      {
        "name": "Simmozheim",
        "postalCode": "75397"
      },
      {
        "name": "Aach",
        "postalCode": "78267"
      },
      {
        "name": "Eigeltingen",
        "postalCode": "78253"
      },
      {
        "name": "Grosselfingen",
        "postalCode": "72415"
      },
      {
        "name": "Bärenthal",
        "postalCode": "78580"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70499"
      },
      {
        "name": "Besigheim",
        "postalCode": "74354"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70435"
      },
      {
        "name": "Bingen",
        "postalCode": "72511"
      },
      {
        "name": "Marbach am Neckar",
        "postalCode": "71672"
      },
      {
        "name": "Langenenslingen",
        "postalCode": "88515"
      },
      {
        "name": "Oberstenfeld",
        "postalCode": "71720"
      },
      {
        "name": "St. Johann",
        "postalCode": "72813"
      },
      {
        "name": "Affalterbach",
        "postalCode": "71563"
      },
      {
        "name": "Berglen",
        "postalCode": "73663"
      },
      {
        "name": "Wolpertswende",
        "postalCode": "88284"
      },
      {
        "name": "Ravensburg",
        "postalCode": "88212"
      },
      {
        "name": "Lorch",
        "postalCode": "73547"
      },
      {
        "name": "Buggingen",
        "postalCode": "79426"
      },
      {
        "name": "Rust",
        "postalCode": "77977"
      },
      {
        "name": "Kappel-Grafenhausen",
        "postalCode": "77966"
      },
      {
        "name": "Zell im Wiesental",
        "postalCode": "79669"
      },
      {
        "name": "Freiamt",
        "postalCode": "79348"
      },
      {
        "name": "Furtwangen im Schwarzwald",
        "postalCode": "78120"
      },
      {
        "name": "Bietigheim",
        "postalCode": "76467"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76149"
      },
      {
        "name": "Wutach",
        "postalCode": "79879"
      },
      {
        "name": "Hartheim",
        "postalCode": "79258"
      },
      {
        "name": "Bahlingen am Kaiserstuhl",
        "postalCode": "79353"
      },
      {
        "name": "Bad Bellingen",
        "postalCode": "79415"
      },
      {
        "name": "Villingen-Schwenningen",
        "postalCode": "78050"
      },
      {
        "name": "Fluorn-Winzeln",
        "postalCode": "78737"
      },
      {
        "name": "Waghäusel",
        "postalCode": "68753"
      },
      {
        "name": "Ilvesheim",
        "postalCode": "68549"
      },
      {
        "name": "Forst",
        "postalCode": "76694"
      },
      {
        "name": "Bad Schönborn",
        "postalCode": "76669"
      },
      {
        "name": "Pforzheim",
        "postalCode": "75172"
      },
      {
        "name": "Gaiberg",
        "postalCode": "69251"
      },
      {
        "name": "Deilingen",
        "postalCode": "78586"
      },
      {
        "name": "Lobbach",
        "postalCode": "74931"
      },
      {
        "name": "Altdorf",
        "postalCode": "71155"
      },
      {
        "name": "Überlingen",
        "postalCode": "88662"
      },
      {
        "name": "Gemmrigheim",
        "postalCode": "74376"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70176"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72762"
      },
      {
        "name": "Stuttgart/Leinfelden-Echterdingen",
        "postalCode": "70629"
      },
      {
        "name": "Heilbronn",
        "postalCode": "74076"
      },
      {
        "name": "Frickingen",
        "postalCode": "88699"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72766"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70374"
      },
      {
        "name": "Remseck am Neckar",
        "postalCode": "71686"
      },
      {
        "name": "Abstatt",
        "postalCode": "74232"
      },
      {
        "name": "Beilstein",
        "postalCode": "71717"
      },
      {
        "name": "Kohlberg",
        "postalCode": "72664"
      },
      {
        "name": "Schwaikheim",
        "postalCode": "71409"
      },
      {
        "name": "Bad Saulgau, Allmannsweiler",
        "postalCode": "88348"
      },
      {
        "name": "Königseggwald",
        "postalCode": "88376"
      },
      {
        "name": "Hoßkirch",
        "postalCode": "88374"
      },
      {
        "name": "Rosengarten",
        "postalCode": "74538"
      },
      {
        "name": "Berghülen",
        "postalCode": "89180"
      },
      {
        "name": "Bühlerzell",
        "postalCode": "74426"
      },
      {
        "name": "Jagstzell",
        "postalCode": "73489"
      },
      {
        "name": "Heidenheim an der Brenz",
        "postalCode": "89518"
      },
      {
        "name": "Kirchheim am Ries",
        "postalCode": "73467"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79115"
      },
      {
        "name": "Wehr",
        "postalCode": "79664"
      },
      {
        "name": "Offenburg",
        "postalCode": "77652"
      },
      {
        "name": "Herrischried",
        "postalCode": "79737"
      },
      {
        "name": "Berghaupten",
        "postalCode": "77791"
      },
      {
        "name": "Elzach, Biederbach",
        "postalCode": "79215"
      },
      {
        "name": "Winden im Elztal",
        "postalCode": "79297"
      },
      {
        "name": "Bad Herrenalb",
        "postalCode": "76332"
      },
      {
        "name": "Sulzbach an der Murr",
        "postalCode": "71560"
      },
      {
        "name": "Lichtenwald",
        "postalCode": "73669"
      },
      {
        "name": "Göppingen",
        "postalCode": "73035"
      },
      {
        "name": "Horgenzell",
        "postalCode": "88263"
      },
      {
        "name": "Altshausen",
        "postalCode": "88361"
      },
      {
        "name": "Althütte",
        "postalCode": "71566"
      },
      {
        "name": "Seebach",
        "postalCode": "77889"
      },
      {
        "name": "Rheinstetten",
        "postalCode": "76287"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76199"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76137"
      },
      {
        "name": "Wyhl",
        "postalCode": "79369"
      },
      {
        "name": "Schallstadt",
        "postalCode": "79227"
      },
      {
        "name": "Steinen",
        "postalCode": "79585"
      },
      {
        "name": "Riegel Kaiserstuhl",
        "postalCode": "79359"
      },
      {
        "name": "Neukirch",
        "postalCode": "88099"
      },
      {
        "name": "Warthausen",
        "postalCode": "88447"
      },
      {
        "name": "Mulfingen",
        "postalCode": "74673"
      },
      {
        "name": "Ochsenhausen",
        "postalCode": "88416"
      },
      {
        "name": "Abtsgmünd",
        "postalCode": "73453"
      },
      {
        "name": "Heubach",
        "postalCode": "73540"
      },
      {
        "name": "Rot am See",
        "postalCode": "74585"
      },
      {
        "name": "Laupheim",
        "postalCode": "88471"
      },
      {
        "name": "Niederstotzingen",
        "postalCode": "89168"
      },
      {
        "name": "Ketsch",
        "postalCode": "68775"
      },
      {
        "name": "Oberndorf am Neckar",
        "postalCode": "78727"
      },
      {
        "name": "Epfendorf",
        "postalCode": "78736"
      },
      {
        "name": "Vöhringen",
        "postalCode": "72189"
      },
      {
        "name": "Wildberg",
        "postalCode": "72218"
      },
      {
        "name": "Wellendingen",
        "postalCode": "78669"
      },
      {
        "name": "Simmozheim",
        "postalCode": "75397"
      },
      {
        "name": "Dotternhausen",
        "postalCode": "72359"
      },
      {
        "name": "Ötisheim",
        "postalCode": "75443"
      },
      {
        "name": "Herrenberg",
        "postalCode": "71083"
      },
      {
        "name": "Bisingen",
        "postalCode": "72406"
      },
      {
        "name": "Hechingen",
        "postalCode": "72379"
      },
      {
        "name": "Dußlingen",
        "postalCode": "72144"
      },
      {
        "name": "Siegelsbach",
        "postalCode": "74936"
      },
      {
        "name": "Dettenhausen",
        "postalCode": "72135"
      },
      {
        "name": "Neckarzimmern",
        "postalCode": "74865"
      },
      {
        "name": "Ludwigsburg",
        "postalCode": "71636"
      },
      {
        "name": "Talheim",
        "postalCode": "74388"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70327"
      },
      {
        "name": "Untergruppenbach",
        "postalCode": "74199"
      },
      {
        "name": "Hohentengen",
        "postalCode": "88367"
      },
      {
        "name": "Oberboihingen",
        "postalCode": "72644"
      },
      {
        "name": "Zwiefalten",
        "postalCode": "88529"
      },
      {
        "name": "Köngen",
        "postalCode": "73257"
      },
      {
        "name": "Grabenstetten",
        "postalCode": "72582"
      },
      {
        "name": "Merzhausen",
        "postalCode": "79249"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79098"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79108"
      },
      {
        "name": "Gutach im Breisgau",
        "postalCode": "79261"
      },
      {
        "name": "Bernau im Schwarzwald",
        "postalCode": "79872"
      },
      {
        "name": "Mühlenbach",
        "postalCode": "77796"
      },
      {
        "name": "Eschbronn",
        "postalCode": "78664"
      },
      {
        "name": "Mannheim",
        "postalCode": "68239"
      },
      {
        "name": "Deißlingen",
        "postalCode": "78652"
      },
      {
        "name": "Trossingen",
        "postalCode": "78647"
      },
      {
        "name": "Gondelsheim",
        "postalCode": "75053"
      },
      {
        "name": "Östringen",
        "postalCode": "76684"
      },
      {
        "name": "Gosheim",
        "postalCode": "78559"
      },
      {
        "name": "Sternenfels",
        "postalCode": "75447"
      },
      {
        "name": "Gärtringen",
        "postalCode": "71116"
      },
      {
        "name": "Volkertshausen",
        "postalCode": "78269"
      },
      {
        "name": "Renquishausen",
        "postalCode": "78603"
      },
      {
        "name": "Leibertingen, Buchheim",
        "postalCode": "88637"
      },
      {
        "name": "Stockach",
        "postalCode": "78333"
      },
      {
        "name": "Tübingen",
        "postalCode": "72070"
      },
      {
        "name": "Tübingen",
        "postalCode": "72072"
      },
      {
        "name": "Burladingen",
        "postalCode": "72393"
      },
      {
        "name": "Tübingen",
        "postalCode": "72074"
      },
      {
        "name": "Haßmersheim",
        "postalCode": "74855"
      },
      {
        "name": "Limbach",
        "postalCode": "74838"
      },
      {
        "name": "Walddorfhäslach",
        "postalCode": "72141"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70199"
      },
      {
        "name": "Flein",
        "postalCode": "74223"
      },
      {
        "name": "Überlingen",
        "postalCode": "88662"
      },
      {
        "name": "Benningen am Neckar",
        "postalCode": "71726"
      },
      {
        "name": "Scheer",
        "postalCode": "72516"
      },
      {
        "name": "Möckmühl",
        "postalCode": "74219"
      },
      {
        "name": "Waiblingen",
        "postalCode": "71336"
      },
      {
        "name": "Ellhofen",
        "postalCode": "74248"
      },
      {
        "name": "Illmensee",
        "postalCode": "88636"
      },
      {
        "name": "Hardthausen am Kocher",
        "postalCode": "74239"
      },
      {
        "name": "Hayingen",
        "postalCode": "72534"
      },
      {
        "name": "Ebersbach an der Fils",
        "postalCode": "73061"
      },
      {
        "name": "Bad Schussenried",
        "postalCode": "88427"
      },
      {
        "name": "Mühlhausen im Täle",
        "postalCode": "73347"
      },
      {
        "name": "Alfdorf, Schillinghof",
        "postalCode": "73553"
      },
      {
        "name": "Gammelshausen",
        "postalCode": "73108"
      },
      {
        "name": "Schwörstadt",
        "postalCode": "79739"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79117"
      },
      {
        "name": "Buchenbach",
        "postalCode": "79256"
      },
      {
        "name": "Lautenbach",
        "postalCode": "77794"
      },
      {
        "name": "Grafenhausen",
        "postalCode": "79865"
      },
      {
        "name": "Bollschweil",
        "postalCode": "79283"
      },
      {
        "name": "Fichtenberg",
        "postalCode": "74427"
      },
      {
        "name": "Wangen im Allgäu",
        "postalCode": "88239"
      },
      {
        "name": "Altheim",
        "postalCode": "89605"
      },
      {
        "name": "Allmendingen",
        "postalCode": "89604"
      },
      {
        "name": "Donzdorf",
        "postalCode": "73072"
      },
      {
        "name": "Langenburg",
        "postalCode": "74595"
      },
      {
        "name": "Burgrieden",
        "postalCode": "88483"
      },
      {
        "name": "Ulm",
        "postalCode": "89075"
      },
      {
        "name": "Wallhausen",
        "postalCode": "74599"
      },
      {
        "name": "Riesbürg",
        "postalCode": "73469"
      },
      {
        "name": "Schliengen",
        "postalCode": "79418"
      },
      {
        "name": "Titisee-Neustadt",
        "postalCode": "79822"
      },
      {
        "name": "Rastatt",
        "postalCode": "76437"
      },
      {
        "name": "Baden-Baden",
        "postalCode": "76532"
      },
      {
        "name": "Küssaberg",
        "postalCode": "79790"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76189"
      },
      {
        "name": "Malsburg-Marzell",
        "postalCode": "79429"
      },
      {
        "name": "Nordrach",
        "postalCode": "77787"
      },
      {
        "name": "Eislingen/Fils",
        "postalCode": "73054"
      },
      {
        "name": "Ottenbach",
        "postalCode": "73113"
      },
      {
        "name": "Laupheim",
        "postalCode": "88471"
      },
      {
        "name": "Argenbühl",
        "postalCode": "88260"
      },
      {
        "name": "Bartholomä",
        "postalCode": "73566"
      },
      {
        "name": "Aalen",
        "postalCode": "73434"
      },
      {
        "name": "Aalen",
        "postalCode": "73433"
      },
      {
        "name": "Heidenheim an der Brenz",
        "postalCode": "89520"
      },
      {
        "name": "Niederstotzingen",
        "postalCode": "89168"
      },
      {
        "name": "Sontheim an der Brenz",
        "postalCode": "89567"
      },
      {
        "name": "Bösingen",
        "postalCode": "78662"
      },
      {
        "name": "Remchingen",
        "postalCode": "75196"
      },
      {
        "name": "Walzbachtal",
        "postalCode": "75045"
      },
      {
        "name": "Weinheim",
        "postalCode": "69469"
      },
      {
        "name": "Sindelfingen",
        "postalCode": "71069"
      },
      {
        "name": "Magstadt",
        "postalCode": "71106"
      },
      {
        "name": "Oberriexingen",
        "postalCode": "71739"
      },
      {
        "name": "Massenbachhausen",
        "postalCode": "74252"
      },
      {
        "name": "Kornwestheim",
        "postalCode": "70806"
      },
      {
        "name": "Ludwigsburg",
        "postalCode": "71640"
      },
      {
        "name": "Walldürn",
        "postalCode": "74731"
      },
      {
        "name": "Waiblingen",
        "postalCode": "71332"
      },
      {
        "name": "Hardheim",
        "postalCode": "74736"
      },
      {
        "name": "Kirchheim unter Teck",
        "postalCode": "73230"
      },
      {
        "name": "Reichenbach an der Fils",
        "postalCode": "73262"
      },
      {
        "name": "Aichelberg",
        "postalCode": "73101"
      },
      {
        "name": "Bad Boll",
        "postalCode": "73087"
      },
      {
        "name": "Gruibingen",
        "postalCode": "73344"
      },
      {
        "name": "Assamstadt",
        "postalCode": "97959"
      },
      {
        "name": "Jagsthausen",
        "postalCode": "74249"
      },
      {
        "name": "Oberteuringen",
        "postalCode": "88094"
      },
      {
        "name": "Lenningen",
        "postalCode": "73252"
      },
      {
        "name": "Leutenbach",
        "postalCode": "71397"
      },
      {
        "name": "Königheim",
        "postalCode": "97953"
      },
      {
        "name": "Ehingen (Donau), Lauterach",
        "postalCode": "89584"
      },
      {
        "name": "Eriskirch",
        "postalCode": "88097"
      },
      {
        "name": "Werbach",
        "postalCode": "97956"
      },
      {
        "name": "Zell unter Aichelberg",
        "postalCode": "73119"
      },
      {
        "name": "Aulendorf",
        "postalCode": "88326"
      },
      {
        "name": "Wangen",
        "postalCode": "73117"
      },
      {
        "name": "Eschbach",
        "postalCode": "79427"
      },
      {
        "name": "Ihringen",
        "postalCode": "79241"
      },
      {
        "name": "Herbolzheim",
        "postalCode": "79336"
      },
      {
        "name": "Baden-Baden",
        "postalCode": "76534"
      },
      {
        "name": "Schuttertal",
        "postalCode": "77978"
      },
      {
        "name": "Neuenburg am Rhein",
        "postalCode": "79395"
      },
      {
        "name": "Villingen-Schwenningen",
        "postalCode": "78052"
      },
      {
        "name": "Bad Teinach-Zavelstein",
        "postalCode": "75385"
      },
      {
        "name": "Bretten",
        "postalCode": "75015"
      },
      {
        "name": "Neulingen",
        "postalCode": "75245"
      },
      {
        "name": "Haigerloch",
        "postalCode": "72401"
      },
      {
        "name": "Neckargemünd",
        "postalCode": "69151"
      },
      {
        "name": "Mötzingen",
        "postalCode": "71159"
      },
      {
        "name": "Friolzheim",
        "postalCode": "71292"
      },
      {
        "name": "Hildrizhausen",
        "postalCode": "71157"
      },
      {
        "name": "Albstadt",
        "postalCode": "72461"
      },
      {
        "name": "Stetten am kalten Markt",
        "postalCode": "72510"
      },
      {
        "name": "Sigmaringen",
        "postalCode": "72488"
      },
      {
        "name": "Owingen",
        "postalCode": "88696"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72770"
      },
      {
        "name": "Asperg",
        "postalCode": "71679"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70437"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70186"
      },
      {
        "name": "Heilbronn",
        "postalCode": "74072"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70378"
      },
      {
        "name": "Esslingen am Neckar",
        "postalCode": "73734"
      },
      {
        "name": "Neuffen",
        "postalCode": "72639"
      },
      {
        "name": "Dörzbach",
        "postalCode": "74677"
      },
      {
        "name": "Kißlegg",
        "postalCode": "88353"
      },
      {
        "name": "Westerstetten",
        "postalCode": "89198"
      },
      {
        "name": "Steinheim am Albuch",
        "postalCode": "89555"
      },
      {
        "name": "Dietenheim",
        "postalCode": "89165"
      },
      {
        "name": "Stimpfach",
        "postalCode": "74597"
      },
      {
        "name": "Hermaringen",
        "postalCode": "89568"
      },
      {
        "name": "Müllheim",
        "postalCode": "79379"
      },
      {
        "name": "Heitersheim",
        "postalCode": "79423"
      },
      {
        "name": "Heitersheim",
        "postalCode": "79423"
      },
      {
        "name": "Hügelsheim",
        "postalCode": "76549"
      },
      {
        "name": "Ottenhöfen im Schwarzwald",
        "postalCode": "77883"
      },
      {
        "name": "Bad Rippoldsau-Schapbach",
        "postalCode": "77776"
      },
      {
        "name": "Freudenstadt",
        "postalCode": "72250"
      },
      {
        "name": "Gernsbach",
        "postalCode": "76593"
      },
      {
        "name": "Malsch",
        "postalCode": "76316"
      },
      {
        "name": "Donaueschingen",
        "postalCode": "78166"
      },
      {
        "name": "Oberried",
        "postalCode": "79254"
      },
      {
        "name": "Waldkirch",
        "postalCode": "79183"
      },
      {
        "name": "Görwihl",
        "postalCode": "79733"
      },
      {
        "name": "Stadt Schwäbisch Gmünd",
        "postalCode": "73529"
      },
      {
        "name": "Bodnegg",
        "postalCode": "88285"
      },
      {
        "name": "Salach",
        "postalCode": "73084"
      },
      {
        "name": "Gerabronn",
        "postalCode": "74582"
      },
      {
        "name": "Gerstetten",
        "postalCode": "89547"
      },
      {
        "name": "Crailsheim",
        "postalCode": "74564"
      },
      {
        "name": "Isny im Allgäu",
        "postalCode": "88316"
      },
      {
        "name": "Langenau",
        "postalCode": "89129"
      },
      {
        "name": "Wört",
        "postalCode": "73499"
      },
      {
        "name": "Villingen-Schwenningen",
        "postalCode": "78048"
      },
      {
        "name": "Bad Wildbad",
        "postalCode": "75323"
      },
      {
        "name": "Leimen",
        "postalCode": "69181"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69115"
      },
      {
        "name": "Hilzingen",
        "postalCode": "78247"
      },
      {
        "name": "Renningen",
        "postalCode": "71272"
      },
      {
        "name": "Allensbach",
        "postalCode": "78476"
      },
      {
        "name": "Binau",
        "postalCode": "74862"
      },
      {
        "name": "Bitz",
        "postalCode": "72475"
      },
      {
        "name": "Fahrenbach",
        "postalCode": "74864"
      },
      {
        "name": "Gundelsheim",
        "postalCode": "74831"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70193"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72768"
      },
      {
        "name": "Veringenstadt",
        "postalCode": "72519"
      },
      {
        "name": "Krauchenwies",
        "postalCode": "72505"
      },
      {
        "name": "Sigmaringendorf",
        "postalCode": "72517"
      },
      {
        "name": "Neuhausen auf den Fildern",
        "postalCode": "73765"
      },
      {
        "name": "Mengen",
        "postalCode": "88512"
      },
      {
        "name": "Winnenden",
        "postalCode": "71364"
      },
      {
        "name": "Backnang",
        "postalCode": "71522"
      },
      {
        "name": "Riedhausen",
        "postalCode": "88377"
      },
      {
        "name": "Forchtenberg",
        "postalCode": "74670"
      },
      {
        "name": "Weilheim an der Teck",
        "postalCode": "73235"
      },
      {
        "name": "Neidlingen",
        "postalCode": "73272"
      },
      {
        "name": "Schwäbisch Hall",
        "postalCode": "74523"
      },
      {
        "name": "Kupferzell",
        "postalCode": "74635"
      },
      {
        "name": "Hasel",
        "postalCode": "79686"
      },
      {
        "name": "Biberach",
        "postalCode": "77781"
      },
      {
        "name": "Sinzheim",
        "postalCode": "76547"
      },
      {
        "name": "Bad Waldsee",
        "postalCode": "88339"
      },
      {
        "name": "Ilshofen",
        "postalCode": "74532"
      },
      {
        "name": "Frankenhardt",
        "postalCode": "74586"
      },
      {
        "name": "Rot an der Rot",
        "postalCode": "88430"
      },
      {
        "name": "Stimpfach",
        "postalCode": "74597"
      },
      {
        "name": "Bissingen an der Teck",
        "postalCode": "73266"
      },
      {
        "name": "Friedrichshafen",
        "postalCode": "88046"
      },
      {
        "name": "Großerlach",
        "postalCode": "71577"
      },
      {
        "name": "Meckenbeuren",
        "postalCode": "88074"
      },
      {
        "name": "Börtlingen",
        "postalCode": "73104"
      },
      {
        "name": "Kandern",
        "postalCode": "79400"
      },
      {
        "name": "Bad Krozingen",
        "postalCode": "79189"
      },
      {
        "name": "Hornberg",
        "postalCode": "78132"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76139"
      },
      {
        "name": "Bruchsal",
        "postalCode": "76646"
      },
      {
        "name": "Kämpfelbach",
        "postalCode": "75236"
      },
      {
        "name": "Neubulach",
        "postalCode": "75387"
      },
      {
        "name": "Ebhausen",
        "postalCode": "72224"
      },
      {
        "name": "Bad Liebenzell",
        "postalCode": "75378"
      },
      {
        "name": "Eisingen",
        "postalCode": "75239"
      },
      {
        "name": "Zaisenhausen",
        "postalCode": "75059"
      },
      {
        "name": "Wiesenbach",
        "postalCode": "69257"
      },
      {
        "name": "Königsheim",
        "postalCode": "78598"
      },
      {
        "name": "Illingen",
        "postalCode": "75428"
      },
      {
        "name": "Sachsenheim",
        "postalCode": "74343"
      },
      {
        "name": "Vaihingen an der Enz",
        "postalCode": "71665"
      },
      {
        "name": "Schwaigern",
        "postalCode": "74193"
      },
      {
        "name": "Rottenburg am Neckar",
        "postalCode": "72108"
      },
      {
        "name": "Reichenau",
        "postalCode": "78479"
      },
      {
        "name": "Herdwangen-Schönach",
        "postalCode": "88634"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70192"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70174"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70599"
      },
      {
        "name": "Billigheim",
        "postalCode": "74842"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70376"
      },
      {
        "name": "Pleidelsheim",
        "postalCode": "74385"
      },
      {
        "name": "Fellbach",
        "postalCode": "70734"
      },
      {
        "name": "Mengen",
        "postalCode": "88512"
      },
      {
        "name": "Meersburg",
        "postalCode": "88709"
      },
      {
        "name": "Immenstaad am Bodensee",
        "postalCode": "88090"
      },
      {
        "name": "Gomadingen",
        "postalCode": "72532"
      },
      {
        "name": "Obersulm",
        "postalCode": "74182"
      },
      {
        "name": "Altbach",
        "postalCode": "73776"
      },
      {
        "name": "Münsingen",
        "postalCode": "72525"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79100"
      },
      {
        "name": "Seelbach",
        "postalCode": "77960"
      },
      {
        "name": "St. Märgen",
        "postalCode": "79274"
      },
      {
        "name": "Weisweil",
        "postalCode": "79367"
      },
      {
        "name": "Inzlingen",
        "postalCode": "79594"
      },
      {
        "name": "Schwanau",
        "postalCode": "77963"
      },
      {
        "name": "Wäschenbeuren",
        "postalCode": "73116"
      },
      {
        "name": "Rottenacker",
        "postalCode": "89616"
      },
      {
        "name": "Ingoldingen",
        "postalCode": "88456"
      },
      {
        "name": "Großrinderfeld",
        "postalCode": "97950"
      },
      {
        "name": "Mutlangen",
        "postalCode": "73557"
      },
      {
        "name": "Schrozberg",
        "postalCode": "74575"
      },
      {
        "name": "Iggingen",
        "postalCode": "73574"
      },
      {
        "name": "Bartholomä",
        "postalCode": "73566"
      },
      {
        "name": "Stödtlen",
        "postalCode": "73495"
      },
      {
        "name": "Tannhausen",
        "postalCode": "73497"
      },
      {
        "name": "Dunningen",
        "postalCode": "78655"
      },
      {
        "name": "Blumberg",
        "postalCode": "78176"
      },
      {
        "name": "Zimmern ob Rottweil",
        "postalCode": "78658"
      },
      {
        "name": "Lottstetten",
        "postalCode": "79807"
      },
      {
        "name": "Heddesheim",
        "postalCode": "68542"
      },
      {
        "name": "Kronau",
        "postalCode": "76709"
      },
      {
        "name": "Laudenbach",
        "postalCode": "69514"
      },
      {
        "name": "Dietingen",
        "postalCode": "78661"
      },
      {
        "name": "Engelsbrand",
        "postalCode": "75331"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69121"
      },
      {
        "name": "Leimen",
        "postalCode": "69181"
      },
      {
        "name": "Gunningen",
        "postalCode": "78594"
      },
      {
        "name": "Oberderdingen",
        "postalCode": "75038"
      },
      {
        "name": "Reichartshausen",
        "postalCode": "74934"
      },
      {
        "name": "Sindelfingen",
        "postalCode": "71065"
      },
      {
        "name": "Kirchheim am Neckar",
        "postalCode": "74366"
      },
      {
        "name": "Filderstadt",
        "postalCode": "70794"
      },
      {
        "name": "Bad Friedrichshall",
        "postalCode": "74177"
      },
      {
        "name": "Marbach am Neckar",
        "postalCode": "71672"
      },
      {
        "name": "Roigheim",
        "postalCode": "74255"
      },
      {
        "name": "Adelsheim",
        "postalCode": "74740"
      },
      {
        "name": "Hülben",
        "postalCode": "72584"
      },
      {
        "name": "Wernau (Neckar)",
        "postalCode": "73249"
      },
      {
        "name": "Hausach",
        "postalCode": "77756"
      },
      {
        "name": "Bonndorf im Schwarzwald",
        "postalCode": "79848"
      },
      {
        "name": "Löffingen",
        "postalCode": "79843"
      },
      {
        "name": "Villingen-Schwenningen",
        "postalCode": "78052"
      },
      {
        "name": "Eggenstein-Leopoldshafen",
        "postalCode": "76344"
      },
      {
        "name": "Rosenberg",
        "postalCode": "74749"
      },
      {
        "name": "Allmersbach im Tal",
        "postalCode": "71573"
      },
      {
        "name": "Hochdorf",
        "postalCode": "73269"
      },
      {
        "name": "Unterwaldhausen",
        "postalCode": "88379"
      },
      {
        "name": "Dürmentingen",
        "postalCode": "88525"
      },
      {
        "name": "Wiesensteig",
        "postalCode": "73349"
      },
      {
        "name": "Blaubeuren",
        "postalCode": "89143"
      },
      {
        "name": "Grünsfeld",
        "postalCode": "97947"
      },
      {
        "name": "Stadt Schwäbisch Gmünd",
        "postalCode": "73529"
      },
      {
        "name": "Vogt",
        "postalCode": "88267"
      },
      {
        "name": "Wolpertshausen",
        "postalCode": "74549"
      },
      {
        "name": "Leinzell",
        "postalCode": "73575"
      },
      {
        "name": "Ilshofen",
        "postalCode": "74532"
      },
      {
        "name": "Ulm",
        "postalCode": "89081"
      },
      {
        "name": "Creglingen",
        "postalCode": "97993"
      },
      {
        "name": "Aitrach",
        "postalCode": "88319"
      },
      {
        "name": "Illerrieden",
        "postalCode": "89186"
      },
      {
        "name": "Lauchheim",
        "postalCode": "73466"
      },
      {
        "name": "Riesbürg",
        "postalCode": "73469"
      },
      {
        "name": "Oberhausen-Rheinhausen",
        "postalCode": "68794"
      },
      {
        "name": "Rottweil",
        "postalCode": "78628"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69124"
      },
      {
        "name": "Hausen ob Verena",
        "postalCode": "78595"
      },
      {
        "name": "Maulbronn",
        "postalCode": "75433"
      },
      {
        "name": "Weil der Stadt",
        "postalCode": "71263"
      },
      {
        "name": "Rielasingen-Worblingen",
        "postalCode": "78239"
      },
      {
        "name": "Obernheim",
        "postalCode": "72364"
      },
      {
        "name": "Wiernsheim",
        "postalCode": "75446"
      },
      {
        "name": "Rutesheim",
        "postalCode": "71277"
      },
      {
        "name": "Reichenau",
        "postalCode": "78479"
      },
      {
        "name": "Pfullingen",
        "postalCode": "72793"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70191"
      },
      {
        "name": "Ostfildern",
        "postalCode": "73760"
      },
      {
        "name": "Heiligenberg",
        "postalCode": "88633"
      },
      {
        "name": "Daisendorf",
        "postalCode": "88718"
      },
      {
        "name": "Freudenberg, Collenberg",
        "postalCode": "97896"
      },
      {
        "name": "Eberstadt",
        "postalCode": "74246"
      },
      {
        "name": "Widdern",
        "postalCode": "74259"
      },
      {
        "name": "Neuried",
        "postalCode": "77743"
      },
      {
        "name": "Teningen",
        "postalCode": "79331"
      },
      {
        "name": "Maulburg",
        "postalCode": "79689"
      },
      {
        "name": "Ebringen",
        "postalCode": "79285"
      },
      {
        "name": "Höchenschwand",
        "postalCode": "79862"
      },
      {
        "name": "Dogern",
        "postalCode": "79804"
      },
      {
        "name": "Steinmauern",
        "postalCode": "76479"
      },
      {
        "name": "Ebenweiler",
        "postalCode": "88370"
      },
      {
        "name": "Holzmaden",
        "postalCode": "73271"
      },
      {
        "name": "Weingarten",
        "postalCode": "88250"
      },
      {
        "name": "Heroldstatt",
        "postalCode": "72535"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79106"
      },
      {
        "name": "Bergatreute",
        "postalCode": "88368"
      },
      {
        "name": "Eberhardzell",
        "postalCode": "88436"
      },
      {
        "name": "Ulm",
        "postalCode": "89073"
      },
      {
        "name": "Neenstetten",
        "postalCode": "89189"
      },
      {
        "name": "Balzheim",
        "postalCode": "88481"
      },
      {
        "name": "Satteldorf",
        "postalCode": "74589"
      },
      {
        "name": "Rammingen",
        "postalCode": "89192"
      },
      {
        "name": "Giengen an der Brenz",
        "postalCode": "89537"
      },
      {
        "name": "Mönchweiler",
        "postalCode": "78087"
      },
      {
        "name": "Mannheim",
        "postalCode": "68159"
      },
      {
        "name": "Glatten",
        "postalCode": "72293"
      },
      {
        "name": "Straubenhardt",
        "postalCode": "75334"
      },
      {
        "name": "Grömbach",
        "postalCode": "72294"
      },
      {
        "name": "Keltern",
        "postalCode": "75210"
      },
      {
        "name": "Wörnersberg",
        "postalCode": "72299"
      },
      {
        "name": "Sankt Leon-Rot",
        "postalCode": "68789"
      },
      {
        "name": "Talheim",
        "postalCode": "78607"
      },
      {
        "name": "Aldingen",
        "postalCode": "78554"
      },
      {
        "name": "Denkingen",
        "postalCode": "78588"
      },
      {
        "name": "Mauer",
        "postalCode": "69256"
      },
      {
        "name": "Wurmberg",
        "postalCode": "75449"
      },
      {
        "name": "Schönbrunn",
        "postalCode": "69436"
      },
      {
        "name": "Ammerbuch",
        "postalCode": "72119"
      },
      {
        "name": "Neuhausen ob Eck",
        "postalCode": "78579"
      },
      {
        "name": "Obrigheim",
        "postalCode": "74847"
      },
      {
        "name": "Straßberg",
        "postalCode": "72479"
      },
      {
        "name": "Hohenfels",
        "postalCode": "78355"
      },
      {
        "name": "Neufra",
        "postalCode": "72419"
      },
      {
        "name": "Kirchentellinsfurt",
        "postalCode": "72138"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70439"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70178"
      },
      {
        "name": "Altenriet",
        "postalCode": "72657"
      },
      {
        "name": "Konstanz",
        "postalCode": "78464"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72760"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72764"
      },
      {
        "name": "Salem",
        "postalCode": "88682"
      },
      {
        "name": "Neckartailfingen",
        "postalCode": "72666"
      },
      {
        "name": "Neuenstadt am Kocher",
        "postalCode": "74196"
      },
      {
        "name": "Köngen",
        "postalCode": "73257"
      },
      {
        "name": "Deizisau",
        "postalCode": "73779"
      },
      {
        "name": "Erkenbrechtsweiler",
        "postalCode": "73268"
      },
      {
        "name": "Forchheim",
        "postalCode": "79362"
      },
      {
        "name": "Lahr/Schwarzwald",
        "postalCode": "77933"
      },
      {
        "name": "Kehl",
        "postalCode": "77694"
      },
      {
        "name": "Hausen im Wiesental",
        "postalCode": "79688"
      },
      {
        "name": "Lichtenau",
        "postalCode": "77839"
      },
      {
        "name": "Sankt Peter",
        "postalCode": "79271"
      },
      {
        "name": "Dachsberg",
        "postalCode": "79875"
      },
      {
        "name": "Ravenstein",
        "postalCode": "74747"
      },
      {
        "name": "Albershausen",
        "postalCode": "73095"
      },
      {
        "name": "Künzelsau, Ingelfingen",
        "postalCode": "74653"
      },
      {
        "name": "Eggingen",
        "postalCode": "79805"
      },
      {
        "name": "Gütenbach",
        "postalCode": "78148"
      },
      {
        "name": "Baden-Baden",
        "postalCode": "76530"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76187"
      },
      {
        "name": "Alpirsbach",
        "postalCode": "72275"
      },
      {
        "name": "Königsfeld im Schwarzwald",
        "postalCode": "78126"
      },
      {
        "name": "Unterkirnach",
        "postalCode": "78089"
      },
      {
        "name": "Philippsburg",
        "postalCode": "76661"
      },
      {
        "name": "Schönau im Schwarzwald",
        "postalCode": "79677"
      },
      {
        "name": "Willstätt",
        "postalCode": "77731"
      },
      {
        "name": "Denzlingen",
        "postalCode": "79211"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79106"
      },
      {
        "name": "Efringen-Kirchen",
        "postalCode": "79588"
      },
      {
        "name": "Mannheim",
        "postalCode": "68307"
      },
      {
        "name": "Mannheim",
        "postalCode": "68169"
      },
      {
        "name": "Sulz am Neckar",
        "postalCode": "72172"
      },
      {
        "name": "Dossenheim",
        "postalCode": "69221"
      },
      {
        "name": "Pforzheim",
        "postalCode": "75180"
      },
      {
        "name": "Mühlhausen",
        "postalCode": "69242"
      },
      {
        "name": "Ölbronn-Dürrn",
        "postalCode": "75248"
      },
      {
        "name": "Schömberg",
        "postalCode": "72355"
      },
      {
        "name": "Althengstett",
        "postalCode": "75382"
      },
      {
        "name": "Bammental",
        "postalCode": "69245"
      },
      {
        "name": "Wilhelmsfeld",
        "postalCode": "69259"
      },
      {
        "name": "Gemmingen",
        "postalCode": "75050"
      },
      {
        "name": "Kirchardt",
        "postalCode": "74912"
      },
      {
        "name": "Tübingen",
        "postalCode": "72076"
      },
      {
        "name": "Heilbronn",
        "postalCode": "74078"
      },
      {
        "name": "Wald",
        "postalCode": "88639"
      },
      {
        "name": "Bad Wimpfen",
        "postalCode": "74206"
      },
      {
        "name": "Lauffen am Neckar",
        "postalCode": "74348"
      },
      {
        "name": "Wannweil",
        "postalCode": "72827"
      },
      {
        "name": "Neckarsulm",
        "postalCode": "74172"
      },
      {
        "name": "Heilbronn",
        "postalCode": "74074"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70372"
      },
      {
        "name": "Seckach",
        "postalCode": "74743"
      },
      {
        "name": "Großbettlingen",
        "postalCode": "72663"
      },
      {
        "name": "Beuren",
        "postalCode": "72660"
      },
      {
        "name": "Weil am Rhein",
        "postalCode": "79576"
      },
      {
        "name": "Rümmingen",
        "postalCode": "79595"
      },
      {
        "name": "Badenweiler",
        "postalCode": "79410"
      },
      {
        "name": "Kleines Wiesental",
        "postalCode": "79692"
      },
      {
        "name": "Vörstetten",
        "postalCode": "79279"
      },
      {
        "name": "Schlat",
        "postalCode": "73114"
      },
      {
        "name": "Blaustein",
        "postalCode": "89134"
      },
      {
        "name": "Amstetten",
        "postalCode": "73340"
      },
      {
        "name": "Achstetten",
        "postalCode": "88480"
      },
      {
        "name": "Altheim (Alb)",
        "postalCode": "89174"
      },
      {
        "name": "Illerkirchberg",
        "postalCode": "89171"
      },
      {
        "name": "Königsbronn",
        "postalCode": "89551"
      },
      {
        "name": "Schöntal",
        "postalCode": "74214"
      },
      {
        "name": "Obermarchtal",
        "postalCode": "89611"
      },
      {
        "name": "Hattenhofen",
        "postalCode": "73110"
      },
      {
        "name": "Laichingen",
        "postalCode": "89150"
      },
      {
        "name": "Allmendingen",
        "postalCode": "89604"
      },
      {
        "name": "Rechberghausen",
        "postalCode": "73098"
      },
      {
        "name": "Neuenburg am Rhein",
        "postalCode": "79395"
      },
      {
        "name": "Endingen am Kaiserstuhl",
        "postalCode": "79346"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79112"
      },
      {
        "name": "Münstertal",
        "postalCode": "79244"
      },
      {
        "name": "Ettenheim",
        "postalCode": "77955"
      },
      {
        "name": "Malterdingen",
        "postalCode": "79364"
      },
      {
        "name": "Reute",
        "postalCode": "79276"
      },
      {
        "name": "Dettighofen",
        "postalCode": "79802"
      },
      {
        "name": "Ladenburg",
        "postalCode": "68526"
      },
      {
        "name": "Tuningen",
        "postalCode": "78609"
      },
      {
        "name": "Hemsbach",
        "postalCode": "69502"
      },
      {
        "name": "Walldorf",
        "postalCode": "69190"
      },
      {
        "name": "Ispringen",
        "postalCode": "75228"
      },
      {
        "name": "Spaichingen",
        "postalCode": "78549"
      },
      {
        "name": "Hirschhorn, Brombach, Heddesbach",
        "postalCode": "69434"
      },
      {
        "name": "Kürnbach",
        "postalCode": "75057"
      },
      {
        "name": "Aidlingen",
        "postalCode": "71134"
      },
      {
        "name": "Ostelsheim",
        "postalCode": "75395"
      },
      {
        "name": "Neustetten",
        "postalCode": "72149"
      },
      {
        "name": "Leibertingen, Buchheim",
        "postalCode": "88637"
      },
      {
        "name": "Güglingen",
        "postalCode": "74363"
      },
      {
        "name": "Waldbrunn",
        "postalCode": "69429"
      },
      {
        "name": "Gerlingen",
        "postalCode": "70839"
      },
      {
        "name": "Nordheim",
        "postalCode": "74226"
      },
      {
        "name": "Steinenbronn",
        "postalCode": "71144"
      },
      {
        "name": "Schlaitdorf",
        "postalCode": "72667"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72762"
      },
      {
        "name": "Eningen",
        "postalCode": "72800"
      },
      {
        "name": "Riederich",
        "postalCode": "72585"
      },
      {
        "name": "Grafenberg",
        "postalCode": "72661"
      },
      {
        "name": "Dettingen an der Erms",
        "postalCode": "72581"
      },
      {
        "name": "Oppenweiler",
        "postalCode": "71570"
      },
      {
        "name": "Eschenbach",
        "postalCode": "73107"
      },
      {
        "name": "Altheim",
        "postalCode": "89605"
      },
      {
        "name": "Blaufelden",
        "postalCode": "74572"
      },
      {
        "name": "Westhausen",
        "postalCode": "73463"
      },
      {
        "name": "Bopfingen",
        "postalCode": "73441"
      },
      {
        "name": "Lauf",
        "postalCode": "77886"
      },
      {
        "name": "Oppenau",
        "postalCode": "77728"
      },
      {
        "name": "Triberg im Schwarzwald",
        "postalCode": "78098"
      },
      {
        "name": "Muggensturm",
        "postalCode": "76461"
      },
      {
        "name": "Stühlingen",
        "postalCode": "79780"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76185"
      },
      {
        "name": "Friesenheim",
        "postalCode": "77948"
      },
      {
        "name": "Stegen",
        "postalCode": "79252"
      },
      {
        "name": "Römerstein",
        "postalCode": "72587"
      },
      {
        "name": "Schorndorf",
        "postalCode": "73614"
      },
      {
        "name": "Ohmden",
        "postalCode": "73275"
      },
      {
        "name": "Urbach",
        "postalCode": "73660"
      },
      {
        "name": "Plüderhausen",
        "postalCode": "73655"
      },
      {
        "name": "Adelberg",
        "postalCode": "73099"
      },
      {
        "name": "Brigachtal",
        "postalCode": "78086"
      },
      {
        "name": "Mannheim",
        "postalCode": "68161"
      },
      {
        "name": "Neuweiler",
        "postalCode": "75389"
      },
      {
        "name": "Horb am Neckar",
        "postalCode": "72160"
      },
      {
        "name": "Schriesheim",
        "postalCode": "69198"
      },
      {
        "name": "Pforzheim",
        "postalCode": "75173"
      },
      {
        "name": "Wiesloch",
        "postalCode": "69168"
      },
      {
        "name": "Sulzfeld",
        "postalCode": "75056"
      },
      {
        "name": "Egesheim",
        "postalCode": "78592"
      },
      {
        "name": "Grafenau",
        "postalCode": "71120"
      },
      {
        "name": "Steißlingen",
        "postalCode": "78256"
      },
      {
        "name": "Helmstadt-Bargen",
        "postalCode": "74921"
      },
      {
        "name": "Böblingen",
        "postalCode": "71034"
      },
      {
        "name": "Weil im Schönbuch",
        "postalCode": "71093"
      },
      {
        "name": "Pliezhausen",
        "postalCode": "72124"
      },
      {
        "name": "Reichenau",
        "postalCode": "78479"
      },
      {
        "name": "Bietigheim-Bissingen",
        "postalCode": "74321"
      },
      {
        "name": "Pfullendorf",
        "postalCode": "88630"
      },
      {
        "name": "Konstanz",
        "postalCode": "78465"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70190"
      },
      {
        "name": "Buchen",
        "postalCode": "74722"
      },
      {
        "name": "Höpfingen",
        "postalCode": "74746"
      },
      {
        "name": "Süßen",
        "postalCode": "73079"
      },
      {
        "name": "Sulzbach-Laufen",
        "postalCode": "74429"
      },
      {
        "name": "Aalen",
        "postalCode": "73432"
      },
      {
        "name": "Unlingen",
        "postalCode": "88527"
      },
      {
        "name": "Tauberbischofsheim",
        "postalCode": "97941"
      },
      {
        "name": "Grünkraut",
        "postalCode": "88287"
      },
      {
        "name": "Laufenburg (Baden)",
        "postalCode": "79725"
      },
      {
        "name": "Ehrenkirchen",
        "postalCode": "79238"
      },
      {
        "name": "Attenweiler",
        "postalCode": "88448"
      },
      {
        "name": "Bad Ditzenbach",
        "postalCode": "73342"
      },
      {
        "name": "Schwäbisch Gmünd, Täferrot",
        "postalCode": "73527"
      },
      {
        "name": "Weikersheim",
        "postalCode": "97990"
      },
      {
        "name": "Bühlerzell",
        "postalCode": "74426"
      },
      {
        "name": "Kirchdorf an der Iller",
        "postalCode": "88457"
      },
      {
        "name": "Hüttlingen",
        "postalCode": "73460"
      },
      {
        "name": "Heidenheim an der Brenz",
        "postalCode": "89522"
      },
      {
        "name": "Neresheim",
        "postalCode": "73450"
      },
      {
        "name": "Wolfach, Oberwolfach",
        "postalCode": "77709"
      },
      {
        "name": "Elchesheim-Illingen",
        "postalCode": "76477"
      },
      {
        "name": "Friedenweiler",
        "postalCode": "79877"
      },
      {
        "name": "St. Georgen",
        "postalCode": "78112"
      },
      {
        "name": "Villingen-Schwenningen",
        "postalCode": "78052"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76135"
      },
      {
        "name": "Dettenheim",
        "postalCode": "76706"
      },
      {
        "name": "Uttenweiler",
        "postalCode": "88524"
      },
      {
        "name": "Michelfeld",
        "postalCode": "74545"
      },
      {
        "name": "Waldenburg",
        "postalCode": "74638"
      },
      {
        "name": "Munderkingen",
        "postalCode": "89597"
      },
      {
        "name": "Wieden",
        "postalCode": "79695"
      },
      {
        "name": "Rickenbach",
        "postalCode": "79736"
      },
      {
        "name": "Durbach",
        "postalCode": "77770"
      },
      {
        "name": "Wittlingen",
        "postalCode": "79599"
      },
      {
        "name": "Mannheim",
        "postalCode": "68199"
      },
      {
        "name": "Waldbronn",
        "postalCode": "76337"
      },
      {
        "name": "Karlsdorf-Neuthard",
        "postalCode": "76689"
      },
      {
        "name": "Neulußheim",
        "postalCode": "68809"
      },
      {
        "name": "Hambrücken",
        "postalCode": "76707"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69123"
      },
      {
        "name": "Rosenfeld",
        "postalCode": "72348"
      },
      {
        "name": "Engen",
        "postalCode": "78234"
      },
      {
        "name": "Deckenpfronn",
        "postalCode": "75392"
      },
      {
        "name": "Ittlingen",
        "postalCode": "74930"
      },
      {
        "name": "Irndorf",
        "postalCode": "78597"
      },
      {
        "name": "Sindelfingen",
        "postalCode": "71063"
      },
      {
        "name": "Holzgerlingen",
        "postalCode": "71088"
      },
      {
        "name": "Leinfelden-Echterdingen",
        "postalCode": "70771"
      },
      {
        "name": "Tamm",
        "postalCode": "71732"
      },
      {
        "name": "Mosbach",
        "postalCode": "74821"
      },
      {
        "name": "Waldenbuch",
        "postalCode": "71111"
      },
      {
        "name": "Neckarwestheim",
        "postalCode": "74382"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70184"
      },
      {
        "name": "Uhldingen-Mühlhofen",
        "postalCode": "88690"
      },
      {
        "name": "Neckartenzlingen",
        "postalCode": "72654"
      },
      {
        "name": "Erdmannhausen",
        "postalCode": "71729"
      },
      {
        "name": "Denkendorf",
        "postalCode": "73770"
      },
      {
        "name": "Pfalzgrafenweiler",
        "postalCode": "72285"
      },
      {
        "name": "Mannheim",
        "postalCode": "68309"
      },
      {
        "name": "Königsbach-Stein",
        "postalCode": "75203"
      },
      {
        "name": "Gottmadingen",
        "postalCode": "78244"
      },
      {
        "name": "Bondorf",
        "postalCode": "71149"
      },
      {
        "name": "Heimsheim",
        "postalCode": "71296"
      },
      {
        "name": "Albstadt",
        "postalCode": "72459"
      },
      {
        "name": "Bodelshausen",
        "postalCode": "72411"
      },
      {
        "name": "Ditzingen",
        "postalCode": "71254"
      },
      {
        "name": "Leonberg",
        "postalCode": "71229"
      },
      {
        "name": "Ofterdingen",
        "postalCode": "72131"
      },
      {
        "name": "Hessigheim",
        "postalCode": "74394"
      },
      {
        "name": "Untereisesheim",
        "postalCode": "74257"
      },
      {
        "name": "Löwenstein",
        "postalCode": "74245"
      },
      {
        "name": "Spiegelberg",
        "postalCode": "71579"
      },
      {
        "name": "Amtzell",
        "postalCode": "88279"
      },
      {
        "name": "Erbach",
        "postalCode": "89155"
      },
      {
        "name": "Ruppertshofen",
        "postalCode": "73577"
      },
      {
        "name": "Waldstetten",
        "postalCode": "73550"
      },
      {
        "name": "Oberdischingen",
        "postalCode": "89610"
      },
      {
        "name": "Vellberg",
        "postalCode": "74541"
      },
      {
        "name": "Ulm",
        "postalCode": "89079"
      },
      {
        "name": "Böhmenkirch",
        "postalCode": "89558"
      },
      {
        "name": "Wain",
        "postalCode": "88489"
      },
      {
        "name": "Bernstadt",
        "postalCode": "89182"
      },
      {
        "name": "Ellwangen (Jagst)",
        "postalCode": "73479"
      },
      {
        "name": "Appenweier",
        "postalCode": "77767"
      },
      {
        "name": "Ühlingen-Birkendorf",
        "postalCode": "79777"
      },
      {
        "name": "Freudenstadt",
        "postalCode": "72250"
      },
      {
        "name": "Aichhalden",
        "postalCode": "78733"
      },
      {
        "name": "Schelklingen",
        "postalCode": "89601"
      },
      {
        "name": "Göppingen",
        "postalCode": "73033"
      },
      {
        "name": "Alfdorf, Schillinghof",
        "postalCode": "73553"
      },
      {
        "name": "Eimeldingen",
        "postalCode": "79591"
      },
      {
        "name": "Rümmingen",
        "postalCode": "79595"
      },
      {
        "name": "Kenzingen",
        "postalCode": "79341"
      },
      {
        "name": "Umkirch",
        "postalCode": "79224"
      },
      {
        "name": "Meißenheim",
        "postalCode": "77974"
      },
      {
        "name": "Wittnau",
        "postalCode": "79299"
      },
      {
        "name": "Horben",
        "postalCode": "79289"
      },
      {
        "name": "Simmersfeld",
        "postalCode": "72226"
      },
      {
        "name": "Mannheim",
        "postalCode": "68163"
      },
      {
        "name": "Dobel",
        "postalCode": "75335"
      },
      {
        "name": "Villingen-Schwenningen",
        "postalCode": "78054"
      },
      {
        "name": "Bruchsal",
        "postalCode": "76646"
      },
      {
        "name": "Villingen-Schwenningen",
        "postalCode": "78056"
      },
      {
        "name": "Schwetzingen",
        "postalCode": "68723"
      },
      {
        "name": "Geisingen",
        "postalCode": "78187"
      },
      {
        "name": "Rauenberg",
        "postalCode": "69231"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69126"
      },
      {
        "name": "Seitingen-Oberflacht",
        "postalCode": "78606"
      },
      {
        "name": "Sinsheim",
        "postalCode": "74889"
      },
      {
        "name": "Wimsheim",
        "postalCode": "71299"
      },
      {
        "name": "Pfaffenhofen",
        "postalCode": "74397"
      },
      {
        "name": "Böblingen",
        "postalCode": "71032"
      },
      {
        "name": "Waldbrunn",
        "postalCode": "69429"
      },
      {
        "name": "Schönaich",
        "postalCode": "71101"
      },
      {
        "name": "Reichenau",
        "postalCode": "78479"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70597"
      },
      {
        "name": "Konstanz",
        "postalCode": "78462"
      },
      {
        "name": "Reutlingen",
        "postalCode": "72764"
      },
      {
        "name": "Fellbach",
        "postalCode": "70736"
      },
      {
        "name": "Marbach am Neckar",
        "postalCode": "71672"
      },
      {
        "name": "Bad Urach",
        "postalCode": "72574"
      },
      {
        "name": "Langenbrettach",
        "postalCode": "74243"
      },
      {
        "name": "Friedrichshafen",
        "postalCode": "88048"
      },
      {
        "name": "Baltmannsweiler",
        "postalCode": "73666"
      },
      {
        "name": "Biberach an der Riß",
        "postalCode": "88400"
      },
      {
        "name": "Öpfingen",
        "postalCode": "89614"
      },
      {
        "name": "Bad Wurzach",
        "postalCode": "88410"
      },
      {
        "name": "Eschach, Obergröningen",
        "postalCode": "73569"
      },
      {
        "name": "Maselheim",
        "postalCode": "88437"
      },
      {
        "name": "Niederstetten",
        "postalCode": "97996"
      },
      {
        "name": "Gutenzell-Hürbel",
        "postalCode": "88484"
      },
      {
        "name": "Heuchlingen",
        "postalCode": "73572"
      },
      {
        "name": "Mögglingen",
        "postalCode": "73563"
      },
      {
        "name": "Beimerstetten",
        "postalCode": "89179"
      },
      {
        "name": "Tannheim",
        "postalCode": "88459"
      },
      {
        "name": "Asselfingen",
        "postalCode": "89176"
      },
      {
        "name": "Oberharmersbach",
        "postalCode": "77784"
      },
      {
        "name": "Notzingen",
        "postalCode": "73274"
      },
      {
        "name": "Mehrstetten",
        "postalCode": "72537"
      },
      {
        "name": "Oberstadion",
        "postalCode": "89613"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76228"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76229"
      },
      {
        "name": "Unterreichenbach",
        "postalCode": "75399"
      },
      {
        "name": "Eutingen im Gäu",
        "postalCode": "72184"
      },
      {
        "name": "Kieselbronn",
        "postalCode": "75249"
      },
      {
        "name": "Mühlhausen-Ehingen",
        "postalCode": "78259"
      },
      {
        "name": "Bubsheim",
        "postalCode": "78585"
      },
      {
        "name": "Neidenstein",
        "postalCode": "74933"
      },
      {
        "name": "Gaienhofen",
        "postalCode": "78343"
      },
      {
        "name": "Cleebronn",
        "postalCode": "74389"
      },
      {
        "name": "Meßkirch, Sauldorf",
        "postalCode": "88605"
      },
      {
        "name": "Nehren",
        "postalCode": "72147"
      },
      {
        "name": "Badisch Schöllenbach",
        "postalCode": "64754"
      },
      {
        "name": "Kusterdingen",
        "postalCode": "72127"
      },
      {
        "name": "Walddorfhäslach",
        "postalCode": "72141"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70619"
      },
      {
        "name": "Ilsfeld",
        "postalCode": "74360"
      },
      {
        "name": "Neudenau",
        "postalCode": "74861"
      },
      {
        "name": "Meersburg",
        "postalCode": "88709"
      },
      {
        "name": "Esslingen am Neckar",
        "postalCode": "73732"
      },
      {
        "name": "Unterensingen",
        "postalCode": "72669"
      },
      {
        "name": "Markdorf",
        "postalCode": "88677"
      },
      {
        "name": "Weinstadt",
        "postalCode": "71384"
      },
      {
        "name": "Korb",
        "postalCode": "71404"
      },
      {
        "name": "Bad Saulgau, Allmannsweiler",
        "postalCode": "88348"
      },
      {
        "name": "Waldburg",
        "postalCode": "88289"
      },
      {
        "name": "Adelmannsfelden",
        "postalCode": "73486"
      },
      {
        "name": "Hüttisheim",
        "postalCode": "89185"
      },
      {
        "name": "Breitingen",
        "postalCode": "89183"
      },
      {
        "name": "Unterwaldhausen",
        "postalCode": "88379"
      },
      {
        "name": "Mainhardt",
        "postalCode": "74535"
      },
      {
        "name": "Boxberg",
        "postalCode": "97944"
      },
      {
        "name": "Oberrot",
        "postalCode": "74420"
      },
      {
        "name": "Sexau",
        "postalCode": "79350"
      },
      {
        "name": "Rheinmünster",
        "postalCode": "77836"
      },
      {
        "name": "Sulzburg",
        "postalCode": "79295"
      },
      {
        "name": "Ringsheim",
        "postalCode": "77975"
      },
      {
        "name": "March",
        "postalCode": "79232"
      },
      {
        "name": "Eisenbach",
        "postalCode": "79871"
      },
      {
        "name": "Baiersbronn",
        "postalCode": "72270"
      },
      {
        "name": "Unterkirnach",
        "postalCode": "78089"
      },
      {
        "name": "Linkenheim-Hochstetten",
        "postalCode": "76351"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76133"
      },
      {
        "name": "Göppingen",
        "postalCode": "73037"
      },
      {
        "name": "Birenbach",
        "postalCode": "73102"
      },
      {
        "name": "Gschwend",
        "postalCode": "74417"
      },
      {
        "name": "Braunsbach",
        "postalCode": "74542"
      },
      {
        "name": "Ummendorf",
        "postalCode": "88444"
      },
      {
        "name": "Ulm",
        "postalCode": "89081"
      },
      {
        "name": "Fichtenau",
        "postalCode": "74579"
      },
      {
        "name": "Karlsruhe",
        "postalCode": "76131"
      },
      {
        "name": "Marxzell",
        "postalCode": "76359"
      },
      {
        "name": "Stutensee",
        "postalCode": "76297"
      },
      {
        "name": "Niedereschach",
        "postalCode": "78078"
      },
      {
        "name": "Villingendorf",
        "postalCode": "78667"
      },
      {
        "name": "Mannheim",
        "postalCode": "68229"
      },
      {
        "name": "Schömberg",
        "postalCode": "75328"
      },
      {
        "name": "Nußloch",
        "postalCode": "69226"
      },
      {
        "name": "Nagold",
        "postalCode": "72202"
      },
      {
        "name": "Knittlingen",
        "postalCode": "75438"
      },
      {
        "name": "Böttingen",
        "postalCode": "78583"
      },
      {
        "name": "Mahlstetten",
        "postalCode": "78601"
      },
      {
        "name": "Neckarbischofsheim",
        "postalCode": "74924"
      },
      {
        "name": "Mühlingen",
        "postalCode": "78357"
      },
      {
        "name": "Sindelfingen",
        "postalCode": "71063"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70563"
      },
      {
        "name": "Heilbronn",
        "postalCode": "74080"
      },
      {
        "name": "Offenau",
        "postalCode": "74254"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70188"
      },
      {
        "name": "Oedheim",
        "postalCode": "74229"
      },
      {
        "name": "Nürtingen",
        "postalCode": "72622"
      },
      {
        "name": "Großbettlingen",
        "postalCode": "72663"
      },
      {
        "name": "Stetten",
        "postalCode": "88719"
      },
      {
        "name": "Deggenhausertal",
        "postalCode": "88693"
      },
      {
        "name": "Riedlingen",
        "postalCode": "88499"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79102"
      },
      {
        "name": "Kirchzarten",
        "postalCode": "79199"
      },
      {
        "name": "Hinterzarten",
        "postalCode": "79856"
      },
      {
        "name": "Schallbach",
        "postalCode": "79597"
      },
      {
        "name": "Grenzach-Wyhlen",
        "postalCode": "79639"
      },
      {
        "name": "Schopfheim",
        "postalCode": "79650"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79108"
      },
      {
        "name": "Ravensburg",
        "postalCode": "88213"
      },
      {
        "name": "Lenzkirch",
        "postalCode": "79853"
      },
      {
        "name": "Schramberg",
        "postalCode": "78144"
      },
      {
        "name": "Lauchringen",
        "postalCode": "79787"
      },
      {
        "name": "Unterkirnach",
        "postalCode": "78089"
      },
      {
        "name": "Unterkirnach",
        "postalCode": "78089"
      },
      {
        "name": "Merklingen",
        "postalCode": "89188"
      },
      {
        "name": "Schemmerhofen",
        "postalCode": "88433"
      },
      {
        "name": "Obersontheim",
        "postalCode": "74423"
      },
      {
        "name": "Mannheim",
        "postalCode": "68165"
      },
      {
        "name": "Mannheim",
        "postalCode": "68259"
      },
      {
        "name": "Altensteig",
        "postalCode": "72213"
      },
      {
        "name": "Edingen-Neckarhausen",
        "postalCode": "68535"
      },
      {
        "name": "Büsingen am Hochrhein",
        "postalCode": "78266"
      },
      {
        "name": "Gailingen am Hochrhein",
        "postalCode": "78262"
      },
      {
        "name": "Schönau",
        "postalCode": "69250"
      },
      {
        "name": "Zaberfeld",
        "postalCode": "74374"
      },
      {
        "name": "Fridingen an der Donau",
        "postalCode": "78567"
      },
      {
        "name": "Eberbach",
        "postalCode": "69412"
      },
      {
        "name": "Sindelfingen",
        "postalCode": "71069"
      },
      {
        "name": "Schwieberdingen",
        "postalCode": "71701"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70197"
      },
      {
        "name": "Konstanz",
        "postalCode": "78465"
      },
      {
        "name": "Waldenbuch",
        "postalCode": "71111"
      },
      {
        "name": "Sonnenbühl",
        "postalCode": "72820"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70469"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70439"
      },
      {
        "name": "Besigheim",
        "postalCode": "74354"
      },
      {
        "name": "Wolfschlugen",
        "postalCode": "72649"
      },
      {
        "name": "Hohenstein",
        "postalCode": "72531"
      },
      {
        "name": "Owen",
        "postalCode": "73277"
      },
      {
        "name": "Gundelfingen, Heuweiler",
        "postalCode": "79194"
      },
      {
        "name": "Hohberg",
        "postalCode": "77749"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79106"
      },
      {
        "name": "Glottertal",
        "postalCode": "79286"
      },
      {
        "name": "Oberkirch",
        "postalCode": "77704"
      },
      {
        "name": "St. Blasien, Ibach",
        "postalCode": "79837"
      },
      {
        "name": "Baden-Baden",
        "postalCode": "76532"
      },
      {
        "name": "Bad Peterstal-Griesbach",
        "postalCode": "77740"
      },
      {
        "name": "Kuppenheim",
        "postalCode": "76456"
      },
      {
        "name": "Schenkenzell",
        "postalCode": "77773"
      },
      {
        "name": "Unterkirnach",
        "postalCode": "78089"
      },
      {
        "name": "Loffenau",
        "postalCode": "76597"
      },
      {
        "name": "Langenargen",
        "postalCode": "88085"
      },
      {
        "name": "Binzen",
        "postalCode": "79589"
      },
      {
        "name": "Untermünkheim",
        "postalCode": "74547"
      },
      {
        "name": "Donzdorf",
        "postalCode": "73072"
      },
      {
        "name": "Ballendorf",
        "postalCode": "89177"
      },
      {
        "name": "Ellenberg",
        "postalCode": "73488"
      },
      {
        "name": "Altlußheim",
        "postalCode": "68804"
      },
      {
        "name": "Egenhausen",
        "postalCode": "72227"
      },
      {
        "name": "Zuzenhausen",
        "postalCode": "74939"
      },
      {
        "name": "Emmingen-Liptingen",
        "postalCode": "78576"
      },
      {
        "name": "Meßstetten",
        "postalCode": "72469"
      },
      {
        "name": "Schwenningen",
        "postalCode": "72477"
      },
      {
        "name": "Hemmingen",
        "postalCode": "71282"
      },
      {
        "name": "Rottenburg am Neckar",
        "postalCode": "72108"
      },
      {
        "name": "Löchgau",
        "postalCode": "74369"
      },
      {
        "name": "Leingarten",
        "postalCode": "74211"
      },
      {
        "name": "Trochtelfingen",
        "postalCode": "72818"
      },
      {
        "name": "Hettingen",
        "postalCode": "72513"
      },
      {
        "name": "Bermatingen",
        "postalCode": "88697"
      },
      {
        "name": "Leutenbach",
        "postalCode": "71397"
      },
      {
        "name": "Wilhelmsdorf",
        "postalCode": "88271"
      },
      {
        "name": "Plochingen",
        "postalCode": "73207"
      },
      {
        "name": "Vogtsburg im Kaiserstuhl",
        "postalCode": "79235"
      },
      {
        "name": "Sasbach am Kaiserstuhl",
        "postalCode": "79361"
      },
      {
        "name": "Rheinhausen",
        "postalCode": "79365"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79106"
      },
      {
        "name": "Achern (Abweichung Exklaven)",
        "postalCode": "77855"
      },
      {
        "name": "Ottersweier",
        "postalCode": "77833"
      },
      {
        "name": "Zell am Harmersbach",
        "postalCode": "77736"
      },
      {
        "name": "Bühl",
        "postalCode": "77815"
      },
      {
        "name": "Albbruck",
        "postalCode": "79774"
      },
      {
        "name": "Schlierbach",
        "postalCode": "73278"
      },
      {
        "name": "Murrhardt",
        "postalCode": "71540"
      },
      {
        "name": "Ravensburg",
        "postalCode": "88213"
      },
      {
        "name": "Weilheim",
        "postalCode": "79809"
      },
      {
        "name": "Sasbach",
        "postalCode": "77880"
      },
      {
        "name": "Vöhrenbach",
        "postalCode": "78147"
      },
      {
        "name": "Karlsbad",
        "postalCode": "76307"
      },
      {
        "name": "Brühl",
        "postalCode": "68782"
      },
      {
        "name": "Mannheim",
        "postalCode": "68167"
      },
      {
        "name": "Pforzheim",
        "postalCode": "75179"
      },
      {
        "name": "Neuhausen",
        "postalCode": "75242"
      },
      {
        "name": "Wehingen, Reichenbach",
        "postalCode": "78564"
      },
      {
        "name": "Ratshausen",
        "postalCode": "72365"
      },
      {
        "name": "Stockach",
        "postalCode": "78333"
      },
      {
        "name": "Reichenau",
        "postalCode": "78479"
      },
      {
        "name": "Metzingen",
        "postalCode": "72555"
      },
      {
        "name": "Esslingen am Neckar",
        "postalCode": "73728"
      },
      {
        "name": "Kirchberg",
        "postalCode": "71737"
      },
      {
        "name": "Frickenhausen",
        "postalCode": "72636"
      },
      {
        "name": "Pfronstetten",
        "postalCode": "72539"
      },
      {
        "name": "Bretzfeld",
        "postalCode": "74626"
      },
      {
        "name": "Bodnegg",
        "postalCode": "88285"
      },
      {
        "name": "Nellingen",
        "postalCode": "89191"
      },
      {
        "name": "Spraitbach",
        "postalCode": "73565"
      },
      {
        "name": "Durlangen, Weggen-Ziegelhütte, Leinhäusle",
        "postalCode": "73568"
      },
      {
        "name": "Griesingen",
        "postalCode": "89608"
      },
      {
        "name": "Kuchen",
        "postalCode": "73329"
      },
      {
        "name": "Wittighausen",
        "postalCode": "97957"
      },
      {
        "name": "Dornstadt",
        "postalCode": "89160"
      },
      {
        "name": "Schnürpflingen",
        "postalCode": "89194"
      },
      {
        "name": "Kirchberg an der Iller",
        "postalCode": "88486"
      },
      {
        "name": "Winterbach",
        "postalCode": "73650"
      },
      {
        "name": "Zweiflingen",
        "postalCode": "74639"
      },
      {
        "name": "Fleischwangen",
        "postalCode": "88373"
      },
      {
        "name": "Rudersberg",
        "postalCode": "73635"
      },
      {
        "name": "Bad Buchau",
        "postalCode": "88422"
      },
      {
        "name": "Neuenstein",
        "postalCode": "74632"
      },
      {
        "name": "Niedernhall",
        "postalCode": "74676"
      },
      {
        "name": "Breisach am Rhein",
        "postalCode": "79206"
      },
      {
        "name": "Merdingen",
        "postalCode": "79291"
      },
      {
        "name": "Ballrechten-Dottingen",
        "postalCode": "79282"
      },
      {
        "name": "Staufen im Breisgau",
        "postalCode": "79219"
      },
      {
        "name": "Rheinfelden (Baden)",
        "postalCode": "79618"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79111"
      },
      {
        "name": "Mahlberg",
        "postalCode": "77972"
      },
      {
        "name": "Kappelrodeck",
        "postalCode": "77876"
      },
      {
        "name": "Bühlertal",
        "postalCode": "77830"
      },
      {
        "name": "Gutach (Schwarzwaldbahn)",
        "postalCode": "77793"
      },
      {
        "name": "Freudenstadt",
        "postalCode": "72250"
      },
      {
        "name": "Hohentengen am Hochrhein",
        "postalCode": "79801"
      },
      {
        "name": "Schramberg",
        "postalCode": "78713"
      },
      {
        "name": "Fischerbach, Haslach, Hofstetten",
        "postalCode": "77716"
      },
      {
        "name": "Häg-Ehrsberg",
        "postalCode": "79685"
      },
      {
        "name": "Steinach",
        "postalCode": "77790"
      },
      {
        "name": "Gaildorf",
        "postalCode": "74405"
      },
      {
        "name": "Ulm",
        "postalCode": "89077"
      },
      {
        "name": "Aalen",
        "postalCode": "73430"
      },
      {
        "name": "Kirchdorf an der Iller",
        "postalCode": "88457"
      },
      {
        "name": "Unterschneidheim",
        "postalCode": "73485"
      },
      {
        "name": "Dischingen",
        "postalCode": "89561"
      },
      {
        "name": "Dornstetten",
        "postalCode": "72280"
      },
      {
        "name": "Waldachtal",
        "postalCode": "72178"
      },
      {
        "name": "Schopfloch",
        "postalCode": "72296"
      },
      {
        "name": "Immendingen",
        "postalCode": "78194"
      },
      {
        "name": "Kraichtal",
        "postalCode": "76703"
      },
      {
        "name": "Heidelberg",
        "postalCode": "69120"
      },
      {
        "name": "Frittlingen",
        "postalCode": "78665"
      },
      {
        "name": "Dielheim",
        "postalCode": "69234"
      },
      {
        "name": "Dautmergen",
        "postalCode": "72356"
      },
      {
        "name": "Rietheim-Weilheim",
        "postalCode": "78604"
      },
      {
        "name": "Niefern-Öschelbronn",
        "postalCode": "75223"
      },
      {
        "name": "Mühlheim an der Donau",
        "postalCode": "78570"
      },
      {
        "name": "Hirrlingen",
        "postalCode": "72145"
      },
      {
        "name": "Neunkirchen",
        "postalCode": "74867"
      },
      {
        "name": "Mudau",
        "postalCode": "69427"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70195"
      },
      {
        "name": "Walheim",
        "postalCode": "74399"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70567"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70180"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70182"
      },
      {
        "name": "Gammertingen",
        "postalCode": "72501"
      },
      {
        "name": "Mundelsheim",
        "postalCode": "74395"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70329"
      },
      {
        "name": "Großbottwar",
        "postalCode": "71723"
      },
      {
        "name": "Weinsberg",
        "postalCode": "74189"
      },
      {
        "name": "Lehrensteinsfeld",
        "postalCode": "74251"
      },
      {
        "name": "Eichenbühl",
        "postalCode": "63928"
      },
      {
        "name": "Wüstenrot, Beilstein-Stocksberg",
        "postalCode": "71543"
      },
      {
        "name": "Weissach im Tal",
        "postalCode": "71554"
      },
      {
        "name": "Forchtenberg",
        "postalCode": "74670"
      },
      {
        "name": "Lauda-Königshofen",
        "postalCode": "97922"
      },
      {
        "name": "Emerkingen",
        "postalCode": "89607"
      },
      {
        "name": "Iffezheim",
        "postalCode": "76473"
      },
      {
        "name": "Gaggenau",
        "postalCode": "76571"
      },
      {
        "name": "Mannheim",
        "postalCode": "68305"
      },
      {
        "name": "Weingarten",
        "postalCode": "76356"
      },
      {
        "name": "Pfinztal",
        "postalCode": "76327"
      },
      {
        "name": "Neuenbürg",
        "postalCode": "75305"
      },
      {
        "name": "Jestetten",
        "postalCode": "79798"
      },
      {
        "name": "Höfen an der Enz",
        "postalCode": "75339"
      },
      {
        "name": "Sandhausen",
        "postalCode": "69207"
      },
      {
        "name": "Tengen",
        "postalCode": "78250"
      },
      {
        "name": "Empfingen",
        "postalCode": "72186"
      },
      {
        "name": "Geislingen",
        "postalCode": "72351"
      },
      {
        "name": "Angelbachtal",
        "postalCode": "74918"
      },
      {
        "name": "Wurmlingen",
        "postalCode": "78573"
      },
      {
        "name": "Heiligkreuzsteinach",
        "postalCode": "69253"
      },
      {
        "name": "Meckesheim",
        "postalCode": "74909"
      },
      {
        "name": "Gäufelden",
        "postalCode": "71126"
      },
      {
        "name": "Hausen am Tann",
        "postalCode": "72361"
      },
      {
        "name": "Eppingen",
        "postalCode": "75031"
      },
      {
        "name": "Spechbach",
        "postalCode": "74937"
      },
      {
        "name": "Hirrlingen",
        "postalCode": "72145"
      },
      {
        "name": "Weissach",
        "postalCode": "71287"
      },
      {
        "name": "Beuron",
        "postalCode": "88631"
      },
      {
        "name": "Schwarzach",
        "postalCode": "74869"
      },
      {
        "name": "Mössingen",
        "postalCode": "72116"
      },
      {
        "name": "Hüffenhardt",
        "postalCode": "74928"
      },
      {
        "name": "Winterlingen",
        "postalCode": "72474"
      },
      {
        "name": "Reichenau",
        "postalCode": "78479"
      },
      {
        "name": "Inzigkofen",
        "postalCode": "72514"
      },
      {
        "name": "Elztal",
        "postalCode": "74834"
      },
      {
        "name": "Stuttgart",
        "postalCode": "70173"
      },
      {
        "name": "Steinheim, Murr",
        "postalCode": "71711"
      },
      {
        "name": "Lichtenstein",
        "postalCode": "72805"
      },
      {
        "name": "Schefflenz",
        "postalCode": "74850"
      },
      {
        "name": "Wendlingen am Neckar",
        "postalCode": "73240"
      },
      {
        "name": "Ertingen",
        "postalCode": "88521"
      },
      {
        "name": "Michelbach an der Bilz",
        "postalCode": "74544"
      },
      {
        "name": "Göggingen",
        "postalCode": "73571"
      },
      {
        "name": "Leutkirch im Allgäu",
        "postalCode": "88299"
      },
      {
        "name": "Neuler",
        "postalCode": "73491"
      },
      {
        "name": "Au (Breisgau)",
        "postalCode": "79280"
      },
      {
        "name": "Schutterwald",
        "postalCode": "77746"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79104"
      },
      {
        "name": "Ortenberg",
        "postalCode": "77799"
      },
      {
        "name": "Gengenbach",
        "postalCode": "77723"
      },
      {
        "name": "Sankt Peter",
        "postalCode": "79271"
      },
      {
        "name": "Schönwald im Schwarzwald",
        "postalCode": "78141"
      },
      {
        "name": "Au am Rhein",
        "postalCode": "76474"
      },
      {
        "name": "Bischweier",
        "postalCode": "76476"
      },
      {
        "name": "Weisenbach",
        "postalCode": "76599"
      },
      {
        "name": "Ettlingen",
        "postalCode": "76275"
      },
      {
        "name": "Ahorn",
        "postalCode": "74744"
      },
      {
        "name": "Tettnang",
        "postalCode": "88069"
      },
      {
        "name": "Kressbronn am Bodensee",
        "postalCode": "88079"
      },
      {
        "name": "Welzheim",
        "postalCode": "73642"
      },
      {
        "name": "Hohenstadt/Drackenstein",
        "postalCode": "73345"
      },
      {
        "name": "Fischingen",
        "postalCode": "79592"
      },
      {
        "name": "Freiburg im Breisgau",
        "postalCode": "79110"
      },
      {
        "name": "Bad Überkingen",
        "postalCode": "73337"
      },
      {
        "name": "Wolfegg",
        "postalCode": "88364"
      },
      {
        "name": "Ehingen (Donau), Lauterach",
        "postalCode": "89584"
      },
      {
        "name": "Erolzheim",
        "postalCode": "88453"
      },
      {
        "name": "Oberkochen",
        "postalCode": "73447"
      },
      {
        "name": "Enzklösterle",
        "postalCode": "75337"
      },
      {
        "name": "Hüfingen",
        "postalCode": "78183"
      },
      {
        "name": "Hockenheim",
        "postalCode": "68766"
      },
      {
        "name": "Hirschberg an der Bergstraße",
        "postalCode": "69493"
      },
      {
        "name": "Pforzheim",
        "postalCode": "75181"
      },
      {
        "name": "Gechingen",
        "postalCode": "75391"
      },
      {
        "name": "Epfenbach",
        "postalCode": "74925"
      },
      {
        "name": "Sindelfingen",
        "postalCode": "71067"
      },
      {
        "name": "Jungingen",
        "postalCode": "72417"
      },
      {
        "name": "Gomaringen",
        "postalCode": "72810"
      },
      {
        "name": "Bietigheim-Bissingen",
        "postalCode": "74321"
      },
      {
        "name": "Möglingen",
        "postalCode": "71696"
      },
      {
        "name": "Altenriet",
        "postalCode": "72657"
      },
      {
        "name": "Erlenbach",
        "postalCode": "74235"
      },
      {
        "name": "Engstingen",
        "postalCode": "72829"
      },
      {
        "name": "Esslingen am Neckar",
        "postalCode": "73733"
      },
      {
        "name": "Osterburken",
        "postalCode": "74706"
      },
      {
        "name": "Remshalden",
        "postalCode": "73630"
      },
      {
        "name": "Sasbachwalden",
        "postalCode": "77887"
      },
      {
        "name": "Waldshut-Tiengen",
        "postalCode": "79761"
      },
      {
        "name": "Ötigheim",
        "postalCode": "76470"
      },
      {
        "name": "Schiltach",
        "postalCode": "77761"
      },
      {
        "name": "Wutöschingen",
        "postalCode": "79793"
      },
      {
        "name": "Klettgau",
        "postalCode": "79771"
      },
      {
        "name": "Loßburg",
        "postalCode": "72290"
      },
      {
        "name": "Auenwald",
        "postalCode": "71549"
      },
      {
        "name": "Kaisersbach",
        "postalCode": "73667"
      },
      {
        "name": "Lörrach",
        "postalCode": "79539"
      },
      {
        "name": "Bötzingen",
        "postalCode": "79268"
      },
      {
        "name": "Gottenheim",
        "postalCode": "79288"
      },
      {
        "name": "Sölden",
        "postalCode": "79294"
      },
      {
        "name": "Emmendingen",
        "postalCode": "79312"
      },
      {
        "name": "Utzenfeld",
        "postalCode": "79694"
      },
      {
        "name": "Todtmoos",
        "postalCode": "79682"
      },
      {
        "name": "Sasbach",
        "postalCode": "77880"
      }
    ],
    "09":
    [
      {
        "name": "Kist, Irtenberger Wald",
        "postalCode": "97270"
      },
      {
        "name": "Erlabrunn",
        "postalCode": "97250"
      },
      {
        "name": "Geroldshausen",
        "postalCode": "97256"
      },
      {
        "name": "Burkardroth",
        "postalCode": "97705"
      },
      {
        "name": "Röthenbach (Allgäu)",
        "postalCode": "88167"
      },
      {
        "name": "Theilheim",
        "postalCode": "97288"
      },
      {
        "name": "Bad Bocklet",
        "postalCode": "97708"
      },
      {
        "name": "Bergtheim, Oberpleichfeld",
        "postalCode": "97241"
      },
      {
        "name": "Frickenhausen",
        "postalCode": "97252"
      },
      {
        "name": "Blaichach",
        "postalCode": "87544"
      },
      {
        "name": "Kolitzheim",
        "postalCode": "97509"
      },
      {
        "name": "Bubesheim",
        "postalCode": "89347"
      },
      {
        "name": "Egg an der Günz",
        "postalCode": "87743"
      },
      {
        "name": "Schonungen",
        "postalCode": "97453"
      },
      {
        "name": "Sulzfeld",
        "postalCode": "97633"
      },
      {
        "name": "Dürrwangen",
        "postalCode": "91602"
      },
      {
        "name": "Markt Bibart",
        "postalCode": "91477"
      },
      {
        "name": "Dingolshausen",
        "postalCode": "97497"
      },
      {
        "name": "Kirchheim in Schwaben",
        "postalCode": "87757"
      },
      {
        "name": "Winterbach",
        "postalCode": "89368"
      },
      {
        "name": "Aschaffenburg",
        "postalCode": "63741"
      },
      {
        "name": "Sulzbach am Main",
        "postalCode": "63834"
      },
      {
        "name": "Eschau",
        "postalCode": "63863"
      },
      {
        "name": "Kirchensittenbach",
        "postalCode": "91241"
      },
      {
        "name": "München",
        "postalCode": "80999"
      },
      {
        "name": "Hummeltal",
        "postalCode": "95503"
      },
      {
        "name": "München",
        "postalCode": "81373"
      },
      {
        "name": "München",
        "postalCode": "81369"
      },
      {
        "name": "Königstein",
        "postalCode": "92281"
      },
      {
        "name": "München",
        "postalCode": "80805"
      },
      {
        "name": "Goldkronach",
        "postalCode": "95497"
      },
      {
        "name": "Tegernsee",
        "postalCode": "83684"
      },
      {
        "name": "Wellheim",
        "postalCode": "91809"
      },
      {
        "name": "Althegnenberg",
        "postalCode": "82278"
      },
      {
        "name": "Oberhausen",
        "postalCode": "86697"
      },
      {
        "name": "Raisting",
        "postalCode": "82399"
      },
      {
        "name": "Effeltrich",
        "postalCode": "91090"
      },
      {
        "name": "Oberschweinbach",
        "postalCode": "82294"
      },
      {
        "name": "Marktzeuln",
        "postalCode": "96275"
      },
      {
        "name": "Altomünster",
        "postalCode": "85250"
      },
      {
        "name": "Allersberg",
        "postalCode": "90584"
      },
      {
        "name": "Walchensee",
        "postalCode": "82432"
      },
      {
        "name": "Iffeldorf",
        "postalCode": "82393"
      },
      {
        "name": "Marktrodach",
        "postalCode": "96364"
      },
      {
        "name": "Lutzingen",
        "postalCode": "89440"
      },
      {
        "name": "Zusmarshausen",
        "postalCode": "86441"
      },
      {
        "name": "Westheim",
        "postalCode": "91747"
      },
      {
        "name": "Großaitingen",
        "postalCode": "86845"
      },
      {
        "name": "Gessertshausen",
        "postalCode": "86459"
      },
      {
        "name": "Langerringen",
        "postalCode": "86853"
      },
      {
        "name": "Mitteleschenbach",
        "postalCode": "91734"
      },
      {
        "name": "Landsberg a. Lech",
        "postalCode": "86899"
      },
      {
        "name": "Frensdorf",
        "postalCode": "96158"
      },
      {
        "name": "Alesheim",
        "postalCode": "91793"
      },
      {
        "name": "Peiting",
        "postalCode": "86971"
      },
      {
        "name": "Vilgertshofen",
        "postalCode": "86946"
      },
      {
        "name": "Rain",
        "postalCode": "86641"
      },
      {
        "name": "Scheßlitz",
        "postalCode": "96110"
      },
      {
        "name": "Dörfles-Esbach",
        "postalCode": "96487"
      },
      {
        "name": "Gammelsdorf",
        "postalCode": "85408"
      },
      {
        "name": "Tuntenhausen",
        "postalCode": "83104"
      },
      {
        "name": "Eching",
        "postalCode": "84174"
      },
      {
        "name": "Landshut",
        "postalCode": "84034"
      },
      {
        "name": "Kiefersfelden",
        "postalCode": "83088"
      },
      {
        "name": "Flintsbach a. Inn",
        "postalCode": "83126"
      },
      {
        "name": "Weiden in der OPf., Theisseil",
        "postalCode": "92637"
      },
      {
        "name": "Thalmassing",
        "postalCode": "93107"
      },
      {
        "name": "Regensburg",
        "postalCode": "93057"
      },
      {
        "name": "Schirmitz",
        "postalCode": "92718"
      },
      {
        "name": "Riedering",
        "postalCode": "83083"
      },
      {
        "name": "Unterwössen",
        "postalCode": "83246"
      },
      {
        "name": "Kienberg",
        "postalCode": "83361"
      },
      {
        "name": "Reit im Winkl",
        "postalCode": "83242"
      },
      {
        "name": "Schönsee",
        "postalCode": "92539"
      },
      {
        "name": "Traunreut",
        "postalCode": "83301"
      },
      {
        "name": "Mamming",
        "postalCode": "94437"
      },
      {
        "name": "Pleiskirchen",
        "postalCode": "84568"
      },
      {
        "name": "Waging a. See",
        "postalCode": "83329"
      },
      {
        "name": "Straßkirchen",
        "postalCode": "94342"
      },
      {
        "name": "Kirchdorf a. Inn",
        "postalCode": "84375"
      },
      {
        "name": "Pfarrkirchen",
        "postalCode": "84347"
      },
      {
        "name": "Marktschellenberg",
        "postalCode": "83487"
      },
      {
        "name": "Schöfweg",
        "postalCode": "94572"
      },
      {
        "name": "Außernzell",
        "postalCode": "94532"
      },
      {
        "name": "Eppenschlag",
        "postalCode": "94536"
      },
      {
        "name": "Passau",
        "postalCode": "94034"
      },
      {
        "name": "Waldkirchen",
        "postalCode": "94065"
      },
      {
        "name": "Obernzell",
        "postalCode": "94130"
      },
      {
        "name": "Oberleichtersbach",
        "postalCode": "97789"
      },
      {
        "name": "Schondra",
        "postalCode": "97795"
      },
      {
        "name": "Würzburg",
        "postalCode": "97080"
      },
      {
        "name": "Würzburg",
        "postalCode": "97070"
      },
      {
        "name": "Oberelsbach",
        "postalCode": "97656"
      },
      {
        "name": "Altenstadt",
        "postalCode": "89281"
      },
      {
        "name": "Legau",
        "postalCode": "87764"
      },
      {
        "name": "Pleß",
        "postalCode": "87773"
      },
      {
        "name": "Benningen",
        "postalCode": "87734"
      },
      {
        "name": "Winterrieden",
        "postalCode": "87785"
      },
      {
        "name": "Dinkelsbühl",
        "postalCode": "91550"
      },
      {
        "name": "Mellrichstadt",
        "postalCode": "97638"
      },
      {
        "name": "Feuchtwangen",
        "postalCode": "91555"
      },
      {
        "name": "Grettstadt",
        "postalCode": "97508"
      },
      {
        "name": "Ziertheim",
        "postalCode": "89446"
      },
      {
        "name": "Dillingen a.d. Donau",
        "postalCode": "89407"
      },
      {
        "name": "Salgen",
        "postalCode": "87775"
      },
      {
        "name": "Miltenberg",
        "postalCode": "63897"
      },
      {
        "name": "Geiselbach",
        "postalCode": "63826"
      },
      {
        "name": "Mespelbrunn",
        "postalCode": "63875"
      },
      {
        "name": "Döhlau",
        "postalCode": "95182"
      },
      {
        "name": "Rottenburg a.d. Laaber",
        "postalCode": "84056"
      },
      {
        "name": "Brannenburg",
        "postalCode": "83098"
      },
      {
        "name": "Landshut, Altdorf",
        "postalCode": "84032"
      },
      {
        "name": "Wernberg-Köblitz",
        "postalCode": "92533"
      },
      {
        "name": "Landshut",
        "postalCode": "84036"
      },
      {
        "name": "Vogtareuth",
        "postalCode": "83569"
      },
      {
        "name": "Hohenberg a.d. Eger",
        "postalCode": "95691"
      },
      {
        "name": "Konnersreuth",
        "postalCode": "95692"
      },
      {
        "name": "Waldthurn",
        "postalCode": "92727"
      },
      {
        "name": "Tännesberg",
        "postalCode": "92723"
      },
      {
        "name": "Pfatter",
        "postalCode": "93102"
      },
      {
        "name": "Gars am Inn",
        "postalCode": "83546"
      },
      {
        "name": "Neukirchen-Balbini",
        "postalCode": "92445"
      },
      {
        "name": "Traunstein",
        "postalCode": "83278"
      },
      {
        "name": "Ascha",
        "postalCode": "94347"
      },
      {
        "name": "Konzell",
        "postalCode": "94357"
      },
      {
        "name": "Wonneberg",
        "postalCode": "83379"
      },
      {
        "name": "Gleißenberg",
        "postalCode": "93477"
      },
      {
        "name": "Marktl",
        "postalCode": "84533"
      },
      {
        "name": "Teisnach",
        "postalCode": "94244"
      },
      {
        "name": "Zwiesel",
        "postalCode": "94227"
      },
      {
        "name": "Innernzell",
        "postalCode": "94548"
      },
      {
        "name": "Röhrmoos",
        "postalCode": "85244"
      },
      {
        "name": "Vierkirchen",
        "postalCode": "85256"
      },
      {
        "name": "München",
        "postalCode": "81247"
      },
      {
        "name": "München",
        "postalCode": "80639"
      },
      {
        "name": "München",
        "postalCode": "81371"
      },
      {
        "name": "Guttenberg",
        "postalCode": "95358"
      },
      {
        "name": "Schweitenkirchen",
        "postalCode": "85301"
      },
      {
        "name": "München",
        "postalCode": "80803"
      },
      {
        "name": "Neufahrn b. Freising",
        "postalCode": "85376"
      },
      {
        "name": "München",
        "postalCode": "81925"
      },
      {
        "name": "Illschwang",
        "postalCode": "92278"
      },
      {
        "name": "Haar",
        "postalCode": "85540"
      },
      {
        "name": "Moosinning",
        "postalCode": "85452"
      },
      {
        "name": "Neustadt a. Kulm",
        "postalCode": "95514"
      },
      {
        "name": "Trabitz",
        "postalCode": "92724"
      },
      {
        "name": "Kastl",
        "postalCode": "95506"
      },
      {
        "name": "Wildenberg",
        "postalCode": "93359"
      },
      {
        "name": "Weilersbach",
        "postalCode": "91365"
      },
      {
        "name": "Pressig",
        "postalCode": "96332"
      },
      {
        "name": "Ahorntal",
        "postalCode": "95491"
      },
      {
        "name": "Aitrang",
        "postalCode": "87648"
      },
      {
        "name": "Burgpreppach",
        "postalCode": "97496"
      },
      {
        "name": "Wiedergeltingen",
        "postalCode": "86879"
      },
      {
        "name": "Kirchlauter",
        "postalCode": "96166"
      },
      {
        "name": "Seßlach",
        "postalCode": "96145"
      },
      {
        "name": "Reckendorf",
        "postalCode": "96182"
      },
      {
        "name": "Genderkingen",
        "postalCode": "86682"
      },
      {
        "name": "Spalt",
        "postalCode": "91174"
      },
      {
        "name": "Kinsau",
        "postalCode": "86981"
      },
      {
        "name": "Penzing",
        "postalCode": "86929"
      },
      {
        "name": "Lautertal",
        "postalCode": "96486"
      },
      {
        "name": "Fürth",
        "postalCode": "90762"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90451"
      },
      {
        "name": "Röhrnbach",
        "postalCode": "94133"
      },
      {
        "name": "Büchlberg",
        "postalCode": "94124"
      },
      {
        "name": "Weiler-Simmerberg",
        "postalCode": "88171"
      },
      {
        "name": "Ulm",
        "postalCode": "89081"
      },
      {
        "name": "Fladungen",
        "postalCode": "97650"
      },
      {
        "name": "Ippesheim",
        "postalCode": "97258"
      },
      {
        "name": "Poppenhausen",
        "postalCode": "97490"
      },
      {
        "name": "Oerlenbach",
        "postalCode": "97714"
      },
      {
        "name": "Münnerstadt",
        "postalCode": "97702"
      },
      {
        "name": "Wettringen",
        "postalCode": "91631"
      },
      {
        "name": "Buchenberg",
        "postalCode": "87474"
      },
      {
        "name": "Immenstadt im Allgäu",
        "postalCode": "87509"
      },
      {
        "name": "Insingen",
        "postalCode": "91610"
      },
      {
        "name": "Ohrenbach",
        "postalCode": "91620"
      },
      {
        "name": "Hohenroth",
        "postalCode": "97618"
      },
      {
        "name": "Kleinlangheim",
        "postalCode": "97355"
      },
      {
        "name": "Hawangen",
        "postalCode": "87749"
      },
      {
        "name": "Ebershausen",
        "postalCode": "86491"
      },
      {
        "name": "Untrasried",
        "postalCode": "87496"
      },
      {
        "name": "Oy-Mittelberg",
        "postalCode": "87466"
      },
      {
        "name": "Thannhausen",
        "postalCode": "86470"
      },
      {
        "name": "Gerolfingen",
        "postalCode": "91726"
      },
      {
        "name": "Poxdorf",
        "postalCode": "91099"
      },
      {
        "name": "Mittelstetten",
        "postalCode": "82293"
      },
      {
        "name": "Neunkirchen a. Brand",
        "postalCode": "91077"
      },
      {
        "name": "Wendelstein",
        "postalCode": "90530"
      },
      {
        "name": "Neuburg an der Donau",
        "postalCode": "86633"
      },
      {
        "name": "Igensdorf",
        "postalCode": "91338"
      },
      {
        "name": "Aufseß",
        "postalCode": "91347"
      },
      {
        "name": "Obersöchering",
        "postalCode": "82395"
      },
      {
        "name": "Schiltberg",
        "postalCode": "86576"
      },
      {
        "name": "Buxheim",
        "postalCode": "85114"
      },
      {
        "name": "Antdorf",
        "postalCode": "82387"
      },
      {
        "name": "Pentenried",
        "postalCode": "82349"
      },
      {
        "name": "Mühlhausen",
        "postalCode": "92360"
      },
      {
        "name": "Hepberg",
        "postalCode": "85120"
      },
      {
        "name": "Seubersdorf i.d. OPf.",
        "postalCode": "92358"
      },
      {
        "name": "Vohburg a.d. Donau",
        "postalCode": "85088"
      },
      {
        "name": "Attenkirchen",
        "postalCode": "85395"
      },
      {
        "name": "Höhenkirchen-Siegertsbrunn",
        "postalCode": "85635"
      },
      {
        "name": "Feldkirchen",
        "postalCode": "85622"
      },
      {
        "name": "Volkenschwand",
        "postalCode": "84106"
      },
      {
        "name": "Markt Schwaben",
        "postalCode": "85570"
      },
      {
        "name": "Pielenhofen",
        "postalCode": "93188"
      },
      {
        "name": "Schwandorf",
        "postalCode": "92421"
      },
      {
        "name": "Waldershof",
        "postalCode": "95679"
      },
      {
        "name": "Kolbermoor",
        "postalCode": "83059"
      },
      {
        "name": "Rosenheim",
        "postalCode": "83024"
      },
      {
        "name": "Pechbrunn",
        "postalCode": "95701"
      },
      {
        "name": "Störnstein",
        "postalCode": "92721"
      },
      {
        "name": "Gars a. Inn",
        "postalCode": "83559"
      },
      {
        "name": "Wiesent",
        "postalCode": "93109"
      },
      {
        "name": "Waidhaus",
        "postalCode": "92726"
      },
      {
        "name": "Aiterhofen",
        "postalCode": "94330"
      },
      {
        "name": "Nußdorf",
        "postalCode": "83365"
      },
      {
        "name": "Falkenfels",
        "postalCode": "94350"
      },
      {
        "name": "Waffenbrunn",
        "postalCode": "93494"
      },
      {
        "name": "Haibach",
        "postalCode": "94353"
      },
      {
        "name": "Chamerau",
        "postalCode": "93466"
      },
      {
        "name": "Wurmannsquick",
        "postalCode": "84329"
      },
      {
        "name": "Arnstorf",
        "postalCode": "94424"
      },
      {
        "name": "Roßbach",
        "postalCode": "94439"
      },
      {
        "name": "Aicha vorm Wald",
        "postalCode": "94529"
      },
      {
        "name": "Marktoberdorf",
        "postalCode": "87616"
      },
      {
        "name": "Diespeck",
        "postalCode": "91456"
      },
      {
        "name": "Kaufbeuren",
        "postalCode": "87600"
      },
      {
        "name": "Füssen",
        "postalCode": "87629"
      },
      {
        "name": "Megesheim",
        "postalCode": "86750"
      },
      {
        "name": "Merkendorf",
        "postalCode": "91732"
      },
      {
        "name": "Gerhardshofen",
        "postalCode": "91466"
      },
      {
        "name": "Muhr a. See",
        "postalCode": "91735"
      },
      {
        "name": "Diedorf",
        "postalCode": "86420"
      },
      {
        "name": "Monheim",
        "postalCode": "86653"
      },
      {
        "name": "Buchdorf",
        "postalCode": "86675"
      },
      {
        "name": "Herzogenaurach",
        "postalCode": "91074"
      },
      {
        "name": "Erlangen",
        "postalCode": "91058"
      },
      {
        "name": "Breitenberg",
        "postalCode": "94139"
      },
      {
        "name": "Glattbach",
        "postalCode": "63864"
      },
      {
        "name": "Erlenbach a.Main",
        "postalCode": "63906"
      },
      {
        "name": "Weibersbrunn, Rohrbrunner Forst",
        "postalCode": "63879"
      },
      {
        "name": "Rothenbuch, Rothenbucher Forst",
        "postalCode": "63860"
      },
      {
        "name": "Hafenlohr, Rothenbuch",
        "postalCode": "97840"
      },
      {
        "name": "Rechtenbach",
        "postalCode": "97848"
      },
      {
        "name": "Esselbach",
        "postalCode": "97839"
      },
      {
        "name": "Neuendorf",
        "postalCode": "97788"
      },
      {
        "name": "Königsdorf",
        "postalCode": "82549"
      },
      {
        "name": "Wallenfels",
        "postalCode": "96346"
      },
      {
        "name": "München",
        "postalCode": "80995"
      },
      {
        "name": "München",
        "postalCode": "80935"
      },
      {
        "name": "München",
        "postalCode": "81671"
      },
      {
        "name": "Otterfing",
        "postalCode": "83624"
      },
      {
        "name": "München",
        "postalCode": "81829"
      },
      {
        "name": "Berg",
        "postalCode": "95180"
      },
      {
        "name": "Amberg",
        "postalCode": "92224"
      },
      {
        "name": "Ihrlerstein",
        "postalCode": "93346"
      },
      {
        "name": "Immenreuth",
        "postalCode": "95505"
      },
      {
        "name": "Schwarzenbach a.d. Saale",
        "postalCode": "95126"
      },
      {
        "name": "Tröstau",
        "postalCode": "95709"
      },
      {
        "name": "Kallmünz",
        "postalCode": "93183"
      },
      {
        "name": "Duggendorf",
        "postalCode": "93182"
      },
      {
        "name": "Farchant",
        "postalCode": "82490"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90469"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90491"
      },
      {
        "name": "Herrsching a. Ammersee",
        "postalCode": "82211"
      },
      {
        "name": "Schöngeising",
        "postalCode": "82296"
      },
      {
        "name": "Burgthann",
        "postalCode": "90559"
      },
      {
        "name": "Pottenstein",
        "postalCode": "91278"
      },
      {
        "name": "Waldbrunn, Irtenberger Wald",
        "postalCode": "97295"
      },
      {
        "name": "Kleinrinderfeld",
        "postalCode": "97271"
      },
      {
        "name": "Margetshöchheim",
        "postalCode": "97276"
      },
      {
        "name": "Bad Kissingen",
        "postalCode": "97688"
      },
      {
        "name": "Aub",
        "postalCode": "97239"
      },
      {
        "name": "Sonthofen",
        "postalCode": "87527"
      },
      {
        "name": "Schopfloch",
        "postalCode": "91626"
      },
      {
        "name": "Ottobeuren",
        "postalCode": "87724"
      },
      {
        "name": "Theres",
        "postalCode": "97531"
      },
      {
        "name": "Michelau i. Steigerwald, Hundelshausen",
        "postalCode": "97513"
      },
      {
        "name": "Obernzenn",
        "postalCode": "91619"
      },
      {
        "name": "Nördlingen",
        "postalCode": "86720"
      },
      {
        "name": "Hofheim i. UFr.",
        "postalCode": "97461"
      },
      {
        "name": "Dinkelscherben",
        "postalCode": "86424"
      },
      {
        "name": "Bayrischzell",
        "postalCode": "83735"
      },
      {
        "name": "Teugn",
        "postalCode": "93356"
      },
      {
        "name": "Regensburg",
        "postalCode": "93053"
      },
      {
        "name": "Obertraubling",
        "postalCode": "93083"
      },
      {
        "name": "Arzberg",
        "postalCode": "95659"
      },
      {
        "name": "Schirnding",
        "postalCode": "95706"
      },
      {
        "name": "Breitbrunn a. Chiemsee",
        "postalCode": "83254"
      },
      {
        "name": "Winklarn",
        "postalCode": "92559"
      },
      {
        "name": "Falkenberg",
        "postalCode": "84326"
      },
      {
        "name": "Neuötting",
        "postalCode": "84524"
      },
      {
        "name": "Reischach",
        "postalCode": "84571"
      },
      {
        "name": "Mitterskirchen",
        "postalCode": "84335"
      },
      {
        "name": "Sankt Englmar",
        "postalCode": "94379"
      },
      {
        "name": "Zenting",
        "postalCode": "94579"
      },
      {
        "name": "Kirchdorf i. Wald",
        "postalCode": "94261"
      },
      {
        "name": "Sankt Oswald",
        "postalCode": "94568"
      },
      {
        "name": "Kleinheubach, Rüdenau",
        "postalCode": "63924"
      },
      {
        "name": "Heinrichsthal",
        "postalCode": "63871"
      },
      {
        "name": "Tussenhausen",
        "postalCode": "86874"
      },
      {
        "name": "Seeg",
        "postalCode": "87637"
      },
      {
        "name": "Maroldsweisach",
        "postalCode": "96126"
      },
      {
        "name": "Türkheim",
        "postalCode": "86842"
      },
      {
        "name": "Schönbrunn i. Steigerwald",
        "postalCode": "96185"
      },
      {
        "name": "Ustersbach",
        "postalCode": "86514"
      },
      {
        "name": "Schwabmünchen",
        "postalCode": "86830"
      },
      {
        "name": "Polsingen",
        "postalCode": "91805"
      },
      {
        "name": "Rodach b. Coburg",
        "postalCode": "96476"
      },
      {
        "name": "Hagenbüchach",
        "postalCode": "91469"
      },
      {
        "name": "Lauter",
        "postalCode": "96169"
      },
      {
        "name": "Neusäß",
        "postalCode": "86356"
      },
      {
        "name": "Westendorf, Kühlenthal",
        "postalCode": "86707"
      },
      {
        "name": "Markt Berolzheim",
        "postalCode": "91801"
      },
      {
        "name": "Affing",
        "postalCode": "86444"
      },
      {
        "name": "Pettstadt",
        "postalCode": "96175"
      },
      {
        "name": "Augsburg",
        "postalCode": "86161"
      },
      {
        "name": "Büchenbach",
        "postalCode": "91186"
      },
      {
        "name": "Lohr a. Main",
        "postalCode": "97816"
      },
      {
        "name": "Mittelsinn",
        "postalCode": "97785"
      },
      {
        "name": "Großostheim",
        "postalCode": "63762"
      },
      {
        "name": "Wörth a.Main",
        "postalCode": "63939"
      },
      {
        "name": "Aschaffenburg",
        "postalCode": "63739"
      },
      {
        "name": "Leidersbach",
        "postalCode": "63849"
      },
      {
        "name": "Motten",
        "postalCode": "97786"
      },
      {
        "name": "Riedenberg",
        "postalCode": "97792"
      },
      {
        "name": "Bieberehren",
        "postalCode": "97243"
      },
      {
        "name": "Kellmünz a.d. Iller",
        "postalCode": "89293"
      },
      {
        "name": "Bastheim",
        "postalCode": "97654"
      },
      {
        "name": "Dittelbrunn",
        "postalCode": "97456"
      },
      {
        "name": "Üchtelhausen",
        "postalCode": "97532"
      },
      {
        "name": "Günzburg",
        "postalCode": "89312"
      },
      {
        "name": "Lauben",
        "postalCode": "87761"
      },
      {
        "name": "Westerheim",
        "postalCode": "87784"
      },
      {
        "name": "Deisenhausen",
        "postalCode": "86489"
      },
      {
        "name": "Sulzheim",
        "postalCode": "97529"
      },
      {
        "name": "Burtenbach",
        "postalCode": "89349"
      },
      {
        "name": "Unterthingau",
        "postalCode": "87647"
      },
      {
        "name": "Lengenwang",
        "postalCode": "87663"
      },
      {
        "name": "Bidingen",
        "postalCode": "87651"
      },
      {
        "name": "Höchstadt a.d.Aisch",
        "postalCode": "91315"
      },
      {
        "name": "Hurlach",
        "postalCode": "86857"
      },
      {
        "name": "Rattelsdorf",
        "postalCode": "96179"
      },
      {
        "name": "Augsburg",
        "postalCode": "86157"
      },
      {
        "name": "Scheuring",
        "postalCode": "86937"
      },
      {
        "name": "Augsburg",
        "postalCode": "86154"
      },
      {
        "name": "Ebensfeld",
        "postalCode": "96250"
      },
      {
        "name": "Bamberg",
        "postalCode": "96050"
      },
      {
        "name": "Tagmersheim",
        "postalCode": "86704"
      },
      {
        "name": "Neubrunn",
        "postalCode": "97277"
      },
      {
        "name": "Schäftlarn",
        "postalCode": "82069"
      },
      {
        "name": "Baar-Ebenhausen",
        "postalCode": "85107"
      },
      {
        "name": "Ingolstadt",
        "postalCode": "85053"
      },
      {
        "name": "Pommelsbrunn",
        "postalCode": "91224"
      },
      {
        "name": "Kösching",
        "postalCode": "85092"
      },
      {
        "name": "Etzelwang",
        "postalCode": "92268"
      },
      {
        "name": "Oberdolling",
        "postalCode": "85129"
      },
      {
        "name": "München",
        "postalCode": "80802"
      },
      {
        "name": "München",
        "postalCode": "81927"
      },
      {
        "name": "Hemau",
        "postalCode": "93155"
      },
      {
        "name": "Weyarn",
        "postalCode": "83629"
      },
      {
        "name": "Ebnath",
        "postalCode": "95683"
      },
      {
        "name": "Oberaudorf",
        "postalCode": "83080"
      },
      {
        "name": "Windischeschenbach",
        "postalCode": "92670"
      },
      {
        "name": "Söchtenau",
        "postalCode": "83139"
      },
      {
        "name": "Adlkofen",
        "postalCode": "84166"
      },
      {
        "name": "Waldsassen",
        "postalCode": "95652"
      },
      {
        "name": "Bad Endorf",
        "postalCode": "83093"
      },
      {
        "name": "Neualbenreuth",
        "postalCode": "95698"
      },
      {
        "name": "Aholfing",
        "postalCode": "94345"
      },
      {
        "name": "Stamsried",
        "postalCode": "93491"
      },
      {
        "name": "Frontenhausen",
        "postalCode": "84160"
      },
      {
        "name": "Halsbach",
        "postalCode": "84553"
      },
      {
        "name": "Wallersdorf",
        "postalCode": "94522"
      },
      {
        "name": "Runding",
        "postalCode": "93486"
      },
      {
        "name": "Niederwinkling",
        "postalCode": "94559"
      },
      {
        "name": "Grafenwiesen",
        "postalCode": "93479"
      },
      {
        "name": "Julbach",
        "postalCode": "84387"
      },
      {
        "name": "Tittling",
        "postalCode": "94104"
      },
      {
        "name": "Grainet",
        "postalCode": "94143"
      },
      {
        "name": "Weilheim i. OB",
        "postalCode": "82362"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90409"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90478"
      },
      {
        "name": "Eching a. Ammersee",
        "postalCode": "82279"
      },
      {
        "name": "Nassenfels",
        "postalCode": "85128"
      },
      {
        "name": "Egweil",
        "postalCode": "85116"
      },
      {
        "name": "Sulzemoos",
        "postalCode": "85254"
      },
      {
        "name": "Sulzemoos",
        "postalCode": "85259"
      },
      {
        "name": "Erdweg",
        "postalCode": "85253"
      },
      {
        "name": "Weißenbrunn",
        "postalCode": "96369"
      },
      {
        "name": "Penzberg",
        "postalCode": "82377"
      },
      {
        "name": "Böhmfeld",
        "postalCode": "85113"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90471"
      },
      {
        "name": "Pollenfeld",
        "postalCode": "85131"
      },
      {
        "name": "Schwaig b. Nürnberg, Behringersdorfer Forst",
        "postalCode": "90571"
      },
      {
        "name": "Tutzing",
        "postalCode": "82327"
      },
      {
        "name": "Olching",
        "postalCode": "82140"
      },
      {
        "name": "Weißenbrunn",
        "postalCode": "96369"
      },
      {
        "name": "Lenggries",
        "postalCode": "83661"
      },
      {
        "name": "Berglern",
        "postalCode": "85459"
      },
      {
        "name": "Pastetten",
        "postalCode": "85669"
      },
      {
        "name": "Pressath",
        "postalCode": "92690"
      },
      {
        "name": "Röslau",
        "postalCode": "95195"
      },
      {
        "name": "Hausen",
        "postalCode": "93345"
      },
      {
        "name": "Pullenreuth",
        "postalCode": "95704"
      },
      {
        "name": "Schnaittenbach",
        "postalCode": "92253"
      },
      {
        "name": "Langquaid",
        "postalCode": "84085"
      },
      {
        "name": "Isen",
        "postalCode": "84424"
      },
      {
        "name": "Regensburg",
        "postalCode": "93049"
      },
      {
        "name": "Herrngiersdorf",
        "postalCode": "84097"
      },
      {
        "name": "Ramerberg",
        "postalCode": "83561"
      },
      {
        "name": "Neustadt a.d. Waldnaab",
        "postalCode": "92660"
      },
      {
        "name": "Bechtsried",
        "postalCode": "92699"
      },
      {
        "name": "Eiselfing",
        "postalCode": "83549"
      },
      {
        "name": "Aufhausen",
        "postalCode": "93089"
      },
      {
        "name": "Aschau i. Chiemgau",
        "postalCode": "83229"
      },
      {
        "name": "Bach an der Donau",
        "postalCode": "93090"
      },
      {
        "name": "Brennberg",
        "postalCode": "93179"
      },
      {
        "name": "Obing",
        "postalCode": "83119"
      },
      {
        "name": "Walderbach",
        "postalCode": "93194"
      },
      {
        "name": "Taufkirchen",
        "postalCode": "84574"
      },
      {
        "name": "Thanstein",
        "postalCode": "92554"
      },
      {
        "name": "Polling",
        "postalCode": "84570"
      },
      {
        "name": "Garching a.d. Alz",
        "postalCode": "84518"
      },
      {
        "name": "St. Georgen",
        "postalCode": "83368"
      },
      {
        "name": "Traitsching",
        "postalCode": "93455"
      },
      {
        "name": "Traunreut",
        "postalCode": "83374"
      },
      {
        "name": "Kastl",
        "postalCode": "84556"
      },
      {
        "name": "Simbach",
        "postalCode": "94436"
      },
      {
        "name": "Otzing",
        "postalCode": "94563"
      },
      {
        "name": "Bad Reichenhall",
        "postalCode": "83435"
      },
      {
        "name": "Egglham",
        "postalCode": "84385"
      },
      {
        "name": "Tschirn",
        "postalCode": "96367"
      },
      {
        "name": "Presseck",
        "postalCode": "95355"
      },
      {
        "name": "Hummeltal",
        "postalCode": "95503"
      },
      {
        "name": "München",
        "postalCode": "81475"
      },
      {
        "name": "Oberschleißheim",
        "postalCode": "85764"
      },
      {
        "name": "München",
        "postalCode": "80993"
      },
      {
        "name": "Creußen",
        "postalCode": "95473"
      },
      {
        "name": "München",
        "postalCode": "81545"
      },
      {
        "name": "Auerbach i.d. OPf.",
        "postalCode": "91275"
      },
      {
        "name": "München",
        "postalCode": "80933"
      },
      {
        "name": "Sauerlach",
        "postalCode": "82054"
      },
      {
        "name": "Emtmannsberg",
        "postalCode": "95517"
      },
      {
        "name": "Pliening",
        "postalCode": "85652"
      },
      {
        "name": "Nittendorf",
        "postalCode": "93152"
      },
      {
        "name": "Bütthard",
        "postalCode": "97244"
      },
      {
        "name": "Zell a. Main",
        "postalCode": "97299"
      },
      {
        "name": "Retzstadt",
        "postalCode": "97282"
      },
      {
        "name": "Ochsenfurt",
        "postalCode": "97199"
      },
      {
        "name": "Buxheim",
        "postalCode": "87740"
      },
      {
        "name": "Windelsbach",
        "postalCode": "91635"
      },
      {
        "name": "Waldstetten",
        "postalCode": "89367"
      },
      {
        "name": "Wilburgstetten",
        "postalCode": "91634"
      },
      {
        "name": "Flachslanden",
        "postalCode": "91604"
      },
      {
        "name": "Reimlingen",
        "postalCode": "86756"
      },
      {
        "name": "Welden",
        "postalCode": "86465"
      },
      {
        "name": "Schwenningen",
        "postalCode": "89443"
      },
      {
        "name": "Wilhelmsdorf",
        "postalCode": "91489"
      },
      {
        "name": "Roßtal",
        "postalCode": "90574"
      },
      {
        "name": "Gundelsheim",
        "postalCode": "96163"
      },
      {
        "name": "Hirschaid",
        "postalCode": "96114"
      },
      {
        "name": "Zapfendorf",
        "postalCode": "96199"
      },
      {
        "name": "Hofstetten",
        "postalCode": "86928"
      },
      {
        "name": "Wessobrunn",
        "postalCode": "82405"
      },
      {
        "name": "Ehekirchen",
        "postalCode": "86676"
      },
      {
        "name": "Philippsreut",
        "postalCode": "94158"
      },
      {
        "name": "Elsenfeld",
        "postalCode": "63820"
      },
      {
        "name": "Amorbach",
        "postalCode": "63916"
      },
      {
        "name": "Wiesen, Wiesener Forst",
        "postalCode": "63831"
      },
      {
        "name": "Sachsen b. Ansbach",
        "postalCode": "91623"
      },
      {
        "name": "Mauerstetten",
        "postalCode": "87665"
      },
      {
        "name": "Wolframs-Eschenbach",
        "postalCode": "91639"
      },
      {
        "name": "Lamerdingen",
        "postalCode": "86862"
      },
      {
        "name": "Pommersfelden",
        "postalCode": "96178"
      },
      {
        "name": "Ammerndorf",
        "postalCode": "90614"
      },
      {
        "name": "Abenberg",
        "postalCode": "91183"
      },
      {
        "name": "Schwabach",
        "postalCode": "91126"
      },
      {
        "name": "Grainau",
        "postalCode": "82491"
      },
      {
        "name": "Lichtenfels",
        "postalCode": "96215"
      },
      {
        "name": "Aura i. Sinngrund",
        "postalCode": "97773"
      },
      {
        "name": "Rothenfels",
        "postalCode": "97851"
      },
      {
        "name": "Burgsinn",
        "postalCode": "97775"
      },
      {
        "name": "Roden",
        "postalCode": "97849"
      },
      {
        "name": "Rieneck",
        "postalCode": "97794"
      },
      {
        "name": "Heideck",
        "postalCode": "91180"
      },
      {
        "name": "Schwaigen",
        "postalCode": "82445"
      },
      {
        "name": "Stadelhofen",
        "postalCode": "96187"
      },
      {
        "name": "Mammendorf",
        "postalCode": "82291"
      },
      {
        "name": "Pretzfeld",
        "postalCode": "91362"
      },
      {
        "name": "Jachenau",
        "postalCode": "83676"
      },
      {
        "name": "Altdorf bei Nürnberg",
        "postalCode": "90518"
      },
      {
        "name": "Berg",
        "postalCode": "82335"
      },
      {
        "name": "Gröbenzell",
        "postalCode": "82194"
      },
      {
        "name": "Scheidegg",
        "postalCode": "88175"
      },
      {
        "name": "Neu-Ulm",
        "postalCode": "89231"
      },
      {
        "name": "Kürnach",
        "postalCode": "97273"
      },
      {
        "name": "Lautrach",
        "postalCode": "87763"
      },
      {
        "name": "Geldersheim",
        "postalCode": "97505"
      },
      {
        "name": "Rothenburg ob der Tauber",
        "postalCode": "91541"
      },
      {
        "name": "Fellheim",
        "postalCode": "87748"
      },
      {
        "name": "Unterroth",
        "postalCode": "89299"
      },
      {
        "name": "Waltenhofen",
        "postalCode": "87448"
      },
      {
        "name": "Röthlein",
        "postalCode": "97520"
      },
      {
        "name": "Schwarzach a. Main",
        "postalCode": "97359"
      },
      {
        "name": "Breitenthal",
        "postalCode": "86488"
      },
      {
        "name": "Lauben",
        "postalCode": "87493"
      },
      {
        "name": "Erkheim",
        "postalCode": "87746"
      },
      {
        "name": "Aurach",
        "postalCode": "91589"
      },
      {
        "name": "Markt Bibart",
        "postalCode": "91477"
      },
      {
        "name": "Wertach",
        "postalCode": "87497"
      },
      {
        "name": "Kammlach",
        "postalCode": "87754"
      },
      {
        "name": "Langfurth",
        "postalCode": "91731"
      },
      {
        "name": "Balzhausen",
        "postalCode": "86483"
      },
      {
        "name": "Neustadt a.d.Aisch",
        "postalCode": "91413"
      },
      {
        "name": "Hof",
        "postalCode": "95028"
      },
      {
        "name": "Regnitzlosau",
        "postalCode": "95194"
      },
      {
        "name": "Altenstadt a.d. Waldnaab",
        "postalCode": "92665"
      },
      {
        "name": "Maxhütte-Haidhof",
        "postalCode": "93142"
      },
      {
        "name": "Schechen",
        "postalCode": "83135"
      },
      {
        "name": "Rechtmehring",
        "postalCode": "83562"
      },
      {
        "name": "Stephanskirchen",
        "postalCode": "83071"
      },
      {
        "name": "Neufraunhofen",
        "postalCode": "84181"
      },
      {
        "name": "Reichertsheim",
        "postalCode": "84437"
      },
      {
        "name": "Trausnitz",
        "postalCode": "92555"
      },
      {
        "name": "Niedermurach",
        "postalCode": "92545"
      },
      {
        "name": "Eggstätt",
        "postalCode": "83125"
      },
      {
        "name": "Moosbach",
        "postalCode": "92709"
      },
      {
        "name": "Landau a.d. Isar",
        "postalCode": "94405"
      },
      {
        "name": "Eichendorf",
        "postalCode": "94428"
      },
      {
        "name": "Mariaposching",
        "postalCode": "94553"
      },
      {
        "name": "Bischofswiesen",
        "postalCode": "83483"
      },
      {
        "name": "Lohberg",
        "postalCode": "93470"
      },
      {
        "name": "Kirchberg",
        "postalCode": "94259"
      },
      {
        "name": "Tettenweis",
        "postalCode": "94167"
      },
      {
        "name": "Riedlhütte",
        "postalCode": "94566"
      },
      {
        "name": "Reichertshofen",
        "postalCode": "85084"
      },
      {
        "name": "Neuhaus a.d.Pegnitz",
        "postalCode": "91284"
      },
      {
        "name": "Grünwald",
        "postalCode": "82031"
      },
      {
        "name": "München",
        "postalCode": "80339"
      },
      {
        "name": "Harsdorf",
        "postalCode": "95499"
      },
      {
        "name": "Birgland",
        "postalCode": "92262"
      },
      {
        "name": "München",
        "postalCode": "80331"
      },
      {
        "name": "Marktleugast",
        "postalCode": "95352"
      },
      {
        "name": "Riedenburg",
        "postalCode": "93339"
      },
      {
        "name": "München",
        "postalCode": "81679"
      },
      {
        "name": "Hohenbrunn",
        "postalCode": "85662"
      },
      {
        "name": "Haar",
        "postalCode": "85540"
      },
      {
        "name": "Ensdorf",
        "postalCode": "92266"
      },
      {
        "name": "Brand",
        "postalCode": "95682"
      },
      {
        "name": "Schmidmühlen",
        "postalCode": "92287"
      },
      {
        "name": "Sandberg",
        "postalCode": "97657"
      },
      {
        "name": "Nordheim v.d. Rhön",
        "postalCode": "97647"
      },
      {
        "name": "Waigolshausen",
        "postalCode": "97534"
      },
      {
        "name": "Trunkelsberg",
        "postalCode": "87779"
      },
      {
        "name": "Holzgünz",
        "postalCode": "87752"
      },
      {
        "name": "Syrgenstein",
        "postalCode": "89428"
      },
      {
        "name": "Kammeltal",
        "postalCode": "89358"
      },
      {
        "name": "Amerdingen",
        "postalCode": "86735"
      },
      {
        "name": "Geiselwind",
        "postalCode": "96160"
      },
      {
        "name": "Röfingen",
        "postalCode": "89365"
      },
      {
        "name": "Apfeltrach",
        "postalCode": "87742"
      },
      {
        "name": "Dietersheim",
        "postalCode": "91463"
      },
      {
        "name": "Hösbach",
        "postalCode": "63768"
      },
      {
        "name": "Waldaschaff, Waldaschaffer Forst",
        "postalCode": "63857"
      },
      {
        "name": "Markt Erlbach",
        "postalCode": "91459"
      },
      {
        "name": "Rügland",
        "postalCode": "91622"
      },
      {
        "name": "Ornbau",
        "postalCode": "91737"
      },
      {
        "name": "Lichtenau",
        "postalCode": "91586"
      },
      {
        "name": "Huisheim",
        "postalCode": "86685"
      },
      {
        "name": "Stettfeld",
        "postalCode": "96188"
      },
      {
        "name": "Biberbach",
        "postalCode": "86485"
      },
      {
        "name": "Fuchstal",
        "postalCode": "86925"
      },
      {
        "name": "Untermerzbach",
        "postalCode": "96190"
      },
      {
        "name": "Oberottmarshausen",
        "postalCode": "86507"
      },
      {
        "name": "Augsburg",
        "postalCode": "86179"
      },
      {
        "name": "Heroldsbach",
        "postalCode": "91336"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90441"
      },
      {
        "name": "Steinfeld",
        "postalCode": "97854"
      },
      {
        "name": "Berg b.Neumarkt i.d.OPf.",
        "postalCode": "92348"
      },
      {
        "name": "Glashütten",
        "postalCode": "95496"
      },
      {
        "name": "Manching",
        "postalCode": "85077"
      },
      {
        "name": "Oberschleißheim",
        "postalCode": "85764"
      },
      {
        "name": "München",
        "postalCode": "80634"
      },
      {
        "name": "Paunzhausen",
        "postalCode": "85307"
      },
      {
        "name": "Allershausen",
        "postalCode": "85391"
      },
      {
        "name": "Eching",
        "postalCode": "85386"
      },
      {
        "name": "München",
        "postalCode": "80538"
      },
      {
        "name": "Helmbrechts",
        "postalCode": "95233"
      },
      {
        "name": "Neubiberg",
        "postalCode": "85579"
      },
      {
        "name": "Kirchdorf a.d. Amper",
        "postalCode": "85414"
      },
      {
        "name": "Sulzbach-Rosenberg",
        "postalCode": "92237"
      },
      {
        "name": "Gmund a. Tegernsee",
        "postalCode": "83703"
      },
      {
        "name": "Fichtelberg",
        "postalCode": "95686"
      },
      {
        "name": "Attenhofen",
        "postalCode": "84091"
      },
      {
        "name": "Irschenberg",
        "postalCode": "83737"
      },
      {
        "name": "Moosburg a.d. Isar",
        "postalCode": "85368"
      },
      {
        "name": "Rieden",
        "postalCode": "92286"
      },
      {
        "name": "Sinzing",
        "postalCode": "93161"
      },
      {
        "name": "Bad Feilnbach",
        "postalCode": "83075"
      },
      {
        "name": "Forstern",
        "postalCode": "85659"
      },
      {
        "name": "Hohenthann",
        "postalCode": "84098"
      },
      {
        "name": "Maitenbeth",
        "postalCode": "83558"
      },
      {
        "name": "Haag i. OB",
        "postalCode": "83527"
      },
      {
        "name": "Nußdorf a. Inn",
        "postalCode": "83131"
      },
      {
        "name": "Zeitlarn",
        "postalCode": "93197"
      },
      {
        "name": "Weiding",
        "postalCode": "92557"
      },
      {
        "name": "Feichten a.d. Alz",
        "postalCode": "84550"
      },
      {
        "name": "Fridolfing",
        "postalCode": "83413"
      },
      {
        "name": "Blaibach",
        "postalCode": "93476"
      },
      {
        "name": "Plattling",
        "postalCode": "94447"
      },
      {
        "name": "Osterhofen",
        "postalCode": "94486"
      },
      {
        "name": "Aldersbach",
        "postalCode": "94501"
      },
      {
        "name": "Lalling",
        "postalCode": "94551"
      },
      {
        "name": "Bayerbach",
        "postalCode": "94137"
      },
      {
        "name": "Thurmansbang",
        "postalCode": "94169"
      },
      {
        "name": "Grafenau",
        "postalCode": "94481"
      },
      {
        "name": "Eurasburg",
        "postalCode": "86495"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90461"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90489"
      },
      {
        "name": "Murnau a. Staffelsee",
        "postalCode": "82418"
      },
      {
        "name": "Rohrenfels",
        "postalCode": "86701"
      },
      {
        "name": "Hiltpoltstein",
        "postalCode": "91355"
      },
      {
        "name": "Kasendorf",
        "postalCode": "95359"
      },
      {
        "name": "Germering",
        "postalCode": "82110"
      },
      {
        "name": "Ottensoos",
        "postalCode": "91242"
      },
      {
        "name": "Salzweg",
        "postalCode": "94121"
      },
      {
        "name": "Hohenau",
        "postalCode": "94545"
      },
      {
        "name": "Kottgeisering",
        "postalCode": "82288"
      },
      {
        "name": "Ebermannstadt",
        "postalCode": "91320"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90471"
      },
      {
        "name": "Spatzenhausen",
        "postalCode": "82447"
      },
      {
        "name": "Eberfing",
        "postalCode": "82390"
      },
      {
        "name": "Wonsees",
        "postalCode": "96197"
      },
      {
        "name": "Waischenfeld",
        "postalCode": "91344"
      },
      {
        "name": "Schnaittach",
        "postalCode": "91220"
      },
      {
        "name": "Bergkirchen",
        "postalCode": "85232"
      },
      {
        "name": "Kinding",
        "postalCode": "85125"
      },
      {
        "name": "Mainleus",
        "postalCode": "95336"
      },
      {
        "name": "Kochel a. See",
        "postalCode": "82431"
      },
      {
        "name": "Puchheim",
        "postalCode": "82178"
      },
      {
        "name": "Reichenschwand",
        "postalCode": "91244"
      },
      {
        "name": "Kirchenlamitz",
        "postalCode": "95158"
      },
      {
        "name": "Buch a. Buchrain",
        "postalCode": "85656"
      },
      {
        "name": "Steinhöring",
        "postalCode": "85643"
      },
      {
        "name": "Etzenricht",
        "postalCode": "92694"
      },
      {
        "name": "Nabburg",
        "postalCode": "92507"
      },
      {
        "name": "Leuchtenberg",
        "postalCode": "92705"
      },
      {
        "name": "Altendorf",
        "postalCode": "92540"
      },
      {
        "name": "Laberweinting",
        "postalCode": "84082"
      },
      {
        "name": "Kröning",
        "postalCode": "84178"
      },
      {
        "name": "Oberbergkirchen",
        "postalCode": "84564"
      },
      {
        "name": "Teunz",
        "postalCode": "92552"
      },
      {
        "name": "Pleystein",
        "postalCode": "92714"
      },
      {
        "name": "Chiemsee",
        "postalCode": "83256"
      },
      {
        "name": "Aham",
        "postalCode": "84168"
      },
      {
        "name": "Dingolfing",
        "postalCode": "84130"
      },
      {
        "name": "Rötz",
        "postalCode": "92444"
      },
      {
        "name": "Stadlern",
        "postalCode": "92549"
      },
      {
        "name": "Willmering",
        "postalCode": "93497"
      },
      {
        "name": "Tann",
        "postalCode": "84367"
      },
      {
        "name": "Johanniskirchen",
        "postalCode": "84381"
      },
      {
        "name": "Patersdorf",
        "postalCode": "94265"
      },
      {
        "name": "Wittibreut",
        "postalCode": "84384"
      },
      {
        "name": "Kößlarn",
        "postalCode": "94149"
      },
      {
        "name": "Ruhstorf a.d. Rott",
        "postalCode": "94099"
      },
      {
        "name": "Neuburg a. Inn",
        "postalCode": "94127"
      },
      {
        "name": "Perlesreut",
        "postalCode": "94157"
      },
      {
        "name": "Schöllkrippen, Blankenbach",
        "postalCode": "63825"
      },
      {
        "name": "Heigenbrücken",
        "postalCode": "63869"
      },
      {
        "name": "Hafenlohr, Rothenbuch",
        "postalCode": "97840"
      },
      {
        "name": "Hergatz",
        "postalCode": "88145"
      },
      {
        "name": "Giebelstadt",
        "postalCode": "97232"
      },
      {
        "name": "Oberreute",
        "postalCode": "88179"
      },
      {
        "name": "Eibelstadt",
        "postalCode": "97246"
      },
      {
        "name": "Uffenheim",
        "postalCode": "97215"
      },
      {
        "name": "Scheyern",
        "postalCode": "85298"
      },
      {
        "name": "Sengenthal",
        "postalCode": "92369"
      },
      {
        "name": "Steinwiesen",
        "postalCode": "96349"
      },
      {
        "name": "München",
        "postalCode": "81243"
      },
      {
        "name": "Karlsfeld",
        "postalCode": "85757"
      },
      {
        "name": "Alfeld",
        "postalCode": "91236"
      },
      {
        "name": "Großmehring",
        "postalCode": "85098"
      },
      {
        "name": "München",
        "postalCode": "81477"
      },
      {
        "name": "Paunzhausen",
        "postalCode": "85307"
      },
      {
        "name": "München",
        "postalCode": "80804"
      },
      {
        "name": "Reichersbeuern",
        "postalCode": "83677"
      },
      {
        "name": "Painten",
        "postalCode": "93351"
      },
      {
        "name": "Parsdorf/Hergolding",
        "postalCode": "85599"
      },
      {
        "name": "Sparneck",
        "postalCode": "95234"
      },
      {
        "name": "Hörgertshausen",
        "postalCode": "85413"
      },
      {
        "name": "Oettingen i. Bay.",
        "postalCode": "86732"
      },
      {
        "name": "Mönchsdeggingen",
        "postalCode": "86751"
      },
      {
        "name": "Ettringen",
        "postalCode": "86833"
      },
      {
        "name": "Ebelsbach",
        "postalCode": "97500"
      },
      {
        "name": "Amberg",
        "postalCode": "86854"
      },
      {
        "name": "Mertingen",
        "postalCode": "86690"
      },
      {
        "name": "Bamberg",
        "postalCode": "96047"
      },
      {
        "name": "Rohr",
        "postalCode": "91189"
      },
      {
        "name": "Pleinfeld",
        "postalCode": "91785"
      },
      {
        "name": "Augsburg",
        "postalCode": "86150"
      },
      {
        "name": "Hallerndorf",
        "postalCode": "91352"
      },
      {
        "name": "Pappenheim",
        "postalCode": "91788"
      },
      {
        "name": "Garmisch-Partenkirchen (Schneefernerhaus)",
        "postalCode": "82475"
      },
      {
        "name": "Hollenbach",
        "postalCode": "86568"
      },
      {
        "name": "Oberstaufen",
        "postalCode": "87534"
      },
      {
        "name": "Euerdorf",
        "postalCode": "97717"
      },
      {
        "name": "Dettelbach",
        "postalCode": "97337"
      },
      {
        "name": "Buch",
        "postalCode": "89290"
      },
      {
        "name": "Ungerhausen",
        "postalCode": "87781"
      },
      {
        "name": "Markt Nordheim",
        "postalCode": "91478"
      },
      {
        "name": "Dombühl",
        "postalCode": "91601"
      },
      {
        "name": "Sugenheim",
        "postalCode": "91484"
      },
      {
        "name": "Prichsenstadt",
        "postalCode": "97357"
      },
      {
        "name": "Neuburg a.d. Kammel",
        "postalCode": "86476"
      },
      {
        "name": "Bad Windsheim",
        "postalCode": "91438"
      },
      {
        "name": "Oberschwarzach",
        "postalCode": "97516"
      },
      {
        "name": "Münsterhausen",
        "postalCode": "86505"
      },
      {
        "name": "Wieseth",
        "postalCode": "91632"
      },
      {
        "name": "Knetzgau",
        "postalCode": "97478"
      },
      {
        "name": "Bichl",
        "postalCode": "83673"
      },
      {
        "name": "Neumarkt i.d. OPf.",
        "postalCode": "92318"
      },
      {
        "name": "Deining",
        "postalCode": "92364"
      },
      {
        "name": "München",
        "postalCode": "80636"
      },
      {
        "name": "Neufahrn b. Freising",
        "postalCode": "85375"
      },
      {
        "name": "Weidenberg, Kirchenpingarten",
        "postalCode": "95466"
      },
      {
        "name": "Hahnbach",
        "postalCode": "92256"
      },
      {
        "name": "Ammerthal",
        "postalCode": "92260"
      },
      {
        "name": "Kümmersbruck",
        "postalCode": "92245"
      },
      {
        "name": "Deuerling",
        "postalCode": "93180"
      },
      {
        "name": "Wörth",
        "postalCode": "85457"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90419"
      },
      {
        "name": "Pinzberg",
        "postalCode": "91361"
      },
      {
        "name": "Jesenwang",
        "postalCode": "82287"
      },
      {
        "name": "Krün",
        "postalCode": "82493"
      },
      {
        "name": "Wörthsee",
        "postalCode": "82237"
      },
      {
        "name": "Kronach",
        "postalCode": "96317"
      },
      {
        "name": "Plankenfels",
        "postalCode": "95515"
      },
      {
        "name": "Gaimersheim",
        "postalCode": "85080"
      },
      {
        "name": "Kleinostheim",
        "postalCode": "63801"
      },
      {
        "name": "Freudenberg, Collenberg",
        "postalCode": "97896"
      },
      {
        "name": "Neunkirchen",
        "postalCode": "63930"
      },
      {
        "name": "Münchsteinach",
        "postalCode": "91481"
      },
      {
        "name": "Gutenstetten",
        "postalCode": "91468"
      },
      {
        "name": "Mickhausen",
        "postalCode": "86866"
      },
      {
        "name": "Buttenwiesen",
        "postalCode": "86647"
      },
      {
        "name": "Bobingen",
        "postalCode": "86399"
      },
      {
        "name": "Gnotzheim",
        "postalCode": "91728"
      },
      {
        "name": "Kaltental",
        "postalCode": "87662"
      },
      {
        "name": "Kaisheim",
        "postalCode": "86687"
      },
      {
        "name": "Pfofeld",
        "postalCode": "91738"
      },
      {
        "name": "Pürgen",
        "postalCode": "86932"
      },
      {
        "name": "Weißenburg i. Bay.",
        "postalCode": "91781"
      },
      {
        "name": "Finning",
        "postalCode": "86923"
      },
      {
        "name": "Esselbach",
        "postalCode": "97839"
      },
      {
        "name": "Bad Aibling",
        "postalCode": "83043"
      },
      {
        "name": "Schwarzenfeld",
        "postalCode": "92521"
      },
      {
        "name": "Regensburg",
        "postalCode": "93055"
      },
      {
        "name": "Tegernheim",
        "postalCode": "93105"
      },
      {
        "name": "Püchersreuth",
        "postalCode": "92715"
      },
      {
        "name": "Mintraching",
        "postalCode": "93098"
      },
      {
        "name": "Guteneck",
        "postalCode": "92543"
      },
      {
        "name": "Flossenbürg",
        "postalCode": "92696"
      },
      {
        "name": "Pittenhart",
        "postalCode": "83132"
      },
      {
        "name": "Jettenbach",
        "postalCode": "84555"
      },
      {
        "name": "Falkenstein",
        "postalCode": "93167"
      },
      {
        "name": "Seeon-Seebruck",
        "postalCode": "83358"
      },
      {
        "name": "Neukirchen am Teisenberg",
        "postalCode": "83364"
      },
      {
        "name": "Künzing",
        "postalCode": "94550"
      },
      {
        "name": "Rotthalmünster",
        "postalCode": "94094"
      },
      {
        "name": "Thyrnau",
        "postalCode": "94136"
      },
      {
        "name": "Icking",
        "postalCode": "82057"
      },
      {
        "name": "Denkendorf",
        "postalCode": "85095"
      },
      {
        "name": "Straßlach-Dingharting",
        "postalCode": "82064"
      },
      {
        "name": "Hirschbach",
        "postalCode": "92275"
      },
      {
        "name": "Bayreuth",
        "postalCode": "95447"
      },
      {
        "name": "Bindlach",
        "postalCode": "95463"
      },
      {
        "name": "Breitenbrunn",
        "postalCode": "92363"
      },
      {
        "name": "München",
        "postalCode": "81667"
      },
      {
        "name": "Bad Steben",
        "postalCode": "95138"
      },
      {
        "name": "Gefrees",
        "postalCode": "95482"
      },
      {
        "name": "Schauenstein",
        "postalCode": "95197"
      },
      {
        "name": "Hallbergmoos",
        "postalCode": "85399"
      },
      {
        "name": "Siegenburg",
        "postalCode": "93354"
      },
      {
        "name": "Hof",
        "postalCode": "95030"
      },
      {
        "name": "Eglfing",
        "postalCode": "82436"
      },
      {
        "name": "Eschenlohe",
        "postalCode": "82438"
      },
      {
        "name": "Igensdorf",
        "postalCode": "91338"
      },
      {
        "name": "Pyrbaum",
        "postalCode": "90602"
      },
      {
        "name": "Hollfeld",
        "postalCode": "96142"
      },
      {
        "name": "Rückersdorf",
        "postalCode": "90607"
      },
      {
        "name": "Postbauer-Heng",
        "postalCode": "92353"
      },
      {
        "name": "Bellenberg",
        "postalCode": "89287"
      },
      {
        "name": "Marktbreit",
        "postalCode": "97340"
      },
      {
        "name": "Albertshofen",
        "postalCode": "97320"
      },
      {
        "name": "Volkach",
        "postalCode": "97332"
      },
      {
        "name": "Babenhausen",
        "postalCode": "87727"
      },
      {
        "name": "Oberschönegg",
        "postalCode": "87770"
      },
      {
        "name": "Haldenwang",
        "postalCode": "87490"
      },
      {
        "name": "Burgau",
        "postalCode": "89331"
      },
      {
        "name": "Stetten",
        "postalCode": "87778"
      },
      {
        "name": "Ursberg",
        "postalCode": "86513"
      },
      {
        "name": "Pfaffenhausen",
        "postalCode": "87772"
      },
      {
        "name": "Glött",
        "postalCode": "89353"
      },
      {
        "name": "Möttingen",
        "postalCode": "86753"
      },
      {
        "name": "Fischach",
        "postalCode": "86850"
      },
      {
        "name": "Scherstetten",
        "postalCode": "86872"
      },
      {
        "name": "Westendorf",
        "postalCode": "87679"
      },
      {
        "name": "Bernbeuren",
        "postalCode": "86975"
      },
      {
        "name": "Meinheim",
        "postalCode": "91802"
      },
      {
        "name": "Aindling",
        "postalCode": "86447"
      },
      {
        "name": "Rehling",
        "postalCode": "86508"
      },
      {
        "name": "Erlangen",
        "postalCode": "91054"
      },
      {
        "name": "Nonnenhorn",
        "postalCode": "88149"
      },
      {
        "name": "Fraunberg",
        "postalCode": "85447"
      },
      {
        "name": "Gattendorf",
        "postalCode": "95185"
      },
      {
        "name": "Weihmichl",
        "postalCode": "84107"
      },
      {
        "name": "Erbendorf",
        "postalCode": "92681"
      },
      {
        "name": "Bad Alexandersbad",
        "postalCode": "95680"
      },
      {
        "name": "Lengdorf",
        "postalCode": "84435"
      },
      {
        "name": "Dorfen",
        "postalCode": "84405"
      },
      {
        "name": "Mallersdorf-Pfaffenberg",
        "postalCode": "84066"
      },
      {
        "name": "Wackersdorf",
        "postalCode": "92442"
      },
      {
        "name": "Griesstätt",
        "postalCode": "83556"
      },
      {
        "name": "Bodenwöhr",
        "postalCode": "92439"
      },
      {
        "name": "Floß",
        "postalCode": "92685"
      },
      {
        "name": "Wurmsham",
        "postalCode": "84189"
      },
      {
        "name": "Wald",
        "postalCode": "93192"
      },
      {
        "name": "Wallerfing",
        "postalCode": "94574"
      },
      {
        "name": "Arnbruck",
        "postalCode": "93471"
      },
      {
        "name": "Triftern",
        "postalCode": "84371"
      },
      {
        "name": "Marktschellenberg",
        "postalCode": "83487"
      },
      {
        "name": "Regen",
        "postalCode": "94209"
      },
      {
        "name": "Sailauf",
        "postalCode": "63877"
      },
      {
        "name": "Dammbach",
        "postalCode": "63874"
      },
      {
        "name": "Neureichenau",
        "postalCode": "94089"
      },
      {
        "name": "Eurasburg",
        "postalCode": "82547"
      },
      {
        "name": "München",
        "postalCode": "81249"
      },
      {
        "name": "München",
        "postalCode": "81245"
      },
      {
        "name": "Happurg",
        "postalCode": "91230"
      },
      {
        "name": "Ködnitz",
        "postalCode": "95361"
      },
      {
        "name": "Bayreuth",
        "postalCode": "95445"
      },
      {
        "name": "Haimhausen",
        "postalCode": "85778"
      },
      {
        "name": "München",
        "postalCode": "80337"
      },
      {
        "name": "Wolnzach",
        "postalCode": "85283"
      },
      {
        "name": "München",
        "postalCode": "81543"
      },
      {
        "name": "Velburg",
        "postalCode": "92355"
      },
      {
        "name": "Garching b. München",
        "postalCode": "85748"
      },
      {
        "name": "Sachsenkam",
        "postalCode": "83679"
      },
      {
        "name": "Nandlstadt",
        "postalCode": "85405"
      },
      {
        "name": "Neuching",
        "postalCode": "85467"
      },
      {
        "name": "Weißdorf",
        "postalCode": "95237"
      },
      {
        "name": "Mehlmeisel",
        "postalCode": "95694"
      },
      {
        "name": "Fensterbach",
        "postalCode": "92269"
      },
      {
        "name": "Kirchberg",
        "postalCode": "84434"
      },
      {
        "name": "Steinberg",
        "postalCode": "92449"
      },
      {
        "name": "Wiesau",
        "postalCode": "95676"
      },
      {
        "name": "Hagelstadt",
        "postalCode": "93095"
      },
      {
        "name": "Barbing",
        "postalCode": "93092"
      },
      {
        "name": "Velden",
        "postalCode": "84149"
      },
      {
        "name": "Rimsting",
        "postalCode": "83253"
      },
      {
        "name": "Moosthenning",
        "postalCode": "84164"
      },
      {
        "name": "Töging a. Inn",
        "postalCode": "84513"
      },
      {
        "name": "Palling",
        "postalCode": "83349"
      },
      {
        "name": "Taching a. See",
        "postalCode": "83373"
      },
      {
        "name": "Rattenberg",
        "postalCode": "94371"
      },
      {
        "name": "Burghausen",
        "postalCode": "84489"
      },
      {
        "name": "Schönau",
        "postalCode": "84337"
      },
      {
        "name": "Metten",
        "postalCode": "94526"
      },
      {
        "name": "Winzer",
        "postalCode": "94577"
      },
      {
        "name": "Griesbach i. Rottal",
        "postalCode": "94086"
      },
      {
        "name": "Hammelburg",
        "postalCode": "97762"
      },
      {
        "name": "Eisingen",
        "postalCode": "97249"
      },
      {
        "name": "Veitshöchheim",
        "postalCode": "97209"
      },
      {
        "name": "Holzheim",
        "postalCode": "89291"
      },
      {
        "name": "Burglauer",
        "postalCode": "97724"
      },
      {
        "name": "Schweinfurt",
        "postalCode": "97424"
      },
      {
        "name": "Sommerach",
        "postalCode": "97334"
      },
      {
        "name": "Gebsattel",
        "postalCode": "91607"
      },
      {
        "name": "Rannungen",
        "postalCode": "97517"
      },
      {
        "name": "Schweinfurt",
        "postalCode": "97421"
      },
      {
        "name": "Lachen",
        "postalCode": "87760"
      },
      {
        "name": "Sennfeld",
        "postalCode": "97526"
      },
      {
        "name": "Ronsberg",
        "postalCode": "87671"
      },
      {
        "name": "Wittislingen",
        "postalCode": "89426"
      },
      {
        "name": "Lehrberg",
        "postalCode": "91611"
      },
      {
        "name": "Haßfurt",
        "postalCode": "97437"
      },
      {
        "name": "Pfronten",
        "postalCode": "87459"
      },
      {
        "name": "Görisried",
        "postalCode": "87657"
      },
      {
        "name": "Weilbach",
        "postalCode": "63937"
      },
      {
        "name": "Hausen",
        "postalCode": "63840"
      },
      {
        "name": "Bischbrunn",
        "postalCode": "97836"
      },
      {
        "name": "Schernfeld",
        "postalCode": "85132"
      },
      {
        "name": "Dollnstein",
        "postalCode": "91795"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90443"
      },
      {
        "name": "Türkenfeld",
        "postalCode": "82299"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90455"
      },
      {
        "name": "Redwitz a.d. Rodach",
        "postalCode": "96257"
      },
      {
        "name": "Gilching",
        "postalCode": "82205"
      },
      {
        "name": "Seeshaupt",
        "postalCode": "82402"
      },
      {
        "name": "Bernried",
        "postalCode": "82347"
      },
      {
        "name": "Winkelhaid",
        "postalCode": "90610"
      },
      {
        "name": "Kipfenberg",
        "postalCode": "85110"
      },
      {
        "name": "Emmering",
        "postalCode": "82275"
      },
      {
        "name": "Berching",
        "postalCode": "92334"
      },
      {
        "name": "Auhausen",
        "postalCode": "86736"
      },
      {
        "name": "Eltmann",
        "postalCode": "97483"
      },
      {
        "name": "Bruckberg",
        "postalCode": "91590"
      },
      {
        "name": "Bonstetten",
        "postalCode": "86486"
      },
      {
        "name": "Oberostendorf",
        "postalCode": "86869"
      },
      {
        "name": "Rentweinsdorf",
        "postalCode": "96184"
      },
      {
        "name": "Walsdorf",
        "postalCode": "96194"
      },
      {
        "name": "Igling",
        "postalCode": "86859"
      },
      {
        "name": "Schwabsoien",
        "postalCode": "86987"
      },
      {
        "name": "Cadolzburg",
        "postalCode": "90556"
      },
      {
        "name": "Schmiechen",
        "postalCode": "86511"
      },
      {
        "name": "Saulgrub",
        "postalCode": "82442"
      },
      {
        "name": "Rennertshofen",
        "postalCode": "86643"
      },
      {
        "name": "Solnhofen",
        "postalCode": "91807"
      },
      {
        "name": "Litzendorf",
        "postalCode": "96123"
      },
      {
        "name": "Pöttmes",
        "postalCode": "86554"
      },
      {
        "name": "Burgheim",
        "postalCode": "86666"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90431"
      },
      {
        "name": "Eggolsheim",
        "postalCode": "91330"
      },
      {
        "name": "Aichach",
        "postalCode": "86551"
      },
      {
        "name": "Langensendelbach",
        "postalCode": "91094"
      },
      {
        "name": "Langenpreising",
        "postalCode": "85465"
      },
      {
        "name": "Burglengenfeld",
        "postalCode": "93133"
      },
      {
        "name": "Rehau",
        "postalCode": "95111"
      },
      {
        "name": "Buch a. Erlbach",
        "postalCode": "84172"
      },
      {
        "name": "Thiersheim",
        "postalCode": "95707"
      },
      {
        "name": "Fuchsmühl",
        "postalCode": "95689"
      },
      {
        "name": "Landshut",
        "postalCode": "84036"
      },
      {
        "name": "Rohrdorf",
        "postalCode": "83101"
      },
      {
        "name": "Pirk",
        "postalCode": "92712"
      },
      {
        "name": "Landshut",
        "postalCode": "84028"
      },
      {
        "name": "Postau",
        "postalCode": "84103"
      },
      {
        "name": "Tännesberg",
        "postalCode": "92723"
      },
      {
        "name": "Geiselhöring",
        "postalCode": "94333"
      },
      {
        "name": "Schleching",
        "postalCode": "83259"
      },
      {
        "name": "Gerzen",
        "postalCode": "84175"
      },
      {
        "name": "Gstadt a. Chiemsee",
        "postalCode": "83257"
      },
      {
        "name": "Loiching",
        "postalCode": "84180"
      },
      {
        "name": "Egglkofen",
        "postalCode": "84546"
      },
      {
        "name": "Gangkofen",
        "postalCode": "84140"
      },
      {
        "name": "Bogen",
        "postalCode": "94327"
      },
      {
        "name": "Mehring",
        "postalCode": "84561"
      },
      {
        "name": "Drachselsried",
        "postalCode": "94256"
      },
      {
        "name": "Weichs",
        "postalCode": "85258"
      },
      {
        "name": "Wolfratshausen",
        "postalCode": "82515"
      },
      {
        "name": "Hebertshausen",
        "postalCode": "85241"
      },
      {
        "name": "München",
        "postalCode": "81375"
      },
      {
        "name": "Untersteinach",
        "postalCode": "95369"
      },
      {
        "name": "Rohrbach",
        "postalCode": "85296"
      },
      {
        "name": "Weigendorf",
        "postalCode": "91249"
      },
      {
        "name": "Kupferberg",
        "postalCode": "95362"
      },
      {
        "name": "München",
        "postalCode": "81673"
      },
      {
        "name": "Parsberg",
        "postalCode": "92331"
      },
      {
        "name": "Feldkirchen",
        "postalCode": "85622"
      },
      {
        "name": "Grasbrunn",
        "postalCode": "85630"
      },
      {
        "name": "Köditz",
        "postalCode": "95189"
      },
      {
        "name": "Adelshofen",
        "postalCode": "82276"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90480"
      },
      {
        "name": "Titting",
        "postalCode": "85135"
      },
      {
        "name": "Altenkunstadt",
        "postalCode": "96264"
      },
      {
        "name": "Walting",
        "postalCode": "85137"
      },
      {
        "name": "Greding",
        "postalCode": "91171"
      },
      {
        "name": "Freystadt",
        "postalCode": "92342"
      },
      {
        "name": "Eichenau",
        "postalCode": "82223"
      },
      {
        "name": "Schwabhausen",
        "postalCode": "85247"
      },
      {
        "name": "Markt Taschendorf",
        "postalCode": "91480"
      },
      {
        "name": "Trautskirchen",
        "postalCode": "90619"
      },
      {
        "name": "Uehlfeld",
        "postalCode": "91486"
      },
      {
        "name": "Oberhaid",
        "postalCode": "96173"
      },
      {
        "name": "Halblech",
        "postalCode": "87642"
      },
      {
        "name": "Baunach",
        "postalCode": "96148"
      },
      {
        "name": "Nordendorf",
        "postalCode": "86695"
      },
      {
        "name": "Adelsdorf",
        "postalCode": "91325"
      },
      {
        "name": "Egling a.d. Paar",
        "postalCode": "86492"
      },
      {
        "name": "Hohenpeißenberg",
        "postalCode": "82383"
      },
      {
        "name": "Rödental",
        "postalCode": "96472"
      },
      {
        "name": "Obergriesbach",
        "postalCode": "86573"
      },
      {
        "name": "Sigmarszell",
        "postalCode": "88138"
      },
      {
        "name": "Memmingen",
        "postalCode": "87700"
      },
      {
        "name": "Boos",
        "postalCode": "87737"
      },
      {
        "name": "Wolfertschwenden",
        "postalCode": "87787"
      },
      {
        "name": "Mellrichstadt",
        "postalCode": "97638"
      },
      {
        "name": "Illesheim",
        "postalCode": "91471"
      },
      {
        "name": "Oberscheinfeld",
        "postalCode": "91483"
      },
      {
        "name": "Wonfurt",
        "postalCode": "97539"
      },
      {
        "name": "Ederheim",
        "postalCode": "86739"
      },
      {
        "name": "Unteregg",
        "postalCode": "87782"
      },
      {
        "name": "Marktoffingen",
        "postalCode": "86748"
      },
      {
        "name": "Rauhenebrach",
        "postalCode": "96181"
      },
      {
        "name": "Goldbach",
        "postalCode": "63773"
      },
      {
        "name": "Stadtprozelten",
        "postalCode": "97909"
      },
      {
        "name": "Wiesthal",
        "postalCode": "97859"
      },
      {
        "name": "Neustadt a. Main",
        "postalCode": "97845"
      },
      {
        "name": "Wartenberg",
        "postalCode": "85456"
      },
      {
        "name": "Reichenbach",
        "postalCode": "93189"
      },
      {
        "name": "Perkam",
        "postalCode": "94368"
      },
      {
        "name": "Michelsneukirchen",
        "postalCode": "93185"
      },
      {
        "name": "Grabenstätt",
        "postalCode": "83355"
      },
      {
        "name": "Töging a. Inn",
        "postalCode": "84513"
      },
      {
        "name": "Winhöring",
        "postalCode": "84543"
      },
      {
        "name": "Kirchweidach",
        "postalCode": "84558"
      },
      {
        "name": "Weiding",
        "postalCode": "93495"
      },
      {
        "name": "Furth i. Wald",
        "postalCode": "93437"
      },
      {
        "name": "Oberpöring",
        "postalCode": "94562"
      },
      {
        "name": "Deggendorf",
        "postalCode": "94469"
      },
      {
        "name": "Neukirchen b. Hl. Blut",
        "postalCode": "93453"
      },
      {
        "name": "Zachenberg",
        "postalCode": "94239"
      },
      {
        "name": "Simbach a. Inn",
        "postalCode": "84359"
      },
      {
        "name": "Bad Birnbach",
        "postalCode": "84364"
      },
      {
        "name": "Fürsteneck",
        "postalCode": "94142"
      },
      {
        "name": "Remlingen",
        "postalCode": "97280"
      },
      {
        "name": "Greußenheim",
        "postalCode": "97259"
      },
      {
        "name": "Thüngershem",
        "postalCode": "97291"
      },
      {
        "name": "Oberthulba",
        "postalCode": "97723"
      },
      {
        "name": "Rottendorf",
        "postalCode": "97228"
      },
      {
        "name": "Hohenroth",
        "postalCode": "97618"
      },
      {
        "name": "Weitnau",
        "postalCode": "87480"
      },
      {
        "name": "Kronburg",
        "postalCode": "87758"
      },
      {
        "name": "Obernbreit",
        "postalCode": "97342"
      },
      {
        "name": "Leipheim",
        "postalCode": "89340"
      },
      {
        "name": "Bergrheinfeld",
        "postalCode": "97493"
      },
      {
        "name": "Wiggensbach",
        "postalCode": "87487"
      },
      {
        "name": "Niederrieden",
        "postalCode": "87767"
      },
      {
        "name": "Kettershausen",
        "postalCode": "86498"
      },
      {
        "name": "Schwebheim",
        "postalCode": "97525"
      },
      {
        "name": "Rettenberg",
        "postalCode": "87549"
      },
      {
        "name": "Bad Hindelang",
        "postalCode": "87541"
      },
      {
        "name": "Lauingen (Donau)",
        "postalCode": "89415"
      },
      {
        "name": "Oberdachstetten",
        "postalCode": "91617"
      },
      {
        "name": "Wildpoldsried",
        "postalCode": "87499"
      },
      {
        "name": "Aidhausen",
        "postalCode": "97491"
      },
      {
        "name": "Friesenried",
        "postalCode": "87654"
      },
      {
        "name": "Baudenbach",
        "postalCode": "91460"
      },
      {
        "name": "Pfaffenhofen a.d. Ilm",
        "postalCode": "85276"
      },
      {
        "name": "Rugendorf",
        "postalCode": "95365"
      },
      {
        "name": "Reichertshausen",
        "postalCode": "85293"
      },
      {
        "name": "München",
        "postalCode": "81377"
      },
      {
        "name": "München",
        "postalCode": "80335"
      },
      {
        "name": "München",
        "postalCode": "81541"
      },
      {
        "name": "Aschheim",
        "postalCode": "85609"
      },
      {
        "name": "Ursensollen",
        "postalCode": "92289"
      },
      {
        "name": "Essing",
        "postalCode": "93343"
      },
      {
        "name": "Baldham",
        "postalCode": "85598"
      },
      {
        "name": "Hausham",
        "postalCode": "83734"
      },
      {
        "name": "Schliersee",
        "postalCode": "83727"
      },
      {
        "name": "Roth",
        "postalCode": "91154"
      },
      {
        "name": "Nennslingen",
        "postalCode": "91790"
      },
      {
        "name": "Wattendorf",
        "postalCode": "96196"
      },
      {
        "name": "Andechs",
        "postalCode": "82346"
      },
      {
        "name": "Weismain",
        "postalCode": "96260"
      },
      {
        "name": "Nürnberg-Feucht, Feuchter Forst",
        "postalCode": "90537"
      },
      {
        "name": "Bergheim",
        "postalCode": "86673"
      },
      {
        "name": "Küps",
        "postalCode": "96328"
      },
      {
        "name": "Stockheim",
        "postalCode": "96342"
      },
      {
        "name": "Gerolsbach",
        "postalCode": "85302"
      },
      {
        "name": "Berngau",
        "postalCode": "92361"
      },
      {
        "name": "Neuhütten",
        "postalCode": "97843"
      },
      {
        "name": "Neuhof a.d.Zenn",
        "postalCode": "90616"
      },
      {
        "name": "Tapfheim",
        "postalCode": "86660"
      },
      {
        "name": "Jengen",
        "postalCode": "86860"
      },
      {
        "name": "Gunzenhausen",
        "postalCode": "91710"
      },
      {
        "name": "Kutzenhausen",
        "postalCode": "86500"
      },
      {
        "name": "Breitbrunn",
        "postalCode": "96151"
      },
      {
        "name": "Buchloe",
        "postalCode": "86807"
      },
      {
        "name": "Stöttwang",
        "postalCode": "87677"
      },
      {
        "name": "Denklingen",
        "postalCode": "86920"
      },
      {
        "name": "Gablingen",
        "postalCode": "86456"
      },
      {
        "name": "Neuendettelsau",
        "postalCode": "91564"
      },
      {
        "name": "Stadtbergen",
        "postalCode": "86391"
      },
      {
        "name": "Schongau",
        "postalCode": "86956"
      },
      {
        "name": "Heßdorf",
        "postalCode": "91093"
      },
      {
        "name": "Baar",
        "postalCode": "86674"
      },
      {
        "name": "Mörnsheim",
        "postalCode": "91804"
      },
      {
        "name": "Georgensgmünd",
        "postalCode": "91166"
      },
      {
        "name": "Windach",
        "postalCode": "86949"
      },
      {
        "name": "Uttenreuth, Marloffstein",
        "postalCode": "91080"
      },
      {
        "name": "Obersinn",
        "postalCode": "97791"
      },
      {
        "name": "Hutthurm",
        "postalCode": "94116"
      },
      {
        "name": "Mauth",
        "postalCode": "94151"
      },
      {
        "name": "Untergriesbach",
        "postalCode": "94107"
      },
      {
        "name": "Jetzendorf",
        "postalCode": "85305"
      },
      {
        "name": "Gräfelfing",
        "postalCode": "82166"
      },
      {
        "name": "München",
        "postalCode": "81539"
      },
      {
        "name": "München",
        "postalCode": "80939"
      },
      {
        "name": "Freising",
        "postalCode": "85354"
      },
      {
        "name": "Edelsfeld",
        "postalCode": "92265"
      },
      {
        "name": "Kelheim",
        "postalCode": "93309"
      },
      {
        "name": "Hohenburg",
        "postalCode": "92277"
      },
      {
        "name": "Hohenfels",
        "postalCode": "92366"
      },
      {
        "name": "Poing",
        "postalCode": "85586"
      },
      {
        "name": "Ebersberg",
        "postalCode": "85560"
      },
      {
        "name": "Weißenstadt",
        "postalCode": "95163"
      },
      {
        "name": "Heroldsberg",
        "postalCode": "90562"
      },
      {
        "name": "Königsfeld",
        "postalCode": "96167"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90475"
      },
      {
        "name": "Burgkunstadt",
        "postalCode": "96224"
      },
      {
        "name": "Schwarzenbruck",
        "postalCode": "90592"
      },
      {
        "name": "Tettau",
        "postalCode": "96355"
      },
      {
        "name": "Großweil",
        "postalCode": "82439"
      },
      {
        "name": "Gauting",
        "postalCode": "82131"
      },
      {
        "name": "Brunnen",
        "postalCode": "86564"
      },
      {
        "name": "Münsing",
        "postalCode": "82541"
      },
      {
        "name": "Obersüßbach",
        "postalCode": "84101"
      },
      {
        "name": "Wunsiedel",
        "postalCode": "95632"
      },
      {
        "name": "Furth",
        "postalCode": "84095"
      },
      {
        "name": "Mantel",
        "postalCode": "92708"
      },
      {
        "name": "Hohenpolding",
        "postalCode": "84432"
      },
      {
        "name": "Pfreimd",
        "postalCode": "92536"
      },
      {
        "name": "Alteglofsheim",
        "postalCode": "93087"
      },
      {
        "name": "Pfakofen",
        "postalCode": "93101"
      },
      {
        "name": "Atting",
        "postalCode": "94348"
      },
      {
        "name": "Marklkofen",
        "postalCode": "84163"
      },
      {
        "name": "Wiesenfelden",
        "postalCode": "94344"
      },
      {
        "name": "Tiefenbach",
        "postalCode": "93464"
      },
      {
        "name": "Siegsdorf",
        "postalCode": "83313"
      },
      {
        "name": "Malgersdorf",
        "postalCode": "84333"
      },
      {
        "name": "Prackenbach",
        "postalCode": "94267"
      },
      {
        "name": "Laufen",
        "postalCode": "83410"
      },
      {
        "name": "Berchtesgaden & Schönau",
        "postalCode": "83471"
      },
      {
        "name": "Niederalteich",
        "postalCode": "94557"
      },
      {
        "name": "Mömlingen",
        "postalCode": "63853"
      },
      {
        "name": "Obernburg a.Main",
        "postalCode": "63785"
      },
      {
        "name": "Schneeberg",
        "postalCode": "63936"
      },
      {
        "name": "Irsee",
        "postalCode": "87660"
      },
      {
        "name": "Walkertshofen",
        "postalCode": "86877"
      },
      {
        "name": "Blindheim",
        "postalCode": "89434"
      },
      {
        "name": "Pfarrweisach",
        "postalCode": "96176"
      },
      {
        "name": "Prem",
        "postalCode": "86984"
      },
      {
        "name": "Asbach-Bäumenheim",
        "postalCode": "86663"
      },
      {
        "name": "Gremsdorf",
        "postalCode": "91350"
      },
      {
        "name": "Schwifting",
        "postalCode": "86940"
      },
      {
        "name": "Röttenbach",
        "postalCode": "91341"
      },
      {
        "name": "Böbing",
        "postalCode": "82389"
      },
      {
        "name": "Rottenbuch",
        "postalCode": "82401"
      },
      {
        "name": "Altendorf",
        "postalCode": "96146"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90427"
      },
      {
        "name": "Missen-Wilhams",
        "postalCode": "87547"
      },
      {
        "name": "Neusitz",
        "postalCode": "91616"
      },
      {
        "name": "Burgbernheim",
        "postalCode": "91593"
      },
      {
        "name": "Medlingen",
        "postalCode": "89441"
      },
      {
        "name": "Lülsfeld",
        "postalCode": "97511"
      },
      {
        "name": "Gundremmingen",
        "postalCode": "89355"
      },
      {
        "name": "Oberkotzau",
        "postalCode": "95145"
      },
      {
        "name": "Kaltenbrunn",
        "postalCode": "92700"
      },
      {
        "name": "Rohr i. NB",
        "postalCode": "93352"
      },
      {
        "name": "Thierstein",
        "postalCode": "95199"
      },
      {
        "name": "Ergoldsbach",
        "postalCode": "84061"
      },
      {
        "name": "Köfering",
        "postalCode": "93096"
      },
      {
        "name": "Donaustauf",
        "postalCode": "93093"
      },
      {
        "name": "Vohenstrauß",
        "postalCode": "92648"
      },
      {
        "name": "Sünching",
        "postalCode": "93104"
      },
      {
        "name": "Mengkofen",
        "postalCode": "84152"
      },
      {
        "name": "Grassau",
        "postalCode": "83224"
      },
      {
        "name": "Mettenheim",
        "postalCode": "84562"
      },
      {
        "name": "Tüßling",
        "postalCode": "84577"
      },
      {
        "name": "Rattiszell",
        "postalCode": "94372"
      },
      {
        "name": "Geratskirchen",
        "postalCode": "84552"
      },
      {
        "name": "Perasdorf",
        "postalCode": "94366"
      },
      {
        "name": "Dietersburg",
        "postalCode": "84378"
      },
      {
        "name": "Saaldorf",
        "postalCode": "83416"
      },
      {
        "name": "Böbrach",
        "postalCode": "94255"
      },
      {
        "name": "Lam",
        "postalCode": "93462"
      },
      {
        "name": "Stubenberg",
        "postalCode": "94166"
      },
      {
        "name": "Bad Füssing",
        "postalCode": "94072"
      },
      {
        "name": "Passau",
        "postalCode": "94036"
      },
      {
        "name": "Ringelai",
        "postalCode": "94160"
      },
      {
        "name": "Engelthal/Offenhausen",
        "postalCode": "91238"
      },
      {
        "name": "Beilngries",
        "postalCode": "92339"
      },
      {
        "name": "Neuried",
        "postalCode": "82061"
      },
      {
        "name": "Pullach i. Isartal",
        "postalCode": "82049"
      },
      {
        "name": "München",
        "postalCode": "81379"
      },
      {
        "name": "Grafengehaig",
        "postalCode": "95356"
      },
      {
        "name": "Mindelstetten",
        "postalCode": "93349"
      },
      {
        "name": "Himmelkron",
        "postalCode": "95502"
      },
      {
        "name": "Marktschorgast",
        "postalCode": "95509"
      },
      {
        "name": "Waakirchen",
        "postalCode": "83666"
      },
      {
        "name": "Brunnthal",
        "postalCode": "85649"
      },
      {
        "name": "Warngau",
        "postalCode": "83627"
      },
      {
        "name": "Edelsfeld",
        "postalCode": "92265"
      },
      {
        "name": "Vorbach",
        "postalCode": "95519"
      },
      {
        "name": "Warmensteinach",
        "postalCode": "95485"
      },
      {
        "name": "Abensberg",
        "postalCode": "93326"
      },
      {
        "name": "Markt Schwaben",
        "postalCode": "85570"
      },
      {
        "name": "Bruckmühl",
        "postalCode": "83052"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90439"
      },
      {
        "name": "Utting a. Ammersee",
        "postalCode": "86919"
      },
      {
        "name": "Uffing a. Staffelsee",
        "postalCode": "82449"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90403"
      },
      {
        "name": "Wielenbach",
        "postalCode": "82407"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90482"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90473"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90411"
      },
      {
        "name": "Eckental",
        "postalCode": "90542"
      },
      {
        "name": "Langenmosen",
        "postalCode": "86571"
      },
      {
        "name": "Aresing",
        "postalCode": "86561"
      },
      {
        "name": "Eitensheim",
        "postalCode": "85117"
      },
      {
        "name": "Obertrubach",
        "postalCode": "91286"
      },
      {
        "name": "Mainaschaff",
        "postalCode": "63814"
      },
      {
        "name": "Mönchberg",
        "postalCode": "63933"
      },
      {
        "name": "Heimbuchenthal",
        "postalCode": "63872"
      },
      {
        "name": "Laufach",
        "postalCode": "63846"
      },
      {
        "name": "Birkenfeld",
        "postalCode": "97834"
      },
      {
        "name": "Bad Brückenau",
        "postalCode": "97769"
      },
      {
        "name": "Gössenheim",
        "postalCode": "97780"
      },
      {
        "name": "Eußenheim",
        "postalCode": "97776"
      },
      {
        "name": "Arnstein",
        "postalCode": "97450"
      },
      {
        "name": "Schönau a.d. Brend",
        "postalCode": "97659"
      },
      {
        "name": "Oberstdorf",
        "postalCode": "87561"
      },
      {
        "name": "Geslau",
        "postalCode": "91608"
      },
      {
        "name": "Rödelsee",
        "postalCode": "97348"
      },
      {
        "name": "Burk",
        "postalCode": "91596"
      },
      {
        "name": "Aitrang",
        "postalCode": "87648"
      },
      {
        "name": "Ziemetshausen",
        "postalCode": "86473"
      },
      {
        "name": "Roßhaupten",
        "postalCode": "87672"
      },
      {
        "name": "Augsburg",
        "postalCode": "86199"
      },
      {
        "name": "Untermeitingen",
        "postalCode": "86836"
      },
      {
        "name": "Unterdießen",
        "postalCode": "86944"
      },
      {
        "name": "Zirndorf",
        "postalCode": "90513"
      },
      {
        "name": "Rottenbuch",
        "postalCode": "82401"
      },
      {
        "name": "Ettal",
        "postalCode": "82488"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90429"
      },
      {
        "name": "Selb",
        "postalCode": "95100"
      },
      {
        "name": "Großkarolinenfeld",
        "postalCode": "83109"
      },
      {
        "name": "Höchstädt",
        "postalCode": "95186"
      },
      {
        "name": "Krummennaab",
        "postalCode": "92703"
      },
      {
        "name": "Ergolding, Landshut",
        "postalCode": "84030"
      },
      {
        "name": "Neufahrn i. NB",
        "postalCode": "84088"
      },
      {
        "name": "Neubeuern",
        "postalCode": "83115"
      },
      {
        "name": "Schwindegg",
        "postalCode": "84419"
      },
      {
        "name": "Bruck i.d. OPf.",
        "postalCode": "92436"
      },
      {
        "name": "Wörth a.d. Isar",
        "postalCode": "84109"
      },
      {
        "name": "Schönberg",
        "postalCode": "84573"
      },
      {
        "name": "Gottfrieding",
        "postalCode": "84177"
      },
      {
        "name": "Oberschneiding",
        "postalCode": "94363"
      },
      {
        "name": "Schwarzach",
        "postalCode": "94374"
      },
      {
        "name": "Bernried",
        "postalCode": "94505"
      },
      {
        "name": "Eschlkam",
        "postalCode": "93458"
      },
      {
        "name": "Buchhofen",
        "postalCode": "94533"
      },
      {
        "name": "Frauenau",
        "postalCode": "94258"
      },
      {
        "name": "Fürstenzell",
        "postalCode": "94081"
      },
      {
        "name": "Schönberg",
        "postalCode": "94513"
      },
      {
        "name": "Kulmbach",
        "postalCode": "95326"
      },
      {
        "name": "Dachau",
        "postalCode": "85221"
      },
      {
        "name": "Neudrossenfeld",
        "postalCode": "95512"
      },
      {
        "name": "Pilsach",
        "postalCode": "92367"
      },
      {
        "name": "Altmannstein",
        "postalCode": "93336"
      },
      {
        "name": "Bayreuth",
        "postalCode": "95448"
      },
      {
        "name": "München",
        "postalCode": "80469"
      },
      {
        "name": "München",
        "postalCode": "80807"
      },
      {
        "name": "München",
        "postalCode": "81669"
      },
      {
        "name": "Mainburg",
        "postalCode": "84048"
      },
      {
        "name": "Vilseck",
        "postalCode": "92249"
      },
      {
        "name": "Moosach",
        "postalCode": "85665"
      },
      {
        "name": "Mauern",
        "postalCode": "85419"
      },
      {
        "name": "Erding",
        "postalCode": "85435"
      },
      {
        "name": "Ensdorf",
        "postalCode": "92266"
      },
      {
        "name": "Inchenhofen",
        "postalCode": "86570"
      },
      {
        "name": "Schrobenhausen",
        "postalCode": "86529"
      },
      {
        "name": "Mittenwald",
        "postalCode": "82481"
      },
      {
        "name": "Pöcking",
        "postalCode": "82343"
      },
      {
        "name": "Ingolstadt",
        "postalCode": "85051"
      },
      {
        "name": "Kleinostheim",
        "postalCode": "63801"
      },
      {
        "name": "Walldürn",
        "postalCode": "74731"
      },
      {
        "name": "Himmelstadt",
        "postalCode": "97267"
      },
      {
        "name": "Höchberg",
        "postalCode": "97204"
      },
      {
        "name": "Hausen b. Würzburg",
        "postalCode": "97262"
      },
      {
        "name": "Euerbach",
        "postalCode": "97502"
      },
      {
        "name": "Schnelldorf",
        "postalCode": "91625"
      },
      {
        "name": "Bad Grönenbach",
        "postalCode": "87730"
      },
      {
        "name": "Dietmannsried",
        "postalCode": "87463"
      },
      {
        "name": "Marktbergel",
        "postalCode": "91613"
      },
      {
        "name": "Donnersdorf",
        "postalCode": "97499"
      },
      {
        "name": "Finningen",
        "postalCode": "89435"
      },
      {
        "name": "Ehingen",
        "postalCode": "91725"
      },
      {
        "name": "Rammingen",
        "postalCode": "86871"
      },
      {
        "name": "Alerheim",
        "postalCode": "86733"
      },
      {
        "name": "Dachsbach",
        "postalCode": "91462"
      },
      {
        "name": "Schwangau",
        "postalCode": "87645"
      },
      {
        "name": "Viereth-Trunstadt",
        "postalCode": "96191"
      },
      {
        "name": "Thaining",
        "postalCode": "86943"
      },
      {
        "name": "Friedberg",
        "postalCode": "86316"
      },
      {
        "name": "Bayersoien",
        "postalCode": "82435"
      },
      {
        "name": "Moorenweis",
        "postalCode": "82272"
      },
      {
        "name": "Erlangen",
        "postalCode": "91054"
      },
      {
        "name": "Haidmühle",
        "postalCode": "94145"
      },
      {
        "name": "Lindau (Bodensee)",
        "postalCode": "88131"
      },
      {
        "name": "Ettenstatt",
        "postalCode": "91796"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90408"
      },
      {
        "name": "Sonnefeld",
        "postalCode": "96242"
      },
      {
        "name": "Weidhausen b. Coburg",
        "postalCode": "96279"
      },
      {
        "name": "Karlshuld",
        "postalCode": "86668"
      },
      {
        "name": "Großweil",
        "postalCode": "82439"
      },
      {
        "name": "Hitzhofen",
        "postalCode": "85122"
      },
      {
        "name": "Steinbach a. Wald",
        "postalCode": "96361"
      },
      {
        "name": "Mistelgau",
        "postalCode": "95490"
      },
      {
        "name": "Wildflecken",
        "postalCode": "97772"
      },
      {
        "name": "Leinach",
        "postalCode": "97274"
      },
      {
        "name": "Heimenkirch",
        "postalCode": "88178"
      },
      {
        "name": "Unterpleichfeld",
        "postalCode": "97294"
      },
      {
        "name": "Elchingen",
        "postalCode": "89275"
      },
      {
        "name": "Albertshofen",
        "postalCode": "97320"
      },
      {
        "name": "Schwanfeld",
        "postalCode": "97523"
      },
      {
        "name": "Steinsfeld",
        "postalCode": "91628"
      },
      {
        "name": "Wipfeld",
        "postalCode": "97537"
      },
      {
        "name": "Buch a. Wald",
        "postalCode": "91592"
      },
      {
        "name": "Offingen",
        "postalCode": "89362"
      },
      {
        "name": "Dürrlauingen",
        "postalCode": "89350"
      },
      {
        "name": "Königsberg i. Bay.",
        "postalCode": "97486"
      },
      {
        "name": "Ansbach",
        "postalCode": "91522"
      },
      {
        "name": "Esselbach",
        "postalCode": "97839"
      },
      {
        "name": "Stockstadt am Main",
        "postalCode": "63811"
      },
      {
        "name": "Mömbris",
        "postalCode": "63776"
      },
      {
        "name": "Dorfprozelten",
        "postalCode": "97904"
      },
      {
        "name": "Regensburg",
        "postalCode": "93059"
      },
      {
        "name": "Mitterteich",
        "postalCode": "95666"
      },
      {
        "name": "Unterreit",
        "postalCode": "83567"
      },
      {
        "name": "Amerang",
        "postalCode": "83123"
      },
      {
        "name": "Kirchroth",
        "postalCode": "94356"
      },
      {
        "name": "Seeon-Seebruck",
        "postalCode": "83376"
      },
      {
        "name": "Steinach",
        "postalCode": "94377"
      },
      {
        "name": "Teising",
        "postalCode": "84576"
      },
      {
        "name": "Burgkirchen an der Alz",
        "postalCode": "84508"
      },
      {
        "name": "Teisendorf",
        "postalCode": "83317"
      },
      {
        "name": "Rimbach",
        "postalCode": "93485"
      },
      {
        "name": "Postmünster",
        "postalCode": "84389"
      },
      {
        "name": "Bayerisch Gmain",
        "postalCode": "83457"
      },
      {
        "name": "Langdorf",
        "postalCode": "94264"
      },
      {
        "name": "Röckingen",
        "postalCode": "91740"
      },
      {
        "name": "Langenneufnach",
        "postalCode": "86863"
      },
      {
        "name": "Emskirchen",
        "postalCode": "91448"
      },
      {
        "name": "Mühlhausen",
        "postalCode": "96172"
      },
      {
        "name": "Heilsbronn",
        "postalCode": "91560"
      },
      {
        "name": "Gersthofen",
        "postalCode": "86368"
      },
      {
        "name": "Thierhaupten",
        "postalCode": "86672"
      },
      {
        "name": "Augsburg",
        "postalCode": "86165"
      },
      {
        "name": "Augsburg",
        "postalCode": "86163"
      },
      {
        "name": "Ried",
        "postalCode": "86510"
      },
      {
        "name": "Neuschönau",
        "postalCode": "94556"
      },
      {
        "name": "Sonnen",
        "postalCode": "94164"
      },
      {
        "name": "Egling",
        "postalCode": "82544"
      },
      {
        "name": "München",
        "postalCode": "80997"
      },
      {
        "name": "Baierbrunn",
        "postalCode": "82065"
      },
      {
        "name": "Nordhalben",
        "postalCode": "96365"
      },
      {
        "name": "Mistelbach",
        "postalCode": "95511"
      },
      {
        "name": "München",
        "postalCode": "81476"
      },
      {
        "name": "Schnabelwaid",
        "postalCode": "91289"
      },
      {
        "name": "München",
        "postalCode": "80798"
      },
      {
        "name": "Bischofsgrün",
        "postalCode": "95493"
      },
      {
        "name": "Weißenstadt",
        "postalCode": "95163"
      },
      {
        "name": "Warmensteinach",
        "postalCode": "95485"
      },
      {
        "name": "Glonn",
        "postalCode": "85625"
      },
      {
        "name": "Feilitzsch",
        "postalCode": "95183"
      },
      {
        "name": "Laaber, Brunn",
        "postalCode": "93164"
      },
      {
        "name": "Wettstetten",
        "postalCode": "85139"
      },
      {
        "name": "Petershausen",
        "postalCode": "85238"
      },
      {
        "name": "Plech",
        "postalCode": "91287"
      },
      {
        "name": "Stadtsteinach",
        "postalCode": "95346"
      },
      {
        "name": "Ludwigschorgast",
        "postalCode": "95364"
      },
      {
        "name": "München",
        "postalCode": "80796"
      },
      {
        "name": "Bad Berneck im Fichtelgebirge",
        "postalCode": "95460"
      },
      {
        "name": "Miesbach",
        "postalCode": "83714"
      },
      {
        "name": "Anzing",
        "postalCode": "85646"
      },
      {
        "name": "Freihung",
        "postalCode": "92271"
      },
      {
        "name": "Freudenberg",
        "postalCode": "92272"
      },
      {
        "name": "Nagel",
        "postalCode": "95697"
      },
      {
        "name": "Regensburg",
        "postalCode": "93051"
      },
      {
        "name": "Landshut, Altdorf",
        "postalCode": "84032"
      },
      {
        "name": "Friedenfels",
        "postalCode": "95688"
      },
      {
        "name": "Albaching",
        "postalCode": "83544"
      },
      {
        "name": "Zeitlarn",
        "postalCode": "93197"
      },
      {
        "name": "Schwarzach b. Nabburg",
        "postalCode": "92548"
      },
      {
        "name": "Schnaitsee",
        "postalCode": "83530"
      },
      {
        "name": "Engelsberg",
        "postalCode": "84549"
      },
      {
        "name": "Pilsting",
        "postalCode": "94431"
      },
      {
        "name": "Pemfling",
        "postalCode": "93482"
      },
      {
        "name": "Waldmünchen",
        "postalCode": "93449"
      },
      {
        "name": "Kirchanschöring",
        "postalCode": "83417"
      },
      {
        "name": "Kötzting",
        "postalCode": "93444"
      },
      {
        "name": "Fürstenstein",
        "postalCode": "94538"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90411"
      },
      {
        "name": "Odelzhausen",
        "postalCode": "85235"
      },
      {
        "name": "Pähl",
        "postalCode": "82396"
      },
      {
        "name": "Landsberied",
        "postalCode": "82290"
      },
      {
        "name": "Seefeld",
        "postalCode": "82229"
      },
      {
        "name": "Krün",
        "postalCode": "82494"
      },
      {
        "name": "Weichering",
        "postalCode": "86706"
      },
      {
        "name": "Benediktbeuern",
        "postalCode": "83671"
      },
      {
        "name": "Teuschnitz",
        "postalCode": "96358"
      },
      {
        "name": "Großwallstadt",
        "postalCode": "63868"
      },
      {
        "name": "Collenberg",
        "postalCode": "97903"
      },
      {
        "name": "Gräfendorf",
        "postalCode": "97782"
      },
      {
        "name": "Thüngen",
        "postalCode": "97289"
      },
      {
        "name": "Randersacker",
        "postalCode": "97236"
      },
      {
        "name": "Nersingen",
        "postalCode": "89278"
      },
      {
        "name": "Eisenheim",
        "postalCode": "97247"
      },
      {
        "name": "Markt Rettenbach",
        "postalCode": "87733"
      },
      {
        "name": "Wallerstein",
        "postalCode": "86757"
      },
      {
        "name": "Oberaurach",
        "postalCode": "97514"
      },
      {
        "name": "Weihenzell",
        "postalCode": "91629"
      },
      {
        "name": "Vestenbergsgreuth",
        "postalCode": "91487"
      },
      {
        "name": "Biessenhofen",
        "postalCode": "87640"
      },
      {
        "name": "Burgebrach",
        "postalCode": "96138"
      },
      {
        "name": "Rieden am Forggensee",
        "postalCode": "87669"
      },
      {
        "name": "Großhabersdorf",
        "postalCode": "90613"
      },
      {
        "name": "Langweid a. Lech",
        "postalCode": "86462"
      },
      {
        "name": "Oberndorf a.Lech",
        "postalCode": "86698"
      },
      {
        "name": "Münster",
        "postalCode": "86692"
      },
      {
        "name": "Reichling",
        "postalCode": "86934"
      },
      {
        "name": "Holzheim",
        "postalCode": "86684"
      },
      {
        "name": "Unterammergau",
        "postalCode": "82497"
      },
      {
        "name": "Oberammergau",
        "postalCode": "82487"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90425"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90459"
      },
      {
        "name": "Adelzhausen",
        "postalCode": "86559"
      },
      {
        "name": "Fürstenfeldbruck",
        "postalCode": "82256"
      },
      {
        "name": "Röthenbach an der Pegnitz",
        "postalCode": "90552"
      },
      {
        "name": "Markt Indersdorf",
        "postalCode": "85229"
      },
      {
        "name": "Planegg/Krailling",
        "postalCode": "82152"
      },
      {
        "name": "Karlskron",
        "postalCode": "85123"
      },
      {
        "name": "Alzenau",
        "postalCode": "63755"
      },
      {
        "name": "Riedenheim",
        "postalCode": "97283"
      },
      {
        "name": "Winterhausen",
        "postalCode": "97286"
      },
      {
        "name": "Memmingerberg",
        "postalCode": "87766"
      },
      {
        "name": "Burgberg im Allgäu",
        "postalCode": "87545"
      },
      {
        "name": "Gundelfingen a.d. Donau",
        "postalCode": "89423"
      },
      {
        "name": "Kempten (Allgäu)",
        "postalCode": "87435"
      },
      {
        "name": "Leutershausen",
        "postalCode": "91578"
      },
      {
        "name": "Haldenwang",
        "postalCode": "89356"
      },
      {
        "name": "Forstinning",
        "postalCode": "85661"
      },
      {
        "name": "Bockhorn",
        "postalCode": "85461"
      },
      {
        "name": "Neusorg",
        "postalCode": "95700"
      },
      {
        "name": "Weiherhammer",
        "postalCode": "92729"
      },
      {
        "name": "Bad Abbach",
        "postalCode": "93077"
      },
      {
        "name": "Emmering",
        "postalCode": "83550"
      },
      {
        "name": "Rosenheim",
        "postalCode": "83026"
      },
      {
        "name": "Tiefenbach",
        "postalCode": "84184"
      },
      {
        "name": "Ergolding, Landshut",
        "postalCode": "84030"
      },
      {
        "name": "Plößberg",
        "postalCode": "95703"
      },
      {
        "name": "Halfing",
        "postalCode": "83128"
      },
      {
        "name": "Frasdorf",
        "postalCode": "83112"
      },
      {
        "name": "Vilsbiburg",
        "postalCode": "84137"
      },
      {
        "name": "Prien a. Chiemsee, Herrenchiemssee",
        "postalCode": "83209"
      },
      {
        "name": "Georgenberg",
        "postalCode": "92697"
      },
      {
        "name": "Mähring",
        "postalCode": "95695"
      },
      {
        "name": "Mühldorf a. Inn",
        "postalCode": "84453"
      },
      {
        "name": "Bergen",
        "postalCode": "83346"
      },
      {
        "name": "Stein a.d. Traun",
        "postalCode": "83371"
      },
      {
        "name": "Unterdietfurt",
        "postalCode": "84339"
      },
      {
        "name": "Schneizlreuth",
        "postalCode": "83458"
      },
      {
        "name": "Inzell",
        "postalCode": "83334"
      },
      {
        "name": "Neukirchen",
        "postalCode": "94362"
      },
      {
        "name": "Emmerting",
        "postalCode": "84547"
      },
      {
        "name": "Anger",
        "postalCode": "83454"
      },
      {
        "name": "Arnschwang",
        "postalCode": "93473"
      },
      {
        "name": "Petting",
        "postalCode": "83367"
      },
      {
        "name": "Ramsau b. Berchtesgaden",
        "postalCode": "83486"
      },
      {
        "name": "Achslach",
        "postalCode": "94250"
      },
      {
        "name": "Freilassing",
        "postalCode": "83395"
      },
      {
        "name": "Passau",
        "postalCode": "94036"
      },
      {
        "name": "Unterschleißheim",
        "postalCode": "85716"
      },
      {
        "name": "München",
        "postalCode": "80809"
      },
      {
        "name": "München",
        "postalCode": "80336"
      },
      {
        "name": "München",
        "postalCode": "80333"
      },
      {
        "name": "München",
        "postalCode": "80937"
      },
      {
        "name": "Kreuth",
        "postalCode": "83708"
      },
      {
        "name": "München",
        "postalCode": "81737"
      },
      {
        "name": "München",
        "postalCode": "81735"
      },
      {
        "name": "Lichtenberg",
        "postalCode": "95192"
      },
      {
        "name": "Speichersdorf",
        "postalCode": "95469"
      },
      {
        "name": "Freising",
        "postalCode": "85356"
      },
      {
        "name": "Eschenbach i.d. OPf.",
        "postalCode": "92676"
      },
      {
        "name": "Elsendorf",
        "postalCode": "84094"
      },
      {
        "name": "Oberpframmern",
        "postalCode": "85667"
      },
      {
        "name": "Hirschau",
        "postalCode": "92242"
      },
      {
        "name": "Ehingen a. Ries",
        "postalCode": "86741"
      },
      {
        "name": "Höchstädt a.d. Donau",
        "postalCode": "89420"
      },
      {
        "name": "Markt Wald",
        "postalCode": "86865"
      },
      {
        "name": "Horgau",
        "postalCode": "86497"
      },
      {
        "name": "Fünfstetten",
        "postalCode": "86681"
      },
      {
        "name": "Schwabbruck",
        "postalCode": "86986"
      },
      {
        "name": "Puschendorf",
        "postalCode": "90617"
      },
      {
        "name": "Augsburg",
        "postalCode": "86156"
      },
      {
        "name": "Bamberg",
        "postalCode": "96052"
      },
      {
        "name": "Kaufering",
        "postalCode": "86916"
      },
      {
        "name": "Heßdorf",
        "postalCode": "91093"
      },
      {
        "name": "Coburg",
        "postalCode": "96450"
      },
      {
        "name": "Rögling",
        "postalCode": "86703"
      },
      {
        "name": "Mering",
        "postalCode": "86415"
      },
      {
        "name": "Niederfüllbach",
        "postalCode": "96489"
      },
      {
        "name": "Wegscheid",
        "postalCode": "94110"
      },
      {
        "name": "Triefenstein",
        "postalCode": "97855"
      },
      {
        "name": "Ebermannsdorf",
        "postalCode": "92263"
      },
      {
        "name": "Luhe-Wildenau",
        "postalCode": "92706"
      },
      {
        "name": "Vilsheim",
        "postalCode": "84186"
      },
      {
        "name": "Nittenau",
        "postalCode": "93149"
      },
      {
        "name": "Samerberg",
        "postalCode": "83122"
      },
      {
        "name": "Neutraubling",
        "postalCode": "93073"
      },
      {
        "name": "Geisenhausen",
        "postalCode": "84144"
      },
      {
        "name": "Niederaichbach",
        "postalCode": "84100"
      },
      {
        "name": "Bärnau",
        "postalCode": "95671"
      },
      {
        "name": "Niederviehbach",
        "postalCode": "84183"
      },
      {
        "name": "Rain",
        "postalCode": "94369"
      },
      {
        "name": "Leiblfing",
        "postalCode": "94339"
      },
      {
        "name": "Tacherting",
        "postalCode": "83342"
      },
      {
        "name": "Chieming",
        "postalCode": "83339"
      },
      {
        "name": "Schorndorf",
        "postalCode": "93489"
      },
      {
        "name": "Mitterfels",
        "postalCode": "94360"
      },
      {
        "name": "Stephansposching",
        "postalCode": "94569"
      },
      {
        "name": "Piding",
        "postalCode": "83451"
      },
      {
        "name": "Moos",
        "postalCode": "94554"
      },
      {
        "name": "Bayerisch Eisenstein",
        "postalCode": "94252"
      },
      {
        "name": "Altertheim",
        "postalCode": "97237"
      },
      {
        "name": "Güntersleben",
        "postalCode": "97261"
      },
      {
        "name": "Rimpar",
        "postalCode": "97222"
      },
      {
        "name": "Röttingen, Tauberrettersheim",
        "postalCode": "97285"
      },
      {
        "name": "Würzburg",
        "postalCode": "97078"
      },
      {
        "name": "Würzburg",
        "postalCode": "97076"
      },
      {
        "name": "Estenfeld",
        "postalCode": "97230"
      },
      {
        "name": "Vöhringen",
        "postalCode": "89269"
      },
      {
        "name": "Ramsthal",
        "postalCode": "97729"
      },
      {
        "name": "Adelshofen",
        "postalCode": "91587"
      },
      {
        "name": "Pfaffenhofen a.d. Roth",
        "postalCode": "89284"
      },
      {
        "name": "Albertshofen",
        "postalCode": "97320"
      },
      {
        "name": "Iphofen",
        "postalCode": "97346"
      },
      {
        "name": "Oberstreu",
        "postalCode": "97640"
      },
      {
        "name": "Kirchhaslach",
        "postalCode": "87755"
      },
      {
        "name": "Gerolzhofen",
        "postalCode": "97447"
      },
      {
        "name": "Sontheim",
        "postalCode": "87776"
      },
      {
        "name": "Stadtlauringen",
        "postalCode": "97488"
      },
      {
        "name": "Gädheim",
        "postalCode": "97503"
      },
      {
        "name": "Colmberg",
        "postalCode": "91598"
      },
      {
        "name": "Oberrieden",
        "postalCode": "87769"
      },
      {
        "name": "Bechhofen",
        "postalCode": "91572"
      },
      {
        "name": "Sulzdorf a.d. Lederhecke",
        "postalCode": "97528"
      },
      {
        "name": "Germaringen",
        "postalCode": "87656"
      },
      {
        "name": "Wachenroth",
        "postalCode": "96193"
      },
      {
        "name": "Wolferstadt",
        "postalCode": "86709"
      },
      {
        "name": "Bischberg",
        "postalCode": "96120"
      },
      {
        "name": "Stegaurach",
        "postalCode": "96135"
      },
      {
        "name": "Hallstadt",
        "postalCode": "96103"
      },
      {
        "name": "Veitsbronn",
        "postalCode": "90587"
      },
      {
        "name": "Itzgrund",
        "postalCode": "96274"
      },
      {
        "name": "Hohenfurch",
        "postalCode": "86978"
      },
      {
        "name": "Garmisch-Partenkirchen",
        "postalCode": "82467"
      },
      {
        "name": "Augsburg",
        "postalCode": "86153"
      },
      {
        "name": "Stein",
        "postalCode": "90547"
      },
      {
        "name": "Kissing",
        "postalCode": "86438"
      },
      {
        "name": "Rott",
        "postalCode": "86935"
      },
      {
        "name": "Steindorf",
        "postalCode": "82297"
      },
      {
        "name": "Eresing",
        "postalCode": "86922"
      },
      {
        "name": "Gemünden a. Main",
        "postalCode": "97737"
      },
      {
        "name": "Eckersdorf",
        "postalCode": "95488"
      },
      {
        "name": "München",
        "postalCode": "81241"
      },
      {
        "name": "Schwarzenbach a. Wald",
        "postalCode": "95131"
      },
      {
        "name": "Bayreuth",
        "postalCode": "95444"
      },
      {
        "name": "München",
        "postalCode": "81547"
      },
      {
        "name": "München",
        "postalCode": "81549"
      },
      {
        "name": "Holzkirchen",
        "postalCode": "83607"
      },
      {
        "name": "Unterföhring",
        "postalCode": "85774"
      },
      {
        "name": "München",
        "postalCode": "81739"
      },
      {
        "name": "Grafenwöhr",
        "postalCode": "92655"
      },
      {
        "name": "Bad Wiessee",
        "postalCode": "83707"
      },
      {
        "name": "Beratzhausen",
        "postalCode": "93176"
      },
      {
        "name": "Poppenricht",
        "postalCode": "92284"
      },
      {
        "name": "Zorneding",
        "postalCode": "85604"
      },
      {
        "name": "Immenreuth",
        "postalCode": "95505"
      },
      {
        "name": "Neustadt b. Coburg",
        "postalCode": "96465"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90455"
      },
      {
        "name": "Inning a. Ammersee",
        "postalCode": "82266"
      },
      {
        "name": "Egenhofen",
        "postalCode": "82281"
      },
      {
        "name": "Bad Kohlgrub",
        "postalCode": "82433"
      },
      {
        "name": "Kirchehrenbach",
        "postalCode": "91356"
      },
      {
        "name": "Leutenbach",
        "postalCode": "91359"
      },
      {
        "name": "Thalmässing",
        "postalCode": "91177"
      },
      {
        "name": "Ohlstadt",
        "postalCode": "82441"
      },
      {
        "name": "Maisach",
        "postalCode": "82216"
      },
      {
        "name": "Weßling",
        "postalCode": "82234"
      },
      {
        "name": "Thurnau",
        "postalCode": "95349"
      },
      {
        "name": "Henfenfeld",
        "postalCode": "91239"
      },
      {
        "name": "Geretsried",
        "postalCode": "82538"
      },
      {
        "name": "Velden/Hartenstein",
        "postalCode": "91235"
      },
      {
        "name": "Lauterhofen",
        "postalCode": "92283"
      },
      {
        "name": "Glashütten",
        "postalCode": "95496"
      },
      {
        "name": "München",
        "postalCode": "81479"
      },
      {
        "name": "Ernsgaden",
        "postalCode": "85119"
      },
      {
        "name": "München",
        "postalCode": "80797"
      },
      {
        "name": "Unterhaching",
        "postalCode": "82008"
      },
      {
        "name": "Au in der Hallertau",
        "postalCode": "84072"
      },
      {
        "name": "Issigau",
        "postalCode": "95188"
      },
      {
        "name": "Kemnath",
        "postalCode": "95478"
      },
      {
        "name": "Marktleuthen",
        "postalCode": "95168"
      },
      {
        "name": "Bruckberg",
        "postalCode": "84079"
      },
      {
        "name": "Pettendorf",
        "postalCode": "93186"
      },
      {
        "name": "Kohlberg",
        "postalCode": "92702"
      },
      {
        "name": "Raubling",
        "postalCode": "83064"
      },
      {
        "name": "Weiden in der OPf., Theisseil",
        "postalCode": "92637"
      },
      {
        "name": "Regensburg",
        "postalCode": "93047"
      },
      {
        "name": "Stulln",
        "postalCode": "92551"
      },
      {
        "name": "Babensham",
        "postalCode": "83547"
      },
      {
        "name": "Zell",
        "postalCode": "93199"
      },
      {
        "name": "Kraiburg a. Inn",
        "postalCode": "84559"
      },
      {
        "name": "Tittmoning",
        "postalCode": "84529"
      },
      {
        "name": "Hengersberg",
        "postalCode": "94491"
      },
      {
        "name": "Iggensbach",
        "postalCode": "94547"
      },
      {
        "name": "Bad Wörishofen",
        "postalCode": "86825"
      },
      {
        "name": "Ebern",
        "postalCode": "96106"
      },
      {
        "name": "Hainsfarth",
        "postalCode": "86744"
      },
      {
        "name": "Heidenheim",
        "postalCode": "91719"
      },
      {
        "name": "Langenzenn",
        "postalCode": "90579"
      },
      {
        "name": "Treuchtlingen",
        "postalCode": "91757"
      },
      {
        "name": "Oberreichenbach",
        "postalCode": "91097"
      },
      {
        "name": "Otting",
        "postalCode": "86700"
      },
      {
        "name": "Großenseebach",
        "postalCode": "91091"
      },
      {
        "name": "Röttenbach",
        "postalCode": "91341"
      },
      {
        "name": "Oberasbach",
        "postalCode": "90522"
      },
      {
        "name": "Röttenbach",
        "postalCode": "91187"
      },
      {
        "name": "Buttenheim",
        "postalCode": "96155"
      },
      {
        "name": "Hettstadt",
        "postalCode": "97265"
      },
      {
        "name": "Ulm",
        "postalCode": "89081"
      },
      {
        "name": "Gelchsheim, Sonderhofen",
        "postalCode": "97255"
      },
      {
        "name": "Gaukönigshofen",
        "postalCode": "97253"
      },
      {
        "name": "Nüdlingen",
        "postalCode": "97720"
      },
      {
        "name": "Oberroth",
        "postalCode": "89294"
      },
      {
        "name": "Maßbach",
        "postalCode": "97711"
      },
      {
        "name": "Ichenhausen",
        "postalCode": "89335"
      },
      {
        "name": "Rödelsee",
        "postalCode": "97348"
      },
      {
        "name": "Gochsheim",
        "postalCode": "97469"
      },
      {
        "name": "Wiesentheid",
        "postalCode": "97353"
      },
      {
        "name": "Fremdingen",
        "postalCode": "86742"
      },
      {
        "name": "Ebrach",
        "postalCode": "96157"
      },
      {
        "name": "Eppishausen",
        "postalCode": "87745"
      },
      {
        "name": "Holzheim",
        "postalCode": "89438"
      },
      {
        "name": "Wassertrüdingen",
        "postalCode": "91717"
      },
      {
        "name": "Karlstein am Main",
        "postalCode": "63791"
      },
      {
        "name": "Karbach",
        "postalCode": "97842"
      },
      {
        "name": "Wartmannsroth",
        "postalCode": "97797"
      },
      {
        "name": "Waldbüttelbrunn",
        "postalCode": "97297"
      },
      {
        "name": "Würzburg",
        "postalCode": "97072"
      },
      {
        "name": "Elfershausen",
        "postalCode": "97725"
      },
      {
        "name": "Gerbrunn",
        "postalCode": "97218"
      },
      {
        "name": "Neu-Ulm",
        "postalCode": "89233"
      },
      {
        "name": "Werneck",
        "postalCode": "97440"
      },
      {
        "name": "Heimertingen",
        "postalCode": "87751"
      },
      {
        "name": "Grafenrheinfeld",
        "postalCode": "97506"
      },
      {
        "name": "Rödelsee",
        "postalCode": "97348"
      },
      {
        "name": "Oberstreu",
        "postalCode": "97640"
      },
      {
        "name": "Kempten (Allgäu)",
        "postalCode": "87439"
      },
      {
        "name": "Zöschingen",
        "postalCode": "89447"
      },
      {
        "name": "Breitenbrunn",
        "postalCode": "87739"
      },
      {
        "name": "Herrieden",
        "postalCode": "91567"
      },
      {
        "name": "Scheinfeld",
        "postalCode": "91443"
      },
      {
        "name": "Eggenthal",
        "postalCode": "87653"
      },
      {
        "name": "Kahl am Main",
        "postalCode": "63796"
      },
      {
        "name": "Niedernberg",
        "postalCode": "63843"
      },
      {
        "name": "Kleinwallstadt",
        "postalCode": "63839"
      },
      {
        "name": "Großheubach",
        "postalCode": "63920"
      },
      {
        "name": "Bessenbach",
        "postalCode": "63856"
      },
      {
        "name": "Schneeberg",
        "postalCode": "63936"
      },
      {
        "name": "Bürgstadt",
        "postalCode": "63927"
      },
      {
        "name": "Faulbach",
        "postalCode": "97906"
      },
      {
        "name": "Partenstein",
        "postalCode": "97846"
      },
      {
        "name": "Erlenbach b. Marktheidenfeld",
        "postalCode": "97837"
      },
      {
        "name": "Zeitlofs",
        "postalCode": "97799"
      },
      {
        "name": "Helmstadt",
        "postalCode": "97264"
      },
      {
        "name": "Grafrath",
        "postalCode": "82284"
      },
      {
        "name": "Unterleinleiter",
        "postalCode": "91364"
      },
      {
        "name": "Gräfenberg",
        "postalCode": "91322"
      },
      {
        "name": "Mitwitz",
        "postalCode": "96268"
      },
      {
        "name": "Egloffstein",
        "postalCode": "91349"
      },
      {
        "name": "Gößweinstein",
        "postalCode": "91327"
      },
      {
        "name": "Ingolstadt",
        "postalCode": "85049"
      },
      {
        "name": "Feldafing",
        "postalCode": "82340"
      },
      {
        "name": "Gauting",
        "postalCode": "82131"
      },
      {
        "name": "Simmelsdorf",
        "postalCode": "91245"
      },
      {
        "name": "Planegg/Krailling",
        "postalCode": "82152"
      },
      {
        "name": "Betzenstein",
        "postalCode": "91282"
      },
      {
        "name": "Kirchdorf",
        "postalCode": "93348"
      },
      {
        "name": "Aßling",
        "postalCode": "85617"
      },
      {
        "name": "Walpertskirchen",
        "postalCode": "85469"
      },
      {
        "name": "Schierling",
        "postalCode": "84069"
      },
      {
        "name": "Wenzenbach",
        "postalCode": "93173"
      },
      {
        "name": "Prutting",
        "postalCode": "83134"
      },
      {
        "name": "Altfraunhofen",
        "postalCode": "84169"
      },
      {
        "name": "Baierbach",
        "postalCode": "84171"
      },
      {
        "name": "Bernhardswald",
        "postalCode": "93170"
      },
      {
        "name": "Soyen",
        "postalCode": "83564"
      },
      {
        "name": "Gars a. Inn",
        "postalCode": "83536"
      },
      {
        "name": "Neunburg vorm Wald",
        "postalCode": "92431"
      },
      {
        "name": "Wörth an der Donau",
        "postalCode": "93086"
      },
      {
        "name": "Rettenbach",
        "postalCode": "93191"
      },
      {
        "name": "Eslarn",
        "postalCode": "92693"
      },
      {
        "name": "Trostberg",
        "postalCode": "83308"
      },
      {
        "name": "Schönthal",
        "postalCode": "93488"
      },
      {
        "name": "Cham",
        "postalCode": "93413"
      },
      {
        "name": "Parkstetten",
        "postalCode": "94365"
      },
      {
        "name": "Massing",
        "postalCode": "84323"
      },
      {
        "name": "Haselbach",
        "postalCode": "94354"
      },
      {
        "name": "Surberg",
        "postalCode": "83362"
      },
      {
        "name": "Haarbach",
        "postalCode": "94542"
      },
      {
        "name": "Ortenburg",
        "postalCode": "94496"
      },
      {
        "name": "Eging a. See",
        "postalCode": "94535"
      },
      {
        "name": "Kirchham",
        "postalCode": "94148"
      },
      {
        "name": "Spiegelau",
        "postalCode": "94518"
      },
      {
        "name": "Neuhaus a. Inn",
        "postalCode": "94152"
      },
      {
        "name": "Ingolstadt",
        "postalCode": "85057"
      },
      {
        "name": "Ilmmünster",
        "postalCode": "85304"
      },
      {
        "name": "Bad Tölz, Wackersberg",
        "postalCode": "83646"
      },
      {
        "name": "Dietramszell",
        "postalCode": "83623"
      },
      {
        "name": "München",
        "postalCode": "80992"
      },
      {
        "name": "Neuenmarkt",
        "postalCode": "95339"
      },
      {
        "name": "Münchsmünster",
        "postalCode": "85126"
      },
      {
        "name": "Neustadt a.d. Donau",
        "postalCode": "93333"
      },
      {
        "name": "Zolling",
        "postalCode": "85406"
      },
      {
        "name": "Oberding",
        "postalCode": "85445"
      },
      {
        "name": "Marzling",
        "postalCode": "85417"
      },
      {
        "name": "Leupoldsgrün",
        "postalCode": "95191"
      },
      {
        "name": "Kulmain",
        "postalCode": "95508"
      },
      {
        "name": "Saal a.d. Donau",
        "postalCode": "93342"
      },
      {
        "name": "Unterschwaningen",
        "postalCode": "91743"
      },
      {
        "name": "Hopferau",
        "postalCode": "87659"
      },
      {
        "name": "Lisberg",
        "postalCode": "96170"
      },
      {
        "name": "Lechbruck",
        "postalCode": "86983"
      },
      {
        "name": "Aurachtal",
        "postalCode": "91086"
      },
      {
        "name": "Bamberg",
        "postalCode": "96049"
      },
      {
        "name": "Niederschönenfeld",
        "postalCode": "86694"
      },
      {
        "name": "Prittriching",
        "postalCode": "86931"
      },
      {
        "name": "Wildsteig",
        "postalCode": "82409"
      },
      {
        "name": "Staffelstein",
        "postalCode": "96231"
      },
      {
        "name": "Fürth",
        "postalCode": "90765"
      },
      {
        "name": "Peißenberg",
        "postalCode": "82380"
      },
      {
        "name": "Freyung",
        "postalCode": "94078"
      },
      {
        "name": "Hersbruck",
        "postalCode": "91217"
      },
      {
        "name": "Bad Heilbrunn",
        "postalCode": "83670"
      },
      {
        "name": "München",
        "postalCode": "80689"
      },
      {
        "name": "München",
        "postalCode": "80687"
      },
      {
        "name": "Hohenkammer",
        "postalCode": "85411"
      },
      {
        "name": "Gesees",
        "postalCode": "95494"
      },
      {
        "name": "Geisenfeld",
        "postalCode": "85290"
      },
      {
        "name": "Taufkirchen",
        "postalCode": "82024"
      },
      {
        "name": "Kastl",
        "postalCode": "92280"
      },
      {
        "name": "Stammbach",
        "postalCode": "95236"
      },
      {
        "name": "Münchberg",
        "postalCode": "95213"
      },
      {
        "name": "Rudelzhausen",
        "postalCode": "84104"
      },
      {
        "name": "Selbitz",
        "postalCode": "95152"
      },
      {
        "name": "Finsing",
        "postalCode": "85464"
      },
      {
        "name": "Vaterstetten",
        "postalCode": "85591"
      },
      {
        "name": "Train",
        "postalCode": "93358"
      },
      {
        "name": "Feldkirchen-Westerham",
        "postalCode": "83620"
      },
      {
        "name": "Kirchseeon",
        "postalCode": "85614"
      },
      {
        "name": "Polling",
        "postalCode": "82398"
      },
      {
        "name": "Heiligenstadt i. OFr.",
        "postalCode": "91332"
      },
      {
        "name": "Sielenbach",
        "postalCode": "86577"
      },
      {
        "name": "Wallgau",
        "postalCode": "82499"
      },
      {
        "name": "Alling",
        "postalCode": "82239"
      },
      {
        "name": "Hilgertshausen-Tandern",
        "postalCode": "86567"
      },
      {
        "name": "Schlehdorf",
        "postalCode": "82444"
      },
      {
        "name": "Waidhofen",
        "postalCode": "86579"
      },
      {
        "name": "Wilhelmsthal",
        "postalCode": "96352"
      },
      {
        "name": "Rott a. Inn",
        "postalCode": "83543"
      },
      {
        "name": "Tirschenreuth",
        "postalCode": "95643"
      },
      {
        "name": "Buchbach",
        "postalCode": "84428"
      },
      {
        "name": "Bayerbach bei Ergoldsbach",
        "postalCode": "84092"
      },
      {
        "name": "Ampfing",
        "postalCode": "84539"
      },
      {
        "name": "Dieterskirchen",
        "postalCode": "92542"
      },
      {
        "name": "Marquartstein",
        "postalCode": "83250"
      },
      {
        "name": "Altenmarkt a.d. Alz",
        "postalCode": "83352"
      },
      {
        "name": "Roding",
        "postalCode": "93426"
      },
      {
        "name": "Ruhpolding",
        "postalCode": "83324"
      },
      {
        "name": "Vachendorf",
        "postalCode": "83377"
      },
      {
        "name": "Zandt",
        "postalCode": "93499"
      },
      {
        "name": "Erlbach",
        "postalCode": "84567"
      },
      {
        "name": "Viechtach",
        "postalCode": "94234"
      },
      {
        "name": "Hohenwarth",
        "postalCode": "93480"
      },
      {
        "name": "Bischofsmais",
        "postalCode": "94253"
      },
      {
        "name": "Ering",
        "postalCode": "94140"
      },
      {
        "name": "Hofkirchen",
        "postalCode": "94544"
      },
      {
        "name": "Rinchnach",
        "postalCode": "94269"
      },
      {
        "name": "Tiefenbach",
        "postalCode": "94113"
      },
      {
        "name": "Ruderting",
        "postalCode": "94161"
      },
      {
        "name": "Geroda",
        "postalCode": "97779"
      },
      {
        "name": "Illertissen",
        "postalCode": "89257"
      },
      {
        "name": "Altusried",
        "postalCode": "87452"
      },
      {
        "name": "Woringen",
        "postalCode": "87789"
      },
      {
        "name": "Wörnitz",
        "postalCode": "91637"
      },
      {
        "name": "Böhen",
        "postalCode": "87736"
      },
      {
        "name": "Wiesenbach",
        "postalCode": "86519"
      },
      {
        "name": "Kempten (Allgäu)",
        "postalCode": "87437"
      },
      {
        "name": "Sulzberg",
        "postalCode": "87477"
      },
      {
        "name": "Mönchsroth",
        "postalCode": "91614"
      },
      {
        "name": "Krombach",
        "postalCode": "63829"
      },
      {
        "name": "Aichen",
        "postalCode": "86479"
      },
      {
        "name": "Burgwindheim",
        "postalCode": "96154"
      },
      {
        "name": "Deiningen",
        "postalCode": "86738"
      },
      {
        "name": "Sand a. Main",
        "postalCode": "97522"
      },
      {
        "name": "Harburg",
        "postalCode": "86655"
      },
      {
        "name": "Ingenried",
        "postalCode": "86980"
      },
      {
        "name": "Wehringen",
        "postalCode": "86517"
      },
      {
        "name": "Burggen",
        "postalCode": "86977"
      },
      {
        "name": "Gerach",
        "postalCode": "96161"
      },
      {
        "name": "Meeder",
        "postalCode": "96484"
      },
      {
        "name": "Königsbrunn",
        "postalCode": "86343"
      },
      {
        "name": "Augsburg",
        "postalCode": "86169"
      },
      {
        "name": "Fürth",
        "postalCode": "90768"
      },
      {
        "name": "Merching",
        "postalCode": "86504"
      },
      {
        "name": "Erlangen",
        "postalCode": "91056"
      },
      {
        "name": "Hausen",
        "postalCode": "91353"
      },
      {
        "name": "Höttingen",
        "postalCode": "91798"
      },
      {
        "name": "Petersdorf",
        "postalCode": "86574"
      },
      {
        "name": "Erlangen",
        "postalCode": "91052"
      },
      {
        "name": "Baiersdorf",
        "postalCode": "91083"
      },
      {
        "name": "Grub a. Forst",
        "postalCode": "96271"
      },
      {
        "name": "Schollbrunn",
        "postalCode": "97852"
      },
      {
        "name": "Fellen",
        "postalCode": "97778"
      },
      {
        "name": "Esselbach",
        "postalCode": "97839"
      },
      {
        "name": "Karlstadt",
        "postalCode": "97753"
      },
      {
        "name": "Pfeffenhausen",
        "postalCode": "84076"
      },
      {
        "name": "Wolfsegg",
        "postalCode": "93195"
      },
      {
        "name": "Parkstein",
        "postalCode": "92711"
      },
      {
        "name": "Lappersdorf",
        "postalCode": "93138"
      },
      {
        "name": "Sankt Wolfgang",
        "postalCode": "84427"
      },
      {
        "name": "Falkenberg",
        "postalCode": "95685"
      },
      {
        "name": "Bernau a. Chiemsee",
        "postalCode": "83233"
      },
      {
        "name": "Weng",
        "postalCode": "84187"
      },
      {
        "name": "Bodenkirchen",
        "postalCode": "84155"
      },
      {
        "name": "Seeon-Seebruck",
        "postalCode": "83370"
      },
      {
        "name": "Übersee",
        "postalCode": "83236"
      },
      {
        "name": "Oberneukirchen",
        "postalCode": "84565"
      },
      {
        "name": "Straubing",
        "postalCode": "94315"
      },
      {
        "name": "Altötting",
        "postalCode": "84503"
      },
      {
        "name": "Aholming",
        "postalCode": "94527"
      },
      {
        "name": "Arrach",
        "postalCode": "93474"
      },
      {
        "name": "Schaufling",
        "postalCode": "94571"
      },
      {
        "name": "Bodenmais",
        "postalCode": "94249"
      },
      {
        "name": "Grattersdorf",
        "postalCode": "94541"
      },
      {
        "name": "Kirchzell",
        "postalCode": "63931"
      },
      {
        "name": "Laudenbach",
        "postalCode": "63925"
      },
      {
        "name": "Haibach",
        "postalCode": "63808"
      },
      {
        "name": "Röllbach",
        "postalCode": "63934"
      },
      {
        "name": "Greifenberg",
        "postalCode": "86926"
      },
      {
        "name": "Huglfing",
        "postalCode": "82386"
      },
      {
        "name": "Adelschlag",
        "postalCode": "85111"
      },
      {
        "name": "Gachenbach",
        "postalCode": "86565"
      },
      {
        "name": "Starnberg",
        "postalCode": "82319"
      },
      {
        "name": "Neunkirchen am Sand",
        "postalCode": "91233"
      },
      {
        "name": "Schäftlarn",
        "postalCode": "82067"
      },
      {
        "name": "München",
        "postalCode": "80638"
      },
      {
        "name": "Kranzberg",
        "postalCode": "85402"
      },
      {
        "name": "München",
        "postalCode": "81545"
      },
      {
        "name": "München",
        "postalCode": "80799"
      },
      {
        "name": "München",
        "postalCode": "80801"
      },
      {
        "name": "Aiglsbach",
        "postalCode": "84089"
      },
      {
        "name": "Kirchheim b. München",
        "postalCode": "85551"
      },
      {
        "name": "Konradsreuth",
        "postalCode": "95176"
      },
      {
        "name": "Hauzenberg",
        "postalCode": "94051"
      },
      {
        "name": "Hinterschmiding",
        "postalCode": "94146"
      },
      {
        "name": "Jandelsbrunn",
        "postalCode": "94118"
      },
      {
        "name": "Karsbach",
        "postalCode": "97783"
      },
      {
        "name": "Reichenberg, Guttenberger Wald",
        "postalCode": "97234"
      },
      {
        "name": "Lindenberg im Allgäu",
        "postalCode": "88161"
      },
      {
        "name": "Fuchsstadt",
        "postalCode": "97727"
      },
      {
        "name": "Würzburg",
        "postalCode": "97074"
      },
      {
        "name": "Senden",
        "postalCode": "89250"
      },
      {
        "name": "Kitzingen",
        "postalCode": "97318"
      },
      {
        "name": "Bad Neustadt an der Saale",
        "postalCode": "97616"
      },
      {
        "name": "Bibertal",
        "postalCode": "89346"
      },
      {
        "name": "Schweinfurt",
        "postalCode": "97422"
      },
      {
        "name": "Gallmersgarten",
        "postalCode": "91605"
      },
      {
        "name": "Ellzee",
        "postalCode": "89352"
      },
      {
        "name": "Bachhagel",
        "postalCode": "89429"
      },
      {
        "name": "Bächingen a.d. Brenz",
        "postalCode": "89431"
      },
      {
        "name": "Betzigau",
        "postalCode": "87488"
      },
      {
        "name": "Obergünzburg",
        "postalCode": "87634"
      },
      {
        "name": "Dentlein a. Forst",
        "postalCode": "91599"
      },
      {
        "name": "Weiltingen",
        "postalCode": "91744"
      },
      {
        "name": "Aislingen",
        "postalCode": "89344"
      },
      {
        "name": "Bundorf",
        "postalCode": "97494"
      },
      {
        "name": "Landensberg",
        "postalCode": "89361"
      },
      {
        "name": "Mittelneufnach",
        "postalCode": "86868"
      },
      {
        "name": "Rieden",
        "postalCode": "87668"
      },
      {
        "name": "Emersacker",
        "postalCode": "86494"
      },
      {
        "name": "Stötten am Auerberg",
        "postalCode": "87675"
      },
      {
        "name": "Lonnerstadt",
        "postalCode": "91475"
      },
      {
        "name": "Haundorf",
        "postalCode": "91729"
      },
      {
        "name": "Dittenheim",
        "postalCode": "91723"
      },
      {
        "name": "Waal",
        "postalCode": "86875"
      },
      {
        "name": "Weisendorf",
        "postalCode": "91085"
      },
      {
        "name": "Untermeitingen",
        "postalCode": "86836"
      },
      {
        "name": "Kemmern",
        "postalCode": "96164"
      },
      {
        "name": "Ellgau",
        "postalCode": "86679"
      },
      {
        "name": "Augsburg",
        "postalCode": "86152"
      },
      {
        "name": "Memmelsdorf",
        "postalCode": "96117"
      },
      {
        "name": "Fürth",
        "postalCode": "90766"
      },
      {
        "name": "Dasing",
        "postalCode": "86453"
      },
      {
        "name": "Forchheim",
        "postalCode": "91301"
      },
      {
        "name": "Wasserburg (Bodensee)",
        "postalCode": "88142"
      },
      {
        "name": "Hohenlinden",
        "postalCode": "85664"
      },
      {
        "name": "Schwarzenbach",
        "postalCode": "92720"
      },
      {
        "name": "Pentling",
        "postalCode": "93080"
      },
      {
        "name": "Regenstauf",
        "postalCode": "93128"
      },
      {
        "name": "Teublitz",
        "postalCode": "93158"
      },
      {
        "name": "Taufkirchen (Vils)",
        "postalCode": "84416"
      },
      {
        "name": "Schönwald",
        "postalCode": "95173"
      },
      {
        "name": "Steinkirchen",
        "postalCode": "84439"
      },
      {
        "name": "Rosenheim",
        "postalCode": "83022"
      },
      {
        "name": "Essenbach",
        "postalCode": "84051"
      },
      {
        "name": "Gars a. Inn",
        "postalCode": "83555"
      },
      {
        "name": "Höslwang",
        "postalCode": "83129"
      },
      {
        "name": "Wiesent",
        "postalCode": "93109"
      },
      {
        "name": "Mötzing",
        "postalCode": "93099"
      },
      {
        "name": "Neumarkt-Sankt Veit",
        "postalCode": "84494"
      },
      {
        "name": "Treffelstein",
        "postalCode": "93492"
      },
      {
        "name": "Loitzendorf",
        "postalCode": "94359"
      },
      {
        "name": "Eggenfelden",
        "postalCode": "84307"
      },
      {
        "name": "Miltach",
        "postalCode": "93468"
      },
      {
        "name": "Saldenburg",
        "postalCode": "94163"
      },
      {
        "name": "Passau",
        "postalCode": "94032"
      },
      {
        "name": "Pörnbach",
        "postalCode": "85309"
      },
      {
        "name": "Lenting",
        "postalCode": "85101"
      },
      {
        "name": "Trebgast",
        "postalCode": "95367"
      },
      {
        "name": "Dietfurt a.d. Altmühl",
        "postalCode": "92345"
      },
      {
        "name": "Oberhaching",
        "postalCode": "82041"
      },
      {
        "name": "München",
        "postalCode": "80539"
      },
      {
        "name": "Kirchenthumbach",
        "postalCode": "91281"
      },
      {
        "name": "München",
        "postalCode": "81827"
      },
      {
        "name": "Valley",
        "postalCode": "83626"
      },
      {
        "name": "Langenbach",
        "postalCode": "85416"
      },
      {
        "name": "Haag a.d. Amper",
        "postalCode": "85410"
      },
      {
        "name": "Mehlmeisel",
        "postalCode": "95694"
      },
      {
        "name": "Fischen im Allgäu",
        "postalCode": "87538"
      },
      {
        "name": "Weißenhorn",
        "postalCode": "89264"
      },
      {
        "name": "Niederwerrn",
        "postalCode": "97464"
      },
      {
        "name": "Ergersheim",
        "postalCode": "91465"
      },
      {
        "name": "Haunsheim",
        "postalCode": "89437"
      },
      {
        "name": "Rettenbach",
        "postalCode": "89364"
      },
      {
        "name": "Krumbach (Schwaben)",
        "postalCode": "86381"
      },
      {
        "name": "Bad Königshofen i. Grabfeld",
        "postalCode": "97631"
      },
      {
        "name": "Nesselwang",
        "postalCode": "87484"
      },
      {
        "name": "Langenfeld",
        "postalCode": "91474"
      },
      {
        "name": "Bissingen",
        "postalCode": "86657"
      },
      {
        "name": "Schondorf a. Ammersee",
        "postalCode": "86938"
      },
      {
        "name": "Oberau",
        "postalCode": "82496"
      },
      {
        "name": "Schwanstetten",
        "postalCode": "90596"
      },
      {
        "name": "Königsmoos",
        "postalCode": "86669"
      },
      {
        "name": "Kunreuth",
        "postalCode": "91358"
      },
      {
        "name": "Lauf an der Pegnitz",
        "postalCode": "91207"
      },
      {
        "name": "Sindelsdorf",
        "postalCode": "82404"
      },
      {
        "name": "Johannesberg",
        "postalCode": "63867"
      },
      {
        "name": "Baisweil",
        "postalCode": "87650"
      },
      {
        "name": "Schlüsselfeld",
        "postalCode": "96132"
      },
      {
        "name": "Altenmünster",
        "postalCode": "86450"
      },
      {
        "name": "Zeil a. Main",
        "postalCode": "97475"
      },
      {
        "name": "Wertingen",
        "postalCode": "86637"
      },
      {
        "name": "Burgoberbach",
        "postalCode": "91595"
      },
      {
        "name": "Pforzen",
        "postalCode": "87666"
      },
      {
        "name": "Wechingen",
        "postalCode": "86759"
      },
      {
        "name": "Weidenbach",
        "postalCode": "91746"
      },
      {
        "name": "Wemding",
        "postalCode": "86650"
      },
      {
        "name": "Hiltenfingen",
        "postalCode": "86856"
      },
      {
        "name": "Aystetten",
        "postalCode": "86482"
      },
      {
        "name": "Windsbach",
        "postalCode": "91575"
      },
      {
        "name": "Steingaden",
        "postalCode": "86989"
      },
      {
        "name": "Weil",
        "postalCode": "86947"
      },
      {
        "name": "Hemhofen",
        "postalCode": "91334"
      },
      {
        "name": "Geltendorf",
        "postalCode": "82269"
      },
      {
        "name": "Dießen a. Ammersee",
        "postalCode": "86911"
      },
      {
        "name": "Eresing",
        "postalCode": "86941"
      },
      {
        "name": "Marktheidenfeld",
        "postalCode": "97828"
      },
      {
        "name": "Üttingen, Holzkirchen",
        "postalCode": "97292"
      },
      {
        "name": "Grafing b. München",
        "postalCode": "85567"
      },
      {
        "name": "Marktredwitz",
        "postalCode": "95615"
      },
      {
        "name": "Pfaffing",
        "postalCode": "83539"
      },
      {
        "name": "Edling",
        "postalCode": "83533"
      },
      {
        "name": "Reuth b. Erbendorf",
        "postalCode": "92717"
      },
      {
        "name": "Wasserburg a. Inn",
        "postalCode": "83512"
      },
      {
        "name": "Schonstett",
        "postalCode": "83137"
      },
      {
        "name": "Altenthann",
        "postalCode": "93177"
      },
      {
        "name": "Roding",
        "postalCode": "93426"
      },
      {
        "name": "Oberviechtach",
        "postalCode": "92526"
      },
      {
        "name": "Waldkraiburg",
        "postalCode": "84478"
      },
      {
        "name": "Feldkirchen",
        "postalCode": "94351"
      },
      {
        "name": "Pösing",
        "postalCode": "93483"
      },
      {
        "name": "Reisbach",
        "postalCode": "94419"
      },
      {
        "name": "Unterneukirchen",
        "postalCode": "84579"
      },
      {
        "name": "Stallwang",
        "postalCode": "94375"
      },
      {
        "name": "Hunderdorf",
        "postalCode": "94336"
      },
      {
        "name": "Hebertsfelden",
        "postalCode": "84332"
      },
      {
        "name": "Kollnburg",
        "postalCode": "94262"
      },
      {
        "name": "Offenberg",
        "postalCode": "94560"
      },
      {
        "name": "Ainring",
        "postalCode": "83404"
      },
      {
        "name": "Grafling",
        "postalCode": "94539"
      },
      {
        "name": "Auerbach",
        "postalCode": "94530"
      },
      {
        "name": "Schöllnach",
        "postalCode": "94508"
      },
      {
        "name": "Windorf",
        "postalCode": "94575"
      },
      {
        "name": "Pocking",
        "postalCode": "94060"
      },
      {
        "name": "Neukirchen vorm Wald",
        "postalCode": "94154"
      },
      {
        "name": "Ingolstadt",
        "postalCode": "85055"
      },
      {
        "name": "Vorra",
        "postalCode": "91247"
      },
      {
        "name": "München",
        "postalCode": "80686"
      },
      {
        "name": "München",
        "postalCode": "80637"
      },
      {
        "name": "Gaißach",
        "postalCode": "83674"
      },
      {
        "name": "Neukirchen b. Sulzbach-Rosen",
        "postalCode": "92259"
      },
      {
        "name": "München",
        "postalCode": "81677"
      },
      {
        "name": "Naila",
        "postalCode": "95119"
      },
      {
        "name": "München",
        "postalCode": "81929"
      },
      {
        "name": "Ottobrunn/Riemerling",
        "postalCode": "85521"
      },
      {
        "name": "Ismaning",
        "postalCode": "85737"
      },
      {
        "name": "Putzbrunn",
        "postalCode": "85640"
      },
      {
        "name": "Aying",
        "postalCode": "85653"
      },
      {
        "name": "Bad Berneck im Fichtelgebirge",
        "postalCode": "95460"
      },
      {
        "name": "Rottach-Egern",
        "postalCode": "83700"
      },
      {
        "name": "Egmating",
        "postalCode": "85658"
      },
      {
        "name": "Eitting",
        "postalCode": "85462"
      },
      {
        "name": "Gebenbach",
        "postalCode": "92274"
      },
      {
        "name": "Hof",
        "postalCode": "95032"
      },
      {
        "name": "Ebersdorf b. Coburg",
        "postalCode": "96237"
      },
      {
        "name": "Michelau i. OFr.",
        "postalCode": "96247"
      },
      {
        "name": "Hattenhofen",
        "postalCode": "82285"
      },
      {
        "name": "Wiesenthau",
        "postalCode": "91369"
      },
      {
        "name": "Kühbach",
        "postalCode": "86556"
      },
      {
        "name": "Wiesenttal",
        "postalCode": "91346"
      },
      {
        "name": "Berg im Gau",
        "postalCode": "86562"
      },
      {
        "name": "Leinburg",
        "postalCode": "91227"
      },
      {
        "name": "Ludwigsstadt",
        "postalCode": "96337"
      },
      {
        "name": "Hohenwart",
        "postalCode": "86558"
      },
      {
        "name": "Arberg",
        "postalCode": "91722"
      },
      {
        "name": "Laugna",
        "postalCode": "86502"
      },
      {
        "name": "Meitingen",
        "postalCode": "86405"
      },
      {
        "name": "Ehingen",
        "postalCode": "86678"
      },
      {
        "name": "Altenstadt",
        "postalCode": "86972"
      },
      {
        "name": "Marxheim",
        "postalCode": "86688"
      },
      {
        "name": "Ellingen",
        "postalCode": "91792"
      },
      {
        "name": "Augsburg",
        "postalCode": "86159"
      },
      {
        "name": "Augsburg",
        "postalCode": "86167"
      },
      {
        "name": "Untersiemau",
        "postalCode": "96253"
      },
      {
        "name": "Möhrendorf/Mark",
        "postalCode": "91096"
      },
      {
        "name": "Fürth",
        "postalCode": "90763"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90449"
      },
      {
        "name": "Amorbach",
        "postalCode": "63916"
      },
      {
        "name": "Aschaffenburg",
        "postalCode": "63743"
      },
      {
        "name": "Klingenberg a. Main",
        "postalCode": "63911"
      },
      {
        "name": "Frammersbach",
        "postalCode": "97833"
      },
      {
        "name": "Urspringen",
        "postalCode": "97857"
      },
      {
        "name": "Zellingen",
        "postalCode": "97225"
      },
      {
        "name": "Kirchheim",
        "postalCode": "97268"
      },
      {
        "name": "Würzburg",
        "postalCode": "97082"
      },
      {
        "name": "Wasserlosen",
        "postalCode": "97535"
      },
      {
        "name": "Kötz",
        "postalCode": "89359"
      },
      {
        "name": "Mindelheim",
        "postalCode": "87719"
      },
      {
        "name": "Burghaslach",
        "postalCode": "96152"
      },
      {
        "name": "Maihingen",
        "postalCode": "86747"
      },
      {
        "name": "Hasloch",
        "postalCode": "97907"
      },
      {
        "name": "Fischbachau",
        "postalCode": "83730"
      },
      {
        "name": "Frauenneuharting",
        "postalCode": "83553"
      },
      {
        "name": "Schmidgaden",
        "postalCode": "92546"
      },
      {
        "name": "Schwarzhofen",
        "postalCode": "92447"
      },
      {
        "name": "Heldenstein",
        "postalCode": "84431"
      },
      {
        "name": "Aschau a. Inn",
        "postalCode": "84544"
      },
      {
        "name": "Vilshofen an der Donau",
        "postalCode": "94474"
      },
      {
        "name": "Würzburg",
        "postalCode": "97084"
      },
      {
        "name": "Bischofsheim a.d. Rhön",
        "postalCode": "97653"
      },
      {
        "name": "Ostheim v.d. Rhön",
        "postalCode": "97645"
      },
      {
        "name": "Prosselsheim",
        "postalCode": "97279"
      },
      {
        "name": "Osterberg",
        "postalCode": "89296"
      },
      {
        "name": "Schillingsfürst",
        "postalCode": "91583"
      },
      {
        "name": "Mainbernheim",
        "postalCode": "97350"
      },
      {
        "name": "Roggenburg",
        "postalCode": "89297"
      },
      {
        "name": "Aletshausen",
        "postalCode": "86480"
      },
      {
        "name": "Durach",
        "postalCode": "87471"
      },
      {
        "name": "Riedbach",
        "postalCode": "97519"
      },
      {
        "name": "Jettingen-Scheppach",
        "postalCode": "89343"
      },
      {
        "name": "Wittelshofen",
        "postalCode": "91749"
      },
      {
        "name": "Ipsheim",
        "postalCode": "91472"
      },
      {
        "name": "Hohenaltheim",
        "postalCode": "86745"
      },
      {
        "name": "Stammham",
        "postalCode": "85134"
      },
      {
        "name": "Pegnitz",
        "postalCode": "91257"
      },
      {
        "name": "Heinersreuth",
        "postalCode": "95500"
      },
      {
        "name": "Fahrenzhausen",
        "postalCode": "85777"
      },
      {
        "name": "Geroldsgrün",
        "postalCode": "95179"
      },
      {
        "name": "München",
        "postalCode": "81675"
      },
      {
        "name": "Pförring",
        "postalCode": "85104"
      },
      {
        "name": "München",
        "postalCode": "81825"
      },
      {
        "name": "Zell",
        "postalCode": "95239"
      },
      {
        "name": "Kleinkahl",
        "postalCode": "63828"
      },
      {
        "name": "Eichenbühl",
        "postalCode": "63928"
      },
      {
        "name": "Altenbuch",
        "postalCode": "97901"
      },
      {
        "name": "Rückholz",
        "postalCode": "87494"
      },
      {
        "name": "Ruderatshofen",
        "postalCode": "87674"
      },
      {
        "name": "Munningen",
        "postalCode": "86754"
      },
      {
        "name": "Dietenhofen",
        "postalCode": "90599"
      },
      {
        "name": "Petersaurach",
        "postalCode": "91580"
      },
      {
        "name": "Donauwörth",
        "postalCode": "86609"
      },
      {
        "name": "Wilhermsdorf",
        "postalCode": "91452"
      },
      {
        "name": "Adelsried",
        "postalCode": "86477"
      },
      {
        "name": "Welden",
        "postalCode": "86465"
      },
      {
        "name": "Theilenhofen",
        "postalCode": "91741"
      },
      {
        "name": "Absberg",
        "postalCode": "91720"
      },
      {
        "name": "Weitramsdorf",
        "postalCode": "96479"
      },
      {
        "name": "Langenaltheim",
        "postalCode": "91799"
      },
      {
        "name": "Ahorn",
        "postalCode": "96482"
      },
      {
        "name": "Breitengüßbach",
        "postalCode": "96149"
      },
      {
        "name": "Großheirath",
        "postalCode": "96269"
      },
      {
        "name": "Schwabach",
        "postalCode": "91126"
      },
      {
        "name": "Apfeldorf",
        "postalCode": "86974"
      },
      {
        "name": "Strullendorf",
        "postalCode": "96129"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90453"
      },
      {
        "name": "Bubenreuth",
        "postalCode": "91088"
      },
      {
        "name": "Nürnberg",
        "postalCode": "90402"
      },
      {
        "name": "Hilpoltstein",
        "postalCode": "91161"
      },
      {
        "name": "Eichstätt",
        "postalCode": "85072"
      },
      {
        "name": "Hochstadt a. Main",
        "postalCode": "96272"
      },
      {
        "name": "Schneckenlohe",
        "postalCode": "96277"
      },
      {
        "name": "Weißenohe",
        "postalCode": "91367"
      },
      {
        "name": "Habach",
        "postalCode": "82392"
      },
      {
        "name": "Esselbach",
        "postalCode": "97839"
      },
      {
        "name": "Kreuzwertheim",
        "postalCode": "97892"
      }
    ],
    "10": 
    [
      {
        "name": "Dillingen/Saar",
        "postalCode": "66763"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66128"
      },
      {
        "name": "Völklingen",
        "postalCode": "66333"
      },
      {
        "name": "Quierschied",
        "postalCode": "66287"
      },
      {
        "name": "Namborn",
        "postalCode": "66640"
      },
      {
        "name": "Wadgassen",
        "postalCode": "66787"
      },
      {
        "name": "Schwalbach",
        "postalCode": "66773"
      },
      {
        "name": "Riegelsberg",
        "postalCode": "66292"
      },
      {
        "name": "Nohfelden",
        "postalCode": "66625"
      },
      {
        "name": "Schiffweiler",
        "postalCode": "66578"
      },
      {
        "name": "Beckingen",
        "postalCode": "66701"
      },
      {
        "name": "Ensdorf",
        "postalCode": "66806"
      },
      {
        "name": "Oberthal",
        "postalCode": "66649"
      },
      {
        "name": "Bous",
        "postalCode": "66359"
      },
      {
        "name": "Spiesen-Elversberg",
        "postalCode": "66583"
      },
      {
        "name": "Blieskastel",
        "postalCode": "66440"
      },
      {
        "name": "Neunkirchen",
        "postalCode": "66539"
      },
      {
        "name": "Bexbach",
        "postalCode": "66450"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66129"
      },
      {
        "name": "Losheim",
        "postalCode": "66679"
      },
      {
        "name": "Tholey",
        "postalCode": "66636"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66117"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66127"
      },
      {
        "name": "Freisen",
        "postalCode": "66629"
      },
      {
        "name": "Neunkirchen",
        "postalCode": "66538"
      },
      {
        "name": "Homburg",
        "postalCode": "66424"
      },
      {
        "name": "Saarlouis",
        "postalCode": "66740"
      },
      {
        "name": "Eppelborn",
        "postalCode": "66571"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66132"
      },
      {
        "name": "Mettlach",
        "postalCode": "66693"
      },
      {
        "name": "Friedrichsthal",
        "postalCode": "66299"
      },
      {
        "name": "Wadern",
        "postalCode": "66687"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66115"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66119"
      },
      {
        "name": "Großrosseln",
        "postalCode": "66352"
      },
      {
        "name": "Nonnweiler",
        "postalCode": "66620"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66130"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66111"
      },
      {
        "name": "Perl",
        "postalCode": "66706"
      },
      {
        "name": "Nalbach",
        "postalCode": "66809"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66121"
      },
      {
        "name": "Schmelz",
        "postalCode": "66839"
      },
      {
        "name": "Sulzbach/Saar",
        "postalCode": "66280"
      },
      {
        "name": "Sankt Wendel",
        "postalCode": "66606"
      },
      {
        "name": "Ottweiler",
        "postalCode": "66564"
      },
      {
        "name": "Wallerfangen",
        "postalCode": "66798"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66113"
      },
      {
        "name": "Sankt Ingbert",
        "postalCode": "66386"
      },
      {
        "name": "Merchweiler",
        "postalCode": "66589"
      },
      {
        "name": "Weiskirchen",
        "postalCode": "66709"
      },
      {
        "name": "Heusweiler",
        "postalCode": "66265"
      },
      {
        "name": "Mandelbachtal",
        "postalCode": "66399"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66125"
      },
      {
        "name": "Neunkirchen",
        "postalCode": "66540"
      },
      {
        "name": "Rehlingen-Siersburg",
        "postalCode": "66780"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66133"
      },
      {
        "name": "Überherrn",
        "postalCode": "66802"
      },
      {
        "name": "Illingen",
        "postalCode": "66557"
      },
      {
        "name": "Marpingen",
        "postalCode": "66646"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66131"
      },
      {
        "name": "Kirkel",
        "postalCode": "66459"
      },
      {
        "name": "Lebach",
        "postalCode": "66822"
      },
      {
        "name": "Püttlingen",
        "postalCode": "66346"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66123"
      },
      {
        "name": "Kleinblittersdorf",
        "postalCode": "66271"
      },
      {
        "name": "Saarwellingen",
        "postalCode": "66793"
      },
      {
        "name": "Saarbrücken",
        "postalCode": "66126"
      },
      {
        "name": "Gersheim",
        "postalCode": "66453"
      },
      {
        "name": "Merzig",
        "postalCode": "66663"
      }
    ],
    "11":
    [
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10627"
      },
      {
        "name": "Berlin Märkisches Viertel",
        "postalCode": "13439"
      },
      {
        "name": "Berlin Rosenthal",
        "postalCode": "13158"
      },
      {
        "name": "Berlin Pankow",
        "postalCode": "13189"
      },
      {
        "name": "Berlin Britz",
        "postalCode": "12347"
      },
      {
        "name": "Berlin Köpenick",
        "postalCode": "12559"
      },
      {
        "name": "Berlin Wannsee",
        "postalCode": "14109"
      },
      {
        "name": "Berlin Westend",
        "postalCode": "14053"
      },
      {
        "name": "Berlin-Lichterfelde",
        "postalCode": "12209"
      },
      {
        "name": "Berlin Wedding",
        "postalCode": "13351"
      },
      {
        "name": "Berlin Altglienicke",
        "postalCode": "12524"
      },
      {
        "name": "Berlin Tegel",
        "postalCode": "13503"
      },
      {
        "name": "Berlin Moabit",
        "postalCode": "10559"
      },
      {
        "name": "Berlin Mitte",
        "postalCode": "10179"
      },
      {
        "name": "Berlin",
        "postalCode": "12487"
      },
      {
        "name": "Berlin Nikolassee",
        "postalCode": "14129"
      },
      {
        "name": "Berlin Wedding",
        "postalCode": "13353"
      },
      {
        "name": "Berlin Tiergarten",
        "postalCode": "10787"
      },
      {
        "name": "Berlin Moabit",
        "postalCode": "10557"
      },
      {
        "name": "Berlin Tempelhof",
        "postalCode": "12101"
      },
      {
        "name": "Berlin Prenzlauer Berg",
        "postalCode": "10437"
      },
      {
        "name": "Berlin Prenzlauer Berg",
        "postalCode": "10405"
      },
      {
        "name": "Berlin",
        "postalCode": "12305"
      },
      {
        "name": "Berlin Buckow",
        "postalCode": "12351"
      },
      {
        "name": "Berlin Friedrichshain",
        "postalCode": "10247"
      },
      {
        "name": "Berlin Schmöckwitz",
        "postalCode": "12527"
      },
      {
        "name": "Berlin Hakenfelde",
        "postalCode": "13587"
      },
      {
        "name": "Berlin Lichtenberg",
        "postalCode": "10367"
      },
      {
        "name": "Berlin Westend",
        "postalCode": "14052"
      },
      {
        "name": "Berlin Wedding",
        "postalCode": "13405"
      },
      {
        "name": "Berlin Reinickendorf",
        "postalCode": "13403"
      },
      {
        "name": "Berlin Wilmersdorf",
        "postalCode": "10719"
      },
      {
        "name": "Berlin Moabit",
        "postalCode": "10555"
      },
      {
        "name": "Berlin Lankwitz",
        "postalCode": "12249"
      },
      {
        "name": "Berlin Schöneberg",
        "postalCode": "10829"
      },
      {
        "name": "Berlin",
        "postalCode": "12309"
      },
      {
        "name": "Berlin Bohnsdorf",
        "postalCode": "12526"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "14057"
      },
      {
        "name": "Berlin Steglitz",
        "postalCode": "12169"
      },
      {
        "name": "Berlin Friedenau",
        "postalCode": "12159"
      },
      {
        "name": "Berlin Wedding",
        "postalCode": "13347"
      },
      {
        "name": "Berlin",
        "postalCode": "12277"
      },
      {
        "name": "Berlin Mitte",
        "postalCode": "10115"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "10963"
      },
      {
        "name": "Berlin Buckow",
        "postalCode": "12349"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "10997"
      },
      {
        "name": "Berlin Prenzlauer Berg",
        "postalCode": "10409"
      },
      {
        "name": "Berlin Gropiusstadt",
        "postalCode": "12353"
      },
      {
        "name": "Berlin Alt Treptow",
        "postalCode": "12435"
      },
      {
        "name": "Berlin",
        "postalCode": "10319"
      },
      {
        "name": "Berlin Biesdorf",
        "postalCode": "12683"
      },
      {
        "name": "Berlin Wilmersdorf",
        "postalCode": "10713"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10625"
      },
      {
        "name": "Berlin Lankwitz",
        "postalCode": "12247"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10589"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10587"
      },
      {
        "name": "Berlin Steglitz",
        "postalCode": "12163"
      },
      {
        "name": "Berlin Moabit",
        "postalCode": "10551"
      },
      {
        "name": "Berlin Mariendorf",
        "postalCode": "12107"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "10965"
      },
      {
        "name": "Berlin Gesundbrunnen",
        "postalCode": "13357"
      },
      {
        "name": "Berlin Friedrichshain",
        "postalCode": "10243"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12043"
      },
      {
        "name": "Berlin Niederschöneweide",
        "postalCode": "12439"
      },
      {
        "name": "Berlin Niederschönhausen",
        "postalCode": "13156"
      },
      {
        "name": "Berlin Rudow",
        "postalCode": "12355"
      },
      {
        "name": "Berlin Mahlsdorf",
        "postalCode": "12623"
      },
      {
        "name": "Berlin Lichtenfelde",
        "postalCode": "12203"
      },
      {
        "name": "Berlin Steglitz",
        "postalCode": "12167"
      },
      {
        "name": "Berlin Wilhelmsdorf",
        "postalCode": "10715"
      },
      {
        "name": "Berlin",
        "postalCode": "10827"
      },
      {
        "name": "Berlin Wartenberg",
        "postalCode": "13059"
      },
      {
        "name": "Berlin Falkenberg",
        "postalCode": "13057"
      },
      {
        "name": "Berlin Köpenick",
        "postalCode": "12559"
      },
      {
        "name": "Berlin",
        "postalCode": "12679"
      },
      {
        "name": "Berlin Spandau",
        "postalCode": "13585"
      },
      {
        "name": "Berlin Haselhorst",
        "postalCode": "13599"
      },
      {
        "name": "Berlin Lübars",
        "postalCode": "13469"
      },
      {
        "name": "Berlin Wilmersdorf",
        "postalCode": "10707"
      },
      {
        "name": "Berlin",
        "postalCode": "12307"
      },
      {
        "name": "Berlin Halensee",
        "postalCode": "10711"
      },
      {
        "name": "Berlin-West",
        "postalCode": "13409"
      },
      {
        "name": "Berlin Weißensee",
        "postalCode": "13086"
      },
      {
        "name": "Berlin Britz",
        "postalCode": "12359"
      },
      {
        "name": "Berlin",
        "postalCode": "12687"
      },
      {
        "name": "Berlin",
        "postalCode": "12685"
      },
      {
        "name": "Berlin Gatow",
        "postalCode": "14089"
      },
      {
        "name": "Berlin Steglitz",
        "postalCode": "12165"
      },
      {
        "name": "Berlin Schöneberg",
        "postalCode": "10789"
      },
      {
        "name": "Berlin Wedding",
        "postalCode": "13349"
      },
      {
        "name": "Berlin",
        "postalCode": "10825"
      },
      {
        "name": "Berlin Schöneberg",
        "postalCode": "10781"
      },
      {
        "name": "Berlin Französisch Buchholz",
        "postalCode": "13127"
      },
      {
        "name": "Berlin Westend",
        "postalCode": "14055"
      },
      {
        "name": "Berlin Wilmersdorf",
        "postalCode": "10777"
      },
      {
        "name": "Berlin-West",
        "postalCode": "13407"
      },
      {
        "name": "Berlin Blankenfelde",
        "postalCode": "13159"
      },
      {
        "name": "Berlin Prenzlauer Berg",
        "postalCode": "10435"
      },
      {
        "name": "Berlin Spandau",
        "postalCode": "13597"
      },
      {
        "name": "Berlin Zehlendorf",
        "postalCode": "14165"
      },
      {
        "name": "Berlin Tegel",
        "postalCode": "13507"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "10961"
      },
      {
        "name": "Berlin",
        "postalCode": "12305"
      },
      {
        "name": "Berlin Pankow",
        "postalCode": "13187"
      },
      {
        "name": "Berlin Friedrichshain",
        "postalCode": "10249"
      },
      {
        "name": "Berlin Oberschöneweide",
        "postalCode": "12459"
      },
      {
        "name": "Berlin Wilhelmstadt",
        "postalCode": "13593"
      },
      {
        "name": "Berlin Falkenhagener Feld",
        "postalCode": "13589"
      },
      {
        "name": "Berlin Westend",
        "postalCode": "14050"
      },
      {
        "name": "Berlin Reinickendorf",
        "postalCode": "13509"
      },
      {
        "name": "Berlin Lichtenfelde",
        "postalCode": "12207"
      },
      {
        "name": "Berlin-West",
        "postalCode": "10823"
      },
      {
        "name": "Berlin Mitte",
        "postalCode": "10178"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12059"
      },
      {
        "name": "Berlin Spandau",
        "postalCode": "13581"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10585"
      },
      {
        "name": "Berlin Schöneberg",
        "postalCode": "10783"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "10969"
      },
      {
        "name": "Berlin Mitte",
        "postalCode": "10119"
      },
      {
        "name": "Berlin",
        "postalCode": "12619"
      },
      {
        "name": "Berlin Schmargendorf",
        "postalCode": "14199"
      },
      {
        "name": "Berlin Reinickendorf",
        "postalCode": "13437"
      },
      {
        "name": "Berlin Mariendorf",
        "postalCode": "12109"
      },
      {
        "name": "Berlin Prenzlauer Berg",
        "postalCode": "10407"
      },
      {
        "name": "Berlin Alt-Hohenschönhausen",
        "postalCode": "13055"
      },
      {
        "name": "Berlin Friedrichsfelde",
        "postalCode": "10315"
      },
      {
        "name": "Berlin",
        "postalCode": "12629"
      },
      {
        "name": "Berlin Spandau",
        "postalCode": "13583"
      },
      {
        "name": "Berlin Friedenau",
        "postalCode": "12161"
      },
      {
        "name": "Berlin Wedding",
        "postalCode": "13355"
      },
      {
        "name": "Berlin Heinelsdorf",
        "postalCode": "13089"
      },
      {
        "name": "Berlin Rummelsburg",
        "postalCode": "10317"
      },
      {
        "name": "Berlin Staaken",
        "postalCode": "13591"
      },
      {
        "name": "Berlin Siemensstadt",
        "postalCode": "13629"
      },
      {
        "name": "Berlin Wilmersdorf",
        "postalCode": "10709"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10629"
      },
      {
        "name": "Berlin Märkisches Viertel",
        "postalCode": "13435"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "10999"
      },
      {
        "name": "Berlin Friedrichshain",
        "postalCode": "10245"
      },
      {
        "name": "Berlin Karlshorst",
        "postalCode": "10318"
      },
      {
        "name": "Berlin Frohnau",
        "postalCode": "13465"
      },
      {
        "name": "Berlin Wilmersdorf",
        "postalCode": "10717"
      },
      {
        "name": "Berlin Schöneberg",
        "postalCode": "10779"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12051"
      },
      {
        "name": "Berlin Weißensee",
        "postalCode": "13088"
      },
      {
        "name": "Berlin Teltowkanal III",
        "postalCode": "12489"
      },
      {
        "name": "Berlin",
        "postalCode": "12685"
      },
      {
        "name": "Berlin",
        "postalCode": "12679"
      },
      {
        "name": "Berlin Hellersdorf",
        "postalCode": "12627"
      },
      {
        "name": "Berlin Dahlem",
        "postalCode": "14195"
      },
      {
        "name": "Berlin Zehlendorf",
        "postalCode": "14167"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "14059"
      },
      {
        "name": "Berlin Hermsdorf",
        "postalCode": "13467"
      },
      {
        "name": "Berlin Moabit",
        "postalCode": "10553"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10623"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12053"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12059"
      },
      {
        "name": "Berlin Lichtenberg",
        "postalCode": "10369"
      },
      {
        "name": "Berlin Köpenik",
        "postalCode": "12555"
      },
      {
        "name": "Berlin Zehlendorf",
        "postalCode": "14163"
      },
      {
        "name": "Berlin Zehlendorf",
        "postalCode": "14169"
      },
      {
        "name": "Berlin Mariendorf",
        "postalCode": "12105"
      },
      {
        "name": "Berlin Gesundbrunnen",
        "postalCode": "13359"
      },
      {
        "name": "Berlin Tempelhof",
        "postalCode": "12099"
      },
      {
        "name": "Berlin Prenzlauer Berg",
        "postalCode": "10439"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12049"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12045"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12057"
      },
      {
        "name": "Berlin Buch",
        "postalCode": "13125"
      },
      {
        "name": "Berlin",
        "postalCode": "12557"
      },
      {
        "name": "Berlin Mahlsdorf",
        "postalCode": "12623"
      },
      {
        "name": "Berlin Grunewald",
        "postalCode": "14193"
      },
      {
        "name": "Berlin Charlottenburg",
        "postalCode": "10623"
      },
      {
        "name": "Berlin Schöneberg",
        "postalCode": "12157"
      },
      {
        "name": "Berlin Mitte",
        "postalCode": "10117"
      },
      {
        "name": "Berlin Baumschulenweg",
        "postalCode": "12437"
      },
      {
        "name": "Berlin Wiesengrund",
        "postalCode": "12587"
      },
      {
        "name": "Berlin Rahnsdorf",
        "postalCode": "12589"
      },
      {
        "name": "Berlin Wlhelmstadt",
        "postalCode": "13595"
      },
      {
        "name": "Berlin Tegel",
        "postalCode": "13505"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "12047"
      },
      {
        "name": "Berlin Blankenburg",
        "postalCode": "13129"
      },
      {
        "name": "Berlin Alt-Hohenschönhausen",
        "postalCode": "13053"
      },
      {
        "name": "Berlin",
        "postalCode": "12681"
      },
      {
        "name": "Berlin Kaulsdorf",
        "postalCode": "12621"
      },
      {
        "name": "Berlin Charlottenburg-Nord",
        "postalCode": "13627"
      },
      {
        "name": "Berlin Lichtenfelde",
        "postalCode": "12205"
      },
      {
        "name": "Berlin Wilmersdorf",
        "postalCode": "14197"
      },
      {
        "name": "Berlin Tiergarten",
        "postalCode": "10785"
      },
      {
        "name": "Berlin Kreuzberg",
        "postalCode": "10967"
      },
      {
        "name": "Berlin Neukölln",
        "postalCode": "12055"
      },
      {
        "name": "Berlin Lichtenberg",
        "postalCode": "10365"
      },
      {
        "name": "Berlin Neu-Schönhausen",
        "postalCode": "13051"
      },
      {
        "name": "Berlin",
        "postalCode": "12279"
      },
      {
        "name": "Berlin Tempelhof",
        "postalCode": "12103"
      },
      {
        "name": "Berlin Mariendorf",
        "postalCode": "12107"
      },
      {
        "name": "Berlin Rudow",
        "postalCode": "12357"
      },
      {
        "name": "Berlin",
        "postalCode": "12689"
      }
    ],
    "12":
    [
      {
        "name": "Plattenburg",
        "postalCode": "19339"
      },
      {
        "name": "Wusterhausen",
        "postalCode": "16868"
      },
      {
        "name": "Brück, Borkheide u.a.",
        "postalCode": "14822"
      },
      {
        "name": "Königs Wusterhausen",
        "postalCode": "15712"
      },
      {
        "name": "Erkner",
        "postalCode": "15537"
      },
      {
        "name": "Großräschen",
        "postalCode": "01983"
      },
      {
        "name": "Schwedt",
        "postalCode": "16303"
      },
      {
        "name": "Biesendahlshof, Berkholz-Meyenburg",
        "postalCode": "16306"
      },
      {
        "name": "Müllrose",
        "postalCode": "15299"
      },
      {
        "name": "Premnitz",
        "postalCode": "14727"
      },
      {
        "name": "Seddiner See",
        "postalCode": "14554"
      },
      {
        "name": "Großbeeren",
        "postalCode": "14979"
      },
      {
        "name": "Wittenberge, Rühstädt",
        "postalCode": "19322"
      },
      {
        "name": "Woltersdorf",
        "postalCode": "15569"
      },
      {
        "name": "Rüdersdorf",
        "postalCode": "15378"
      },
      {
        "name": "Bad Saarow-Pieskow",
        "postalCode": "15526"
      },
      {
        "name": "Cottbus",
        "postalCode": "03054"
      },
      {
        "name": "Werder/ Havel",
        "postalCode": "14542"
      },
      {
        "name": "Kremmen",
        "postalCode": "16766"
      },
      {
        "name": "Potsdam",
        "postalCode": "14476"
      },
      {
        "name": "Falkenberg/ Elster",
        "postalCode": "04895"
      },
      {
        "name": "Mittenwalde",
        "postalCode": "15749"
      },
      {
        "name": "Halbe",
        "postalCode": "15757"
      },
      {
        "name": "Calau, Bronkow",
        "postalCode": "03205"
      },
      {
        "name": "Oberbarnim, Märkische Höhe u.a.",
        "postalCode": "15377"
      },
      {
        "name": "Beetzsee, Wollin, Wenzlow, Golzow u.a.",
        "postalCode": "14778"
      },
      {
        "name": "Potsdam",
        "postalCode": "14478"
      },
      {
        "name": "Kleinmachnow",
        "postalCode": "14532"
      },
      {
        "name": "Hohen Neuendorf",
        "postalCode": "16540"
      },
      {
        "name": "Dahme u.a.",
        "postalCode": "15936"
      },
      {
        "name": "Baruth",
        "postalCode": "15837"
      },
      {
        "name": "Doberlug-Kirchhain",
        "postalCode": "03253"
      },
      {
        "name": "Schulzendorf b. Eichenwade",
        "postalCode": "15732"
      },
      {
        "name": "Senftenberg",
        "postalCode": "01968"
      },
      {
        "name": "Fürstenwalde/ Spree",
        "postalCode": "15517"
      },
      {
        "name": "Müncheberg",
        "postalCode": "15374"
      },
      {
        "name": "Frankfurt/ Oder",
        "postalCode": "15230"
      },
      {
        "name": "Gumtow, Kyritz u.a.",
        "postalCode": "16866"
      },
      {
        "name": "Fehrbellin",
        "postalCode": "16833"
      },
      {
        "name": "Neuruppin",
        "postalCode": "16827"
      },
      {
        "name": "Potsdam",
        "postalCode": "14469"
      },
      {
        "name": "Hennigsdorf",
        "postalCode": "16761"
      },
      {
        "name": "Lübbenau/ Spreewald",
        "postalCode": "03222"
      },
      {
        "name": "Zeschdorf, Podelzig, Lebus",
        "postalCode": "15326"
      },
      {
        "name": "Briesen, Rauen u.a.",
        "postalCode": "15518"
      },
      {
        "name": "Trebbin",
        "postalCode": "14959"
      },
      {
        "name": "Luckau, Waldrehna, Heideblick, Fürstlich Drehna",
        "postalCode": "15926"
      },
      {
        "name": "Biesenthal",
        "postalCode": "16359"
      },
      {
        "name": "Eisenhüttenstadt",
        "postalCode": "15890"
      },
      {
        "name": "Brandenburg/ Havel",
        "postalCode": "14772"
      },
      {
        "name": "Nauen",
        "postalCode": "14641"
      },
      {
        "name": "Fehrbellin, Temnitzquell, Märkisch Linden u.a.",
        "postalCode": "16818"
      },
      {
        "name": "Lindow u.a.",
        "postalCode": "16835"
      },
      {
        "name": "Oranienburg, Mühlenbecker Land",
        "postalCode": "16515"
      },
      {
        "name": "Birkenwerder",
        "postalCode": "16547"
      },
      {
        "name": "Glienicke/Nordbahn",
        "postalCode": "16548"
      },
      {
        "name": "Melchow, Chorin u.a.",
        "postalCode": "16230"
      },
      {
        "name": "Angermünde",
        "postalCode": "16278"
      },
      {
        "name": "Neu-Seeland, Neupetershain",
        "postalCode": "03103"
      },
      {
        "name": "Letschin",
        "postalCode": "15324"
      },
      {
        "name": "Gumtow, Kyritz u.a.",
        "postalCode": "16866"
      },
      {
        "name": "Rhinow",
        "postalCode": "14728"
      },
      {
        "name": "Lehnin",
        "postalCode": "14797"
      },
      {
        "name": "Potsdam",
        "postalCode": "14482"
      },
      {
        "name": "Biesendahlshof, Berkholz-Meyenburg",
        "postalCode": "16306"
      },
      {
        "name": "Treplin, Jacobsdorf, Frankfurt (Oder)",
        "postalCode": "15236"
      },
      {
        "name": "Forst/ Lausitz",
        "postalCode": "03149"
      },
      {
        "name": "Finsterwalde",
        "postalCode": "03238"
      },
      {
        "name": "Ruhland",
        "postalCode": "01945"
      },
      {
        "name": "Meyenburg, Kümmernitztal u.a.",
        "postalCode": "16945"
      },
      {
        "name": "Potsdam",
        "postalCode": "14476"
      },
      {
        "name": "Schlieben",
        "postalCode": "04936"
      },
      {
        "name": "Schorfheide",
        "postalCode": "16244"
      },
      {
        "name": "Wittenberge, Rühstädt",
        "postalCode": "19322"
      },
      {
        "name": "Legde/Quitzöbel, Bad Wilsnack",
        "postalCode": "19336"
      },
      {
        "name": "Wriezen",
        "postalCode": "16269"
      },
      {
        "name": "Briesen, Rauen u.a.",
        "postalCode": "15518"
      },
      {
        "name": "Neutrebbin, Neuhardenberg",
        "postalCode": "15320"
      },
      {
        "name": "Guben, Schenkendöbern",
        "postalCode": "03172"
      },
      {
        "name": "Lauchhammer",
        "postalCode": "01979"
      },
      {
        "name": "Neustadt (Dosse) u.a.",
        "postalCode": "16845"
      },
      {
        "name": "Belzig",
        "postalCode": "14806"
      },
      {
        "name": "Brandenburg/ Havel",
        "postalCode": "14770"
      },
      {
        "name": "Groß Kreutz",
        "postalCode": "14550"
      },
      {
        "name": "Michendorf",
        "postalCode": "14552"
      },
      {
        "name": "Bad Liebenwerda",
        "postalCode": "04924"
      },
      {
        "name": "Am Mellensee",
        "postalCode": "15838"
      },
      {
        "name": "Joachimsthal u.a.",
        "postalCode": "16247"
      },
      {
        "name": "Schönwalde",
        "postalCode": "15910"
      },
      {
        "name": "Lübben (Spreewald)",
        "postalCode": "15907"
      },
      {
        "name": "Beeskow",
        "postalCode": "15848"
      },
      {
        "name": "Neustadt (Dosse) u.a.",
        "postalCode": "16845"
      },
      {
        "name": "Nuthetal",
        "postalCode": "14558"
      },
      {
        "name": "Herzberg/ Elster",
        "postalCode": "04916"
      },
      {
        "name": "Borgsdorf",
        "postalCode": "16556"
      },
      {
        "name": "Liebenwalde",
        "postalCode": "16559"
      },
      {
        "name": "Hohen Neuendorf OT Bergfelde",
        "postalCode": "16562"
      },
      {
        "name": "Mühlenbecker Land",
        "postalCode": "16567"
      },
      {
        "name": "Plessa, Schraden",
        "postalCode": "04928"
      },
      {
        "name": "Strausberg",
        "postalCode": "15344"
      },
      {
        "name": "Straupitz",
        "postalCode": "15913"
      },
      {
        "name": "Kolkwitz",
        "postalCode": "03099"
      },
      {
        "name": "Cottbus",
        "postalCode": "03055"
      },
      {
        "name": "Elsterwerda",
        "postalCode": "04910"
      },
      {
        "name": "Zeuthen",
        "postalCode": "15738"
      },
      {
        "name": "Groß Köris",
        "postalCode": "15746"
      },
      {
        "name": "Fredersdorf-Vogelsdorf, Petershagen",
        "postalCode": "15370"
      },
      {
        "name": "Rüdersdorf",
        "postalCode": "15562"
      },
      {
        "name": "Treplin, Jacobsdorf, Frankfurt (Oder)",
        "postalCode": "15236"
      },
      {
        "name": "Görzke",
        "postalCode": "14828"
      },
      {
        "name": "Ziesar",
        "postalCode": "14793"
      },
      {
        "name": "Rheinsberg",
        "postalCode": "16837"
      },
      {
        "name": "Potsdam",
        "postalCode": "14480"
      },
      {
        "name": "Lychen",
        "postalCode": "17279"
      },
      {
        "name": "Schildow",
        "postalCode": "16552"
      },
      {
        "name": "Leegebruch",
        "postalCode": "16767"
      },
      {
        "name": "Treplin, Jacobsdorf, Frankfurt (Oder)",
        "postalCode": "15236"
      },
      {
        "name": "Milower Land, Schollene, Nennhausen u.a.",
        "postalCode": "14715"
      },
      {
        "name": "Blankenfelde-Mahlow",
        "postalCode": "15831"
      },
      {
        "name": "Wandlitz",
        "postalCode": "16348"
      },
      {
        "name": "Crinitz",
        "postalCode": "03246"
      },
      {
        "name": "Schwarzheide N.L.",
        "postalCode": "01987"
      },
      {
        "name": "Altdöbern, Luckaitztal",
        "postalCode": "03229"
      },
      {
        "name": "Drebkau",
        "postalCode": "03116"
      },
      {
        "name": "Cottbus",
        "postalCode": "03051"
      },
      {
        "name": "Neuzelle",
        "postalCode": "15898"
      },
      {
        "name": "Döbern",
        "postalCode": "03159"
      },
      {
        "name": "Uckerland, Groß Luckow, Schönhausen",
        "postalCode": "17337"
      },
      {
        "name": "Lichtenow, Altlandsberg u.a.",
        "postalCode": "15345"
      },
      {
        "name": "Cottbus",
        "postalCode": "03048"
      },
      {
        "name": "Treplin, Jacobsdorf, Frankfurt (Oder)",
        "postalCode": "15236"
      },
      {
        "name": "Cottbus",
        "postalCode": "03052"
      },
      {
        "name": "Triglitz, Putlitz",
        "postalCode": "16949"
      },
      {
        "name": "Ketzin",
        "postalCode": "14669"
      },
      {
        "name": "Gransee, Löwenberg",
        "postalCode": "16775"
      },
      {
        "name": "Potsdam",
        "postalCode": "14467"
      },
      {
        "name": "Schönwalde",
        "postalCode": "14621"
      },
      {
        "name": "Potsdam",
        "postalCode": "14471"
      },
      {
        "name": "Perleberg, Berge u.a.",
        "postalCode": "19348"
      },
      {
        "name": "Prenzlau, Nordwestuckermark u.a.",
        "postalCode": "17291"
      },
      {
        "name": "Königs Wusterhausen",
        "postalCode": "15711"
      },
      {
        "name": "Wendisch Rietz",
        "postalCode": "15864"
      },
      {
        "name": "Brüssow",
        "postalCode": "17326"
      },
      {
        "name": "Niemegk",
        "postalCode": "14823"
      },
      {
        "name": "Neuruppin",
        "postalCode": "16816"
      },
      {
        "name": "Rheinsberg",
        "postalCode": "16831"
      },
      {
        "name": "Falkensee",
        "postalCode": "14612"
      },
      {
        "name": "Golßen",
        "postalCode": "15938"
      },
      {
        "name": "Schönefeld",
        "postalCode": "12529"
      },
      {
        "name": "Werneuchen",
        "postalCode": "16356"
      },
      {
        "name": "Wildau",
        "postalCode": "15745"
      },
      {
        "name": "Eberswalde",
        "postalCode": "16225"
      },
      {
        "name": "Spreenhagen",
        "postalCode": "15528"
      },
      {
        "name": "Seelow, Lietzen u.a.",
        "postalCode": "15306"
      },
      {
        "name": "Brieskow-Finkenheerd",
        "postalCode": "15295"
      },
      {
        "name": "Neuhausen/Spree",
        "postalCode": "03058"
      },
      {
        "name": "Golzow, Zechin u.a.",
        "postalCode": "15328"
      },
      {
        "name": "Wusterwitz, Rosenau, Bensdorf",
        "postalCode": "14789"
      },
      {
        "name": "Havelsee",
        "postalCode": "14798"
      },
      {
        "name": "Potsdam",
        "postalCode": "14473"
      },
      {
        "name": "Panketal",
        "postalCode": "16341"
      },
      {
        "name": "Bad Freienwalde u.a.",
        "postalCode": "16259"
      },
      {
        "name": "Rathenow",
        "postalCode": "14712"
      },
      {
        "name": "Wittstock/Dosse, Heiligengrabe",
        "postalCode": "16909"
      },
      {
        "name": "Brandenburg/ Havel",
        "postalCode": "14774"
      },
      {
        "name": "Treuenbrietzen",
        "postalCode": "14929"
      },
      {
        "name": "Röderland, Großthiemig u.a.",
        "postalCode": "04932"
      },
      {
        "name": "Bernau",
        "postalCode": "16321"
      },
      {
        "name": "Teupitz",
        "postalCode": "15755"
      },
      {
        "name": "Bestensee",
        "postalCode": "15741"
      },
      {
        "name": "Lenzen",
        "postalCode": "19309"
      },
      {
        "name": "Frankfurt/ Oder",
        "postalCode": "15234"
      },
      {
        "name": "Wiesenburg",
        "postalCode": "14827"
      },
      {
        "name": "Fehrbellin, Temnitzquell, Märkisch Linden u.a.",
        "postalCode": "16818"
      },
      {
        "name": "Jüterbog",
        "postalCode": "14913"
      },
      {
        "name": "Zehdenick",
        "postalCode": "16792"
      },
      {
        "name": "Karstädt, Dambeck, Klüß",
        "postalCode": "19357"
      },
      {
        "name": "Schöneiche bei Berlin",
        "postalCode": "15566"
      },
      {
        "name": "Storkow",
        "postalCode": "15859"
      },
      {
        "name": "Oderberg u.a.",
        "postalCode": "16248"
      },
      {
        "name": "Schipkau",
        "postalCode": "01994"
      },
      {
        "name": "Luckenwalde",
        "postalCode": "14943"
      },
      {
        "name": "Lichtenow, Altlandsberg u.a.",
        "postalCode": "15345"
      },
      {
        "name": "Melchow, Chorin u.a.",
        "postalCode": "16230"
      },
      {
        "name": "Schipkau",
        "postalCode": "01993"
      },
      {
        "name": "Burg/Spreewald u.a.",
        "postalCode": "03096"
      },
      {
        "name": "Welzow",
        "postalCode": "03119"
      },
      {
        "name": "Gartz (Oder)",
        "postalCode": "16307"
      },
      {
        "name": "Cottbus",
        "postalCode": "03050"
      },
      {
        "name": "Neustadt (Dosse) u.a.",
        "postalCode": "16845"
      },
      {
        "name": "Dallgow-Döberitz",
        "postalCode": "14624"
      },
      {
        "name": "Teltow",
        "postalCode": "14513"
      },
      {
        "name": "Blankenfelde-Mahlow",
        "postalCode": "15831"
      },
      {
        "name": "Senftenberg",
        "postalCode": "01996"
      },
      {
        "name": "Cottbus",
        "postalCode": "03044"
      },
      {
        "name": "Treplin, Jacobsdorf, Frankfurt (Oder)",
        "postalCode": "15236"
      },
      {
        "name": "Treplin, Jacobsdorf, Frankfurt (Oder)",
        "postalCode": "15236"
      },
      {
        "name": "Jänschwalde",
        "postalCode": "03197"
      },
      {
        "name": "Frankfurt/ Oder",
        "postalCode": "15232"
      },
      {
        "name": "Ludwigsfelde",
        "postalCode": "14974"
      },
      {
        "name": "Märkisch Buchholz",
        "postalCode": "15748"
      },
      {
        "name": "Fehrbellin, Temnitzquell, Märkisch Linden u.a.",
        "postalCode": "16818"
      },
      {
        "name": "Nuthe-Urstromtal",
        "postalCode": "14947"
      },
      {
        "name": "Cottbus",
        "postalCode": "03046"
      },
      {
        "name": "Cottbus",
        "postalCode": "03053"
      },
      {
        "name": "Brieselang",
        "postalCode": "14656"
      },
      {
        "name": "Velten, Oberkrämer",
        "postalCode": "16727"
      },
      {
        "name": "Mühlberg, Bad Liebenwerda",
        "postalCode": "04931"
      },
      {
        "name": "Zossen",
        "postalCode": "15806"
      },
      {
        "name": "Templin, Boitzenburg u.a.",
        "postalCode": "17268"
      },
      {
        "name": "Blankenfelde-Mahlow",
        "postalCode": "15827"
      },
      {
        "name": "Sonnewalde",
        "postalCode": "03249"
      },
      {
        "name": "Ortrand",
        "postalCode": "01990"
      },
      {
        "name": "Cottbus",
        "postalCode": "03042"
      },
      {
        "name": "Beetzsee, Wollin, Wenzlow, Golzow u.a.",
        "postalCode": "14778"
      },
      {
        "name": "Beelitz",
        "postalCode": "14547"
      },
      {
        "name": "Nuthetal",
        "postalCode": "14558"
      },
      {
        "name": "Uebigau-Wahrenbrück",
        "postalCode": "04938"
      },
      {
        "name": "Pritzwalk, Groß Pankow",
        "postalCode": "16928"
      },
      {
        "name": "Vetschau",
        "postalCode": "03226"
      },
      {
        "name": "Friesack",
        "postalCode": "14662"
      },
      {
        "name": "Fürstenberg",
        "postalCode": "16798"
      },
      {
        "name": "Uckerland, Groß Luckow, Schönhausen",
        "postalCode": "17337"
      },
      {
        "name": "Heidesee",
        "postalCode": "15754"
      },
      {
        "name": "Eberswalde",
        "postalCode": "16227"
      },
      {
        "name": "Briesen, Rauen u.a.",
        "postalCode": "15518"
      },
      {
        "name": "Peitz",
        "postalCode": "03185"
      },
      {
        "name": "Neustadt (Dosse) u.a.",
        "postalCode": "16845"
      },
      {
        "name": "Brandenburg/Havel",
        "postalCode": "14776"
      },
      {
        "name": "Schwielowswee",
        "postalCode": "14548"
      },
      {
        "name": "Rangsdorf",
        "postalCode": "15834"
      },
      {
        "name": "Perleberg, Berge u.a.",
        "postalCode": "19348"
      },
      {
        "name": "Hohenleipisch",
        "postalCode": "04934"
      },
      {
        "name": "Neuenhagen, Hoppegarten",
        "postalCode": "15366"
      },
      {
        "name": "Königs Wusterhausen",
        "postalCode": "15713"
      },
      {
        "name": "Schipkau",
        "postalCode": "01998"
      },
      {
        "name": "Lieberose",
        "postalCode": "15868"
      },
      {
        "name": "Spremberg, Tschernitz u.a.",
        "postalCode": "03130"
      }
    ],
    "13":
    [
      {
        "name": "Insel Poel",
        "postalCode": "23999"
      },
      {
        "name": "Pinnow",
        "postalCode": "19065"
      },
      {
        "name": "Rastow",
        "postalCode": "19077"
      },
      {
        "name": "Zingst a. Darß",
        "postalCode": "18374"
      },
      {
        "name": "Feldberger Seenlandschaft",
        "postalCode": "17258"
      },
      {
        "name": "Putbus",
        "postalCode": "18581"
      },
      {
        "name": "Uckerland, Groß Luckow, Schönhausen",
        "postalCode": "17337"
      },
      {
        "name": "Saal",
        "postalCode": "18317"
      },
      {
        "name": "Neukalen",
        "postalCode": "17154"
      },
      {
        "name": "Spornitz",
        "postalCode": "19372"
      },
      {
        "name": "Brüsewitz",
        "postalCode": "19071"
      },
      {
        "name": "Amt Neuhaus, Stapel",
        "postalCode": "19273"
      },
      {
        "name": "Wolgast",
        "postalCode": "17438"
      },
      {
        "name": "Blankensee, Grambow u.a.",
        "postalCode": "17322"
      },
      {
        "name": "Schwerin",
        "postalCode": "19059"
      },
      {
        "name": "Plate",
        "postalCode": "19086"
      },
      {
        "name": "Rerik, Bastorf, Biendorf",
        "postalCode": "18230"
      },
      {
        "name": "Rechlin",
        "postalCode": "17248"
      },
      {
        "name": "Zarrentin",
        "postalCode": "19246"
      },
      {
        "name": "Neustadt-Glewe",
        "postalCode": "19306"
      },
      {
        "name": "Boltenhagen",
        "postalCode": "23946"
      },
      {
        "name": "Neu Kaliß",
        "postalCode": "19294"
      },
      {
        "name": "Laage, Wardow u.a.",
        "postalCode": "18299"
      },
      {
        "name": "Groß Miltzow",
        "postalCode": "17349"
      },
      {
        "name": "Friedland, Galenbeck, Datzetal",
        "postalCode": "17099"
      },
      {
        "name": "Ducherow",
        "postalCode": "17398"
      },
      {
        "name": "Schwerin",
        "postalCode": "19055"
      },
      {
        "name": "Bernitt, Qualitz, Warnow, Zernin u.a.",
        "postalCode": "18249"
      },
      {
        "name": "Nossentiner Hütte",
        "postalCode": "17214"
      },
      {
        "name": "Waren/ Müritz",
        "postalCode": "17192"
      },
      {
        "name": "Gingst",
        "postalCode": "18569"
      },
      {
        "name": "Sassnitz",
        "postalCode": "18546"
      },
      {
        "name": "Karlshagen",
        "postalCode": "17449"
      },
      {
        "name": "Wittenförden u.a.",
        "postalCode": "19073"
      },
      {
        "name": "Lübstorf",
        "postalCode": "19069"
      },
      {
        "name": "Güstrow",
        "postalCode": "18273"
      },
      {
        "name": "Rostock, Gelbensande, Rövershagen u.a.",
        "postalCode": "18182"
      },
      {
        "name": "Marlow",
        "postalCode": "18337"
      },
      {
        "name": "Franzburg, Richtenberg, u.a.",
        "postalCode": "18461"
      },
      {
        "name": "Niepars",
        "postalCode": "18442"
      },
      {
        "name": "Grimmen",
        "postalCode": "18507"
      },
      {
        "name": "Hiddensee",
        "postalCode": "18565"
      },
      {
        "name": "Krien u.a.",
        "postalCode": "17391"
      },
      {
        "name": "Banzkow, Sukow",
        "postalCode": "19079"
      },
      {
        "name": "Neukloster",
        "postalCode": "23992"
      },
      {
        "name": "Bützow u.a.",
        "postalCode": "18246"
      },
      {
        "name": "Boizenburg, Gresse, Greven u.a.",
        "postalCode": "19258"
      },
      {
        "name": "Binz",
        "postalCode": "18609"
      },
      {
        "name": "Karlshagen",
        "postalCode": "17449"
      },
      {
        "name": "Karlshagen",
        "postalCode": "17449"
      },
      {
        "name": "Torgelow",
        "postalCode": "17358"
      },
      {
        "name": "Barnekow, Gägelow u.a.",
        "postalCode": "23968"
      },
      {
        "name": "Jördenstorf, Prebberede u.a.",
        "postalCode": "17168"
      },
      {
        "name": "Saal",
        "postalCode": "18317"
      },
      {
        "name": "Wesenberg",
        "postalCode": "17255"
      },
      {
        "name": "Karstädt, Dambeck, Klüß",
        "postalCode": "19357"
      },
      {
        "name": "Bad Doberan, Bartenshagen-Parkentin u.a.",
        "postalCode": "18209"
      },
      {
        "name": "Uckerland, Groß Luckow, Schönhausen",
        "postalCode": "17337"
      },
      {
        "name": "Schwerin",
        "postalCode": "19053"
      },
      {
        "name": "Demmin",
        "postalCode": "17109"
      },
      {
        "name": "Rakow",
        "postalCode": "18516"
      },
      {
        "name": "Garz/ Rügen",
        "postalCode": "18574"
      },
      {
        "name": "Gingst",
        "postalCode": "18569"
      },
      {
        "name": "Neubrandenburg",
        "postalCode": "17036"
      },
      {
        "name": "Pampow",
        "postalCode": "19075"
      },
      {
        "name": "Anklam",
        "postalCode": "17389"
      },
      {
        "name": "Karlshagen",
        "postalCode": "17449"
      },
      {
        "name": "Dömitz",
        "postalCode": "19303"
      },
      {
        "name": "Wittenförden u.a.",
        "postalCode": "19073"
      },
      {
        "name": "Lalendorf, Langhagen",
        "postalCode": "18279"
      },
      {
        "name": "Ahrenshagen-Daskow, Trinwillershagen u.a.",
        "postalCode": "18320"
      },
      {
        "name": "Röbel/Müritz",
        "postalCode": "17207"
      },
      {
        "name": "Schwerin",
        "postalCode": "19055"
      },
      {
        "name": "Hagenow u.a.",
        "postalCode": "19230"
      },
      {
        "name": "Blankensee, Grambow u.a.",
        "postalCode": "17322"
      },
      {
        "name": "Usedom u.a.",
        "postalCode": "17406"
      },
      {
        "name": "Rostock, Lambrechtshagen",
        "postalCode": "18069"
      },
      {
        "name": "Rostock, Graal-Müritz",
        "postalCode": "18181"
      },
      {
        "name": "Velgast",
        "postalCode": "18469"
      },
      {
        "name": "Samtens",
        "postalCode": "18573"
      },
      {
        "name": "Jarmen",
        "postalCode": "17126"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Benz, Heringsdorf u.a.",
        "postalCode": "17429"
      },
      {
        "name": "Seebad Ahlbeck",
        "postalCode": "17419"
      },
      {
        "name": "Lützow",
        "postalCode": "19209"
      },
      {
        "name": "Rostock",
        "postalCode": "18106"
      },
      {
        "name": "Rostock",
        "postalCode": "18057"
      },
      {
        "name": "Löbnitz",
        "postalCode": "18314"
      },
      {
        "name": "Tribsees",
        "postalCode": "18465"
      },
      {
        "name": "Prohn",
        "postalCode": "18445"
      },
      {
        "name": "Greifswald",
        "postalCode": "17489"
      },
      {
        "name": "Putbus",
        "postalCode": "18581"
      },
      {
        "name": "Karlshagen",
        "postalCode": "17449"
      },
      {
        "name": "Vogelsang-Warsin, Meiersberg, Mönkebude u.a.",
        "postalCode": "17375"
      },
      {
        "name": "Vogelsang-Warsin, Meiersberg, Mönkebude u.a.",
        "postalCode": "17375"
      },
      {
        "name": "Ostseebad Heringsdorf",
        "postalCode": "17424"
      },
      {
        "name": "Neuburg-Steinhausen, Hornstorf",
        "postalCode": "23974"
      },
      {
        "name": "Rostock, Graal-Müritz",
        "postalCode": "18181"
      },
      {
        "name": "Bad Sülze",
        "postalCode": "18334"
      },
      {
        "name": "Mirow",
        "postalCode": "17252"
      },
      {
        "name": "Stralsund",
        "postalCode": "18435"
      },
      {
        "name": "Elmenhorst/Lichtenhagen, Rostock",
        "postalCode": "18107"
      },
      {
        "name": "Elmenhorst/Lichtenhagen, Rostock",
        "postalCode": "18107"
      },
      {
        "name": "Dierhagen",
        "postalCode": "18347"
      },
      {
        "name": "Tessin, Grammow u.a.",
        "postalCode": "18195"
      },
      {
        "name": "Barth",
        "postalCode": "18356"
      },
      {
        "name": "Stralsund",
        "postalCode": "18437"
      },
      {
        "name": "Wismar",
        "postalCode": "23970"
      },
      {
        "name": "Brüel",
        "postalCode": "19412"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Goldberg",
        "postalCode": "19399"
      },
      {
        "name": "Stavenhagen",
        "postalCode": "17153"
      },
      {
        "name": "Stralsund",
        "postalCode": "18439"
      },
      {
        "name": "Stralsund",
        "postalCode": "18439"
      },
      {
        "name": "Bentzin",
        "postalCode": "17129"
      },
      {
        "name": "Bergen/ Rügen",
        "postalCode": "18528"
      },
      {
        "name": "Karlsburg",
        "postalCode": "17495"
      },
      {
        "name": "Uckerland, Groß Luckow, Schönhausen",
        "postalCode": "17337"
      },
      {
        "name": "Strasburg",
        "postalCode": "17335"
      },
      {
        "name": "Pasewalk u.a.",
        "postalCode": "17309"
      },
      {
        "name": "Koserow",
        "postalCode": "17459"
      },
      {
        "name": "Krackow, Nadrensee",
        "postalCode": "17329"
      },
      {
        "name": "Schwerin",
        "postalCode": "19063"
      },
      {
        "name": "Krakow, Dobbin-Linstow u.a.",
        "postalCode": "18292"
      },
      {
        "name": "Gingst",
        "postalCode": "18569"
      },
      {
        "name": "Neubrandenburg",
        "postalCode": "17034"
      },
      {
        "name": "Sagard",
        "postalCode": "18551"
      },
      {
        "name": "Schönberg",
        "postalCode": "23923"
      },
      {
        "name": "Grevesmühlen, Stepenitztal, Upahl u.a.",
        "postalCode": "23936"
      },
      {
        "name": "Lübz, Passow",
        "postalCode": "19386"
      },
      {
        "name": "Rostock",
        "postalCode": "18109"
      },
      {
        "name": "Prerow a. Darß",
        "postalCode": "18375"
      },
      {
        "name": "Burow",
        "postalCode": "17089"
      },
      {
        "name": "Neubrandenburg",
        "postalCode": "17033"
      },
      {
        "name": "Greifswald",
        "postalCode": "17489"
      },
      {
        "name": "Spornitz",
        "postalCode": "19372"
      },
      {
        "name": "Kröpelin, Carinerland",
        "postalCode": "18236"
      },
      {
        "name": "Uckerland, Groß Luckow, Schönhausen",
        "postalCode": "17337"
      },
      {
        "name": "Wolgast",
        "postalCode": "17438"
      },
      {
        "name": "Karlshagen",
        "postalCode": "17449"
      },
      {
        "name": "Roggentin, Broderstorf u.a.",
        "postalCode": "18184"
      },
      {
        "name": "Penzlin",
        "postalCode": "17217"
      },
      {
        "name": "Dranske",
        "postalCode": "18556"
      },
      {
        "name": "Wismar, Groß Krankow u.a.",
        "postalCode": "23966"
      },
      {
        "name": "Wismar, Groß Krankow u.a.",
        "postalCode": "23966"
      },
      {
        "name": "Domsühl, Mestlin, Obere Warnow u.a.",
        "postalCode": "19374"
      },
      {
        "name": "Kühlungsborn",
        "postalCode": "18225"
      },
      {
        "name": "Vellahn",
        "postalCode": "19260"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Wolgast",
        "postalCode": "17438"
      },
      {
        "name": "Blankensee, Grambow u.a.",
        "postalCode": "17322"
      },
      {
        "name": "Stäbelow, Kritzmow",
        "postalCode": "18198"
      },
      {
        "name": "Neustrelitz",
        "postalCode": "17235"
      },
      {
        "name": "Altentreptow",
        "postalCode": "17087"
      },
      {
        "name": "Greifswald",
        "postalCode": "17493"
      },
      {
        "name": "Dummerstorf",
        "postalCode": "18196"
      },
      {
        "name": "Miltzow u.a.",
        "postalCode": "18519"
      },
      {
        "name": "Sponholz, Neunkirchen u.a.",
        "postalCode": "17039"
      },
      {
        "name": "Gützkow",
        "postalCode": "17506"
      },
      {
        "name": "Friedland, Galenbeck, Datzetal",
        "postalCode": "17099"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Eggesin",
        "postalCode": "17367"
      },
      {
        "name": "Ludwigslust",
        "postalCode": "19288"
      },
      {
        "name": "Rostock",
        "postalCode": "18119"
      },
      {
        "name": "Möllenhagen",
        "postalCode": "17219"
      },
      {
        "name": "Demmin u.a.",
        "postalCode": "17111"
      },
      {
        "name": "Cölpin",
        "postalCode": "17094"
      },
      {
        "name": "Greifswald",
        "postalCode": "17493"
      },
      {
        "name": "Klein Bünzow",
        "postalCode": "17390"
      },
      {
        "name": "Vogelsang-Warsin, Meiersberg, Mönkebude u.a.",
        "postalCode": "17375"
      },
      {
        "name": "Zinnowitz",
        "postalCode": "17454"
      },
      {
        "name": "Rostock",
        "postalCode": "18146"
      },
      {
        "name": "Malchin",
        "postalCode": "17139"
      },
      {
        "name": "Greifswald",
        "postalCode": "17493"
      },
      {
        "name": "Dassow",
        "postalCode": "23942"
      },
      {
        "name": "Grabow u.a.",
        "postalCode": "19300"
      },
      {
        "name": "Crivitz, Friedrichsruhe u.a.",
        "postalCode": "19089"
      },
      {
        "name": "Sellin",
        "postalCode": "18586"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Ferdinandshof u.a.",
        "postalCode": "17379"
      },
      {
        "name": "Karlshagen",
        "postalCode": "17449"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Ueckermünde",
        "postalCode": "17373"
      },
      {
        "name": "Boltenhagen",
        "postalCode": "23946"
      },
      {
        "name": "Wismar, Groß Krankow u.a.",
        "postalCode": "23966"
      },
      {
        "name": "Bad Kleinen u.a.",
        "postalCode": "23996"
      },
      {
        "name": "Dorf Mecklenburg, Lübow u.a.",
        "postalCode": "23972"
      },
      {
        "name": "Rostock, Papendorf u.a.",
        "postalCode": "18059"
      },
      {
        "name": "Wredenhagen",
        "postalCode": "17209"
      },
      {
        "name": "Sanitz",
        "postalCode": "18190"
      },
      {
        "name": "Grabowhöfe, Moltzow u.a.",
        "postalCode": "17194"
      },
      {
        "name": "Zingst a. Darß",
        "postalCode": "18374"
      },
      {
        "name": "Möllenbeck",
        "postalCode": "17237"
      },
      {
        "name": "Greifswald",
        "postalCode": "17491"
      },
      {
        "name": "Lübtheen",
        "postalCode": "19249"
      },
      {
        "name": "Vogelsang-Warsin, Meiersberg, Mönkebude u.a.",
        "postalCode": "17375"
      },
      {
        "name": "Rostock",
        "postalCode": "18055"
      },
      {
        "name": "Samtens",
        "postalCode": "18573"
      },
      {
        "name": "Satow",
        "postalCode": "18239"
      },
      {
        "name": "Löcknitz, Rothenklempenow",
        "postalCode": "17321"
      },
      {
        "name": "Warin",
        "postalCode": "19417"
      },
      {
        "name": "Marnitz, Siggelkow",
        "postalCode": "19376"
      },
      {
        "name": "Schwerin",
        "postalCode": "19061"
      },
      {
        "name": "Schwaan u.a.",
        "postalCode": "18258"
      },
      {
        "name": "Rostock, Gelbensande, Rövershagen u.a.",
        "postalCode": "18182"
      },
      {
        "name": "Barth",
        "postalCode": "18356"
      },
      {
        "name": "Gingst",
        "postalCode": "18569"
      },
      {
        "name": "Rostock, Lambrechtshagen",
        "postalCode": "18069"
      },
      {
        "name": "Rostock",
        "postalCode": "18147"
      },
      {
        "name": "Ribnitz-Damgarten",
        "postalCode": "18311"
      },
      {
        "name": "Rosenow",
        "postalCode": "17091"
      },
      {
        "name": "Hiddensee",
        "postalCode": "18565"
      },
      {
        "name": "Sponholz, Neunkirchen u.a.",
        "postalCode": "17039"
      },
      {
        "name": "Greifswald",
        "postalCode": "17493"
      },
      {
        "name": "Spantekow",
        "postalCode": "17392"
      },
      {
        "name": "Parchim",
        "postalCode": "19370"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Wittenburg u.a.",
        "postalCode": "19243"
      },
      {
        "name": "Klütz",
        "postalCode": "23948"
      },
      {
        "name": "Reimershagen, Lohmen, Zehna, Hägerfelde u.a.",
        "postalCode": "18276"
      },
      {
        "name": "Prohn",
        "postalCode": "18445"
      },
      {
        "name": "Gingst",
        "postalCode": "18569"
      },
      {
        "name": "Neuenkirchen",
        "postalCode": "17498"
      },
      {
        "name": "Sternberg",
        "postalCode": "19406"
      },
      {
        "name": "Retschow, Admannshagen-Bargeshagen u.a.",
        "postalCode": "18211"
      },
      {
        "name": "Retschow, Admannshagen-Bargeshagen u.a.",
        "postalCode": "18211"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      },
      {
        "name": "Penkun u.a.",
        "postalCode": "17328"
      },
      {
        "name": "Rehna, Carlow u.a.",
        "postalCode": "19217"
      },
      {
        "name": "Rostock, Papendorf u.a.",
        "postalCode": "18059"
      },
      {
        "name": "Plau am See",
        "postalCode": "19395"
      },
      {
        "name": "Malchow u.a.",
        "postalCode": "17213"
      },
      {
        "name": "Dahmen, Groß Wokern, Teterow",
        "postalCode": "17166"
      },
      {
        "name": "Glewitz",
        "postalCode": "18513"
      },
      {
        "name": "Möllenbeck",
        "postalCode": "17237"
      },
      {
        "name": "Loitz",
        "postalCode": "17121"
      },
      {
        "name": "Stralsund",
        "postalCode": "18439"
      },
      {
        "name": "Greifswald",
        "postalCode": "17493"
      },
      {
        "name": "Leezen",
        "postalCode": "19067"
      },
      {
        "name": "Gadebusch",
        "postalCode": "19205"
      },
      {
        "name": "Lubmin",
        "postalCode": "17509"
      },
      {
        "name": "Gnoien u.a.",
        "postalCode": "17179"
      },
      {
        "name": "Dargun",
        "postalCode": "17159"
      },
      {
        "name": "Wittenhagen",
        "postalCode": "18510"
      },
      {
        "name": "Woldegk",
        "postalCode": "17348"
      },
      {
        "name": "Friedland",
        "postalCode": "17098"
      },
      {
        "name": "Neubukow, Ravensberg u.a.",
        "postalCode": "18233"
      },
      {
        "name": "Schwerin",
        "postalCode": "19057"
      },
      {
        "name": "Kröslin, Krummin, Lassan u.a.",
        "postalCode": "17440"
      }
    ],
    "14":
    [
      {
        "name": "Treuen",
        "postalCode": "08233"
      },
      {
        "name": "Großpösna",
        "postalCode": "04463"
      },
      {
        "name": "Zschorlau",
        "postalCode": "08321"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09125"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09130"
      },
      {
        "name": "Leubsdorf, Gornau, Augustusburg",
        "postalCode": "09573"
      },
      {
        "name": "Ostritz, Schönau-Berzdorf",
        "postalCode": "02899"
      },
      {
        "name": "Rosenbach",
        "postalCode": "08548"
      },
      {
        "name": "Pegau, Elstertrebnitz",
        "postalCode": "04523"
      },
      {
        "name": "Neukieritzsch, Deutzen",
        "postalCode": "04575"
      },
      {
        "name": "Rodewisch",
        "postalCode": "08228"
      },
      {
        "name": "Zwickau",
        "postalCode": "08062"
      },
      {
        "name": "Stollberg/Erzgeb.",
        "postalCode": "09366"
      },
      {
        "name": "Mockrehna",
        "postalCode": "04862"
      },
      {
        "name": "Dresden",
        "postalCode": "01157"
      },
      {
        "name": "Dresden",
        "postalCode": "01069"
      },
      {
        "name": "Sohland a. d. Spree",
        "postalCode": "02689"
      },
      {
        "name": "Görlitz",
        "postalCode": "02827"
      },
      {
        "name": "Netzschkau, Limbach",
        "postalCode": "08491"
      },
      {
        "name": "Leipzig",
        "postalCode": "04209"
      },
      {
        "name": "Leipzig",
        "postalCode": "04356"
      },
      {
        "name": "Leipzig",
        "postalCode": "04357"
      },
      {
        "name": "Lößnitz",
        "postalCode": "08294"
      },
      {
        "name": "Ehrenfriedersdorf",
        "postalCode": "09427"
      },
      {
        "name": "Döbeln, Großweitzschen u.a.",
        "postalCode": "04720"
      },
      {
        "name": "Eppendorf",
        "postalCode": "09575"
      },
      {
        "name": "Bobritzsch",
        "postalCode": "09627"
      },
      {
        "name": "Dresden",
        "postalCode": "01127"
      },
      {
        "name": "Großharthau, Frankenthal",
        "postalCode": "01909"
      },
      {
        "name": "Beiersdorf, Oppach",
        "postalCode": "02736"
      },
      {
        "name": "Leipzig",
        "postalCode": "04158"
      },
      {
        "name": "Leipzig",
        "postalCode": "04105"
      },
      {
        "name": "Böhlen",
        "postalCode": "04564"
      },
      {
        "name": "Leipzig",
        "postalCode": "04315"
      },
      {
        "name": "Bockau",
        "postalCode": "08324"
      },
      {
        "name": "Johanngeorgenstadt",
        "postalCode": "08349"
      },
      {
        "name": "Hohndorf",
        "postalCode": "09394"
      },
      {
        "name": "Claußnitz",
        "postalCode": "09236"
      },
      {
        "name": "Klingenberg",
        "postalCode": "01774"
      },
      {
        "name": "Dorfhain",
        "postalCode": "01738"
      },
      {
        "name": "Dresden",
        "postalCode": "01127"
      },
      {
        "name": "Dresden",
        "postalCode": "01219"
      },
      {
        "name": "Dresden",
        "postalCode": "01277"
      },
      {
        "name": "Hoyerswerda",
        "postalCode": "02977"
      },
      {
        "name": "Cunewalde",
        "postalCode": "02733"
      },
      {
        "name": "Krauschwitz, Weißkeißel",
        "postalCode": "02957"
      },
      {
        "name": "Rietschen",
        "postalCode": "02956"
      },
      {
        "name": "Oybin",
        "postalCode": "02797"
      },
      {
        "name": "Plauen",
        "postalCode": "08523"
      },
      {
        "name": "Neukirchen/Pleiße",
        "postalCode": "08459"
      },
      {
        "name": "Leipzig",
        "postalCode": "04277"
      },
      {
        "name": "Muldenhammer",
        "postalCode": "08262"
      },
      {
        "name": "Stützengrün",
        "postalCode": "08328"
      },
      {
        "name": "Eibenstock",
        "postalCode": "08309"
      },
      {
        "name": "Waldenburg",
        "postalCode": "08396"
      },
      {
        "name": "Wurzen",
        "postalCode": "04808"
      },
      {
        "name": "Grünhain-Beierfeld",
        "postalCode": "08344"
      },
      {
        "name": "Drebach",
        "postalCode": "09430"
      },
      {
        "name": "Großrückerswalde",
        "postalCode": "09518"
      },
      {
        "name": "Lommatzsch",
        "postalCode": "01623"
      },
      {
        "name": "Riesa",
        "postalCode": "01589"
      },
      {
        "name": "Halsbrücke",
        "postalCode": "09633"
      },
      {
        "name": "Altenberg",
        "postalCode": "01773"
      },
      {
        "name": "Altenberg",
        "postalCode": "01778"
      },
      {
        "name": "Großschönau",
        "postalCode": "02799"
      },
      {
        "name": "Krauschwitz, Weißkeißel",
        "postalCode": "02957"
      },
      {
        "name": "Jonsdorf",
        "postalCode": "02796"
      },
      {
        "name": "Markneukirchen",
        "postalCode": "08258"
      },
      {
        "name": "Schönheide",
        "postalCode": "08304"
      },
      {
        "name": "Taucha",
        "postalCode": "04425"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09114"
      },
      {
        "name": "Waldheim",
        "postalCode": "04736"
      },
      {
        "name": "Grünhainichen",
        "postalCode": "09579"
      },
      {
        "name": "Königsbrück u.a.",
        "postalCode": "01936"
      },
      {
        "name": "Dresden",
        "postalCode": "01465"
      },
      {
        "name": "Zittau",
        "postalCode": "02788"
      },
      {
        "name": "Rothenburg/O.L.",
        "postalCode": "02929"
      },
      {
        "name": "Leipzig",
        "postalCode": "04205"
      },
      {
        "name": "Reichenbach/Vogtl.",
        "postalCode": "08468"
      },
      {
        "name": "Kirchberg",
        "postalCode": "08107"
      },
      {
        "name": "Zwönitz",
        "postalCode": "08297"
      },
      {
        "name": "Mittweida, Kriebstein",
        "postalCode": "09648"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09131"
      },
      {
        "name": "Belgern-Schildau",
        "postalCode": "04874"
      },
      {
        "name": "Roßwein",
        "postalCode": "04741"
      },
      {
        "name": "Glashütte",
        "postalCode": "01768"
      },
      {
        "name": "Bannewitz",
        "postalCode": "01728"
      },
      {
        "name": "Weißenberg, Hochkirch u.a.",
        "postalCode": "02627"
      },
      {
        "name": "Zittau u.a.",
        "postalCode": "02763"
      },
      {
        "name": "Görlitz",
        "postalCode": "02828"
      },
      {
        "name": "Kirschkau, Pausa-Mühltroff",
        "postalCode": "07919"
      },
      {
        "name": "Leipzig",
        "postalCode": "04275"
      },
      {
        "name": "Lichtentanne",
        "postalCode": "08115"
      },
      {
        "name": "Leipzig",
        "postalCode": "04347"
      },
      {
        "name": "Leipzig",
        "postalCode": "04299"
      },
      {
        "name": "Crinitzberg",
        "postalCode": "08147"
      },
      {
        "name": "Lauter-Bernsbach",
        "postalCode": "08315"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09224"
      },
      {
        "name": "Oberwiesenthal",
        "postalCode": "09484"
      },
      {
        "name": "Pockau-Lengefeld (Lengefeld)",
        "postalCode": "09514"
      },
      {
        "name": "Brand-Erbisdorf, Großhartmannsdorf",
        "postalCode": "09618"
      },
      {
        "name": "Weißenborn, Oberschöna",
        "postalCode": "09600"
      },
      {
        "name": "Stolpen, Dürrröhrsdorf-Dittersbach",
        "postalCode": "01833"
      },
      {
        "name": "Burkau",
        "postalCode": "01906"
      },
      {
        "name": "Weißenberg, Hochkirch u.a.",
        "postalCode": "02627"
      },
      {
        "name": "Ebersbach-Neugersdorf",
        "postalCode": "02727"
      },
      {
        "name": "Moritzburg",
        "postalCode": "01468"
      },
      {
        "name": "Leipzig",
        "postalCode": "04207"
      },
      {
        "name": "Leipzig",
        "postalCode": "04279"
      },
      {
        "name": "Eilenburg u.a.",
        "postalCode": "04838"
      },
      {
        "name": "Machern",
        "postalCode": "04827"
      },
      {
        "name": "Torgau, Dreiheide",
        "postalCode": "04860"
      },
      {
        "name": "Crottendorf",
        "postalCode": "09474"
      },
      {
        "name": "Annaberg-Buchholz, Mildenau",
        "postalCode": "09456"
      },
      {
        "name": "Bad Schandau",
        "postalCode": "01814"
      },
      {
        "name": "Kirschkau, Pausa-Mühltroff",
        "postalCode": "07919"
      },
      {
        "name": "Pausa-Mühltroff",
        "postalCode": "07952"
      },
      {
        "name": "Plauen, Rößnitz",
        "postalCode": "08527"
      },
      {
        "name": "Groitzsch",
        "postalCode": "04539"
      },
      {
        "name": "Mühlau",
        "postalCode": "09241"
      },
      {
        "name": "Jahnsdorf",
        "postalCode": "09387"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09117"
      },
      {
        "name": "Leisnig",
        "postalCode": "04703"
      },
      {
        "name": "Niederwiesa",
        "postalCode": "09577"
      },
      {
        "name": "Riesa",
        "postalCode": "01587"
      },
      {
        "name": "Dorfchemnitz, Mulda, Sayda",
        "postalCode": "09619"
      },
      {
        "name": "Freital",
        "postalCode": "01705"
      },
      {
        "name": "Dresden",
        "postalCode": "01465"
      },
      {
        "name": "Wittichenau",
        "postalCode": "02997"
      },
      {
        "name": "Löbau, Kottmar u.a.",
        "postalCode": "02708"
      },
      {
        "name": "Schöneck/Vogtl.",
        "postalCode": "08261"
      },
      {
        "name": "Leipzig",
        "postalCode": "04317"
      },
      {
        "name": "Leipzig",
        "postalCode": "04318"
      },
      {
        "name": "Leipzig",
        "postalCode": "04316"
      },
      {
        "name": "Schneeberg",
        "postalCode": "08289"
      },
      {
        "name": "Callenberg, Hohenstein-Ernstthal, Bernsdorf",
        "postalCode": "09337"
      },
      {
        "name": "Röhrsdorf",
        "postalCode": "09247"
      },
      {
        "name": "Frankenberg",
        "postalCode": "09669"
      },
      {
        "name": "Zschopau",
        "postalCode": "09434"
      },
      {
        "name": "Pockau-Lengefeld (Pockau)",
        "postalCode": "09509"
      },
      {
        "name": "Dresden",
        "postalCode": "01097"
      },
      {
        "name": "Dresden",
        "postalCode": "01326"
      },
      {
        "name": "Dresden",
        "postalCode": "01169"
      },
      {
        "name": "Dresden",
        "postalCode": "01159"
      },
      {
        "name": "Kreischa",
        "postalCode": "01731"
      },
      {
        "name": "Dresden",
        "postalCode": "01259"
      },
      {
        "name": "Dresden",
        "postalCode": "01324"
      },
      {
        "name": "Pöhl",
        "postalCode": "08543"
      },
      {
        "name": "Leipzig",
        "postalCode": "04179"
      },
      {
        "name": "Regis-Breitingen",
        "postalCode": "04565"
      },
      {
        "name": "Leipzig",
        "postalCode": "04289"
      },
      {
        "name": "Leipzig",
        "postalCode": "04329"
      },
      {
        "name": "Naunhof",
        "postalCode": "04683"
      },
      {
        "name": "Niederfrohna",
        "postalCode": "09243"
      },
      {
        "name": "Niederwürschnitz",
        "postalCode": "09399"
      },
      {
        "name": "Burgstädt",
        "postalCode": "09217"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09228"
      },
      {
        "name": "Dahlen",
        "postalCode": "04774"
      },
      {
        "name": "Zschopau, Gornau",
        "postalCode": "09405"
      },
      {
        "name": "Rosenbach",
        "postalCode": "08539"
      },
      {
        "name": "Adorf",
        "postalCode": "08626"
      },
      {
        "name": "Bergen",
        "postalCode": "08239"
      },
      {
        "name": "Hirschfeld",
        "postalCode": "08144"
      },
      {
        "name": "Geithain",
        "postalCode": "04643"
      },
      {
        "name": "Limbach-Oberfrohna",
        "postalCode": "09212"
      },
      {
        "name": "Neukirchen/Erzgeb.",
        "postalCode": "09221"
      },
      {
        "name": "Geringswalde",
        "postalCode": "09326"
      },
      {
        "name": "Wermsdorf",
        "postalCode": "04779"
      },
      {
        "name": "Gelenau/Erzgeb.",
        "postalCode": "09423"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09126"
      },
      {
        "name": "Leubsdorf, Gornau, Augustusburg",
        "postalCode": "09573"
      },
      {
        "name": "Börnichen, Gornau",
        "postalCode": "09437"
      },
      {
        "name": "Marienberg",
        "postalCode": "09496"
      },
      {
        "name": "Strehla",
        "postalCode": "01616"
      },
      {
        "name": "Großenhain, Ebersbach u.a.",
        "postalCode": "01561"
      },
      {
        "name": "Meißen",
        "postalCode": "01662"
      },
      {
        "name": "Bernsdorf",
        "postalCode": "02994"
      },
      {
        "name": "Hohnstein",
        "postalCode": "01848"
      },
      {
        "name": "Spreetal, Elsterheide",
        "postalCode": "02979"
      },
      {
        "name": "Neukirch/Lausitz",
        "postalCode": "01904"
      },
      {
        "name": "Sebnitz",
        "postalCode": "01855"
      },
      {
        "name": "Wilthen",
        "postalCode": "02681"
      },
      {
        "name": "Dippoldiswalde",
        "postalCode": "01744"
      },
      {
        "name": "Dresden",
        "postalCode": "01069"
      },
      {
        "name": "Neuensalz",
        "postalCode": "08541"
      },
      {
        "name": "Leipzig",
        "postalCode": "04249"
      },
      {
        "name": "Leipzig",
        "postalCode": "04129"
      },
      {
        "name": "Dommitzsch",
        "postalCode": "04880"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09116"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09120"
      },
      {
        "name": "Schlettau",
        "postalCode": "09487"
      },
      {
        "name": "Mügeln",
        "postalCode": "04769"
      },
      {
        "name": "Gröditz, Wülknitz, Röderaue",
        "postalCode": "01609"
      },
      {
        "name": "Frauenstein",
        "postalCode": "09623"
      },
      {
        "name": "Hermsdorf/Erzgeb.",
        "postalCode": "01776"
      },
      {
        "name": "Dresden",
        "postalCode": "01307"
      },
      {
        "name": "Dresden",
        "postalCode": "01328"
      },
      {
        "name": "Lauta",
        "postalCode": "02991"
      },
      {
        "name": "Coswig",
        "postalCode": "01640"
      },
      {
        "name": "Rabenau",
        "postalCode": "01734"
      },
      {
        "name": "Arnsdorf b. Dresden",
        "postalCode": "01477"
      },
      {
        "name": "Kamenz",
        "postalCode": "01917"
      },
      {
        "name": "Markersdorf, Neißeaue u.a.",
        "postalCode": "02829"
      },
      {
        "name": "Görlitz",
        "postalCode": "02826"
      },
      {
        "name": "Markranstädt",
        "postalCode": "04420"
      },
      {
        "name": "Leipzig",
        "postalCode": "04109"
      },
      {
        "name": "Glauchau",
        "postalCode": "08371"
      },
      {
        "name": "Kitzscher",
        "postalCode": "04567"
      },
      {
        "name": "Bad Lausick",
        "postalCode": "04651"
      },
      {
        "name": "Bennewitz, Machern",
        "postalCode": "04828"
      },
      {
        "name": "Trebsen/Mulde",
        "postalCode": "04687"
      },
      {
        "name": "Oschatz",
        "postalCode": "04758"
      },
      {
        "name": "Weischlitz u.a.",
        "postalCode": "08538"
      },
      {
        "name": "Plauen",
        "postalCode": "08529"
      },
      {
        "name": "Bad Elster",
        "postalCode": "08645"
      },
      {
        "name": "Langenbernsdorf",
        "postalCode": "08428"
      },
      {
        "name": "Neumark",
        "postalCode": "08496"
      },
      {
        "name": "Langenweißbach, Wildenfels",
        "postalCode": "08134"
      },
      {
        "name": "St. Egidien",
        "postalCode": "09356"
      },
      {
        "name": "Belgern-Schildau",
        "postalCode": "04889"
      },
      {
        "name": "Hartha",
        "postalCode": "04746"
      },
      {
        "name": "Wiesa",
        "postalCode": "09488"
      },
      {
        "name": "Ostrau",
        "postalCode": "04749"
      },
      {
        "name": "Weißenborn, Oberschöna",
        "postalCode": "09600"
      },
      {
        "name": "Reinsberg",
        "postalCode": "09634"
      },
      {
        "name": "Käbschütztal, Klipphausen, Diera-Zehren",
        "postalCode": "01665"
      },
      {
        "name": "Dresden",
        "postalCode": "01217"
      },
      {
        "name": "Ottendorf-Okrilla",
        "postalCode": "01458"
      },
      {
        "name": "Weißwasser, Boxberg",
        "postalCode": "02943"
      },
      {
        "name": "Neusalza-Spremberg",
        "postalCode": "02742"
      },
      {
        "name": "Zwenkau",
        "postalCode": "04442"
      },
      {
        "name": "Zwickau",
        "postalCode": "08066"
      },
      {
        "name": "Colditz",
        "postalCode": "04680"
      },
      {
        "name": "Oberlungwitz",
        "postalCode": "09353"
      },
      {
        "name": "Breitenbrunn/Erzgeb.",
        "postalCode": "08359"
      },
      {
        "name": "Burkhardtsdorf",
        "postalCode": "09235"
      },
      {
        "name": "Weinböhla",
        "postalCode": "01689"
      },
      {
        "name": "Dresden",
        "postalCode": "01187"
      },
      {
        "name": "Dresden",
        "postalCode": "01189"
      },
      {
        "name": "Liebstadt",
        "postalCode": "01825"
      },
      {
        "name": "Bahretal",
        "postalCode": "01819"
      },
      {
        "name": "Bautzen",
        "postalCode": "02625"
      },
      {
        "name": "Oderwitz",
        "postalCode": "02791"
      },
      {
        "name": "Bernstadt a. d. Eigen",
        "postalCode": "02748"
      },
      {
        "name": "Leipzig",
        "postalCode": "04107"
      },
      {
        "name": "Ellefeld",
        "postalCode": "08236"
      },
      {
        "name": "Rötha",
        "postalCode": "04571"
      },
      {
        "name": "Zwickau",
        "postalCode": "08058"
      },
      {
        "name": "Meerane",
        "postalCode": "08393"
      },
      {
        "name": "Bad Düben",
        "postalCode": "04849"
      },
      {
        "name": "Remse",
        "postalCode": "08373"
      },
      {
        "name": "Lichtenstein",
        "postalCode": "09350"
      },
      {
        "name": "Taura b. Burgstädt",
        "postalCode": "09249"
      },
      {
        "name": "Geyer",
        "postalCode": "09468"
      },
      {
        "name": "Auerbach",
        "postalCode": "09392"
      },
      {
        "name": "Bad Brambach",
        "postalCode": "08648"
      },
      {
        "name": "Leipzig",
        "postalCode": "04159"
      },
      {
        "name": "Auerbach/Vogtl.",
        "postalCode": "08209"
      },
      {
        "name": "Leipzig",
        "postalCode": "04349"
      },
      {
        "name": "Schlema",
        "postalCode": "08301"
      },
      {
        "name": "Hartmannsdorf",
        "postalCode": "09232"
      },
      {
        "name": "Amtsberg",
        "postalCode": "09439"
      },
      {
        "name": "Flöha",
        "postalCode": "09557"
      },
      {
        "name": "Riesa",
        "postalCode": "01591"
      },
      {
        "name": "Wilsdruff",
        "postalCode": "01723"
      },
      {
        "name": "Tharandt u.a.",
        "postalCode": "01737"
      },
      {
        "name": "Dorfhain",
        "postalCode": "01738"
      },
      {
        "name": "Göda",
        "postalCode": "02633"
      },
      {
        "name": "Sebnitz",
        "postalCode": "01855"
      },
      {
        "name": "Oelsnitz",
        "postalCode": "08606"
      },
      {
        "name": "Elsterberg",
        "postalCode": "07985"
      },
      {
        "name": "Lunzenau",
        "postalCode": "09328"
      },
      {
        "name": "Lichtenau",
        "postalCode": "09244"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09113"
      },
      {
        "name": "Zeithain",
        "postalCode": "01619"
      },
      {
        "name": "Plauen",
        "postalCode": "08525"
      },
      {
        "name": "Mylau",
        "postalCode": "08499"
      },
      {
        "name": "Falkenstein/Vogtl.",
        "postalCode": "08223"
      },
      {
        "name": "Aue",
        "postalCode": "08280"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09119"
      },
      {
        "name": "Jöhstadt",
        "postalCode": "09477"
      },
      {
        "name": "Nossen",
        "postalCode": "01683"
      },
      {
        "name": "Reinsberg",
        "postalCode": "09629"
      },
      {
        "name": "Neuhausen/Erzgeb.",
        "postalCode": "09544"
      },
      {
        "name": "Radeburg",
        "postalCode": "01471"
      },
      {
        "name": "Dresden",
        "postalCode": "01109"
      },
      {
        "name": "Dresden",
        "postalCode": "01239"
      },
      {
        "name": "Dresden",
        "postalCode": "01309"
      },
      {
        "name": "Dresden",
        "postalCode": "01257"
      },
      {
        "name": "Bad Gottleuba-Berggießhübel",
        "postalCode": "01816"
      },
      {
        "name": "Königstein/Sächs.Schw.",
        "postalCode": "01824"
      },
      {
        "name": "Königswartha",
        "postalCode": "02699"
      },
      {
        "name": "Herrnhut",
        "postalCode": "02747"
      },
      {
        "name": "Plauen",
        "postalCode": "08523"
      },
      {
        "name": "Schkeuditz",
        "postalCode": "04435"
      },
      {
        "name": "Lengenfeld",
        "postalCode": "08485"
      },
      {
        "name": "Rackwitz",
        "postalCode": "04519"
      },
      {
        "name": "Leipzig",
        "postalCode": "04177"
      },
      {
        "name": "Klingenthal/Sa.",
        "postalCode": "08248"
      },
      {
        "name": "Leipzig",
        "postalCode": "04288"
      },
      {
        "name": "Frohburg",
        "postalCode": "04654"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09122"
      },
      {
        "name": "Großschirma",
        "postalCode": "09603"
      },
      {
        "name": "Lichtenberg/Erzgeb.",
        "postalCode": "09638"
      },
      {
        "name": "Nünchritz, Glaubitz",
        "postalCode": "01612"
      },
      {
        "name": "Dresden",
        "postalCode": "01257"
      },
      {
        "name": "Radeberg, Wachau",
        "postalCode": "01454"
      },
      {
        "name": "Pirna, Struppen, Dohma",
        "postalCode": "01796"
      },
      {
        "name": "Wehlen",
        "postalCode": "01829"
      },
      {
        "name": "Krauschwitz, Weißkeißel",
        "postalCode": "02957"
      },
      {
        "name": "Crimmitschau",
        "postalCode": "08451"
      },
      {
        "name": "Leipzig",
        "postalCode": "04157"
      },
      {
        "name": "Zwickau",
        "postalCode": "08056"
      },
      {
        "name": "Penig",
        "postalCode": "09322"
      },
      {
        "name": "Schwarzenberg/Erzgeb.",
        "postalCode": "08340"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09117"
      },
      {
        "name": "Thum",
        "postalCode": "09419"
      },
      {
        "name": "Torgau",
        "postalCode": "04861"
      },
      {
        "name": "Freiberg",
        "postalCode": "09599"
      },
      {
        "name": "Dresden",
        "postalCode": "01156"
      },
      {
        "name": "Radebeul",
        "postalCode": "01445"
      },
      {
        "name": "Heidenau",
        "postalCode": "01809"
      },
      {
        "name": "Dresden",
        "postalCode": "01237"
      },
      {
        "name": "Schleife",
        "postalCode": "02959"
      },
      {
        "name": "Weißwasser, Boxberg",
        "postalCode": "02943"
      },
      {
        "name": "Hähnichen, Horka, Kodersdorf",
        "postalCode": "02923"
      },
      {
        "name": "Markkleeberg",
        "postalCode": "04416"
      },
      {
        "name": "Brandis",
        "postalCode": "04821"
      },
      {
        "name": "Lugau/Erzgeb.",
        "postalCode": "09385"
      },
      {
        "name": "Sehma",
        "postalCode": "09465"
      },
      {
        "name": "Börnichen, Gornau",
        "postalCode": "09437"
      },
      {
        "name": "Oederan",
        "postalCode": "09569"
      },
      {
        "name": "Dresden",
        "postalCode": "01139"
      },
      {
        "name": "Elstra, Oßling u.a.",
        "postalCode": "01920"
      },
      {
        "name": "Großröhrsdorf, Bretnig-Hauswalde",
        "postalCode": "01900"
      },
      {
        "name": "Lohsa",
        "postalCode": "02999"
      },
      {
        "name": "Großschönau",
        "postalCode": "02779"
      },
      {
        "name": "Reichenbach, Vierkirchen",
        "postalCode": "02894"
      },
      {
        "name": "Plauen",
        "postalCode": "08523"
      },
      {
        "name": "Werdau",
        "postalCode": "08412"
      },
      {
        "name": "Steinberg",
        "postalCode": "08237"
      },
      {
        "name": "Leipzig",
        "postalCode": "04319"
      },
      {
        "name": "Borsdorf",
        "postalCode": "04451"
      },
      {
        "name": "Brandis",
        "postalCode": "04824"
      },
      {
        "name": "Oelsnitz/Erzgebirge",
        "postalCode": "09376"
      },
      {
        "name": "Rochlitz",
        "postalCode": "09306"
      },
      {
        "name": "Arzberg, Beilrode",
        "postalCode": "04886"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09127"
      },
      {
        "name": "Dresden",
        "postalCode": "01187"
      },
      {
        "name": "Dresden",
        "postalCode": "01067"
      },
      {
        "name": "Dresden",
        "postalCode": "01129"
      },
      {
        "name": "Dresden",
        "postalCode": "01108"
      },
      {
        "name": "Lohmen",
        "postalCode": "01847"
      },
      {
        "name": "Bischofswerda u.a.",
        "postalCode": "01877"
      },
      {
        "name": "Neustadt i. Sa.",
        "postalCode": "01844"
      },
      {
        "name": "Leutersdorf, Spitzkunnersdorf",
        "postalCode": "02794"
      },
      {
        "name": "Olbersdorf",
        "postalCode": "02785"
      },
      {
        "name": "Leipzig",
        "postalCode": "04178"
      },
      {
        "name": "Fraureuth",
        "postalCode": "08427"
      },
      {
        "name": "Leipzig",
        "postalCode": "04229"
      },
      {
        "name": "Leipzig",
        "postalCode": "04155"
      },
      {
        "name": "Leipzig",
        "postalCode": "04103"
      },
      {
        "name": "Gersdorf",
        "postalCode": "09355"
      },
      {
        "name": "Raschau",
        "postalCode": "08352"
      },
      {
        "name": "Thalheim/Erzgebirge",
        "postalCode": "09380"
      },
      {
        "name": "Gornsdorf",
        "postalCode": "09390"
      },
      {
        "name": "Riesa, Stauchitz, Hirschstein",
        "postalCode": "01594"
      },
      {
        "name": "Seiffen/Erzgeb.",
        "postalCode": "09548"
      },
      {
        "name": "Pulsnitz",
        "postalCode": "01896"
      },
      {
        "name": "Großdubrau, Malschwitz",
        "postalCode": "02694"
      },
      {
        "name": "Bad Muskau, Groß Düben, Gablenz",
        "postalCode": "02953"
      },
      {
        "name": "Niesky, Hohendubrau u.a.",
        "postalCode": "02906"
      },
      {
        "name": "Zwickau",
        "postalCode": "08060"
      },
      {
        "name": "Leipzig",
        "postalCode": "04328"
      },
      {
        "name": "Borna",
        "postalCode": "04552"
      },
      {
        "name": "Mülsen",
        "postalCode": "08132"
      },
      {
        "name": "Reinsdorf",
        "postalCode": "08141"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09123"
      },
      {
        "name": "Bärenstein",
        "postalCode": "09471"
      },
      {
        "name": "Großolbersdorf",
        "postalCode": "09432"
      },
      {
        "name": "Olbernhau, Pfaffroda, Heidersdorf",
        "postalCode": "09526"
      },
      {
        "name": "Großenhain",
        "postalCode": "01558"
      },
      {
        "name": "Hartmannsdorf-Reichenau",
        "postalCode": "01762"
      },
      {
        "name": "Doberschau-Gaußig, Großpostwitz, Obergurig",
        "postalCode": "02692"
      },
      {
        "name": "Seifhennersdorf",
        "postalCode": "02782"
      },
      {
        "name": "Kottmar",
        "postalCode": "02739"
      },
      {
        "name": "Jößnitz",
        "postalCode": "08547"
      },
      {
        "name": "Delitzsch, Krostitz u.a.",
        "postalCode": "04509"
      },
      {
        "name": "Klingenthal",
        "postalCode": "08267"
      },
      {
        "name": "Zwickau",
        "postalCode": "08064"
      },
      {
        "name": "Wilkau-Haßlau",
        "postalCode": "08112"
      },
      {
        "name": "Grimma",
        "postalCode": "04668"
      },
      {
        "name": "Hartenstein",
        "postalCode": "08118"
      },
      {
        "name": "Scheibenberg",
        "postalCode": "09481"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09112"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09111"
      },
      {
        "name": "Chemnitz",
        "postalCode": "09128"
      },
      {
        "name": "Hainichen, Rossau, Striegistal",
        "postalCode": "09661"
      },
      {
        "name": "Wolkenstein",
        "postalCode": "09429"
      },
      {
        "name": "Dresden",
        "postalCode": "01099"
      },
      {
        "name": "Dresden",
        "postalCode": "01279"
      },
      {
        "name": "Ebersbach-Neugersdorf",
        "postalCode": "02730"
      }
    ],
    "15": 
    [
      {
        "name": "Magdeburg",
        "postalCode": "39114"
      },
      {
        "name": "Hettstedt, Endorf",
        "postalCode": "06333"
      },
      {
        "name": "Hötensleben, Völpke, Ottleben u.a.",
        "postalCode": "39393"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06862"
      },
      {
        "name": "Sandersdorf-Brehna",
        "postalCode": "06794"
      },
      {
        "name": "Wittenberg",
        "postalCode": "06889"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06128"
      },
      {
        "name": "Zeitz, Gutenborn u.a.",
        "postalCode": "06712"
      },
      {
        "name": "Sandersdorf-Brehna",
        "postalCode": "06792"
      },
      {
        "name": "Gräfenhainichen",
        "postalCode": "06772"
      },
      {
        "name": "Querfurt, Obhausen, Mücheln u.a.",
        "postalCode": "06268"
      },
      {
        "name": "Eisleben",
        "postalCode": "06295"
      },
      {
        "name": "Staßfurt",
        "postalCode": "39446"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39108"
      },
      {
        "name": "Teutschenthal",
        "postalCode": "06179"
      },
      {
        "name": "Südharz, Berga",
        "postalCode": "06536"
      },
      {
        "name": "Erxleben, Nordgermersleben u.a.",
        "postalCode": "39343"
      },
      {
        "name": "Hedersleben",
        "postalCode": "06458"
      },
      {
        "name": "Seeland",
        "postalCode": "06464"
      },
      {
        "name": "Langenstein, Derenburg",
        "postalCode": "38895"
      },
      {
        "name": "Sangerhausen",
        "postalCode": "06526"
      },
      {
        "name": "Gardelegen",
        "postalCode": "39638"
      },
      {
        "name": "Börde-Hakel",
        "postalCode": "39448"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39122"
      },
      {
        "name": "Burg",
        "postalCode": "39288"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06124"
      },
      {
        "name": "Coswig (Anhalt)",
        "postalCode": "06868"
      },
      {
        "name": "Kemberg",
        "postalCode": "06901"
      },
      {
        "name": "Wernigerode",
        "postalCode": "38879"
      },
      {
        "name": "Wernigerode, Nordharz",
        "postalCode": "38855"
      },
      {
        "name": "Oebisfelde",
        "postalCode": "39646"
      },
      {
        "name": "Braunsbedra",
        "postalCode": "06242"
      },
      {
        "name": "Güterglück, Lindau, Deetz u.a.",
        "postalCode": "39264"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06112"
      },
      {
        "name": "Sandau",
        "postalCode": "39524"
      },
      {
        "name": "Oberharz am Brocken",
        "postalCode": "38899"
      },
      {
        "name": "Schraplau, Farnstädt",
        "postalCode": "06279"
      },
      {
        "name": "Möckern, Schermen, Nedlitz u.a.",
        "postalCode": "39291"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06842"
      },
      {
        "name": "Bitterfeld-Wolfen",
        "postalCode": "06803"
      },
      {
        "name": "Bitterfeld-Wolfen",
        "postalCode": "06808"
      },
      {
        "name": "Oschersleben (Bode)",
        "postalCode": "39387"
      },
      {
        "name": "Haldensleben, Flechtingen, Bülstringen u.a.",
        "postalCode": "39345"
      },
      {
        "name": "Arnstein",
        "postalCode": "06456"
      },
      {
        "name": "Allstedt",
        "postalCode": "06542"
      },
      {
        "name": "Mansfeld",
        "postalCode": "06343"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06110"
      },
      {
        "name": "Aken (Elbe)",
        "postalCode": "06385"
      },
      {
        "name": "Hohenmölsen",
        "postalCode": "06679"
      },
      {
        "name": "Oranienbaum-Wörlitz",
        "postalCode": "06785"
      },
      {
        "name": "Coswig (Anhalt)",
        "postalCode": "06869"
      },
      {
        "name": "Gräfenhainichen",
        "postalCode": "06773"
      },
      {
        "name": "Bismark",
        "postalCode": "39629"
      },
      {
        "name": "Tangerhütte u.a.",
        "postalCode": "39517"
      },
      {
        "name": "Freyburg, Balgstädt",
        "postalCode": "06632"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39114"
      },
      {
        "name": "Beetzendorf, Rohrberg, Jübar",
        "postalCode": "38489"
      },
      {
        "name": "Huy",
        "postalCode": "38838"
      },
      {
        "name": "Oberharz am Brocken",
        "postalCode": "38877"
      },
      {
        "name": "Kelbra (Kyffhäuser)",
        "postalCode": "06537"
      },
      {
        "name": "Schwanebeck, Gröningen, Kroppenstedt",
        "postalCode": "39397"
      },
      {
        "name": "Quedlinburg, Ballenstedt",
        "postalCode": "06485"
      },
      {
        "name": "Harsleben",
        "postalCode": "38829"
      },
      {
        "name": "Börde-Hakel",
        "postalCode": "39448"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39104"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39126"
      },
      {
        "name": "Barby",
        "postalCode": "39249"
      },
      {
        "name": "Ballenstedt, Harzgerode",
        "postalCode": "06493"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39112"
      },
      {
        "name": "Karsdorf",
        "postalCode": "06638"
      },
      {
        "name": "Salzatal",
        "postalCode": "06198"
      },
      {
        "name": "Tangermünde",
        "postalCode": "39590"
      },
      {
        "name": "Schkopau",
        "postalCode": "06258"
      },
      {
        "name": "Milower Land, Schollene, Nennhausen u.a.",
        "postalCode": "14715"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06842"
      },
      {
        "name": "Gräfenhainichen",
        "postalCode": "06772"
      },
      {
        "name": "Hettstedt, Endorf",
        "postalCode": "06333"
      },
      {
        "name": "Seeland",
        "postalCode": "06466"
      },
      {
        "name": "Köthen",
        "postalCode": "06366"
      },
      {
        "name": "Droyßig, Wetterzeube",
        "postalCode": "06722"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06114"
      },
      {
        "name": "Klostermansfeld, Benndorf",
        "postalCode": "06308"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39110"
      },
      {
        "name": "Barleben",
        "postalCode": "39179"
      },
      {
        "name": "Ilberstedt",
        "postalCode": "06408"
      },
      {
        "name": "Gardelegen",
        "postalCode": "39649"
      },
      {
        "name": "Hecklingen",
        "postalCode": "39444"
      },
      {
        "name": "Ilsenburg, Nordharz",
        "postalCode": "38871"
      },
      {
        "name": "Harbke, Sommersdorf, Wefensleben, Ummendorf, Eilsleben",
        "postalCode": "39365"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06116"
      },
      {
        "name": "Wittenberg",
        "postalCode": "06888"
      },
      {
        "name": "Hettstedt, Endorf",
        "postalCode": "06333"
      },
      {
        "name": "Nienburg (Saale)",
        "postalCode": "06429"
      },
      {
        "name": "Schönebeck",
        "postalCode": "39218"
      },
      {
        "name": "Calbe, Rosenburg u.a.",
        "postalCode": "39240"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06126"
      },
      {
        "name": "Arendsee",
        "postalCode": "39619"
      },
      {
        "name": "Halberstadt",
        "postalCode": "38820"
      },
      {
        "name": "Bad Dürrenberg",
        "postalCode": "06231"
      },
      {
        "name": "Raguhn-Jeßnitz",
        "postalCode": "06779"
      },
      {
        "name": "Bad Schmiedeberg",
        "postalCode": "06905"
      },
      {
        "name": "Wittenberg",
        "postalCode": "06888"
      },
      {
        "name": "Querfurt, Obhausen, Mücheln u.a.",
        "postalCode": "06268"
      },
      {
        "name": "Hettstedt, Endorf",
        "postalCode": "06333"
      },
      {
        "name": "Alsleben/Saale, Plötzkau",
        "postalCode": "06425"
      },
      {
        "name": "Bad Lauchstädt",
        "postalCode": "06246"
      },
      {
        "name": "Biederitz, Gerwisch, Menz u.a.",
        "postalCode": "39175"
      },
      {
        "name": "Güterglück, Lindau, Deetz u.a.",
        "postalCode": "39264"
      },
      {
        "name": "Wanzleben-Börde",
        "postalCode": "39164"
      },
      {
        "name": "Seeland",
        "postalCode": "06469"
      },
      {
        "name": "Dähre, Diesdorf, Wallstawe",
        "postalCode": "29413"
      },
      {
        "name": "Salzwedel",
        "postalCode": "29410"
      },
      {
        "name": "Loburg, Leitzkau",
        "postalCode": "39279"
      },
      {
        "name": "Genthin, Hohenseeden, Zabakuck u.a.",
        "postalCode": "39307"
      },
      {
        "name": "Sandersdorf-Brehna",
        "postalCode": "06796"
      },
      {
        "name": "Zahna-Elster",
        "postalCode": "06895"
      },
      {
        "name": "Bismark",
        "postalCode": "39628"
      },
      {
        "name": "Güsten",
        "postalCode": "39439"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39128"
      },
      {
        "name": "Wallhausen, Blankenheim",
        "postalCode": "06528"
      },
      {
        "name": "Südharz, Berga",
        "postalCode": "06536"
      },
      {
        "name": "Kabelsketal",
        "postalCode": "06184"
      },
      {
        "name": "Raguhn-Jeßnitz",
        "postalCode": "06800"
      },
      {
        "name": "Bad Bibra, Finne u.a.",
        "postalCode": "06647"
      },
      {
        "name": "Erxleben, Nordgermersleben u.a.",
        "postalCode": "39343"
      },
      {
        "name": "Staßfurt",
        "postalCode": "39443"
      },
      {
        "name": "Stendal",
        "postalCode": "39576"
      },
      {
        "name": "Schwanebeck, Gröningen, Kroppenstedt",
        "postalCode": "39397"
      },
      {
        "name": "Badersleben u.a.",
        "postalCode": "38836"
      },
      {
        "name": "Querfurt, Obhausen, Mücheln u.a.",
        "postalCode": "06268"
      },
      {
        "name": "Sülzetal",
        "postalCode": "39171"
      },
      {
        "name": "Seegebiet Mansfelder Land",
        "postalCode": "06317"
      },
      {
        "name": "Naumburg",
        "postalCode": "06618"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39114"
      },
      {
        "name": "Merseburg",
        "postalCode": "06217"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06108"
      },
      {
        "name": "Havelberg",
        "postalCode": "39539"
      },
      {
        "name": "Annaburg",
        "postalCode": "06925"
      },
      {
        "name": "Oberharz am Brocken",
        "postalCode": "38875"
      },
      {
        "name": "Bad Bibra, Finne u.a.",
        "postalCode": "06647"
      },
      {
        "name": "Wallhausen, Blankenheim",
        "postalCode": "06528"
      },
      {
        "name": "Laucha an der Unstrut",
        "postalCode": "06636"
      },
      {
        "name": "Petersberg",
        "postalCode": "06193"
      },
      {
        "name": "Mücheln",
        "postalCode": "06255"
      },
      {
        "name": "Rätzlingen, Wegenstedt, Calvörde, Böddensell u.a.",
        "postalCode": "39359"
      },
      {
        "name": "Wegeleben",
        "postalCode": "38828"
      },
      {
        "name": "Osterwieck",
        "postalCode": "38835"
      },
      {
        "name": "Weferlingen, Behnsdorf, Belsdorf u.a.",
        "postalCode": "39356"
      },
      {
        "name": "Ballenstedt, Harzgerode",
        "postalCode": "06493"
      },
      {
        "name": "Weißenfels, Stößen",
        "postalCode": "06667"
      },
      {
        "name": "Lützen",
        "postalCode": "06686"
      },
      {
        "name": "Bitterfeld-Wolfen",
        "postalCode": "06766"
      },
      {
        "name": "Muldestausee",
        "postalCode": "06774"
      },
      {
        "name": "Welsleben, Biere, Eickendorf u.a.",
        "postalCode": "39221"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39114"
      },
      {
        "name": "Klötze, Apenburg-Winterfeld",
        "postalCode": "38486"
      },
      {
        "name": "Gardelegen",
        "postalCode": "39638"
      },
      {
        "name": "Elbe-Parey",
        "postalCode": "39317"
      },
      {
        "name": "Zeitz",
        "postalCode": "06711"
      },
      {
        "name": "Kuhfelde",
        "postalCode": "29416"
      },
      {
        "name": "Nebra, Kaiserpfalz",
        "postalCode": "06642"
      },
      {
        "name": "Helbra",
        "postalCode": "06311"
      },
      {
        "name": "Osterburg, Altmärkische Höhe",
        "postalCode": "39606"
      },
      {
        "name": "Seehausen, Werben, Leppin u.a.",
        "postalCode": "39615"
      },
      {
        "name": "Weißenfels, Stößen",
        "postalCode": "06667"
      },
      {
        "name": "Frankleben",
        "postalCode": "06259"
      },
      {
        "name": "Leuna",
        "postalCode": "06237"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06844"
      },
      {
        "name": "Börde-Hakel",
        "postalCode": "39448"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06132"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06130"
      },
      {
        "name": "Landsberg",
        "postalCode": "06188"
      },
      {
        "name": "Zörbig",
        "postalCode": "06780"
      },
      {
        "name": "Roitzsch, Petersroda",
        "postalCode": "06809"
      },
      {
        "name": "Eichenbarleben, Irxleben, Niederndodeleben u.a.",
        "postalCode": "39167"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39118"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39114"
      },
      {
        "name": "Zerbst/Anhalt",
        "postalCode": "39261"
      },
      {
        "name": "Wolmirstedt u.a.",
        "postalCode": "39326"
      },
      {
        "name": "Lanitz-Hassel-Tal, Molauer Land",
        "postalCode": "06628"
      },
      {
        "name": "Mücheln/ Geiseltal",
        "postalCode": "06249"
      },
      {
        "name": "Goldbeck, Arneburg u.a.",
        "postalCode": "39596"
      },
      {
        "name": "Falkenstein",
        "postalCode": "06463"
      },
      {
        "name": "Aschersleben",
        "postalCode": "06449"
      },
      {
        "name": "Falkenstein",
        "postalCode": "06543"
      },
      {
        "name": "Haldensleben",
        "postalCode": "39340"
      },
      {
        "name": "Eckartsberga",
        "postalCode": "06648"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39124"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06122"
      },
      {
        "name": "Weißenfels",
        "postalCode": "06688"
      },
      {
        "name": "Bitterfeld-Wolfen",
        "postalCode": "06749"
      },
      {
        "name": "Wittenberg",
        "postalCode": "06886"
      },
      {
        "name": "Blankenburg, Oberharz am Brocken",
        "postalCode": "38889"
      },
      {
        "name": "Ballenstedt, Harzgerode",
        "postalCode": "06493"
      },
      {
        "name": "Quedlinburg",
        "postalCode": "06484"
      },
      {
        "name": "Kalbe",
        "postalCode": "39624"
      },
      {
        "name": "Jerichow",
        "postalCode": "39319"
      },
      {
        "name": "Elsteraue",
        "postalCode": "06729"
      },
      {
        "name": "Südliches Anhalt, Köthen",
        "postalCode": "06388"
      },
      {
        "name": "Südliches Anhalt u.a.",
        "postalCode": "06369"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06120"
      },
      {
        "name": "Egeln, Borne, Wolmirsleben u.a.",
        "postalCode": "39435"
      },
      {
        "name": "Staßfurt",
        "postalCode": "39418"
      },
      {
        "name": "Bernburg (Saale)",
        "postalCode": "06406"
      },
      {
        "name": "Rochau",
        "postalCode": "39579"
      },
      {
        "name": "Schönebeck (Elbe)",
        "postalCode": "39217"
      },
      {
        "name": "Seeland",
        "postalCode": "06467"
      },
      {
        "name": "Teuchern",
        "postalCode": "06682"
      },
      {
        "name": "Halle/ Saale",
        "postalCode": "06118"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06847"
      },
      {
        "name": "Elsteraue",
        "postalCode": "06729"
      },
      {
        "name": "Hergisdorf",
        "postalCode": "06313"
      },
      {
        "name": "Gerbstedt",
        "postalCode": "06347"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39116"
      },
      {
        "name": "Könnern",
        "postalCode": "06420"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39114"
      },
      {
        "name": "Biederitz, Gerwisch, Menz u.a.",
        "postalCode": "39175"
      },
      {
        "name": "Schönebeck (Elbe)",
        "postalCode": "39217"
      },
      {
        "name": "Thale, Blankenburg",
        "postalCode": "06502"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06849"
      },
      {
        "name": "Jessen (Elster)",
        "postalCode": "06917"
      },
      {
        "name": "Tangerhütte u.a.",
        "postalCode": "39517"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39130"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39120"
      },
      {
        "name": "Magdeburg",
        "postalCode": "39106"
      },
      {
        "name": "Meineweh, Osterfeld",
        "postalCode": "06721"
      },
      {
        "name": "Südharz, Berga",
        "postalCode": "06536"
      },
      {
        "name": "Allstedt",
        "postalCode": "06542"
      },
      {
        "name": "Südliches Anhalt u.a.",
        "postalCode": "06369"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06861"
      },
      {
        "name": "Freyburg, Balgstädt",
        "postalCode": "06632"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06846"
      },
      {
        "name": "Dessau-Roßlau",
        "postalCode": "06862"
      },
      {
        "name": "Nienburg (Saale)",
        "postalCode": "06429"
      },
      {
        "name": "Gommern, Dannigkow",
        "postalCode": "39245"
      },
      {
        "name": "Osternienburger Land",
        "postalCode": "06386"
      },
      {
        "name": "Halberstadt, Groß Quenstedt",
        "postalCode": "38822"
      },
      {
        "name": "Oebisfelde",
        "postalCode": "39646"
      },
      {
        "name": "Ballenstedt, Harzgerode",
        "postalCode": "06493"
      }
    ],
    "16":
    [
  {
    "name": "Treffurt/Ifta",
    "postalCode": "99830"
  },
  {
    "name": "Mihla",
    "postalCode": "99826"
  },
  {
    "name": "Suhl, Marisfeld, Rohr u.a.",
    "postalCode": "98530"
  },
  {
    "name": "Ebeleben",
    "postalCode": "99713"
  },
  {
    "name": "Neuengönna u.a.",
    "postalCode": "07778"
  },
  {
    "name": "Ranis",
    "postalCode": "07389"
  },
  {
    "name": "Schleiz",
    "postalCode": "07907"
  },
  {
    "name": "Steinach",
    "postalCode": "96523"
  },
  {
    "name": "Bad Tennstedt",
    "postalCode": "99955"
  },
  {
    "name": "Rockhausen, Klettbach",
    "postalCode": "99102"
  },
  {
    "name": "Berga/Elster",
    "postalCode": "07980"
  },
  {
    "name": "Geisa",
    "postalCode": "36419"
  },
  {
    "name": "Bad Langensalza",
    "postalCode": "99947"
  },
  {
    "name": "Waltershausen",
    "postalCode": "99880"
  },
  {
    "name": "Suhl, Marisfeld, Rohr u.a.",
    "postalCode": "98530"
  },
  {
    "name": "Suhl, Marisfeld, Rohr u.a.",
    "postalCode": "98530"
  },
  {
    "name": "Gera",
    "postalCode": "07551"
  },
  {
    "name": "Krölpa",
    "postalCode": "07387"
  },
  {
    "name": "Veilsdorf",
    "postalCode": "98669"
  },
  {
    "name": "Arnstadt",
    "postalCode": "99338"
  },
  {
    "name": "Biberau, Masserberg",
    "postalCode": "98666"
  },
  {
    "name": "Erfurt",
    "postalCode": "99087"
  },
  {
    "name": "Ellrich",
    "postalCode": "99755"
  },
  {
    "name": "Tanna",
    "postalCode": "07922"
  },
  {
    "name": "Gera",
    "postalCode": "07548"
  },
  {
    "name": "Berga/Elster",
    "postalCode": "07980"
  },
  {
    "name": "Nesse-Apfelstädt, Nottleben",
    "postalCode": "99192"
  },
  {
    "name": "Kyffhäuserland",
    "postalCode": "99707"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Jena",
    "postalCode": "07749"
  },
  {
    "name": "Udestedt, Mönchenholzhausen u.a.",
    "postalCode": "99198"
  },
  {
    "name": "Saalfeld/Saale",
    "postalCode": "07318"
  },
  {
    "name": "Blankenhain",
    "postalCode": "99444"
  },
  {
    "name": "Rastenberg",
    "postalCode": "99636"
  },
  {
    "name": "Stadtlengsfeld, Weilar, Urnshausen",
    "postalCode": "36457"
  },
  {
    "name": "Viernau u.a.",
    "postalCode": "98547"
  },
  {
    "name": "Werther Hohenstein Wolkramshausen",
    "postalCode": "99735"
  },
  {
    "name": "Krayenberggemeinde, Frauensee",
    "postalCode": "36460"
  },
  {
    "name": "Bad Liebenstein",
    "postalCode": "36448"
  },
  {
    "name": "Wutha-Farnroda",
    "postalCode": "99848"
  },
  {
    "name": "Tabarz/ Thür. Wald",
    "postalCode": "99891"
  },
  {
    "name": "Erfurt",
    "postalCode": "99092"
  },
  {
    "name": "Katzhütte",
    "postalCode": "98746"
  },
  {
    "name": "Erfurt",
    "postalCode": "99097"
  },
  {
    "name": "Sömmerda",
    "postalCode": "99610"
  },
  {
    "name": "Kaulsdorf",
    "postalCode": "07338"
  },
  {
    "name": "Gefell",
    "postalCode": "07926"
  },
  {
    "name": "Hermsdorf",
    "postalCode": "07629"
  },
  {
    "name": "Crossen, Heideland u.a.",
    "postalCode": "07613"
  },
  {
    "name": "Buttstädt, Großbrembach, Kleinbrembach",
    "postalCode": "99628"
  },
  {
    "name": "Udestedt, Mönchenholzhausen u.a.",
    "postalCode": "99198"
  },
  {
    "name": "Bad Blankenburg",
    "postalCode": "07422"
  },
  {
    "name": "Gera",
    "postalCode": "07551"
  },
  {
    "name": "Rositz, Starkenberg, Treben",
    "postalCode": "04617"
  },
  {
    "name": "Lehesten",
    "postalCode": "07349"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Ziegenrück",
    "postalCode": "07924"
  },
  {
    "name": "Eisenberg, Gösen, Hainspitz",
    "postalCode": "07607"
  },
  {
    "name": "Suhl",
    "postalCode": "98529"
  },
  {
    "name": "Großvargula, Tonna",
    "postalCode": "99958"
  },
  {
    "name": "Menteroda, Obermehler",
    "postalCode": "99996"
  },
  {
    "name": "Benshausen",
    "postalCode": "98554"
  },
  {
    "name": "Gräfenroda",
    "postalCode": "99330"
  },
  {
    "name": "Arnstadt",
    "postalCode": "99310"
  },
  {
    "name": "Rockhausen, Klettbach",
    "postalCode": "99102"
  },
  {
    "name": "Kranichfeld u.a.",
    "postalCode": "99448"
  },
  {
    "name": "Heiligenstadt",
    "postalCode": "37308"
  },
  {
    "name": "Leinefelde-Worbis, Wingerode, Hausen",
    "postalCode": "37327"
  },
  {
    "name": "Zeulenroda-Triebes, Langenwolschendorf",
    "postalCode": "07937"
  },
  {
    "name": "Nobitz, Göhren, Windischleuba",
    "postalCode": "04603"
  },
  {
    "name": "Stadtroda u.a.",
    "postalCode": "07646"
  },
  {
    "name": "Marksuhl, Krauthausen u.a.",
    "postalCode": "99819"
  },
  {
    "name": "Marksuhl, Krauthausen u.a.",
    "postalCode": "99819"
  },
  {
    "name": "Walldorf",
    "postalCode": "98639"
  },
  {
    "name": "Großfahner, Dachwig u.a.",
    "postalCode": "99100"
  },
  {
    "name": "Gößnitz",
    "postalCode": "04639"
  },
  {
    "name": "Erfurt",
    "postalCode": "99099"
  },
  {
    "name": "Roßleben-Wiehe, Gehofen",
    "postalCode": "06571"
  },
  {
    "name": "Erfurt",
    "postalCode": "99085"
  },
  {
    "name": "Weimar",
    "postalCode": "99425"
  },
  {
    "name": "Hohenleuben",
    "postalCode": "07958"
  },
  {
    "name": "Gerstungen",
    "postalCode": "99834"
  },
  {
    "name": "Creuzburg",
    "postalCode": "99831"
  },
  {
    "name": "Drei Gleichen",
    "postalCode": "99869"
  },
  {
    "name": "Münchenbernsdorf, Schwarzbach, Bocka",
    "postalCode": "07589"
  },
  {
    "name": "Bleicherode",
    "postalCode": "99752"
  },
  {
    "name": "Themar",
    "postalCode": "98660"
  },
  {
    "name": "Luisenthal, Ohrdruf, Wolfis",
    "postalCode": "99885"
  },
  {
    "name": "Pößneck",
    "postalCode": "07381"
  },
  {
    "name": "Lobenstein",
    "postalCode": "07356"
  },
  {
    "name": "Oberweißbach u.a.",
    "postalCode": "98744"
  },
  {
    "name": "Geschwenda",
    "postalCode": "98716"
  },
  {
    "name": "Ilmenau",
    "postalCode": "98694"
  },
  {
    "name": "Remptendorf",
    "postalCode": "07368"
  },
  {
    "name": "Jena",
    "postalCode": "07745"
  },
  {
    "name": "Bilzingsleben Kannawurf Oldisleben",
    "postalCode": "06578"
  },
  {
    "name": "Bad Salzungen",
    "postalCode": "36433"
  },
  {
    "name": "Schlotheim",
    "postalCode": "99994"
  },
  {
    "name": "Kahla",
    "postalCode": "07768"
  },
  {
    "name": "Brahmenau",
    "postalCode": "07554"
  },
  {
    "name": "Mohlsdorf-Teichwolframsdorf",
    "postalCode": "07987"
  },
  {
    "name": "Südeichsfeld",
    "postalCode": "99988"
  },
  {
    "name": "Seebach",
    "postalCode": "99846"
  },
  {
    "name": "Bad Frankenhausen/Kyffhäuser",
    "postalCode": "06567"
  },
  {
    "name": "Kölleda",
    "postalCode": "99625"
  },
  {
    "name": "Probstzella",
    "postalCode": "07330"
  },
  {
    "name": "Zeulenroda-Triebes, Weißendorf",
    "postalCode": "07950"
  },
  {
    "name": "Langenleuba-Niederhain",
    "postalCode": "04618"
  },
  {
    "name": "Jena",
    "postalCode": "07747"
  },
  {
    "name": "Lehnstedt u.a.",
    "postalCode": "99441"
  },
  {
    "name": "Eisfeld, Auengrund",
    "postalCode": "98673"
  },
  {
    "name": "Greußen Clingen Großenehrich",
    "postalCode": "99718"
  },
  {
    "name": "Erfurt",
    "postalCode": "99089"
  },
  {
    "name": "Kaltennordheim",
    "postalCode": "36452"
  },
  {
    "name": "Weida, Harth-Pöllnitz, Wünschendorf",
    "postalCode": "07570"
  },
  {
    "name": "Nobitz, Göhren, Windischleuba",
    "postalCode": "04603"
  },
  {
    "name": "Vacha, Unterbreizbach",
    "postalCode": "36404"
  },
  {
    "name": "Römhild",
    "postalCode": "98630"
  },
  {
    "name": "Großengottern, Heroldishausen",
    "postalCode": "99991"
  },
  {
    "name": "Döschnitz, Sitzendorf, Rohrbach",
    "postalCode": "07429"
  },
  {
    "name": "Tambach-Dietharz/ Thür.",
    "postalCode": "99897"
  },
  {
    "name": "Nordhausen",
    "postalCode": "99734"
  },
  {
    "name": "Oberhof",
    "postalCode": "98559"
  },
  {
    "name": "Schleusegrund",
    "postalCode": "98667"
  },
  {
    "name": "Erfurt",
    "postalCode": "99095"
  },
  {
    "name": "Rockhausen, Klettbach",
    "postalCode": "99102"
  },
  {
    "name": "Bad Sulza",
    "postalCode": "99518"
  },
  {
    "name": "Erfurt",
    "postalCode": "99098"
  },
  {
    "name": "Gräfenthal",
    "postalCode": "98743"
  },
  {
    "name": "Greiz",
    "postalCode": "07973"
  },
  {
    "name": "Berga/Elster",
    "postalCode": "07980"
  },
  {
    "name": "Leinatal",
    "postalCode": "99894"
  },
  {
    "name": "Hildburghausen",
    "postalCode": "98646"
  },
  {
    "name": "Ilmenau",
    "postalCode": "98694"
  },
  {
    "name": "Gebesee",
    "postalCode": "99189"
  },
  {
    "name": "Erfurt",
    "postalCode": "99084"
  },
  {
    "name": "Erfurt",
    "postalCode": "99086"
  },
  {
    "name": "Berga/Elster",
    "postalCode": "07980"
  },
  {
    "name": "Rositz, Starkenberg, Treben",
    "postalCode": "04617"
  },
  {
    "name": "Rosenthal am Rennsteig",
    "postalCode": "07366"
  },
  {
    "name": "Hirschberg",
    "postalCode": "07927"
  },
  {
    "name": "Bad Klosterlausnitz",
    "postalCode": "07639"
  },
  {
    "name": "Bad Köstritz",
    "postalCode": "07586"
  },
  {
    "name": "Sonneberg",
    "postalCode": "96515"
  },
  {
    "name": "Neuhaus-Schierschnitz, Judenbach",
    "postalCode": "96524"
  },
  {
    "name": "Katzhütte",
    "postalCode": "98746"
  },
  {
    "name": "Erfurt",
    "postalCode": "99091"
  },
  {
    "name": "Weißensee",
    "postalCode": "99631"
  },
  {
    "name": "Königsee-Rottenbach u.a.",
    "postalCode": "07426"
  },
  {
    "name": "Erfurt",
    "postalCode": "99096"
  },
  {
    "name": "Jena",
    "postalCode": "07743"
  },
  {
    "name": "Kirschkau, Pausa-Mühltroff",
    "postalCode": "07919"
  },
  {
    "name": "Sollstedt",
    "postalCode": "99759"
  },
  {
    "name": "Suhl",
    "postalCode": "98528"
  },
  {
    "name": "Weimar",
    "postalCode": "99428"
  },
  {
    "name": "Körner, Weinbergen",
    "postalCode": "99998"
  },
  {
    "name": "Langenwetzendorf",
    "postalCode": "07957"
  },
  {
    "name": "Langenleuba-Niederhain",
    "postalCode": "04618"
  },
  {
    "name": "Tambach-Dietharz/ Thür.",
    "postalCode": "99897"
  },
  {
    "name": "Großvargula, Tonna",
    "postalCode": "99958"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Kirschkau, Pausa-Mühltroff",
    "postalCode": "07919"
  },
  {
    "name": "Gera, Zedlitz u.a.",
    "postalCode": "07557"
  },
  {
    "name": "Ronneburg, Braunichswalde, Großenstein u.a.",
    "postalCode": "07580"
  },
  {
    "name": "Rockhausen, Klettbach",
    "postalCode": "99102"
  },
  {
    "name": "Zella-Mehlis",
    "postalCode": "98544"
  },
  {
    "name": "Suhl",
    "postalCode": "98527"
  },
  {
    "name": "Harztor",
    "postalCode": "99768"
  },
  {
    "name": "Suhl",
    "postalCode": "98711"
  },
  {
    "name": "Ilmenau",
    "postalCode": "98694"
  },
  {
    "name": "Stadtilm, Ilmtal",
    "postalCode": "99326"
  },
  {
    "name": "Eisenach",
    "postalCode": "99817"
  },
  {
    "name": "Schwallungen",
    "postalCode": "98590"
  },
  {
    "name": "Vogtei, Kammerforst u.a.",
    "postalCode": "99986"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Bürgel u.a.",
    "postalCode": "07616"
  },
  {
    "name": "Gera",
    "postalCode": "07549"
  },
  {
    "name": "Altenburg",
    "postalCode": "04600"
  },
  {
    "name": "Berka/ Werra",
    "postalCode": "99837"
  },
  {
    "name": "Worbis",
    "postalCode": "37339"
  },
  {
    "name": "Schleusingen u.a.",
    "postalCode": "98553"
  },
  {
    "name": "Großrudestedt, Schloßvippach u.a.",
    "postalCode": "99195"
  },
  {
    "name": "Schwarzburg",
    "postalCode": "07427"
  },
  {
    "name": "Bilzingsleben Kannawurf Oldisleben",
    "postalCode": "06578"
  },
  {
    "name": "Udestedt, Mönchenholzhausen u.a.",
    "postalCode": "99198"
  },
  {
    "name": "Bad Berka u.a.",
    "postalCode": "99438"
  },
  {
    "name": "Wurzbach",
    "postalCode": "07343"
  },
  {
    "name": "Dornburg-Camburg u.a.",
    "postalCode": "07774"
  },
  {
    "name": "Bad Colberg-Heldburg",
    "postalCode": "98663"
  },
  {
    "name": "Unterbreizbach",
    "postalCode": "36414"
  },
  {
    "name": "Tiefenort",
    "postalCode": "36469"
  },
  {
    "name": "Küllstedt",
    "postalCode": "37359"
  },
  {
    "name": "Rodeberg, Dünwald u.a.",
    "postalCode": "99976"
  },
  {
    "name": "Breitungen/Werra",
    "postalCode": "98597"
  },
  {
    "name": "Barchfeld-Immelborn",
    "postalCode": "36456"
  },
  {
    "name": "Floh-Seligenthal",
    "postalCode": "98593"
  },
  {
    "name": "Kaltennordheim",
    "postalCode": "36452"
  },
  {
    "name": "Mühlhausen, Unstruttal",
    "postalCode": "99974"
  },
  {
    "name": "Weimar",
    "postalCode": "99428"
  },
  {
    "name": "Rudolstadt",
    "postalCode": "07407"
  },
  {
    "name": "Gera",
    "postalCode": "07545"
  },
  {
    "name": "Apolda",
    "postalCode": "99510"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Neustadt/ Orla",
    "postalCode": "07806"
  },
  {
    "name": "Steinbach-Hallenberg",
    "postalCode": "98587"
  },
  {
    "name": "Oberhof",
    "postalCode": "98559"
  },
  {
    "name": "Ilmenau",
    "postalCode": "98693"
  },
  {
    "name": "Kindelbrück",
    "postalCode": "99638"
  },
  {
    "name": "Ranis",
    "postalCode": "07389"
  },
  {
    "name": "Meuselwitz",
    "postalCode": "04610"
  },
  {
    "name": "Meiningen",
    "postalCode": "98617"
  },
  {
    "name": "Ruhla",
    "postalCode": "99842"
  },
  {
    "name": "Grabfeld",
    "postalCode": "98631"
  },
  {
    "name": "Erfurt",
    "postalCode": "99094"
  },
  {
    "name": "Gera, Zedlitz u.a.",
    "postalCode": "07557"
  },
  {
    "name": "Schmölln, Altkirchen, Nöbdenitz u.a.",
    "postalCode": "04626"
  },
  {
    "name": "Artern/Unstrut u.a.",
    "postalCode": "06556"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Triptis",
    "postalCode": "07819"
  },
  {
    "name": "Dingelstädt",
    "postalCode": "37351"
  },
  {
    "name": "Schmalkalden",
    "postalCode": "98574"
  },
  {
    "name": "Brotterode-Trusetal",
    "postalCode": "98596"
  },
  {
    "name": "Hörselberg-Hainich",
    "postalCode": "99820"
  },
  {
    "name": "Oberhof",
    "postalCode": "98559"
  },
  {
    "name": "Straußfurt",
    "postalCode": "99634"
  },
  {
    "name": "Frankenblick, Schalkau, Bachfeld",
    "postalCode": "96528"
  },
  {
    "name": "Gera",
    "postalCode": "07552"
  },
  {
    "name": "Gera",
    "postalCode": "07546"
  },
  {
    "name": "Lucka",
    "postalCode": "04613"
  },
  {
    "name": "Schkölen",
    "postalCode": "07619"
  },
  {
    "name": "Arenshausen, Uder u.a.",
    "postalCode": "37318"
  },
  {
    "name": "Niederorschel u.a.",
    "postalCode": "37355"
  },
  {
    "name": "Udestedt, Mönchenholzhausen u.a.",
    "postalCode": "99198"
  },
  {
    "name": "Berlstedt",
    "postalCode": "99439"
  },
  {
    "name": "Weimar",
    "postalCode": "99423"
  },
  {
    "name": "Oberhof",
    "postalCode": "98559"
  },
  {
    "name": "Heringen/ Helme",
    "postalCode": "99765"
  },
  {
    "name": "Elleben, Wachsenburg",
    "postalCode": "99334"
  },
  {
    "name": "Großbreitenbach",
    "postalCode": "98701"
  },
  {
    "name": "Brahmenau",
    "postalCode": "07554"
  },
  {
    "name": "Saalburg-Ebersdorf",
    "postalCode": "07929"
  },
  {
    "name": "Neuengönna u.a.",
    "postalCode": "07778"
  },
  {
    "name": "Auma-Weidatal",
    "postalCode": "07955"
  },
  {
    "name": "Weimar",
    "postalCode": "99427"
  },
  {
    "name": "Unterwellenborn",
    "postalCode": "07333"
  },
  {
    "name": "Sondershausen",
    "postalCode": "99706"
  },
  {
    "name": "Gotha",
    "postalCode": "99867"
  },
  {
    "name": "Erfurt",
    "postalCode": "99090"
  },
  {
    "name": "Neuhaus am Rennweg, Lauscha",
    "postalCode": "98724"
  },
  {
    "name": "Wasungen",
    "postalCode": "98634"
  },
  {
    "name": "Dermbach, Wiesenthal",
    "postalCode": "36466"
  },
  {
    "name": "Am Ohmberg, Sonnenstein",
    "postalCode": "37345"
  },
  {
    "name": "Jena, Bucha, Großpürschütz u.a.",
    "postalCode": "07751"
  },
  {
    "name": "Georgenthal/ Thür. Wald",
    "postalCode": "99887"
  },
  {
    "name": "Heldrungen",
    "postalCode": "06577"
  }
]
  }
}