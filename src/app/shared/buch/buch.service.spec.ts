import { TestBed, inject } from '@angular/core/testing';

import { BuchService } from './buch.service';

describe('BuchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuchService]
    });
  });

  it('should be created', inject([BuchService], (service: BuchService) => {
    expect(service).toBeTruthy();
  }));
});
