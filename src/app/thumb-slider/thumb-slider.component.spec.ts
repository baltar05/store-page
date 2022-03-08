import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbSliderComponent } from './thumb-slider.component';

describe('ThumbSliderComponent', () => {
  let component: ThumbSliderComponent;
  let fixture: ComponentFixture<ThumbSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThumbSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
