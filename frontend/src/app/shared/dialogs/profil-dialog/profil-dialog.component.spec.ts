import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDialogComponent } from './profil-dialog.component';

describe('ProfilDialogComponent', () => {
  let component: ProfilDialogComponent;
  let fixture: ComponentFixture<ProfilDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {} } },provideHttpClient()],
    imports: [ProfilDialogComponent]
});
    fixture = TestBed.createComponent(ProfilDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
