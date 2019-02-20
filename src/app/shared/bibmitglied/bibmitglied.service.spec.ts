import { TestBed, inject } from '@angular/core/testing';

import { BibmitgliedService } from './bibmitglied.service';

describe('BibmitgliedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibmitgliedService]
    });
  });

  it('should be created', inject([BibmitgliedService], (service: BibmitgliedService) => {
    expect(service).toBeTruthy();
  }));
});
