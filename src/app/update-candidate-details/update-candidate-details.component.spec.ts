import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCandidateDetailsComponent } from './update-candidate-details.component';

describe('UpdateCandidateDetailsComponent', () => {
  let component: UpdateCandidateDetailsComponent;
  let fixture: ComponentFixture<UpdateCandidateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCandidateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
