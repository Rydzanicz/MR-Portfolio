import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprawozdanieComponent } from './sprawozdanie.component';

describe('SprawozdanieComponent', () => {
  let component: SprawozdanieComponent;
  let fixture: ComponentFixture<SprawozdanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprawozdanieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprawozdanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
