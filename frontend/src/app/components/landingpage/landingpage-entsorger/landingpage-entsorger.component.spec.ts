import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageEntsorgerComponent } from './landingpage-entsorger.component';

describe('LandingpageEntsorgerComponent', () => {
  let component: LandingpageEntsorgerComponent;
  let fixture: ComponentFixture<LandingpageEntsorgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [LandingpageEntsorgerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpageEntsorgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
