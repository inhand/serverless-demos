import { TestBed } from '@angular/core/testing';

import { TermsConditionsService } from './terms-conditions.service';

describe('TermsConditionsService', () => {
  let service: TermsConditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermsConditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return terms text', () => {
    const terms = service.getTermsAndConditions();
    expect(terms.length).toBeGreaterThan(1);
  });
});
