import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFillterComponent } from './ticket-fillter.component';

describe('TicketFillterComponent', () => {
  let component: TicketFillterComponent;
  let fixture: ComponentFixture<TicketFillterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFillterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFillterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
