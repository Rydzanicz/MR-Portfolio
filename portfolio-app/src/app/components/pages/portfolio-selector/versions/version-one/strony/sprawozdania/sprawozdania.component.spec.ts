import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprawozdaniaComponent } from './sprawozdania.component';

describe('SprawozdaniaComponent', () => {
  let component: SprawozdaniaComponent;
  let fixture: ComponentFixture<SprawozdaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SprawozdaniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprawozdaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
