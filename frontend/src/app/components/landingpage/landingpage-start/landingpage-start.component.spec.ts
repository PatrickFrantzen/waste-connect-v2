import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageStartComponent } from './landingpage-start.component';

describe('LandingpageStartComponent', () => {
  let component: LandingpageStartComponent;
  let fixture: ComponentFixture<LandingpageStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [LandingpageStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpageStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
