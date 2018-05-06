import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRevocationComponent } from './check-revocation.component';

describe('CheckRevocationComponent', () => {
  let component: CheckRevocationComponent;
  let fixture: ComponentFixture<CheckRevocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRevocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRevocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
