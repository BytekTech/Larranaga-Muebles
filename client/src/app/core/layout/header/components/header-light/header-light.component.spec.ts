import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLightComponent } from './header-light.component';

describe('HeaderLightComponent', () => {
  let component: HeaderLightComponent;
  let fixture: ComponentFixture<HeaderLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
