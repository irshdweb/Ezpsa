import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSideBarComponent } from './detail-side-bar.component';

describe('DetailSideBarComponent', () => {
  let component: DetailSideBarComponent;
  let fixture: ComponentFixture<DetailSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
