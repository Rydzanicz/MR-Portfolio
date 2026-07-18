import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WladzeComponent } from './wladze.component';

describe('WladzeComponent', () => {
  let component: WladzeComponent;
  let fixture: ComponentFixture<WladzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WladzeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WladzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
