import { CommonModule } from "@angular/common";
import { Component, inject, Input } from "@angular/core";
import { InseratNEST } from "../angebot/angebot.model";
import { MatDialog } from "@angular/material/dialog";
import { InseratDialogComponent } from "src/app/shared/dialogs/inserat-dialog/inserat-dialog.component";

@Component({
    selector: 'app-inserat-template',
    imports: [CommonModule],
    templateUrl: './inserat-template.component.html',
    styleUrl: './inserat-template.component.scss'
})

export class InseratTemplateComponent {
    dialog = inject(MatDialog);

    @Input() wasteOfTheDay: boolean = false;
    @Input() inserat!: InseratNEST;


    openInseratDialog(inserat: InseratNEST) {
        this.dialog.open(InseratDialogComponent, {data: inserat, disableClose: true})
      }
}