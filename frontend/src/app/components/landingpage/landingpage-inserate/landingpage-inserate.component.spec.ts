import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageInserateComponent } from './landingpage-inserate.component';

describe('LandingpageInserateComponent', () => {
  let component: LandingpageInserateComponent;
  let fixture: ComponentFixture<LandingpageInserateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [LandingpageInserateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingpageInserateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
