import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetResumeDataComponent } from './get-resume-data.component';

describe('GetResumeDataComponent', () => {
  let component: GetResumeDataComponent;
  let fixture: ComponentFixture<GetResumeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetResumeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetResumeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
