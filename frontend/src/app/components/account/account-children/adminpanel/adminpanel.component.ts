import { DatePipe } from '@angular/common';
import { Component, computed, inject, model } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BestellungService } from 'src/app/shared/services/bestellung.service';
import { AdminSignalsService } from 'src/app/signals/account-signals/admin-signals.service';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';
import { InseratSignalsService } from 'src/app/signals/inserat-signals.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
    selector: 'app-adminpanel',
    imports: [DatePipe, MatExpansionModule, MatSlideToggleModule, MatPaginatorModule, MatDialogModule, MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatIconModule],
    templateUrl: './adminpanel.component.html',
    styleUrl: './adminpanel.component.scss'
})
export class AdminpanelComponent {

  pageSizeOptions = [10, 20, 50, 100];

  adminSignalService = inject(AdminSignalsService);
  bestellungsService = inject(BestellungService);
  inseratSignalService = inject(InseratSignalsService);
  dialog = inject(MatDialog);


  filterFreigabeStatusSignal = this.adminSignalService.wasteOftheDayFilter;
  // searchValue = this.adminSignalService.search;
  // filteredInserate = this.adminSignalService.filteredInserate;
  adminInserateSignal = this.adminSignalService.inserateForDisplay;

  reservations = this.adminSignalService.wasteReservationForDisplay;
  filterReservations = this.adminSignalService.filterReservations;

  value = model<string>('');

  filteredInserate = computed(() => {
    return this.adminInserateSignal().filter((inserat) => {
      return inserat.inseratBeschreibung.abfallbezeichnung.toLowerCase().includes(this.value().toLowerCase()) ||
      inserat.inseratErsteller?.firma.toLowerCase().includes(this.value().toLowerCase()) ||
      inserat.inseratErsteller?.ansprechpartner.toLowerCase().includes(this.value().toLowerCase());
    });
  });

  resetFilter() {
    this.value.set('');
  }

  filterFreigabeStatus() {
    this.adminSignalService.wasteOftheDayFilter.set(!this.filterFreigabeStatusSignal());
  }

  changeFreigabe(id: string, reservation: Date) {
    this.adminSignalService.updateWasteReservation(id, reservation);
  }

  deleteInserat(id: string) {
    this.adminSignalService.deleteInserat(id);
  }

  // onChangePage(pageData: PageEvent) {
  //   this.pageSizeSignal.set(pageData.pageSize);
  //   this.currentPageSignal.set(pageData.pageIndex + 1);
  // }

}
