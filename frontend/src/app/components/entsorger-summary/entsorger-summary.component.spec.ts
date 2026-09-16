import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntsorgerSummaryComponent } from './entsorger-summary.component';

describe('EntsorgerSummaryComponent', () => {
  let component: EntsorgerSummaryComponent;
  let fixture: ComponentFixture<EntsorgerSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [EntsorgerSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntsorgerSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
