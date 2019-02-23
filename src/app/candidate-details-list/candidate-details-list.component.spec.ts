import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateDetailsListComponent } from './candidate-details-list.component';

describe('CandidateDetailsListComponent', () => {
  let component: CandidateDetailsListComponent;
  let fixture: ComponentFixture<CandidateDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
