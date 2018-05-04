import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfSignedCertificateComponent } from './self-signed-certificate.component';

describe('SelfSignedCertificateComponent', () => {
  let component: SelfSignedCertificateComponent;
  let fixture: ComponentFixture<SelfSignedCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfSignedCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfSignedCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
