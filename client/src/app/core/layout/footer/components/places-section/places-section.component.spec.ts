import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesSectionComponent } from './places-section.component';

describe('PlacesSectionComponent', () => {
  let component: PlacesSectionComponent;
  let fixture: ComponentFixture<PlacesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
