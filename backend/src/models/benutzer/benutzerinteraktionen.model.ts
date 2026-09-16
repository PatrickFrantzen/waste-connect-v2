
import { InseratNEST } from "src/schemas/inserat.schema";
import { Entsorgerfilter, Inseratfilter } from "./profilfilter.model";
import { Prop } from "@nestjs/mongoose";

export class Benutzerinteraktionen {
    @Prop({type: Inseratfilter, default: {}})
    letzteSuche: Inseratfilter[];

    @Prop({type: Entsorgerfilter, default: {}})
    letzteSucheEntsorger: Entsorgerfilter[];

    //Logistikfilter hinzufügen

    @Prop({type: InseratNEST, default: []})
    merkzettel: InseratNEST[];

}