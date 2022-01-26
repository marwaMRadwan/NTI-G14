import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprojectComponent } from './myproject.component';

describe('MyprojectComponent', () => {
  let component: MyprojectComponent;
  let fixture: ComponentFixture<MyprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
