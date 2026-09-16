import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerkzettelComponent } from './merkzettel.component';

describe('MerkzettelComponent', () => {
  let component: MerkzettelComponent;
  let fixture: ComponentFixture<MerkzettelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    imports: [MerkzettelComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MerkzettelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
