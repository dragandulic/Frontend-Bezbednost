import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedCertificateComponent } from './signed-certificate.component';

describe('SignedCertificateComponent', () => {
  let component: SignedCertificateComponent;
  let fixture: ComponentFixture<SignedCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
