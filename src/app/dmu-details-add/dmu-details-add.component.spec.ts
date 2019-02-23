import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmuDetailsAddComponent } from './dmu-details-add.component';

describe('DmuDetailsAddComponent', () => {
  let component: DmuDetailsAddComponent;
  let fixture: ComponentFixture<DmuDetailsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmuDetailsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmuDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
