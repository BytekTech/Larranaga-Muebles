import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BytekPointsComponent } from './bytek-points.component';

describe('BytekPointsComponent', () => {
  let component: BytekPointsComponent;
  let fixture: ComponentFixture<BytekPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BytekPointsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BytekPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
