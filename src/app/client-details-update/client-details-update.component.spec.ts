import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsUpdateComponent } from './client-details-update.component';

describe('ClientDetailsUpdateComponent', () => {
  let component: ClientDetailsUpdateComponent;
  let fixture: ComponentFixture<ClientDetailsUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientDetailsUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
