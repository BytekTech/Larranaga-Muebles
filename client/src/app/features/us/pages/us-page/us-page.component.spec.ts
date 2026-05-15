import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsPageComponent } from './us-page.component';

describe('UsPageComponent', () => {
  let component: UsPageComponent;
  let fixture: ComponentFixture<UsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
