import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailTempleteComponent } from './mail-templete.component';

describe('MailTempleteComponent', () => {
  let component: MailTempleteComponent;
  let fixture: ComponentFixture<MailTempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailTempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
