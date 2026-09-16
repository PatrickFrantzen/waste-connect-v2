import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageEntsorgerFindenComponent } from './landingpage-entsorger-finden.component';

describe('LandingpageEntsorgerFindenComponent', () => {
  let component: LandingpageEntsorgerFindenComponent;
  let fixture: ComponentFixture<LandingpageEntsorgerFindenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [LandingpageEntsorgerFindenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpageEntsorgerFindenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
