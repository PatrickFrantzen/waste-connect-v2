import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatCalendar,
  MatCalendarCellClassFunction,
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Inserat, InseratNEST } from 'src/app/components/angebot/angebot.model';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { BestellungService } from '../../services/bestellung.service';
import { Observable, Subscription } from 'rxjs';
import { PreistabelleDialogComponent } from '../preistabelle-dialog/preistabelle-dialog.component';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

@Component({
    selector: 'app-calender-dialog',
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        JsonPipe,
        DatePipe,
    ],
    providers: [provideNativeDateAdapter(), MatNativeDateModule],
    templateUrl: './calender-dialog.component.html',
    styleUrl: './calender-dialog.component.scss'
})
export class CalenderDialogComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { inserat: InseratNEST; text: string; },
    private dialogRef: MatDialogRef<CalenderDialogComponent>,
    private dialog: MatDialog,
    private bestellungsService: BestellungService
  ) {}

  calendar = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  selected: Date | null = null;
  blockedDaysAsDate: Date[] = [];
  filteredDays: string[] = [];
  fehlermeldung = '';
  blockedDays$: Subscription = new Subscription();

  ngOnInit(): void {
    this.blockedDays$ = this.bestellungsService
      .getBlockedDays('waste')
      .subscribe((blockedDays) => {
        this.blockedDaysAsDate = blockedDays.map(blockedDay => {
          const date = new Date(blockedDay.day);
          return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        });
      });
  }


  ngOnDestroy(): void {
    if (this.blockedDays$) {
      this.blockedDays$.unsubscribe();
    }
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const day = cellDate.getDay();
      return day === 1 || day === 20 ? 'blockedDate' : '';
    }
    return '';
  };

  dateFilter = (date: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
      date! >= today &&
      !this.blockedDaysAsDate.some((blockedDay) =>
        this.isSameDay(blockedDay, date!)
      )
    );
  };

  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }

  getDates(type: string, event: MatDatepickerInputEvent<Date>) {
    const startDate = this.calendar.value.start;
    const endDate = this.calendar.value.end;

    if (startDate && endDate) {
      const dates: Date[] = [];
      const currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
      const filteredDates = dates.filter(
        (date) =>
          !this.blockedDaysAsDate.some((blockedDay) =>
            this.isSameDay(blockedDay, date)
          )
      );
      this.filteredDays = filteredDates.map((date) => this.toDateString(date));

      if (this.filteredDays.length > 5) {
        this.filteredDays = this.filteredDays.slice(0, 5);
        this.fehlermeldung =
          'Du hast mehr als 5 freie Tage ausgewählt. Überschüssige Tage werden nicht berücksichtigt.';
      } else {
        this.fehlermeldung = '';
      }
    }
  }

  toDateString(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Monate sind von 0 bis 11
    const day = date.getDate();

    return `${day.toString().padStart(2, '0')}.${month
      .toString()
      .padStart(2, '0')}.${year}`;
  }

  confirm() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {
        inseratID: this.data.inserat._id,
        dates: this.filteredDays,
        text: 'Waste of the Day',
        type: 'waste',
      },
    });
  }

  abbrechen() {
    this.dialogRef.close();
  }

  preistabelle(){
    this.dialog.open(PreistabelleDialogComponent);
  }
}
