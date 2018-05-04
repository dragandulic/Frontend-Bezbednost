import { TestBed, inject } from '@angular/core/testing';

import { SelfSignedCertificateService } from './self-signed-certificate.service';

describe('SelfSignedCertificateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelfSignedCertificateService]
    });
  });

  it('should be created', inject([SelfSignedCertificateService], (service: SelfSignedCertificateService) => {
    expect(service).toBeTruthy();
  }));
});
