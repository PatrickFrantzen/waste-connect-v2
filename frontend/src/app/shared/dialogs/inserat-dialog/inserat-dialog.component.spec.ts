import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InseratDialogComponent } from './inserat-dialog.component';

describe('InseratDialogComponent', () => {
  let component: InseratDialogComponent;
  let fixture: ComponentFixture<InseratDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {} } },provideHttpClient()],
    imports: [InseratDialogComponent]
});
    fixture = TestBed.createComponent(InseratDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
