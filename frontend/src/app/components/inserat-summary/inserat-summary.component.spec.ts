import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InseratSummaryComponent } from './inserat-summary.component';

describe('InseratSummaryComponent', () => {
  let component: InseratSummaryComponent;
  let fixture: ComponentFixture<InseratSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [InseratSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InseratSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
