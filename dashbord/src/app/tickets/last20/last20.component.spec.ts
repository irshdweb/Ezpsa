import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Last20Component } from './last20.component';

describe('Last20Component', () => {
  let component: Last20Component;
  let fixture: ComponentFixture<Last20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Last20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Last20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
