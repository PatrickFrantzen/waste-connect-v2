import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogistikprofilComponent } from './logistikprofil.component';

describe('LogistikprofilComponent', () => {
  let component: LogistikprofilComponent;
  let fixture: ComponentFixture<LogistikprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [LogistikprofilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogistikprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
