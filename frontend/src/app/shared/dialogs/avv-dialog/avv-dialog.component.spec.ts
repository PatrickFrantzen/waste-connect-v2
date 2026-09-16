import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvvDialogComponent } from './avv-dialog.component';

describe('AvvDialogComponent', () => {
  let component: AvvDialogComponent;
  let fixture: ComponentFixture<AvvDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {} } },provideHttpClient()],
      imports: [AvvDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvvDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
