import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SowPessSearchComponent } from './sow-pess-search.component';

describe('SowPessSearchComponent', () => {
  let component: SowPessSearchComponent;
  let fixture: ComponentFixture<SowPessSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SowPessSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SowPessSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
