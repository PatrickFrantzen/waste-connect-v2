import { Injectable, inject, signal } from '@angular/core';
import { avv } from 'src/app/components/angebot/avv.model';
import { AvvListeService } from '../../services/avv-liste.service';
import { AvvFilterGruppe, AvvFilterKlassifizierung } from './avvFilter.enum';

export interface AvvEntriesInterface {
  [key: string]: { handeln: boolean; makeln: boolean; befoerdern: boolean; beseitigen: boolean, lagern: boolean, behandeln: boolean, verwerten: boolean, sammeln: boolean };
}

@Injectable({
  providedIn: 'root',
})
export class AvvDialogService {
    avvListe = inject(AvvListeService)

    avv3DialogSignal = signal<avv[]>(this.avvListe.allAVV3)
    avvFilterGruppe = signal<AvvFilterGruppe>(AvvFilterGruppe.None)
    avvFilterKlassifizierung = signal<AvvFilterKlassifizierung>(AvvFilterKlassifizierung.Alle)
    avvChoosenEntries = signal<AvvEntriesInterface>({})
    avvEntriesText = signal<string[]>([])

    changeFilterGruppe(filter: AvvFilterGruppe) {
        this.avvFilterGruppe.set(filter)
    }

    changeFilterKlassifizierung(filter: AvvFilterKlassifizierung) {
        this.avvFilterKlassifizierung.set(filter)
    }

    resetFilter() {
        this.avvFilterGruppe.set(AvvFilterGruppe.None)
        this.avvFilterKlassifizierung.set(AvvFilterKlassifizierung.Alle)
    }
    
}
