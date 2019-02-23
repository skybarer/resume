import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateProfileSummaryAddComponent } from './candidate-profile-summary-add.component';

describe('CandidateProfileSummaryAddComponent', () => {
  let component: CandidateProfileSummaryAddComponent;
  let fixture: ComponentFixture<CandidateProfileSummaryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateProfileSummaryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateProfileSummaryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
