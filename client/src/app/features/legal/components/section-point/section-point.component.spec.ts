import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPointComponent } from './section-point.component';

describe('SectionPointComponent', () => {
  let component: SectionPointComponent;
  let fixture: ComponentFixture<SectionPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPointComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
