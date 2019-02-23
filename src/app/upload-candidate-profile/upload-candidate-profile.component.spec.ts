import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCandidateProfileComponent } from './upload-candidate-profile.component';

describe('UploadCandidateProfileComponent', () => {
  let component: UploadCandidateProfileComponent;
  let fixture: ComponentFixture<UploadCandidateProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCandidateProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCandidateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
