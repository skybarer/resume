import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmuDetailsSearchComponent } from './dmu-details-search.component';

describe('DmuDetailsSearchComponent', () => {
  let component: DmuDetailsSearchComponent;
  let fixture: ComponentFixture<DmuDetailsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmuDetailsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmuDetailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
