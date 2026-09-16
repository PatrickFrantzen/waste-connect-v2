import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntsorgerprofilComponent } from './entsorgerprofil.component';

describe('ProfilprofilComponent', () => {
  let component: EntsorgerprofilComponent;
  let fixture: ComponentFixture<EntsorgerprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
      imports: [EntsorgerprofilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntsorgerprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
