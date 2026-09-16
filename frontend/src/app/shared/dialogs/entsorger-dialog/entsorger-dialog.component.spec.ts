import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntsorgerDialogComponent } from './entsorger-dialog.component';

describe('EntsorgerDialogComponent', () => {
  let component: EntsorgerDialogComponent;
  let fixture: ComponentFixture<EntsorgerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: { close: () => {} } },provideHttpClient()],
      imports: [EntsorgerDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntsorgerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
