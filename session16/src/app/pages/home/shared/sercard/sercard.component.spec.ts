import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SercardComponent } from './sercard.component';

describe('SercardComponent', () => {
  let component: SercardComponent;
  let fixture: ComponentFixture<SercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
