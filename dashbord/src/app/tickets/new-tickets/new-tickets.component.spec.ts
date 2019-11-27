import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTicketsComponent } from './new-tickets.component';

describe('NewTicketsComponent', () => {
  let component: NewTicketsComponent;
  let fixture: ComponentFixture<NewTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
