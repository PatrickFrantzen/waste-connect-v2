import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetzteSucheComponent } from './letzte-suche.component';

describe('LetzteSucheComponent', () => {
  let component: LetzteSucheComponent;
  let fixture: ComponentFixture<LetzteSucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    imports: [LetzteSucheComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(LetzteSucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
