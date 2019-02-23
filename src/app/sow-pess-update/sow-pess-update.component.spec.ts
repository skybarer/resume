import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowPessUpdateComponent } from './sow-pess-update.component';

describe('SowPessUpdateComponent', () => {
  let component: SowPessUpdateComponent;
  let fixture: ComponentFixture<SowPessUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowPessUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowPessUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
