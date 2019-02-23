import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchResumeDataComponent } from './batch-resume-data.component';

describe('BatchResumeDataComponent', () => {
  let component: BatchResumeDataComponent;
  let fixture: ComponentFixture<BatchResumeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchResumeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchResumeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
