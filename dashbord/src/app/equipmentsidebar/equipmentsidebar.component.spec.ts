import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsidebarComponent } from './equipmentsidebar.component';

describe('EquipmentsidebarComponent', () => {
  let component: EquipmentsidebarComponent;
  let fixture: ComponentFixture<EquipmentsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
