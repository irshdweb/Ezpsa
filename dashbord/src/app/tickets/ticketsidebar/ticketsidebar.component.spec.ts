import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsidebarComponent } from './ticketsidebar.component';

describe('TicketsidebarComponent', () => {
  let component: TicketsidebarComponent;
  let fixture: ComponentFixture<TicketsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
