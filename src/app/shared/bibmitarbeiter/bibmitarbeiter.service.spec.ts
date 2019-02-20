import { TestBed, inject } from '@angular/core/testing';

import { BibmitarbeiterService } from './bibmitarbeiter.service';

describe('BibmitarbeiterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibmitarbeiterService]
    });
  });

  it('should be created', inject([BibmitarbeiterService], (service: BibmitarbeiterService) => {
    expect(service).toBeTruthy();
  }));
});
