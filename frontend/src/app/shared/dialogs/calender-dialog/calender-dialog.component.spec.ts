import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDialogComponent } from './calender-dialog.component';

describe('CalenderDialogComponent', () => {
  let component: CalenderDialogComponent;
  let fixture: ComponentFixture<CalenderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {} } },provideHttpClient()],
      imports: [CalenderDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalenderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
