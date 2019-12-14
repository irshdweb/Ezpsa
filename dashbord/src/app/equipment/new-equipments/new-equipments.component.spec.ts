import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEquipmentsComponent } from './new-equipments.component';

describe('NewEquipmentsComponent', () => {
  let component: NewEquipmentsComponent;
  let fixture: ComponentFixture<NewEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEquipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
